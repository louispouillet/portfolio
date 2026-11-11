import { PROJECTS } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import { UI_TEXT } from "../../i18n/ui";
import ProjectCard from "../content/ProjectCard";
import CodeComment from "../ui/CodeComment";
import PageHeader from "../ui/PageHeader";
import PageLayout from "../ui/PageLayout";

const Projects = () => {
  const language = useLanguage();
  const text = UI_TEXT[language].projects;

  return (
    <PageLayout>
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 ">
        <div className="slide-up delay-1 flex flex-row items-center gap-2 lg:ml-8 ml-4 mt-5">
          <div className="flex flex-col lg:gap-10 gap-4">
            <CodeComment text={text.comment} />
            <PageHeader page="projects" title={text.title} />
            <span className="text-muted font-mono w-auto lg:w-160 slide-up delay-3">{text.quote}</span>
          </div>
        </div>
        <div className="lg:mt-0 lg:w-1/3 hidden lg:block slide-up delay-4">
          <span className="slide-up delay-1 max-w-full font-mono text-sm text-[#819BB0] sm:text-lg lg:text-[0.875rem]">
            <span className="text-punctuation">{'<'}</span>
            <span className="text-[#FF7B72]">script</span>
            <span className="text-punctuation">{'>'}</span><br/>
            <span className="text-comment">{text.snippetComment}</span><br/>
            <span className="text-[#C586C0]">function</span>{" "}
            <span className="text-[#DCDCAA]">myProjects</span>() {"{"}<br/>
            <span className="ml-4 text-[#C586C0]">return</span>(<br/>
            <span className="ml-8">
            <span className="text-punctuation">{'<'}</span>
            <span className="text-accent-teal">div</span>
            <span className="text-punctuation">{'>'}</span></span><br/>
            <span className="ml-12 text-[#9CDCFE]">{text.snippetBody}</span><br/>
            <span className="ml-8">
              <span className="text-punctuation">{'</'}</span>
              <span className="text-accent-teal">div</span>
              <span className="text-punctuation">{'>'}</span>
            </span><br/>);<br/>{"}"}<br/>
            <span className="text-punctuation">{'</'}</span>
            <span className="text-[#FF7B72]">script</span>
            <span className="text-punctuation">{'>'}</span>
          </span>
        </div>
      </div>
      <div className="mt-5 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 lg:ml-8 slide-up delay-5 m-4 gap-3 2xl:max-w-[60vw]">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} language={language} className={index % 2 === 1 ? "lg:-ml-10" : ""} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Projects;
