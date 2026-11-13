import { GoStarFill } from "react-icons/go";
import type { GitHubRepository } from "../../api/github";
import type { Language } from "../../config/routes";
import { formatRelativeTime } from "../../i18n/format";
import { UI_TEXT } from "../../i18n/ui";

type RepositoryStatsProps = {
  repository: GitHubRepository;
  language: Language;
  className?: string;
};

const RepositoryStats = ({ repository, language, className }: RepositoryStatsProps) => {
  const text = UI_TEXT[language].projects;

  return (
    <span className={`flex flex-wrap items-center gap-x-2 font-mono text-xs text-muted ${className ?? ""}`}>
      {repository.stars > 0 && (
        <span className="flex items-center gap-1" aria-label={`${repository.stars} ${text.starsLabel}`}>
          <GoStarFill className="text-[#E3B341]" />{repository.stars}
        </span>
      )}
      <span>{text.updatedLabel} {formatRelativeTime({ isoDate: repository.pushedAt, language })}</span>
    </span>
  );
};

export default RepositoryStats;
