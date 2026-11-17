import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders the default blue variant", () => {
    render(<Badge>New</Badge>);

    expect(screen.getByText("New").parentElement).toHaveClass("badge-blue");
  });

  it("renders a variant and an icon", () => {
    render(
      <Badge variant="coral" icon={<span>★</span>} className="uppercase">
        Featured
      </Badge>
    );

    const badge = screen.getByText("Featured").parentElement;
    expect(badge).toHaveClass("badge-coral", "uppercase");
    expect(screen.getByText("★")).toBeInTheDocument();
  });
});
