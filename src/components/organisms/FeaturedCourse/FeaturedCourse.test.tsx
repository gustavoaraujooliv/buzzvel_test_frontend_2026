import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FEATURED_COURSE } from "@/data/mockData";
import { FeaturedCourse } from "./FeaturedCourse";

describe("FeaturedCourse", () => {
  it("renders the featured course and its actions", () => {
    render(<FeaturedCourse />);

    expect(screen.getByRole("heading", { name: FEATURED_COURSE.title })).toBeInTheDocument();
    expect(screen.getByText(FEATURED_COURSE.badge!)).toBeInTheDocument();
    expect(screen.getByText(FEATURED_COURSE.imageBadge!)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(FEATURED_COURSE.instructor.name))).toBeInTheDocument();
    expect(screen.getByText(`${FEATURED_COURSE.lessonsCount} lessons`)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View course" })).toHaveAttribute("href", "#view-course");
    expect(screen.getByRole("link", { name: /browse all courses/i })).toHaveAttribute(
      "href",
      "#all-courses"
    );
    expect(
      screen.getByRole("img", { name: `Preview of course: ${FEATURED_COURSE.title}` })
    ).toBeInTheDocument();
  });
});
