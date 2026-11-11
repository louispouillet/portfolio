import { PAGE_BY_KEY } from "../../config/pages";
import type { PageKey } from "../../config/routes";

type ActiveBarProps = {
    openPages: PageKey[];
    activePage: PageKey;
    onSelectPage: (page: PageKey) => void;
    onClosePage: (page: PageKey) => void;
};

const ActiveBar = ({ openPages, activePage, onSelectPage, onClosePage }: ActiveBarProps) => {
    return (
    <div className="flex flex-row bg-[#2D2D2D]">

      {openPages.map((page) => {
        const { fileName, icon: Icon, iconClassName } = PAGE_BY_KEY[page];
        return (
        <div key={page} className={`group flex items-center px-3 py-2 text-sm cursor-pointer border-[#3D3D3D] border-r ${ activePage === page ? "bg-[#1E1E1E] text-white border-t-[#1808f0] border-t" : "text-gray-400 hover:text-white border-[#3D3D3D] border-t"}`}
    onClick={() => onSelectPage(page)}
  >
    <span><Icon className={iconClassName} /></span>
    <span className="ml-2 font-mono ">{fileName}</span>

    <button
      onClick={(e) => {
        e.stopPropagation();
        onClosePage(page);
      }}
      className={`ml-2 text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity ${activePage === page ? "opacity-100" : ""}`}
    >
      ×
    </button>
  </div>
        );
      })}
    </div>
  );
};

export default ActiveBar;
