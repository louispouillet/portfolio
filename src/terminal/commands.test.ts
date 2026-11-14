import { describe, expect, it } from "vitest";
import type { Language } from "../config/routes";
import { runCommand } from "./commands";
import { completeInput } from "./completion";
import { HOME_PATH, START_PATH } from "./filesystem";

const NOW = new Date("2026-11-13T10:00:00Z");

type RunOptions = { cwd?: string; language?: Language; history?: string[] };

const run = (input: string, { cwd = START_PATH, language = "en", history = [] }: RunOptions = {}) =>
  runCommand({ input, cwd, language, history, now: NOW });

const texts = (input: string, options?: RunOptions) => run(input, options).lines.map((line) => line.text);

describe("runCommand", () => {
  it("ignores blank input", () => {
    expect(run("   ")).toEqual({ lines: [], effects: [], cwd: START_PATH });
  });

  it("reports unknown commands in the current language", () => {
    expect(run("foo").lines[0]).toMatchObject({ tone: "error", text: expect.stringContaining("command not found: foo") });
    expect(run("foo", { language: "fr" }).lines[0].text).toContain("commande introuvable : foo");
  });

  it("lists the visible commands in help, without the hidden ones", () => {
    const output = texts("help").join("\n");
    expect(output).toContain("neofetch");
    expect(output).not.toContain("sudo");
  });
});

describe("ls", () => {
  it("lists the pages and marks directories", () => {
    expect(texts("ls")).toEqual(expect.arrayContaining(["home.tsx", "services.yaml", "projects/"]));
  });

  it("lists case studies and ignores flags", () => {
    expect(texts("ls -la projects")).toEqual(["yopay.md", "moggo.md", "reimbursement.md", "kayzen-sso.md"]);
  });

  it("fails on a missing path", () => {
    expect(run("ls nope").lines[0].tone).toBe("error");
  });
});

describe("cd and pwd", () => {
  it("changes directory and navigates to the directory page", () => {
    const result = run("cd projects");
    expect(result.cwd).toBe(`${START_PATH}/projects`);
    expect(result.effects).toEqual([{ kind: "navigate", tab: { page: "projects" } }]);
  });

  it("goes home without argument and has no page there", () => {
    expect(run("cd")).toMatchObject({ cwd: HOME_PATH, effects: [] });
  });

  it("refuses files and missing paths without moving", () => {
    expect(run("cd home.tsx")).toMatchObject({ cwd: START_PATH });
    expect(run("cd home.tsx").lines[0].text).toContain("not a directory");
    expect(run("cd nope").lines[0].text).toContain("no such file or directory");
  });

  it("prints the absolute current directory", () => {
    expect(texts("pwd")).toEqual([START_PATH]);
  });
});

describe("cat", () => {
  it("prints a case study as text", () => {
    const output = texts("cat projects/moggo.md").join("\n");
    expect(output).toContain("# Moggo");
    expect(output).toContain("S3 → Step Functions → Transcribe");
    expect(output).not.toContain("**");
  });

  it("prints pages in French", () => {
    expect(texts("cat about.html", { language: "fr" }).join("\n")).toContain("Epitech Toulouse");
  });

  it("explains errors", () => {
    expect(texts("cat")[0]).toContain("missing operand");
    expect(texts("cat projects")[0]).toContain("is a directory");
  });
});

describe("open", () => {
  it("navigates to pages and case studies", () => {
    expect(run("open contact.css").effects).toEqual([{ kind: "navigate", tab: { page: "contact" } }]);
    expect(run("open projects/yopay.md").effects).toEqual([{ kind: "navigate", tab: { page: "projects", slug: "yopay" } }]);
  });

  it("opens external links and downloads files", () => {
    expect(run("open github").effects).toEqual([{ kind: "openUrl", url: "https://github.com/louispouillet" }]);
    expect(run("open ~/cv/Louis_Pouillet_CV_FR.pdf").effects[0]).toMatchObject({ kind: "download", fileName: "Louis_Pouillet_CV_FR.pdf" });
  });

  it("fails on missing targets", () => {
    expect(run("open nope").lines[0].tone).toBe("error");
  });
});

describe("cv and lang", () => {
  it("downloads the CV in the current or requested language", () => {
    expect(run("cv").effects).toEqual([{ kind: "download", href: "/cv/Louis_Pouillet_CV_EN.pdf", fileName: "Louis_Pouillet_CV_EN.pdf" }]);
    expect(run("cv fr").effects[0]).toMatchObject({ fileName: "Louis_Pouillet_CV_FR.pdf" });
    expect(run("cv de").lines[0].tone).toBe("error");
  });

  it("switches the language and answers in the new one", () => {
    const result = run("lang fr");
    expect(result.effects).toEqual([{ kind: "setLanguage", language: "fr" }]);
    expect(result.lines[0].text).toContain("Langue changée");
    expect(run("lang en").effects).toEqual([]);
  });
});

describe("other commands", () => {
  it("numbers the history", () => {
    expect(texts("history", { history: ["ls", "pwd"] })).toEqual(["   1  ls", "   2  pwd"]);
  });

  it("emits clear and close effects", () => {
    expect(run("clear").effects).toEqual([{ kind: "clear" }]);
    expect(run("exit").effects).toEqual([{ kind: "close" }]);
  });

  it("echoes quoted text and refuses sudo politely", () => {
    expect(texts(`echo "hello   world"`)).toEqual(["hello   world"]);
    expect(run("sudo rm -rf /").lines[0].tone).toBe("error");
  });

  it("aligns neofetch info next to the logo", () => {
    const output = texts("neofetch");
    expect(output[0]).toContain("louis@portfolio");
    expect(output.some((line) => line.includes("Sigterm"))).toBe(true);
  });
});

describe("completeInput", () => {
  it("completes a unique command name with a trailing space", () => {
    expect(completeInput({ input: "neo", cwd: START_PATH })).toEqual({ value: "neofetch ", suggestions: [] });
  });

  it("extends to the common prefix and lists ambiguous commands", () => {
    expect(completeInput({ input: "c", cwd: START_PATH })).toEqual({ value: "c", suggestions: ["cd", "cat", "contact", "cv", "clear"] });
  });

  it("completes directories without a trailing space and files with one", () => {
    expect(completeInput({ input: "cd proj", cwd: START_PATH })).toEqual({ value: "cd projects/", suggestions: [] });
    expect(completeInput({ input: "cat projects/mo", cwd: START_PATH })).toEqual({ value: "cat projects/moggo.md ", suggestions: [] });
  });

  it("completes command keywords", () => {
    expect(completeInput({ input: "open git", cwd: START_PATH })).toEqual({ value: "open github ", suggestions: [] });
    expect(completeInput({ input: "lang f", cwd: START_PATH })).toEqual({ value: "lang fr ", suggestions: [] });
  });

  it("leaves unknown words unchanged", () => {
    expect(completeInput({ input: "cat zzz", cwd: START_PATH })).toEqual({ value: "cat zzz", suggestions: [] });
  });
});
