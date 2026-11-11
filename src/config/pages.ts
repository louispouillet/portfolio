import type { ComponentType } from "react";
import About from "../components/pages/about";
import Contact from "../components/pages/contact";
import Experience from "../components/pages/experience";
import Home from "../components/pages/home";
import Projects from "../components/pages/projects";
import Skills from "../components/pages/skills";
import type { PageKey } from "./routes";

export const PAGE_COMPONENTS: Record<PageKey, ComponentType> = {
  home: Home,
  about: About,
  projects: Projects,
  skills: Skills,
  experience: Experience,
  contact: Contact,
};
