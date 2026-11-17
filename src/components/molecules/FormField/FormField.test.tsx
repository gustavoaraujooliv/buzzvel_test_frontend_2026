import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { FormField } from "./FormField";

describe("FormField", () => {
  it("connects the label, helper text, and input", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <FormField
        id="email"
        label="Email"
        type="email"
        helperText="We never share it"
        placeholder="you@example.com"
        onChange={onChange}
      />
    );

    const input = screen.getByRole("textbox", { name: "Email" });
    expect(input).toHaveAttribute("id", "email");
    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveAttribute("aria-describedby", "email-helper");
    expect(input).toHaveAttribute("aria-invalid", "false");
    expect(screen.getByText("We never share it")).toHaveAttribute("id", "email-helper");

    await user.type(input, "a");
    expect(onChange).toHaveBeenCalled();
  });

  it("exposes an error instead of helper text", () => {
    render(
      <FormField
        id="email"
        label="Email"
        required
        error="Please enter a valid email address"
        helperText="We never share it"
      />
    );

    const input = screen.getByRole("textbox", { name: /email/i });
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-describedby", "email-error");
    expect(screen.getByRole("alert")).toHaveTextContent("Please enter a valid email address");
    expect(screen.queryByText("We never share it")).not.toBeInTheDocument();
    expect(screen.getByText("required")).toHaveClass("sr-only");
  });

  it("renders a textarea when requested", () => {
    render(<FormField id="question" label="Your question" textarea rows={6} />);

    expect(screen.getByRole("textbox", { name: "Your question" })).toHaveAttribute("rows", "6");
  });
});
