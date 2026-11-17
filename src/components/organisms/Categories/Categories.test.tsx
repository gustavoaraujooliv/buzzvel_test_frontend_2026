import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CATEGORIES_DATA } from "@/data/mockData";
import { Categories } from "./Categories";

describe("Categories", () => {
  it("renders a card for every category", () => {
    render(<Categories />);

    expect(
      screen.getByRole("heading", { name: "Learn something worth knowing." })
    ).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Learn something worth knowing." })).toHaveAttribute(
      "id",
      "categories"
    );

    for (const category of CATEGORIES_DATA) {
      expect(screen.getByRole("link", { name: new RegExp(category.title, "i") })).toHaveAttribute(
        "href",
        category.href
      );
    }
  });
});
