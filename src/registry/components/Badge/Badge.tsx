"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─────────────────────────────────────────────────────────────
//  Badge Variants
// ─────────────────────────────────────────────────────────────

const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-1.5",
    "font-medium",
    "transition-all",
    "duration-150",
    "select-none",
    "whitespace-nowrap",
    "outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        default: "border",
        outline: "border bg-transparent",
        solid: "border-transparent",
        ghost: "border-transparent bg-transparent",
        soft: "border-transparent",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        destructive: "",
        warning: "",
        success: "",
        info: "",
      },
      size: {
        sm: "h-6 px-2 text-xs",
        md: "h-7 px-2.5 text-sm",
        lg: "h-8 px-3 text-sm",
      },
      shape: {
        pill: "rounded-full",
        circle: "rounded-full aspect-square px-0",
        square: "rounded-md",
      },
      theme: {
        dark: "",
        light: "",
      },
    },
    compoundVariants: [
      // ═══════════════════════════════════════════════════════
      //  DARK THEME
      // ═══════════════════════════════════════════════════════

      // ── Default color ──
      {
        theme: "dark",
        variant: "default",
        color: "default",
        className:
          "bg-white/[0.06] border-white/[0.08] text-white focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "outline",
        color: "default",
        className:
          "border-white/[0.12] text-white focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "solid",
        color: "default",
        className:
          "bg-white text-black focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "ghost",
        color: "default",
        className:
          "text-white hover:bg-white/[0.04] focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "soft",
        color: "default",
        className:
          "bg-white/[0.08] text-white focus-visible:ring-white/20",
      },

      // ── Primary color ──
      {
        theme: "dark",
        variant: "default",
        color: "primary",
        className:
          "bg-white/[0.06] border-white/[0.08] text-white focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "outline",
        color: "primary",
        className:
          "border-white/[0.12] text-white focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "solid",
        color: "primary",
        className:
          "bg-white text-black focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "ghost",
        color: "primary",
        className:
          "text-white hover:bg-white/[0.04] focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "soft",
        color: "primary",
        className:
          "bg-white/[0.08] text-white focus-visible:ring-white/20",
      },

      // ── Secondary color ──
      {
        theme: "dark",
        variant: "default",
        color: "secondary",
        className:
          "bg-white/[0.06] border-white/[0.08] text-white/70 focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "outline",
        color: "secondary",
        className:
          "border-white/[0.12] text-white/70 focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "solid",
        color: "secondary",
        className:
          "bg-white/70 text-black focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "ghost",
        color: "secondary",
        className:
          "text-white/70 hover:bg-white/[0.04] focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "soft",
        color: "secondary",
        className:
          "bg-white/[0.08] text-white/70 focus-visible:ring-white/20",
      },

      // ── Success color ──
      {
        theme: "dark",
        variant: "default",
        color: "success",
        className:
          "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 focus-visible:ring-emerald-500/20",
      },
      {
        theme: "dark",
        variant: "outline",
        color: "success",
        className:
          "border-emerald-500/30 text-emerald-400 focus-visible:ring-emerald-500/20",
      },
      {
        theme: "dark",
        variant: "solid",
        color: "success",
        className:
          "bg-emerald-500 text-black focus-visible:ring-emerald-500/20",
      },
      {
        theme: "dark",
        variant: "ghost",
        color: "success",
        className:
          "text-emerald-400 hover:bg-emerald-500/10 focus-visible:ring-emerald-500/20",
      },
      {
        theme: "dark",
        variant: "soft",
        color: "success",
        className:
          "bg-emerald-500/10 text-emerald-400 focus-visible:ring-emerald-500/20",
      },

      // ── Destructive color ──
      {
        theme: "dark",
        variant: "default",
        color: "destructive",
        className:
          "bg-red-500/10 border-red-500/20 text-red-400 focus-visible:ring-red-500/20",
      },
      {
        theme: "dark",
        variant: "outline",
        color: "destructive",
        className:
          "border-red-500/30 text-red-400 focus-visible:ring-red-500/20",
      },
      {
        theme: "dark",
        variant: "solid",
        color: "destructive",
        className:
          "bg-red-500 text-white focus-visible:ring-red-500/20",
      },
      {
        theme: "dark",
        variant: "ghost",
        color: "destructive",
        className:
          "text-red-400 hover:bg-red-500/10 focus-visible:ring-red-500/20",
      },
      {
        theme: "dark",
        variant: "soft",
        color: "destructive",
        className:
          "bg-red-500/10 text-red-400 focus-visible:ring-red-500/20",
      },

      // ── Warning color ──
      {
        theme: "dark",
        variant: "default",
        color: "warning",
        className:
          "bg-amber-500/10 border-amber-500/20 text-amber-400 focus-visible:ring-amber-500/20",
      },
      {
        theme: "dark",
        variant: "outline",
        color: "warning",
        className:
          "border-amber-500/30 text-amber-400 focus-visible:ring-amber-500/20",
      },
      {
        theme: "dark",
        variant: "solid",
        color: "warning",
        className:
          "bg-amber-500 text-black focus-visible:ring-amber-500/20",
      },
      {
        theme: "dark",
        variant: "ghost",
        color: "warning",
        className:
          "text-amber-400 hover:bg-amber-500/10 focus-visible:ring-amber-500/20",
      },
      {
        theme: "dark",
        variant: "soft",
        color: "warning",
        className:
          "bg-amber-500/10 text-amber-400 focus-visible:ring-amber-500/20",
      },

      // ── Info color ──
      {
        theme: "dark",
        variant: "default",
        color: "info",
        className:
          "bg-blue-500/10 border-blue-500/20 text-blue-400 focus-visible:ring-blue-500/20",
      },
      {
        theme: "dark",
        variant: "outline",
        color: "info",
        className:
          "border-blue-500/30 text-blue-400 focus-visible:ring-blue-500/20",
      },
      {
        theme: "dark",
        variant: "solid",
        color: "info",
        className:
          "bg-blue-500 text-white focus-visible:ring-blue-500/20",
      },
      {
        theme: "dark",
        variant: "ghost",
        color: "info",
        className:
          "text-blue-400 hover:bg-blue-500/10 focus-visible:ring-blue-500/20",
      },
      {
        theme: "dark",
        variant: "soft",
        color: "info",
        className:
          "bg-blue-500/10 text-blue-400 focus-visible:ring-blue-500/20",
      },

      // ═══════════════════════════════════════════════════════
      //  LIGHT THEME
      // ═══════════════════════════════════════════════════════

      // ── Default color ──
      {
        theme: "light",
        variant: "default",
        color: "default",
        className:
          "bg-black/[0.06] border-black/[0.08] text-black focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "outline",
        color: "default",
        className:
          "border-black/[0.12] text-black focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "solid",
        color: "default",
        className:
          "bg-black text-white focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "ghost",
        color: "default",
        className:
          "text-black hover:bg-black/[0.04] focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "soft",
        color: "default",
        className:
          "bg-black/[0.08] text-black focus-visible:ring-black/20",
      },

      // ── Primary color ──
      {
        theme: "light",
        variant: "default",
        color: "primary",
        className:
          "bg-black/[0.06] border-black/[0.08] text-black focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "outline",
        color: "primary",
        className:
          "border-black/[0.12] text-black focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "solid",
        color: "primary",
        className:
          "bg-black text-white focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "ghost",
        color: "primary",
        className:
          "text-black hover:bg-black/[0.04] focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "soft",
        color: "primary",
        className:
          "bg-black/[0.08] text-black focus-visible:ring-black/20",
      },

      // ── Secondary color ──
      {
        theme: "light",
        variant: "default",
        color: "secondary",
        className:
          "bg-black/[0.06] border-black/[0.08] text-black/60 focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "outline",
        color: "secondary",
        className:
          "border-black/[0.12] text-black/60 focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "solid",
        color: "secondary",
        className:
          "bg-black/60 text-white focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "ghost",
        color: "secondary",
        className:
          "text-black/60 hover:bg-black/[0.04] focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "soft",
        color: "secondary",
        className:
          "bg-black/[0.08] text-black/60 focus-visible:ring-black/20",
      },

      // ── Success color ──
      {
        theme: "light",
        variant: "default",
        color: "success",
        className:
          "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 focus-visible:ring-emerald-500/20",
      },
      {
        theme: "light",
        variant: "outline",
        color: "success",
        className:
          "border-emerald-500/30 text-emerald-600 focus-visible:ring-emerald-500/20",
      },
      {
        theme: "light",
        variant: "solid",
        color: "success",
        className:
          "bg-emerald-500 text-white focus-visible:ring-emerald-500/20",
      },
      {
        theme: "light",
        variant: "ghost",
        color: "success",
        className:
          "text-emerald-600 hover:bg-emerald-500/10 focus-visible:ring-emerald-500/20",
      },
      {
        theme: "light",
        variant: "soft",
        color: "success",
        className:
          "bg-emerald-500/10 text-emerald-600 focus-visible:ring-emerald-500/20",
      },

      // ── Destructive color ──
      {
        theme: "light",
        variant: "default",
        color: "destructive",
        className:
          "bg-red-500/10 border-red-500/20 text-red-600 focus-visible:ring-red-500/20",
      },
      {
        theme: "light",
        variant: "outline",
        color: "destructive",
        className:
          "border-red-500/30 text-red-600 focus-visible:ring-red-500/20",
      },
      {
        theme: "light",
        variant: "solid",
        color: "destructive",
        className:
          "bg-red-500 text-white focus-visible:ring-red-500/20",
      },
      {
        theme: "light",
        variant: "ghost",
        color: "destructive",
        className:
          "text-red-600 hover:bg-red-500/10 focus-visible:ring-red-500/20",
      },
      {
        theme: "light",
        variant: "soft",
        color: "destructive",
        className:
          "bg-red-500/10 text-red-600 focus-visible:ring-red-500/20",
      },

      // ── Warning color ──
      {
        theme: "light",
        variant: "default",
        color: "warning",
        className:
          "bg-amber-500/10 border-amber-500/20 text-amber-600 focus-visible:ring-amber-500/20",
      },
      {
        theme: "light",
        variant: "outline",
        color: "warning",
        className:
          "border-amber-500/30 text-amber-600 focus-visible:ring-amber-500/20",
      },
      {
        theme: "light",
        variant: "solid",
        color: "warning",
        className:
          "bg-amber-500 text-black focus-visible:ring-amber-500/20",
      },
      {
        theme: "light",
        variant: "ghost",
        color: "warning",
        className:
          "text-amber-600 hover:bg-amber-500/10 focus-visible:ring-amber-500/20",
      },
      {
        theme: "light",
        variant: "soft",
        color: "warning",
        className:
          "bg-amber-500/10 text-amber-600 focus-visible:ring-amber-500/20",
      },

      // ── Info color ──
      {
        theme: "light",
        variant: "default",
        color: "info",
        className:
          "bg-blue-500/10 border-blue-500/20 text-blue-600 focus-visible:ring-blue-500/20",
      },
      {
        theme: "light",
        variant: "outline",
        color: "info",
        className:
          "border-blue-500/30 text-blue-600 focus-visible:ring-blue-500/20",
      },
      {
        theme: "light",
        variant: "solid",
        color: "info",
        className:
          "bg-blue-500 text-white focus-visible:ring-blue-500/20",
      },
      {
        theme: "light",
        variant: "ghost",
        color: "info",
        className:
          "text-blue-600 hover:bg-blue-500/10 focus-visible:ring-blue-500/20",
      },
      {
        theme: "light",
        variant: "soft",
        color: "info",
        className:
          "bg-blue-500/10 text-blue-600 focus-visible:ring-blue-500/20",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "default",
      size: "md",
      shape: "pill",
      theme: "dark",
    },
  },
);

