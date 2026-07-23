'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── CVA ─────────────────────────────────────────────────────────────────

const avatarVariants = cva(
  [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'shrink-0',
    'overflow-visible',
    'border',
    'border-white/[0.08]',
    'bg-[#111]',
    'transition-all',
    'duration-200',
  ],
  {
    variants: {
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
        circle: 'rounded-full',
        square: 'rounded-lg',
        rounded: 'rounded-xl',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
    },
  }
);

const statusVariants = cva(
  [
    'absolute',
    'rounded-full',
    'border-2',
    'border-black',
    'transition-all',
    'duration-200',
    'pointer-events-none',
    'z-10',
  ],
  {
    variants: {
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
        online: 'bg-green-500',
        offline: 'bg-gray-500',
        away: 'bg-yellow-500',
        busy: 'bg-red-500',
        invisible: 'bg-white/10',
      },
    },
    defaultVariants: {
      size: 'md',
      status: 'online',
    },
  }
);

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
  children?: React.ReactNode;
  max?: number;
  total?: number;
  remainingText?: string;
  remainingClassName?: string;
  className?: string;
}

// ─── Status Position Offsets ─────────────────────────────────────────────

const statusOffset: Record<string, string> = {
  'bottom-right': 'translate-x-[25%] translate-y-[25%] bottom-0 right-0',
  'bottom-left': '-translate-x-[25%] translate-y-[25%] bottom-0 left-0',
  'top-right': 'translate-x-[25%] -translate-y-[25%] top-0 right-0',
  'top-left': '-translate-x-[25%] -translate-y-[25%] top-0 left-0',
};

// ─── Avatar Component ────────────────────────────────────────────────────

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  {
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

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
      }}
      ref={ref}
      className={cn(
        avatarVariants({ size, shape }),
        onClick && 'cursor-pointer hover:border-white/[0.14]',
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
              shape === 'circle' && 'rounded-full',
              shape === 'square' && 'rounded-lg',
              shape === 'rounded' && 'rounded-xl',
              imageClassName
            )}
            onError={() => setError(true)}
            draggable={false}
          />
        ) : (
          <span
            className={cn(
              "flex h-full w-full select-none items-center justify-center font-['inter-semi'] text-white/50",
              shape === 'circle' && 'rounded-full',
              shape === 'square' && 'rounded-lg',
              shape === 'rounded' && 'rounded-xl',
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
            statusVariants({ size, status }),
            statusOffset[statusPosition]
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
});

Avatar.displayName = 'Avatar';

// ─── Avatar Group Component ──────────────────────────────────────────────

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup(
    {
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
              "relative z-10 flex items-center justify-center rounded-full border border-white/[0.08] bg-[#111] font-['inter-semi'] text-[11px] text-white/50",
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
