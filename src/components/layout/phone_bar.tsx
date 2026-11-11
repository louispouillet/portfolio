import { IoMenuSharp } from "react-icons/io5";
import { GoCopilot } from "react-icons/go";
import FilesBar from "./Files_Bar";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import type { Language, PageKey } from "../../config/routes";

type PhoneBarProps = {
  language: Language;
  activePage: PageKey;
};

const PhoneBar = ({ language, activePage }: PhoneBarProps) => {
    const [isFilesBarOpen, setIsFilesBarOpen] = useState(false);

    return (
      <>
        <div className="flex flex-row bg-bar h-12 align-items-center gap-2 w-full border-line border">
            <IoMenuSharp className="text-4xl ml-2 text-soft mt-1.5 " onClick={() => setIsFilesBarOpen(!isFilesBarOpen)}/>
            <span className="text-[0.8rem] text-soft font-mono ml-2 mt-4">~/.{activePage}</span>
            <LanguageSwitcher language={language} activePage={activePage} className="ml-auto" />
            <GoCopilot className="text-2xl text-soft mt-3 mr-4"/>
        </div>
        {isFilesBarOpen && (
          <div className="fixed top-12 left-0 h-full z-50 sm:hidden">
            <FilesBar language={language} activePage={activePage} onNavigate={() => setIsFilesBarOpen(false)} />
          </div>
        )}
      </>

  );
};

export default PhoneBar;
