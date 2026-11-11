import { GoArrowUpRight } from "react-icons/go";
import type { Language } from "../../config/routes";
import type { Project, ProjectAccent } from "../../data/projects";
import { translate } from "../../i18n/format";
import RichText from "./RichText";

const ACCENT_CLASSES: Record<ProjectAccent, { line: string; text: string; highlight: string }> = {
  pink: { line: "bg-accent-pink", text: "text-accent-pink", highlight: "text-accent-teal" },
  teal: { line: "bg-accent-teal", text: "text-accent-teal", highlight: "text-accent-pink" },
};

type ProjectCardProps = {
  project: Project;
  language: Language;
  className?: string;
};

const ProjectCard = ({ project, language, className }: ProjectCardProps) => {
  const { title, icon: Icon, accent, category, description, tags, repositoryUrl } = project;
  const accentClasses = ACCENT_CLASSES[accent];

  return (
    <div className={`relative group flex flex-col p-4 rounded border border-line w-auto lg:w-130 overflow-hidden bg-panel ${className ?? ""}`}>
      <span className={`absolute top-0 left-0 h-0.5 w-0 ${accentClasses.line} group-hover:w-full transition-all duration-800`}></span>
      <span className={`absolute top-0 right-0 w-0.5 h-0 ${accentClasses.line} group-hover:h-full transition-all duration-800 delay-100`}></span>
      <span className={`absolute bottom-0 right-0 h-0.5 w-0 ${accentClasses.line} group-hover:w-full transition-all duration-800 delay-180`}></span>
      <span className={`absolute bottom-0 left-0 w-0.5 h-0 ${accentClasses.line} group-hover:h-full transition-all duration-800 delay-230`}></span>

      <Icon className="text-4xl text-white lg:text-4xl" />

      <span className={`${accentClasses.text} font-mono text-xs lg:text-sm tracking-[1px] mt-2`}>{category[language]}</span>

      <div className="flex flex-row justify-between lg:mt-2">
        <span className="font-display text-white font-extrabold text-xl lg:text-2xl tracking-[1px]">{title}</span>
        {repositoryUrl && (
          <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
            <span className={`${accentClasses.text} border rounded-sm px-2 py-1 flex items-center gap-1 hover:bg-bar font-mono text-xs`}>GitHub<GoArrowUpRight /></span>
          </a>
        )}
      </div>
      <span className="flex-1 text-[0.875rem] mt-3 text-muted font-mono border p-2 rounded">
        <RichText text={description[language]} highlightClassName={accentClasses.highlight} />
      </span>
      <div className="mt-2 flex flex-row flex-wrap gap-2">
        {tags.map((tag) => {
          const label = translate({ text: tag, language });
          return (
            <span key={label} className="bg-bar text-white pl-2 pr-2 py-1 rounded text-sm border-[#707070] border">{label}</span>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
