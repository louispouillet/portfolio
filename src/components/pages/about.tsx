import "@fontsource/poppins/800.css";
import "../../styles/skills.css"
import { FaHtml5 } from "react-icons/fa";
import epitechLogo from "../../assets/images/epitech.png";
import ecole from "../../assets/images/42_Logo.svg";
import { BIO, FOCUS_AREAS } from "../../data/about";
import { EDUCATION } from "../../data/education";
import { useLanguage } from "../../hooks/useLanguage";
import { UI_TEXT } from "../../i18n/ui";
import EducationItem from "../content/EducationItem";
import RichText from "../content/RichText";

const BIO_INSERTS = {
  epitech: (
    <span className="inline-flex items-center gap-1 whitespace-nowrap align-middle"><img src={epitechLogo} alt="Epitech" className="h-5 w-auto" style={{ filter: "brightness(0) saturate(100%) invert(67%) sepia(81%) saturate(1247%) hue-rotate(184deg) brightness(100%) contrast(99%)" }} />Toulouse</span>
  ),
  school42: (
    <span className="inline-flex items-center gap-1 whitespace-nowrap align-middle"><img src={ecole} alt="42 Adelaide" className="h-7 w-auto" style={{ filter: "brightness(0) saturate(100%) invert(100%)" }} />Adelaïde</span>
  ),
};

const About = () => {
  const language = useLanguage();
  const text = UI_TEXT[language].about;

  return (
    <div className="flex h-full w-full flex-col overflow-x-hidden bg-[#1E1E1E] px-4 py-4 sm:px-8 sm:py-6">
        <span className="border-l -mt-3 -ml-2 lg:-mt-5 border-[#929AA7] lg:-ml-6 pl-1 text-xs text-[#C0C0C0] sm:text-sm font-mono hidden sm:block">
                louis {'>'} portfolio {'>'} src {'>'}{' '}
              <span className="text-white">about.html</span>
            </span>
        <span className="slide-up delay-1 mt-3 max-w-full font-mono text-sm text-[#7EE787] lg:ml-3 sm:text-lg lg:text-[1rem]"><span className="text-[#808080]">{'<'}</span>div{' '}<span className="text-[#9CDBFE]">class<span className="text-white">=</span>"about.css"</span><span className="text-[#808080]">{'>'}</span><span className="text-white">{text.tagLine}</span><span className="text-[#808080]">{'</'}</span><span>div</span><span className="text-[#808080]">{'>'}</span></span>
         <div className="slide-up delay-2 mt-5 flex flex-row items-end gap-1 sm:justify-start lg:ml-3">
                  <FaHtml5 className="text-4xl text-[#E34C25] sm:text-6xl lg:text-6xl" />
                  <span style={{ fontFamily: "poppins" }} className="text-4xl font-extrabold tracking-[-1px] text-white sm:text-6xl sm:tracking-[-2px] lg:text-6xl lg:tracking-[-2.5px]">{text.title}</span>
        </div>
        <span className="slide-up delay-1 mt-3 max-w-full font-mono text-sm italic text-[#777] sm:ml-8 sm:text-lg lg:text-[1rem]">{text.comment}</span>
        <div className="flex flex-col">
          <div className="slide-up delay-2 bg bg-[#232323] mt-5 p-6 border border-[#777] rounded-[5px] font-mono text-[#777] sm:ml-4 lg:w-230 mx-auto sm:mx-0 tracking-[-1.5px] transition-colors hover:bg-[#2D2D2D] hover:border-t-[#E34C25] hover:border-t-2">
            <span><RichText text={BIO[language]} highlightClassName="text-[#4DBBF6]" inserts={BIO_INSERTS} /></span>
          </div>
          <div className="slide-up delay-3 bg bg-[#232323] mt-5 p-6 border border-[#777] rounded-[5px] font-mono text-[#777] sm:ml-4 lg:w-230 mx-auto sm:mx-0 tracking-[-1.5px] transition-colors hover:bg-[#2D2D2D] hover:border-t-[#E34C25] hover:border-t-2">
            <div className="flex flex-col">
              <span className="text-[#4EC9B0] tracking-[1.5px]">{text.focusTitle}</span>
              <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 gap-5">
                {FOCUS_AREAS.map((focusArea) => (
                  <div key={focusArea.id} className="flex flex-row gap-2 items-start">
                    <span>{focusArea.emoji}</span>
                    <span className="lg:w-100">{focusArea.label[language]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="slide-up delay-4 bg bg-[#232323] mt-5 p-6 border border-[#777] rounded-[5px] font-mono text-[#777] sm:ml-4 lg:w-230 mx-auto sm:mx-0 tracking-[-1.5px]">
              <span className="text-[#4EC9B0] tracking-[1.5px]">{text.educationTitle}</span>
              <div className="flex flex-col mt-3 gap-5">
                {EDUCATION.map((education) => (
                  <EducationItem key={education.id} education={education} language={language} />
                ))}
              </div>
          </div>

        </div>

    </div>
  );
};

export default About;
