"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// ─── Utility ─────────────────────────────────────────────────────────────

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── CVA Variants ────────────────────────────────────────────────────────

const progressVariants = cva(
  [
    "relative",
    "overflow-hidden",
    "transition-colors",
    "duration-200",
  ],
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
        xl: "h-4",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      theme: {
        light: "bg-neutral-200",
        dark: "bg-neutral-800",
      },
      width: {
        xs: "w-[120px]",
        sm: "w-[200px]",
        md: "w-[320px]",
        lg: "w-[480px]",
        xl: "w-[640px]",
        full: "w-full",
      },
    },
    defaultVariants: {
      size: "md",
      radius: "full",
      theme: "dark",
      width: "md",
    },
  },
);

const fillVariants = cva(
  ["h-full", "transition-all", "duration-300", "ease-out"],
  {
    variants: {
      variant: {
        default: "",
        primary: "",
        success: "",
        info: "",
        warning: "",
        error: "",
        neutral: "",
      },
      theme: {
        light: "",
        dark: "",
      },
      animated: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // ─── Dark Theme Fills ────────────────────────────────────────
      { theme: "dark", variant: "default", className: "bg-white" },
      { theme: "dark", variant: "primary", className: "bg-white" },
      { theme: "dark", variant: "success", className: "bg-emerald-500" },
      { theme: "dark", variant: "info", className: "bg-blue-500" },
      { theme: "dark", variant: "warning", className: "bg-amber-500" },
      { theme: "dark", variant: "error", className: "bg-red-500" },
      { theme: "dark", variant: "neutral", className: "bg-neutral-500" },
      // ─── Light Theme Fills ───────────────────────────────────────
      { theme: "light", variant: "default", className: "bg-neutral-900" },
      { theme: "light", variant: "primary", className: "bg-neutral-900" },
      { theme: "light", variant: "success", className: "bg-emerald-600" },
      { theme: "light", variant: "info", className: "bg-blue-600" },
      { theme: "light", variant: "warning", className: "bg-amber-500" },
      { theme: "light", variant: "error", className: "bg-red-600" },
      { theme: "light", variant: "neutral", className: "bg-neutral-600" },
    ],
    defaultVariants: {
      variant: "default",
      animated: true,
      theme: "dark",
    },
  },
);

// ─── Types ───────────────────────────────────────────────────────────────

export interface ProgressProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants>,
    VariantProps<typeof fillVariants> {
  value?: number;
  max?: number;
  min?: number;
  showValue?: boolean;
  valuePosition?: "inside" | "outside" | "top" | "bottom";
  label?: string;
  description?: string;
  indeterminate?: boolean;
  className?: string;
  fillClassName?: string;
}

// ─── Progress Component ──────────────────────────────────────────────────

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  function Progress(
    {
      size = "md",
      radius = "full",
      theme = "dark",
      variant = "default",
      width = "md",
      animated = true,
      value = 0,
      max = 100,
      min = 0,
      showValue = false,
      valuePosition = "outside",
      label,
      description,
      indeterminate = false,
      className,
      fillClassName,
      ...props
    },
    ref,
  ) {
    const clampedValue = Math.max(min, Math.min(value, max));
    const percentage = ((clampedValue - min) / (max - min)) * 100;

    return (
      <div
        ref={ref}
        style={{ fontFamily: "sans-serif" }}
        className={cn("flex flex-col gap-1.5", className)}
        {...props}
      >
        {/* ─── Label Row ──────────────────────────────────────────── */}
        {(label || (showValue && valuePosition === "outside")) && (
          <div className="flex items-center justify-between">
            {label && (
              <span
                className={cn(
                  "text-sm font-medium",
                  theme === "dark" ? "text-white" : "text-neutral-900",
                )}
              >
                {label}
              </span>
            )}
            {showValue && valuePosition === "outside" && (
              <span
                className={cn(
                  "text-sm font-medium tabular-nums",
                  theme === "dark" ? "text-neutral-400" : "text-neutral-600",
                )}
              >
                {Math.round(percentage)}%
              </span>
            )}
          </div>
        )}

        {/* ─── Progress Bar ───────────────────────────────────────── */}
        <div
          className={cn(progressVariants({ size, radius, theme, width }))}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : clampedValue}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuetext={indeterminate ? undefined : `${Math.round(percentage)}%`}
        >
          {indeterminate ? (
            <motion.div
              className={cn(
                "h-full absolute rounded-full",
                fillVariants({ variant, theme, animated }),
                fillClassName,
              )}
              initial={{ x: "-100%", width: "40%" }}
              animate={{ x: "200%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          ) : (
            <motion.div
              className={cn(
                "rounded-full",
                fillVariants({ variant, theme, animated }),
                fillClassName,
              )}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={
                animated
                  ? { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
                  : { duration: 0 }
              }
            >
              {showValue && valuePosition === "inside" && percentage > 15 && (
                <span className={cn(
                  "flex h-full items-center justify-end pr-2 text-xs font-medium",
                  theme === "dark" ? "text-black/70" : "text-white/90",
                )}>
                  {Math.round(percentage)}%
                </span>
              )}
            </motion.div>
          )}
        </div>

        {/* ─── Description ────────────────────────────────────────── */}
        {description && (
          <p
            className={cn(
              "text-xs",
              theme === "dark" ? "text-neutral-500" : "text-neutral-500",
            )}
          >
            {description}
          </p>
        )}

        {/* ─── Value Bottom ───────────────────────────────────────── */}
        {showValue && valuePosition === "bottom" && (
          <div className="flex justify-between text-xs">
            <span className={theme === "dark" ? "text-neutral-500" : "text-neutral-500"}>
              {min}
            </span>
            <span className={theme === "dark" ? "text-neutral-400" : "text-neutral-600"}>
              {clampedValue} / {max}
            </span>
          </div>
        )}
      </div>
    );
  },
);

Progress.displayName = "Progress";

export default Progress;
export { Progress };