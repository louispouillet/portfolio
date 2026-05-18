import "@fontsource/jetbrains-mono/400.css";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

type PageKey = "home" | "about" | "projects" | "skills" | "experience" | "contact";

type FilesBarProps = {
    openPages: PageKey[];
    activePage: PageKey;
    onSelectPage: (page: PageKey) => void;
    onClosePage: (page: PageKey) => void;
};

const ActiveBar = ({ openPages, activePage, onSelectPage , onClosePage}: FilesBarProps) => {
   const valuePage = {
    home: { icon: <FaReact className="text-[#61DAFB]"/>, label: "home.tsx" },
    about: { icon: <FaHtml5 className="text-[#E34C26]" />, label: "about.html" },
    projects: { icon: <FaJs className="text-[#F7DF1E]" />, label: "projects.js" },
    skills: { icon: <VscJson className="text-[#f71ecc]" />, label: "skills.json" },
    experience: { icon: <SiTypescript className="text-[#3178C6]" />, label: "experience.ts" },
    contact: { icon: <FaCss3Alt className="text-[#1709ce]" />, label: "contact.css" },
    };
    return (
    <div className="flex flex-row bg-[#2D2D2D]">

      {openPages.map((page) => (
        <div key={page} className={`group flex items-center px-3 py-2 text-sm cursor-pointer border-[#3D3D3D] border-r ${ activePage === page ? "bg-[#1E1E1E] text-white border-t-[#1808f0] border-t" : "text-gray-400 hover:text-white border-[#3D3D3D] border-t"}`}
    onClick={() => onSelectPage(page)}
  >
    <span>{valuePage[page].icon}</span>
    <span className="ml-2 font-mono ">{valuePage[page].label}</span>

    <button
      onClick={(e) => {
        e.stopPropagation();
        onClosePage(page);
      }}
      className={`ml-2 text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity ${activePage === page ? "opacity-100" : ""}`}
    >
      ×
    </button>
  </div>
      ))}
    </div>
  );
};

export default ActiveBar;