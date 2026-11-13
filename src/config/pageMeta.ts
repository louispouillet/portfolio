import type { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscJson, VscMarkdown } from "react-icons/vsc";
import { PAGE_KEYS, type EditorTab, type PageKey } from "./routes";

const SOURCE_FOLDERS = ["louis", "portfolio", "src"];

export type PageMeta = {
  fileName: string;
  icon: IconType;
  iconClassName: string;
};

export const PAGE_META: Record<PageKey, PageMeta> = {
  home: { fileName: "home.tsx", icon: FaReact, iconClassName: "text-[#61DAFB]" },
  about: { fileName: "about.html", icon: FaHtml5, iconClassName: "text-[#E34C26]" },
  projects: { fileName: "projects.js", icon: FaJs, iconClassName: "text-[#F7DF1E]" },
  skills: { fileName: "skills.json", icon: VscJson, iconClassName: "text-[#f71ecc]" },
  experience: { fileName: "experience.ts", icon: SiTypescript, iconClassName: "text-[#3178C6]" },
  contact: { fileName: "contact.css", icon: FaCss3Alt, iconClassName: "text-[#1709ce]" },
};

export const PAGE_LIST = PAGE_KEYS.map((key) => ({ key, ...PAGE_META[key] }));

export const tabMeta = ({ page, slug }: EditorTab): PageMeta =>
  slug === undefined
    ? PAGE_META[page]
    : { fileName: `${slug}.md`, icon: VscMarkdown, iconClassName: "text-[#519ABA]" };

export const tabFolders = ({ page, slug }: EditorTab): string[] =>
  slug === undefined ? SOURCE_FOLDERS : [...SOURCE_FOLDERS, page];
