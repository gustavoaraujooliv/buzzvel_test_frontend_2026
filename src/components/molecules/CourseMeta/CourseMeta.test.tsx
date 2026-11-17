import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CourseMeta } from "./CourseMeta";

describe("CourseMeta", () => {
  it("lists lessons, duration, and level", () => {
    render(<CourseMeta lessonsCount={8} duration="2h 40min" level="Intermediate" />);

    const items = screen.getAllByRole("listitem");
    expect(items.map((item) => item.textContent)).toEqual([
      "8 lessons",
      "2h 40min",
      "Intermediate",
    ]);
    expect(items[0]).toHaveClass("text-brand-muted");
  });

  it("uses light text on a dark theme", () => {
    render(
      <CourseMeta
        lessonsCount={1}
        duration="20min"
        level="Beginner"
        theme="dark"
        className="mt-6"
      />
    );

    expect(screen.getByRole("list")).toHaveClass("mt-6");
    expect(screen.getByText("Beginner")).toHaveClass("text-white");
  });
});
