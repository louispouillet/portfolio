export const LANGUAGES = ["fr", "en"] as const;

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "en";

export const PAGE_KEYS = ["home", "services", "projects", "about", "skills", "experience", "contact"] as const;

export type PageKey = (typeof PAGE_KEYS)[number];

export type EditorTab = {
  page: PageKey;
  slug?: string;
};

export const isLanguage = (value: string | undefined): value is Language =>
  LANGUAGES.some((language) => language === value);

export const isPageKey = (value: string | undefined): value is PageKey =>
  PAGE_KEYS.some((key) => key === value);

export const detectBrowserLanguage = (): Language =>
  navigator.language.toLowerCase().startsWith("fr") ? "fr" : DEFAULT_LANGUAGE;

export const tabKey = ({ page, slug }: EditorTab): string => (slug === undefined ? page : `${page}/${slug}`);

export const pagePath = ({ language, page, slug }: { language: Language } & EditorTab): string => {
  if (page === "home") {
    return `/${language}`;
  }
  return slug === undefined ? `/${language}/${page}` : `/${language}/${page}/${slug}`;
};
