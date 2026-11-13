import type { IconType } from "react-icons";
import { PAGE_META } from "../../config/pageMeta";
import type { PageKey } from "../../config/routes";

type PageHeaderProps = {
  page: PageKey;
  title: string;
  className?: string;
  icon?: IconType;
  iconClassName?: string;
};

const PageHeader = ({ page, title, className, icon, iconClassName }: PageHeaderProps) => {
  const Icon = icon ?? PAGE_META[page].icon;

  return (
    <div className={`slide-up delay-2 flex flex-row items-end gap-3 ${className ?? ""}`}>
      <Icon className={`shrink-0 text-4xl sm:text-6xl ${iconClassName ?? PAGE_META[page].iconClassName}`} />
      <h1 className="font-display text-4xl font-extrabold tracking-[-1px] text-white sm:text-6xl sm:tracking-[-2px] lg:tracking-[-2.5px]">{title}</h1>
    </div>
  );
};

export default PageHeader;
