"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ─── Utility ─────────────────────────────────────────────────────────────

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── CVA Variants ────────────────────────────────────────────────────────

const labelVariants = cva(
  [
    "inline-flex",
    "items-center",
    "gap-2",
    "rounded-full",
    "font-medium",
    "leading-none",
    "transition-all",
    "duration-200",
    "select-none",
    "whitespace-nowrap",
  ],
  {
    variants: {
      size: {
        sm: ["px-3", "py-1.5", "text-xs"],
        md: ["px-4", "py-2", "text-sm"],
        lg: ["px-5", "py-2.5", "text-sm"],
      },
      theme: {
        light: [
          "bg-neutral-100",
          "text-neutral-700",
          "border",
          "border-neutral-200",
          "hover:bg-neutral-200",
          "hover:border-neutral-300",
        ],
        dark: [
          "bg-neutral-800",
          "text-white",
          "border",
          "border-neutral-700",
          "hover:bg-neutral-700",
          "hover:border-neutral-600",
        ],
        "light-primary": [
          "bg-neutral-900",
          "text-white",
          "border",
          "border-neutral-900",
          "hover:bg-neutral-800",
        ],
        "dark-primary": [
          "bg-slate-800",
          "text-white",
          "border",
          "border-slate-700",
          "hover:bg-slate-700",
        ],
      },
      variant: {
        default: [],
        outline: [],
        ghost: [],
      },
    },
    compoundVariants: [
      {
        theme: "light",
        variant: "outline",
        className:
          "bg-transparent border-neutral-300 text-neutral-700 hover:bg-neutral-100",
      },
      {
        theme: "dark",
        variant: "outline",
        className:
          "bg-transparent border-neutral-600 text-neutral-200 hover:bg-neutral-800",
      },
      {
        theme: "light",
        variant: "ghost",
        className:
          "bg-transparent border-transparent text-neutral-700 hover:bg-neutral-100",
      },
      {
        theme: "dark",
        variant: "ghost",
        className:
          "bg-transparent border-transparent text-neutral-200 hover:bg-neutral-800",
      },
    ],
    defaultVariants: {
      size: "md",
      theme: "light",
      variant: "default",
    },
  },
);

// ─── Types ───────────────────────────────────────────────────────────────

export type LabelIcon = "dot" | "circle" | "check" | "user" | React.ReactNode;

export interface LabelProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {
  icon?: LabelIcon;
  iconRight?: LabelIcon;
  children: React.ReactNode;
  className?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

// ─── Icon Renderer ───────────────────────────────────────────────────────

function renderIcon(icon: LabelIcon, theme: string = "light"): React.ReactNode {
  if (!icon) return null;

  const iconColor =
    theme.includes("dark") || theme.includes("primary")
      ? "text-white"
      : "text-neutral-500";

  if (React.isValidElement(icon)) {
    return (
      <span className={cn("inline-flex items-center", iconColor)}>{icon}</span>
    );
  }

  switch (icon) {
    case "dot":
      return (
        <span
          className={cn(
            "inline-block h-2 w-2 rounded-full",
            theme.includes("dark") || theme.includes("primary")
              ? "bg-white"
              : "bg-neutral-500",
          )}
        />
      );
    case "circle":
      return (
        <span
          className={cn(
            "inline-block h-3 w-3 rounded-full border-2",
            theme.includes("dark") || theme.includes("primary")
              ? "border-white"
              : "border-neutral-500",
          )}
        />
      );
    case "check":
      return (
        <svg
          className={cn("h-3.5 w-3.5", iconColor)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      );
    case "user":
      return (
        <svg
          className={cn("h-3.5 w-3.5", iconColor)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    default:
      return null;
  }
}

// ─── Label Component ─────────────────────────────────────────────────────

const Label = React.forwardRef<HTMLSpanElement, LabelProps>(function Label(
  {
    size = "md",
    theme = "light",
    variant = "default",
    icon,
    iconRight,
    children,
    className,
    dismissible = false,
    onDismiss,
    ...props
  },
  ref,
) {
  return (
    <span
      style={{
        fontFamily: "sans-serif",
      }}
      ref={ref}
      className={cn(labelVariants({ size, theme, variant }), className)}
      {...props}
    >
      {renderIcon(icon, theme!)}
      <span>{children}</span>
      {renderIcon(iconRight, theme!)}
      {dismissible && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss?.();
          }}
          className={cn(
            "ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full transition-colors",
            theme!.includes("dark") || theme!.includes("primary")
              ? "text-white/70 hover:bg-white/20 hover:text-white"
              : "text-neutral-400 hover:bg-neutral-300 hover:text-neutral-600",
          )}
          aria-label="Dismiss"
        >
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
});

Label.displayName = "Label";

export { Label, labelVariants };
