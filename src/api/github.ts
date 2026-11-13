import { GITHUB_USERNAME } from "../config/github";

const REPOSITORIES_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`;
const CACHE_KEY = "github_repositories";
const CACHE_TTL_MS = 10 * 60 * 1000;

export type GitHubRepository = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushedAt: string;
  isFork: boolean;
  isArchived: boolean;
};

type CacheEntry = {
  savedAt: number;
  repositories: GitHubRepository[];
};

const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null;

const optionalString = (value: unknown): string | null => (typeof value === "string" && value.length > 0 ? value : null);

export const parseRepositories = (payload: unknown): GitHubRepository[] => {
  if (!Array.isArray(payload)) {
    throw new Error("Unexpected GitHub response: not a list of repositories");
  }
  return payload.flatMap((item: unknown) => {
    if (!isRecord(item) || typeof item.name !== "string" || typeof item.html_url !== "string" || typeof item.pushed_at !== "string") {
      return [];
    }
    return [{
      name: item.name,
      url: item.html_url,
      description: optionalString(item.description),
      language: optionalString(item.language),
      stars: typeof item.stargazers_count === "number" ? item.stargazers_count : 0,
      pushedAt: item.pushed_at,
      isFork: item.fork === true,
      isArchived: item.archived === true,
    }];
  });
};

export const readCachedRepositories = (): GitHubRepository[] | undefined => {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (raw === null) {
      return undefined;
    }
    const entry: unknown = JSON.parse(raw);
    if (!isRecord(entry) || typeof entry.savedAt !== "number" || Date.now() - entry.savedAt > CACHE_TTL_MS) {
      return undefined;
    }
    return parseRepositories(entry.repositories);
  } catch {
    return undefined;
  }
};

const writeCachedRepositories = (repositories: GitHubRepository[]): void => {
  const entry: CacheEntry = { savedAt: Date.now(), repositories };
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // Storage can be unavailable (private mode, quota): the site works without the cache.
  }
};

let pendingRequest: Promise<GitHubRepository[]> | undefined;

export const fetchRepositories = (): Promise<GitHubRepository[]> => {
  const cached = readCachedRepositories();
  if (cached !== undefined) {
    return Promise.resolve(cached);
  }
  pendingRequest ??= fetch(REPOSITORIES_URL, { headers: { Accept: "application/vnd.github+json" } })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`GitHub API answered ${response.status}`);
      }
      const repositories = parseRepositories(await response.json());
      writeCachedRepositories(repositories);
      return repositories;
    })
    .finally(() => {
      pendingRequest = undefined;
    });
  return pendingRequest;
};

export const findRepository = ({ repositories, url }: { repositories: GitHubRepository[]; url: string }): GitHubRepository | undefined =>
  repositories.find((repository) => repository.url.toLowerCase() === url.toLowerCase());
