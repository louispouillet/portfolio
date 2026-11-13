import { CiSearch } from "react-icons/ci";
import type { EditorTab, Language } from "../../config/routes";
import LanguageSwitcher from "./LanguageSwitcher";

type TopBarProps = {
  language: Language;
  activeTab: EditorTab;
};

const TopBar = ({ language, activeTab }: TopBarProps) => {
    return (
    <div className="flex items-center justify-between border-b border-line bg-topbar px-4 py-1 font-mono">
      
      <div className="flex gap-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      <div aria-hidden="true" className="flex items-center rounded-md border border-line-strong bg-white/[0.04] px-15 py-0.5 text-[0.8rem] text-gray-400">
        <CiSearch/>
        <span className="ml-2">Louis : portfolio</span>
        <span className=" ml-2 text-xs bg-[#3a3a5a] px-2 py-0.5 rounded">
          Ctrl
        </span>
         <span className="ml-2 text-xs bg-[#3a3a5a] px-2 py-0.5 rounded">
            P
        </span>
      </div>

      <LanguageSwitcher language={language} activeTab={activeTab} className="w-12 justify-end" />
    </div>
  );
};

export default TopBar;