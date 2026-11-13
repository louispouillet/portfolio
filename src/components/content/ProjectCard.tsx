import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import type { GitHubRepository } from "../../api/github";
import { Link } from "react-router-dom";
import { pagePath, type Language } from "../../config/routes";
import type { Project, ProjectAccent } from "../../data/projects";
import { translate } from "../../i18n/format";
import { UI_TEXT } from "../../i18n/ui";
import ProjectDemoDialog from "./ProjectDemoDialog";
import RepositoryStats from "./RepositoryStats";
import RichText from "./RichText";
import Tag from "../ui/Tag";

const ACCENT_CLASSES: Record<ProjectAccent, { hover: string; text: string; highlight: string }> = {
  pink: { hover: "hover:border-accent-pink/60", text: "text-accent-pink", highlight: "text-accent-teal" },
  teal: { hover: "hover:border-accent-teal/60", text: "text-accent-teal", highlight: "text-accent-pink" },
};

export type ProjectCardVariant = "featured" | "compact";

const VARIANT_CLASSES: Record<ProjectCardVariant, { card: string; icon: string; title: string; description: string }> = {
  featured: {
    card: "p-4",
    icon: "text-4xl",
    title: "text-xl lg:text-2xl",
    description: "text-[0.875rem] border border-line p-2 rounded-md",
  },
  compact: {
    card: "p-3",
    icon: "text-2xl",
    title: "text-lg",
    description: "text-xs line-clamp-4",
  },
};

type ProjectCardProps = {
  project: Project;
  language: Language;
  variant: ProjectCardVariant;
  repository?: GitHubRepository;
};

const ProjectCard = ({ project, language, variant, repository }: ProjectCardProps) => {
  const { id, title, icon: Icon, accent, context, category, description, stack, repositoryUrl, caseStudy, media } = project;
  const accentClasses = ACCENT_CLASSES[accent];
  const variantClasses = VARIANT_CLASSES[variant];
  const linkClasses = `${accentClasses.text} border rounded-sm px-2 py-1 flex items-center gap-1 hover:bg-bar font-mono text-xs`;

  return (
    <article className={`relative flex flex-col rounded-lg border border-line overflow-hidden bg-panel transition-[border-color,box-shadow] duration-300 hover:shadow-[0_6px_20px_rgb(0_0_0/0.35)] ${accentClasses.hover} ${variantClasses.card}`}>

      <Icon className={`text-white ${variantClasses.icon}`} />

      <span className={`${accentClasses.text} font-mono text-xs lg:text-sm tracking-[1px] mt-2`}>{category[language]}</span>

      <div className="flex flex-row items-start justify-between gap-2 lg:mt-2">
        <h3 className={`font-display text-white font-extrabold tracking-[1px] ${variantClasses.title}`}>{translate({ text: title, language })}</h3>
        <div className="flex shrink-0 flex-row gap-2">
          {media && (
            <ProjectDemoDialog media={media} title={translate({ text: title, language })} language={language} buttonClassName={`${linkClasses} bg-bar`} />
          )}
          {caseStudy && (
            <Link to={pagePath({ language, page: "projects", slug: id })} className={`${linkClasses} bg-bar`}>
              {UI_TEXT[language].projects.caseStudyLink}<GoArrowRight />
            </Link>
          )}
          {repositoryUrl && (
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className={linkClasses}>
              GitHub<GoArrowUpRight />
            </a>
          )}
        </div>
      </div>
      <span className="font-mono text-xs text-soft">{context.organization} · {context.year} · {context.role[language]}</span>
      {repository && <RepositoryStats repository={repository} language={language} className="mt-1" />}
      <p className={`flex-1 mt-3 text-muted font-mono ${variantClasses.description}`}>
        <RichText text={description[language]} highlightClassName={accentClasses.highlight} />
      </p>
      <div className="mt-2 flex flex-row flex-wrap gap-2">
        {stack.map((technology) => (
          <Tag key={technology} label={technology} variant="neutral" />
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
