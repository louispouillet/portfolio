import { PAGE_META } from "../../config/pageMeta";
import type { PageKey } from "../../config/routes";

type TabBarProps = {
    openPages: PageKey[];
    activePage: PageKey;
    onSelectPage: (page: PageKey) => void;
    onClosePage: (page: PageKey) => void;
};

const TabBar = ({ openPages, activePage, onSelectPage, onClosePage }: TabBarProps) => {
    return (
    <div className="flex flex-row bg-bar">

      {openPages.map((page) => {
        const { fileName, icon: Icon, iconClassName } = PAGE_META[page];
        return (
        <div key={page} className={`group flex items-center px-3 py-2 text-sm cursor-pointer border-line border-r ${ activePage === page ? "bg-editor text-white border-t-[#1808f0] border-t" : "text-gray-400 hover:text-white border-line border-t"}`}
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

export default TabBar;
