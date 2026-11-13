import type { Localized, Period } from "../i18n/types";
import { EXPERIENCES } from "./experiences";

const experiencePeriod = (experienceId: string): Period => {
  const experience = EXPERIENCES.find((candidate) => candidate.id === experienceId);
  if (experience === undefined) {
    throw new Error(`Unknown experience: ${experienceId}`);
  }
  return experience.period;
};

export const CV_PHONE = "+33 6 73 17 22 31";

type CvText = {
  documentTitle: string;
  headline: string;
  summary: string;
  location: string;
  moreProjects: string;
  sections: {
    details: string;
    skills: string;
    languages: string;
    profile: string;
    experience: string;
    projects: string;
    education: string;
  };
  labels: {
    address: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
    tech: string;
  };
};

export const CV_TEXT: Localized<CvText> = {
  en: {
    documentTitle: "Louis Pouillet CV",
    headline: "Cloud & full stack developer · Epitech student",
    summary:
      "Second year Computer Science student at Epitech Toulouse, after three years in Australia where I studied at 42 Adelaide and became fluent in English. I build serverless backends on AWS and authentication systems (Cognito, OAuth 2.0). Looking for a **work study position** in AI and cloud engineering, and available for **freelance missions**.",
    location: "Toulouse, France",
    moreProjects: "More projects (AI automation, reinforcement learning, multiplayer game) on",
    sections: {
      details: "Details",
      skills: "Skills",
      languages: "Languages",
      profile: "Profile",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
    },
    labels: {
      address: "Address",
      phone: "Phone",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      portfolio: "Portfolio",
      tech: "Tech",
    },
  },
  fr: {
    documentTitle: "CV Louis Pouillet",
    headline: "Développeur cloud & full stack · Epitech",
    summary:
      "Étudiant en 2e année d'informatique à Epitech Toulouse, après trois ans en Australie où j'ai étudié à 42 Adelaide et appris à parler anglais couramment. Je construis des backends serverless sur AWS et des systèmes d'authentification (Cognito, OAuth 2.0). Je recherche une **alternance** dans l'IA et le cloud, et je suis disponible pour des **missions freelance**.",
    location: "Toulouse, France",
    moreProjects: "Autres projets (automatisation IA, apprentissage par renforcement, jeu multijoueur) sur",
    sections: {
      details: "Coordonnées",
      skills: "Compétences",
      languages: "Langues",
      profile: "Profil",
      experience: "Expérience",
      projects: "Projets",
      education: "Formation",
    },
    labels: {
      address: "Adresse",
      phone: "Téléphone",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      portfolio: "Portfolio",
      tech: "Technos",
    },
  },
};

export type CvSkillGroup = {
  title: Localized;
  items: Localized;
};

export const CV_SKILL_GROUPS: CvSkillGroup[] = [
  {
    title: { en: "Languages", fr: "Langages" },
    items: { en: "Python, TypeScript, JavaScript, Java, C", fr: "Python, TypeScript, JavaScript, Java, C" },
  },
  {
    title: { en: "AWS", fr: "AWS" },
    items: {
      en: "Lambda, API Gateway, DynamoDB, Step Functions, Cognito, Bedrock, Transcribe, EventBridge, S3",
      fr: "Lambda, API Gateway, DynamoDB, Step Functions, Cognito, Bedrock, Transcribe, EventBridge, S3",
    },
  },
  {
    title: { en: "IaC & CI/CD", fr: "IaC et CI/CD" },
    items: { en: "Terraform, AWS SAM, GitHub Actions (OIDC)", fr: "Terraform, AWS SAM, GitHub Actions (OIDC)" },
  },
  {
    title: { en: "Web", fr: "Web" },
    items: { en: "React, Express, REST APIs", fr: "React, Express, API REST" },
  },
  {
    title: { en: "Practices", fr: "Pratiques" },
    items: {
      en: "Hexagonal architecture, OAuth 2.0 and PKCE, DynamoDB single table design, automated tests",
      fr: "Architecture hexagonale, OAuth 2.0 et PKCE, modélisation DynamoDB en table unique, tests automatisés",
    },
  },
];

export const CV_SPOKEN_LANGUAGES: { name: Localized; level: Localized }[] = [
  { name: { en: "French", fr: "Français" }, level: { en: "Native", fr: "Langue maternelle" } },
  { name: { en: "English", fr: "Anglais" }, level: { en: "Fluent", fr: "Courant" } },
];

export type CvEntry = {
  id: string;
  title: string;
  role: Localized;
  place: Localized;
  period: Period;
  summary?: Localized;
  bullets: Localized[];
  tech?: string;
};

