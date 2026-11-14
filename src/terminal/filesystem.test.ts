import { describe, expect, it } from "vitest";
import { START_PATH, displayPath, findNode, nodeLabel, resolvePath } from "./filesystem";
import { parseInput, tokenize } from "./parser";

describe("tokenize", () => {
  it("splits on whitespace", () => {
    expect(tokenize("  ls   -a  projects ")).toEqual(["ls", "-a", "projects"]);
  });

  it("keeps quoted words together", () => {
    expect(tokenize(`echo "hello world" 'and you'`)).toEqual(["echo", "hello world", "and you"]);
  });

  it("returns nothing for blank input", () => {
    expect(tokenize("   ")).toEqual([]);
  });
});

describe("parseInput", () => {
  it("lowercases the command name only", () => {
    expect(parseInput("CAT Home.tsx")).toEqual({ name: "cat", args: ["Home.tsx"] });
  });
});

describe("resolvePath", () => {
  it("resolves relative, parent and current segments", () => {
    expect(resolvePath({ cwd: START_PATH, path: "projects" })).toBe(`${START_PATH}/projects`);
    expect(resolvePath({ cwd: START_PATH, path: "../.." })).toBe("/home/louis");
    expect(resolvePath({ cwd: START_PATH, path: "./projects/../projects" })).toBe(`${START_PATH}/projects`);
  });

  it("expands the home alias and keeps absolute paths", () => {
    expect(resolvePath({ cwd: "/", path: "~/cv" })).toBe("/home/louis/cv");
    expect(resolvePath({ cwd: START_PATH, path: "/home" })).toBe("/home");
  });

  it("never goes above the root", () => {
    expect(resolvePath({ cwd: "/", path: "../../.." })).toBe("/");
  });
});

describe("findNode", () => {
  it("finds pages, case studies and CV files", () => {
    expect(findNode(`${START_PATH}/home.tsx`)?.kind).toBe("file");
    expect(findNode(`${START_PATH}/projects/moggo.md`)?.kind).toBe("file");
    expect(findNode("/home/louis/cv/Louis_Pouillet_CV_EN.pdf")?.kind).toBe("file");
  });

  it("returns undefined for missing paths and paths through files", () => {
    expect(findNode(`${START_PATH}/missing.ts`)).toBeUndefined();
    expect(findNode(`${START_PATH}/home.tsx/inside`)).toBeUndefined();
  });

  it("labels directories with a trailing slash", () => {
    const projects = findNode(`${START_PATH}/projects`);
    expect(projects && nodeLabel(projects)).toBe("projects/");
  });
});

describe("displayPath", () => {
  it("shortens the home directory", () => {
    expect(displayPath(START_PATH)).toBe("~/portfolio/src");
    expect(displayPath("/home/louis")).toBe("~");
    expect(displayPath("/home")).toBe("/home");
  });
});
