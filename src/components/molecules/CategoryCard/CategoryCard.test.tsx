import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CATEGORIES_DATA } from "@/data/mockData";
import { CategoryCard } from "./CategoryCard";

describe("CategoryCard", () => {
  it("links to the category and shows its content", () => {
    const category = CATEGORIES_DATA[0];

    render(<CategoryCard category={category} className="h-full" />);

    const link = screen.getByRole("link", { name: /product design/i });
    expect(link).toHaveAttribute("href", category.href);
    expect(link).toHaveClass("h-full");
    expect(screen.getByRole("heading", { name: category.title })).toBeInTheDocument();
    expect(screen.getByText(category.number)).toBeInTheDocument();
    expect(screen.getByText(category.description)).toBeInTheDocument();
    expect(screen.getByText("Explore")).toBeInTheDocument();
  });
});
