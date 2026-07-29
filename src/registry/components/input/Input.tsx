'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// ─── Utility ─────────────────────────────────────────────────────────────

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── CVA Variants ────────────────────────────────────────────────────────

const inputVariants = cva(
  [
    'flex',
    'w-full',
    'border',
    'font-normal',
    'transition-all',
    'duration-150',
    'ease-out',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-60',
    'read-only:focus-visible:ring-0',
  ],
  {
    variants: {
      size: {
        sm: ['h-9', 'px-3', 'text-sm', 'rounded-aphelion-md'],
        md: ['h-10', 'px-4', 'text-sm', 'rounded-aphelion-lg'],
        lg: ['h-11', 'px-4', 'text-base', 'rounded-aphelion-lg'],
      },
      theme: {
        light: [
          'bg-light-background',
          'text-light-text-primary',
          'placeholder:text-light-text-muted',
          'border-light-input-border',
          'focus-visible:border-light-border-strong',
          'focus-visible:ring-light-focus-ring',
          'disabled:bg-light-muted',
          'disabled:border-light-border',
          'read-only:bg-light-muted',
          'read-only:border-light-border',
          'aria-invalid:border-light-destructive',
          'aria-invalid:focus-visible:ring-light-focus-ring',
          'aria-invalid:focus-visible:border-light-destructive',
        ],
        dark: [
          'bg-dark-background',
          'text-dark-text-primary',
          'placeholder:text-dark-text-muted',
          'border-dark-input-border',
          'focus-visible:border-dark-border-strong',
          'focus-visible:ring-dark-focus-ring',
          'disabled:bg-dark-muted',
          'disabled:border-dark-border',
          'read-only:bg-dark-muted',
          'read-only:border-dark-border',
          'aria-invalid:border-dark-destructive',
          'aria-invalid:focus-visible:ring-dark-focus-ring',
          'aria-invalid:focus-visible:border-dark-destructive',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      theme: 'light',
    },
  }
);

// ─── Label Variants ──────────────────────────────────────────────────────

const labelVariants = cva(['block', 'font-medium', 'text-sm', 'mb-1.5'], {
  variants: {
    theme: {
      light: ['text-light-text-primary'],
      dark: ['text-dark-text-primary'],
    },
  },
  defaultVariants: {
    theme: 'light',
  },
});

// ─── Helper Text Variants ────────────────────────────────────────────────

const helperVariants = cva(['block', 'mt-1.5', 'text-xs'], {
  variants: {
    theme: {
      light: ['text-light-text-muted'],
      dark: ['text-dark-text-muted'],
    },
  },
  defaultVariants: {
    theme: 'light',
  },
});

// ─── Error Variants ──────────────────────────────────────────────────────

const errorVariants = cva([
  'block',
  'mt-1.5',
  'text-xs',
  'font-medium',
  'text-light-destructive',
]);

// ─── Left Addon Variants ─────────────────────────────────────────────────

const addonVariants = cva(
  ['flex', 'items-center', 'border', 'shrink-0', 'font-medium'],
  {
    variants: {
      size: {
        sm: ['px-2.5', 'text-xs'],
        md: ['px-3', 'text-sm'],
        lg: ['px-3.5', 'text-sm'],
      },
      theme: {
        light: [
          'bg-light-muted',
          'text-light-text-secondary',
          'border-light-input-border',
          'border-r-0',
          'rounded-l-aphelion-md',
        ],
        dark: [
          'bg-dark-muted',
          'text-dark-text-secondary',
          'border-dark-input-border',
          'border-r-0',
          'rounded-l-aphelion-md',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      theme: 'light',
    },
  }
);

// ─── Right Addon Variants ────────────────────────────────────────────────

const rightAddonVariants = cva(
  ['flex', 'items-center', 'border', 'shrink-0', 'font-medium'],
  {
    variants: {
      size: {
        sm: ['px-2.5', 'text-xs'],
        md: ['px-3', 'text-sm'],
        lg: ['px-3.5', 'text-sm'],
      },
      theme: {
        light: [
          'bg-light-muted',
          'text-light-text-secondary',
          'border-light-input-border',
          'border-l-0',
          'rounded-r-aphelion-md',
        ],
        dark: [
          'bg-dark-muted',
          'text-dark-text-secondary',
          'border-dark-input-border',
          'border-l-0',
          'rounded-r-aphelion-md',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      theme: 'light',
    },
  }
);

// ─── Types ───────────────────────────────────────────────────────────────

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  fullWidth?: boolean;
  required?: boolean;
  className?: string;
  containerClassName?: string;
}

// ─── Input Component ─────────────────────────────────────────────────────

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    size = 'md',
    theme = 'light',
    label,
    helperText,
    error,
    leftIcon,
    rightIcon,
    leftAddon,
    rightAddon,
    fullWidth = true,
    required = false,
    disabled = false,
    readOnly = false,
    className,
    containerClassName,
    id,
    type = 'text',
    placeholder,
    value,
    defaultValue,
    onChange,
    ...props
  },
  ref
) {
  const inputId = id ?? React.useId();
  const hasError = Boolean(error);
  const hasLeft = Boolean(leftIcon || leftAddon);
  const hasRight = Boolean(rightIcon || rightAddon);

  const padMap = { sm: 'pl-8', md: 'pl-10', lg: 'pl-10' };
  const rPadMap = { sm: 'pr-8', md: 'pr-10', lg: 'pr-10' };

  const inputClasses = cn(
    inputVariants({ size, theme }),
    hasLeft && padMap[size ?? 'md'],
    hasRight && rPadMap[size ?? 'md'],
    hasError && 'aria-invalid',
    className
  );

  const iconColor =
    theme === 'dark' ? 'text-dark-text-muted' : 'text-light-text-muted';
  const errIconColor = 'text-light-destructive';
  const requiredColor = 'text-light-destructive';

  return (
    <div
      className={cn(
        'flex flex-col',
        fullWidth && 'w-full',
        containerClassName
      )}
    >
      {label && (
        <label htmlFor={inputId} className={labelVariants({ theme })}>
          {label}
          {required && (
            <span
              className={cn('ml-0.5', requiredColor)}
              aria-hidden="true"
            >
              *
            </span>
          )}
        </label>
      )}

      <div className={cn('relative flex items-stretch', fullWidth && 'w-full')}>
        {leftAddon && (
          <div
            className={cn(
              addonVariants({ size, theme }),
              hasError && 'border-light-destructive'
            )}
          >
            {leftAddon}
          </div>
        )}

        {leftIcon && !leftAddon && (
          <div
            className={cn(
              'absolute left-0 top-0 bottom-0 flex items-center pointer-events-none',
              size === 'sm' && 'pl-2.5',
              size === 'md' && 'pl-3.5',
              size === 'lg' && 'pl-4',
              hasError ? errIconColor : iconColor
            )}
            aria-hidden="true"
          >
            <span className="inline-flex shrink-0">{leftIcon}</span>
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            hasError
              ? `${inputId}-err`
              : helperText
                ? `${inputId}-help`
                : undefined
          }
          onChange={onChange}
          className={inputClasses}
          {...props}
        />

        {rightIcon && !rightAddon && (
          <div
            className={cn(
              'absolute right-0 top-0 bottom-0 flex items-center pointer-events-none',
              size === 'sm' && 'pr-2.5',
              size === 'md' && 'pr-3.5',
              size === 'lg' && 'pr-4',
              hasError ? errIconColor : iconColor
            )}
            aria-hidden="true"
          >
            <span className="inline-flex shrink-0">{rightIcon}</span>
          </div>
        )}

        {rightAddon && (
          <div
            className={cn(
              rightAddonVariants({ size, theme }),
              hasError && 'border-light-destructive'
            )}
          >
            {rightAddon}
          </div>
        )}
      </div>

      {hasError && (
        <span id={`${inputId}-err`} role="alert" className={errorVariants()}>
          {error}
        </span>
      )}

      {!hasError && helperText && (
        <span id={`${inputId}-help`} className={helperVariants({ theme })}>
          {helperText}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export { Input, inputVariants };