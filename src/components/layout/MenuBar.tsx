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
        className="px-3 py-1 rounded hover:bg-hover transition duration-200 cursor-default font-mono text-xs text-soft"
        onClick={() => setOpen(!open)}
      >
        {title}
      </span>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-bar text-soft rounded shadow-lg z-50 font-mono text-xs">
          {options.map((opt: string, i: number) => (
            <button
              key={i}
              type="button"
              tabIndex={-1}
              className="w-full text-left px-3 py-1 hover:bg-hover transition cursor-default"
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
    <div aria-hidden="true" className="flex gap-6 px-1 py-0.5 bg-bar w-full text-soft font-mono border-b border-line">
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