import type { Plugin } from "vite";
import { SITE_URL } from "../src/config/site";

const SITE_URL_PLACEHOLDER = /%SITE_URL%/g;

export const sitePlugin = (): Plugin => ({
  name: "portfolio-site",
  transformIndexHtml: (html) => html.replace(SITE_URL_PLACEHOLDER, SITE_URL),
});
