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

const MILLISECONDS_PER_SECOND = 1000;
const RELATIVE_TIME_UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 365 * 24 * 60 * 60],
  ["month", 30 * 24 * 60 * 60],
  ["week", 7 * 24 * 60 * 60],
  ["day", 24 * 60 * 60],
  ["hour", 60 * 60],
  ["minute", 60],
];

export const formatRelativeTime = ({ isoDate, language }: { isoDate: string; language: Language }): string => {
  const elapsedSeconds = (new Date(isoDate).getTime() - Date.now()) / MILLISECONDS_PER_SECOND;
  const formatter = new Intl.RelativeTimeFormat(DATE_LOCALES[language], { numeric: "auto" });
  for (const [unit, secondsInUnit] of RELATIVE_TIME_UNITS) {
    if (Math.abs(elapsedSeconds) >= secondsInUnit) {
      return formatter.format(Math.round(elapsedSeconds / secondsInUnit), unit);
    }
  }
  return formatter.format(0, "minute");
};
