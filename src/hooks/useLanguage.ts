import { useParams } from "react-router-dom";
import { DEFAULT_LANGUAGE, isLanguage, type Language } from "../config/routes";

export const useLanguage = (): Language => {
  const { language } = useParams();
  return isLanguage(language) ? language : DEFAULT_LANGUAGE;
};
