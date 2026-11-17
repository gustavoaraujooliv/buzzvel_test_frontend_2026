import React from "react";
import { CategoryCard } from "@/components/molecules/CategoryCard";
import { CATEGORIES_DATA } from "@/data/mockData";
import { cn } from "@/lib/utils";

export interface CategoriesProps {
  className?: string;
}

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className={cn("site-section bg-white", className)}
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="eyebrow mb-3 block">Find your next skill</span>
          <h2 id="categories-heading" className="heading-section text-brand-dark">
            Learn something worth knowing.
          </h2>
          <p className="body-large text-brand-muted mt-4">
            Short, practical courses designed around skills you can put to work immediately.
          </p>
        </div>

        {/* Categories Grid */}
        <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {CATEGORIES_DATA.map((category) => (
            <li key={category.id} className="h-full">
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
