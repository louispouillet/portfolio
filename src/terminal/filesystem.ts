import { PAGE_META } from "../config/pageMeta";
import { CASE_STUDY_SLUGS, LANGUAGES, PAGE_KEYS, type Language, type PageKey } from "../config/routes";
import { cvFileName, cvPath } from "../config/site";
import { findCaseStudyProject } from "../data/projects";
import {
  aboutContent,
  caseStudyContent,
  contactContent,
  experienceContent,
  homeContent,
  projectsContent,
  servicesContent,
  skillsContent,
} from "./content";
import type { DirectoryNode, FileNode, FsNode, OutputLine } from "./types";

export const HOME_PATH = "/home/louis";
export const HOME_ALIAS = "~";
export const START_PATH = `${HOME_PATH}/portfolio/src`;
const SEPARATOR = "/";
const PARENT = "..";
const CURRENT = ".";

const PAGE_CONTENT: Record<PageKey, (language: Language) => OutputLine[]> = {
  home: homeContent,
  services: servicesContent,
  projects: projectsContent,
  about: aboutContent,
  skills: skillsContent,
  experience: experienceContent,
  contact: contactContent,
};

const binaryFile = (language: Language): OutputLine[] => [
  {
    text: language === "fr" ? "Fichier binaire : utilisez `open` ou `cv` pour le télécharger." : "Binary file: use `open` or `cv` to download it.",
    tone: "muted",
  },
];

const pageFiles: FileNode[] = PAGE_KEYS.map((page) => ({
  kind: "file",
  name: PAGE_META[page].fileName,
  tab: { page },
  content: PAGE_CONTENT[page],
}));

const caseStudyFiles: FileNode[] = CASE_STUDY_SLUGS.flatMap((slug) => {
  const project = findCaseStudyProject(slug);
  if (project === undefined) {
    return [];
  }
  return [{
    kind: "file",
    name: `${slug}.md`,
    tab: { page: "projects", slug },
    content: (language: Language) => caseStudyContent({ project, language }),
  }];
});

const cvFiles: FileNode[] = LANGUAGES.map((language) => ({
  kind: "file",
  name: cvFileName({ language }),
  download: { href: cvPath({ language }), fileName: cvFileName({ language }) },
  content: binaryFile,
}));

export const ROOT: DirectoryNode = {
  kind: "directory",
  name: "",
  children: [{
    kind: "directory",
    name: "home",
    children: [{
      kind: "directory",
      name: "louis",
      children: [
        {
          kind: "directory",
          name: "portfolio",
          children: [{
            kind: "directory",
            name: "src",
            tab: { page: "home" },
            children: [...pageFiles, { kind: "directory", name: "projects", tab: { page: "projects" }, children: caseStudyFiles }],
          }],
        },
        { kind: "directory", name: "cv", children: cvFiles },
      ],
    }],
  }],
};

export const resolvePath = ({ cwd, path }: { cwd: string; path: string }): string => {
  const expanded = path === HOME_ALIAS || path.startsWith(`${HOME_ALIAS}${SEPARATOR}`) ? `${HOME_PATH}${path.slice(HOME_ALIAS.length)}` : path;
  const base = expanded.startsWith(SEPARATOR) ? [] : cwd.split(SEPARATOR).filter(Boolean);
  const segments = expanded.split(SEPARATOR).filter(Boolean).reduce<string[]>((resolved, segment) => {
    if (segment === CURRENT) {
      return resolved;
    }
    if (segment === PARENT) {
      return resolved.slice(0, -1);
    }
    return [...resolved, segment];
  }, base);
  return `${SEPARATOR}${segments.join(SEPARATOR)}`;
};

export const findNode = (absolutePath: string): FsNode | undefined =>
  absolutePath
    .split(SEPARATOR)
    .filter(Boolean)
    .reduce<FsNode | undefined>(
      (node, segment) => (node?.kind === "directory" ? node.children.find((child) => child.name === segment) : undefined),
      ROOT,
    );

export const displayPath = (absolutePath: string): string =>
  absolutePath === HOME_PATH || absolutePath.startsWith(`${HOME_PATH}${SEPARATOR}`)
    ? `${HOME_ALIAS}${absolutePath.slice(HOME_PATH.length)}`
    : absolutePath;

export const nodeLabel = (node: FsNode): string => (node.kind === "directory" ? `${node.name}${SEPARATOR}` : node.name);
