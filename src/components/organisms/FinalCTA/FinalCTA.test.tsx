import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FinalCTA } from "./FinalCTA";

describe("FinalCTA", () => {
  it("renders the closing invitation", () => {
    render(<FinalCTA />);

    expect(screen.getByRole("heading", { name: "What will you learn next?" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Explore all courses" })).toHaveAttribute(
      "href",
      "#courses"
    );
    expect(screen.getByRole("link", { name: "Join Luma" })).toHaveAttribute("href", "#join-luma");
    expect(screen.getByRole("img", { name: "Learner 1" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Learner 4" })).toBeInTheDocument();
  });
});
