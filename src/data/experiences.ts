import type { LocalizableText, Localized, Period } from "../i18n/types";

export type Experience = {
  id: string;
  period: Period;
  role: Localized;
  company: string;
  country: Localized;
  description: Localized;
  skills: LocalizableText[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "adelaide-property-restoration",
    period: { start: 2024, end: 2025 },
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
    period: { start: 2023, end: 2024 },
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
    period: { start: 2021, end: 2022 },
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
