import { findRepository, type GitHubRepository } from "../../api/github";
import { FEATURED_PROJECTS, SECONDARY_PROJECTS, type Project } from "../../data/projects";
import { useGitHubRepositories } from "../../hooks/useGitHubRepositories";
import { useLanguage } from "../../hooks/useLanguage";
import { UI_TEXT } from "../../i18n/ui";
import OtherRepositories from "../content/OtherRepositories";
import ProjectCard from "../content/ProjectCard";
import CodeComment from "../ui/CodeComment";
import PageHeader from "../ui/PageHeader";
import PageLayout from "../ui/PageLayout";

const Projects = () => {
  const language = useLanguage();
  const text = UI_TEXT[language].projects;
  const github = useGitHubRepositories();
  const repositoryOf = (project: Project): GitHubRepository | undefined =>
    github.status === "success" && project.repositoryUrl !== undefined
      ? findRepository({ repositories: github.repositories, url: project.repositoryUrl })
      : undefined;

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
      <section className="slide-up delay-5 m-4 mt-8 lg:mx-8 2xl:max-w-[70vw]">
        <h2 className="font-mono text-sm text-[#DCDCAA] sm:text-base lg:text-[1.3rem]">{text.featuredTitle}</h2>
        <span className="mt-3 mb-5 block h-px w-full bg-crumb"></span>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} language={language} variant="featured" repository={repositoryOf(project)} />
          ))}
        </div>
      </section>
      <section className="slide-up delay-6 m-4 mt-8 lg:mx-8 2xl:max-w-[70vw]">
        <h2 className="font-mono text-sm text-[#DCDCAA] sm:text-base lg:text-[1.3rem]">{text.otherTitle}</h2>
        <span className="mt-3 mb-5 block h-px w-full bg-crumb"></span>
        <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {SECONDARY_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} language={language} variant="compact" repository={repositoryOf(project)} />
          ))}
        </div>
      </section>
      <section className="slide-up delay-7 m-4 mt-8 pb-10 lg:mx-8 2xl:max-w-[70vw]">
        <h2 className="font-mono text-sm text-[#DCDCAA] sm:text-base lg:text-[1.3rem]">{text.repositoriesTitle}</h2>
        <span className="mt-3 mb-5 block h-px w-full bg-crumb"></span>
        <OtherRepositories github={github} language={language} />
      </section>
    </PageLayout>
  );
};

export default Projects;