// ─────────────────────────────────────────────────────────────
//  Dot Indicator Variants
// ─────────────────────────────────────────────────────────────

const dotVariants = cva(["inline-block", "rounded-full", "shrink-0"], {
  variants: {
    size: {
      sm: "h-1.5 w-1.5",
      md: "h-2 w-2",
      lg: "h-2 w-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

// ─────────────────────────────────────────────────────────────
//  BadgeAvatar Sub-component
// ─────────────────────────────────────────────────────────────

export interface BadgeAvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
  theme?: "dark" | "light";
  className?: string;
}

const BadgeAvatar = React.forwardRef<HTMLSpanElement, BadgeAvatarProps>(
  function BadgeAvatar(
    { src, alt, fallback, size = "md", theme = "dark", className },
    ref,
  ) {
    const [error, setError] = React.useState(false);

    const sizeClasses = {
      sm: "h-3.5 w-3.5",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full",
          sizeClasses[size],
          className,
        )}
      >
        {src && !error ? (
          <img
            src={src}
            alt={alt || ""}
            className="h-full w-full object-cover"
            onError={() => setError(true)}
          />
        ) : (
          <span
            className={cn(
              "flex h-full w-full items-center justify-center text-[8px] font-medium",
              theme === "dark"
                ? "bg-white/10 text-white/70"
                : "bg-black/10 text-black/70",
            )}
          >
            {fallback?.charAt(0).toUpperCase() || "?"}
          </span>
        )}
      </span>
    );
  },
);

BadgeAvatar.displayName = "BadgeAvatar";

// ─────────────────────────────────────────────────────────────
//  Dismiss Button
// ─────────────────────────────────────────────────────────────

export interface DismissButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
}

