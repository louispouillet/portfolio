import { LANGUAGES, isLanguage, type Language } from "../config/routes";
import { GITHUB_PROFILE_URL } from "../config/github";
import { cvFileName, cvPath } from "../config/site";
import { CONTACT_LINKS, FULL_NAME } from "../data/contact";
import { PROJECTS } from "../data/projects";
import { translate } from "../i18n/format";
import { contactContent, skillsContent } from "./content";
import { HOME_PATH, START_PATH, displayPath, findNode, nodeLabel, resolvePath } from "./filesystem";
import { TERMINAL_TEXT } from "./messages";
import { parseInput } from "./parser";
import type { Command, CommandContext, CommandResult, OutputLine, TerminalEffect } from "./types";

const HELP_NAME_WIDTH = 10;
const NEOFETCH_LOGO_WIDTH = 16;
const HISTORY_INDEX_WIDTH = 4;
const LANGUAGE_NAMES: Record<Language, string> = { en: "English", fr: "français" };

const lines = (...texts: (string | OutputLine)[]): OutputLine[] => texts.map((text) => (typeof text === "string" ? { text } : text));
const error = (text: string): OutputLine => ({ text, tone: "error" });
const result = (output: OutputLine[], effects: TerminalEffect[] = []): { lines: OutputLine[]; effects: TerminalEffect[] } => ({ lines: output, effects });

const contactHref = (id: string): string | undefined => CONTACT_LINKS.find((link) => link.id === id)?.href;

const OPEN_KEYWORDS: Record<string, () => string | undefined> = {
  github: () => GITHUB_PROFILE_URL,
  linkedin: () => contactHref("linkedin"),
  email: () => contactHref("email"),
};

const cvEffect = (language: Language): TerminalEffect => ({ kind: "download", href: cvPath({ language }), fileName: cvFileName({ language }) });

const NEOFETCH_LOGO = [
  " ┌────────────┐",
  " │   <  /  >  │",
  " │            │",
  " │   louis@   │",
  " │  portfolio │",
  " └────────────┘",
];

const neofetchInfo = (language: Language): OutputLine[] => {
  const isFrench = language === "fr";
  return lines(
    { text: "louis@portfolio", tone: "accent" },
    { text: "───────────────", tone: "muted" },
    `${isFrench ? "Rôle" : "Role"}: ${isFrench ? "Développeur freelance · étudiant à Epitech" : "Freelance developer · Epitech student"}`,
    `${isFrench ? "Lieu" : "Location"}: Toulouse, France`,
    `${isFrench ? "Expérience" : "Experience"}: Sigterm, ${isFrench ? "stage cloud AWS" : "AWS cloud internship"} (2026)`,
    `Focus: AWS serverless, React, ${isFrench ? "automatisation IA" : "AI automation"}`,
    "Stack: Python, TypeScript, AWS, Terraform, React",
    `${isFrench ? "Langues" : "Languages"}: ${isFrench ? "français, anglais" : "French, English"}`,
    "Shell: portfolio-sh 1.0",
  );
};

