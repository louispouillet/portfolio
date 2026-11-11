import { Fragment } from "react";
import { Link } from "react-router-dom";
import { LANGUAGES, pagePath, type Language, type PageKey } from "../../config/routes";
import { UI_TEXT } from "../../i18n/ui";

type LanguageSwitcherProps = {
  language: Language;
  activePage: PageKey;
  className?: string;
};

const LanguageSwitcher = ({ language, activePage, className }: LanguageSwitcherProps) => (
  <nav aria-label={UI_TEXT[language].common.languageSwitcherLabel} className={`flex items-center gap-1 font-mono text-xs ${className ?? ""}`}>
    {LANGUAGES.map((code, index) => (
      <Fragment key={code}>
        {index > 0 && <span className="text-[#555]">|</span>}
        <Link
          to={pagePath({ language: code, page: activePage })}
          hrefLang={code}
          aria-current={code === language ? "true" : undefined}
          className={code === language ? "text-white" : "text-gray-500 transition-colors hover:text-white"}
        >
          {code.toUpperCase()}
        </Link>
      </Fragment>
    ))}
  </nav>
);

export default LanguageSwitcher;
