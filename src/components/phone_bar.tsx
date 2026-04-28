import "@fontsource/jetbrains-mono/400.css";
import { IoMenuSharp } from "react-icons/io5";
import { GoCopilot } from "react-icons/go";

type PageKey = "home" | "about" | "projects" | "skills" | "experience" | "contact";

type FilesBarProps = {
  activePage: PageKey;
};

const PhoneBar = ({activePage}: FilesBarProps) => {

    console.log(activePage);
    return (
        <div className="flex flex-row bg-[#2D2D2D] h-12 align-items-center gap-2 w-full border-[#3D3D3D] border">
            <IoMenuSharp className="text-4xl ml-2 text-[#C0C0C0] mt-1.5"/>
            <span className="text-[0.8rem] text-[#C0C0C0] font-mono ml-2 mt-4">~/.{activePage}</span>
            <GoCopilot className="text-2xl ml-auto text-[#C0C0C0] mt-3 mr-4"/>
        </div>

  );
};

export default PhoneBar;