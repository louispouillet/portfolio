import { Fragment } from "react";
import type { Language } from "../../config/routes";
import type { ArchitectureStep } from "../../data/projects";

type ArchitectureFlowProps = {
  steps: ArchitectureStep[];
  language: Language;
};

const ArchitectureFlow = ({ steps, language }: ArchitectureFlowProps) => (
  <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:flex-wrap lg:items-center">
    {steps.map((step, index) => (
      <Fragment key={step.name}>
        {index > 0 && (
          <li aria-hidden="true" className="self-center font-mono text-accent-teal">
            <span className="lg:hidden">↓</span>
            <span className="hidden lg:inline">→</span>
          </li>
        )}
        <li className="rounded border border-line bg-panel px-3 py-2 lg:w-48">
          <p className="font-mono text-sm text-white">{step.name}</p>
          <p className="mt-1 font-mono text-xs text-muted">{step.detail[language]}</p>
        </li>
      </Fragment>
    ))}
  </ol>
);

export default ArchitectureFlow;
