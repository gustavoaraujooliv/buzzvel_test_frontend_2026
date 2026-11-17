import React from "react";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { AvatarGroup } from "@/components/atoms/Avatar";
import { ASSETS } from "@/data/assets";
import { HERO_CONTENT } from "@/data/mockData";
import { cn } from "@/lib/utils";

export interface HeroProps {
  className?: string;
}

const RatingStar = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
    fill="#FFEF80"
    aria-hidden="true"
  >
    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section
      className={cn("relative overflow-hidden bg-brand-canvas", className)}
    >
      <div className="site-container py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 flex flex-col items-start lg:order-1">
            <p className="eyebrow">{HERO_CONTENT.eyebrow}</p>

            <h1 className="heading-hero mt-4 max-w-xl text-brand-dark">
              {HERO_CONTENT.title}
            </h1>

            <p className="body-large mt-5 max-w-md text-brand-muted">
              {HERO_CONTENT.description}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button variant="primary" href="#courses" className="justify-center">
                {HERO_CONTENT.primaryCta}
              </Button>
              <Button variant="secondary" href="#how-it-works" className="justify-center">
                {HERO_CONTENT.secondaryCta}
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3 self-center lg:self-start">
              <AvatarGroup
                avatars={ASSETS.hero.avatars.map((url, i) => ({
                  src: url,
                  alt: `Learner ${i + 1}`,
                }))}
                size="sm"
              />
              <p className="text-sm text-brand-muted">
                <strong className="font-bold text-brand-dark">
                  {HERO_CONTENT.trustPrefix} {HERO_CONTENT.trustHighlight}
                </strong>{" "}
                {HERO_CONTENT.trustSuffix}
              </p>
            </div>
          </div>

          <div className="relative order-1 mx-auto aspect-[500/520] w-[86%] lg:order-2 lg:mx-0 lg:w-full">
            <div
              className="absolute left-[90%] top-[4.615%] h-[90%] w-[17.8%] rounded-[16px] bg-brand-peach lg:left-[93%] lg:w-[10%] xl:left-[90%] xl:w-[17.8%]"
              aria-hidden="true"
            />
            <div
              className="absolute left-[-8.96%] top-[77.5%] aspect-square w-[21.2%] rounded-full bg-brand-blue-soft"
              aria-hidden="true"
            />

            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <Image
                src={ASSETS.hero.personLaptop}
                alt="Person focused on learning at their laptop"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute left-[-4.4%] top-[3.077%] flex h-11 w-max items-center gap-2 whitespace-nowrap rounded-lg bg-white px-3 py-2 shadow-floating sm:h-14 sm:gap-3 sm:px-4 sm:py-3">
              <span className="inline-flex h-6 items-center rounded-md bg-brand-blue-soft px-1.5 text-xs font-bold text-brand-blue sm:h-8 sm:px-2 sm:text-sm">
                {HERO_CONTENT.statValue}
              </span>
              <span className="text-xs font-medium text-brand-dark sm:text-sm">
                {HERO_CONTENT.statLabel}
              </span>
            </div>

            <div className="absolute right-[-7.8%] top-[83.942%] flex h-10 w-max items-center gap-1.5 whitespace-nowrap rounded-lg bg-white px-3 py-2 shadow-floating sm:h-12 sm:gap-2 sm:px-4 sm:py-3 lg:right-[-3%] xl:right-[-7.8%] min-[1320px]:right-[calc(-7.8%-20px)]">
              <span className="inline-flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <RatingStar key={index} />
                ))}
              </span>
              <span className="text-xs font-medium text-brand-dark sm:text-sm">
                {HERO_CONTENT.rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
