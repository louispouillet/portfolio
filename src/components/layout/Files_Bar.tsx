import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import cvPdf from "../../assets/documents/Louis_Pouillet_cv.pdf";
import { PAGES } from "../../config/pages";
import { pagePath, type Language, type PageKey } from "../../config/routes";

type FilesBarProps = {
  language: Language;
  activePage: PageKey;
  onNavigate?: () => void;
};

const FilesBar = ({ language, activePage, onNavigate }: FilesBarProps) => {
  const getItemClassName = (page: PageKey) =>
    `transition block w-full text-left p-0 border-0 cursor-pointer ${
      activePage === page ? "bg-[#343435] text-white" : "hover:bg-[#343435] text-gray-400"
    }`;

  return (
    <div className="flex flex-col gap-2 bg-[#252526] w-50 py-2 h-full border-[#3D3D3D] border">
      <span className="text-[0.7rem] text-[#CCC] font-mono ml-2">PORTFOLIO</span>
      <div className="flex flex-col gap-1">
        {PAGES.map(({ key, fileName, icon: Icon, iconClassName }) => (
          <Link key={key} to={pagePath({ language, page: key })} onClick={onNavigate} className={getItemClassName(key)}>
            <Icon className={`${iconClassName} inline-block ml-2`} />
            <span className="pl-[25%] text-[0.7rem] font-mono">{fileName}</span>
          </Link>
        ))}
        <a href={cvPdf} download="Louis_Pouillet_cv.pdf" className="hover:bg-[#343435] transition cursor-pointer w-full block p-0 border-0">
            <FaFilePdf className="text-[#f10707] inline-block ml-2" />
            <span className="text-[#CCC] pl-[25%] text-[0.7rem] font-mono">resume.pdf</span>
        </a>
      </div>
    </div>
  );
};

export default FilesBar;
