import React from "react";
import { cn } from "@/lib/utils";

export interface CourseMetaProps {
  lessonsCount: number;
  duration: string;
  level: string;
  theme?: "light" | "dark";
  className?: string;
}

export const CourseMeta: React.FC<CourseMetaProps> = ({
  lessonsCount,
  duration,
  level,
  theme = "light",
  className,
}) => {
  const items = [`${lessonsCount} lessons`, duration, level];
  const isDark = theme === "dark";

  return (
    <ul className={cn("m-0 flex list-none flex-wrap items-center gap-2 p-0", className)} role="list">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "box-border flex h-[38px] flex-none flex-col items-center justify-center rounded-[8px] border border-[#DBDFEB] px-[14px] py-[6px] text-sm",
            isDark ? "text-white" : "text-brand-muted"
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
