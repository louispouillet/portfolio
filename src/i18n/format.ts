import type { Language } from "../config/routes";
import type { LocalizableText, Period } from "./types";
import { UI_TEXT } from "./ui";

export const translate = ({ text, language }: { text: LocalizableText; language: Language }): string =>
  typeof text === "string" ? text : text[language];

export const formatPeriod = ({ period, language }: { period: Period; language: Language }): string =>
  `${period.start} → ${period.end ?? UI_TEXT[language].common.present}`;
