import { Link } from "react-router-dom";
import { pagePath, type Language } from "../../config/routes";
import type { Project } from "../../data/projects";
import { translate } from "../../i18n/format";

const PROJECT_LINK_CLASSES = "text-soft underline decoration-line underline-offset-2 transition-colors hover:text-white";

type ProjectLinkProps = {
  project: Project;
  language: Language;
};

const ProjectLink = ({ project, language }: ProjectLinkProps) => {
  const label = translate({ text: project.title, language });

  if (project.caseStudy !== undefined) {
    return <Link to={pagePath({ language, page: "projects", slug: project.id })} className={PROJECT_LINK_CLASSES}>{label}</Link>;
  }
  if (project.repositoryUrl !== undefined) {
    return <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className={PROJECT_LINK_CLASSES}>{label}</a>;
  }
  return <span>{label}</span>;
};

export default ProjectLink;
