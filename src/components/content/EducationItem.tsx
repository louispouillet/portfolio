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
    <div className="border-[#777] border p-3 rounded flex flex-col transition-colors hover:bg-[#2D2D2D] hover:border-[#4EC9B0] hover:border-2">
      <div className="flex flex-row justify-between items-center">
        <span className="text-white font-bold tracking-normal">{degree[language]}</span>
        <span className="text-[#CCC] hidden lg:block">{formattedPeriod}</span>
      </div>
      <div className="flex flex-row justify-between items-center mt-2">
        <span>{school} ({location[language]})</span>
        <span className="text-[#CCC] lg:hidden">{formattedPeriod}</span>
      </div>
      <span className="text-[#6A9A58]">{summary[language]}</span>
    </div>
  );
};

export default EducationItem;
