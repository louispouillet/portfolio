import "@fontsource/jetbrains-mono/400.css";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import cvPdf from "../assets/Louis_Pouillet_cv.pdf";

type PageKey = "home" | "about" | "projects" | "skills" | "experience" | "contact";

type FilesBarProps = {
  activePage: PageKey;
  onSelectPage: (page: PageKey) => void;
};

const FilesBar = ({ activePage, onSelectPage }: FilesBarProps) => {
  const getItemClassName = (page: PageKey) =>
    `transition w-full text-left p-0 border-0 cursor-pointer ${
      activePage === page ? "bg-[#343435] text-white" : "hover:bg-[#343435] text-gray-400"
    }`;

  return (
    <div className="flex flex-col gap-2 bg-[#252526] w-50 py-2 h-full border-[#3D3D3D] border">
      <span className="text-[0.7rem] text-[#CCC] font-mono ml-2">PORTFOLIO</span>
      <div className="flex flex-col gap-1">
        <button
            type="button"
            onClick={() => onSelectPage("home")}
            className={getItemClassName("home")}
        >
          <FaReact className="text-[#61DAFB] inline-block ml-2" />
            <span className="pl-[25%] text-[0.7rem] font-mono">home.tsx</span>
        </button>
        <button
            type="button"
            onClick={() => onSelectPage("about")}
            className={getItemClassName("about")}
        >
            <FaHtml5 className="text-[#E34C26] inline-block ml-2" />
            <span className="pl-[25%] text-[0.7rem] font-mono">about.html</span>
        </button>
        <button
            type="button"
            onClick={() => onSelectPage("projects")}
            className={getItemClassName("projects")}
        >
            <FaJs className="text-[#F7DF1E] inline-block ml-2" />
            <span className="pl-[25%] text-[0.7rem] font-mono">projects.js</span>
        </button>
        <button
          type="button"
          onClick={() => onSelectPage("skills")}
          className={getItemClassName("skills")}
        >
          <VscJson className="text-[#f71ecc] inline-block ml-2" />
          <span className="pl-[25%] text-[0.7rem] font-mono">skills.json</span>
        </button>
        <button
          type="button"
          onClick={() => onSelectPage("experience")}
          className={getItemClassName("experience")}
        >
          <SiTypescript className="text-[#3178C6] inline-block ml-2" />
          <span className="pl-[25%] text-[0.7rem] font-mono">experience.ts</span>
        </button>
        <button
          type="button"
          onClick={() => onSelectPage("contact")}
          className={getItemClassName("contact")}
        >
          <FaCss3Alt className="text-[#1709ce] inline-block ml-2" />
          <span className="pl-[25%] text-[0.7rem] font-mono">contact.css</span>
        </button>
        <a href={cvPdf} download="Louis_Pouillet_cv.pdf" className="hover:bg-[#343435] transition cursor-pointer w-full block p-0 border-0">
            <FaFilePdf className="text-[#f10707] inline-block ml-2" />
            <span className="text-[#CCC] pl-[25%] text-[0.7rem] font-mono">resume.pdf</span>
        </a>
      </div>
    </div>
  );
};

export default FilesBar;