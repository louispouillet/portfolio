import { useState } from 'react';
import MenuBar from './components/layout/Menu_Bar';
import TopBar from './components/layout/Top_bar';
import LeftBar from './components/layout/Left_Bar';
import FilesBar from './components/layout/Files_Bar';
import ActiveBar from './components/layout/active_bar';
import PhoneBar from './components/layout/phone_bar';
import { PAGE_BY_KEY, type PageKey } from './config/pages';


function App() {
  const [activePage, setActivePage] = useState<PageKey>('home');
  const [openPages, setOpenPages] = useState<PageKey[]>(['home']);
  const ActivePage = PAGE_BY_KEY[activePage].component;

  const handleSelectPage = (page: PageKey) => {
    if (!openPages.includes(page)) {
      setOpenPages([...openPages, page]);
    }

    setActivePage(page);
  };

  const handleClosePage = (page: PageKey) => {
  const newPages = openPages.filter(p => p !== page);
  setOpenPages(newPages);

  if (activePage === page) {
    setActivePage(newPages[newPages.length - 1] || "home");
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
          <FilesBar activePage={activePage} onSelectPage={handleSelectPage} />
        </div>
        <div className='flex flex-col flex-1 h-full'>
          <div className='hidden sm:block'>
            <ActiveBar openPages={openPages} activePage={activePage} onSelectPage={handleSelectPage} onClosePage={handleClosePage} />
          </div>
          <div className='block sm:hidden'>
            <PhoneBar activePage={activePage} onSelectPage={handleSelectPage} />
          </div>
          <ActivePage onSelectPage={handleSelectPage} />
        </div>
      </div>
    </div>
  )
}

export default App
