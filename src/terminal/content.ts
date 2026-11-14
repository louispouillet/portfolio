import type { Language } from "../config/routes";
import { BIO, FOCUS_AREAS } from "../data/about";
import { CONTACT_LINKS, FULL_NAME } from "../data/contact";
import { EDUCATION } from "../data/education";
import { EXPERIENCES } from "../data/experiences";
import { PROJECTS, type Project } from "../data/projects";
import { SERVICES } from "../data/services";
import { SKILL_GROUPS, projectsUsing } from "../data/skills";
import { formatPeriod, translate } from "../i18n/format";
import { UI_TEXT } from "../i18n/ui";
import type { OutputLine } from "./types";

const HIGHLIGHT_MARKER_PATTERN = /\*\*/g;
const INSERTS: Record<string, string> = { "{epitech}": "Epitech Toulouse", "{school42}": "42 Adelaide" };

export const plainText = (text: string): string =>
  Object.entries(INSERTS).reduce((result, [token, value]) => result.replaceAll(token, value), text.replace(HIGHLIGHT_MARKER_PATTERN, ""));

const heading = (text: string): OutputLine => ({ text: `# ${text}`, tone: "accent" });
const blank: OutputLine = { text: "" };
const bullet = (text: string): OutputLine => ({ text: `  * ${text}` });

export const homeContent = (language: Language): OutputLine[] => {
  const text = UI_TEXT[language].home;
  return [heading(FULL_NAME), { text: plainText(text.intro) }, blank, { text: text.badges.student, tone: "muted" }];
};

export const servicesContent = (language: Language): OutputLine[] =>
  SERVICES.flatMap((service) => [
    heading(service.title[language]),
    { text: service.summary[language] },
    ...service.deliverables.map((deliverable) => bullet(deliverable[language])),
    blank,
  ]);

const projectTitle = ({ project, language }: { project: Project; language: Language }): string => translate({ text: project.title, language });

export const projectsContent = (language: Language): OutputLine[] =>
  PROJECTS.flatMap((project) => [
    { text: `${projectTitle({ project, language })} · ${project.context.organization} · ${project.context.year}`, tone: "highlight" },
    { text: `  ${plainText(project.description[language])}` },
    blank,
  ]);

export const aboutContent = (language: Language): OutputLine[] => [
  heading(FULL_NAME),
  { text: plainText(BIO[language]) },
  blank,
  ...FOCUS_AREAS.map((area) => bullet(area.label[language])),
  blank,
  ...EDUCATION.map((education) => ({ text: `${education.school} · ${formatPeriod({ period: education.period, language })}`, tone: "muted" as const })),
];

export const skillsContent = (language: Language): OutputLine[] =>
  SKILL_GROUPS.flatMap((group) => [
    heading(group.title[language]),
    ...group.skills.map((skill) => {
      const projects = projectsUsing(skill).map((project) => projectTitle({ project, language }));
      return bullet(projects.length > 0 ? `${skill} (${projects.join(", ")})` : skill);
    }),
    blank,
  ]);

export const experienceContent = (language: Language): OutputLine[] =>
  EXPERIENCES.flatMap((experience) => [
    { text: `${experience.role[language]} @ ${experience.company} · ${formatPeriod({ period: experience.period, language })}`, tone: "highlight" },
    { text: `  ${experience.description[language]}` },
    blank,
  ]);

export const contactContent = (language: Language): OutputLine[] =>
  CONTACT_LINKS.map((link) => ({ text: `${translate({ text: link.label, language }).padEnd(10)} ${link.handle}` }));

export const caseStudyContent = ({ project, language }: { project: Project; language: Language }): OutputLine[] => {
  const caseStudy = project.caseStudy;
  if (caseStudy === undefined) {
    return [];
  }
  const sections = UI_TEXT[language].caseStudy;
  return [
    heading(projectTitle({ project, language })),
    { text: `${project.context.organization} · ${project.context.year} · ${project.context.role[language]}`, tone: "muted" },
    blank,
    { text: `## ${sections.contextTitle}`, tone: "accent" },
    { text: plainText(caseStudy.context[language]) },
    blank,
    { text: `## ${sections.workTitle}`, tone: "accent" },
    { text: plainText(caseStudy.work[language]) },
    blank,
    { text: `## ${sections.architectureTitle}`, tone: "accent" },
    { text: caseStudy.architecture.map((step) => step.name).join(" → ") },
    blank,
    { text: `## ${sections.choicesTitle}`, tone: "accent" },
    ...caseStudy.choices.map((choice) => bullet(plainText(choice[language]))),
    blank,
    { text: `## ${sections.outcomeTitle}`, tone: "accent" },
    { text: plainText(caseStudy.outcome[language]) },
    blank,
    { text: `## ${sections.stackTitle}`, tone: "accent" },
    { text: project.stack.join(", ") },
  ];
};
