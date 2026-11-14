import type { EditorTab, Language } from "../config/routes";
import type { Localized } from "../i18n/types";

export type LineTone = "default" | "muted" | "error" | "accent" | "success" | "highlight";

export type OutputLine = {
  text: string;
  tone?: LineTone;
};

export type TerminalEffect =
  | { kind: "navigate"; tab: EditorTab }
  | { kind: "setLanguage"; language: Language }
  | { kind: "download"; href: string; fileName: string }
  | { kind: "openUrl"; url: string }
  | { kind: "clear" }
  | { kind: "close" };

export type CommandResult = {
  lines: OutputLine[];
  effects: TerminalEffect[];
  cwd: string;
};

export type FileNode = {
  kind: "file";
  name: string;
  tab?: EditorTab;
  download?: { href: string; fileName: string };
  content: (language: Language) => OutputLine[];
};

export type DirectoryNode = {
  kind: "directory";
  name: string;
  tab?: EditorTab;
  children: FsNode[];
};

export type FsNode = FileNode | DirectoryNode;

export type CommandContext = {
  args: string[];
  cwd: string;
  language: Language;
  history: string[];
  now: Date;
};

export type Command = {
  name: string;
  summary: Localized;
  usage?: string;
  isHidden?: boolean;
  run: (context: CommandContext) => Omit<CommandResult, "cwd"> & { cwd?: string };
};
