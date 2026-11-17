import React from "react";
import { Button } from "@/components/atoms/Button";
import { AvatarGroup } from "@/components/atoms/Avatar";
import { ASSETS } from "@/data/assets";
import { cn } from "@/lib/utils";

export interface FinalCTAProps {
  className?: string;
}

const PEACH = "#FFCB9F";

const FinalCTAPattern: React.FC = () => (
  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
    <svg
      className="absolute left-[1.66%] top-[3.46%] h-auto w-[8.5%]"
      viewBox="0 0 88 88"
      fill="none"
    >
      <circle cx="44" cy="44" r="41.2" stroke={PEACH} strokeWidth="2.5" />
    </svg>

    <svg
      className="absolute left-[24.9%] top-[9.31%] h-auto w-[5.08%]"
      viewBox="0 0 52 52"
      fill="none"
    >
      <rect
        x="5.5"
        y="5.5"
        width="41"
        height="41"
        rx="9"
        stroke={PEACH}
        strokeWidth="1.7"
        transform="rotate(14 26 26)"
      />
    </svg>

    <svg
      className="absolute left-[68.46%] top-[9.04%] h-auto w-[2.54%]"
      viewBox="0 0 26 26"
      fill="none"
    >
      <circle cx="13" cy="13" r="11.1" stroke={PEACH} strokeWidth="1.8" />
    </svg>

    <svg
      className="absolute left-[78.91%] top-[19.15%] h-auto w-[5.47%]"
      viewBox="0 0 56 36"
      fill="none"
    >
      <path
        d="M29 16C29 16 22 22 22 27C22 31.2 25.1 33 29 33C32.9 33 36 31.2 36 27C36 22 29 16 29 16Z"
        fill={PEACH}
      />
      <g stroke={PEACH} strokeWidth="1.8" strokeLinecap="round">
        <path d="M29.5 2V10" />
        <path d="M11 8L18 15" />
        <path d="M47 8L40 15" />
        <path d="M8 28H17" />
        <path d="M41 28H50" />
      </g>
    </svg>

    <svg
      className="absolute left-[10.94%] top-[45.74%] h-auto w-[2.73%]"
      viewBox="0 0 28 26"
    >
      <path
        fill={PEACH}
        d="M15 2c5.6 0 10 4.1 10 9.1 0 4.7-3.6 8.6-8.6 9.1-.4 1.6-1.6 2.9-2.6 3.6-.3.2-.8 0-.7-.4.2-1.1-.2-2-.9-2.6C8.2 20.2 5 16.6 5 11.1 5 6.1 9.4 2 15 2z"
      />
    </svg>

    <svg
      className="absolute -left-[4.69%] top-[47.61%] h-auto w-[7.03%] rotate-[12deg]"
      viewBox="0 0 72 56"
    >
      <rect width="72" height="56" rx="14" fill={PEACH} />
    </svg>

    <svg
      className="absolute left-[90.43%] -top-[2.13%] h-auto w-[9.38%] rotate-[13deg]"
      viewBox="0 0 96 88"
    >
      <rect width="96" height="88" rx="16" fill={PEACH} />
    </svg>

    <svg
      className="absolute left-[88.18%] top-[48.67%] h-auto w-[5.08%]"
      viewBox="0 0 52 52"
      fill="none"
    >
      <g stroke={PEACH} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
        <path d="M25 1L49 17V33L25 49L1 33V17Z" />
        <path d="M25 1V18" />
        <path d="M25 33V49" />
        <path d="M25 18L36 24L25 33L12 24Z" />
        <path d="M1 17L12 24L1 33" />
        <path d="M49 17L36 24L49 33" />
      </g>
    </svg>

    <svg
      className="absolute left-[4.39%] top-[79.26%] h-auto w-[9.38%]"
      viewBox="0 0 96 96"
    >
      <circle cx="48" cy="48" r="48" fill={PEACH} />
    </svg>

    <img
      src="/images/final-cta-b.png"
      alt=""
      className="absolute left-[23.63%] top-[81.65%] h-auto w-[2.83%]"
    />

    <svg
      className="absolute left-[75.49%] top-[82.98%] h-auto w-[3.52%]"
      viewBox="0 0 36 26"
      fill="none"
    >
      <rect
        x="1.2"
        y="1.2"
        width="32.6"
        height="22.6"
        rx="2.5"
        stroke={PEACH}
        strokeWidth="1.6"
      />
      <path d="M14 2.2V22.8M21 2.2V22.8" stroke={PEACH} strokeWidth="1.5" />
      <rect x="5.6" y="8.5" width="3.4" height="7.2" rx="1.5" fill={PEACH} />
      <rect x="25.2" y="8.5" width="3.4" height="7.2" rx="1.5" fill={PEACH} />
    </svg>

    <svg
      className="absolute left-[94.34%] top-[91.22%] h-auto w-[2.54%]"
      viewBox="0 0 26 26"
      fill="none"
    >
      <circle cx="13" cy="13" r="11.1" stroke={PEACH} strokeWidth="1.8" />
    </svg>

    <svg
      className="absolute left-[83.2%] top-[99.2%] h-auto w-[3.13%]"
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="16" cy="16" r="14.2" stroke={PEACH} strokeWidth="2" />
    </svg>
  </div>
);

export const FinalCTA: React.FC<FinalCTAProps> = ({ className }) => {
  return (
    <section
      id="join"
      aria-labelledby="final-cta-heading"
      className={cn("relative overflow-hidden bg-brand-yellow-soft py-20 sm:py-24", className)}
    >
      <FinalCTAPattern />

      <div className="site-container relative z-10 flex flex-col items-center text-center">
        <div className="mb-6">
          <AvatarGroup
            avatars={ASSETS.ctaAvatars.map((url, i) => ({
              src: url,
              alt: `Learner ${i + 1}`,
            }))}
            size="md"
            avatarClassName="border-brand-yellow-accent ring-0"
          />
        </div>

        <h2 id="final-cta-heading" className="heading-cta max-w-2xl text-brand-dark">
          What will you learn next?
        </h2>

        <p className="body-large mt-4 text-brand-muted">
          Start with one course. Build from there.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Button variant="primary" href="#courses" className="w-full justify-center sm:w-auto">
            Explore all courses
          </Button>
          <Button
            variant="white"
            href="#join-luma"
            className="w-full justify-center border border-brand-border hover:border-brand-blue hover:bg-white sm:w-auto"
          >
            Join Luma
          </Button>
        </div>
      </div>
    </section>
  );
};
