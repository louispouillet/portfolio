import type { Language } from "../../config/routes";
import type { ProjectMedia } from "../../data/projects";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type ProjectVideoProps = {
  media: ProjectMedia;
  language: Language;
};

const ProjectVideo = ({ media, language }: ProjectVideoProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <video
      className="mb-3 aspect-[3/2] w-full rounded border border-line bg-black object-cover"
      poster={media.poster}
      autoPlay={!prefersReducedMotion}
      controls={prefersReducedMotion}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={media.alt[language]}
    >
      <source src={media.webm} type="video/webm" />
      <source src={media.mp4} type="video/mp4" />
    </video>
  );
};

export default ProjectVideo;
