import { Navigate, useParams } from "react-router-dom";
import { isLanguage } from "../config/routes";
import CvPage from "./CvPage";

const CvRoute = () => {
  const { language } = useParams();

  if (!isLanguage(language)) {
    return <Navigate to="/" replace />;
  }

  return <CvPage language={language} />;
};

export default CvRoute;
