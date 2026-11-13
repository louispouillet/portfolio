type BreadcrumbProps = {
  folders: string[];
  fileName: string;
};

const Breadcrumb = ({ folders, fileName }: BreadcrumbProps) => (
  <div className="hidden bg-editor pt-1 sm:block">
    <span className="ml-2 border-l border-crumb pl-1 font-mono text-xs text-soft sm:text-sm">
      {folders.map((folder) => `${folder} > `).join("")}
      <span className="text-white">{fileName}</span>
    </span>
  </div>
);

export default Breadcrumb;
