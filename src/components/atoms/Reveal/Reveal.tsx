"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealState = "idle" | "hidden" | "shown";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

const isHashTarget = (node: HTMLElement) => {
  const hash = window.location.hash;
  if (hash.length < 2) return false;

  try {
    return node.id === hash.slice(1) || node.querySelector(hash) !== null;
  } catch {
    return false;
  }
};

export const Reveal: React.FC<RevealProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | null = null;

    const show = () => {
      setState("shown");
      observer?.disconnect();
    };

    const onFocusIn = () => show();
    node.addEventListener("focusin", onFocusIn);

    const onMotionChange = () => {
      if (motion.matches) show();
    };
    motion.addEventListener("change", onMotionChange);

    const rect = node.getBoundingClientRect();
    const inView = rect.bottom > 0 && rect.top < window.innerHeight;

    if (motion.matches || isHashTarget(node) || inView) {
      show();
    } else {
      setState("hidden");
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) show();
        },
        { threshold: 0 }
      );
      observer.observe(node);
    }

    return () => {
      observer?.disconnect();
      node.removeEventListener("focusin", onFocusIn);
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        state === "hidden" && "reveal-hidden",
        state === "shown" && "reveal-shown",
        className
      )}
    >
      {children}
    </div>
  );
};
