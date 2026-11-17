import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarProps } from "./Avatar";

export interface AvatarGroupProps {
  avatars: Array<{ src?: string; alt: string }>;
  max?: number;
  size?: AvatarProps["size"];
  className?: string;
  avatarClassName?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 4,
  size = "sm",
  className,
  avatarClassName,
}) => {
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <ul className={cn("m-0 flex list-none items-center -space-x-2.5 p-0", className)} role="list">
      {visibleAvatars.map((avatar, idx) => (
        <li key={idx}>
          <Avatar
            src={avatar.src}
            alt={avatar.alt}
            size={size}
            className={cn("ring-2 ring-brand-canvas", avatarClassName)}
          />
        </li>
      ))}
      {remainingCount > 0 && (
        <li
          className={cn(
            "relative flex shrink-0 items-center justify-center rounded-full border-2 border-white bg-brand-yellow-soft text-xs font-bold text-brand-dark ring-2 ring-brand-canvas",
            size === "sm" ? "w-8 h-8" : "w-10 h-10"
          )}
        >
          +{remainingCount}
        </li>
      )}
    </ul>
  );
};
