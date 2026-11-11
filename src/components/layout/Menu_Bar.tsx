import { useState, useRef, useEffect } from "react";

const MenuButton = ({ title, options }: { title: string; options: string[] }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <span
        className="px-3 py-1 rounded hover:bg-[#404051] transition duration-200 cursor-default font-mono text-[0.7vw] text-[#CCC]"
        onClick={() => setOpen(!open)}
      >
        {title}
      </span>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-[#2D2D2D] text-[#CCC] rounded shadow-lg z-50 font-mono text-[0.7vw]">
          {options.map((opt: string, i: number) => (
            <button
              key={i}
              className="w-full text-left px-3 py-1 hover:bg-[#404051] transition cursor-default"
              onClick={() => {
                setOpen(false);
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const MenuBar = () => {
  return (
    <div className="flex gap-6 px-1 bg-[#2D2D2D] w-full text-[#CCC] font-mono py-0.9 border-[#3D3D3D] border-t">
      <MenuButton
        title="File"
        options={["New File", "Open File...", "Save", "Exit"]}
      />
      <MenuButton
        title="Edit"
        options={["Undo", "Redo", "Cut", "Copy", "Paste"]}
      />
      <MenuButton
        title="View"
        options={["Appearance", "Layout", "Explorer", "Terminal"]}
      />
      <MenuButton
        title="Terminal"
        options={["New Terminal", "Run Task", "Kill Terminal"]}
      />
      <MenuButton
        title="Help"
        options={["Documentation", "About", "Check Updates"]}
      />
      <MenuButton
        title="Copilot"
        options={["Enable", "Settings", "Feedback"]}
      />
    </div>
  );
};

export default MenuBar;