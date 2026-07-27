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
          'bg-aphelion-primary text-aphelion-primary-foreground border border-aphelion-primary-border hover:bg-aphelion-primary-hover focus-visible:ring-aphelion-ring',

        secondary:
          'bg-aphelion-secondary text-aphelion-secondary-foreground border border-aphelion-secondary-border hover:bg-aphelion-secondary-hover focus-visible:ring-aphelion-ring',

        outline:
          'bg-transparent text-aphelion-text-primary border border-aphelion-border hover:bg-aphelion-hover focus-visible:ring-aphelion-ring',

        ghost:
          'bg-transparent text-aphelion-text-primary hover:bg-aphelion-hover focus-visible:ring-aphelion-ring',

        destructive:
          'bg-aphelion-destructive text-aphelion-destructive-foreground border border-aphelion-destructive-border hover:bg-aphelion-destructive/80 focus-visible:ring-aphelion-ring',

        success:
          'bg-aphelion-success text-aphelion-success-foreground border border-aphelion-success-border hover:bg-aphelion-success/80 focus-visible:ring-aphelion-ring',

        warning:
          'bg-aphelion-warning text-aphelion-warning-foreground border border-aphelion-warning-border hover:bg-aphelion-warning/80 focus-visible:ring-aphelion-ring',

        info: 'bg-aphelion-info text-aphelion-info-foreground border border-aphelion-info-border hover:bg-aphelion-info/80 focus-visible:ring-aphelion-ring',

        link: 'bg-transparent text-aphelion-text-primary underline-offset-4 hover:underline focus-visible:ring-aphelion-ring',
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
        none: 'rounded-none',
        sm: 'rounded-radius-aphelion-sm',
        md: 'rounded-radius-aphelion-md',
        lg: 'rounded-[var(--radius-aphelion-lg)]',
        xl: 'rounded-[var(--radius-aphelion-xl)]',
        full: 'rounded-[var(--radius-aphelion-full)]',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
      radius: 'md',
    },
  }
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
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