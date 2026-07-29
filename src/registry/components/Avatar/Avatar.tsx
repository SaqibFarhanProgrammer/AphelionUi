'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Avatar Variants ─────────────────────────────────────────────────────

const avatarVariants = cva(
  [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'shrink-0',
    'overflow-visible',
    'border',
    'transition-all',
    'duration-200',
  ],
  {
    variants: {
      theme: {
        light: 'border-light-border bg-light-muted',
        dark: 'border-dark-border bg-dark-muted',
      },
      size: {
        xs: 'h-6 w-6 text-[10px]',
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-14 w-14 text-lg',
        '2xl': 'h-16 w-16 text-xl',
        '3xl': 'h-20 w-20 text-2xl',
      },
      shape: {
        circle: 'rounded-aphelion-full',
        square: 'rounded-aphelion-lg',
        rounded: 'rounded-aphelion-xl',
      },
    },
    defaultVariants: {
      theme: 'dark',
      size: 'md',
      shape: 'circle',
    },
  }
);

// ─── Status Variants ─────────────────────────────────────────────────────

const statusVariants = cva(
  [
    'absolute',
    'rounded-aphelion-full',
    'border-2',
    'transition-all',
    'duration-200',
    'pointer-events-none',
    'z-10',
  ],
  {
    variants: {
      theme: {
        light: 'border-light-background',
        dark: 'border-dark-background',
      },
      size: {
        xs: 'h-1.5 w-1.5',
        sm: 'h-2 w-2',
        md: 'h-2.5 w-2.5',
        lg: 'h-3 w-3',
        xl: 'h-3.5 w-3.5',
        '2xl': 'h-4 w-4',
        '3xl': 'h-5 w-5',
      },
      status: {
        online: 'bg-light-success',
        offline: 'bg-light-text-muted',
        away: 'bg-light-warning',
        busy: 'bg-light-destructive',
        invisible: 'bg-light-muted',
      },
    },
    compoundVariants: [
      {
        theme: 'dark',
        status: 'online',
        className: 'bg-dark-success',
      },
      {
        theme: 'dark',
        status: 'offline',
        className: 'bg-dark-text-muted',
      },
      {
        theme: 'dark',
        status: 'away',
        className: 'bg-dark-warning',
      },
      {
        theme: 'dark',
        status: 'busy',
        className: 'bg-dark-destructive',
      },
      {
        theme: 'dark',
        status: 'invisible',
        className: 'bg-dark-muted',
      },
    ],
    defaultVariants: {
      theme: 'dark',
      size: 'md',
      status: 'online',
    },
  }
);

// ─── Group Variants ──────────────────────────────────────────────────────

const groupVariants = cva(['flex', 'items-center'], {
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    spacing: {
      tight: '-space-x-2',
      normal: '-space-x-3',
      loose: '-space-x-4',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    spacing: 'normal',
  },
});

// ─── Types ───────────────────────────────────────────────────────────────

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
  theme?: 'light' | 'dark';
  src?: string;
  alt?: string;
  fallback?: string;
  status?: 'online' | 'offline' | 'away' | 'busy' | 'invisible' | false;
  statusPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
  imageClassName?: string;
  fallbackClassName?: string;
  onClick?: () => void;
}

export interface AvatarGroupProps extends VariantProps<typeof groupVariants> {
  theme?: 'light' | 'dark';
  children?: React.ReactNode;
  max?: number;
  total?: number;
  remainingText?: string;
  remainingClassName?: string;
  className?: string;
}

// ─── Status Offset ───────────────────────────────────────────────────────

const statusOffset: Record<string, string> = {
  'bottom-right': 'translate-x-[25%] translate-y-[25%] bottom-0 right-0',
  'bottom-left': '-translate-x-[25%] translate-y-[25%] bottom-0 left-0',
  'top-right': 'translate-x-[25%] -translate-y-[25%] top-0 right-0',
  'top-left': '-translate-x-[25%] -translate-y-[25%] top-0 left-0',
};

