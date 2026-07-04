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
        sm: ['h-9', 'px-3', 'text-sm', 'rounded-md'],
        md: ['h-10', 'px-4', 'text-sm', 'rounded-lg'],
        lg: ['h-11', 'px-4', 'text-base', 'rounded-lg'],
      },
      theme: {
        light: [
          'bg-white',
          'text-neutral-900',
          'placeholder:text-neutral-400',
          'border-neutral-300',
          'focus-visible:border-neutral-900',
          'focus-visible:ring-neutral-900/15',
          'disabled:bg-neutral-50',
          'disabled:border-neutral-200',
          'read-only:bg-neutral-50',
          'read-only:border-neutral-200',
          'aria-invalid:border-red-500',
          'aria-invalid:focus-visible:ring-red-500/15',
          'aria-invalid:focus-visible:border-red-500',
        ],
        dark: [
          'bg-neutral-900',
          'text-white',
          'placeholder:text-neutral-500',
          'border-neutral-700',
          'focus-visible:border-neutral-500',
          'focus-visible:ring-white/10',
          'disabled:bg-neutral-950',
          'disabled:border-neutral-800',
          'read-only:bg-neutral-950',
          'read-only:border-neutral-800',
          'aria-invalid:border-red-500',
          'aria-invalid:focus-visible:ring-red-500/15',
          'aria-invalid:focus-visible:border-red-500',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      theme: 'light',
    },
  }
);

const labelVariants = cva(['block', 'font-medium', 'text-sm', 'mb-1.5'], {
  variants: {
    theme: {
      light: ['text-neutral-900'],
      dark: ['text-white'],
    },
  },
  defaultVariants: {
    theme: 'light',
  },
});

const helperVariants = cva(['block', 'mt-1.5', 'text-xs'], {
  variants: {
    theme: {
      light: ['text-neutral-500'],
      dark: ['text-neutral-400'],
    },
  },
  defaultVariants: {
    theme: 'light',
  },
});

const errorVariants = cva([
  'block',
  'mt-1.5',
  'text-xs',
  'font-medium',
  'text-red-500',
]);

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
          'bg-neutral-50',
          'text-neutral-600',
          'border-neutral-300',
          'border-r-0',
          'rounded-l-md',
        ],
        dark: [
          'bg-neutral-800',
          'text-neutral-400',
          'border-neutral-700',
          'border-r-0',
          'rounded-l-md',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      theme: 'light',
    },
  }
);

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
          'bg-neutral-50',
          'text-neutral-600',
          'border-neutral-300',
          'border-l-0',
          'rounded-r-md',
        ],
        dark: [
          'bg-neutral-800',
          'text-neutral-400',
          'border-neutral-700',
          'border-l-0',
          'rounded-r-md',
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

// ─── Input Component ───────────────────────────────────────────────────────

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

  const iconColor = theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400';
  const errIconColor = 'text-red-400';

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
      }}
      className={cn(
        'flex  flex-col',
        fullWidth && 'w-full',
        containerClassName
      )}
    >
      {label && (
        <label htmlFor={inputId} className={labelVariants({ theme })}>
          {label}
          {required && (
            <span
              style={{
                fontFamily: 'sans-serif',
              }}
              className="ml-0.5 text-red-500"
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
            style={{
              fontFamily: 'sans-serif',
            }}
            className={cn(
              addonVariants({ size, theme }),
              hasError && 'border-red-500'
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
          style={{
            fontFamily: 'sans-serif',
          }}
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
              hasError && 'border-red-500'
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
