'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

// ─── Utility ─────────────────────────────────────────────────────────────

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── CVA Variants ────────────────────────────────────────────────────────

const progressVariants = cva(
  ['relative', 'overflow-hidden', 'transition-colors', 'duration-200'],
  {
    variants: {
      size: {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
        xl: 'h-4',
      },
      radius: {
        none: 'rounded-aphelion-none',
        sm: 'rounded-aphelion-sm',
        md: 'rounded-aphelion-md',
        lg: 'rounded-aphelion-lg',
        full: 'rounded-aphelion-full',
      },
      theme: {
        light: 'bg-light-muted',
        dark: 'bg-dark-muted',
      },
      width: {
        xs: 'w-[120px]',
        sm: 'w-[200px]',
        md: 'w-[320px]',
        lg: 'w-[480px]',
        xl: 'w-[640px]',
        full: 'w-full',
      },
    },
    defaultVariants: {
      size: 'md',
      radius: 'full',
      theme: 'dark',
      width: 'md',
    },
  }
);

const fillVariants = cva(
  ['h-full', 'transition-all', 'duration-300', 'ease-out'],
  {
    variants: {
      variant: {
        default: '',
        primary: '',
        success: '',
        info: '',
        warning: '',
        error: '',
        neutral: '',
      },
      theme: {
        light: '',
        dark: '',
      },
      animated: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // ─── Dark Theme Fills ────────────────────────────────────────
      {
        theme: 'dark',
        variant: 'default',
        className: 'bg-dark-primary',
      },
      {
        theme: 'dark',
        variant: 'primary',
        className: 'bg-dark-primary',
      },
      {
        theme: 'dark',
        variant: 'success',
        className: 'bg-dark-success',
      },
      {
        theme: 'dark',
        variant: 'info',
        className: 'bg-dark-info',
      },
      {
        theme: 'dark',
        variant: 'warning',
        className: 'bg-dark-warning',
      },
      {
        theme: 'dark',
        variant: 'error',
        className: 'bg-dark-destructive',
      },
      {
        theme: 'dark',
        variant: 'neutral',
        className: 'bg-dark-text-muted',
      },
      // ─── Light Theme Fills ───────────────────────────────────────
      {
        theme: 'light',
        variant: 'default',
        className: 'bg-light-primary',
      },
      {
        theme: 'light',
        variant: 'primary',
        className: 'bg-light-primary',
      },
      {
        theme: 'light',
        variant: 'success',
        className: 'bg-light-success',
      },
      {
        theme: 'light',
        variant: 'info',
        className: 'bg-light-info',
      },
      {
        theme: 'light',
        variant: 'warning',
        className: 'bg-light-warning',
      },
      {
        theme: 'light',
        variant: 'error',
        className: 'bg-light-destructive',
      },
      {
        theme: 'light',
        variant: 'neutral',
        className: 'bg-light-text-muted',
      },
    ],
    defaultVariants: {
      variant: 'default',
      animated: true,
      theme: 'dark',
    },
  }
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
  valuePosition?: 'inside' | 'outside' | 'top' | 'bottom';
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
      size = 'md',
      radius = 'full',
      theme = 'dark',
      variant = 'default',
      width = 'md',
      animated = true,
      value = 0,
      max = 100,
      min = 0,
      showValue = false,
      valuePosition = 'outside',
      label,
      description,
      indeterminate = false,
      className,
      fillClassName,
      ...props
    },
    ref
  ) {
    const clampedValue = Math.max(min, Math.min(value, max));
    const percentage = ((clampedValue - min) / (max - min)) * 100;

    const labelColor =
      theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary';
    const valueColor =
      theme === 'dark'
        ? 'text-dark-text-secondary'
        : 'text-light-text-secondary';
    const descriptionColor =
      theme === 'dark' ? 'text-dark-text-muted' : 'text-light-text-muted';
    const insideValueColor =
      theme === 'dark'
        ? 'text-dark-primary-foreground/70'
        : 'text-light-primary-foreground/90';

    return (
      <div className={cn('flex flex-col gap-1.5', className)} {...props}>
        {/* ─── Label Row ──────────────────────────────────────────── */}
        {(label || (showValue && valuePosition === 'outside')) && (
          <div className="flex items-center justify-between">
            {label && (
              <span className={cn('text-sm font-medium', labelColor)}>
                {label}
              </span>
            )}
            {showValue && valuePosition === 'outside' && (
              <span
                className={cn('text-sm font-medium tabular-nums', valueColor)}
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
          aria-valuetext={
            indeterminate ? undefined : `${Math.round(percentage)}%`
          }
        >
          {indeterminate ? (
            <motion.div
              className={cn(
                'h-full absolute rounded-aphelion-full',
                fillVariants({ variant, theme, animated }),
                fillClassName
              )}
              initial={{ x: '-100%', width: '40%' }}
              animate={{ x: '200%' }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }}
            />
          ) : (
            <motion.div
              className={cn(
                'rounded-aphelion-full',
                fillVariants({ variant, theme, animated }),
                fillClassName
              )}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={
                animated
                  ? { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
                  : { duration: 0 }
              }
            >
              {showValue && valuePosition === 'inside' && percentage > 15 && (
                <span
                  className={cn(
                    'flex h-full items-center justify-end pr-2 text-xs font-medium',
                    insideValueColor
                  )}
                >
                  {Math.round(percentage)}%
                </span>
              )}
            </motion.div>
          )}
        </div>

        {/* ─── Description ────────────────────────────────────────── */}
        {description && (
          <p className={cn('text-xs', descriptionColor)}>{description}</p>
        )}

        {/* ─── Value Bottom ───────────────────────────────────────── */}
        {showValue && valuePosition === 'bottom' && (
          <div className="flex justify-between text-xs">
            <span className={descriptionColor}>{min}</span>
            <span className={valueColor}>
              {clampedValue} / {max}
            </span>
          </div>
        )}
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export default Progress;
export { Progress };
