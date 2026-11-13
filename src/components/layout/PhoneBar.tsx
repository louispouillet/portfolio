import { IoMenuSharp } from "react-icons/io5";
import { GoCopilot } from "react-icons/go";
import FilesBar from "./FilesBar";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import { tabKey, type EditorTab, type Language } from "../../config/routes";
import { UI_TEXT } from "../../i18n/ui";

type PhoneBarProps = {
  language: Language;
  activeTab: EditorTab;
};

const PhoneBar = ({ language, activeTab }: PhoneBarProps) => {
    const [isFilesBarOpen, setIsFilesBarOpen] = useState(false);

    return (
      <>
        <div className="flex flex-row bg-bar h-12 align-items-center gap-2 w-full border-line border">
            <button
              type="button"
              aria-label={UI_TEXT[language].common.toggleExplorer}
              aria-expanded={isFilesBarOpen}
              onClick={() => setIsFilesBarOpen(!isFilesBarOpen)}
              className="ml-2 self-center text-soft"
            >
              <IoMenuSharp aria-hidden="true" className="text-4xl" />
            </button>
            <span className="text-[0.8rem] text-soft font-mono ml-2 mt-4">~/.{tabKey(activeTab)}</span>
            <LanguageSwitcher language={language} activeTab={activeTab} className="ml-auto" />
            <GoCopilot aria-hidden="true" className="text-2xl text-soft mt-3 mr-4"/>
        </div>
        {isFilesBarOpen && (
          <div className="fixed top-12 left-0 h-full z-50 sm:hidden">
            <FilesBar language={language} activePage={activeTab.page} onNavigate={() => setIsFilesBarOpen(false)} />
          </div>
        )}
      </>

  );
};

export default PhoneBar;
