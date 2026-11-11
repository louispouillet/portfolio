import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_META } from "../../config/pageMeta";
import { PAGE_COMPONENTS } from "../../config/pages";
import { pagePath, type Language, type PageKey } from "../../config/routes";
import Breadcrumb from "../ui/Breadcrumb";
import TabBar from "./TabBar";
import FilesBar from "./FilesBar";
import ActivityBar from "./ActivityBar";
import MenuBar from "./MenuBar";
import PhoneBar from "./PhoneBar";
import TopBar from "./TopBar";

type EditorProps = {
  language: Language;
  activePage: PageKey;
};

const Editor = ({ language, activePage }: EditorProps) => {
  const navigate = useNavigate();
  const [openPages, setOpenPages] = useState<PageKey[]>([activePage]);
  const [previousActivePage, setPreviousActivePage] = useState<PageKey>(activePage);
  const ActivePage = PAGE_COMPONENTS[activePage];

  if (activePage !== previousActivePage) {
    setPreviousActivePage(activePage);
    if (!openPages.includes(activePage)) {
      setOpenPages([...openPages, activePage]);
    }
  }

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleSelectPage = (page: PageKey) => {
    navigate(pagePath({ language, page }));
  };

  const handleClosePage = (page: PageKey) => {
    const remainingPages = openPages.filter((openPage) => openPage !== page);
    setOpenPages(remainingPages);

    if (page === activePage) {
      navigate(pagePath({ language, page: remainingPages.at(-1) ?? "home" }));
    }
  };

  return (
    <div className='w-full h-full'>
      <div className='hidden sm:block'>
        <TopBar language={language} activePage={activePage} />
        <MenuBar />
      </div>
      <div className='flex flex-row w-full h-full'>
        <div className='hidden sm:block'>
          <ActivityBar />
        </div>
        <div className='hidden sm:block'>
          <FilesBar language={language} activePage={activePage} />
        </div>
        <div className='flex flex-col flex-1 h-full'>
          <div className='hidden sm:block'>
            <TabBar openPages={openPages} activePage={activePage} onSelectPage={handleSelectPage} onClosePage={handleClosePage} />
          </div>
          <Breadcrumb fileName={PAGE_META[activePage].fileName} />
          <div className='block sm:hidden'>
            <PhoneBar language={language} activePage={activePage} />
          </div>
          <ActivePage />
        </div>
      </div>
    </div>
  );
};

export default Editor;
