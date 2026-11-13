type TagVariant = "neutral" | "accent";

const VARIANT_CLASSES: Record<TagVariant, string> = {
  neutral: "border-line-strong bg-white/[0.03] px-2 py-1 text-sm text-white",
  accent: "border-[#1C3B54] bg-[#1E252C] px-2 py-0.5 font-mono text-xs text-highlight",
};

type TagProps = {
  label: string;
  variant: TagVariant;
};

const Tag = ({ label, variant }: TagProps) => (
  <span className={`rounded-md border ${VARIANT_CLASSES[variant]}`}>{label}</span>
);

export default Tag;
