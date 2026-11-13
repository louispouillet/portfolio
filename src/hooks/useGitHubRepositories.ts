import { useEffect, useState } from "react";
import { fetchRepositories, readCachedRepositories, type GitHubRepository } from "../api/github";

export type GitHubRepositoriesState =
  | { status: "loading" }
  | { status: "success"; repositories: GitHubRepository[] }
  | { status: "error" };

const initialState = (): GitHubRepositoriesState => {
  const cached = readCachedRepositories();
  return cached === undefined ? { status: "loading" } : { status: "success", repositories: cached };
};

export const useGitHubRepositories = (): GitHubRepositoriesState => {
  const [state, setState] = useState<GitHubRepositoriesState>(initialState);

  useEffect(() => {
    let isActive = true;
    fetchRepositories()
      .then((repositories) => {
        if (isActive) {
          setState({ status: "success", repositories });
        }
      })
      .catch(() => {
        if (isActive) {
          setState({ status: "error" });
        }
      });
    return () => {
      isActive = false;
    };
  }, []);

  return state;
};
