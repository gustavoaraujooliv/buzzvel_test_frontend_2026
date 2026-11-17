import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { NAVIGATION_LINKS } from "@/data/mockData";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the brand, navigation, and calls to action", () => {
    render(<Header className="top-0" />);

    expect(screen.getByRole("link", { name: "Luma Learning Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("banner")).toHaveClass("top-0");

    const navigation = screen.getByRole("navigation", { name: "Main Navigation" });
    for (const link of NAVIGATION_LINKS) {
      expect(navigation).toHaveTextContent(link.label);
    }

    expect(screen.getByRole("link", { name: "Log in" })).toHaveAttribute("href", "#login");
    expect(screen.getByRole("link", { name: "Start learning" })).toHaveAttribute(
      "href",
      "#start-learning"
    );
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    render(<Header />);

    expect(screen.queryByRole("navigation", { name: "Mobile Navigation" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open menu" }));

    const mobileNav = screen.getByRole("navigation", { name: "Mobile Navigation" });
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    await user.click(within(mobileNav).getByRole("link", { name: "Courses" }));
    expect(screen.queryByRole("navigation", { name: "Mobile Navigation" })).not.toBeInTheDocument();
    expect(mobileNav).not.toBeInTheDocument();
  });
});
