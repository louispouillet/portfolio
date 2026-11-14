import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { EditorTab, Language } from "../../config/routes";
import { UI_TEXT } from "../../i18n/ui";
import { runCommand } from "../../terminal/commands";
import { completeInput } from "../../terminal/completion";
import { START_PATH, displayPath } from "../../terminal/filesystem";
import { TERMINAL_TEXT } from "../../terminal/messages";
import type { LineTone, OutputLine, TerminalEffect } from "../../terminal/types";

const TONE_CLASSES: Record<LineTone, string> = {
  default: "text-soft",
  muted: "text-muted",
  error: "text-[#F48771]",
  accent: "text-accent-pink",
  success: "text-accent-teal",
  highlight: "text-highlight",
};

type TerminalEntry = {
  id: number;
  path?: string;
  input?: string;
  lines: OutputLine[];
};

const Prompt = ({ path }: { path: string }) => (
  <span className="shrink-0 whitespace-pre">
    <span className="text-accent-teal">louis@portfolio</span>
    <span className="text-soft">:</span>
    <span className="text-highlight">{path}</span>
    <span className="text-soft">$ </span>
  </span>
);

const triggerDownload = ({ href, fileName }: { href: string; fileName: string }): void => {
  const link = document.createElement("a");
  link.href = href;
  link.download = fileName;
  link.click();
};

const createInitialEntries = ({ language, initialCommand }: { language: Language; initialCommand?: string }): TerminalEntry[] => {
  const welcome: TerminalEntry = { id: 0, lines: [{ text: TERMINAL_TEXT[language].welcome, tone: "muted" }] };
  if (initialCommand === undefined) {
    return [welcome];
  }
  const result = runCommand({ input: initialCommand, cwd: START_PATH, language, history: [], now: new Date() });
  return [welcome, { id: 1, path: displayPath(START_PATH), input: initialCommand, lines: result.lines }];
};

type TerminalPanelProps = {
  language: Language;
  initialCommand?: string;
  onClose: () => void;
  onNavigate: (tab: EditorTab) => void;
  onLanguageChange: (language: Language) => void;
};

const TerminalPanel = ({ language, initialCommand, onClose, onNavigate, onLanguageChange }: TerminalPanelProps) => {
  const text = UI_TEXT[language].common;
  const nextId = useRef(2);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const [entries, setEntries] = useState<TerminalEntry[]>(() => createInitialEntries({ language, initialCommand }));
  const [input, setInput] = useState("");
  const [cwd, setCwd] = useState(START_PATH);
  const [history, setHistory] = useState<string[]>(() => (initialCommand === undefined ? [] : [initialCommand]));
  const [historyCursor, setHistoryCursor] = useState<number | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight });
  }, [entries, suggestions]);

  const applyEffect = (effect: TerminalEffect): void => {
    switch (effect.kind) {
      case "navigate":
        onNavigate(effect.tab);
        break;
      case "setLanguage":
        onLanguageChange(effect.language);
        break;
      case "download":
        triggerDownload(effect);
        break;
      case "openUrl":
        window.open(effect.url, "_blank", "noopener,noreferrer");
        break;
      case "clear":
        setEntries([]);
        break;
      case "close":
        onClose();
        break;
    }
  };

  const submit = (): void => {
    const result = runCommand({ input, cwd, language, history, now: new Date() });
    const id = nextId.current;
    nextId.current += 1;
    const isClear = result.effects.some((effect) => effect.kind === "clear");
    if (!isClear) {
      setEntries((previous) => [...previous, { id, path: displayPath(cwd), input, lines: result.lines }]);
    }
    if (input.trim() !== "") {
      setHistory((previous) => [...previous, input.trim()]);
    }
    setCwd(result.cwd);
    setInput("");
    setHistoryCursor(null);
    setSuggestions([]);
    result.effects.forEach(applyEffect);
  };

  const browseHistory = (direction: -1 | 1): void => {
    if (history.length === 0) {
      return;
    }
    const start = historyCursor ?? history.length;
    const next = start + direction;
    if (next >= history.length) {
      setHistoryCursor(null);
      setInput("");
      return;
    }
    const clamped = Math.max(0, next);
    setHistoryCursor(clamped);
    setInput(history[clamped]);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    } else if (event.key === "Tab") {
      event.preventDefault();
      const completion = completeInput({ input, cwd });
      setInput(completion.value);
      setSuggestions(completion.suggestions);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      browseHistory(-1);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      browseHistory(1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    } else if (event.key.toLowerCase() === "l" && event.ctrlKey) {
      event.preventDefault();
      setEntries([]);
    }
  };

  return (
    <section
      aria-label={text.terminal}
      className="fixed inset-0 z-50 flex flex-col bg-editor font-mono text-[13px] sm:static sm:z-auto sm:h-[40%] sm:min-h-48 sm:shrink-0 sm:border-t sm:border-line"
    >
      <div className="flex h-9 shrink-0 items-center justify-between border-b border-line bg-bar px-3 sm:bg-editor">
        <span className="border-b border-accent-teal pb-1 text-[11px] tracking-wider text-white uppercase">{text.terminal}</span>
        <button type="button" aria-label={text.closeTerminal} onClick={onClose} className="px-2 text-lg leading-none text-muted transition-colors hover:text-white">
          ×
        </button>
      </div>
      <div ref={outputRef} role="log" aria-live="polite" className="min-h-0 flex-1 overflow-y-auto px-4 py-2 leading-relaxed" onClick={() => inputRef.current?.focus()}>
        {entries.map((entry) => (
          <div key={entry.id} className="mb-1">
            {entry.path !== undefined && (
              <p className="flex">
                <Prompt path={entry.path} />
                <span className="break-all text-white">{entry.input}</span>
              </p>
            )}
            {entry.lines.map((line, index) => (
              <p key={index} className={`whitespace-pre-wrap break-words ${TONE_CLASSES[line.tone ?? "default"]}`}>{line.text || " "}</p>
            ))}
          </div>
        ))}
        {suggestions.length > 0 && <p className="whitespace-pre-wrap text-muted">{suggestions.join("    ")}</p>}
        <form
          className="flex items-center"
          onSubmit={(event) => {
            event.preventDefault();
            submit();
          }}
        >
          <Prompt path={displayPath(cwd)} />
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              setSuggestions([]);
            }}
            onKeyDown={handleKeyDown}
            aria-label={text.terminalInput}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className="min-w-0 flex-1 bg-transparent text-white caret-accent-teal outline-none focus-visible:outline-none"
          />
        </form>
      </div>
    </section>
  );
};

export default TerminalPanel;
