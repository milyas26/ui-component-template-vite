import React from "react";
import { ButtonHTMLAttributes } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AT_BUTTON_VARIANT = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
  TERTIARY: "TERTIARY",
} as const;
export type ButtonVariant = keyof typeof AT_BUTTON_VARIANT;

// eslint-disable-next-line react-refresh/only-export-components
export const variantClasses: Record<ButtonVariant, string> = {
  PRIMARY: "bg-green-200 hover:bg-green-400 active:bg-green-500",
  SECONDARY: "bg-blue-200 hover:bg-blue-400 active:bg-blue-500",
  TERTIARY: "bg-red-200 hover:bg-red-400 active:bg-red-500",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
  isDisabled?: boolean;
}

export const Button = ({
  label,
  variant = "PRIMARY",
  isDisabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`transition-colors px-6 py-2 rounded-md ${
        variantClasses[variant]
      } ${
        isDisabled
          ? "bg-gray-300 text-slate-600 cursor-not-allowed pointer-events-none"
          : ""
      }`}
      onClick={isDisabled ? onClick : undefined}
    >
      {label}
    </button>
  );
};
