import type { ReactNode } from "react";
import { GoArrowLeft, GoArrowUpRight } from "react-icons/go";
import { Link, Navigate } from "react-router-dom";
import { pagePath } from "../../config/routes";
import { findCaseStudyProject } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import { UI_TEXT } from "../../i18n/ui";
import ArchitectureFlow from "../content/ArchitectureFlow";
import RichText from "../content/RichText";
import CodeComment from "../ui/CodeComment";
import PageHeader from "../ui/PageHeader";
import PageLayout from "../ui/PageLayout";
import Tag from "../ui/Tag";

const HIGHLIGHT_CLASS = "text-highlight";

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mt-8 max-w-4xl lg:ml-3">
    <h2 className="font-mono text-lg text-white"><span className="text-punctuation">## </span>{title}</h2>
    <div className="mt-3 font-mono text-sm leading-relaxed text-soft">{children}</div>
  </section>
);

type CaseStudyProps = {
  slug: string;
};

const CaseStudy = ({ slug }: CaseStudyProps) => {
  const language = useLanguage();
  const text = UI_TEXT[language].caseStudy;
  const project = findCaseStudyProject(slug);

  if (project === undefined) {
    return <Navigate to={pagePath({ language, page: "projects" })} replace />;
  }

  const { title, icon, context, description, stack, repositoryUrl, caseStudy } = project;

  return (
    <PageLayout isPadded>
      <Link to={pagePath({ language, page: "projects" })} className="mt-3 flex w-fit items-center gap-1 font-mono text-sm text-muted transition-colors hover:text-white lg:ml-3">
        <GoArrowLeft />{text.back}
      </Link>
      <CodeComment text={`// ${context.organization} · ${context.year} · ${context.role[language]}`} className="mt-4 lg:ml-3" />
      <PageHeader page="projects" title={title} icon={icon} iconClassName="text-white" className="mt-3 lg:ml-3" />
      <p className="slide-up delay-3 mt-5 max-w-4xl font-mono text-base leading-relaxed text-muted lg:ml-3">
        <RichText text={description[language]} highlightClassName={HIGHLIGHT_CLASS} />
      </p>

      <div className="slide-up delay-4">
        <Section title={text.contextTitle}>
          <p><RichText text={caseStudy.context[language]} highlightClassName={HIGHLIGHT_CLASS} /></p>
        </Section>
        <Section title={text.workTitle}>
          <p><RichText text={caseStudy.work[language]} highlightClassName={HIGHLIGHT_CLASS} /></p>
        </Section>
        <Section title={text.architectureTitle}>
          <ArchitectureFlow steps={caseStudy.architecture} language={language} />
        </Section>
        <Section title={text.choicesTitle}>
          <ul className="flex list-none flex-col gap-2">
            {caseStudy.choices.map((choice) => (
              <li key={choice.en} className="flex gap-2">
                <span className="text-accent-teal">*</span>
                <span><RichText text={choice[language]} highlightClassName={HIGHLIGHT_CLASS} /></span>
              </li>
            ))}
          </ul>
        </Section>
        <Section title={text.outcomeTitle}>
          <p><RichText text={caseStudy.outcome[language]} highlightClassName={HIGHLIGHT_CLASS} /></p>
        </Section>
        <Section title={text.stackTitle}>
          <div className="flex flex-wrap gap-2">
            {stack.map((technology) => (
              <Tag key={technology} label={technology} variant="accent" />
            ))}
          </div>
          {repositoryUrl && (
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className="mt-5 flex w-fit items-center gap-1 rounded border border-accent-teal px-3 py-2 text-accent-teal transition-colors hover:bg-bar">
              {text.repositoryLink}<GoArrowUpRight />
            </a>
          )}
        </Section>
      </div>
    </PageLayout>
  );
};

export default CaseStudy;
