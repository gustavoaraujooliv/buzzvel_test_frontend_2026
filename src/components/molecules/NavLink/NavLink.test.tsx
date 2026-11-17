import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { NavLink } from "./NavLink";

describe("NavLink", () => {
  it("renders an inactive link", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <NavLink href="#courses" onClick={onClick}>
        Courses
      </NavLink>
    );

    const link = screen.getByRole("link", { name: "Courses" });
    expect(link).toHaveAttribute("href", "#courses");
    expect(link).toHaveClass("text-brand-muted");
    expect(link).not.toHaveClass("text-brand-dark");

    await user.click(link);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("styles the active link", () => {
    render(
      <NavLink href="#about" isActive className="w-full">
        About
      </NavLink>
    );

    expect(screen.getByRole("link", { name: "About" })).toHaveClass("text-brand-dark", "w-full");
  });
});
