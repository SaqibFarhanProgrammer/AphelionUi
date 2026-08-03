'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Badge Variants ──────────────────────────────────────────────────────

const badgeVariants = cva(
  [
    'inline-flex',
    'min-w-0',
    'max-w-full',
    'items-center',
    'justify-center',
    'gap-1.5',
    'font-medium',
    'transition-all',
    'duration-150',
    'select-none',
    'whitespace-nowrap',
    'outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
  ],
  {
    variants: {
      variant: {
        default: 'border',
        outline: 'border bg-transparent',
        solid: 'border-transparent',
        ghost: 'border-transparent bg-transparent',
        soft: 'border-transparent',
      },
      color: {
        default: '',
        primary: '',
        secondary: '',
        destructive: '',
        warning: '',
        success: '',
        info: '',
      },
      size: {
        sm: 'h-6 px-2 text-xs',
        md: 'h-7 px-2.5 text-sm',
        lg: 'h-8 px-3 text-sm',
      },
      shape: {
        pill: 'rounded-aphelion-full',
        circle: 'rounded-aphelion-full aspect-square px-0',
        square: 'rounded-aphelion-md',
      },
      theme: {
        dark: '',
        light: '',
      },
    },
    compoundVariants: [
      // ─── Dark Theme ─────────────────────────────────────────────
      // Default color
      {
        theme: 'dark',
        variant: 'default',
        color: 'default',
        className:
          'bg-dark-muted border-dark-border text-dark-text-primary focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'outline',
        color: 'default',
        className:
          'border-dark-border-strong text-dark-text-primary focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'solid',
        color: 'default',
        className:
          'bg-dark-primary text-dark-primary-foreground focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        color: 'default',
        className:
          'text-dark-text-primary hover:bg-dark-hover focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'soft',
        color: 'default',
        className:
          'bg-dark-muted text-dark-text-primary focus-visible:ring-dark-focus-ring',
      },
      // Primary
      {
        theme: 'dark',
        variant: 'default',
        color: 'primary',
        className:
          'bg-dark-muted border-dark-border text-dark-text-primary focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'outline',
        color: 'primary',
        className:
          'border-dark-border-strong text-dark-text-primary focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'solid',
        color: 'primary',
        className:
          'bg-dark-primary text-dark-primary-foreground focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        color: 'primary',
        className:
          'text-dark-text-primary hover:bg-dark-hover focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'soft',
        color: 'primary',
        className:
          'bg-dark-muted text-dark-text-primary focus-visible:ring-dark-focus-ring',
      },
      // Secondary
      {
        theme: 'dark',
        variant: 'default',
        color: 'secondary',
        className:
          'bg-dark-muted border-dark-border text-dark-text-secondary focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'outline',
        color: 'secondary',
        className:
          'border-dark-border-strong text-dark-text-secondary focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'solid',
        color: 'secondary',
        className:
          'bg-dark-secondary text-dark-secondary-foreground focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        color: 'secondary',
        className:
          'text-dark-text-secondary hover:bg-dark-hover focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'soft',
        color: 'secondary',
        className:
          'bg-dark-muted text-dark-text-secondary focus-visible:ring-dark-focus-ring',
      },
      // Success
      {
        theme: 'dark',
        variant: 'default',
        color: 'success',
        className:
          'bg-dark-success-background border-dark-success-border text-dark-success focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'outline',
        color: 'success',
        className:
          'border-dark-success-border text-dark-success focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'solid',
        color: 'success',
        className:
          'bg-dark-success text-dark-success-foreground focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        color: 'success',
        className:
          'text-dark-success hover:bg-dark-success-background focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'soft',
        color: 'success',
        className:
          'bg-dark-success-background text-dark-success focus-visible:ring-dark-focus-ring',
      },
      // Destructive
      {
        theme: 'dark',
        variant: 'default',
        color: 'destructive',
        className:
          'bg-dark-destructive-background border-dark-destructive-border text-dark-destructive focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'outline',
        color: 'destructive',
        className:
          'border-dark-destructive-border text-dark-destructive focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'solid',
        color: 'destructive',
        className:
          'bg-dark-destructive text-dark-destructive-foreground focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        color: 'destructive',
        className:
          'text-dark-destructive hover:bg-dark-destructive-background focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'soft',
        color: 'destructive',
        className:
          'bg-dark-destructive-background text-dark-destructive focus-visible:ring-dark-focus-ring',
      },
      // Warning
      {
        theme: 'dark',
        variant: 'default',
        color: 'warning',
        className:
          'bg-dark-warning-background border-dark-warning-border text-dark-warning focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'outline',
        color: 'warning',
        className:
          'border-dark-warning-border text-dark-warning focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'solid',
        color: 'warning',
        className:
          'bg-dark-warning text-dark-warning-foreground focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        color: 'warning',
        className:
          'text-dark-warning hover:bg-dark-warning-background focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'soft',
        color: 'warning',
        className:
          'bg-dark-warning-background text-dark-warning focus-visible:ring-dark-focus-ring',
      },
      // Info
      {
        theme: 'dark',
        variant: 'default',
        color: 'info',
        className:
          'bg-dark-info-background border-dark-info-border text-dark-info focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'outline',
        color: 'info',
        className:
          'border-dark-info-border text-dark-info focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'solid',
        color: 'info',
        className:
          'bg-dark-info text-dark-info-foreground focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        color: 'info',
        className:
          'text-dark-info hover:bg-dark-info-background focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'soft',
        color: 'info',
        className:
          'bg-dark-info-background text-dark-info focus-visible:ring-dark-focus-ring',
      },

      // ─── Light Theme ────────────────────────────────────────────
      // Default color
      {
        theme: 'light',
        variant: 'default',
        color: 'default',
        className:
          'bg-light-muted border-light-border text-light-text-primary focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'outline',
        color: 'default',
        className:
          'border-light-border-strong text-light-text-primary focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'solid',
        color: 'default',
        className:
          'bg-light-primary text-light-primary-foreground focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'ghost',
        color: 'default',
        className:
          'text-light-text-primary hover:bg-light-hover focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'soft',
        color: 'default',
        className:
          'bg-light-muted text-light-text-primary focus-visible:ring-light-focus-ring',
      },
      // Primary
      {
        theme: 'light',
        variant: 'default',
        color: 'primary',
        className:
          'bg-light-muted border-light-border text-light-text-primary focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'outline',
        color: 'primary',
        className:
          'border-light-border-strong text-light-text-primary focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'solid',
        color: 'primary',
        className:
          'bg-light-primary text-light-primary-foreground focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'ghost',
        color: 'primary',
        className:
          'text-light-text-primary hover:bg-light-hover focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'soft',
        color: 'primary',
        className:
          'bg-light-muted text-light-text-primary focus-visible:ring-light-focus-ring',
      },
      // Secondary
      {
        theme: 'light',
        variant: 'default',
        color: 'secondary',
        className:
          'bg-light-muted border-light-border text-light-text-secondary focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'outline',
        color: 'secondary',
        className:
          'border-light-border-strong text-light-text-secondary focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'solid',
        color: 'secondary',
        className:
          'bg-light-secondary text-light-secondary-foreground focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'ghost',
        color: 'secondary',
        className:
          'text-light-text-secondary hover:bg-light-hover focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'soft',
        color: 'secondary',
        className:
          'bg-light-muted text-light-text-secondary focus-visible:ring-light-focus-ring',
      },
      // Success
      {
        theme: 'light',
        variant: 'default',
        color: 'success',
        className:
          'bg-light-success-background border-light-success-border text-light-success focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'outline',
        color: 'success',
        className:
          'border-light-success-border text-light-success focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'solid',
        color: 'success',
        className:
          'bg-light-success text-light-success-foreground focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'ghost',
        color: 'success',
        className:
          'text-light-success hover:bg-light-success-background focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'soft',
        color: 'success',
        className:
          'bg-light-success-background text-light-success focus-visible:ring-light-focus-ring',
      },
      // Destructive
      {
        theme: 'light',
        variant: 'default',
        color: 'destructive',
        className:
          'bg-light-destructive-background border-light-destructive-border text-light-destructive focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'outline',
        color: 'destructive',
        className:
          'border-light-destructive-border text-light-destructive focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'solid',
        color: 'destructive',
        className:
          'bg-light-destructive text-light-destructive-foreground focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'ghost',
        color: 'destructive',
        className:
          'text-light-destructive hover:bg-light-destructive-background focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'soft',
        color: 'destructive',
        className:
          'bg-light-destructive-background text-light-destructive focus-visible:ring-light-focus-ring',
      },
      // Warning
      {
        theme: 'light',
        variant: 'default',
        color: 'warning',
        className:
          'bg-light-warning-background border-light-warning-border text-light-warning focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'outline',
        color: 'warning',
        className:
          'border-light-warning-border text-light-warning focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'solid',
        color: 'warning',
        className:
          'bg-light-warning text-light-warning-foreground focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'ghost',
        color: 'warning',
        className:
          'text-light-warning hover:bg-light-warning-background focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'soft',
        color: 'warning',
        className:
          'bg-light-warning-background text-light-warning focus-visible:ring-light-focus-ring',
      },
      // Info
      {
        theme: 'light',
        variant: 'default',
        color: 'info',
        className:
          'bg-light-info-background border-light-info-border text-light-info focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'outline',
        color: 'info',
        className:
          'border-light-info-border text-light-info focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'solid',
        color: 'info',
        className:
          'bg-light-info text-light-info-foreground focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'ghost',
        color: 'info',
        className:
          'text-light-info hover:bg-light-info-background focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'soft',
        color: 'info',
        className:
          'bg-light-info-background text-light-info focus-visible:ring-light-focus-ring',
      },
    ],
    defaultVariants: {
      variant: 'default',
      color: 'default',
      size: 'md',
      shape: 'pill',
      theme: 'dark',
    },
  }
);

