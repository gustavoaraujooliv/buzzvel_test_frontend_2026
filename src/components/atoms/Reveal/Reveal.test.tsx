import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Reveal } from "./Reveal";

function setReducedMotion(matches: boolean) {
  vi.mocked(window.matchMedia).mockImplementation((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

describe("Reveal", () => {
  afterEach(() => {
    window.location.hash = "";
    setReducedMotion(false);
  });

  it("stays hidden until the section intersects the viewport", () => {
    let onIntersect: IntersectionObserverCallback = () => {};
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        constructor(callback: IntersectionObserverCallback) {
          onIntersect = callback;
        }
        observe = vi.fn();
        unobserve = vi.fn();
        disconnect = vi.fn();
        takeRecords = () => [];
      }
    );

    render(
      <Reveal className="block">
        <p>Later</p>
      </Reveal>
    );

    const region = screen.getByText("Later").parentElement;
    expect(region).toHaveClass("reveal-hidden", "block");

    act(() => {
      onIntersect(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(region).toHaveClass("reveal-shown");
    expect(region).not.toHaveClass("reveal-hidden");
  });

  it("shows immediately when reduced motion is preferred", () => {
    setReducedMotion(true);

    render(
      <Reveal>
        <p>Now</p>
      </Reveal>
    );

    expect(screen.getByText("Now").parentElement).toHaveClass("reveal-shown");
  });

  it("shows content that is already in view", () => {
    const rect = vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      top: 0,
      bottom: 100,
      left: 0,
      right: 100,
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });

    render(
      <Reveal>
        <p>Visible</p>
      </Reveal>
    );

    expect(screen.getByText("Visible").parentElement).toHaveClass("reveal-shown");
    rect.mockRestore();
  });

  it("shows when focus enters the section", () => {
    render(
      <Reveal>
        <button type="button">Go</button>
      </Reveal>
    );

    fireEvent.focusIn(screen.getByRole("button", { name: "Go" }));

    expect(screen.getByRole("button", { name: "Go" }).parentElement).toHaveClass("reveal-shown");
  });

  it("shows the current hash target", () => {
    window.location.hash = "#about";

    render(
      <Reveal>
        <div id="about">About</div>
      </Reveal>
    );

    expect(screen.getByText("About").parentElement).toHaveClass("reveal-shown");
  });

  it("ignores an invalid hash and keeps off-screen content hidden", () => {
    window.location.hash = "#[";

    render(
      <Reveal>
        <p>Safe</p>
      </Reveal>
    );

    expect(screen.getByText("Safe").parentElement).toHaveClass("reveal-hidden");
  });
});
