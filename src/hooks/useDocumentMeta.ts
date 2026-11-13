import { useEffect } from "react";
import { DEFAULT_LANGUAGE, LANGUAGES, pagePath, type EditorTab, type Language } from "../config/routes";
import { SITE_NAME, SITE_URL } from "../config/site";
import { findCaseStudyProject } from "../data/projects";
import { translate } from "../i18n/format";
import { SEO_TEXT } from "../i18n/seo";

const HIGHLIGHT_MARKER_PATTERN = /\*\*/g;
const ALTERNATES: { hreflang: string; language: Language }[] = [
  ...LANGUAGES.map((language) => ({ hreflang: language, language })),
  { hreflang: "x-default", language: DEFAULT_LANGUAGE },
];

type DocumentMeta = {
  title: string;
  description: string;
};

const documentMetaFor = ({ language, tab }: { language: Language; tab: EditorTab }): DocumentMeta => {
  const seo = SEO_TEXT[language];
  const project = tab.slug === undefined ? undefined : findCaseStudyProject(tab.slug);
  if (project !== undefined) {
    return {
      title: `${translate({ text: project.title, language })} · ${seo.caseStudySuffix} · ${SITE_NAME}`,
      description: project.description[language].replace(HIGHLIGHT_MARKER_PATTERN, ""),
    };
  }
  const page = seo.pages[tab.page];
  return {
    title: tab.page === "home" ? page.title : `${page.title} · ${SITE_NAME}`,
    description: page.description,
  };
};

const upsertHeadElement = ({ selector, tagName, attributes }: { selector: string; tagName: "meta" | "link"; attributes: Record<string, string> }): void => {
  const element = document.head.querySelector(selector) ?? document.head.appendChild(document.createElement(tagName));
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
};

export const useDocumentMeta = ({ language, tab }: { language: Language; tab: EditorTab }): void => {
  const { page, slug } = tab;

  useEffect(() => {
    const currentTab = { page, slug };
    const { title, description } = documentMetaFor({ language, tab: currentTab });
    const url = `${SITE_URL}${pagePath({ language, ...currentTab })}`;

    document.title = title;
    upsertHeadElement({ selector: 'meta[name="description"]', tagName: "meta", attributes: { name: "description", content: description } });
    upsertHeadElement({ selector: 'link[rel="canonical"]', tagName: "link", attributes: { rel: "canonical", href: url } });
    upsertHeadElement({ selector: 'meta[property="og:title"]', tagName: "meta", attributes: { property: "og:title", content: title } });
    upsertHeadElement({ selector: 'meta[property="og:description"]', tagName: "meta", attributes: { property: "og:description", content: description } });
    upsertHeadElement({ selector: 'meta[property="og:url"]', tagName: "meta", attributes: { property: "og:url", content: url } });
    upsertHeadElement({ selector: 'meta[property="og:locale"]', tagName: "meta", attributes: { property: "og:locale", content: SEO_TEXT[language].locale } });
    ALTERNATES.forEach(({ hreflang, language: alternateLanguage }) => {
      upsertHeadElement({
        selector: `link[rel="alternate"][hreflang="${hreflang}"]`,
        tagName: "link",
        attributes: { rel: "alternate", hreflang, href: `${SITE_URL}${pagePath({ language: alternateLanguage, ...currentTab })}` },
      });
    });
  }, [language, page, slug]);
};
