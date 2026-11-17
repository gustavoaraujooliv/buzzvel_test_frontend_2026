import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HOW_IT_WORKS_STEPS } from "@/data/mockData";
import { HowItWorks } from "./HowItWorks";

describe("HowItWorks", () => {
  it("renders the three steps in order", () => {
    render(<HowItWorks />);

    expect(screen.getByRole("heading", { name: "Less browsing. More learning." })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(HOW_IT_WORKS_STEPS.length);

    for (const step of HOW_IT_WORKS_STEPS) {
      expect(screen.getByRole("heading", { name: step.title })).toBeInTheDocument();
    }
  });
});
