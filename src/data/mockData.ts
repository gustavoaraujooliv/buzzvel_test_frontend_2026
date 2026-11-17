import {
  Category,
  Course,
  FooterLinkGroup,
  HowItWorksStep,
  NavItem,
  TestimonialData,
  ContactInfoItem,
} from "@/types";
import { ASSETS } from "./assets";

export const HERO_CONTENT = {
  eyebrow: "Learn at your own pace",
  title: "Build skills that actually move you forward.",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
  primaryCta: "Explore courses",
  secondaryCta: "See how it works",
  trustPrefix: "Trusted by",
  trustHighlight: "24,000+",
  trustSuffix: "learners",
  statValue: "120+",
  statLabel: "expert-led courses",
  rating: "4.9 avg rating",
};

export const FOOTER_BLURB = "Practical learning for curious people.";

export const FOOTER_COPYRIGHT = "© 2026 Luma Learning";

export const NAVIGATION_LINKS: NavItem[] = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#for-teams" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
];

export const CATEGORIES_DATA: Category[] = [
  {
    id: "cat-1",
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: "#category-product-design",
  },
  {
    id: "cat-2",
    number: "02",
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
    href: "#category-technology",
  },
  {
    id: "cat-3",
    number: "03",
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
    href: "#category-business",
  },
  {
    id: "cat-4",
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: "#category-creative",
  },
];

export const FEATURED_COURSE: Course = {
  id: "course-1",
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: {
    name: "Maya Chen",
    role: "Senior Product Designer",
  },
  lessonsCount: 8,
  duration: "2h 40min",
  level: "Intermediate",
  badge: "Most popular this month",
  imageBadge: "Featured course",
  imageUrl: ASSETS.featuredCourse.banner,
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: "Step 01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
  },
  {
    stepNumber: "Step 02",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
  },
  {
    stepNumber: "Step 03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
  },
];

export const TESTIMONIAL_DATA: TestimonialData = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  author: {
    name: "Alex Morgan",
    role: "Product Manager",
    avatarUrl: ASSETS.testimonial.alexMorgan,
  },
  stats: [
    { value: "24K+", label: "active learners" },
    { value: "120+", label: "expert-led courses" },
    { value: "92%", label: "complete their first course" },
  ],
};

export const CONTACT_INFO_ITEMS: ContactInfoItem[] = [
  {
    label: "Email",
    value: "contact@luma.com",
    href: "mailto:contact@luma.com",
    iconName: "mail",
  },
  {
    label: "Response Time",
    value: "Up to 24 hours on business days",
    iconName: "clock",
  },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#categories" },
      { label: "Instructors", href: "#instructors" },
      { label: "For Teams", href: "#for-teams" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Journal", href: "#journal" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#help" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#terms" },
      { label: "Privacy", href: "#privacy" },
    ],
  },
];
