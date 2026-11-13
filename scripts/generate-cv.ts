import { spawn, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";
import { LANGUAGES, type Language } from "../src/config/routes.ts";
import { CV_DIRECTORY, cvFileName } from "../src/config/site.ts";

const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}`;
const OUTPUT_DIR = `public/${CV_DIRECTORY}`;
const VITE_BIN = "node_modules/vite/bin/vite.js";
const DEFAULT_CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const CHROME_PATH = process.env.CHROME_PATH ?? DEFAULT_CHROME_PATH;
const SERVER_TIMEOUT_MS = 20_000;
const POLL_INTERVAL_MS = 250;
const RENDER_BUDGET_MS = 10_000;
const EXPECTED_PAGES = 1;
const PDF_PAGE_PATTERN = /\/Type\s*\/Page[^s]/g;

const waitForServer = async (): Promise<void> => {
  const deadline = Date.now() + SERVER_TIMEOUT_MS;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(BASE_URL);
      if (response.ok) {
        return;
      }
    } catch {
      // The preview server is not listening yet.
    }
    await sleep(POLL_INTERVAL_MS);
  }
  throw new Error(`Preview server did not answer on ${BASE_URL} within ${SERVER_TIMEOUT_MS} ms`);
};

const countPdfPages = ({ path }: { path: string }): number => (readFileSync(path, "latin1").match(PDF_PAGE_PATTERN) ?? []).length;

const printCv = ({ language }: { language: Language }): void => {
  const output = `${OUTPUT_DIR}/${cvFileName({ language })}`;
  const result = spawnSync(
    CHROME_PATH,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--virtual-time-budget=${RENDER_BUDGET_MS}`,
      `--print-to-pdf=${output}`,
      `${BASE_URL}/${language}/cv`,
    ],
    { stdio: "ignore" },
  );
  if (result.status !== 0) {
    throw new Error(`Chrome failed to print ${output} (exit code ${result.status})`);
  }
  const pages = countPdfPages({ path: output });
  if (pages !== EXPECTED_PAGES) {
    throw new Error(`${output} has ${pages} pages, expected ${EXPECTED_PAGES}: shorten the CV content`);
  }
  console.log(`${output}: ${pages} page`);
};

const main = async (): Promise<void> => {
  if (!existsSync(CHROME_PATH)) {
    throw new Error(`Chrome not found at ${CHROME_PATH}. Set CHROME_PATH to a Chrome or Chromium executable.`);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const server = spawn(process.execPath, [VITE_BIN, "preview", "--port", String(PORT), "--strictPort"], { stdio: "ignore" });
  try {
    await waitForServer();
    LANGUAGES.forEach((language) => printCv({ language }));
  } finally {
    server.kill();
  }
};

await main();
