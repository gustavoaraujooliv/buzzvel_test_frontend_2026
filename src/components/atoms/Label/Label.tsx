import React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  required,
  ...props
}) => {
  return (
    <label className={cn("label-base", className)} {...props}>
      {children}
      {required && (
        <span className="sr-only">required</span>
      )}
    </label>
  );
};
