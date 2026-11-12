import type { Localized } from "../i18n/types";

export type FocusArea = {
  id: string;
  emoji: string;
  label: Localized;
};

export const BIO: Localized = {
  en: "My name is **Louis Pouillet**, and I am a first-year Bachelor's student at {epitech}. I lived in Australia for three years before moving to France in July 2025 to continue my studies, which allowed me to develop a **strong level of English**. In 2022, I successfully completed the {school42} intensive program and joined the school, where I discovered my passion for **algorithms**. I am a **serious and ambitious** person who enjoys learning and taking on new challenges.",
  fr: "Je m'appelle **Louis Pouillet** et je suis en première année de Bachelor à {epitech}. J'ai vécu trois ans en Australie avant de rentrer en France en juillet 2025 pour poursuivre mes études, ce qui m'a permis d'acquérir un **très bon niveau d'anglais**. En 2022, j'ai réussi la piscine de {school42} et intégré l'école, où j'ai découvert ma passion pour l'**algorithmique**. Je suis quelqu'un de **sérieux et ambitieux**, qui aime apprendre et relever de nouveaux défis.",
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: "ai",
    emoji: "👾",
    label: {
      en: "Learning advanced RAG, machine learning and vector databases",
      fr: "Apprendre le RAG avancé, le machine learning et les bases de données vectorielles",
    },
  },
  {
    id: "web",
    emoji: "🌐",
    label: { en: "Building scalable web applications", fr: "Concevoir des applications web évolutives" },
  },
  {
    id: "sport",
    emoji: "🏃🏻‍➡️",
    label: { en: "Gym and Running", fr: "Musculation et course à pied" },
  },
  {
    id: "degree",
    emoji: "🎓",
    label: { en: "Completing my degree at Epitech", fr: "Terminer mon diplôme à Epitech" },
  },
];
