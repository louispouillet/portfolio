import type { ComponentType } from "react";
import type { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import About from "../components/pages/about";
import Contact from "../components/pages/contact";
import Experience from "../components/pages/experience";
import Home from "../components/pages/home";
import Projects from "../components/pages/projects";
import Skills from "../components/pages/skills";
import { PAGE_KEYS, type PageKey } from "./routes";

type PageDefinition = {
  fileName: string;
  icon: IconType;
  iconClassName: string;
  component: ComponentType;
};

export const PAGE_BY_KEY: Record<PageKey, PageDefinition> = {
  home: { fileName: "home.tsx", icon: FaReact, iconClassName: "text-[#61DAFB]", component: Home },
  about: { fileName: "about.html", icon: FaHtml5, iconClassName: "text-[#E34C26]", component: About },
  projects: { fileName: "projects.js", icon: FaJs, iconClassName: "text-[#F7DF1E]", component: Projects },
  skills: { fileName: "skills.json", icon: VscJson, iconClassName: "text-[#f71ecc]", component: Skills },
  experience: { fileName: "experience.ts", icon: SiTypescript, iconClassName: "text-[#3178C6]", component: Experience },
  contact: { fileName: "contact.css", icon: FaCss3Alt, iconClassName: "text-[#1709ce]", component: Contact },
};

export const PAGES = PAGE_KEYS.map((key) => ({ key, ...PAGE_BY_KEY[key] }));
