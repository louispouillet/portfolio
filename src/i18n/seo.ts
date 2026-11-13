import type { PageKey } from "../config/routes";
import type { Localized } from "./types";

type PageSeo = {
  title: string;
  description: string;
};

type SeoText = {
  locale: string;
  caseStudySuffix: string;
  pages: Record<PageKey, PageSeo>;
};

export const SEO_TEXT: Localized<SeoText> = {
  en: {
    locale: "en_US",
    caseStudySuffix: "Case study",
    pages: {
      home: {
        title: "Louis Pouillet · Freelance developer, AWS, React and automation",
        description: "Freelance developer in Toulouse building serverless backends on AWS, React web apps and AI automations. Projects, case studies and contact.",
      },
      services: {
        title: "Services",
        description: "Serverless backends on AWS, web applications with React and TypeScript, automation and AI integration for startups and small businesses.",
      },
      projects: {
        title: "Projects",
        description: "Case studies and projects: QR ordering on AWS, AI video tagging, an expense app with OCR, single sign on, n8n automation, games and machine learning.",
      },
      about: {
        title: "About",
        description: "Second year student at Epitech Toulouse and freelance developer, after an AWS cloud internship at Sigterm.",
      },
      skills: {
        title: "Skills",
        description: "AWS, Python, TypeScript, React, Terraform, n8n and machine learning, each linked to the projects that use them.",
      },
      experience: {
        title: "Experience",
        description: "AWS cloud developer internship at Sigterm, and earlier jobs in Australia and New Caledonia.",
      },
      contact: {
        title: "Contact",
        description: "Contact Louis Pouillet for a freelance project: email, LinkedIn, GitHub or the contact form.",
      },
    },
  },
  fr: {
    locale: "fr_FR",
    caseStudySuffix: "Étude de cas",
    pages: {
      home: {
        title: "Louis Pouillet · Développeur freelance, AWS, React et automatisation",
        description: "Développeur freelance à Toulouse : backends serverless sur AWS, applications web React et automatisations avec l'IA. Projets, études de cas et contact.",
      },
      services: {
        title: "Services",
        description: "Backends serverless sur AWS, applications web React et TypeScript, automatisation et intégration d'IA pour les startups et les petites entreprises.",
      },
      projects: {
        title: "Projets",
        description: "Études de cas et projets : commande par QR code sur AWS, tags vidéo par IA, notes de frais avec OCR, authentification unique, automatisation n8n, jeux et machine learning.",
      },
      about: {
        title: "À propos",
        description: "Étudiant en 2e année à Epitech Toulouse et développeur freelance, après un stage de développeur cloud AWS chez Sigterm.",
      },
      skills: {
        title: "Compétences",
        description: "AWS, Python, TypeScript, React, Terraform, n8n et machine learning, chacun relié aux projets qui l'utilisent.",
      },
      experience: {
        title: "Expérience",
        description: "Stage de développeur cloud AWS chez Sigterm, et expériences précédentes en Australie et en Nouvelle-Calédonie.",
      },
      contact: {
        title: "Contact",
        description: "Contactez Louis Pouillet pour une mission freelance : e-mail, LinkedIn, GitHub ou formulaire de contact.",
      },
    },
  },
};
