import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => (
  <div className={`rounded-lg border border-line-strong bg-surface p-6 font-mono text-muted ${className ?? ""}`}>{children}</div>
);

export default Card;
