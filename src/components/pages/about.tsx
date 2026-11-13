import epitechLogo from "../../assets/images/epitech.png";
import ecole from "../../assets/images/42_Logo.svg";
import { BIO, FOCUS_AREAS } from "../../data/about";
import { EDUCATION } from "../../data/education";
import { useLanguage } from "../../hooks/useLanguage";
import { UI_TEXT } from "../../i18n/ui";
import EducationItem from "../content/EducationItem";
import RichText from "../content/RichText";
import Card from "../ui/Card";
import CodeComment from "../ui/CodeComment";
import PageHeader from "../ui/PageHeader";
import PageLayout from "../ui/PageLayout";

const ABOUT_CARD_CLASSES = "mt-5 sm:ml-4 lg:w-230 mx-auto sm:mx-0 tracking-[-1.5px]";
const ABOUT_CARD_HOVER_CLASSES = "transition-colors hover:bg-bar hover:border-[#E34C25]/60";

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
    <PageLayout isPadded>
        <span className="slide-up delay-1 mt-3 max-w-full font-mono text-sm text-[#7EE787] lg:ml-3 sm:text-lg lg:text-[1rem]"><span className="text-punctuation">{'<'}</span>div{' '}<span className="text-[#9CDBFE]">class<span className="text-white">=</span>"about.css"</span><span className="text-punctuation">{'>'}</span><span className="text-white">{text.tagLine}</span><span className="text-punctuation">{'</'}</span><span>div</span><span className="text-punctuation">{'>'}</span></span>
        <PageHeader page="about" title={text.title} className="mt-5 lg:ml-3" />
        <CodeComment text={text.comment} className="mt-3 sm:ml-8" />
        <div className="flex flex-col">
          <Card className={`slide-up delay-2 ${ABOUT_CARD_CLASSES} ${ABOUT_CARD_HOVER_CLASSES}`}>
            <span><RichText text={BIO[language]} highlightClassName="text-highlight" inserts={BIO_INSERTS} /></span>
          </Card>
          <Card className={`slide-up delay-3 ${ABOUT_CARD_CLASSES} ${ABOUT_CARD_HOVER_CLASSES}`}>
            <div className="flex flex-col">
              <span className="text-accent-teal tracking-[1.5px]">{text.focusTitle}</span>
              <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 gap-5">
                {FOCUS_AREAS.map((focusArea) => (
                  <div key={focusArea.id} className="flex flex-row gap-2 items-start">
                    <span>{focusArea.emoji}</span>
                    <span className="lg:w-100">{focusArea.label[language]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card className={`slide-up delay-4 ${ABOUT_CARD_CLASSES}`}>
              <span className="text-accent-teal tracking-[1.5px]">{text.educationTitle}</span>
              <div className="flex flex-col mt-3 gap-5">
                {EDUCATION.map((education) => (
                  <EducationItem key={education.id} education={education} language={language} />
                ))}
              </div>
          </Card>

        </div>

    </PageLayout>
  );
};

export default About;
