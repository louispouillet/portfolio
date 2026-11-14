import { IoMenuSharp } from "react-icons/io5";
import { VscTerminal } from "react-icons/vsc";
import FilesBar from "./FilesBar";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import { tabKey, type EditorTab, type Language } from "../../config/routes";
import { UI_TEXT } from "../../i18n/ui";

type PhoneBarProps = {
  language: Language;
  activeTab: EditorTab;
  onOpenTerminal: () => void;
};

const PhoneBar = ({ language, activeTab, onOpenTerminal }: PhoneBarProps) => {
    const [isFilesBarOpen, setIsFilesBarOpen] = useState(false);

    return (
      <>
        <div className="flex h-12 w-full flex-row items-center gap-2 border-b border-line bg-bar">
            <button
              type="button"
              aria-label={UI_TEXT[language].common.toggleExplorer}
              aria-expanded={isFilesBarOpen}
              onClick={() => setIsFilesBarOpen(!isFilesBarOpen)}
              className="ml-2 text-soft"
            >
              <IoMenuSharp aria-hidden="true" className="text-4xl" />
            </button>
            <span className="ml-2 font-mono text-[0.8rem] text-soft">~/.{tabKey(activeTab)}</span>
            <LanguageSwitcher language={language} activeTab={activeTab} className="ml-auto" />
            <button type="button" aria-label={UI_TEXT[language].common.terminal} onClick={onOpenTerminal} className="mr-3 text-2xl text-accent-teal">
              <VscTerminal aria-hidden="true" />
            </button>
        </div>
        {isFilesBarOpen && (
          <div className="fixed inset-x-0 top-12 bottom-0 z-50 flex sm:hidden">
            <FilesBar language={language} activePage={activeTab.page} onNavigate={() => setIsFilesBarOpen(false)} />
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              onClick={() => setIsFilesBarOpen(false)}
              className="flex-1 bg-black/50"
            />
          </div>
        )}
      </>

  );
};

export default PhoneBar;
