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
          'bg-light-primary dark:bg-dark-primary text-light-primary-foreground dark:text-dark-primary-foreground border border-light-primary-border dark:border-dark-primary-border hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover focus-visible:ring-light-focus-ring dark:focus-visible:ring-dark-focus-ring',

        secondary:
          'bg-light-secondary dark:bg-dark-secondary text-light-secondary-foreground dark:text-dark-secondary-foreground border border-light-secondary-border dark:border-dark-secondary-border hover:bg-light-secondary-hover dark:hover:bg-dark-secondary-hover focus-visible:ring-light-focus-ring dark:focus-visible:ring-dark-focus-ring',

        outline:
          'bg-transparent text-light-text-primary dark:text-dark-text-primary border border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover focus-visible:ring-light-focus-ring dark:focus-visible:ring-dark-focus-ring',

        ghost:
          'bg-transparent text-light-text-primary dark:text-dark-text-primary hover:bg-light-hover dark:hover:bg-dark-hover focus-visible:ring-light-focus-ring dark:focus-visible:ring-dark-focus-ring',

        destructive:
          'bg-light-destructive dark:bg-dark-destructive text-light-destructive-foreground dark:text-dark-destructive-foreground border border-light-destructive-border dark:border-dark-destructive-border hover:bg-light-destructive/80 dark:hover:bg-dark-destructive/80 focus-visible:ring-light-focus-ring dark:focus-visible:ring-dark-focus-ring',

        success:
          'bg-light-success dark:bg-dark-success text-light-success-foreground dark:text-dark-success-foreground border border-light-success-border dark:border-dark-success-border hover:bg-light-success/80 dark:hover:bg-dark-success/80 focus-visible:ring-light-focus-ring dark:focus-visible:ring-dark-focus-ring',

        warning:
          'bg-light-warning dark:bg-dark-warning text-light-warning-foreground dark:text-dark-warning-foreground border border-light-warning-border dark:border-dark-warning-border hover:bg-light-warning/80 dark:hover:bg-dark-warning/80 focus-visible:ring-light-focus-ring dark:focus-visible:ring-dark-focus-ring',

        info:
          'bg-light-info dark:bg-dark-info text-light-info-foreground dark:text-dark-info-foreground border border-light-info-border dark:border-dark-info-border hover:bg-light-info/80 dark:hover:bg-dark-info/80 focus-visible:ring-light-focus-ring dark:focus-visible:ring-dark-focus-ring',

        link:
          'bg-transparent text-light-text-primary dark:text-dark-text-primary underline-offset-4 hover:underline focus-visible:ring-light-focus-ring dark:focus-visible:ring-dark-focus-ring',
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