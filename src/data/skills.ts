import type { Localized } from "../i18n/types";

export type Skill = {
  name: string;
  level: number;
  color: string;
};

export type SkillGroup = {
  id: string;
  title: Localized;
  skills: Skill[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "languages",
    title: { en: "LANGUAGES", fr: "LANGAGES" },
    skills: [
      { name: "Python", level: 80, color: "#FF6FD8" },
      { name: "JavaScript", level: 75, color: "#FACC14" },
      { name: "TypeScript", level: 70, color: "#39BDF8" },
      { name: "C", level: 88, color: "#A755F7" },
    ],
  },
  {
    id: "backend",
    title: { en: "BACKEND", fr: "BACKEND" },
    skills: [
      { name: "ExpressJS", level: 77, color: "#34D399" },
      { name: "NestJS", level: 68, color: "#6366F1" },
      { name: "FastAPI", level: 60, color: "#39BDF8" },
    ],
  },
  {
    id: "frontend",
    title: { en: "FRONTEND", fr: "FRONTEND" },
    skills: [
      { name: "React (vite)", level: 87, color: "#34D399" },
      { name: "Html", level: 90, color: "#6366F1" },
      { name: "Tailwindcss", level: 85, color: "#39BDF8" },
    ],
  },
  {
    id: "databases",
    title: { en: "DATABASES", fr: "BASES DE DONNÉES" },
    skills: [
      { name: "MySQL", level: 78, color: "#FF6FD8" },
      { name: "PostgreSQL", level: 70, color: "#FACC14" },
      { name: "MongoDB", level: 68, color: "#39BDF8" },
    ],
  },
];
