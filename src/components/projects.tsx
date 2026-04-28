import "@fontsource/poppins/800.css";
import "./skills.css";
import { FaJs } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-x-hidden bg-[#1E1E1E]">
      
      <span className="border-l border-[#929AA7] pl-1 text-xs text-[#C0C0C0] sm:text-sm font-mono hidden sm:block ml-2 mt-1">
        louis {'>'} portfolio {'>'} src {'>'}{' '}
        <span className="text-white">projects.js</span>
      </span>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8 ">
        
        <div className="slide-up delay-1 flex flex-row items-center gap-2 lg:ml-8 mt-5">
          <FaJs className="text-4xl text-[#F7DF1F] sm:text-6xl lg:text-6xl" />
          <span style={{ fontFamily: "poppins" }} className="text-4xl font-extrabold tracking-[-1px] text-white sm:text-6xl lg:tracking-[-2px]">Projects</span>
        </div>

        <div className="mt-4 lg:mt-0 lg:ml-8 lg:w-1/3">
          <span className="slide-up delay-1 max-w-full font-mono text-sm text-[#819BB0] sm:text-lg lg:text-[0.875rem]">
            
            <span className="text-[#808080]">{'<'}</span>
            <span className="text-[#FF7B72]">script</span>
            <span className="text-[#808080]">{'>'}</span>

            <br />

            <span className="text-[#6A9955]">
              // Fetch and display my projects
            </span>

            <br />

            <span className="text-[#C586C0]">function</span>{" "}
            <span className="text-[#DCDCAA]">myProjects</span>() {"{"}

            <br />

            <span className="ml-4 text-[#C586C0]">return</span> (

            <br />

            <span className="ml-8">
              <span className="text-[#808080]">{'<'}</span>
              <span className="text-[#4EC9B0]">div</span>
              <span className="text-[#808080]">{'>'}</span>
            </span>

            <br />

            <span className="ml-12 text-[#9CDCFE]">
              {"// You will find all my projects below"}
            </span>

            <br />

            <span className="ml-8">
              <span className="text-[#808080]">{'</'}</span>
              <span className="text-[#4EC9B0]">div</span>
              <span className="text-[#808080]">{'>'}</span>
            </span>

            <br />
            );

            <br />
            {"}"}

            <br />

            <span className="text-[#808080]">{'</'}</span>
            <span className="text-[#FF7B72]">script</span>
            <span className="text-[#808080]">{'>'}</span>

          </span>
        </div>

      </div>
    </div>
  );
};

export default Projects;