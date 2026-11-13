import type { Language } from "../config/routes";
import type { LocalizableText, Localized, Period, PeriodPoint } from "./types";
import { UI_TEXT } from "./ui";

const DATE_LOCALES: Localized = { en: "en-GB", fr: "fr-FR" };
const FIRST_MONTH_INDEX = 1;

export const translate = ({ text, language }: { text: LocalizableText; language: Language }): string =>
  typeof text === "string" ? text : text[language];

const formatPeriodPoint = ({ point, language }: { point: PeriodPoint; language: Language }): string => {
  if (point.month === undefined) {
    return String(point.year);
  }
  const date = new Date(point.year, point.month - FIRST_MONTH_INDEX);
  return new Intl.DateTimeFormat(DATE_LOCALES[language], { month: "short", year: "numeric" }).format(date);
};

export const formatPeriod = ({ period, language }: { period: Period; language: Language }): string => {
  const start = formatPeriodPoint({ point: period.start, language });
  const end = period.end === undefined ? UI_TEXT[language].common.present : formatPeriodPoint({ point: period.end, language });
  return `${start} → ${end}`;
};
