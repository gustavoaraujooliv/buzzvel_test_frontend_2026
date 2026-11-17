import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HOW_IT_WORKS_STEPS } from "@/data/mockData";
import { StepCard } from "./StepCard";

describe("StepCard", () => {
  const step = HOW_IT_WORKS_STEPS[0];

  it("renders the step content", () => {
    const { container } = render(<StepCard step={step} index={0} />);

    expect(screen.getByText(step.stepNumber)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: step.title })).toBeInTheDocument();
    expect(screen.getByText(step.description)).toBeInTheDocument();
    expect(container.querySelector(".bg-brand-border")).toBeNull();
  });

  it("draws a connector before every step after the first", () => {
    const { container } = render(<StepCard step={step} index={1} className="grow" />);

    expect(screen.getByRole("listitem")).toHaveClass("grow");
    expect(container.querySelector(".bg-brand-border")).toBeInTheDocument();
  });
});
