import type { IconType } from "react-icons";
import { FaTrainSubway } from "react-icons/fa6";
import { MdSyncLock } from "react-icons/md";
import { TbCherryFilled } from "react-icons/tb";
import { TiSortNumericallyOutline } from "react-icons/ti";
import type { Localized } from "../i18n/types";

export type ProjectAccent = "pink" | "teal";

export type ProjectTier = "featured" | "secondary";

export type ProjectContext = {
  organization: string;
  year: number;
  role: Localized;
};

export type ProjectMedia = {
  mp4: string;
  webm: string;
  poster: string;
  alt: Localized;
};

export type ArchitectureStep = {
  name: string;
  detail: Localized;
};

export type CaseStudy = {
  context: Localized;
  work: Localized;
  architecture: ArchitectureStep[];
  choices: Localized[];
  outcome: Localized;
};

export type Project = {
  id: string;
  title: string;
  icon: IconType;
  accent: ProjectAccent;
  tier: ProjectTier;
  context: ProjectContext;
  category: Localized;
  description: Localized;
  stack: string[];
  repositoryUrl?: string;
  media?: ProjectMedia;
  caseStudy?: CaseStudy;
};

const STUDENT_ROLE: Localized = { en: "Student project", fr: "Projet étudiant" };

export const PROJECTS: Project[] = [
  {
    id: "push-swap",
    title: "Push Swap",
    icon: TiSortNumericallyOutline,
    accent: "pink",
    tier: "secondary",
    context: { organization: "42 Adelaide", year: 2023, role: STUDENT_ROLE },
    category: {
      en: "SORTING ALGORITHMS · DATA STRUCTURES · PERFORMANCE",
      fr: "ALGORITHMES DE TRI · STRUCTURES DE DONNÉES · PERFORMANCE",
    },
    description: {
      en: "Algorithmic project focused on **sorting integers** using the **minimum number of operations**, involving the design and optimization of sorting strategies, the implementation of **stack-based data structures**, and a strong focus on algorithm efficiency and computational complexity.",
      fr: "Projet d'algorithmique centré sur le **tri d'entiers** avec le **minimum d'opérations** : conception et optimisation de stratégies de tri, implémentation de **structures de données à base de piles**, avec une attention forte portée à l'efficacité et à la complexité algorithmique.",
    },
    stack: ["C"],
    repositoryUrl: "https://github.com/louispouillet/push_swap",
  },
  {
    id: "philosophers",
    title: "Philosophers",
    icon: MdSyncLock,
    accent: "teal",
    tier: "secondary",
    context: { organization: "42 Adelaide", year: 2023, role: STUDENT_ROLE },
    category: {
      en: "SYSTEMS PROGRAMMING · THREADS · SYNCHRONIZATION",
      fr: "PROGRAMMATION SYSTÈME · THREADS · SYNCHRONISATION",
    },
    description: {
      en: "Multithreading project based on the **Dining Philosophers** problem, implementing **thread synchronization**, managing shared resources using **mutexes**, and gaining strong understanding of concurrency, race conditions, and deadlock prevention.",
      fr: "Projet de multithreading basé sur le problème du **dîner des philosophes** : **synchronisation de threads**, gestion des ressources partagées avec des **mutex**, et compréhension solide de la concurrence, des race conditions et de la prévention des interblocages.",
    },
    stack: ["C"],
    repositoryUrl: "https://github.com/louispouillet/philosophers",
  },
  {
    id: "cherry",
    title: "Cherry",
    icon: TbCherryFilled,
    accent: "teal",
    tier: "featured",
    context: { organization: "Epitech", year: 2026, role: STUDENT_ROLE },
    category: {
      en: "TINDER LIKE · ALGORITHMS · MATCHING",
      fr: "TYPE TINDER · ALGORITHMES · MATCHING",
    },
    description: {
      en: "Swipe-based event matching application focused on **connecting users** to relevant **activities**, involving the design of recommendation logic, scalable APIs with Express, and dynamic interfaces with React, with a strong emphasis on performance and **real-time interactions**.",
      fr: "Application de matching d'événements par swipe, pensée pour **mettre en relation les utilisateurs** avec des **activités** qui leur correspondent : logique de recommandation, API évolutives avec Express et interfaces dynamiques en React, avec une attention particulière à la performance et aux **interactions en temps réel**.",
    },
    stack: ["React", "TypeScript", "Express", "MongoDB"],
    repositoryUrl: "https://github.com/louispouillet/cherry",
  },
  {
    id: "etardis",
    title: "Etardis",
    icon: FaTrainSubway,
    accent: "pink",
    tier: "featured",
    context: { organization: "Epitech", year: 2026, role: STUDENT_ROLE },
    category: {
      en: "MACHINE LEARNING · PREDICTION · DATA",
      fr: "MACHINE LEARNING · PRÉDICTION · DONNÉES",
    },
    description: {
      en: "**Predictive model** for train delay forecasting based on historical **SNCF data**, involving data cleaning and preprocessing, **feature engineering**, model training with **scikit-learn**, and evaluation of prediction accuracy, with a focus on reliability and performance.",
      fr: "**Modèle prédictif** des retards de train à partir des **données historiques SNCF** : nettoyage et prétraitement des données, **feature engineering**, entraînement avec **scikit-learn** et évaluation de la précision, avec un accent sur la fiabilité et la performance.",
    },
    stack: ["Python", "scikit-learn", "pandas"],
    repositoryUrl: "https://github.com/louispouillet/Etardis",
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.tier === "featured");

export const SECONDARY_PROJECTS = PROJECTS.filter((project) => project.tier === "secondary");

export const findCaseStudyProject = (slug: string): (Project & { caseStudy: CaseStudy }) | undefined => {
  const project = PROJECTS.find((candidate) => candidate.id === slug);
  return project?.caseStudy === undefined ? undefined : { ...project, caseStudy: project.caseStudy };
};
