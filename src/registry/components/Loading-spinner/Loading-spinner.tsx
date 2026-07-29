'use client';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Spinner Variants ────────────────────────────────────────────────────

const spinnerVariants = cva(
  ['inline-flex', 'items-center', 'justify-center', 'shrink-0'],
  {
    variants: {
      variant: {
        default: '',
        circle: '',
        pinwheel: '',
        'circle-filled': '',
        ellipsis: '',
        ring: '',
        bars: '',
        infinite: '',
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-10 w-10',
        '2xl': 'h-12 w-12',
      },
      theme: {
        dark: '',
        light: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      theme: 'dark',
    },
  }
);

export interface SpinnerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  className?: string;
}

// ─── Theme Color Resolver ────────────────────────────────────────────────

function getStrokeColor(theme?: 'dark' | 'light'): string {
  return theme === 'dark'
    ? 'var(--color-dark-text-primary)'
    : 'var(--color-light-text-primary)';
}

function getDotColor(theme?: 'dark' | 'light'): string {
  return theme === 'dark' ? 'bg-dark-text-primary' : 'bg-light-text-primary';
}

// ─── Size Map ────────────────────────────────────────────────────────────

const sizeMap = { sm: 16, md: 24, lg: 32, xl: 40, '2xl': 48 };
const dotSizeMap = { sm: 3, md: 4, lg: 5, xl: 6, '2xl': 7 };
const barSizeMap = { sm: 10, md: 16, lg: 20, xl: 24, '2xl': 28 };

type SpinnerSize = keyof typeof sizeMap;

// ─── Default Spinner ─────────────────────────────────────────────────────

function DefaultSpinner({
  size = 'md',
  theme = 'dark',
  className,
}: {
  size?: SpinnerSize;
  theme?: 'dark' | 'light';
  className?: string;
}) {
  const s = sizeMap[size];

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      className={cn('animate-spin', className)}
      style={{ animationDuration: '1s' }}
    >
      <g stroke={getStrokeColor(theme)} strokeWidth="2.5" strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="6" opacity="1" />
        <line x1="12" y1="18" x2="12" y2="22" opacity="0.3" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" opacity="0.9" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" opacity="0.2" />
        <line x1="2" y1="12" x2="6" y2="12" opacity="0.7" />
        <line x1="18" y1="12" x2="22" y2="12" opacity="0.1" />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" opacity="0.5" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" opacity="0.4" />
      </g>
    </svg>
  );
}

// ─── Circle Spinner ──────────────────────────────────────────────────────

function CircleSpinner({
  size = 'md',
  theme = 'dark',
  className,
}: {
  size?: SpinnerSize;
  theme?: 'dark' | 'light';
  className?: string;
}) {
  const s = sizeMap[size];

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      className={cn('animate-spin', className)}
      style={{ animationDuration: '1s' }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={getStrokeColor(theme)}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="40 60"
        opacity="0.2"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={getStrokeColor(theme)}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="40 60"
        strokeDashoffset="0"
      />
    </svg>
  );
}

// ─── Pinwheel Spinner ────────────────────────────────────────────────────

function PinwheelSpinner({
  size = 'md',
  theme = 'dark',
  className,
}: {
  size?: SpinnerSize;
  theme?: 'dark' | 'light';
  className?: string;
}) {
  const s = sizeMap[size];

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      className={cn('animate-spin', className)}
      style={{ animationDuration: '1.2s' }}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10"
        stroke={getStrokeColor(theme)}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6"
        stroke={getStrokeColor(theme)}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M12 10c-1.1 0-2 0.9-2 2s0.9 2 2 2"
        stroke={getStrokeColor(theme)}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  );
}

// ─── Circle Filled Spinner ───────────────────────────────────────────────

function CircleFilledSpinner({
  size = 'md',
  theme = 'dark',
  className,
}: {
  size?: SpinnerSize;
  theme?: 'dark' | 'light';
  className?: string;
}) {
  const s = sizeMap[size];

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      className={cn('animate-spin', className)}
      style={{ animationDuration: '0.8s' }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={getStrokeColor(theme)}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="50 50"
      />
    </svg>
  );
}

// ─── Ellipsis Spinner ────────────────────────────────────────────────────