export const COMMANDS: Command[] = [
  {
    name: "help",
    summary: { en: "list the commands", fr: "liste les commandes" },
    run: ({ language }) => {
      const text = TERMINAL_TEXT[language];
      const rows = COMMANDS.filter((command) => !command.isHidden).map((command) => `  ${command.name.padEnd(HELP_NAME_WIDTH)}${command.summary[language]}`);
      return result(lines({ text: text.helpTitle, tone: "accent" }, ...rows, "", { text: text.helpTip, tone: "muted" }));
    },
  },
  {
    name: "ls",
    summary: { en: "list a directory", fr: "liste un dossier" },
    usage: "ls [path]",
    run: ({ args, cwd, language }) => {
      const target = args.find((arg) => !arg.startsWith("-")) ?? ".";
      const node = findNode(resolvePath({ cwd, path: target }));
      if (node === undefined) {
        return result([error(`ls: ${TERMINAL_TEXT[language].noSuchFile(target)}`)]);
      }
      if (node.kind === "file") {
        return result(lines(node.name));
      }
      return result(node.children.map((child) => ({ text: nodeLabel(child), tone: child.kind === "directory" ? "highlight" : "default" })));
    },
  },
  {
    name: "cd",
    summary: { en: "change directory and open its page", fr: "change de dossier et ouvre sa page" },
    usage: "cd [path]",
    run: ({ args, cwd, language }) => {
      const target = args[0] ?? HOME_PATH;
      const path = resolvePath({ cwd, path: target });
      const node = findNode(path);
      if (node === undefined) {
        return result([error(`cd: ${TERMINAL_TEXT[language].noSuchFile(target)}`)]);
      }
      if (node.kind === "file") {
        return result([error(`cd: ${TERMINAL_TEXT[language].notADirectory(target)}`)]);
      }
      return { ...result([], node.tab ? [{ kind: "navigate", tab: node.tab }] : []), cwd: path };
    },
  },
  {
    name: "pwd",
    summary: { en: "print the current directory", fr: "affiche le dossier courant" },
    run: ({ cwd }) => result(lines(cwd)),
  },
  {
    name: "cat",
    summary: { en: "print a file", fr: "affiche un fichier" },
    usage: "cat <file>",
    run: ({ args, cwd, language }) => {
      const text = TERMINAL_TEXT[language];
      const target = args[0];
      if (target === undefined) {
        return result([error(text.missingOperand("cat"))]);
      }
      const node = findNode(resolvePath({ cwd, path: target }));
      if (node === undefined) {
        return result([error(`cat: ${text.noSuchFile(target)}`)]);
      }
      if (node.kind === "directory") {
        return result([error(`cat: ${text.isADirectory(target)}`)]);
      }
      return result(node.content(language));
    },
  },
  {
    name: "open",
    summary: { en: "open a page, a project, github, linkedin or email", fr: "ouvre une page, un projet, github, linkedin ou email" },
    usage: "open <file|github|linkedin|email>",
    run: ({ args, cwd, language }) => {
      const text = TERMINAL_TEXT[language];
      const target = args[0];
      if (target === undefined) {
        return result([error(text.missingOperand("open"))]);
      }
      const keywordUrl = OPEN_KEYWORDS[target.toLowerCase()]?.();
      if (keywordUrl !== undefined) {
        return result(lines({ text: text.opening(target), tone: "muted" }), [{ kind: "openUrl", url: keywordUrl }]);
      }
      const node = findNode(resolvePath({ cwd, path: target }));
      if (node?.kind === "file" && node.download) {
        return result(lines({ text: text.downloading(node.download.fileName), tone: "muted" }), [{ kind: "download", ...node.download }]);
      }
      if (node?.tab) {
        return result(lines({ text: text.opening(nodeLabel(node)), tone: "muted" }), [{ kind: "navigate", tab: node.tab }]);
      }
      return result([error(node === undefined ? `open: ${text.noSuchFile(target)}` : text.cannotOpen(target))]);
    },
  },
  {
    name: "whoami",
    summary: { en: "who is behind this portfolio", fr: "qui est derrière ce portfolio" },
    run: ({ language }) =>
      result(lines(
        { text: FULL_NAME, tone: "accent" },
        language === "fr"
          ? "Développeur freelance à Toulouse : backends serverless sur AWS, applications React et automatisations IA."
          : "Freelance developer in Toulouse: serverless backends on AWS, React apps and AI automations.",
      )),
  },
  {
    name: "neofetch",
    summary: { en: "system information, portfolio style", fr: "infos système, version portfolio" },
    run: ({ language }) => {
      const info = neofetchInfo(language);
      const rowCount = Math.max(NEOFETCH_LOGO.length, info.length);
      return result(Array.from({ length: rowCount }, (_, index) => ({
        text: `${(NEOFETCH_LOGO[index] ?? "").padEnd(NEOFETCH_LOGO_WIDTH)}  ${info[index]?.text ?? ""}`,
        tone: index === 0 ? "accent" : "default",
      })));
    },
  },
  {
    name: "projects",
    summary: { en: "list the projects", fr: "liste les projets" },
    run: ({ language }) =>
      result(PROJECTS.flatMap((project) => {
        const title = translate({ text: project.title, language });
        const where = project.caseStudy ? `open ${displayPath(`${START_PATH}/projects/${project.id}.md`)}` : project.repositoryUrl ?? "";
        return lines({ text: `${title} · ${project.category[language]}`, tone: "highlight" }, { text: `  ${where}`, tone: "muted" });
      })),
  },
  {
    name: "skills",
    summary: { en: "list the skills", fr: "liste les compétences" },
    run: ({ language }) => result(skillsContent(language)),
  },
  {
    name: "contact",
    summary: { en: "how to reach me", fr: "comment me contacter" },
    run: ({ language }) => result([...contactContent(language), { text: "" }, { text: TERMINAL_TEXT[language].contactTip, tone: "muted" }]),
  },
  {
    name: "cv",
    summary: { en: "download the CV", fr: "télécharge le CV" },
    usage: "cv [fr|en]",
    run: ({ args, language }) => {
      const requested = args[0]?.toLowerCase() ?? language;
      if (!isLanguage(requested)) {
        return result([error(TERMINAL_TEXT[language].usage("cv [fr|en]"))]);
      }
      return result(lines({ text: TERMINAL_TEXT[language].downloading(cvFileName({ language: requested })), tone: "muted" }), [cvEffect(requested)]);
    },
  },
  {
    name: "lang",
    summary: { en: "switch the site language", fr: "change la langue du site" },
    usage: "lang fr|en",
    run: ({ args, language }) => {
      const requested = args[0]?.toLowerCase();
      if (!isLanguage(requested)) {
        return result([error(TERMINAL_TEXT[language].usage(`lang ${LANGUAGES.join("|")}`))]);
      }
      if (requested === language) {
        return result(lines({ text: TERMINAL_TEXT[language].languageUnchanged(LANGUAGE_NAMES[requested]), tone: "muted" }));
      }
      return result(lines({ text: TERMINAL_TEXT[requested].languageSet(LANGUAGE_NAMES[requested]), tone: "success" }), [{ kind: "setLanguage", language: requested }]);
    },
  },
  {
    name: "history",
    summary: { en: "show the command history", fr: "affiche l'historique" },
    run: ({ history }) => result(history.map((entry, index) => ({ text: `${String(index + 1).padStart(HISTORY_INDEX_WIDTH)}  ${entry}` }))),
  },
  {
    name: "clear",
    summary: { en: "clear the terminal", fr: "efface le terminal" },
    run: () => result([], [{ kind: "clear" }]),
  },
  {
    name: "echo",
    summary: { en: "print text", fr: "affiche du texte" },
    run: ({ args }) => result(lines(args.join(" "))),
  },
  {
    name: "date",
    summary: { en: "print the date", fr: "affiche la date" },
    run: ({ language, now }) =>
      result(lines(new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-GB", { dateStyle: "full", timeStyle: "short" }).format(now))),
  },
  {
    name: "exit",
    summary: { en: "close the terminal", fr: "ferme le terminal" },
    run: () => result([], [{ kind: "close" }]),
  },
  { name: "sudo", summary: { en: "", fr: "" }, isHidden: true, run: ({ language }) => result([error(TERMINAL_TEXT[language].sudo)]) },
  { name: "rm", summary: { en: "", fr: "" }, isHidden: true, run: ({ language }) => result([error(TERMINAL_TEXT[language].readOnly)]) },
  ...["vim", "nano", "emacs"].map((name): Command => ({
    name,
    summary: { en: "", fr: "" },
    isHidden: true,
    run: ({ language }) => result(lines({ text: TERMINAL_TEXT[language].noEditor, tone: "muted" })),
  })),
];

export const VISIBLE_COMMAND_NAMES = COMMANDS.filter((command) => !command.isHidden).map((command) => command.name);

export const runCommand = ({ input, cwd, language, history, now }: { input: string } & Omit<CommandContext, "args">): CommandResult => {
  const { name, args } = parseInput(input);
  if (name === "") {
    return { lines: [], effects: [], cwd };
  }
  const command = COMMANDS.find((candidate) => candidate.name === name);
  if (command === undefined) {
    return { lines: [error(TERMINAL_TEXT[language].notFound(name))], effects: [], cwd };
  }
  const output = command.run({ args, cwd, language, history, now });
  return { lines: output.lines, effects: output.effects, cwd: output.cwd ?? cwd };
};
