import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Label } from "./Label";

describe("Label", () => {
  it("associates with a control", () => {
    render(
      <Label htmlFor="email" className="mb-1">
        Email
      </Label>
    );

    expect(screen.getByText("Email")).toHaveAttribute("for", "email");
    expect(screen.getByText("Email")).toHaveClass("label-base", "mb-1");
    expect(screen.queryByText("required")).not.toBeInTheDocument();
  });

  it("announces required fields to assistive technology", () => {
    render(<Label required>Full name</Label>);

    expect(screen.getByText("required")).toHaveClass("sr-only");
  });
});
