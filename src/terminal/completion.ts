import { LANGUAGES } from "../config/routes";
import { VISIBLE_COMMAND_NAMES } from "./commands";
import { findNode, nodeLabel, resolvePath } from "./filesystem";

const SEPARATOR = "/";
const DIRECTORY_ONLY_COMMANDS = new Set(["cd"]);
const ARGUMENT_KEYWORDS: Record<string, string[]> = {
  open: ["github", "linkedin", "email"],
  lang: [...LANGUAGES],
  cv: [...LANGUAGES],
};

export type Completion = {
  value: string;
  suggestions: string[];
};

const commonPrefix = (words: string[]): string =>
  words.reduce((prefix, word) => {
    let length = 0;
    while (length < prefix.length && prefix[length] === word[length]) {
      length += 1;
    }
    return prefix.slice(0, length);
  });

const completeWord = ({ before, prefix, candidates }: { before: string; prefix: string; candidates: string[] }): Completion => {
  const matches = candidates.filter((candidate) => candidate.startsWith(prefix));
  if (matches.length === 0) {
    return { value: `${before}${prefix}`, suggestions: [] };
  }
  if (matches.length === 1) {
    const [match] = matches;
    const suffix = match.endsWith(SEPARATOR) ? "" : " ";
    return { value: `${before}${match}${suffix}`, suggestions: [] };
  }
  return { value: `${before}${commonPrefix(matches)}`, suggestions: matches };
};

export const completeInput = ({ input, cwd }: { input: string; cwd: string }): Completion => {
  const lastSpace = input.lastIndexOf(" ");
  if (lastSpace === -1) {
    return completeWord({ before: "", prefix: input.toLowerCase(), candidates: VISIBLE_COMMAND_NAMES });
  }

  const before = input.slice(0, lastSpace + 1);
  const word = input.slice(lastSpace + 1);
  const commandName = input.trimStart().split(" ")[0]?.toLowerCase() ?? "";
  const slashIndex = word.lastIndexOf(SEPARATOR);
  const directoryPart = slashIndex === -1 ? "" : word.slice(0, slashIndex + 1);
  const namePrefix = word.slice(slashIndex + 1);
  const directory = findNode(resolvePath({ cwd, path: directoryPart || "." }));
  const children = directory?.kind === "directory" ? directory.children : [];
  const pathCandidates = children
    .filter((child) => !DIRECTORY_ONLY_COMMANDS.has(commandName) || child.kind === "directory")
    .map(nodeLabel);
  const keywordCandidates = directoryPart === "" ? (ARGUMENT_KEYWORDS[commandName] ?? []) : [];

  return completeWord({ before: `${before}${directoryPart}`, prefix: namePrefix, candidates: [...keywordCandidates, ...pathCandidates] });
};