function EllipsisSpinner({
  size = 'md',
  theme = 'dark',
  className,
}: {
  size?: SpinnerSize;
  theme?: 'dark' | 'light';
  className?: string;
}) {
  const d = dotSizeMap[size];

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <span
        className={cn(
          getDotColor(theme),
          'rounded-aphelion-full animate-bounce'
        )}
        style={{
          width: d,
          height: d,
          animationDuration: '0.6s',
          animationDelay: '0s',
        }}
      />
      <span
        className={cn(
          getDotColor(theme),
          'rounded-aphelion-full animate-bounce'
        )}
        style={{
          width: d,
          height: d,
          animationDuration: '0.6s',
          animationDelay: '0.15s',
        }}
      />
      <span
        className={cn(
          getDotColor(theme),
          'rounded-aphelion-full animate-bounce'
        )}
        style={{
          width: d,
          height: d,
          animationDuration: '0.6s',
          animationDelay: '0.3s',
        }}
      />
    </div>
  );
}

// ─── Ring Spinner ────────────────────────────────────────────────────────

function RingSpinner({
  size = 'md',
  theme = 'dark',
  className,
}: {
  size?: SpinnerSize;
  theme?: 'dark' | 'light';
  className?: string;
}) {
  const s = sizeMap[size];

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      className={cn('animate-ping', className)}
      style={{ animationDuration: '1.5s' }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={getStrokeColor(theme)}
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
}

// ─── Bars Spinner ────────────────────────────────────────────────────────

function BarsSpinner({
  size = 'md',
  theme = 'dark',
  className,
}: {
  size?: SpinnerSize;
  theme?: 'dark' | 'light';
  className?: string;
}) {
  const h = barSizeMap[size];
  const w = Math.max(2, Math.floor(h / 5));

  return (
    <div className={cn('flex items-center gap-[2px]', className)}>
      <span
        className={cn(getDotColor(theme), 'animate-pulse')}
        style={{
          width: w,
          height: h,
          animationDuration: '0.8s',
          animationDelay: '0s',
        }}
      />
      <span
        className={cn(getDotColor(theme), 'animate-pulse')}
        style={{
          width: w,
          height: h,
          animationDuration: '0.8s',
          animationDelay: '0.2s',
        }}
      />
      <span
        className={cn(getDotColor(theme), 'animate-pulse')}
        style={{
          width: w,
          height: h,
          animationDuration: '0.8s',
          animationDelay: '0.4s',
        }}
      />
    </div>
  );
}

// ─── Infinite Spinner ────────────────────────────────────────────────────

function InfiniteSpinner({
  size = 'md',
  theme = 'dark',
  className,
}: {
  size?: SpinnerSize;
  theme?: 'dark' | 'light';
  className?: string;
}) {
  const s = sizeMap[size];

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      className={cn(className)}
    >
      <path
        d="M12 12c-2-2.5-4.5-4-6.5-4C3.5 8 2 9.8 2 12s1.5 4 3.5 4c2 0 4.5-1.5 6.5-4 2 2.5 4.5 4 6.5 4 2 0 3.5-1.8 3.5-4s-1.5-4-3.5-4c-2 0-4.5 1.5-6.5 4z"
        stroke={getStrokeColor(theme)}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse"
        style={{ animationDuration: '1.5s' }}
      />
    </svg>
  );
}

// ─── Spinner Component ───────────────────────────────────────────────────

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(
  { variant = 'default', size = 'md', theme = 'dark', className, ...props },
  ref
) {
  const renderSpinner = () => {
    switch (variant) {
      case 'circle':
        return <CircleSpinner size={size as SpinnerSize} theme={theme} />;
      case 'pinwheel':
        return <PinwheelSpinner size={size as SpinnerSize} theme={theme} />;
      case 'circle-filled':
        return <CircleFilledSpinner size={size as SpinnerSize} theme={theme} />;
      case 'ellipsis':
        return <EllipsisSpinner size={size as SpinnerSize} theme={theme} />;
      case 'ring':
        return <RingSpinner size={size as SpinnerSize} theme={theme} />;
      case 'bars':
        return <BarsSpinner size={size as SpinnerSize} theme={theme} />;
      case 'infinite':
        return <InfiniteSpinner size={size as SpinnerSize} theme={theme} />;
      default:
        return <DefaultSpinner size={size as SpinnerSize} theme={theme} />;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(spinnerVariants({ variant, size, theme }), className)}
      role="status"
      aria-label="Loading"
      {...props}
    >
      {renderSpinner()}
    </div>
  );
});
Spinner.displayName = 'Spinner';

export {
  Spinner,
  spinnerVariants,
  DefaultSpinner,
  CircleSpinner,
  PinwheelSpinner,
  CircleFilledSpinner,
  EllipsisSpinner,
  RingSpinner,
  BarsSpinner,
  InfiniteSpinner,
};

export default Spinner;
