import { Fragment } from "react";
import type { Language } from "../../config/routes";
import { projectsUsing, type SkillGroup } from "../../data/skills";
import Tag from "../ui/Tag";
import ProjectLink from "./ProjectLink";

type SkillGroupCardProps = {
  group: SkillGroup;
  language: Language;
};

const SkillGroupCard = ({ group, language }: SkillGroupCardProps) => (
  <section className="flex min-w-0 flex-col">
    <h2 className="ml-2 font-mono text-sm text-[#DCDCAA] sm:text-base lg:text-[1.3rem] lg:tracking-[0.1px]">{group.title[language]}</h2>
    <span className="mt-4 ml-2 mb-5 h-px w-full bg-line-strong"></span>
    <ul className="ml-2 flex flex-col gap-3">
      {group.skills.map((skill) => {
        const projects = projectsUsing(skill);
        return (
          <li key={skill} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <span className="shrink-0 sm:w-44"><Tag label={skill} variant="neutral" /></span>
            {projects.length > 0 && (
              <span className="font-mono text-xs text-muted">
                {projects.map((project, index) => (
                  <Fragment key={project.id}>
                    {index > 0 && <span className="text-muted"> · </span>}
                    <ProjectLink project={project} language={language} />
                  </Fragment>
                ))}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  </section>
);

export default SkillGroupCard;
