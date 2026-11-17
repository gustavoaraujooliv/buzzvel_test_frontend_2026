import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ValueProposition } from "./ValueProposition";

describe("ValueProposition", () => {
  it("renders the community pitch and gallery", () => {
    render(<ValueProposition />);

    expect(
      screen.getByRole("heading", { name: "Meet international students & teachers" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Explore teachers and students" })).toHaveAttribute(
      "href",
      "#community-network"
    );
    expect(screen.getAllByRole("img")).toHaveLength(10);
    expect(screen.getByRole("img", { name: "Graduate holding a diploma" })).toBeInTheDocument();
  });
});
