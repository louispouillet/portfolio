import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tabFolders, tabMeta } from "../../config/pageMeta";
import { PAGE_COMPONENTS } from "../../config/pages";
import { pagePath, tabKey, type EditorTab, type Language } from "../../config/routes";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import { UI_TEXT } from "../../i18n/ui";
import CaseStudy from "../pages/CaseStudy";
import Breadcrumb from "../ui/Breadcrumb";
import TabBar from "./TabBar";
import FilesBar from "./FilesBar";
import ActivityBar from "./ActivityBar";
import MenuBar from "./MenuBar";
import PhoneBar from "./PhoneBar";
import StatusBar from "./StatusBar";
import TopBar from "./TopBar";

const HOME_TAB: EditorTab = { page: "home" };

type EditorProps = {
  language: Language;
  activeTab: EditorTab;
};

const Editor = ({ language, activeTab }: EditorProps) => {
  const navigate = useNavigate();
  const activeKey = tabKey(activeTab);
  const [openTabs, setOpenTabs] = useState<EditorTab[]>([activeTab]);
  const [previousActiveKey, setPreviousActiveKey] = useState<string>(activeKey);
  const ActivePage = PAGE_COMPONENTS[activeTab.page];

  if (activeKey !== previousActiveKey) {
    setPreviousActiveKey(activeKey);
    if (!openTabs.some((tab) => tabKey(tab) === activeKey)) {
      setOpenTabs([...openTabs, activeTab]);
    }
  }

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useDocumentMeta({ language, tab: activeTab });

  const handleSelectTab = (tab: EditorTab) => {
    navigate(pagePath({ language, ...tab }));
  };

  const handleCloseTab = (tab: EditorTab) => {
    const closedKey = tabKey(tab);
    const remainingTabs = openTabs.filter((openTab) => tabKey(openTab) !== closedKey);
    setOpenTabs(remainingTabs);

    if (closedKey === activeKey) {
      navigate(pagePath({ language, ...(remainingTabs.at(-1) ?? HOME_TAB) }));
    }
  };

  return (
    <div className='h-dvh w-full'>
      <div className='flex h-full w-full flex-col overflow-hidden bg-editor'>
      <div className='hidden sm:block'>
        <TopBar language={language} activeTab={activeTab} />
        <MenuBar />
      </div>
      <div className='flex min-h-0 w-full flex-1 flex-row'>
        <div className='hidden sm:block'>
          <ActivityBar />
        </div>
        <div className='hidden sm:block'>
          <FilesBar language={language} activePage={activeTab.page} />
        </div>
        <div className='flex min-h-0 min-w-0 flex-1 flex-col'>
          <div className='hidden sm:block'>
            <TabBar openTabs={openTabs} activeTab={activeTab} closeLabel={UI_TEXT[language].common.closeTab} onSelectTab={handleSelectTab} onCloseTab={handleCloseTab} />
          </div>
          <Breadcrumb folders={tabFolders(activeTab)} fileName={tabMeta(activeTab).fileName} />
          <div className='block sm:hidden'>
            <PhoneBar language={language} activeTab={activeTab} />
          </div>
          <div key={activeKey} className='min-h-0 flex-1 overflow-y-auto'>
            {activeTab.slug === undefined ? <ActivePage /> : <CaseStudy slug={activeTab.slug} />}
          </div>
          <StatusBar activeTab={activeTab} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Editor;
