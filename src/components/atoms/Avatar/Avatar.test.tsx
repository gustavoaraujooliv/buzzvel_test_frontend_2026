import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar, AvatarGroup } from "./index";

describe("Avatar", () => {
  it("shows initials when there is no image", () => {
    render(<Avatar alt="Alex Morgan" size="lg" />);

    expect(screen.getByText("AM")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("uses the first two letters of a single name", () => {
    render(<Avatar alt="Bo" />);

    expect(screen.getByText("BO")).toBeInTheDocument();
  });

  it("falls back to initials when the image fails", () => {
    render(<Avatar src="/alex.png" alt="Alex Morgan" />);

    fireEvent.error(screen.getByRole("img", { name: "Alex Morgan" }));

    expect(screen.getByText("AM")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});

describe("AvatarGroup", () => {
  const avatars = [
    { alt: "Ann Lee" },
    { alt: "Bob Kay" },
    { alt: "Cid Ng" },
  ];

  it("renders every avatar within the limit", () => {
    render(<AvatarGroup avatars={avatars} max={4} className="gap-1" />);

    expect(screen.getByRole("list")).toHaveClass("gap-1");
    expect(screen.getByText("AL")).toBeInTheDocument();
    expect(screen.getByText("BK")).toBeInTheDocument();
    expect(screen.getByText("CN")).toBeInTheDocument();
    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
  });

  it("summarizes avatars past the maximum", () => {
    render(<AvatarGroup avatars={avatars} max={2} size="md" />);

    expect(screen.getByText("AL")).toBeInTheDocument();
    expect(screen.getByText("BK")).toBeInTheDocument();
    expect(screen.queryByText("CN")).not.toBeInTheDocument();
    expect(screen.getByText("+1")).toHaveClass("w-10");
  });
});
