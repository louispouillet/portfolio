import "@fontsource/poppins/800.css";
import "../../styles/skills.css"
import { VscJson } from "react-icons/vsc";
import { SKILL_GROUPS } from "../../data/skills";
import { useLanguage } from "../../hooks/useLanguage";
import { UI_TEXT } from "../../i18n/ui";
import SkillGroupCard from "../content/SkillGroupCard";

const QUOTE_AUTHOR = "Mahatma Gandhi";

const Skills = () => {
  const language = useLanguage();
  const text = UI_TEXT[language].skills;

  return (
      <div className="flex h-full w-full flex-col overflow-x-hidden bg-[#1E1E1E] px-4 py-4 sm:px-8 sm:py-6">
          <span className="border-l -mt-3 -ml-2 lg:-mt-5 border-[#929AA7] lg:-ml-6 pl-1 text-xs text-[#C0C0C0] sm:text-sm font-mono hidden sm:block">
                louis {'>'} portfolio {'>'} src {'>'}{' '}
              <span className="text-white">skills.json</span>
            </span>
            <span className="slide-up delay-1 mt-3 ml-4 max-w-full font-mono text-sm italic text-[#6B9A57] sm:ml-8 sm:text-lg lg:text-[1rem]">{text.comment}</span>
            <div className="slide-up delay-2 mt-5 ml-4 flex flex-row items-end gap-1 sm:ml-8">
              <VscJson className="text-4xl text-[#f71ecc] sm:text-6xl lg:text-6xl" />
              <span style={{ fontFamily: "poppins" }} className="text-4xl font-extrabold tracking-[-1px] text-white sm:text-6xl sm:tracking-[-2px] lg:text-6xl lg:tracking-[-2.5px]">{text.title}</span>
          </div>
            <div className=" mt-8 ml-4 grid w-[90%]  grid-cols-1 gap-8 sm:ml-8 sm:gap-10 lg:grid-cols-2 lg:gap-10 slide-up delay-2">
              {SKILL_GROUPS.map((group) => (
                <SkillGroupCard key={group.id} group={group} language={language} />
              ))}
          </div>
            <div className="flex flex-col ml-8 mt-10 slide-up delay-3">
              <span className="font-mono italic text-white opacity-80 text-3xs lg:text-5xs lg:ml-5">{'{'} <span className="text-[#9CDBFF]">"{text.quoteKey}"</span><span>:</span> <span className="text-[#CE9178]">"{text.quote}"</span>,</span>
              <span className="font-mono italic text-white opacity-80 ml-2 text-3xs lg:text-5xs lg:ml-9"> <span className="text-[#9CDBFF]">"{text.authorKey}"</span><span>:</span> <span className="text-[#CE9178]">"{QUOTE_AUTHOR}"</span> {'}'}</span>
            </div>


    </div>
  );
};

export default Skills;
