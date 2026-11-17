import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CONTACT_INFO_ITEMS } from "@/data/mockData";
import { ContactItem } from "./ContactItem";

describe("ContactItem", () => {
  it("links the email address", () => {
    const item = CONTACT_INFO_ITEMS[0];

    render(<ContactItem item={item} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", item.href);
    expect(screen.getByText(item.label)).toBeInTheDocument();
    expect(screen.getByText(item.value)).toHaveClass("text-brand-blue");
  });

  it("renders response time as plain text", () => {
    const item = CONTACT_INFO_ITEMS[1];

    render(<ContactItem item={item} className="w-full" />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText(item.value)).toHaveClass("text-brand-subtle");
    expect(screen.getByText(item.label).closest("div")).toHaveClass("w-full");
  });

  it("renders optional subtext", () => {
    render(
      <ContactItem
        item={{
          label: "Office",
          value: "Lisbon",
          subtext: "Weekdays only",
          iconName: "clock",
        }}
      />
    );

    expect(screen.getByText("Weekdays only")).toBeInTheDocument();
  });
});
