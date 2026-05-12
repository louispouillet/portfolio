import "@fontsource/poppins/800.css";
import "./skills.css";
import { SiTypescript } from "react-icons/si";
import { GrCodeSandbox } from "react-icons/gr";



const Experience = () => {
  return (
      <div className="flex h-full w-full flex-col overflow-x-hidden bg-[#1E1E1E] px-4 py-4 sm:px-8 sm:py-6 pb-10">
      <span className="border-l -mt-3 -ml-2 lg:-mt-5 border-[#929AA7] lg:-ml-6 pl-1 text-xs text-[#C0C0C0] sm:text-sm font-mono hidden sm:block">
        louis {'>'} portfolio {'>'} src {'>'}{' '}
        <span className="text-white">experience.ts</span>
      </span>
      <span className="slide-up delay-1 mt-3 max-w-full font-mono text-sm text-[#6A9A58] lg:ml-3 sm:text-lg lg:text-[1rem]">// You will find all my experiences below</span>
      <div className="slide-up delay-2 mt-5 flex flex-row items-end gap-1 sm:justify-start lg:ml-3">
        <SiTypescript className="text-4xl text-[#3178C6] sm:text-6xl lg:text-6xl" />
        <span style={{ fontFamily: "poppins" }} className="ml-3 text-3xl font-extrabold tracking-[-1px] text-white sm:text-6xl sm:tracking-[-2px] lg:text-6xl lg:tracking-[-2.5px]">Experience</span>
      </div>
      <div className="relative mt-10 flex flex-col slide-up delay-3 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-[#3178C6] before:to-[#1E1E1E] before:content-[''] ml-3">
        <div className="flex flex-row">
          <GrCodeSandbox className="ml-2 text-3xl text-[#3178C6]"/>
          <span className="ml-2 mt-1 font-mono text-[#8C939F]">2024 - 2025</span>
        </div>
        <span style={{ fontFamily: "poppins" }} className="ml-6 mt-1 text-2xl font-bold italic leading-tight text-white sm:ml-10 sm:text-4xl">Labourer and Painter</span>
          <span className="ml-6 font-mono text-sm text-[#34D399] sm:ml-10 sm:text-base">@ Adelaide Property Restoration - Australia</span>
          <span className="ml-6 mt-3 max-w-full pr-2 font-mono text-xs text-[#C0C0C0] sm:ml-10 sm:text-sm lg:max-w-250">Worked as a painter and laborer for a construction company in Australia, with hands-on experience in carpentry and drywall installation. Contributed to residential and commercial building projects, handling site preparation, painting, finishing, and general construction support in fast-paced environments.</span>
          <div className="ml-6 mt-3 flex max-w-full flex-wrap gap-2 font-mono sm:ml-10 lg:max-w-200">
            <span className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-[#4FC1FF] text-xs rounded">Carpentry</span>
            <span className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-[#4FC1FF] text-xs rounded">Drywall Installation</span>
            <span className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-[#4FC1FF] text-xs rounded">Hand & Power Tools</span>
            <span className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-[#4FC1FF] text-xs rounded">Team Collaboration</span>
          </div>

          <div className="flex flex-row mt-8">
          <GrCodeSandbox className="ml-2 text-3xl text-[#3178C6]"/>
          <span className="ml-2 mt-1 font-mono text-[#8C939F]">2023 - 2024</span>
        </div>
        <span style={{ fontFamily: "poppins" }} className="ml-6 mt-1 text-2xl font-bold italic leading-tight text-white sm:ml-10 sm:text-4xl">Farm Job</span>
          <span className="ml-6 font-mono text-sm text-[#34D399] sm:ml-10 sm:text-base">@ Samwell and Sons - Australia</span>.
          <span className="ml-6 -mt-3 max-w-full pr-2 font-mono text-xs text-[#C0C0C0] sm:ml-10 sm:text-sm lg:max-w-250">Worked on a sprouts farm in Australia, sorting and inspecting produce to separate high-quality sprouts from damaged or unsuitable batches. Maintained hygiene and quality standards, supported packing operations, and worked efficiently in a fast-paced agricultural environment.</span>
          <div className="ml-6 mt-3 flex max-w-full flex-wrap gap-2 font-mono sm:ml-10 lg:max-w-200">
            <span className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-[#4FC1FF] text-xs rounded">Agricultural Work</span>
            <span className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-[#4FC1FF] text-xs rounded">Quality Control</span>
            <span className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-[#4FC1FF] text-xs rounded">Farm Operations</span>
            <span className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-[#4FC1FF] text-xs rounded">Fast-Paced Environment</span>
          </div>
          
          <div className="flex flex-row mt-8">
          <GrCodeSandbox className="ml-2 text-3xl text-[#3178C6]"/>
          <span className="ml-2 mt-1 font-mono text-[#8C939F]">2021 - 2022</span>
        </div>
        <span style={{ fontFamily: "poppins" }} className="ml-6 mt-1 text-2xl font-bold italic leading-tight text-white sm:ml-10 sm:text-4xl">Fiber Optic Installer</span>
          <span className="ml-6 font-mono text-sm text-[#34D399] sm:ml-10 sm:text-base">@ OPT - New Caledonia</span>.
          <span className="ml-6 -mt-3 max-w-full pr-2 font-mono text-xs text-[#C0C0C0] sm:ml-10 sm:text-sm lg:max-w-250">Deployed, installed, and repaired fiber optic cables for residential and commercial networks. Performed maintenance, troubleshooting, and connection testing to ensure stable and efficient network performance. Worked on-site with technical teams while following safety and installation standards.</span>
          <div className="ml-6 mt-3 flex max-w-full flex-wrap gap-2 font-mono sm:ml-10 lg:max-w-200">
            <span className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-[#4FC1FF] text-xs rounded">Cable Installation</span>
            <span className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-[#4FC1FF] text-xs rounded">Fiber Repair</span>
            <span className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-[#4FC1FF] text-xs rounded">Technical Support</span>
            <span className="border border-[#1C3B54] px-2 py-0.5 bg-[#1E252C] text-[#4FC1FF] text-xs rounded">Connection Testing</span>
          </div>

      </div>

      
    </div>
  );
};

export default Experience;
