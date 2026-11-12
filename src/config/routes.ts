export const LANGUAGES = ["fr", "en"] as const;

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "en";

export const PAGE_KEYS = ["home", "about", "projects", "skills", "experience", "contact"] as const;

export type PageKey = (typeof PAGE_KEYS)[number];

export const isLanguage = (value: string | undefined): value is Language =>
  LANGUAGES.some((language) => language === value);

export const isPageKey = (value: string | undefined): value is PageKey =>
  PAGE_KEYS.some((key) => key === value);

export const detectBrowserLanguage = (): Language =>
  navigator.language.toLowerCase().startsWith("fr") ? "fr" : DEFAULT_LANGUAGE;

export const pagePath = ({ language, page }: { language: Language; page: PageKey }): string =>
  page === "home" ? `/${language}` : `/${language}/${page}`;
