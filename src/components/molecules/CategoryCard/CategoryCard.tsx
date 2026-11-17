import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

export interface CategoryCardProps {
  category: Category;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  className,
}) => {
  return (
    <Link
      href={category.href}
      className={cn(
        "group flex h-full min-h-[260px] w-full flex-col items-start justify-between rounded-xl border border-brand-border bg-white p-7 transition-colors duration-200 hover:border-brand-blue/30",
        className
      )}
    >
      <div>
        <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-brand-blue-soft px-2 text-xs font-semibold text-brand-blue">
          {category.number}
        </span>
        <h3 className="heading-card mt-5 text-brand-dark">{category.title}</h3>
        <p className="body-small mt-2 text-brand-muted">{category.description}</p>
      </div>

      <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-brand-dark transition-colors duration-200 group-hover:text-brand-blue">
        Explore
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
};
