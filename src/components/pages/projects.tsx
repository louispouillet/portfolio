import { FaJs } from "react-icons/fa";
import { PROJECTS } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import { UI_TEXT } from "../../i18n/ui";
import ProjectCard from "../content/ProjectCard";

const Projects = () => {
  const language = useLanguage();
  const text = UI_TEXT[language].projects;

  return (
    <div className="flex h-full w-full flex-col overflow-x-hidden bg-editor">

      <span className="border-l border-crumb pl-1 text-xs text-soft sm:text-sm font-mono hidden sm:block ml-2 mt-1">
        louis {'>'} portfolio {'>'} src {'>'}{' '}
        <span className="text-white">projects.js</span>
      </span>

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 ">
        <div className="slide-up delay-1 flex flex-row items-center gap-2 lg:ml-8 ml-4 mt-5">
          <div className="flex flex-col lg:gap-10 gap-4">
            <span className="text-comment font-mono">{text.comment}</span>
            <div className="flex flex-row gap-2 slide-up delay-2">
              <FaJs className="text-4xl text-[#F7DF1F] sm:text-6xl lg:text-6xl" />
              <span className="font-display text-4xl font-extrabold tracking-[-1px] text-white sm:text-6xl lg:tracking-[-2px]">{text.title}</span>
            </div>
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

    </div>
  );
};

export default Projects;
