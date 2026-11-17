import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TESTIMONIAL_DATA } from "@/data/mockData";
import { Testimonial } from "./Testimonial";

describe("Testimonial", () => {
  it("renders the testimonial section", () => {
    render(<Testimonial />);

    expect(
      screen.getByRole("heading", { name: "Student testimonials and platform statistics" })
    ).toBeInTheDocument();
    expect(screen.getByText(TESTIMONIAL_DATA.quote)).toBeInTheDocument();
    expect(document.getElementById("community")).toBeInTheDocument();
  });
});
