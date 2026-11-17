import React from "react";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { TESTIMONIAL_DATA } from "@/data/mockData";
import { cn } from "@/lib/utils";

export interface TestimonialProps {
  className?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ className }) => {
  return (
    <section
      id="community"
      aria-labelledby="testimonials-heading"
      className={cn(
        "site-section bg-white",
        className
      )}
    >
      <div className="site-container">
        <h2 id="testimonials-heading" className="sr-only">
          Student testimonials and platform statistics
        </h2>
        <TestimonialCard testimonial={TESTIMONIAL_DATA} />
      </div>
    </section>
  );
};
