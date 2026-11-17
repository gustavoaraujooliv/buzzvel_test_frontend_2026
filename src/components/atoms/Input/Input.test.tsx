import React, { createRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("forwards native props, a ref, and change events", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const ref = createRef<HTMLInputElement>();

    render(
      <Input
        ref={ref}
        aria-label="Email"
        type="email"
        placeholder="you@example.com"
        onChange={onChange}
      />
    );

    const input = screen.getByRole("textbox", { name: "Email" });
    expect(input).toHaveAttribute("aria-invalid", "false");
    expect(ref.current).toBe(input);

    await user.type(input, "a");
    expect(onChange).toHaveBeenCalled();
  });

  it("marks invalid and disabled states", () => {
    render(<Input aria-label="Name" isError disabled className="mt-2" />);

    const input = screen.getByRole("textbox", { name: "Name" });
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveClass("border-red-500", "cursor-not-allowed", "mt-2");
  });
});
