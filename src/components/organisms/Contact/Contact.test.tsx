import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { CONTACT_INFO_ITEMS } from "@/data/mockData";
import { Contact } from "./Contact";

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByRole("textbox", { name: /full name/i }), "Ada Lovelace");
  await user.type(screen.getByRole("textbox", { name: /^email/i }), "ada@example.com");
  await user.type(
    screen.getByRole("textbox", { name: /your question/i }),
    "I would like to teach a course."
  );
}

describe("Contact", () => {
  it("renders the contact details and an empty form", () => {
    render(<Contact />);

    expect(screen.getByRole("heading", { name: "Get in touch" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Contact us" })).toBeInTheDocument();

    for (const item of CONTACT_INFO_ITEMS) {
      expect(screen.getByText(item.value)).toBeInTheDocument();
    }

    expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled();
  });

  it("shows a message for each invalid field", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(screen.getByText("Please enter your full name")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email address")).toBeInTheDocument();
    expect(screen.getByText("Please enter your question or message")).toBeInTheDocument();
  });

  it("rejects an invalid email and a short question", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByRole("textbox", { name: /full name/i }), "Ada Lovelace");
    await user.type(screen.getByRole("textbox", { name: /^email/i }), "not-an-email");
    await user.type(screen.getByRole("textbox", { name: /your question/i }), "Too short");
    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
    expect(screen.getByText("Please enter at least 10 characters")).toBeInTheDocument();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("confirms a valid message and lets the visitor send another", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send message" }));

    const status = await screen.findByRole("status", undefined, { timeout: 3000 });
    expect(status).toHaveTextContent("Message sent successfully!");
    expect(status).toHaveTextContent("Ada Lovelace");

    await user.click(screen.getByRole("button", { name: "Send another message" }));

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /full name/i })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: /^email/i })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: /your question/i })).toHaveValue("");
  });
});
