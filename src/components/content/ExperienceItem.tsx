import { GoArrowRight } from "react-icons/go";
import { GrCodeSandbox } from "react-icons/gr";
import { Link } from "react-router-dom";
import { pagePath, type Language } from "../../config/routes";
import type { Experience } from "../../data/experiences";
import { findCaseStudyProject } from "../../data/projects";
import { formatPeriod, translate } from "../../i18n/format";
import { UI_TEXT } from "../../i18n/ui";
import Tag from "../ui/Tag";

const INDENT_CLASSES = "ml-6 sm:ml-10";

type ExperienceItemProps = {
  experience: Experience;
  language: Language;
  className?: string;
};

const ExperienceItem = ({ experience, language, className }: ExperienceItemProps) => {
  const { period, role, company, country, description, highlights, projectIds, skills } = experience;
  const caseStudies = (projectIds ?? []).flatMap((projectId) => findCaseStudyProject(projectId) ?? []);

  return (
    <div className={`flex flex-col ${className ?? ""}`}>
      <div className="flex flex-row">
        <GrCodeSandbox className="ml-2 text-3xl text-[#3178C6]" />
        <span className="ml-2 mt-1 font-mono text-[#8C939F]">{formatPeriod({ period, language })}</span>
      </div>
      <h2 className={`font-display mt-1 text-2xl font-bold italic leading-tight text-white sm:text-4xl ${INDENT_CLASSES}`}>{role[language]}</h2>
      <span className={`font-mono text-sm text-[#34D399] sm:text-base ${INDENT_CLASSES}`}>@ {company} · {country[language]}</span>
      <p className={`mt-3 max-w-full pr-2 font-mono text-xs text-soft sm:text-sm lg:max-w-250 ${INDENT_CLASSES}`}>{description[language]}</p>
      {highlights && (
        <ul className={`mt-3 flex max-w-full flex-col gap-1 pr-2 font-mono text-xs text-soft sm:text-sm lg:max-w-250 ${INDENT_CLASSES}`}>
          {highlights.map((highlight) => (
            <li key={highlight.en} className="flex gap-2">
              <span className="text-[#34D399]">*</span>
              <span>{highlight[language]}</span>
            </li>
          ))}
        </ul>
      )}
      {caseStudies.length > 0 && (
        <div className={`mt-3 flex flex-wrap gap-2 ${INDENT_CLASSES}`}>
          {caseStudies.map((project) => (
            <Link
              key={project.id}
              to={pagePath({ language, page: "projects", slug: project.id })}
              className="flex items-center gap-1 rounded-sm border border-[#34D399] px-2 py-1 font-mono text-xs text-[#34D399] transition-colors hover:bg-bar"
            >
              {UI_TEXT[language].projects.caseStudyLink} · {translate({ text: project.title, language })}<GoArrowRight />
            </Link>
          ))}
        </div>
      )}
      <div className={`mt-3 flex max-w-full flex-wrap gap-2 font-mono lg:max-w-200 ${INDENT_CLASSES}`}>
        {skills.map((skill) => {
          const label = translate({ text: skill, language });
          return (
            <Tag key={label} label={label} variant="accent" />
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceItem;
