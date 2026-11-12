const PATH_SEGMENTS = ["louis", "portfolio", "src"];

type BreadcrumbProps = {
  fileName: string;
};

const Breadcrumb = ({ fileName }: BreadcrumbProps) => (
  <div className="hidden bg-editor pt-1 sm:block">
    <span className="ml-2 border-l border-crumb pl-1 font-mono text-xs text-soft sm:text-sm">
      {PATH_SEGMENTS.map((segment) => `${segment} > `).join("")}
      <span className="text-white">{fileName}</span>
    </span>
  </div>
);

export default Breadcrumb;
