import type { Localized } from "../i18n/types";
import { PROJECTS, type Project } from "./projects";

export type SkillGroup = {
  id: string;
  title: Localized;
  skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "cloud",
    title: { en: "CLOUD · AWS", fr: "CLOUD · AWS" },
    skills: ["AWS Lambda", "API Gateway", "DynamoDB", "AWS Step Functions", "EventBridge", "Amazon Cognito", "Amazon Bedrock", "S3", "AWS SAM", "Terraform"],
  },
  {
    id: "languages",
    title: { en: "LANGUAGES", fr: "LANGAGES" },
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C"],
  },
  {
    id: "web",
    title: { en: "WEB", fr: "WEB" },
    skills: ["React", "Express", "MongoDB", "Laravel", "OAuth 2.0"],
  },
  {
    id: "data-ai",
    title: { en: "DATA AND AI", fr: "DATA ET IA" },
    skills: ["LLM", "n8n", "Ollama", "scikit-learn", "PyTorch", "pandas"],
  },
  {
    id: "tools",
    title: { en: "TOOLS", fr: "OUTILS" },
    skills: ["GitHub Actions", "Docker", "Gradle", "JUnit"],
  },
];

export const projectsUsing = (skill: string): Project[] => PROJECTS.filter((project) => project.stack.includes(skill));
