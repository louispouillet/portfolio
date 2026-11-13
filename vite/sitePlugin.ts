import type { Plugin } from "vite";
import { CASE_STUDY_SLUGS, DEFAULT_LANGUAGE, LANGUAGES, PAGE_KEYS, pagePath, type EditorTab } from "../src/config/routes";
import { SITE_URL } from "../src/config/site";

const SITE_URL_PLACEHOLDER = /%SITE_URL%/g;
const ISO_DATE_LENGTH = 10;

const SITEMAP_TABS: EditorTab[] = [
  ...PAGE_KEYS.map((page) => ({ page })),
  ...CASE_STUDY_SLUGS.map((slug) => ({ page: "projects" as const, slug })),
];

const absoluteUrl = (path: string): string => `${SITE_URL}${path}`;

const sitemapEntry = ({ tab, lastModified }: { tab: EditorTab; lastModified: string }): string[] => {
  const alternates = [
    ...LANGUAGES.map((language) => ({ hreflang: language, href: absoluteUrl(pagePath({ language, ...tab })) })),
    { hreflang: "x-default", href: absoluteUrl(pagePath({ language: DEFAULT_LANGUAGE, ...tab })) },
  ];
  const alternateLinks = alternates.map(({ hreflang, href }) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`);
  return LANGUAGES.map((language) => [
    "  <url>",
    `    <loc>${absoluteUrl(pagePath({ language, ...tab }))}</loc>`,
    `    <lastmod>${lastModified}</lastmod>`,
    ...alternateLinks,
    "  </url>",
  ].join("\n"));
};

const buildSitemap = (): string => {
  const lastModified = new Date().toISOString().slice(0, ISO_DATE_LENGTH);
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...SITEMAP_TABS.flatMap((tab) => sitemapEntry({ tab, lastModified })),
    "</urlset>",
    "",
  ].join("\n");
};

const buildRobots = (): string => ["User-agent: *", "Allow: /", "", `Sitemap: ${SITE_URL}/sitemap.xml`, ""].join("\n");

export const sitePlugin = (): Plugin => ({
  name: "portfolio-site",
  transformIndexHtml: (html) => html.replace(SITE_URL_PLACEHOLDER, SITE_URL),
  generateBundle() {
    this.emitFile({ type: "asset", fileName: "sitemap.xml", source: buildSitemap() });
    this.emitFile({ type: "asset", fileName: "robots.txt", source: buildRobots() });
  },
});
