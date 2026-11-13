import type { IconType } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import type { LocalizableText, Localized } from "../i18n/types";

export const FULL_NAME = "Louis Pouillet";

export type ProfileFacts = {
  location: Localized;
  school: string;
  languages: string;
  year: string;
};

export const PROFILE_FACTS: ProfileFacts = {
  location: { en: "Toulouse, France", fr: "Toulouse, France" },
  school: "Epitech Toulouse",
  languages: "FR / EN",
  year: "B2 · 2026/2027",
};

export type ContactLink = {
  id: string;
  label: LocalizableText;
  handle: string;
  href: string;
  icon: IconType;
  isExternal: boolean;
  cardClassName: string;
  iconClassName: string;
  labelClassName: string;
  arrowClassName: string;
};

export const CONTACT_LINKS: ContactLink[] = [
  {
    id: "email",
    label: { en: "Email", fr: "E-mail" },
    handle: "louis.pouillet@epitech.eu",
    href: "mailto:louis.pouillet@epitech.eu",
    icon: AiOutlineMail,
    isExternal: false,
    cardClassName: "hover:bg-[#252E2C] hover:border-accent-teal",
    iconClassName: "text-accent-teal bg-[#252E2C]",
    labelClassName: "text-accent-teal",
    arrowClassName: "group-hover:text-accent-teal",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "linkedin.com/in/louis-pouillet",
    href: "https://www.linkedin.com/in/louis-pouillet-9b7549392",
    icon: FaLinkedin,
    isExternal: true,
    cardClassName: "hover:bg-[#21262D] hover:border-[#0A66C2]",
    iconClassName: "text-[#0A66C2] bg-[#21262D]",
    labelClassName: "text-[#0A66C2]",
    arrowClassName: "group-hover:text-[#0A66C2]",
  },
  {
    id: "github",
    label: "GitHub",
    handle: "github.com/louispouillet",
    href: "https://github.com/louispouillet",
    icon: FaGithub,
    isExternal: true,
    cardClassName: "hover:bg-[#21262D] hover:border-soft",
    iconClassName: "text-soft bg-[#21262D]",
    labelClassName: "text-soft",
    arrowClassName: "group-hover:text-soft",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "youtube.com/@louchevdc",
    href: "https://www.youtube.com/@louchevdc5123",
    icon: FaYoutube,
    isExternal: true,
    cardClassName: "hover:bg-[#1A0000] hover:border-[#FF0000]",
    iconClassName: "text-[#FF0000] bg-[#1A0000]",
    labelClassName: "text-[#FF0000]",
    arrowClassName: "group-hover:text-[#FF0000]",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "instagram.com/louis_pouillet",
    href: "https://www.instagram.com/louis_pouillet",
    icon: FaInstagram,
    isExternal: true,
    cardClassName: "hover:bg-[#1A0A14] hover:border-[#E1306C]",
    iconClassName: "text-[#E1306C] bg-[#1A0A14]",
    labelClassName: "text-[#E1306C]",
    arrowClassName: "group-hover:text-[#E1306C]",
  },
];
