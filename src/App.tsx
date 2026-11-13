import { Navigate, useParams } from 'react-router-dom';
import Editor from './components/layout/Editor';
import { isLanguage, isPageKey, pagePath } from './config/routes';
import { findCaseStudyProject } from './data/projects';

function App() {
  const { language, page, slug } = useParams();

  if (!isLanguage(language)) {
    return <Navigate to="/" replace />;
  }

  const activePage = page ?? 'home';

  if (!isPageKey(activePage) || page === 'home') {
    return <Navigate to={pagePath({ language, page: 'home' })} replace />;
  }

  if (slug !== undefined && (activePage !== 'projects' || findCaseStudyProject(slug) === undefined)) {
    return <Navigate to={pagePath({ language, page: activePage })} replace />;
  }

  return <Editor language={language} activeTab={{ page: activePage, slug }} />;
}

export default App
