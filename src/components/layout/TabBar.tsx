import { tabMeta } from "../../config/pageMeta";
import { tabKey, type EditorTab } from "../../config/routes";

type TabBarProps = {
  openTabs: EditorTab[];
  activeTab: EditorTab;
  onSelectTab: (tab: EditorTab) => void;
  onCloseTab: (tab: EditorTab) => void;
};

const TabBar = ({ openTabs, activeTab, onSelectTab, onCloseTab }: TabBarProps) => {
  const activeKey = tabKey(activeTab);

  return (
    <div className="flex flex-row overflow-x-auto bg-bar">
      {openTabs.map((tab) => {
        const key = tabKey(tab);
        const isActive = key === activeKey;
        const { fileName, icon: Icon, iconClassName } = tabMeta(tab);
        return (
          <div
            key={key}
            className={`group flex shrink-0 items-center px-3 py-2 text-sm cursor-pointer border-line border-r ${isActive ? "bg-editor text-white border-t-[#1808f0] border-t" : "text-gray-400 hover:text-white border-line border-t"}`}
            onClick={() => onSelectTab(tab)}
          >
            <span><Icon className={iconClassName} /></span>
            <span className="ml-2 font-mono">{fileName}</span>
            <button
              type="button"
              aria-label={`Close ${fileName}`}
              onClick={(event) => {
                event.stopPropagation();
                onCloseTab(tab);
              }}
              className={`ml-2 text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? "opacity-100" : ""}`}
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
