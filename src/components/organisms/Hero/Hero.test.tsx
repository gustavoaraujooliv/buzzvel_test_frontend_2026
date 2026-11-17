import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HERO_CONTENT } from "@/data/mockData";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the pitch, actions, and social proof", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { level: 1, name: HERO_CONTENT.title })).toBeInTheDocument();
    expect(screen.getByText(HERO_CONTENT.eyebrow)).toBeInTheDocument();
    expect(screen.getByText(HERO_CONTENT.description)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: HERO_CONTENT.primaryCta })).toHaveAttribute(
      "href",
      "#courses"
    );
    expect(screen.getByRole("link", { name: HERO_CONTENT.secondaryCta })).toHaveAttribute(
      "href",
      "#how-it-works"
    );
    expect(screen.getByText(new RegExp(HERO_CONTENT.trustHighlight))).toBeInTheDocument();
    expect(screen.getByText(HERO_CONTENT.statValue)).toBeInTheDocument();
    expect(screen.getByText(HERO_CONTENT.rating)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Person focused on learning at their laptop" })
    ).toBeInTheDocument();
  });
});
