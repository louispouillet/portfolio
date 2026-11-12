import { EXPERIENCES } from "../../data/experiences";
import { useLanguage } from "../../hooks/useLanguage";
import { UI_TEXT } from "../../i18n/ui";
import ExperienceItem from "../content/ExperienceItem";
import CodeComment from "../ui/CodeComment";
import PageHeader from "../ui/PageHeader";
import PageLayout from "../ui/PageLayout";

const Experience = () => {
  const language = useLanguage();
  const text = UI_TEXT[language].experience;

  return (
    <PageLayout isPadded>
      <CodeComment text={text.comment} className="mt-3 lg:ml-3" />
      <PageHeader page="experience" title={text.title} className="mt-5 lg:ml-3" />
      <div className="relative mt-10 flex flex-col slide-up delay-3 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-[#3178C6] before:to-editor before:content-[''] ml-3">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceItem key={experience.id} experience={experience} language={language} className={index > 0 ? "mt-8" : ""} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Experience;
