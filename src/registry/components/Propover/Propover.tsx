"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const popoverVariants = cva(
  ["relative", "inline-flex", "items-center", "justify-center"],
  {
    variants: {
      theme: {
        dark: "",
        light: "",
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  },
);

const contentVariants = cva(
  [
    "absolute",
    "z-50",
    "w-max",
    "min-w-[200px]",
    "max-w-[360px]",
    "rounded-[12px]",
    "border",
    "shadow-xl",
    "outline-none",
    "transition-all",
    "duration-200",
  ],
  {
    variants: {
      theme: {
        dark: [
          "bg-[#0A0A0A]",
          "border-white/[0.08]",
          "text-white",
          "shadow-black/40",
        ],
        light: [
          "bg-white",
          "border-black/[0.08]",
          "text-black",
          "shadow-black/10",
        ],
      },
      size: {
        sm: "p-3 text-sm",
        md: "p-4 text-sm",
        lg: "p-5 text-base",
      },
      hasArrow: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      theme: "dark",
      size: "md",
      hasArrow: false,
    },
  },
);

const triggerVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "font-medium",
    "transition-all",
    "duration-150",
    "outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "",
        outline: "border",
        ghost: "",
        solid: "",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        md: "h-9 px-4 text-sm rounded-lg",
        lg: "h-10 px-5 text-sm rounded-lg",
      },
      theme: {
        dark: "",
        light: "",
      },
    },
    compoundVariants: [
      {
        theme: "dark",
        variant: "default",
        className:
          "bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/[0.08] focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "outline",
        className:
          "bg-transparent text-white hover:bg-white/[0.04] border border-white/[0.12] focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "ghost",
        className:
          "bg-transparent text-white hover:bg-white/[0.04] border border-transparent focus-visible:ring-white/20",
      },
      {
        theme: "dark",
        variant: "solid",
        className:
          "bg-white text-black hover:bg-white/90 border border-transparent focus-visible:ring-white/20",
      },
      {
        theme: "light",
        variant: "default",
        className:
          "bg-black/[0.04] text-black hover:bg-black/[0.08] border border-black/[0.08] focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "outline",
        className:
          "bg-transparent text-black hover:bg-black/[0.04] border border-black/[0.12] focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "ghost",
        className:
          "bg-transparent text-black hover:bg-black/[0.04] border border-transparent focus-visible:ring-black/20",
      },
      {
        theme: "light",
        variant: "solid",
        className:
          "bg-black text-white hover:bg-black/90 border border-transparent focus-visible:ring-black/20",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      theme: "dark",
    },
  },
);

const arrowVariants = cva(["absolute", "w-3", "h-3", "rotate-45"], {
  variants: {
    theme: {
      dark: "bg-[#0A0A0A] border-white/[0.08]",
      light: "bg-white border-black/[0.08]",
    },
    side: {
      top: "border-b border-r",
      bottom: "border-t border-l",
      left: "border-t border-r",
      right: "border-b border-l",
    },
  },
  defaultVariants: {
    theme: "dark",
    side: "top",
  },
});

export type PopoverSide = "top" | "bottom" | "left" | "right";
export type PopoverAlign = "start" | "center" | "end";

export interface PopoverProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof popoverVariants>,
    VariantProps<typeof contentVariants> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  triggerVariant?: "default" | "outline" | "ghost" | "solid";
  triggerSize?: "sm" | "md" | "lg";
  triggerText?: string;
  side?: PopoverSide;
  align?: PopoverAlign;
  sideOffset?: number;
  alignOffset?: number;
  hasArrow?: boolean;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  disabled?: boolean;
  className?: string;
  contentClassName?: string;
  triggerClassName?: string;
  arrowClassName?: string;
  children?: React.ReactNode;
}

function getPopoverStyles(
  side: PopoverSide,
  align: PopoverAlign,
  sideOffset: number,
  alignOffset: number,
  hasArrow: boolean,
): React.CSSProperties {
  const arrowSize = hasArrow ? 6 : 0;
  const offset = sideOffset + arrowSize;

  const base: React.CSSProperties = {
    position: "absolute",
  };

  switch (side) {
    case "top":
      base.bottom = `calc(100% + ${offset}px)`;
      if (align === "start") base.left = alignOffset;
      if (align === "center") base.left = "50%";
      if (align === "end") base.right = alignOffset;
      break;
    case "bottom":
      base.top = `calc(100% + ${offset}px)`;
      if (align === "start") base.left = alignOffset;
      if (align === "center") base.left = "50%";
      if (align === "end") base.right = alignOffset;
      break;
    case "left":
      base.right = `calc(100% + ${offset}px)`;
      if (align === "start") base.top = alignOffset;
      if (align === "center") base.top = "50%";
      if (align === "end") base.bottom = alignOffset;
      break;
    case "right":
      base.left = `calc(100% + ${offset}px)`;
      if (align === "start") base.top = alignOffset;
      if (align === "center") base.top = "50%";
      if (align === "end") base.bottom = alignOffset;
      break;
  }

  if (align === "center") {
    if (side === "top" || side === "bottom") {
      base.transform = "translateX(-50%)";
    } else {
      base.transform = "translateY(-50%)";
    }
  }

  return base;
}

