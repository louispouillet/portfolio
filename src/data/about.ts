import type { Localized } from "../i18n/types";

export type FocusArea = {
  id: string;
  emoji: string;
  label: Localized;
};

export const BIO: Localized = {
  en: "My name is **Louis Pouillet**, a second year Bachelor's student at {epitech} and a **freelance developer**. I lived in Australia for three years before moving to France in July 2025, which gave me a **strong level of English**. In 2022, I completed the {school42} intensive program and joined the school, where I discovered my passion for **algorithms**. In summer 2026, I spent three months at **Sigterm** building AWS serverless applications for real clients. I am a **serious and ambitious** person who enjoys taking on new challenges.",
  fr: "Je m'appelle **Louis Pouillet**, je suis en 2e année de Bachelor à {epitech} et **développeur freelance**. J'ai vécu trois ans en Australie avant de rentrer en France en juillet 2025, ce qui m'a donné un **très bon niveau d'anglais**. En 2022, j'ai réussi la piscine de {school42} et intégré l'école, où j'ai découvert ma passion pour l'**algorithmique**. À l'été 2026, j'ai passé trois mois chez **Sigterm** à construire des applications AWS serverless pour de vrais clients. Je suis quelqu'un de **sérieux et ambitieux**, qui aime relever de nouveaux défis.",
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
    label: { en: "Freelance projects: AWS backends, web apps and automation", fr: "Missions freelance : backends AWS, applications web et automatisation" },
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
