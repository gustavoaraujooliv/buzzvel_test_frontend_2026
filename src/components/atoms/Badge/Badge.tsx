import React from "react";
import { cn } from "@/lib/utils";
import { BadgeVariant } from "@/types";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  blue: "badge-blue",
  yellow: "badge-yellow",
  peach: "badge-peach",
  coral: "badge-coral",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "blue",
  icon,
  ...props
}) => {
  return (
    <span className={cn(variantStyles[variant], className)} {...props}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
