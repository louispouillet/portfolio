import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import type { Language } from "../../config/routes";
import type { ProjectMedia } from "../../data/projects";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { UI_TEXT } from "../../i18n/ui";

type ProjectDemoDialogProps = {
  media: ProjectMedia;
  title: string;
  language: Language;
  buttonClassName: string;
};

const ProjectDemoDialog = ({ media, title, language, buttonClassName }: ProjectDemoDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const text = UI_TEXT[language].projects;

  const openDialog = () => {
    setIsOpen(true);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button type="button" onClick={openDialog} className={buttonClassName}>
        <FaPlay className="text-[0.6rem]" />{text.demoButton}
      </button>
      <dialog
        ref={dialogRef}
        aria-label={`${text.demoButton} · ${title}`}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
        className="m-auto w-[min(92vw,720px)] rounded border border-line bg-panel p-0 text-white backdrop:bg-black/75"
      >
        {isOpen && (
          <div className="flex flex-col gap-3 p-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-lg font-extrabold">{title}</h2>
              <button type="button" onClick={closeDialog} className="font-mono text-sm text-muted transition-colors hover:text-white">
                {text.demoClose} ×
              </button>
            </div>
            <video
              className="aspect-[3/2] w-full rounded bg-black object-contain"
              poster={media.poster}
              autoPlay={!prefersReducedMotion}
              controls
              muted
              loop
              playsInline
              aria-label={media.alt[language]}
            >
              <source src={media.webm} type="video/webm" />
              <source src={media.mp4} type="video/mp4" />
            </video>
            <p className="font-mono text-xs text-muted">{media.alt[language]}</p>
          </div>
        )}
      </dialog>
    </>
  );
};

export default ProjectDemoDialog;
