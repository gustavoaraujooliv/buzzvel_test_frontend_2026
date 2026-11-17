import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { CourseMeta } from "@/components/molecules/CourseMeta";
import { FEATURED_COURSE } from "@/data/mockData";
import { cn } from "@/lib/utils";

export interface FeaturedCourseProps {
  className?: string;
}

export const FeaturedCourse: React.FC<FeaturedCourseProps> = ({ className }) => {
  return (
    <section
      id="courses"
      aria-labelledby="featured-course-heading"
      className={cn("site-section bg-brand-blue text-white", className)}
    >
      <div className="site-container">
        <article className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_538px] lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl">
              <Image
                src={FEATURED_COURSE.imageUrl}
                alt={`Preview of course: ${FEATURED_COURSE.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="rounded-xl object-cover"
              />
            </div>
            {FEATURED_COURSE.imageBadge && (
              <div className="absolute -left-3 top-0 z-10 -translate-y-1/2">
                <Badge
                  variant="yellow"
                  className="h-7 w-40 justify-center whitespace-nowrap rounded-[6px] px-3 py-1.5 font-sans text-xs font-semibold uppercase leading-4 tracking-[1.44px] opacity-100"
                >
                  {FEATURED_COURSE.imageBadge}
                </Badge>
              </div>
            )}
          </div>

          <div className="flex flex-col items-start">
            {FEATURED_COURSE.badge && (
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                {FEATURED_COURSE.badge}
              </p>
            )}

            <h2
              id="featured-course-heading"
              className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[48px] lg:font-extrabold lg:leading-[56px] lg:tracking-[-1.2px]"
            >
              {FEATURED_COURSE.title}
            </h2>

            <p className="pt-[20px] max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {FEATURED_COURSE.description}
            </p>

            <p className="pt-[24px] text-sm text-white/90 sm:text-base">
              with {FEATURED_COURSE.instructor.name} · {FEATURED_COURSE.instructor.role}
            </p>

            <div className="mt-6">
              <CourseMeta
                lessonsCount={FEATURED_COURSE.lessonsCount}
                duration={FEATURED_COURSE.duration}
                level={FEATURED_COURSE.level}
                theme="dark"
              />
            </div>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button
                variant="white"
                href="#view-course"
                className="justify-center bg-brand-yellow-accent hover:bg-brand-yellow-dark [&>span]:font-bold"
              >
                View course
              </Button>
              <Button
                variant="ghost"
                href="#all-courses"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="justify-center text-white hover:bg-white/10 hover:text-white"
              >
                Browse all courses
              </Button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
