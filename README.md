# Portfolio

Personal portfolio of Louis Pouillet, developer building AWS serverless backends and React frontends.

The site is styled as a code editor: each page is a file opened in a tab (`home.tsx`, `about.html`, `projects.js`, `skills.json`, `experience.ts`, `contact.css`), with a file explorer on desktop and a menu on mobile.

## Stack

* React 19 and TypeScript
* Vite
* Tailwind CSS 4
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
│   ├── layout/      # editor chrome: title bar, menu, file explorer, tabs, mobile bar
│   └── pages/       # one component per page
├── styles/          # animations
├── App.tsx          # page state and layout
└── main.tsx         # entry point
```
