import React from "react";
import { cn } from "@/lib/utils";
import { HowItWorksStep } from "@/types";

export interface StepCardProps {
  step: HowItWorksStep;
  index: number;
  className?: string;
}

const markers = [
  <div key="focus" className="relative h-14 w-14" aria-hidden="true">
    <div className="absolute inset-0 rounded-full bg-brand-blue-soft" />
    <div className="absolute left-2 top-2 h-6 w-6 rounded-[6px] bg-brand-blue" />
  </div>,
  <div key="experience" className="relative h-14 w-14" aria-hidden="true">
    <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-md bg-brand-peach" />
    <div className="absolute left-[calc(50%+10px)] top-[calc(50%+10px)] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral" />
  </div>,
  <div key="practice" className="relative h-14 w-14" aria-hidden="true">
    <div className="absolute inset-0 rounded-lg bg-brand-yellow-soft" />
    <div className="absolute bottom-2 left-2 h-5 w-5 rounded-full bg-brand-yellow-dark" />
  </div>,
];

export const StepCard: React.FC<StepCardProps> = ({
  step,
  index,
  className,
}) => {
  return (
    <li className={cn("relative flex flex-col items-start", className)}>
      <div className="relative mb-5">
        {index > 0 && (
          <div
            className="absolute bottom-full left-1/2 h-8 w-px -translate-x-1/2 bg-brand-border md:hidden"
            aria-hidden="true"
          />
        )}
        {markers[index] ?? markers[0]}
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-subtle">
        {step.stepNumber}
      </p>
      <h3 className="mt-2 font-heading text-lg font-bold text-brand-dark">
        {step.title}
      </h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-brand-muted">
        {step.description}
      </p>
    </li>
  );
};
