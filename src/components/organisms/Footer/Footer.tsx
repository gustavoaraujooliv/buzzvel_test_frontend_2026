import React from "react";
import Link from "next/link";
import { Wordmark } from "@/components/atoms/Wordmark";
import { FOOTER_BLURB, FOOTER_COPYRIGHT, FOOTER_LINK_GROUPS } from "@/data/mockData";
import { cn } from "@/lib/utils";

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-brand-dark pt-16 pb-10 text-white sm:pt-20", className)}>
      <div className="site-container">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-12 lg:gap-16">
          <div className="md:col-span-4 flex flex-col items-start">
            <Link
              href="/"
              className="inline-flex items-center py-1"
              aria-label="Luma Learning Home"
            >
              <Wordmark className="text-white" />
            </Link>
            <p className="mt-4 max-w-[14rem] text-sm leading-relaxed text-white/60">
              {FOOTER_BLURB}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="md:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col gap-3.5">
                <h2 className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-brand-border-light">
                  {group.title}
                </h2>
                <ul className="m-0 flex list-none flex-col gap-2 p-0" role="list">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-brand-light-gray transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="m-0 border-t border-white/15 pt-6 text-center text-xs text-brand-border-light md:text-left">
          <small className="text-xs text-brand-border-light">{FOOTER_COPYRIGHT}</small>
        </p>
      </div>
    </footer>
  );
};
