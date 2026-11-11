import { SKILL_GROUPS } from "../../data/skills";
import { useLanguage } from "../../hooks/useLanguage";
import { UI_TEXT } from "../../i18n/ui";
import SkillGroupCard from "../content/SkillGroupCard";
import CodeComment from "../ui/CodeComment";
import PageHeader from "../ui/PageHeader";
import PageLayout from "../ui/PageLayout";

const QUOTE_AUTHOR = "Mahatma Gandhi";

const Skills = () => {
  const language = useLanguage();
  const text = UI_TEXT[language].skills;

  return (
    <PageLayout isPadded>
      <CodeComment text={text.comment} className="mt-3 ml-4 sm:ml-8" />
      <PageHeader page="skills" title={text.title} className="mt-5 ml-4 sm:ml-8" />
      <div className="mt-8 ml-4 grid w-[90%] grid-cols-1 gap-8 sm:ml-8 sm:gap-10 lg:grid-cols-2 lg:gap-10 slide-up delay-2">
        {SKILL_GROUPS.map((group) => (
          <SkillGroupCard key={group.id} group={group} language={language} />
        ))}
      </div>
      <div className="flex flex-col ml-8 mt-10 slide-up delay-3">
        <span className="font-mono italic text-white opacity-80 text-3xs lg:text-5xs lg:ml-5">{'{'} <span className="text-[#9CDBFF]">"{text.quoteKey}"</span><span>:</span> <span className="text-[#CE9178]">"{text.quote}"</span>,</span>
        <span className="font-mono italic text-white opacity-80 ml-2 text-3xs lg:text-5xs lg:ml-9"> <span className="text-[#9CDBFF]">"{text.authorKey}"</span><span>:</span> <span className="text-[#CE9178]">"{QUOTE_AUTHOR}"</span> {'}'}</span>
      </div>
    </PageLayout>
  );
};

export default Skills;
