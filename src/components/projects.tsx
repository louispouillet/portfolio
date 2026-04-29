import "@fontsource/poppins/800.css";
import "./skills.css";
import { FaJs } from "react-icons/fa";
import { FaSortNumericDown } from "react-icons/fa";
import { MdSyncLock } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { TiSortNumericallyOutline } from "react-icons/ti";

const Projects = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-x-hidden bg-[#1E1E1E]">
      
      <span className="border-l border-[#929AA7] pl-1 text-xs text-[#C0C0C0] sm:text-sm font-mono hidden sm:block ml-2 mt-1">
        louis {'>'} portfolio {'>'} src {'>'}{' '}
        <span className="text-white">projects.js</span>
      </span>

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 ">
        <div className="slide-up delay-1 flex flex-row items-center gap-2 lg:ml-8 ml-4 mt-5">
          <div className="flex flex-col lg:gap-10 gap-4">
            <span className="text-[#6A9A58] font-mono">/*Come back often — my projects are constantly evolving.*/</span>
            <div className="flex flex-row gap-2 slide-up delay-2">
              <FaJs className="text-4xl text-[#F7DF1F] sm:text-6xl lg:text-6xl" />
              <span style={{ fontFamily: "poppins" }} className="text-4xl font-extrabold tracking-[-1px] text-white sm:text-6xl lg:tracking-[-2px]">Projects</span>
            </div>
            <span className="text-[#777] font-mono w-auto lg:w-160 slide-up delay-3">// You don’t learn to walk by following rules. You learn by doing and by falling over. - Richard Branson \\</span>
          </div>
        </div>
        <div className="lg:mt-0 lg:w-1/3 hidden lg:block slide-up delay-4">
          <span className="slide-up delay-1 max-w-full font-mono text-sm text-[#819BB0] sm:text-lg lg:text-[0.875rem]">
            <span className="text-[#808080]">{'<'}</span>
            <span className="text-[#FF7B72]">script</span>
            <span className="text-[#808080]">{'>'}</span><br/>
            <span className="text-[#6A9955]">// Fetch and display my projects</span><br/>
            <span className="text-[#C586C0]">function</span>{" "}
            <span className="text-[#DCDCAA]">myProjects</span>() {"{"}<br/>
            <span className="ml-4 text-[#C586C0]">return</span>(<br/>
            <span className="ml-8">
            <span className="text-[#808080]">{'<'}</span>
            <span className="text-[#4EC9B0]">div</span>
            <span className="text-[#808080]">{'>'}</span></span><br/>
            <span className="ml-12 text-[#9CDCFE]">{"// You will find all my projects below"}</span><br/>
            <span className="ml-8">
              <span className="text-[#808080]">{'</'}</span>
              <span className="text-[#4EC9B0]">div</span>
              <span className="text-[#808080]">{'>'}</span>
            </span><br/>);<br/>{"}"}<br/>
            <span className="text-[#808080]">{'</'}</span>
            <span className="text-[#FF7B72]">script</span>
            <span className="text-[#808080]">{'>'}</span>
          </span>
        </div>
      </div>
      <div className="mt-5 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 lg:ml-8 slide-up delay-5 m-4 gap-3">
       <div className="relative group flex flex-col p-4 rounded border border-[#3C3C3C] w-auto lg:w-130 overflow-hidden bg-[#252526] cursor-grab">
          <span className="absolute top-0 left-0 h-0.5 w-0 bg-[#FF6FD8] group-hover:w-full transition-all duration-800"></span>
          <span className="absolute top-0 right-0 w-0.5 h-0 bg-[#FF6FD8] group-hover:h-full transition-all duration-800 delay-100"></span>
          <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-[#FF6FD8] group-hover:w-full transition-all duration-800 delay-180"></span>
          <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-[#FF6FD8] group-hover:h-full transition-all duration-800 delay-230"></span>

          <TiSortNumericallyOutline className="text-4xl text-white lg:text-4xl" />

          <span className="text-[#FF6FD8] font-mono text-xs lg:text-sm tracking-[1px] mt-2">
            SORTING ALGORITHMS · DATA STRUCTURES · PERFORMANCE
          </span>

          <div className="flex flex-row justify-between lg:mt-2">
            <span style={{ fontFamily: "poppins" }} className="text-white font-extrabold text-xl lg:text-2xl tracking-[1px]">Push Swap</span>
            <span className="text-[#FF6FD8] border rounded-sm px-2 py-1 flex items-center gap-1 hover:bg-[#2D2D2D] font-mono text-xs">Github<GoArrowUpRight /></span>
          </div>
          <span className="text-[0.875rem] mt-3 text-[#777] font-mono border p-2 rounded">Algorithmic project focused on <span className="text-[#4EC9B0]">sorting integers</span> using the <span className="text-[#4EC9B0]">minimum number of operations</span>, involving the design and optimization of sorting strategies, the implementation of <span className="text-[#4EC9B0]">stack-based data structures</span>, and a strong focus on algorithm efficiency and computational complexity.</span>
          <div className="mt-2 flex flex-row gap-2">
            <span className="bg-[#2D2D2D] text-white pl-2 pr-2 py-1 rounded text-sm border-[#707070] border">C</span>
            <span className="bg-[#2D2D2D] text-white pl-2 pr-2 py-1 rounded text-sm border-[#707070] border">Stacks</span>
            <span className="bg-[#2D2D2D] text-white pl-2 pr-2 py-1 rounded text-sm border-[#707070] border">Algorithm Optimization</span>
          </div>
      </div>
      <div className="relative group flex flex-col p-4 rounded border border-[#3C3C3C] w-auto lg:w-130 overflow-hidden bg-[#252526] cursor-grab lg:-ml-10">
          <span className="absolute top-0 left-0 h-0.5 w-0 bg-[#4EC9B0] group-hover:w-full transition-all duration-800"></span>
          <span className="absolute top-0 right-0 w-0.5 h-0 bg-[#4EC9B0] group-hover:h-full transition-all duration-800 delay-100"></span>
          <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-[#4EC9B0] group-hover:w-full transition-all duration-800 delay-180"></span>
          <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-[#4EC9B0] group-hover:h-full transition-all duration-800 delay-230"></span>

          <MdSyncLock className="text-4xl text-white lg:text-4xl" />

          <span className="text-[#4EC9B0] font-mono text-xs lg:text-sm tracking-[1px] mt-2">SYSTEMS PROGRAMMING · THREADS · SYNCHRONIZATION</span>

          <div className="flex flex-row justify-between lg:mt-2">
            <span style={{ fontFamily: "poppins" }} className="text-white font-extrabold text-xl lg:text-2xl tracking-[1px]">Philosophers</span>
            <span className="text-[#4EC9B0] border rounded-sm px-2 py-1 flex items-center gap-1 hover:bg-[#2D2D2D] font-mono text-xs">Github<GoArrowUpRight /></span>
          </div>
          <span className="text-[0.875rem] mt-3 text-[#777] font-mono border p-2 rounded">Multithreading project based on the <span className="text-[#FF6FD8]">Dining Philosophers</span> problem, implementing <span className="text-[#FF6FD8]">thread synchronization</span>, managing shared resources using <span className="text-[#FF6FD8]">mutexes</span>, and gaining strong understanding of concurrency, race conditions, and deadlock prevention.</span>
          <div className="mt-2 flex flex-row gap-2">
            <span className="bg-[#2D2D2D] text-white pl-2 pr-2 py-1 rounded text-sm border-[#707070] border">C</span>
            <span className="bg-[#2D2D2D] text-white pl-2 pr-2 py-1 rounded text-sm border-[#707070] border">Multithreading</span>
            <span className="bg-[#2D2D2D] text-white pl-2 pr-2 py-1 rounded text-sm border-[#707070] border">Mutexes</span>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;