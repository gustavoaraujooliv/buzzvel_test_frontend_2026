import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonSize, ButtonVariant } from "@/types";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  white: "btn-white",
  outline:
    "btn-base border border-brand-border bg-transparent text-brand-dark hover:bg-black/5 px-7 py-3.5 text-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size,
      leftIcon,
      rightIcon,
      isLoading = false,
      disabled,
      href,
      type = "button",
      onClick,
      ...props
    },
    ref
  ) => {
    const classNames = cn(
      variantStyles[variant],
      size && sizeStyles[size],
      isLoading && "opacity-70 cursor-wait",
      className
    );

    const content = (
      <>
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon && <span className="inline-flex mr-2 shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex ml-2 shrink-0">{rightIcon}</span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={classNames}
          aria-disabled={disabled || isLoading}
          tabIndex={disabled || isLoading ? -1 : undefined}
          onClick={onClick}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={classNames}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
