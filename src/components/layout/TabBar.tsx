import { tabMeta } from "../../config/pageMeta";
import { tabKey, type EditorTab } from "../../config/routes";

type TabBarProps = {
  openTabs: EditorTab[];
  activeTab: EditorTab;
  closeLabel: string;
  onSelectTab: (tab: EditorTab) => void;
  onCloseTab: (tab: EditorTab) => void;
};

const TabBar = ({ openTabs, activeTab, closeLabel, onSelectTab, onCloseTab }: TabBarProps) => {
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
            className={`group flex shrink-0 items-center text-sm border-line border-r ${isActive ? "bg-editor text-white border-t-[#1808f0] border-t" : "text-gray-400 hover:text-white border-line border-t"}`}
          >
            <button
              type="button"
              aria-current={isActive ? "page" : undefined}
              onClick={() => onSelectTab(tab)}
              className="flex items-center py-2 pl-3"
            >
              <Icon aria-hidden="true" className={iconClassName} />
              <span className="ml-2 font-mono">{fileName}</span>
            </button>
            <button
              type="button"
              aria-label={`${closeLabel} ${fileName}`}
              onClick={() => onCloseTab(tab)}
              className={`mx-2 text-muted hover:text-white opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity ${isActive ? "opacity-100" : ""}`}
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
