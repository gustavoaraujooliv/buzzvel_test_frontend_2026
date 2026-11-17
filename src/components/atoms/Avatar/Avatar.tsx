"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-lg",
};

const dimensionMap = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  className,
}) => {
  const [hasError, setHasError] = React.useState(false);
  const pxSize = dimensionMap[size];

  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden shrink-0 bg-brand-blue-soft border-2 border-white flex items-center justify-center font-medium text-brand-dark shadow-xs",
        sizeClasses[size],
        className
      )}
    >
      {src && !hasError ? (
        <Image
          src={src}
          alt={alt}
          width={pxSize}
          height={pxSize}
          className="object-cover w-full h-full"
          onError={() => setHasError(true)}
        />
      ) : (
        <span>{getInitials(alt || "User")}</span>
      )}
    </div>
  );
};
