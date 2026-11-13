import type { ReactNode } from "react";
import { VscSourceControl } from "react-icons/vsc";
import { tabMeta } from "../../config/pageMeta";
import type { EditorTab } from "../../config/routes";

const LANGUAGE_BY_EXTENSION: Record<string, string> = {
  tsx: "TypeScript React",
  ts: "TypeScript",
  js: "JavaScript",
  html: "HTML",
  css: "CSS",
  json: "JSON",
  yaml: "YAML",
  md: "Markdown",
};

const BRANCH_NAME = "main";
const ENCODING = "UTF-8";

const fileLanguage = ({ fileName }: { fileName: string }): string => {
  const extension = fileName.split(".").at(-1) ?? "";
  return LANGUAGE_BY_EXTENSION[extension] ?? "Plain Text";
};

type StatusBarProps = {
  activeTab: EditorTab;
  children?: ReactNode;
};

const StatusBar = ({ activeTab, children }: StatusBarProps) => (
  <footer className="hidden h-6 shrink-0 items-center justify-between border-t border-line bg-bar px-3 font-mono text-[11px] text-muted sm:flex">
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-1"><VscSourceControl aria-hidden="true" />{BRANCH_NAME}</span>
      <span>{ENCODING}</span>
    </div>
    <div className="flex items-center gap-4">
      {children}
      <span>{fileLanguage({ fileName: tabMeta(activeTab).fileName })}</span>
    </div>
  </footer>
);

export default StatusBar;
