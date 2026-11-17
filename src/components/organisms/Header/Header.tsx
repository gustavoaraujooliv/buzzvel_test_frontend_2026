"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Wordmark } from "@/components/atoms/Wordmark";
import { NavLink } from "@/components/molecules/NavLink";
import { NAVIGATION_LINKS } from "@/data/mockData";
import { cn } from "@/lib/utils";

export interface HeaderProps {
  className?: string;
}

const actionLinkClass =
  "h-11 px-4 py-2.5 text-sm leading-6 shadow-none";

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 box-border h-[69px] w-full border-b border-brand-border bg-brand-canvas lg:h-[70px]",
        className
      )}
    >
      <div className="site-container relative flex h-full items-center justify-between">
        <Link
          href="/"
          className="relative z-10 inline-flex shrink-0 items-center text-brand-dark"
          aria-label="Luma Learning Home"
        >
          <Wordmark />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
          aria-label="Main Navigation"
        >
          <ul className="m-0 flex list-none items-center gap-8 p-0" role="list">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-10 hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            href="#login"
            className={cn(actionLinkClass, "font-normal text-brand-muted hover:bg-transparent")}
          >
            Log in
          </Button>
          <Button
            variant="primary"
            href="#start-learning"
            className={cn(actionLinkClass, "px-5")}
          >
            Start learning
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <path
                d="M12 12L24 24M24 12L12 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <path
                d="M9 13H27M9 18H27M9 23H27"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-b border-brand-border bg-brand-canvas px-5 pb-5 lg:hidden"
        >
          <nav aria-label="Mobile Navigation">
            <ul className="m-0 flex list-none flex-col p-0" role="list">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[44px] w-full"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-2 flex flex-col gap-2">
            <Button
              variant="ghost"
              href="#login"
              className={cn(actionLinkClass, "w-full justify-center font-normal text-brand-muted hover:bg-transparent")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Log in
            </Button>
            <Button
              variant="primary"
              href="#start-learning"
              className={cn(actionLinkClass, "w-full justify-center px-5")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Start learning
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