// ─── Avatar Component ────────────────────────────────────────────────────

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  {
    theme = 'dark',
    size = 'md',
    shape = 'circle',
    src,
    alt,
    fallback,
    status = false,
    statusPosition = 'bottom-right',
    className,
    imageClassName,
    fallbackClassName,
    onClick,
  },
  ref
) {
  const [error, setError] = React.useState(false);

  const getInitials = (name?: string) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const showImage = src && !error;
  const showFallback = fallback || alt || '?';

  const shapeRadius = {
    circle: 'rounded-aphelion-full',
    square: 'rounded-aphelion-lg',
    rounded: 'rounded-aphelion-xl',
  };

  const fallbackTextColor =
    theme === 'light' ? 'text-light-text-muted' : 'text-dark-text-muted';

  return (
    <div
      ref={ref}
      className={cn(
        avatarVariants({ theme, size, shape }),
        onClick && 'cursor-pointer hover:opacity-90',
        className
      )}
      onClick={onClick}
    >
      {/* INNER: overflow-hidden clips the image/fallback */}
      <div className="relative z-0 h-full w-full overflow-hidden">
        {showImage ? (
          <img
            src={src}
            alt={alt || 'Avatar'}
            className={cn(
              'h-full w-full object-cover',
              shapeRadius[shape || 'circle'],
              imageClassName
            )}
            onError={() => setError(true)}
            draggable={false}
          />
        ) : (
          <span
            className={cn(
              'flex h-full w-full select-none items-center justify-center font-medium',
              shapeRadius[shape || 'circle'],
              fallbackTextColor,
              fallbackClassName
            )}
          >
            {getInitials(showFallback)}
          </span>
        )}
      </div>

      {/* STATUS: sits on OUTER wrapper, translate pushes it outside border */}
      {status && (
        <span
          className={cn(
            statusVariants({ theme, size, status }),
            statusOffset[statusPosition]
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
});

Avatar.displayName = 'Avatar';

// ─── Avatar Group ────────────────────────────────────────────────────────

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup(
    {
      theme = 'dark',
      direction = 'horizontal',
      spacing = 'normal',
      children,
      max,
      total,
      remainingText,
      remainingClassName,
      className,
    },
    ref
  ) {
    const childrenArray = React.Children.toArray(children);
    const showMax = max && childrenArray.length > max;
    const visibleChildren = showMax
      ? childrenArray.slice(0, max)
      : childrenArray;
    const remaining = total ?? (showMax ? childrenArray.length - max : 0);
    const remainingLabel = remainingText || `+${remaining}`;

    const remainingBgColor =
      theme === 'light' ? 'bg-light-muted' : 'bg-dark-muted';
    const remainingBorderColor =
      theme === 'light' ? 'border-light-border' : 'border-dark-border';
    const remainingTextColor =
      theme === 'light' ? 'text-light-text-muted' : 'text-dark-text-muted';

    return (
      <div
        ref={ref}
        className={cn(groupVariants({ direction, spacing }), className)}
      >
        {visibleChildren.map((child, index) => (
          <div
            key={index}
            className="relative z-10 transition-all duration-200 hover:z-20"
          >
            {child}
          </div>
        ))}

        {showMax && remaining > 0 && (
          <div
            className={cn(
              'relative z-10 flex items-center justify-center rounded-aphelion-full border font-medium text-[11px]',
              remainingBgColor,
              remainingBorderColor,
              remainingTextColor,
              remainingClassName
            )}
            style={{
              width: 'var(--avatar-size, 40px)',
              height: 'var(--avatar-size, 40px)',
            }}
          >
            {remainingLabel}
          </div>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

// ─── useAvatar Hook ──────────────────────────────────────────────────────

export function useAvatar() {
  const [src, setSrc] = React.useState<string | undefined>(undefined);
  const [error, setError] = React.useState(false);

  const handleError = React.useCallback(() => {
    setError(true);
  }, []);

  const handleLoad = React.useCallback((newSrc: string) => {
    setSrc(newSrc);
    setError(false);
  }, []);

  return { src, error, handleError, handleLoad };
}

export default Avatar;
export { Avatar, AvatarGroup };