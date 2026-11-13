import { Fragment } from "react";
import { Link } from "react-router-dom";
import { LANGUAGES, pagePath, type EditorTab, type Language } from "../../config/routes";
import { UI_TEXT } from "../../i18n/ui";

type LanguageSwitcherProps = {
  language: Language;
  activeTab: EditorTab;
  className?: string;
};

const LanguageSwitcher = ({ language, activeTab, className }: LanguageSwitcherProps) => (
  <nav aria-label={UI_TEXT[language].common.languageSwitcherLabel} className={`flex items-center gap-1 font-mono text-xs ${className ?? ""}`}>
    {LANGUAGES.map((code, index) => (
      <Fragment key={code}>
        {index > 0 && <span aria-hidden="true" className="text-muted">|</span>}
        <Link
          to={pagePath({ language: code, ...activeTab })}
          hrefLang={code}
          aria-current={code === language ? "true" : undefined}
          className={code === language ? "text-white" : "text-muted transition-colors hover:text-white"}
        >
          {code.toUpperCase()}
        </Link>
      </Fragment>
    ))}
  </nav>
);

export default LanguageSwitcher;
