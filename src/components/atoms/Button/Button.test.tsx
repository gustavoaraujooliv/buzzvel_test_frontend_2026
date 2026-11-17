import React, { createRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders a button and calls onClick", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button variant="secondary" size="sm" onClick={onClick}>
        Save
      </Button>
    );

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveClass("btn-secondary", "px-4");
    expect(button).toHaveAttribute("type", "button");

    await user.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("renders icons and forwards a ref", () => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <Button
        ref={ref}
        type="submit"
        leftIcon={<span>L</span>}
        rightIcon={<span>R</span>}
        className="w-full"
      >
        Send
      </Button>
    );

    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("R")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "LSendR" })).toHaveClass("btn-primary", "w-full");
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("disables itself and hides icons while loading", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button isLoading leftIcon={<span>L</span>} rightIcon={<span>R</span>} onClick={onClick}>
        Save
      </Button>
    );

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toHaveClass("cursor-wait");
    expect(screen.queryByText("L")).not.toBeInTheDocument();
    expect(screen.queryByText("R")).not.toBeInTheDocument();

    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders a link when href is set", () => {
    const onClick = vi.fn();

    render(
      <Button href="#courses" disabled onClick={onClick}>
        Explore
      </Button>
    );

    const link = screen.getByRole("link", { name: "Explore" });
    expect(link).toHaveAttribute("href", "#courses");
    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).toHaveAttribute("tabindex", "-1");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
