import type { Language } from "../../config/routes";
import type { Education } from "../../data/education";
import { formatPeriod } from "../../i18n/format";

type EducationItemProps = {
  education: Education;
  language: Language;
};

const EducationItem = ({ education, language }: EducationItemProps) => {
  const { degree, school, location, period, summary } = education;
  const formattedPeriod = formatPeriod({ period, language });

  return (
    <div className="border-muted border p-3 rounded flex flex-col transition-colors hover:bg-bar hover:border-accent-teal hover:border-2">
      <div className="flex flex-row justify-between items-center">
        <span className="text-white font-bold tracking-normal">{degree[language]}</span>
        <span className="text-soft hidden lg:block">{formattedPeriod}</span>
      </div>
      <div className="flex flex-row justify-between items-center mt-2">
        <span>{school} ({location[language]})</span>
        <span className="text-soft lg:hidden">{formattedPeriod}</span>
      </div>
      <span className="text-comment">{summary[language]}</span>
    </div>
  );
};

export default EducationItem;
