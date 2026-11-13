import type { Localized, Period } from "../i18n/types";

export type Education = {
  id: string;
  degree: Localized;
  school: string;
  location: Localized;
  period: Period;
  summary: Localized;
};

export const EDUCATION: Education[] = [
  {
    id: "epitech",
    degree: { en: "BACHELOR IN COMPUTER SCIENCE (2nd Year)", fr: "BACHELOR EN INFORMATIQUE (2e année)" },
    school: "Epitech Toulouse",
    location: { en: "France", fr: "France" },
    period: { start: { year: 2025 } },
    summary: {
      en: "// Learning about: Frontend Development, Backend Development, Databases, Python, Machine Learning",
      fr: "// J'apprends : développement frontend, développement backend, bases de données, Python, machine learning",
    },
  },
  {
    id: "42-adelaide",
    degree: {
      en: "PROJECT-BASED SOFTWARE ENGINEERING PROGRAM AT 42",
      fr: "PROGRAMME D'INGÉNIERIE LOGICIELLE PAR PROJETS À 42",
    },
    school: "42 Adelaïde",
    location: { en: "Australia", fr: "Australie" },
    period: { start: { year: 2023 }, end: { year: 2024 } },
    summary: {
      en: "/* Learned: Algorithms, C, Peer to Peer learning */",
      fr: "/* Appris : algorithmique, C, apprentissage entre pairs */",
    },
  },
  {
    id: "high-school",
    degree: { en: "GRADUATED HIGH-SCHOOL", fr: "BACCALAURÉAT" },
    school: "Blaise Pascal Nouméa",
    location: { en: "New Caledonia", fr: "Nouvelle-Calédonie" },
    period: { start: { year: 2020 }, end: { year: 2022 } },
    summary: {
      en: "# Graduated with honors and specialized in mathematics and computer science",
      fr: "# Obtenu avec mention, spécialités mathématiques et informatique",
    },
  },
];