// ─── Dot Variants ────────────────────────────────────────────────────────

const dotVariants = cva(['inline-block', 'rounded-aphelion-full', 'shrink-0'], {
  variants: {
    size: {
      sm: 'h-1.5 w-1.5',
      md: 'h-2 w-2',
      lg: 'h-2 w-2',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// ─── BadgeAvatar Component ───────────────────────────────────────────────

export interface BadgeAvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
  className?: string;
}

const BadgeAvatar = React.forwardRef<HTMLSpanElement, BadgeAvatarProps>(
  function BadgeAvatar(
    { src, alt, fallback, size = 'md', theme = 'dark', className },
    ref
  ) {
    const [error, setError] = React.useState(false);

    const sizeClasses = {
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-aphelion-full',
          sizeClasses[size],
          className
        )}
      >
        {src && !error ? (
          <img
            src={src}
            alt={alt || ''}
            className="h-full w-full object-cover"
            onError={() => setError(true)}
          />
        ) : (
          <span
            className={cn(
              'flex h-full w-full items-center justify-center text-[8px] font-medium',
              theme === 'dark'
                ? 'bg-dark-muted text-dark-text-secondary'
                : 'bg-light-muted text-light-text-secondary'
            )}
          >
            {fallback?.charAt(0).toUpperCase() || '?'}
          </span>
        )}
      </span>
    );
  }
);

BadgeAvatar.displayName = 'BadgeAvatar';

// ─── DismissButton Component ─────────────────────────────────────────────

export interface DismissButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
}