function getArrowStyles(
  side: PopoverSide,
  align: PopoverAlign,
  sideOffset: number,
): React.CSSProperties {
  const base: React.CSSProperties = {
    position: "absolute",
    width: 12,
    height: 12,
    transform: "rotate(45deg)",
  };

  switch (side) {
    case "top":
      base.bottom = -6;
      if (align === "start") base.left = 20;
      if (align === "center") base.left = "50%";
      if (align === "end") base.right = 20;
      break;
    case "bottom":
      base.top = -6;
      if (align === "start") base.left = 20;
      if (align === "center") base.left = "50%";
      if (align === "end") base.right = 20;
      break;
    case "left":
      base.right = -6;
      if (align === "start") base.top = 16;
      if (align === "center") base.top = "50%";
      if (align === "end") base.bottom = 16;
      break;
    case "right":
      base.left = -6;
      if (align === "start") base.top = 16;
      if (align === "center") base.top = "50%";
      if (align === "end") base.bottom = 16;
      break;
  }

  if (align === "center") {
    if (side === "top" || side === "bottom") {
      base.transform = "rotate(45deg) translateX(-50%)";
    } else {
      base.transform = "rotate(45deg) translateY(-50%)";
    }
  }

  return base;
}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(function Popover(
  {
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    trigger,
    triggerVariant = "default",
    triggerSize = "md",
    triggerText,
    side = "bottom",
    align = "center",
    sideOffset = 8,
    alignOffset = 0,
    hasArrow = false,
    closeOnClickOutside = true,
    closeOnEscape = true,
    disabled = false,
    theme = "dark",
    size = "md",
    className,
    contentClassName,
    triggerClassName,
    arrowClassName,
    children,
    ...props
  },
  ref,
) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const handleOpenChange = (nextOpen: boolean) => {
    if (disabled) return;
    if (!isControlled) setInternalOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  const toggle = () => handleOpenChange(!isOpen);
  const open = () => handleOpenChange(true);
  const close = () => handleOpenChange(false);

  React.useEffect(() => {
    if (!closeOnClickOutside || !isOpen) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, closeOnClickOutside]);

  React.useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOnEscape]);

  React.useEffect(() => {
    if (!isOpen) return;

    const content = contentRef.current;
    if (!content) return;

    const focusableElements = content.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  const popoverStyles = getPopoverStyles(
    side,
    align,
    sideOffset,
    alignOffset,
    hasArrow,
  );

  const arrowStyles = getArrowStyles(side, align, sideOffset);

  const contentVariants_fr = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: side === "bottom" ? -4 : side === "top" ? 4 : 0,
      x: side === "right" ? -4 : side === "left" ? 4 : 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: side === "bottom" ? -4 : side === "top" ? 4 : 0,
      x: side === "right" ? -4 : side === "left" ? 4 : 0,
    },
  };

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      className={cn(popoverVariants({ theme }), className)}
      {...props}
    >
      {trigger ? (
        <div onClick={toggle} className="cursor-pointer">
          {trigger}
        </div>
      ) : (
        <button
          type="button"
          onClick={toggle}
          disabled={disabled}
          className={cn(
            triggerVariants({
              variant: triggerVariant,
              size: triggerSize,
              theme,
            }),
            triggerClassName,
          )}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          {triggerText || "Open popover"}
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={contentRef}
            style={{
              ...popoverStyles,
              fontFamily: "sans-serif",
            }}
            className={cn(
              contentVariants({ theme, size, hasArrow }),
              contentClassName,
            )}
            variants={contentVariants_fr}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            role="dialog"
            aria-modal="false"
          >
            {hasArrow && (
              <span
                style={arrowStyles}
                className={cn(arrowVariants({ theme, side }), arrowClassName)}
              />
            )}
            <div className="relative z-10">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

Popover.displayName = "Popover";

interface PopoverHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  theme?: "dark" | "light";
  showClose?: boolean;
  onClose?: () => void;
  className?: string;
}

const PopoverHeader = React.forwardRef<HTMLDivElement, PopoverHeaderProps>(
  function PopoverHeader(
    {
      title,
      description,
      theme = "dark",
      showClose = false,
      onClose,
      className,
      children,
      ...props
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-3 flex items-start justify-between gap-3 pb-3",
          theme === "dark"
            ? "border-b border-white/[0.08]"
            : "border-b border-black/[0.08]",
          className,
        )}
        {...props}
      >
        <div className="min-w-0 flex-1">
          {title && (
            <h3
              className={cn(
                "text-sm leading-tight font-semibold",
                theme === "dark" ? "text-white" : "text-black",
              )}
            >
              {title}
            </h3>
          )}
          {description && (
            <p
              className={cn(
                "mt-1 text-xs leading-relaxed",
                theme === "dark" ? "text-white/50" : "text-black/50",
              )}
            >
              {description}
            </p>
          )}
          {children}
        </div>
        {showClose && (
          <button
            type="button"
            onClick={onClose}
            className={cn(
              "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors",
              theme === "dark"
                ? "text-aphelion-light-text-primary hover:bg-white/[0.08] hover:text-white"
                : "text-black/40 hover:bg-black/[0.08] hover:text-black",
            )}
            aria-label="Close"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  },
);

PopoverHeader.displayName = "PopoverHeader";

interface PopoverBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const PopoverBody = React.forwardRef<HTMLDivElement, PopoverBodyProps>(
  function PopoverBody({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={cn("space-y-3", className)} {...props}>
        {children}
      </div>
    );
  },
);

PopoverBody.displayName = "PopoverBody";

interface PopoverFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: "dark" | "light";
  className?: string;
}

const PopoverFooter = React.forwardRef<HTMLDivElement, PopoverFooterProps>(
  function PopoverFooter(
    { theme = "dark", className, children, ...props },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          "mt-3 flex items-center justify-end gap-2 pt-3",
          theme === "dark"
            ? "border-t border-white/[0.08]"
            : "border-t border-black/[0.08]",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

PopoverFooter.displayName = "PopoverFooter";

interface PopoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "solid";
  size?: "sm" | "md" | "lg";
  theme?: "dark" | "light";
  className?: string;
}

const PopoverButton = React.forwardRef<HTMLButtonElement, PopoverButtonProps>(
  function PopoverButton(
    {
      variant = "default",
      size = "md",
      theme = "dark",
      className,
      children,
      ...props
    },
    ref,
  ) {
    const btnVariants = cva(
      [
        "inline-flex",
        "items-center",
        "justify-center",
        "gap-1.5",
        "font-medium",
        "transition-all",
        "duration-150",
        "outline-none",
        "focus-visible:ring-2",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
      ],
      {
        variants: {
          variant: {
            default: "",
            outline: "border",
            ghost: "",
            solid: "",
          },
          size: {
            sm: "h-7 px-2.5 text-xs rounded-md",
            md: "h-8 px-3.5 text-xs rounded-md",
            lg: "h-9 px-4 text-sm rounded-lg",
          },
          theme: {
            dark: "",
            light: "",
          },
        },
        compoundVariants: [
          {
            theme: "dark",
            variant: "default",
            className:
              "bg-white/[0.06] text-white hover:bg-white/[0.10] border border-white/[0.08] focus-visible:ring-white/20",
          },
          {
            theme: "dark",
            variant: "outline",
            className:
              "bg-transparent text-white hover:bg-white/[0.04] border border-white/[0.12] focus-visible:ring-white/20",
          },
          {
            theme: "dark",
            variant: "ghost",
            className:
              "bg-transparent text-white hover:bg-white/[0.04] border border-transparent focus-visible:ring-white/20",
          },
          {
            theme: "dark",
            variant: "solid",
            className:
              "bg-white text-black hover:bg-white/90 border border-transparent focus-visible:ring-white/20",
          },
          {
            theme: "light",
            variant: "default",
            className:
              "bg-black/[0.06] text-black hover:bg-black/[0.10] border border-black/[0.08] focus-visible:ring-black/20",
          },
          {
            theme: "light",
            variant: "outline",
            className:
              "bg-transparent text-black hover:bg-black/[0.04] border border-black/[0.12] focus-visible:ring-black/20",
          },
          {
            theme: "light",
            variant: "ghost",
            className:
              "bg-transparent text-black hover:bg-black/[0.04] border border-transparent focus-visible:ring-black/20",
          },
          {
            theme: "light",
            variant: "solid",
            className:
              "bg-black text-white hover:bg-black/90 border border-transparent focus-visible:ring-black/20",
          },
        ],
        defaultVariants: {
          variant: "default",
          size: "md",
          theme: "dark",
        },
      },
    );

    return (
      <button
        ref={ref}
        className={cn(btnVariants({ variant, size, theme }), className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

PopoverButton.displayName = "PopoverButton";

interface PopoverCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  theme?: "dark" | "light";
  className?: string;
}

function PopoverCheckbox({
  checked,
  onChange,
  label,
  theme = "dark",
  className,
}: PopoverCheckboxProps) {
  return (
    <label
      className={cn(
        "group inline-flex cursor-pointer items-center gap-2.5 select-none",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onChange?.(!checked)}
        className={cn(
          "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-all duration-150",
          theme === "dark"
            ? checked
              ? "border-white bg-white text-black"
              : "border-white/20 bg-transparent hover:border-white/40"
            : checked
              ? "border-black bg-black text-white"
              : "border-black/20 bg-transparent hover:border-black/40",
        )}
        aria-checked={checked}
        role="checkbox"
      >
        {checked && (
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>
      {label && (
        <span
          className={cn(
            "text-sm transition-colors",
            theme === "dark"
              ? "text-white/70 group-hover:text-white"
              : "text-black/70 group-hover:text-black",
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}

interface PopoverNotificationProps {
  avatar?: string;
  avatarFallback?: string;
  name: string;
  action: string;
  target: string;
  time: string;
  unread?: boolean;
  theme?: "dark" | "light";
  onClick?: () => void;
  className?: string;
}

function PopoverNotification({
  avatar,
  avatarFallback,
  name,
  action,
  target,
  time,
  unread = false,
  theme = "dark",
  onClick,
  className,
}: PopoverNotificationProps) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div
      onClick={onClick}
      className={cn(
        "-mx-1 flex cursor-pointer items-start gap-3 rounded-lg px-1 py-3 transition-colors",
        theme === "dark" ? "hover:bg-white/[0.03]" : "hover:bg-black/[0.03]",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-medium",
          theme === "dark"
            ? "bg-white/10 text-white/70"
            : "bg-black/10 text-black/70",
        )}
      >
        {avatar && !imgError ? (
          <img
            src={avatar}
            alt={name}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          avatarFallback?.charAt(0).toUpperCase() ||
          name.charAt(0).toUpperCase()
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm leading-relaxed">
          <span
            className={
              theme === "dark"
                ? "font-medium text-white"
                : "font-medium text-black"
            }
          >
            {name}
          </span>{" "}
          <span
            className={theme === "dark" ? "text-white/60" : "text-black/60"}
          >
            {action}
          </span>{" "}
          <span
            className={
              theme === "dark"
                ? "font-medium text-white"
                : "font-medium text-black"
            }
          >
            {target}
          </span>
        </p>
        <p
          className={cn(
            "mt-0.5 text-xs",
            theme === "dark" ? "text-white/35" : "text-black/35",
          )}
        >
          {time}
        </p>
      </div>

      {unread && (
        <span
          className={cn(
            "mt-2 h-2 w-2 shrink-0 rounded-full",
            theme === "dark" ? "bg-white" : "bg-black",
          )}
        />
      )}
    </div>
  );
}

interface PopoverShareProps {
  url?: string;
  onCopy?: () => void;
  theme?: "dark" | "light";
  className?: string;
}

function PopoverShare({
  url = "https://example.com",
  onCopy,
  theme = "dark",
  className,
}: PopoverShareProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (url) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        onCopy?.();
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const iconBtn = cva(
    [
      "inline-flex",
      "h-10",
      "w-10",
      "items-center",
      "justify-center",
      "rounded-lg",
      "border",
      "transition-all",
      "duration-150",
    ],
    {
      variants: {
        theme: {
          dark: [
            "border-white/[0.08]",
            "text-white/60",
            "hover:text-white",
            "hover:bg-white/[0.04]",
            "hover:border-white/[0.12]",
          ],
          light: [
            "border-black/[0.08]",
            "text-black/60",
            "hover:text-black",
            "hover:bg-black/[0.04]",
            "hover:border-black/[0.12]",
          ],
        },
      },
      defaultVariants: {
        theme: "dark",
      },
    },
  );

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          className={cn(iconBtn({ theme }))}
          aria-label="Embed code"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 18l6-6-6-6" />
            <path d="M8 6l-6 6 6 6" />
          </svg>
        </button>

        <button
          type="button"
          className={cn(iconBtn({ theme }))}
          aria-label="Share on X"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>

        <button
          type="button"
          className={cn(iconBtn({ theme }))}
          aria-label="Share on Facebook"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>

        <button
          type="button"
          className={cn(iconBtn({ theme }))}
          aria-label="Share via email"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </button>
      </div>

      <div
        className={cn(
          "flex items-center gap-2 rounded-lg border px-3 py-2.5",
          theme === "dark"
            ? "border-white/[0.08] bg-white/[0.02]"
            : "border-black/[0.08] bg-black/[0.02]",
        )}
      >
        <span
          className={cn(
            "flex-1 truncate text-sm",
            theme === "dark" ? "text-white/70" : "text-black/70",
          )}
        >
          {url}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className={cn(
            "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors",
            theme === "dark"
              ? "text-aphelion-light-text-primary hover:bg-white/[0.08] hover:text-white"
              : "text-black/40 hover:bg-black/[0.08] hover:text-black",
          )}
          aria-label="Copy URL"
        >
          {copied ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

interface PopoverStepperProps {
  steps: { title: string; description: string }[];
  currentStep: number;
  onNext?: () => void;
  onPrev?: () => void;
  onFinish?: () => void;
  theme?: "dark" | "light";
  className?: string;
}

function PopoverStepper({
  steps,
  currentStep,
  onNext,
  onPrev,
  onFinish,
  theme = "dark",
  className,
}: PopoverStepperProps) {
  const step = steps[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <h4
          className={cn(
            "text-sm font-semibold",
            theme === "dark" ? "text-white" : "text-black",
          )}
        >
          {step.title}
        </h4>
        <p
          className={cn(
            "mt-1.5 text-xs leading-relaxed",
            theme === "dark" ? "text-white/50" : "text-black/50",
          )}
        >
          {step.description}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {steps.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === currentStep
                  ? theme === "dark"
                    ? "w-4 bg-white"
                    : "w-4 bg-black"
                  : i < currentStep
                    ? theme === "dark"
                      ? "w-1.5 bg-white/40"
                      : "w-1.5 bg-black/40"
                    : theme === "dark"
                      ? "w-1.5 bg-white/15"
                      : "w-1.5 bg-black/15",
              )}
            />
          ))}
        </div>

        <span
          className={cn(
            "text-xs tabular-nums",
            theme === "dark" ? "text-white/35" : "text-black/35",
          )}
        >
          {currentStep + 1}/{steps.length}
        </span>
      </div>

      <div className="flex items-center justify-between pt-1">
        <PopoverButton
          variant="ghost"
          size="sm"
          theme={theme}
          onClick={onPrev}
          disabled={isFirst}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </PopoverButton>

        {isLast ? (
          <PopoverButton
            variant="solid"
            size="sm"
            theme={theme}
            onClick={onFinish}
          >
            Finish
          </PopoverButton>
        ) : (
          <PopoverButton
            variant="solid"
            size="sm"
            theme={theme}
            onClick={onNext}
          >
            Next
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </PopoverButton>
        )}
      </div>
    </div>
  );
}

interface PopoverFormRowProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  theme?: "dark" | "light";
  className?: string;
}

function PopoverFormRow({
  label,
  value,
  onChange,
  placeholder,
  theme = "dark",
  className,
}: PopoverFormRowProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <label
        className={cn(
          "w-[100px] shrink-0 text-sm font-medium",
          theme === "dark" ? "text-white" : "text-black",
        )}
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "h-9 min-w-0 flex-1 rounded-lg border px-3 text-sm transition-all duration-150 outline-none",
          theme === "dark"
            ? "border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/25 focus:border-white/20 focus:ring-1 focus:ring-white/10"
            : "border-black/[0.08] bg-black/[0.03] text-black placeholder:text-black/25 focus:border-black/20 focus:ring-1 focus:ring-black/10",
        )}
      />
    </div>
  );
}

interface PopoverDividerProps {
  theme?: "dark" | "light";
  className?: string;
}

function PopoverDivider({ theme = "dark", className }: PopoverDividerProps) {
  return (
    <div
      className={cn(
        "my-3 h-px w-full",
        theme === "dark" ? "bg-white/[0.06]" : "bg-black/[0.06]",
        className,
      )}
    />
  );
}

export function usePopover(defaultOpen = false) {
  const [open, setOpen] = React.useState(defaultOpen);

  return {
    open,
    setOpen,
    toggle: () => setOpen((prev) => !prev),
    openPopover: () => setOpen(true),
    closePopover: () => setOpen(false),
  };
}

export {
  Popover,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverButton,
  PopoverCheckbox,
  PopoverNotification,
  PopoverShare,
  PopoverStepper,
  PopoverFormRow,
  PopoverDivider,
  popoverVariants,
  contentVariants,
  triggerVariants,
  arrowVariants,
};

export default Popover;