import { useState } from 'react';
import MenuBar from './components/layout/Menu_Bar';
import './App.css'
import TopBar from './components/layout/Top_bar';
import LeftBar from './components/layout/Left_Bar';
import FilesBar from './components/layout/Files_Bar';
import Home from './components/pages/home';
import About from './components/pages/about';
import Projects from './components/pages/projects';
import Skills from './components/pages/skills';
import Experience from './components/pages/experience';
import Contact from './components/pages/contact';
import ActiveBar from './components/layout/active_bar';
import PhoneBar from './components/layout/phone_bar';


type PageKey = 'home' | 'about' | 'projects' | 'skills' | 'experience' | 'contact';


function App() {
  const [activePage, setActivePage] = useState<PageKey>('home');
  const [openPages, setOpenPages] = useState<PageKey[]>(['home']);

  const renderPage = () => {
    if (activePage === 'about') {
      return <About />;
    }

    if (activePage === 'projects') {
      return <Projects />;
    }

    if (activePage === 'skills') {
      return <Skills />;
    }

    if (activePage === 'experience') {
      return <Experience />;
    }

    if (activePage === 'contact') {
      return <Contact />;
    }

    return <Home onSelectPage={handleSelectPage} />;
  };

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
          {renderPage()}
        </div>
      </div>
    </div>
  )
}

export default App