export const CV_EXPERIENCES: CvEntry[] = [
  {
    id: "sigterm",
    title: "SIGTERM",
    role: { en: "Cloud Engineering Intern", fr: "Stage en ingénierie cloud" },
    place: { en: "Toulouse", fr: "Toulouse" },
    period: experiencePeriod("sigterm"),
    bullets: [
      {
        en: "Built a video auto tagging pipeline for Moggo: Step Functions orchestrating one Lambda per step, Amazon Transcribe for speech to text, and Claude on **Amazon Bedrock** to extract tags from the transcript.",
        fr: "Construit un pipeline de tags automatiques de vidéos pour Moggo : Step Functions orchestre une Lambda par étape, Amazon Transcribe transcrit la parole, et Claude sur **Amazon Bedrock** extrait les tags de la transcription.",
      },
      {
        en: "Built an internal expense reimbursement app where **Amazon Bedrock** reads the amounts on receipts, and a PDF summary is sent through Gmail (React, Python, DynamoDB).",
        fr: "Construit une application interne de notes de frais où **Amazon Bedrock** lit les montants des justificatifs, et un récapitulatif PDF est envoyé via Gmail (React, Python, DynamoDB).",
      },
      {
        en: "Designed a multi app SSO proof of concept on Amazon Cognito (OAuth 2.0 Authorization Code with PKCE) for Laravel apps and SPAs, with OAuth scopes and Cognito groups, provisioned with Terraform.",
        fr: "Conçu une preuve de concept d'authentification unique multi applications sur Amazon Cognito (OAuth 2.0 Authorization Code avec PKCE) pour des applications Laravel et des SPA, avec scopes OAuth et groupes Cognito, provisionnée avec Terraform.",
      },
      {
        en: "Built a custom Lambda authorizer accepting both Cognito JWTs and API keys, after auditing the migration of about 110 API routes.",
        fr: "Développé un authorizer Lambda qui accepte les JWT Cognito et les clés d'API, après un audit de la migration d'environ 110 routes d'API.",
      },
    ],
    tech: "AWS Lambda, Step Functions, Bedrock, Transcribe, Cognito, API Gateway, DynamoDB, Terraform, SAM, Python, TypeScript",
  },
];

export const CV_PROJECTS: CvEntry[] = [
  {
    id: "yopay",
    title: "YOPAY",
    role: { en: "Co-founder, backend and cloud", fr: "Cofondateur, backend et cloud" },
    place: { en: "Personal project", fr: "Projet personnel" },
    period: { start: { year: 2026, month: 8 } },
    summary: {
      en: "QR code table ordering for independent restaurants, built with a friend.",
      fr: "Commande à table par QR code pour les restaurants indépendants, construite avec un ami.",
    },
    bullets: [
      {
        en: "Serverless backend on AWS (Lambda, API Gateway, DynamoDB single table) deployed with SAM, following a hexagonal architecture.",
        fr: "Backend serverless sur AWS (Lambda, API Gateway, DynamoDB en table unique) déployé avec SAM, en architecture hexagonale.",
      },
      {
        en: "Integration with the Zelty point of sale through HMAC signed webhooks and an asynchronous menu sync with EventBridge.",
        fr: "Intégration avec la caisse Zelty par webhooks signés HMAC et synchronisation asynchrone du menu avec EventBridge.",
      },
      {
        en: "Infrastructure with Terraform, CI/CD with GitHub Actions and OIDC, no long lived AWS keys.",
        fr: "Infrastructure avec Terraform, CI/CD avec GitHub Actions et OIDC, sans clé AWS permanente.",
      },
    ],
  },
  {
    id: "cherry",
    title: "CHERRY",
    role: { en: "Full stack developer", fr: "Développeur full stack" },
    place: { en: "Epitech, team of 4", fr: "Epitech, équipe de 4" },
    period: { start: { year: 2026, month: 1 }, end: { year: 2026, month: 1 } },
    summary: {
      en: "Social app to discover and join local events by swiping. React and TypeScript frontend, REST API with Express, MongoDB.",
      fr: "Application sociale pour découvrir et rejoindre des sorties près de chez soi en swipant. Frontend React et TypeScript, API REST avec Express, MongoDB.",
    },
    bullets: [],
  },
];

export const CV_EDUCATION: { educationId: string; title: Localized; place: Localized }[] = [
  {
    educationId: "epitech",
    title: { en: "Bachelor in Computer Science, Epitech", fr: "Bachelor en informatique, Epitech" },
    place: { en: "Toulouse (France)", fr: "Toulouse (France)" },
  },
  {
    educationId: "42-adelaide",
    title: { en: "Peer to Peer Programming School, 42", fr: "École de programmation entre pairs, 42" },
    place: { en: "Adelaide (Australia)", fr: "Adélaïde (Australie)" },
  },
  {
    educationId: "high-school",
    title: { en: "High School Diploma, Blaise Pascal", fr: "Baccalauréat, lycée Blaise Pascal" },
    place: { en: "Nouméa (New Caledonia)", fr: "Nouméa (Nouvelle-Calédonie)" },
  },
];
