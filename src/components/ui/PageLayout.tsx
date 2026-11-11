import type { ReactNode } from "react";

const PADDED_CLASSES = "px-4 pt-4 pb-10 sm:px-8 sm:pt-0";

type PageLayoutProps = {
  children: ReactNode;
  isPadded?: boolean;
};

const PageLayout = ({ children, isPadded }: PageLayoutProps) => (
  <div className={`flex h-full w-full flex-col overflow-x-hidden bg-editor ${isPadded ? PADDED_CLASSES : ""}`}>
    {children}
  </div>
);

export default PageLayout;