const DismissButton = React.forwardRef<HTMLButtonElement, DismissButtonProps>(
  function DismissButton(
    { onClick, theme = 'dark', size = 'md', className, ariaLabel = 'Remove' },
    ref
  ) {
    const iconSizes = { sm: 12, md: 14, lg: 14 };

    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn(
          'inline-flex shrink-0 items-center justify-center rounded-aphelion-full transition-colors',
          size === 'sm'
            ? '-mr-0.5 h-4 w-4'
            : size === 'md'
              ? '-mr-0.5 h-4 w-4'
              : '-mr-0.5 h-5 w-5',
          theme === 'dark'
            ? 'text-dark-text-muted hover:bg-dark-hover hover:text-dark-text-primary'
            : 'text-light-text-muted hover:bg-light-hover hover:text-light-text-primary',
          className
        )}
        aria-label={ariaLabel}
      >
        <svg
          width={iconSizes[size]}
          height={iconSizes[size]}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    );
  }
);

DismissButton.displayName = 'DismissButton';

// ─── DotIndicator Component ──────────────────────────────────────────────

export interface DotIndicatorProps {
  color?: 'default' | 'success' | 'destructive' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
  className?: string;
}

const DotIndicator = React.forwardRef<HTMLSpanElement, DotIndicatorProps>(
  function DotIndicator(
    { color = 'default', size = 'md', theme = 'dark', className },
    ref
  ) {
    const colorMap: Record<string, string> = {
      default:
        theme === 'dark' ? 'bg-dark-text-primary' : 'bg-light-text-primary',
      success: 'bg-dark-success',
      destructive: 'bg-dark-destructive',
      warning: 'bg-dark-warning',
      info: 'bg-dark-info',
    };

    return (
      <span
        ref={ref}
        className={cn(dotVariants({ size }), colorMap[color], className)}
      />
    );
  }
);

