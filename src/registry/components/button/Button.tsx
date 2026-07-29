'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'whitespace-nowrap',
    'transition-all',
    'duration-200',
    'select-none',
    'font-medium',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-light-primary text-light-primary-foreground border border-light-primary-border hover:bg-light-primary-hover focus-visible:ring-light-focus-ring',

        secondary:
          'bg-light-secondary text-light-secondary-foreground border border-light-secondary-border hover:bg-light-secondary-hover focus-visible:ring-light-focus-ring',

        outline:
          'bg-transparent text-light-text-primary border border-light-border hover:bg-light-hover focus-visible:ring-light-focus-ring',

        ghost:
          'bg-transparent text-light-text-primary hover:bg-light-hover focus-visible:ring-light-focus-ring',

        destructive:
          'bg-light-destructive text-light-destructive-foreground border border-light-destructive-border hover:bg-light-destructive/80 focus-visible:ring-light-focus-ring',

        success:
          'bg-light-success text-light-success-foreground border border-light-success-border hover:bg-light-success/80 focus-visible:ring-light-focus-ring',

        warning:
          'bg-light-warning text-light-warning-foreground border border-light-warning-border hover:bg-light-warning/80 focus-visible:ring-light-focus-ring',

        info:
          'bg-light-info text-light-info-foreground border border-light-info-border hover:bg-light-info/80 focus-visible:ring-light-focus-ring',

        link:
          'bg-transparent text-light-text-primary underline-offset-4 hover:underline focus-visible:ring-light-focus-ring',
      },

      theme: {
        light: '',
        dark: '',
      },

      size: {
        xs: 'h-7 px-2.5 text-xs',
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-11 px-5 text-base',
        xl: 'h-12 px-6 text-base',
        icon: 'h-10 w-10 p-0',
      },

      radius: {
        none: 'rounded-aphelion-none',
        xs: 'rounded-aphelion-xs',
        sm: 'rounded-aphelion-sm',
        md: 'rounded-aphelion-md',
        lg: 'rounded-aphelion-lg',
        xl: 'rounded-aphelion-xl',
        '2xl': 'rounded-aphelion-2xl',
        full: 'rounded-aphelion-full',
      },
    },

    compoundVariants: [
      // Dark theme overrides
      {
        theme: 'dark',
        variant: 'primary',
        className:
          'bg-dark-primary text-dark-primary-foreground border-dark-primary-border hover:bg-dark-primary-hover focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'secondary',
        className:
          'bg-dark-secondary text-dark-secondary-foreground border-dark-secondary-border hover:bg-dark-secondary-hover focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'outline',
        className:
          'text-dark-text-primary border-dark-border hover:bg-dark-hover focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        className:
          'text-dark-text-primary hover:bg-dark-hover focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'destructive',
        className:
          'bg-dark-destructive text-dark-destructive-foreground border-dark-destructive-border hover:bg-dark-destructive/80 focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'success',
        className:
          'bg-dark-success text-dark-success-foreground border-dark-success-border hover:bg-dark-success/80 focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'warning',
        className:
          'bg-dark-warning text-dark-warning-foreground border-dark-warning-border hover:bg-dark-warning/80 focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'info',
        className:
          'bg-dark-info text-dark-info-foreground border-dark-info-border hover:bg-dark-info/80 focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'link',
        className:
          'text-dark-text-primary focus-visible:ring-dark-focus-ring',
      },
    ],

    defaultVariants: {
      variant: 'primary',
      theme: 'light',
      size: 'md',
      radius: 'md',
    },
  }
);

// ─── Spinner ─────────────────────────────────────────────────────────────

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

// ─── Types ───────────────────────────────────────────────────────────────

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  theme?: 'light' | 'dark';
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// ─── Button Component ────────────────────────────────────────────────────

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      theme = 'light',
      size,
      radius,
      loading = false,
      disabled,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      className,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        className={cn(
          buttonVariants({
            variant,
            theme,
            size,
            radius,
          }),
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading ? (
          <Spinner size={spinnerSize[size ?? 'md']} />
        ) : (
          <>
            {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
            {children}
            {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };