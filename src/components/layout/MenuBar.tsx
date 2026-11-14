import { useState, useRef, useEffect } from "react";

type MenuItem = {
  label: string;
  shortcut?: string;
  onSelect?: () => void;
};

type MenuButtonProps = {
  title: string;
  items: MenuItem[];
};

const toItems = (labels: string[]): MenuItem[] => labels.map((label) => ({ label }));

const MenuButton = ({ title, items }: MenuButtonProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInteractive = items.some((item) => item.onSelect !== undefined);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative inline-block"
      ref={ref}
      aria-hidden={isInteractive ? undefined : true}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        tabIndex={isInteractive ? undefined : -1}
        aria-haspopup={isInteractive ? "menu" : undefined}
        aria-expanded={isInteractive ? open : undefined}
        className="px-3 py-1 rounded hover:bg-hover transition duration-200 cursor-default font-mono text-xs text-soft"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>

      {open && (
        <div role={isInteractive ? "menu" : undefined} className="absolute top-full left-0 mt-1 w-56 py-1 bg-bar text-soft rounded-md border border-line-strong shadow-lg z-50 font-mono text-xs">
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              role={isInteractive ? "menuitem" : undefined}
              tabIndex={isInteractive ? undefined : -1}
              className="flex w-full items-center justify-between gap-4 text-left px-3 py-1.5 hover:bg-hover transition cursor-default"
              onClick={() => {
                setOpen(false);
                item.onSelect?.();
              }}
            >
              <span>{item.label}</span>
              {item.shortcut && <kbd className="font-mono text-[10px] text-muted">{item.shortcut}</kbd>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

type MenuBarProps = {
  onNewTerminal: () => void;
  onToggleTerminal: () => void;
  onRunTask: (command: string) => void;
  onKillTerminal: () => void;
};

const TASK_COMMAND = "neofetch";

const MenuBar = ({ onNewTerminal, onToggleTerminal, onRunTask, onKillTerminal }: MenuBarProps) => {
  return (
    <nav aria-label="Menu" className="flex gap-6 px-1 py-0.5 bg-bar w-full text-soft font-mono border-b border-line">
      <MenuButton title="File" items={toItems(["New File", "Open File...", "Save", "Exit"])} />
      <MenuButton title="Edit" items={toItems(["Undo", "Redo", "Cut", "Copy", "Paste"])} />
      <MenuButton title="View" items={toItems(["Appearance", "Layout", "Explorer"])} />
      <MenuButton
        title="Terminal"
        items={[
          { label: "New Terminal", onSelect: onNewTerminal },
          { label: "Toggle Terminal", shortcut: "⌃`", onSelect: onToggleTerminal },
          { label: `Run Task: ${TASK_COMMAND}`, onSelect: () => onRunTask(TASK_COMMAND) },
          { label: "Kill Terminal", onSelect: onKillTerminal },
        ]}
      />
      <MenuButton title="Help" items={toItems(["Documentation", "About", "Check Updates"])} />
      <MenuButton title="Copilot" items={toItems(["Enable", "Settings", "Feedback"])} />
    </nav>
  );
};

export default MenuBar;
