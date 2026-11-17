import React from "react";
import { Label } from "@/components/atoms/Label";
import { Input, InputProps } from "@/components/atoms/Input";
import { Textarea, TextareaProps } from "@/components/atoms/Textarea";
import { cn } from "@/lib/utils";

export interface FormFieldBaseProps {
  id: string;
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  className?: string;
}

export type FormFieldInputProps = FormFieldBaseProps & {
  type?: "text" | "email" | "password" | "number" | "tel";
  textarea?: false;
} & Omit<InputProps, "id">;

export type FormFieldTextareaProps = FormFieldBaseProps & {
  textarea: true;
} & Omit<TextareaProps, "id">;

export type FormFieldProps = FormFieldInputProps | FormFieldTextareaProps;

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  error,
  helperText,
  required,
  className,
  textarea,
  ...props
}) => {
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  return (
    <div className={cn("w-full flex flex-col gap-1.5", className)}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>

      {textarea ? (
        <Textarea
          id={id}
          isError={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          {...(props as TextareaProps)}
        />
      ) : (
        <Input
          id={id}
          isError={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          {...(props as InputProps)}
        />
      )}

      {error && (
        <p id={errorId} className="text-xs text-red-500 font-medium mt-0.5" role="alert">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={helperId} className="text-xs text-brand-muted mt-0.5">
          {helperText}
        </p>
      )}
    </div>
  );
};
