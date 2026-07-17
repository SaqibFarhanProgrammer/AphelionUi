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

const checkboxVariants = cva(
  [
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "shrink-0",
    "rounded-md",
    "border-2",
    "transition-all",
    "duration-150",
    "ease-out",
    "cursor-pointer",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-40",
  ],
  {
    variants: {
      size: {
        sm: ["h-4", "w-4"],
        md: ["h-5", "w-5"],
        lg: ["h-6", "w-6"],
      },
      theme: {
        light: [
          "border-neutral-300",
          "bg-white",
          "focus-visible:ring-neutral-900/20",
          "focus-visible:ring-offset-white",
        ],
        dark: [
          "border-neutral-600",
          "bg-neutral-800",
          "focus-visible:ring-white/20",
          "focus-visible:ring-offset-neutral-900",
        ],
      },
      checked: {
        true: [],
        false: [],
      },
      indeterminate: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        theme: "light",
        checked: true,
        className: [
          "border-blue-600",
          "bg-blue-600",
          "hover:bg-blue-700",
          "hover:border-blue-700",
        ],
      },
      {
        theme: "dark",
        checked: true,
        className: [
          "border-blue-500",
          "bg-blue-500",
          "hover:bg-blue-400",
          "hover:border-blue-400",
        ],
      },
      {
        theme: "light",
        indeterminate: true,
        className: [
          "border-blue-600",
          "bg-blue-600",
          "hover:bg-blue-700",
          "hover:border-blue-700",
        ],
      },
      {
        theme: "dark",
        indeterminate: true,
        className: [
          "border-blue-500",
          "bg-blue-500",
          "hover:bg-blue-400",
          "hover:border-blue-400",
        ],
      },
    ],
    defaultVariants: {
      size: "md",
      theme: "light",
      checked: false,
      indeterminate: false,
    },
  },
);

const labelVariants = cva(
  ["text-sm", "font-medium", "transition-colors", "duration-150"],
  {
    variants: {
      theme: {
        light: ["text-neutral-900"],
        dark: ["text-white"],
      },
      disabled: {
        true: ["opacity-40"],
        false: [],
      },
    },
    defaultVariants: {
      theme: "light",
      disabled: false,
    },
  },
);

// ─── Types ───────────────────────────────────────────────────────────────

export interface CheckboxProps
  extends
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size" | "checked" | "onChange"
    >,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  labelPosition?: "left" | "right";
  indeterminate?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  containerClassName?: string;
  checkboxClassName?: string;
  labelClassName?: string;
}

// ─── Checkbox Component ────────────────────────────────────────────────────

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      size = "md",
      theme = "light",
      label,
      labelPosition = "right",
      indeterminate = false,
      checked,
      defaultChecked = false,
      onChange,
      disabled = false,
      required = false,
      className,
      containerClassName,
      checkboxClassName,
      labelClassName,
      id,
      ...props
    },
    ref,
  ) {
    const [internalChecked, setInternalChecked] =
      React.useState(defaultChecked);
    const checkboxId = id ?? React.useId();
    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : internalChecked;
    const isIndeterminate = indeterminate;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      onChange?.(newChecked);
    };

    const handleClick = () => {
      if (disabled) return;
      const newChecked = !currentChecked;
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      onChange?.(newChecked);
    };

    // Set indeterminate on the input element
    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = isIndeterminate;
      }
    }, [isIndeterminate]);

    const checkboxContent = (
      <span
        className={cn(
          checkboxVariants({
            size,
            theme,
            checked: currentChecked || isIndeterminate,
            indeterminate: isIndeterminate,
          }),
          checkboxClassName,
        )}
        onClick={handleClick}
      >
        {/* Hidden native input */}
        <input
          ref={inputRef}
          id={checkboxId}
          type="checkbox"
          checked={currentChecked}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          className="sr-only"
          aria-checked={isIndeterminate ? "mixed" : currentChecked}
          {...props}
        />

        {/* Check Icon */}
        {(currentChecked || isIndeterminate) && (
          <svg
            className={cn(
              "pointer-events-none text-white",
              size === "sm" && "h-2.5 w-2.5",
              size === "md" && "h-3 w-3",
              size === "lg" && "h-3.5 w-3.5",
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={isIndeterminate ? 3 : 2.5}
          >
            {isIndeterminate ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            )}
          </svg>
        )}
      </span>
    );

    const labelContent = label && (
      <label
        htmlFor={checkboxId}
        className={cn(
          labelVariants({ theme, disabled }),
          "cursor-pointer select-none",
          disabled && "cursor-not-allowed",
          labelClassName,
        )}
      >
        {label}
        {required && (
          <span className="ml-0.5 text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
    );

    return (
      <div
        style={{
          fontFamily: "sans-serif",
        }}
        className={cn(
          "inline-flex items-center gap-2.5",
          labelPosition === "left" && "flex-row-reverse",
          className,
          containerClassName,
        )}
      >
        {checkboxContent}
        {labelContent}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
export { Checkbox, checkboxVariants };
