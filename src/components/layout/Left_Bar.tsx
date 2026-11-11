import { GoFileDirectory } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { VscExtensionsLarge } from "react-icons/vsc";
import { GoCopilot } from "react-icons/go";

const LeftBar = () => {
  return (
    <div className="flex flex-col items-center gap-2 bg-[#2D2D2D] w-14 py-2 h-full border-[#3D3D3D] border-t">
      <button className="group hover:bg-[#404051] w-10 h-10 flex items-center justify-center rounded  transition text-lg">
  <GoFileDirectory className="text-[#CCC] group-hover:text-white transition-colors duration-200" />
</button>
      <button className="group w-10 h-10 hover:bg-[#404051] flex items-center justify-center rounded  transition text-lg">
        <CiSearch className="text-[#CCC] group-hover:text-white transition-colors duration-200"/>
      </button>
      <button className="group w-10 h-10 flex hover:bg-[#404051] items-center justify-center rounded  transition text-lg">
        <VscExtensionsLarge className="text-[#CCC] group-hover:text-white transition-colors duration-200" />
      </button>
      <button className="group w-10 h-10 flex hover:bg-[#404051] items-center justify-center rounded  transition text-lg">
        <GoCopilot className="text-[#CCC] group-hover:text-white transition-colors duration-200" />
      </button>
    </div>
  );
};

export default LeftBar;