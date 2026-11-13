import { GoArrowUpRight, GoRepo } from "react-icons/go";
import { selectOtherRepositories } from "../../api/github";
import { EXCLUDED_REPOSITORIES, GITHUB_PROFILE_URL } from "../../config/github";
import type { Language } from "../../config/routes";
import { PROJECTS } from "../../data/projects";
import type { GitHubRepositoriesState } from "../../hooks/useGitHubRepositories";
import { UI_TEXT } from "../../i18n/ui";
import RepositoryStats from "./RepositoryStats";

const KNOWN_REPOSITORY_URLS = PROJECTS.flatMap((project) => (project.repositoryUrl === undefined ? [] : [project.repositoryUrl]));

type OtherRepositoriesProps = {
  github: GitHubRepositoriesState;
  language: Language;
};

const OtherRepositories = ({ github, language }: OtherRepositoriesProps) => {
  const text = UI_TEXT[language].projects;
  const profileLink = (
    <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-fit items-center gap-1 font-mono text-sm text-accent-teal hover:underline">
      {text.repositoriesProfileLink}<GoArrowUpRight />
    </a>
  );

  if (github.status === "loading") {
    return <p className="font-mono text-sm italic text-comment">{text.repositoriesLoading}</p>;
  }

  if (github.status === "error") {
    return (
      <div>
        <p className="font-mono text-sm italic text-comment">{text.repositoriesError}</p>
        {profileLink}
      </div>
    );
  }

  const repositories = selectOtherRepositories({
    repositories: github.repositories,
    excludedNames: EXCLUDED_REPOSITORIES,
    knownUrls: KNOWN_REPOSITORY_URLS,
  });

  return (
    <div>
      <ul className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {repositories.map((repository) => (
          <li key={repository.name}>
            <a
              href={repository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col gap-2 rounded border border-line bg-panel p-3 transition-colors hover:border-accent-teal"
            >
              <span className="flex items-center gap-2 font-mono text-sm text-white">
                <GoRepo className="shrink-0 text-muted" />{repository.name}
                {repository.language && <span className="ml-auto font-mono text-xs text-soft">{repository.language}</span>}
              </span>
              <span className="flex-1 font-mono text-xs text-muted line-clamp-2">{repository.description ?? text.noDescription}</span>
              <RepositoryStats repository={repository} language={language} />
            </a>
          </li>
        ))}
      </ul>
      {profileLink}
    </div>
  );
};

export default OtherRepositories;
