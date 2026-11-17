import React from "react";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Categories } from "@/components/organisms/Categories";
import { FeaturedCourse } from "@/components/organisms/FeaturedCourse";
import { HowItWorks } from "@/components/organisms/HowItWorks";
import { Testimonial } from "@/components/organisms/Testimonial";
import { ValueProposition } from "@/components/organisms/ValueProposition";
import { Contact } from "@/components/organisms/Contact";
import { FinalCTA } from "@/components/organisms/FinalCTA";
import { Footer } from "@/components/organisms/Footer";
import { Reveal } from "@/components/atoms/Reveal";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-canvas text-brand-dark">
      {/* Accessible skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-blue text-white rounded-md shadow-lg outline-none font-medium text-sm"
      >
        Skip to main content
      </a>

      {/* Global Navigation Header */}
      <Header />

      {/* Main Page Flow */}
      <main id="main-content" className="flex-1">
        <Hero />
        <Reveal>
          <Categories />
        </Reveal>
        <Reveal>
          <FeaturedCourse />
        </Reveal>
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <Testimonial />
        </Reveal>
        <Reveal>
          <ValueProposition />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
        <Reveal>
          <FinalCTA />
        </Reveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
