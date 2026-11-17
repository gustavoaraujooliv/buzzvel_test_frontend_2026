import { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "white" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export type BadgeVariant = "blue" | "yellow" | "peach" | "coral";

export type TypographyVariant =
  | "hero"
  | "section"
  | "cta"
  | "card"
  | "eyebrow"
  | "body-large"
  | "body"
  | "body-small"
  | "caption";

export interface NavItem {
  label: string;
  href: string;
}

export interface Category {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface Instructor {
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: Instructor;
  lessonsCount: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  badge?: string;
  imageBadge?: string;
  imageUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialData {
  quote: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  stats: StatItem[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  question: string;
}

export interface ContactInfoItem {
  label: string;
  value: string;
  subtext?: string;
  href?: string;
  iconName: "mail" | "clock";
}

export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}
