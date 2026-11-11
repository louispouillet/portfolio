import { GrCodeSandbox } from "react-icons/gr";
import type { Language } from "../../config/routes";
import type { Experience } from "../../data/experiences";
import { formatPeriod, translate } from "../../i18n/format";

type ExperienceItemProps = {
  experience: Experience;
  language: Language;
  className?: string;
};

const ExperienceItem = ({ experience, language, className }: ExperienceItemProps) => {
  const { period, role, company, country, description, skills } = experience;

  return (
    <div className={`flex flex-col ${className ?? ""}`}>
      <div className="flex flex-row">
        <GrCodeSandbox className="ml-2 text-3xl text-[#3178C6]" />
        <span className="ml-2 mt-1 font-mono text-[#8C939F]">{formatPeriod({ period, language })}</span>
      </div>
      <span className="font-display ml-6 mt-1 text-2xl font-bold italic leading-tight text-white sm:ml-10 sm:text-4xl">{role[language]}</span>
      <span className="ml-6 font-mono text-sm text-[#34D399] sm:ml-10 sm:text-base">@ {company} · {country[language]}</span>
      <span className="ml-6 mt-3 max-w-full pr-2 font-mono text-xs text-soft sm:ml-10 sm:text-sm lg:max-w-250">{description[language]}</span>
      <div className="ml-6 mt-3 flex max-w-full flex-wrap gap-2 font-mono sm:ml-10 lg:max-w-200">
        {skills.map((skill) => {
          const label = translate({ text: skill, language });
          return (
            <span key={label} className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-highlight text-xs rounded">{label}</span>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceItem;
