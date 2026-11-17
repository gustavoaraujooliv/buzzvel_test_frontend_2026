import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, isError, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        disabled={disabled}
        aria-invalid={isError ? "true" : "false"}
        className={cn(
          "input-base",
          isError &&
            "border-red-500 focus:ring-red-500 focus:border-transparent text-red-900",
          disabled && "bg-gray-100 text-gray-400 cursor-not-allowed",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
