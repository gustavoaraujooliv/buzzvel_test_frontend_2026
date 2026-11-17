import React from "react";
import { Avatar } from "@/components/atoms/Avatar";
import { cn } from "@/lib/utils";
import { TestimonialData } from "@/types";

export interface TestimonialCardProps {
  testimonial: TestimonialData;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:gap-16",
        className
      )}
    >
      <figure className="m-0 flex w-full max-w-[600px] flex-col">
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="currentColor"
          aria-hidden="true"
          className="block text-brand-blue"
        >
          <path d="M0 4.6A4.5 4.5 0 0 1 9 4.6L6.2 19.6A1.8 1.8 0 0 1 2.6 19.6Z" />
          <path d="M15 4.6A4.5 4.5 0 0 1 24 4.6L21.2 19.6A1.8 1.8 0 0 1 17.6 19.6Z" />
        </svg>
        <blockquote className="m-0 mt-4 w-full max-w-[600px] font-heading text-[30px] font-semibold not-italic leading-[44px] tracking-[-0.75px] text-brand-dark lg:min-h-[132px]">
          <p>{testimonial.quote}</p>
        </blockquote>

        <figcaption className="mt-8 flex items-center gap-3">
          <Avatar
            src={testimonial.author.avatarUrl}
            alt={testimonial.author.name}
            size="md"
          />
          <div>
            <p className="m-0 text-sm font-semibold text-brand-dark">
              {testimonial.author.name}
            </p>
            <p className="m-0 text-sm text-brand-muted">{testimonial.author.role}</p>
          </div>
        </figcaption>
      </figure>

      <dl className="m-0 flex w-full flex-row gap-4 lg:w-auto lg:flex-col lg:gap-6 lg:border-l lg:border-brand-border lg:pl-12">
        {testimonial.stats.map((stat) => (
          <div key={stat.label} className="flex min-w-0 flex-1 flex-col lg:flex-none">
            <dt className="order-2 m-0 mt-1 text-sm font-normal text-brand-muted">{stat.label}</dt>
            <dd className="order-1 m-0 font-heading text-4xl font-extrabold leading-none tracking-tight text-brand-blue sm:text-5xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
