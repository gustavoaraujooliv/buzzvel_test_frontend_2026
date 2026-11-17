import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isActive = false,
  className,
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center whitespace-nowrap text-sm font-normal leading-6 transition-colors duration-150",
        isActive
          ? "text-brand-dark"
          : "text-brand-muted hover:text-brand-dark",
        className
      )}
    >
      {children}
    </Link>
  );
};
