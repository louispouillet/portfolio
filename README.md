# Portfolio

Personal portfolio of Louis Pouillet, developer building AWS serverless backends and React frontends.

The site is styled as a code editor: each page is a file opened in a tab (`home.tsx`, `about.html`, `projects.js`, `skills.json`, `experience.ts`, `contact.css`), with a file explorer on desktop and a menu on mobile.

It is available in English and French. The language is part of the URL (`/en/projects`, `/fr/projects`), and `/` redirects to the browser language.

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

## Structure

```text
src/
├── assets/          # images and the resume PDF
├── components/
│   ├── content/     # cards and items rendered from data (projects, experiences, skills)
│   ├── layout/      # editor chrome: title bar, menu, file explorer, tabs, mobile bar
│   ├── pages/       # one component per page
│   └── ui/          # shared building blocks (page layout, header, card, tag)
├── config/          # languages, routes and the page registry
├── data/            # site content, typed and bilingual
├── hooks/           # useLanguage
├── i18n/            # localized types, interface texts and formatting
├── styles/          # animations
├── App.tsx          # validates the language and page from the URL
└── main.tsx         # entry point and routes
```

## Editing the content

* Projects, experiences, education, skills and contact links live in `src/data/`. Adding an entry is enough to show it on the site.
* Interface texts live in `src/i18n/ui.ts`.
* Every text is written as `{ en: "...", fr: "..." }`. A missing language fails the type check.
* In descriptions, `**word**` is highlighted.
* Theme colors and fonts are defined once in `src/index.css` (`@theme`).