DotIndicator.displayName = 'DotIndicator';

// ─── Badge Component ─────────────────────────────────────────────────────

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  dot?: boolean;
  dotColor?: 'default' | 'success' | 'destructive' | 'warning' | 'info';
  dismissible?: boolean;
  onDismiss?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  avatar?: string;
  avatarAlt?: string;
  avatarFallback?: string;
  prefix?: string;
  className?: string;
  disabled?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  {
    children,
    leftIcon,
    rightIcon,
    dot = false,
    dotColor = 'default',
    dismissible = false,
    onDismiss,
    avatar,
    avatarAlt,
    avatarFallback,
    prefix,
    variant,
    color,
    size = 'md',
    shape = 'pill',
    theme = 'dark',
    className,
    disabled = false,
    ...props
  },
  ref
) {
  const resolvedColor = color ?? 'default';

  const prefixTextColor =
    theme === 'dark' ? 'text-dark-text-muted' : 'text-light-text-muted';

  return (
    <span
      ref={ref}
      className={cn(
        badgeVariants({
          variant,
          color: resolvedColor,
          size,
          shape,
          theme,
        }),
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {/* Dot Indicator */}
      {dot && (
        <DotIndicator
          color={dotColor}
          size={size}
          theme={theme}
          className="-ml-0.5"
        />
      )}

      {/* Left Icon */}
      {leftIcon && (
        <span className="shrink-0 -ml-0.5" aria-hidden="true">
          {leftIcon}
        </span>
      )}

      {/* Avatar */}
      {avatar && (
        <BadgeAvatar
          src={avatar}
          alt={avatarAlt}
          fallback={avatarFallback}
          size={size}
          theme={theme}
          className="-ml-0.5"
        />
      )}

      {/* Prefix */}
      {prefix && (
        <span className={cn('shrink-0', prefixTextColor)}>{prefix}</span>
      )}

      {/* Content */}
      {children && <span className="min-w-0 truncate">{children}</span>}

      {/* Right Icon */}
      {rightIcon && (
        <span className="shrink-0 -mr-0.5" aria-hidden="true">
          {rightIcon}
        </span>
      )}

      {/* Dismiss Button */}
      {dismissible && (
        <DismissButton
          onClick={onDismiss}
          theme={theme!}
          size={size!}
          className="-mr-0.5"
        />
      )}
    </span>
  );
});

Badge.displayName = 'Badge';

// ─── BadgeGroup Component ────────────────────────────────────────────────

export interface BadgeGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: 'sm' | 'md' | 'lg';
  wrap?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
}

const BadgeGroup = React.forwardRef<HTMLDivElement, BadgeGroupProps>(
  function BadgeGroup(
    { gap = 'sm', wrap = true, theme = 'dark', className, children, ...props },
    ref
  ) {
    const gapClasses = {
      sm: 'gap-1.5',
      md: 'gap-2',
      lg: 'gap-3',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center',
          gapClasses[gap],
          wrap ? 'flex-wrap' : 'flex-nowrap',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

BadgeGroup.displayName = 'BadgeGroup';

// ─── Exports ─────────────────────────────────────────────────────────────

export {
  Badge,
  BadgeGroup,
  BadgeAvatar,
  DismissButton,
  DotIndicator,
  badgeVariants,
};

export default Badge;
