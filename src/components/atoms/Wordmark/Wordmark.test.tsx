import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Wordmark } from "./Wordmark";

describe("Wordmark", () => {
  it("renders a decorative mark that accepts a class", () => {
    const { container } = render(<Wordmark className="text-white" />);
    const svg = container.querySelector("svg");

    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveClass("text-white");
    expect(svg?.querySelectorAll("path").length).toBeGreaterThan(0);
  });
});
