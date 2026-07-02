"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "transition-all",
    "duration-200",
    "select-none",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "text-white",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800 focus-visible:ring-neutral-900/40",

        secondary:
          "bg-neutral-100 text-neutral-900 border border-neutral-200 hover:bg-neutral-200 focus-visible:ring-neutral-400/40",

        outline:
          "bg-transparent text-white border border-neutral-300 hover:text-black hover:bg-neutral-100 focus-visible:ring-neutral-400/40",

        destructive:
          "bg-red-600/96 text-red-200 border border-red-600 hover:bg-red-700 focus-visible:ring-red-500/40",

        success:
          "bg-[#3cf716]/85 text-white border border-[#3cf716] hover:bg-[#3cf716]/75 focus-visible:ring-emerald-500/40",

        link: "bg-transparent text-neutral-900 underline-offset-4 hover:underline",
      },

      size: {
        xs: "h-7 px-2.5 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
        xl: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },

      shape: {
        default: "rounded-[6px]",
        pill: "rounded-full",
        square: "rounded-none",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "default",
    },
  },
);

const spinnerSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  icon: 16,
};

function Spinner({ size = 16 }: { size?: number }) {
  return (
    <svg
      className="animate-spin"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        className="opacity-25"
      />

      <path
        fill="currentColor"
        className="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.3 0 0 5.3 0 12h4z"
      />
    </svg>
  );
}

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;

  fullWidth?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
  theme?: "dark" | "light";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      shape,
      loading = false,
      disabled,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      className,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        style={{
          fontFamily: "sans-serif",
        }}
        className={cn(
          buttonVariants({
            variant,
            size,
            shape,
          }),
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {loading ? (
          <Spinner size={spinnerSize[size ?? "md"]} />
        ) : (
          <>
            {leftIcon && <span aria-hidden="true">{leftIcon}</span>}

            {children}

            {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
