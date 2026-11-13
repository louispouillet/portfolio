import { Fragment } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { pagePath } from "../../config/routes";
import { PROJECTS } from "../../data/projects";
import { SERVICES } from "../../data/services";
import { useLanguage } from "../../hooks/useLanguage";
import { UI_TEXT } from "../../i18n/ui";
import ProjectLink from "../content/ProjectLink";
import RichText from "../content/RichText";
import Card from "../ui/Card";
import CodeComment from "../ui/CodeComment";
import PageHeader from "../ui/PageHeader";
import PageLayout from "../ui/PageLayout";
import Tag from "../ui/Tag";

const Services = () => {
  const language = useLanguage();
  const text = UI_TEXT[language].services;

  return (
    <PageLayout isPadded>
      <CodeComment text={text.comment} className="mt-3 lg:ml-3" />
      <PageHeader page="services" title={text.title} className="mt-5 lg:ml-3" />
      <p className="slide-up delay-3 mt-5 max-w-3xl font-mono text-sm leading-relaxed text-muted sm:text-base lg:ml-3">
        <RichText text={text.intro} highlightClassName="text-highlight" />
      </p>

      <div className="slide-up delay-4 mt-8 grid grid-cols-1 gap-4 lg:ml-3 xl:grid-cols-3">
        {SERVICES.map(({ id, icon: Icon, title, summary, deliverables, stack, projectIds }) => {
          const projects = PROJECTS.filter((project) => projectIds.includes(project.id));
          return (
            <Card key={id} className="flex flex-col transition-colors hover:border-accent-teal">
              <Icon className="text-3xl text-accent-teal" />
              <h2 className="font-display mt-3 text-xl font-extrabold text-white">{title[language]}</h2>
              <p className="mt-2 text-sm text-soft">{summary[language]}</p>
              <ul className="mt-4 flex flex-1 flex-col gap-1 text-sm">
                {deliverables.map((deliverable) => (
                  <li key={deliverable.en} className="flex gap-2">
                    <span className="text-accent-teal">*</span>
                    <span>{deliverable[language]}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((technology) => (
                  <Tag key={technology} label={technology} variant="accent" />
                ))}
              </div>
              <p className="mt-4 text-xs text-muted">
                {text.proofTitle} :{" "}
                {projects.map((project, index) => (
                  <Fragment key={project.id}>
                    {index > 0 && <span> · </span>}
                    <ProjectLink project={project} language={language} />
                  </Fragment>
                ))}
              </p>
            </Card>
          );
        })}
      </div>

      <Card className="slide-up delay-5 mt-8 flex flex-col gap-3 border-accent-pink lg:ml-3 lg:max-w-3xl">
        <h2 className="font-display text-2xl font-extrabold text-white">{text.ctaTitle}</h2>
        <p className="text-sm text-soft">{text.ctaText}</p>
        <Link
          to={pagePath({ language, page: "contact" })}
          className="mt-2 flex w-fit items-center gap-2 rounded bg-[#034672] px-4 py-2 text-sm text-white transition-colors hover:bg-[#3295d6]"
        >
          <FaEnvelope />{text.ctaButton}
        </Link>
      </Card>
    </PageLayout>
  );
};

export default Services;
