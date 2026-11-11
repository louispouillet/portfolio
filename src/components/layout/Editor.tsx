import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_BY_KEY } from "../../config/pages";
import { pagePath, type Language, type PageKey } from "../../config/routes";
import ActiveBar from "./active_bar";
import FilesBar from "./Files_Bar";
import LeftBar from "./Left_Bar";
import MenuBar from "./Menu_Bar";
import PhoneBar from "./phone_bar";
import TopBar from "./Top_bar";

type EditorProps = {
  language: Language;
  activePage: PageKey;
};

const Editor = ({ language, activePage }: EditorProps) => {
  const navigate = useNavigate();
  const [openPages, setOpenPages] = useState<PageKey[]>([activePage]);
  const [previousActivePage, setPreviousActivePage] = useState<PageKey>(activePage);
  const ActivePage = PAGE_BY_KEY[activePage].component;

  if (activePage !== previousActivePage) {
    setPreviousActivePage(activePage);
    if (!openPages.includes(activePage)) {
      setOpenPages([...openPages, activePage]);
    }
  }

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
        <TopBar />
        <MenuBar />
      </div>
      <div className='flex flex-row w-full h-full'>
        <div className='hidden sm:block'>
          <LeftBar />
        </div>
        <div className='hidden sm:block'>
          <FilesBar language={language} activePage={activePage} />
        </div>
        <div className='flex flex-col flex-1 h-full'>
          <div className='hidden sm:block'>
            <ActiveBar openPages={openPages} activePage={activePage} onSelectPage={handleSelectPage} onClosePage={handleClosePage} />
          </div>
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
