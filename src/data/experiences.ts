import type { LocalizableText, Localized, Period } from "../i18n/types";

export type Experience = {
  id: string;
  period: Period;
  role: Localized;
  company: string;
  country: Localized;
  description: Localized;
  highlights?: Localized[];
  projectIds?: string[];
  skills: LocalizableText[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "sigterm",
    period: { start: { year: 2026, month: 6 }, end: { year: 2026, month: 8 } },
    role: { en: "Cloud Developer (Internship)", fr: "Développeur cloud (stage)" },
    company: "Sigterm",
    country: { en: "France", fr: "France" },
    description: {
      en: "Three month internship at Sigterm, a consulting company specialized in AWS cloud native applications. I worked autonomously on real client projects, from design to deployment.",
      fr: "Stage de trois mois chez Sigterm, une entreprise de conseil spécialisée dans les applications cloud natives sur AWS. J'ai travaillé en autonomie sur de vrais projets clients, de la conception au déploiement.",
    },
    highlights: [
      {
        en: "Built Moggo's video auto tagging pipeline: S3, Transcribe, Claude on Bedrock, orchestrated by Step Functions.",
        fr: "Construit le pipeline de tags automatiques de vidéos de Moggo : S3, Transcribe, Claude sur Bedrock, orchestré par Step Functions.",
      },
      {
        en: "Built an internal expense app where Bedrock reads the receipts and the app sends a PDF summary through Gmail.",
        fr: "Construit une application interne de notes de frais où Bedrock lit les justificatifs et l'application envoie un récapitulatif PDF via Gmail.",
      },
      {
        en: "Designed a single sign on proof of concept on Cognito for Gladius, then turned it into a shared login library and Terraform module.",
        fr: "Conçu une preuve de concept d'authentification unique sur Cognito pour Gladius, puis transformée en bibliothèque de connexion et module Terraform partagés.",
      },
      {
        en: "Added a Lambda authorizer that accepts Cognito tokens or API keys to Isarys' API, after auditing the migration of about 110 routes.",
        fr: "Ajouté à l'API d'Isarys un authorizer Lambda qui accepte les tokens Cognito ou des clés d'API, après un audit de la migration d'environ 110 routes.",
      },
    ],
    projectIds: ["moggo", "reimbursement", "kayzen-sso"],
    skills: ["AWS Lambda", "AWS Step Functions", "Amazon Bedrock", "Amazon Cognito", "Terraform", "AWS SAM", "Python", "TypeScript"],
  },
  {
    id: "adelaide-property-restoration",
    period: { start: { year: 2024 }, end: { year: 2025 } },
    role: { en: "Labourer and Painter", fr: "Manœuvre et peintre" },
    company: "Adelaide Property Restoration",
    country: { en: "Australia", fr: "Australie" },
    description: {
      en: "Worked as a painter and laborer for a construction company in Australia, with hands-on experience in carpentry and drywall installation. Contributed to residential and commercial building projects, handling site preparation, painting, finishing, and general construction support in fast-paced environments.",
      fr: "Peintre et manœuvre pour une entreprise du bâtiment en Australie, avec une expérience concrète en menuiserie et en pose de plaques de plâtre. Participation à des chantiers résidentiels et commerciaux : préparation de chantier, peinture, finitions et appui général, dans des environnements au rythme soutenu.",
    },
    skills: [
      { en: "Carpentry", fr: "Menuiserie" },
      { en: "Drywall Installation", fr: "Pose de plaques de plâtre" },
      { en: "Hand & Power Tools", fr: "Outillage manuel et électrique" },
      { en: "Team Collaboration", fr: "Travail d'équipe" },
    ],
  },
  {
    id: "samwell-and-sons",
    period: { start: { year: 2023 }, end: { year: 2024 } },
    role: { en: "Farm Job", fr: "Ouvrier agricole" },
    company: "Samwell and Sons",
    country: { en: "Australia", fr: "Australie" },
    description: {
      en: "Worked on a sprouts farm in Australia, sorting and inspecting produce to separate high-quality sprouts from damaged or unsuitable batches. Maintained hygiene and quality standards, supported packing operations, and worked efficiently in a fast-paced agricultural environment.",
      fr: "Travail dans une ferme de germes en Australie : tri et contrôle de la production pour séparer les germes de qualité des lots abîmés ou non conformes. Respect des normes d'hygiène et de qualité, aide au conditionnement, et travail efficace dans un environnement agricole au rythme soutenu.",
    },
    skills: [
      { en: "Agricultural Work", fr: "Travail agricole" },
      { en: "Quality Control", fr: "Contrôle qualité" },
      { en: "Farm Operations", fr: "Opérations agricoles" },
      { en: "Fast-Paced Environment", fr: "Rythme soutenu" },
    ],
  },
  {
    id: "opt",
    period: { start: { year: 2021 }, end: { year: 2022 } },
    role: { en: "Fiber Optic Installer", fr: "Installateur fibre optique" },
    company: "OPT",
    country: { en: "New Caledonia", fr: "Nouvelle-Calédonie" },
    description: {
      en: "Deployed, installed, and repaired fiber optic cables for residential and commercial networks. Performed maintenance, troubleshooting, and connection testing to ensure stable and efficient network performance. Worked on-site with technical teams while following safety and installation standards.",
      fr: "Déploiement, installation et réparation de câbles de fibre optique pour des réseaux résidentiels et professionnels. Maintenance, diagnostic et tests de connexion pour garantir un réseau stable et performant. Travail sur le terrain avec les équipes techniques, dans le respect des normes de sécurité et d'installation.",
    },
    skills: [
      { en: "Cable Installation", fr: "Pose de câbles" },
      { en: "Fiber Repair", fr: "Réparation de fibre" },
      { en: "Technical Support", fr: "Support technique" },
      { en: "Connection Testing", fr: "Tests de connexion" },
    ],
  },
];
