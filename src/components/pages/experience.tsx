import "@fontsource/poppins/800.css";
import "../../styles/skills.css";
import { SiTypescript } from "react-icons/si";
import { EXPERIENCES } from "../../data/experiences";
import { useLanguage } from "../../hooks/useLanguage";
import { UI_TEXT } from "../../i18n/ui";
import ExperienceItem from "../content/ExperienceItem";

const Experience = () => {
  const language = useLanguage();
  const text = UI_TEXT[language].experience;

  return (
      <div className="flex h-full w-full flex-col overflow-x-hidden bg-[#1E1E1E] px-4 py-4 sm:px-8 sm:py-6 pb-10">
      <span className="border-l -mt-3 -ml-2 lg:-mt-5 border-[#929AA7] lg:-ml-6 pl-1 text-xs text-[#C0C0C0] sm:text-sm font-mono hidden sm:block">
        louis {'>'} portfolio {'>'} src {'>'}{' '}
        <span className="text-white">experience.ts</span>
      </span>
      <span className="slide-up delay-1 mt-3 max-w-full font-mono text-sm text-[#6A9A58] lg:ml-3 sm:text-lg lg:text-[1rem]">{text.comment}</span>
      <div className="slide-up delay-2 mt-5 flex flex-row items-end gap-1 sm:justify-start lg:ml-3">
        <SiTypescript className="text-4xl text-[#3178C6] sm:text-6xl lg:text-6xl" />
        <span style={{ fontFamily: "poppins" }} className="ml-3 text-3xl font-extrabold tracking-[-1px] text-white sm:text-6xl sm:tracking-[-2px] lg:text-6xl lg:tracking-[-2.5px]">{text.title}</span>
      </div>
      <div className="relative mt-10 flex flex-col slide-up delay-3 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-[#3178C6] before:to-[#1E1E1E] before:content-[''] ml-3">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceItem key={experience.id} experience={experience} language={language} className={index > 0 ? "mt-8" : ""} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
