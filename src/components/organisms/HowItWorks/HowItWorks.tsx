import React from "react";
import { StepCard } from "@/components/molecules/StepCard";
import { HOW_IT_WORKS_STEPS } from "@/data/mockData";
import { cn } from "@/lib/utils";

export interface HowItWorksProps {
  className?: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ className }) => {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={cn("site-section bg-brand-canvas", className)}
    >
      <div className="site-container">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="eyebrow mb-3 block">How Luma works</span>
          <h2 id="how-it-works-heading" className="heading-section text-brand-dark">
            Less browsing. More learning.
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-7 right-[calc((100%-4rem)/3-1.75rem)] top-7 hidden h-px bg-brand-border md:block"
            aria-hidden="true"
          />
          <ol className="m-0 grid list-none grid-cols-1 gap-10 p-0 md:grid-cols-3 md:gap-8" role="list">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <StepCard key={step.stepNumber} step={step} index={idx} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
