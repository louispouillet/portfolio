import { Navigate, useParams } from 'react-router-dom';
import Editor from './components/layout/Editor';
import { isLanguage, isPageKey, pagePath } from './config/routes';

function App() {
  const { language, page } = useParams();

  if (!isLanguage(language)) {
    return <Navigate to="/" replace />;
  }

  const activePage = page ?? 'home';

  if (!isPageKey(activePage) || page === 'home') {
    return <Navigate to={pagePath({ language, page: 'home' })} replace />;
  }

  return <Editor language={language} activePage={activePage} />;
}

export default App
