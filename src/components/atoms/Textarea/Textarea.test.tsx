import React, { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("defaults to four rows and forwards a ref", () => {
    const ref = createRef<HTMLTextAreaElement>();

    render(<Textarea ref={ref} aria-label="Question" />);

    const textarea = screen.getByRole("textbox", { name: "Question" });
    expect(textarea).toHaveAttribute("rows", "4");
    expect(textarea).toHaveAttribute("aria-invalid", "false");
    expect(ref.current).toBe(textarea);
  });

  it("marks invalid and disabled states", () => {
    render(<Textarea aria-label="Question" rows={6} isError disabled />);

    const textarea = screen.getByRole("textbox", { name: "Question" });
    expect(textarea).toHaveAttribute("rows", "6");
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveAttribute("aria-invalid", "true");
    expect(textarea).toHaveClass("border-red-500", "cursor-not-allowed");
  });
});
