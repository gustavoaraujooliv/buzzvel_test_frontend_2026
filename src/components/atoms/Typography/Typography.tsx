import React from "react";
import { cn } from "@/lib/utils";
import { TypographyVariant } from "@/types";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  variant?: TypographyVariant;
  children: React.ReactNode;
}

const variantStyles: Record<TypographyVariant, string> = {
  hero: "heading-hero",
  section: "heading-section",
  cta: "heading-cta",
  card: "heading-card",
  eyebrow: "eyebrow",
  "body-large": "body-large",
  body: "body-base",
  "body-small": "body-small",
  caption: "caption-text",
};

const defaultTagForVariant: Record<TypographyVariant, "h1" | "h2" | "h3" | "p" | "span"> = {
  hero: "h1",
  section: "h2",
  cta: "h2",
  card: "h3",
  eyebrow: "span",
  "body-large": "p",
  body: "p",
  "body-small": "p",
  caption: "span",
};

export const Typography: React.FC<TypographyProps> = ({
  as,
  variant = "body",
  children,
  className,
  ...props
}) => {
  const Component = as || defaultTagForVariant[variant];

  return (
    <Component
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
