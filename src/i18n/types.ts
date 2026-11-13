import type { Language } from "../config/routes";

export type Localized<T = string> = Record<Language, T>;

export type LocalizableText = string | Localized;

export type PeriodPoint = {
  year: number;
  month?: number;
};

export type Period = {
  start: PeriodPoint;
  end?: PeriodPoint;
};
