import { PAGE_META } from "../../config/pageMeta";
import type { PageKey } from "../../config/routes";

type PageHeaderProps = {
  page: PageKey;
  title: string;
  className?: string;
};

const PageHeader = ({ page, title, className }: PageHeaderProps) => {
  const { icon: Icon, iconClassName } = PAGE_META[page];

  return (
    <div className={`slide-up delay-2 flex flex-row items-end gap-3 ${className ?? ""}`}>
      <Icon className={`text-4xl sm:text-6xl ${iconClassName}`} />
      <h1 className="font-display text-4xl font-extrabold tracking-[-1px] text-white sm:text-6xl sm:tracking-[-2px] lg:tracking-[-2.5px]">{title}</h1>
    </div>
  );
};

export default PageHeader;
