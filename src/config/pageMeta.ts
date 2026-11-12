import type { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { PAGE_KEYS, type PageKey } from "./routes";

type PageMeta = {
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
