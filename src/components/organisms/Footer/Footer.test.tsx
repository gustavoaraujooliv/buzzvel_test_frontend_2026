import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FOOTER_BLURB, FOOTER_COPYRIGHT, FOOTER_LINK_GROUPS } from "@/data/mockData";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the brand, link groups, and copyright", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "Luma Learning Home" })).toHaveAttribute("href", "/");
    expect(screen.getByText(FOOTER_BLURB)).toBeInTheDocument();
    expect(screen.getByText(FOOTER_COPYRIGHT)).toBeInTheDocument();

    const navigation = screen.getByRole("navigation", { name: "Footer" });
    for (const group of FOOTER_LINK_GROUPS) {
      expect(screen.getByRole("heading", { name: group.title })).toBeInTheDocument();
      for (const link of group.links) {
        expect(navigation).toHaveTextContent(link.label);
      }
    }
  });
});
