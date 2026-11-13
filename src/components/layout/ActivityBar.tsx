import { GoFileDirectory } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { VscExtensionsLarge } from "react-icons/vsc";
import { GoCopilot } from "react-icons/go";

const ActivityBar = () => {
  return (
    <div aria-hidden="true" className="flex flex-col items-center gap-2 bg-bar w-14 py-2 h-full border-r border-line">
      <button type="button" tabIndex={-1} className="group hover:bg-hover w-10 h-10 flex items-center justify-center rounded  transition text-lg">
  <GoFileDirectory className="text-soft group-hover:text-white transition-colors duration-200" />
</button>
      <button type="button" tabIndex={-1} className="group w-10 h-10 hover:bg-hover flex items-center justify-center rounded  transition text-lg">
        <CiSearch className="text-soft group-hover:text-white transition-colors duration-200"/>
      </button>
      <button type="button" tabIndex={-1} className="group w-10 h-10 flex hover:bg-hover items-center justify-center rounded  transition text-lg">
        <VscExtensionsLarge className="text-soft group-hover:text-white transition-colors duration-200" />
      </button>
      <button type="button" tabIndex={-1} className="group w-10 h-10 flex hover:bg-hover items-center justify-center rounded  transition text-lg">
        <GoCopilot className="text-soft group-hover:text-white transition-colors duration-200" />
      </button>
    </div>
  );
};

export default ActivityBar;