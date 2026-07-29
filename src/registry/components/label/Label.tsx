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

const labelVariants = cva(
  [
    'inline-flex',
    'items-center',
    'gap-2',
    'rounded-aphelion-full',
    'font-medium',
    'leading-none',
    'transition-all',
    'duration-200',
    'select-none',
    'whitespace-nowrap',
  ],
  {
    variants: {
      size: {
        sm: ['px-3', 'py-1.5', 'text-xs'],
        md: ['px-4', 'py-2', 'text-sm'],
        lg: ['px-5', 'py-2.5', 'text-sm'],
      },
      theme: {
        light: [
          'bg-light-muted',
          'text-light-text-secondary',
          'border',
          'border-light-border',
          'hover:bg-light-hover',
          'hover:border-light-border-strong',
        ],
        dark: [
          'bg-dark-muted',
          'text-dark-text-primary',
          'border',
          'border-dark-border',
          'hover:bg-dark-hover',
          'hover:border-dark-border-strong',
        ],
        'light-primary': [
          'bg-light-primary',
          'text-light-primary-foreground',
          'border',
          'border-light-primary-border',
          'hover:bg-light-primary-hover',
        ],
        'dark-primary': [
          'bg-dark-primary',
          'text-dark-primary-foreground',
          'border',
          'border-dark-primary-border',
          'hover:bg-dark-primary-hover',
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
        theme: 'light',
        variant: 'outline',
        className:
          'bg-transparent border-light-border text-light-text-secondary hover:bg-light-hover',
      },
      {
        theme: 'dark',
        variant: 'outline',
        className:
          'bg-transparent border-dark-border-strong text-dark-text-primary hover:bg-dark-hover',
      },
      {
        theme: 'light',
        variant: 'ghost',
        className:
          'bg-transparent border-transparent text-light-text-secondary hover:bg-light-hover',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        className:
          'bg-transparent border-transparent text-dark-text-primary hover:bg-dark-hover',
      },
    ],
    defaultVariants: {
      size: 'md',
      theme: 'light',
      variant: 'default',
    },
  }
);

// ─── Types ───────────────────────────────────────────────────────────────

export type LabelIcon = 'dot' | 'circle' | 'check' | 'user' | React.ReactNode;

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

// ─── Helper: Check if theme is "primary" or "dark" variant ───────────────

function isDarkOrPrimary(theme: string): boolean {
  return (
    theme === 'dark' || theme === 'dark-primary' || theme === 'light-primary'
  );
}

// ─── Icon Renderer ───────────────────────────────────────────────────────

function renderIcon(icon: LabelIcon, theme: string = 'light'): React.ReactNode {
  if (!icon) return null;

  const iconColor = isDarkOrPrimary(theme)
    ? 'text-light-primary-foreground'
    : 'text-light-text-muted';

  const dotBg = isDarkOrPrimary(theme)
    ? 'bg-light-primary-foreground'
    : 'bg-light-text-muted';

  const circleBorder = isDarkOrPrimary(theme)
    ? 'border-light-primary-foreground'
    : 'border-light-text-muted';

  if (React.isValidElement(icon)) {
    return (
      <span className={cn('inline-flex items-center', iconColor)}>{icon}</span>
    );
  }

  switch (icon) {
    case 'dot':
      return (
        <span
          className={cn('inline-block h-2 w-2 rounded-aphelion-full', dotBg)}
        />
      );
    case 'circle':
      return (
        <span
          className={cn(
            'inline-block h-3 w-3 rounded-aphelion-full border-2',
            circleBorder
          )}
        />
      );
    case 'check':
      return (
        <svg
          className={cn('h-3.5 w-3.5', iconColor)}
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
    case 'user':
      return (
        <svg
          className={cn('h-3.5 w-3.5', iconColor)}
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

// ─── Dismiss Button ──────────────────────────────────────────────────────

function DismissButton({
  onClick,
  isPrimary,
}: {
  onClick: (e: React.MouseEvent) => void;
  isPrimary: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'ml-1 inline-flex h-4 w-4 items-center justify-center rounded-aphelion-full transition-colors',
        isPrimary
          ? 'text-light-primary-foreground/70 hover:bg-light-primary-foreground/20 hover:text-light-primary-foreground'
          : 'text-light-text-muted hover:bg-light-hover hover:text-light-text-primary'
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
  );
}

// ─── Label Component ─────────────────────────────────────────────────────

const Label = React.forwardRef<HTMLSpanElement, LabelProps>(function Label(
  {
    size = 'md',
    theme = 'light',
    variant = 'default',
    icon,
    iconRight,
    children,
    className,
    dismissible = false,
    onDismiss,
    ...props
  },
  ref
) {
  return (
    <span
      ref={ref}
      className={cn(labelVariants({ size, theme, variant }), className)}
      {...props}
    >
      {renderIcon(icon, theme!)}
      <span>{children}</span>
      {renderIcon(iconRight, theme!)}
      {dismissible && (
        <DismissButton
          onClick={(e) => {
            e.stopPropagation();
            onDismiss?.();
          }}
          isPrimary={isDarkOrPrimary(theme!)}
        />
      )}
    </span>
  );
});

Label.displayName = 'Label';

export default Label;
