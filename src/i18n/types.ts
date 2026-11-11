import type { Language } from "../config/routes";

export type Localized<T = string> = Record<Language, T>;

export type LocalizableText = string | Localized;

export type Period = {
  start: number;
  end?: number;
};
