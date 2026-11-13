# Portfolio

Personal portfolio of Louis Pouillet, developer building AWS serverless backends and React frontends.

The site is styled as a code editor: each page is a file opened in a tab (`home.tsx`, `about.html`, `projects.js`, `skills.json`, `experience.ts`, `contact.css`), with a file explorer on desktop and a menu on mobile.

It is available in English and French. The language is part of the URL (`/en/projects`, `/fr/projects`), and `/` opens the English version, whatever the browser language.

## Stack

* React 19 and TypeScript
* Vite
* Tailwind CSS 4
* React Router
* EmailJS for the contact form

## Getting started

Requirements: Node.js 20 or later.

```bash
npm install
npm run dev
```

The site runs on http://localhost:5173.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Type checks and builds the site into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |
| `npm run cv` | Builds the site and prints the English and French CV to `public/cv/` (needs Google Chrome) |

## Structure

```text
public/              # favicon, touch icon and share image
src/
├── api/             # GitHub API client with a session cache
├── assets/          # images, demo video and the resume PDF
├── components/
│   ├── content/     # cards and items rendered from data (projects, experiences, skills, services)
│   ├── layout/      # editor chrome: title bar, menu, file explorer, tabs, mobile bar
│   ├── pages/       # one component per page, plus the case study page
│   └── ui/          # shared building blocks (page layout, header, card, tag)
├── config/          # site URL, languages, routes, page registry and GitHub settings
├── data/            # site content, typed and bilingual
├── hooks/           # language, document metadata, GitHub data, reduced motion
├── i18n/            # localized types, interface and SEO texts, formatting
├── styles/          # animations
├── App.tsx          # validates the language, page and case study from the URL
└── main.tsx         # entry point and routes
vite/                # build plugin: site URL in index.html, sitemap.xml and robots.txt
vercel.json          # SPA rewrite, security and cache headers
```

## Editing the content

* Projects, case studies, experiences, education, skills, services and contact links live in `src/data/`. Adding an entry is enough to show it on the site.
* A new case study also needs its slug in `CASE_STUDY_SLUGS` (`src/config/routes.ts`), so that it is routed and listed in the sitemap.
* Interface texts live in `src/i18n/ui.ts`, page titles and descriptions for search engines in `src/i18n/seo.ts`.
* Every text is written as `{ en: "...", fr: "..." }`. A missing language fails the type check.
* In descriptions, `**word**` is highlighted.
* Theme colors and fonts are defined once in `src/index.css` (`@theme`).
* The public site URL is defined once in `src/config/site.ts`.
* The CV is the page `/en/cv` (or `/fr/cv`), built from the same data plus `src/data/cv.ts`. After changing the content, run `npm run cv` and commit the two PDFs in `public/cv/`. The command fails if a CV no longer fits on one page. Set `CHROME_PATH` if Chrome is not in `/Applications`.
* Public GitHub repositories without a project card appear automatically under "Other repositories". Hide one by adding its name to `EXCLUDED_REPOSITORIES` in `src/config/github.ts`.

## Deployment

The site is deployed on [Vercel](https://vercel.com) from the `main` branch. `vercel.json` sets the build, the rewrite that serves `index.html` for every route (so `/fr/projects` works on reload) and the security headers.

To attach the custom domain `louis-pouillet.yopay.fr`:

1. In the Vercel project, open **Settings** then **Domains** and add `louis-pouillet.yopay.fr`.
2. Vercel shows the DNS record to create, a `CNAME` for `louis-pouillet`. Add it in the `yopay.fr` hosted zone in Route 53.
3. Wait for Vercel to validate the domain and issue the HTTPS certificate.
4. In EmailJS, restrict the allowed origins to `https://louis-pouillet.yopay.fr`, so the contact form only works from the site.
5. In Google Search Console, add the domain and submit `https://louis-pouillet.yopay.fr/sitemap.xml`.
