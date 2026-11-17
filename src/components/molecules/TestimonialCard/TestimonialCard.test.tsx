import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TESTIMONIAL_DATA } from "@/data/mockData";
import { TestimonialCard } from "./TestimonialCard";

describe("TestimonialCard", () => {
  it("renders the quote, author, and stats", () => {
    render(<TestimonialCard testimonial={TESTIMONIAL_DATA} className="gap-4" />);

    expect(screen.getByText(TESTIMONIAL_DATA.quote)).toBeInTheDocument();
    expect(screen.getByText(TESTIMONIAL_DATA.author.name)).toBeInTheDocument();
    expect(screen.getByText(TESTIMONIAL_DATA.author.role)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: TESTIMONIAL_DATA.author.name })).toBeInTheDocument();

    for (const stat of TESTIMONIAL_DATA.stats) {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    }
  });
});