const DismissButton = React.forwardRef<HTMLButtonElement, DismissButtonProps>(
  function DismissButton(
    {
      onClick,
      theme = "dark",
      size = "md",
      className,
      ariaLabel = "Remove",
    },
    ref,
  ) {
    const iconSizes = { sm: 12, md: 14, lg: 14 };

    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-full transition-colors",
          size === "sm"
            ? "-mr-0.5 h-4 w-4"
            : size === "md"
              ? "-mr-0.5 h-4 w-4"
              : "-mr-0.5 h-5 w-5",
          theme === "dark"
            ? "text-white/40 hover:bg-white/[0.08] hover:text-white"
            : "text-black/40 hover:bg-black/[0.08] hover:text-black",
          className,
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
  },
);

DismissButton.displayName = "DismissButton";

// ─────────────────────────────────────────────────────────────
//  Dot Indicator
// ─────────────────────────────────────────────────────────────

export interface DotIndicatorProps {
  color?: "default" | "success" | "destructive" | "warning" | "info";
  size?: "sm" | "md" | "lg";
  theme?: "dark" | "light";
  className?: string;
}

const DotIndicator = React.forwardRef<HTMLSpanElement, DotIndicatorProps>(
  function DotIndicator(
    { color = "default", size = "md", theme = "dark", className },
    ref,
  ) {
    const colorMap = {
      default: theme === "dark" ? "bg-white" : "bg-black",
      success: "bg-emerald-500",
      destructive: "bg-red-500",
      warning: "bg-amber-500",
      info: "bg-blue-500",
    };

    return (
      <span
        ref={ref}
        className={cn(dotVariants({ size }), colorMap[color], className)}
      />
    );
  },
);

