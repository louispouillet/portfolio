import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { MdAutoAwesome, MdWeb } from "react-icons/md";
import type { Localized } from "../i18n/types";

export type Service = {
  id: string;
  icon: IconType;
  title: Localized;
  summary: Localized;
  deliverables: Localized[];
  stack: string[];
  projectIds: string[];
};

export const SERVICES: Service[] = [
  {
    id: "serverless-backends",
    icon: FaAws,
    title: { en: "Serverless backends and APIs on AWS", fr: "Backends serverless et API sur AWS" },
    summary: {
      en: "APIs, business logic and integrations with the tools you already use, running on AWS so you only pay for what you use.",
      fr: "API, logique métier et intégrations avec les outils que vous utilisez déjà, sur AWS : vous ne payez que ce que vous consommez.",
    },
    deliverables: [
      { en: "REST APIs on Lambda and API Gateway", fr: "API REST sur Lambda et API Gateway" },
      { en: "Sign in and single sign on with Amazon Cognito", fr: "Connexion et authentification unique avec Amazon Cognito" },
      { en: "Webhooks and integrations with third party tools", fr: "Webhooks et intégrations avec des outils tiers" },
      { en: "Infrastructure as code and CI/CD", fr: "Infrastructure as code et CI/CD" },
    ],
    stack: ["AWS Lambda", "DynamoDB", "Amazon Cognito", "Terraform", "Python"],
    projectIds: ["yopay", "moggo", "reimbursement", "kayzen-sso"],
  },
  {
    id: "web-apps",
    icon: MdWeb,
    title: { en: "Web applications with React and TypeScript", fr: "Applications web React et TypeScript" },
    summary: {
      en: "Internal tools, dashboards and customer facing apps, connected to your data and bilingual when you need it.",
      fr: "Outils internes, tableaux de bord et applications clients, connectés à vos données et bilingues si besoin.",
    },
    deliverables: [
      { en: "Internal tools and back offices", fr: "Outils internes et back‑offices" },
      { en: "Customer apps connected to your API", fr: "Applications clients connectées à votre API" },
      { en: "Responsive and bilingual sites", fr: "Sites responsives et bilingues" },
      { en: "Deployment on AWS Amplify", fr: "Déploiement sur AWS Amplify" },
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "AWS Amplify"],
    projectIds: ["yopay", "reimbursement", "cherry"],
  },
  {
    id: "automation-ai",
    icon: MdAutoAwesome,
    title: { en: "Automation and AI integration", fr: "Automatisation et intégration d'IA" },
    summary: {
      en: "Less repetitive work: workflows that move data between your tools, and AI that reads documents or sorts content for you.",
      fr: "Moins de tâches répétitives : des workflows qui font circuler les données entre vos outils, et une IA qui lit vos documents ou trie vos contenus.",
    },
    deliverables: [
      { en: "n8n workflows connecting your tools", fr: "Workflows n8n qui relient vos outils" },
      { en: "Document reading with AI (receipts, invoices)", fr: "Lecture de documents par IA (justificatifs, factures)" },
      { en: "Automatic tagging and summaries with LLMs", fr: "Tags et résumés automatiques avec des LLM" },
      { en: "Scheduled newsletters and reports", fr: "Newsletters et rapports planifiés" },
    ],
    stack: ["n8n", "Amazon Bedrock", "LLM", "Python"],
    projectIds: ["persona", "moggo", "reimbursement"],
  },
];
