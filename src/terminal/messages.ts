import type { Localized } from "../i18n/types";

type TerminalText = {
  welcome: string;
  helpTitle: string;
  helpTip: string;
  notFound: (name: string) => string;
  noSuchFile: (path: string) => string;
  notADirectory: (path: string) => string;
  isADirectory: (path: string) => string;
  missingOperand: (command: string) => string;
  cannotOpen: (target: string) => string;
  opening: (target: string) => string;
  downloading: (fileName: string) => string;
  languageSet: (language: string) => string;
  languageUnchanged: (language: string) => string;
  usage: (usage: string) => string;
  caseStudyHint: string;
  contactTip: string;
  sudo: string;
  readOnly: string;
  noEditor: string;
};

export const TERMINAL_TEXT: Localized<TerminalText> = {
  en: {
    welcome: "Welcome to louis@portfolio. Type `help` to get started.",
    helpTitle: "Available commands:",
    helpTip: "Tip: Tab completes commands and paths, ↑ and ↓ browse the history.",
    notFound: (name) => `command not found: ${name}. Type \`help\` to see the commands.`,
    noSuchFile: (path) => `${path}: no such file or directory`,
    notADirectory: (path) => `${path}: not a directory`,
    isADirectory: (path) => `${path}: is a directory`,
    missingOperand: (command) => `${command}: missing operand`,
    cannotOpen: (target) => `open: cannot open ${target}`,
    opening: (target) => `Opening ${target}…`,
    downloading: (fileName) => `Downloading ${fileName}…`,
    languageSet: (language) => `Language set to ${language}.`,
    languageUnchanged: (language) => `The site is already in ${language}.`,
    usage: (usage) => `usage: ${usage}`,
    caseStudyHint: "open",
    contactTip: "Tip: `open github`, `open linkedin` or `open email`.",
    sudo: "louis is not in the sudoers file. This incident will be reported.",
    readOnly: "Permission denied: this portfolio is read only.",
    noEditor: "No editor here, but you can `cat` any file.",
  },
  fr: {
    welcome: "Bienvenue sur louis@portfolio. Tapez `help` pour commencer.",
    helpTitle: "Commandes disponibles :",
    helpTip: "Astuce : Tab complète les commandes et les chemins, ↑ et ↓ parcourent l'historique.",
    notFound: (name) => `commande introuvable : ${name}. Tapez \`help\` pour voir les commandes.`,
    noSuchFile: (path) => `${path} : aucun fichier ou dossier de ce nom`,
    notADirectory: (path) => `${path} : n'est pas un dossier`,
    isADirectory: (path) => `${path} : est un dossier`,
    missingOperand: (command) => `${command} : opérande manquant`,
    cannotOpen: (target) => `open : impossible d'ouvrir ${target}`,
    opening: (target) => `Ouverture de ${target}…`,
    downloading: (fileName) => `Téléchargement de ${fileName}…`,
    languageSet: (language) => `Langue changée : ${language}.`,
    languageUnchanged: (language) => `Le site est déjà en ${language}.`,
    usage: (usage) => `utilisation : ${usage}`,
    caseStudyHint: "open",
    contactTip: "Astuce : `open github`, `open linkedin` ou `open email`.",
    sudo: "louis n'est pas dans le fichier sudoers. Cet incident sera signalé.",
    readOnly: "Permission refusée : ce portfolio est en lecture seule.",
    noEditor: "Pas d'éditeur ici, mais vous pouvez faire `cat` sur n'importe quel fichier.",
  },
};