DotIndicator.displayName = "DotIndicator";

// ─────────────────────────────────────────────────────────────
//  Main Badge Component
// ─────────────────────────────────────────────────────────────

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Badge text content */
  children?: React.ReactNode;
  /** Left icon (SVG or React node) */
  leftIcon?: React.ReactNode;
  /** Right icon (SVG or React node) */
  rightIcon?: React.ReactNode;
  /** Show dot indicator on left */
  dot?: boolean;
  /** Dot color (default, success, destructive, warning, info) */
  dotColor?: "default" | "success" | "destructive" | "warning" | "info";
  /** Show dismiss button */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Avatar image URL */
  avatar?: string;
  /** Avatar alt text */
  avatarAlt?: string;
  /** Avatar fallback text (initials) */
  avatarFallback?: string;
  /** Label prefix (e.g. "Department | Sales") */
  prefix?: string;
  /** Custom className */
  className?: string;
  /** Disable the badge */
  disabled?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  {
    children,
    leftIcon,
    rightIcon,
    dot = false,
    dotColor = "default",
    dismissible = false,
    onDismiss,
    avatar,
    avatarAlt,
    avatarFallback,
    prefix,
    variant,
    color,
    size = "md",
    shape = "pill",
    theme = "dark",
    className,
    disabled = false,
    ...props
  },
  ref,
) {
  const resolvedColor = color ?? "default";

  const iconSizes = { sm: 12, md: 14, lg: 16 };
  const iconSize = iconSizes[size ?? "md"];

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
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      style={{ fontFamily: "sans-serif" }}
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
          {typeof leftIcon === "string" ? (
            leftIcon
          ) : (
            leftIcon
          )}
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
        <span
          className={cn(
            "shrink-0",
            theme === "dark" ? "text-white/40" : "text-black/40",
          )}
        >
          {prefix}
        </span>
      )}

      {/* Content */}
      {children && (
        <span className="min-w-0 truncate">{children}</span>
      )}

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

Badge.displayName = "Badge";

// ─────────────────────────────────────────────────────────────
//  BadgeGroup Component
// ─────────────────────────────────────────────────────────────

export interface BadgeGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Gap between badges */
  gap?: "sm" | "md" | "lg";
  /** Wrap badges to next line */
  wrap?: boolean;
  /** Theme applied to all badges */
  theme?: "dark" | "light";
  className?: string;
}

const BadgeGroup = React.forwardRef<HTMLDivElement, BadgeGroupProps>(
  function BadgeGroup(
    { gap = "sm", wrap = true, theme = "dark", className, children, ...props },
    ref,
  ) {
    const gapClasses = {
      sm: "gap-1.5",
      md: "gap-2",
      lg: "gap-3",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center",
          gapClasses[gap],
          wrap ? "flex-wrap" : "flex-nowrap",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

BadgeGroup.displayName = "BadgeGroup";

// ─────────────────────────────────────────────────────────────
//  Exports
// ─────────────────────────────────────────────────────────────

export {
  Badge,
  BadgeGroup,
  BadgeAvatar,
  DismissButton,
  DotIndicator,
  badgeVariants,
};

export default Badge;