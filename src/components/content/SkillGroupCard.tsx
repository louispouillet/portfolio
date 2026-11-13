import { Fragment } from "react";
import { Link } from "react-router-dom";
import { pagePath, type Language } from "../../config/routes";
import type { Project } from "../../data/projects";
import { projectsUsing, type SkillGroup } from "../../data/skills";
import { translate } from "../../i18n/format";
import Tag from "../ui/Tag";

const PROJECT_LINK_CLASSES = "text-soft underline decoration-line underline-offset-2 transition-colors hover:text-white";

const ProjectLink = ({ project, language }: { project: Project; language: Language }) => {
  const label = translate({ text: project.title, language });

  if (project.caseStudy !== undefined) {
    return <Link to={pagePath({ language, page: "projects", slug: project.id })} className={PROJECT_LINK_CLASSES}>{label}</Link>;
  }
  if (project.repositoryUrl !== undefined) {
    return <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className={PROJECT_LINK_CLASSES}>{label}</a>;
  }
  return <span>{label}</span>;
};

type SkillGroupCardProps = {
  group: SkillGroup;
  language: Language;
};

const SkillGroupCard = ({ group, language }: SkillGroupCardProps) => (
  <section className="flex min-w-0 flex-col">
    <h2 className="ml-2 font-mono text-sm text-[#DCDCAA] sm:text-base lg:text-[1.3rem] lg:tracking-[0.1px]">{group.title[language]}</h2>
    <span className="mt-4 ml-2 mb-5 h-px w-full bg-crumb"></span>
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
