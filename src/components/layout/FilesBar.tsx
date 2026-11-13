import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cvFileName, cvPath } from "../../config/site";
import { PAGE_LIST } from "../../config/pageMeta";
import { pagePath, type Language, type PageKey } from "../../config/routes";

const ROW_CLASSES = "flex w-full items-center gap-2.5 px-3 py-1.5 font-mono text-[0.75rem] transition-colors";

type FilesBarProps = {
  language: Language;
  activePage: PageKey;
  onNavigate?: () => void;
};

const FilesBar = ({ language, activePage, onNavigate }: FilesBarProps) => {
  const rowClassName = (page: PageKey) =>
    `${ROW_CLASSES} ${activePage === page ? "bg-[#37373D] text-white" : "text-gray-400 hover:bg-[#2A2D2E] hover:text-white"}`;

  return (
    <nav className="flex h-full w-50 flex-col border-r border-line bg-panel py-2">
      <span className="px-3 pb-2 font-mono text-[0.7rem] tracking-wide text-soft">PORTFOLIO</span>
      {PAGE_LIST.map(({ key, fileName, icon: Icon, iconClassName }) => (
        <Link
          key={key}
          to={pagePath({ language, page: key })}
          onClick={onNavigate}
          aria-current={activePage === key ? "page" : undefined}
          className={rowClassName(key)}
        >
          <Icon aria-hidden="true" className={`shrink-0 ${iconClassName}`} />
          <span>{fileName}</span>
        </Link>
      ))}
      <a href={cvPath({ language })} download={cvFileName({ language })} className={`${ROW_CLASSES} text-gray-400 hover:bg-[#2A2D2E] hover:text-white`}>
        <FaFilePdf aria-hidden="true" className="shrink-0 text-[#f10707]" />
        <span>resume.pdf</span>
      </a>
    </nav>
  );
};

export default FilesBar;
