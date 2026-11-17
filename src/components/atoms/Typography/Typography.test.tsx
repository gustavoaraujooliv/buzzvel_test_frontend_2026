import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Typography } from "./Typography";

describe("Typography", () => {
  it("picks a heading tag from the variant", () => {
    render(<Typography variant="hero">Build skills</Typography>);

    expect(screen.getByRole("heading", { level: 1, name: "Build skills" })).toHaveClass(
      "heading-hero"
    );
  });

  it("uses the body paragraph by default", () => {
    render(<Typography>A short description</Typography>);

    const paragraph = screen.getByText("A short description");
    expect(paragraph.tagName).toBe("P");
    expect(paragraph).toHaveClass("body-base");
  });

  it("lets the caller override the element", () => {
    render(
      <Typography as="h4" variant="card" className="text-brand-dark">
        Product Design
      </Typography>
    );

    expect(screen.getByRole("heading", { level: 4, name: "Product Design" })).toHaveClass(
      "heading-card",
      "text-brand-dark"
    );
  });
});
