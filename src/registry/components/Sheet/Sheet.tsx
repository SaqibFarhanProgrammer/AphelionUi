"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, type Transition, type Variants } from "framer-motion";

// --- Utility ----------------------------------------------------------------
function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return twMerge(clsx(inputs));
}

// --- Variant definitions ----------------------------------------------------
const overlayVariants = cva(
  ["fixed", "inset-0", "z-40", "transition-colors", "duration-300"],
  {
    variants: {
      theme: {
        light: "bg-black/30",
        dark: "bg-black/60",
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  }
);

const sheetVariants = cva(
  [
    "fixed",
    "z-50",
    "bg-neutral-950",
    "border-neutral-800",
    "shadow-2xl",
    "flex",
    "flex-col",
  ],
  {
    variants: {
      side: {
        top: ["inset-x-0", "top-0", "border-b", "h-auto", "max-h-[85vh]"],
        bottom: ["inset-x-0", "bottom-0", "border-t", "h-auto", "max-h-[85vh]"],
        left: ["inset-y-0", "left-0", "border-r", "w-full", "sm:max-w-[420px]"],
        right: [
          "inset-y-0",
          "right-0",
          "border-l",
          "w-full",
          "sm:max-w-[420px]",
        ],
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

const headerVariants = cva(
  ["flex", "items-start", "justify-between", "gap-4", "p-6", "pb-0"],
  {
    variants: {
      theme: {
        light: [],
        dark: [],
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  }
);

const titleVariants = cva(["text-lg", "font-semibold", "leading-tight"], {
  variants: {
    theme: {
      light: "text-neutral-900",
      dark: "text-white",
    },
  },
  defaultVariants: {
    theme: "dark",
  },
});

const subtitleVariants = cva(["mt-1", "text-sm", "leading-relaxed"], {
  variants: {
    theme: {
      light: "text-neutral-500",
      dark: "text-neutral-400",
    },
  },
  defaultVariants: {
    theme: "dark",
  },
});

const bodyVariants = cva(
  ["flex-1", "overflow-y-auto", "p-6", "scrollbar-hide"],
  {
    variants: {
      theme: {
        light: [],
        dark: [],
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  }
);

const footerVariants = cva(
  ["flex", "items-center", "justify-end", "gap-3", "p-6", "pt-0"],
  {
    variants: {
      theme: {
        light: [],
        dark: [],
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  }
);

// --- Animation objects ------------------------------------------------------
const overlayAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] } as Transition,
};

const sheetAnimation: Record<
  NonNullable<VariantProps<typeof sheetVariants>["side"]>,
  {
    initial: Variants["initial"];
    animate: Variants["animate"];
    exit: Variants["exit"];
    transition: Transition;
  }
> = {
  top: {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  bottom: {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  left: {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  right: {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// --- Props type -------------------------------------------------------------
export interface SheetProps {
  theme?: "light" | "dark";
  side?: "top" | "bottom" | "left" | "right";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  showClose?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  overlayClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

// --- Sheet Component ---------------------------------------------------------
const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(function Sheet(
  {
    theme = "dark",
    side = "right",
    open = false,
    onOpenChange,
    title,
    subtitle,
    description,
    children,
    footer,
    showClose = true,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    className,
    overlayClassName,
    headerClassName,
    bodyClassName,
    footerClassName,
    titleClassName,
    subtitleClassName,
  },
  ref
) {
  const handleClose = () => onOpenChange?.(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) handleClose();
  };

  React.useEffect(() => {
    if (!closeOnEscape || !open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeOnEscape, open]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const anim = sheetAnimation[side ?? "right"];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            {...overlayAnimation}
            className={cn(overlayVariants({ theme }), overlayClassName)}
            onClick={handleOverlayClick}
            aria-hidden="true"
          />

          {/* Sheet Panel */}
          <motion.div
            ref={ref}
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={anim.transition}
            className={cn(sheetVariants({ side }), className)}
            role="dialog"
            aria-modal="true"
            style={{ fontFamily: "sans-serif" }}
          >
            {/* Close Button */}
            {showClose && (
              <button
                type="button"
                onClick={handleClose}
                className={cn(
                  "absolute top-4 right-4 z-10 rounded-md p-1.5 transition-colors",
                  theme === "dark"
                    ? "text-neutral-500 hover:bg-neutral-800 hover:text-neutral-300"
                    : "text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"
                )}
                aria-label="Close"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}

            {/* Header */}
            {(title || subtitle || description) && (
              <div className={cn(headerVariants({ theme }), headerClassName)}>
                <div className="flex-1 pr-8">
                  {title && (
                    <motion.h2
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className={cn(titleVariants({ theme }), titleClassName)}
                    >
                      {title}
                    </motion.h2>
                  )}
                  {subtitle && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className={cn(
                        subtitleVariants({ theme }),
                        subtitleClassName
                      )}
                    >
                      {subtitle}
                    </motion.p>
                  )}
                  {description && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className={cn(
                        "mt-3 text-sm leading-relaxed",
                        theme === "dark"
                          ? "text-neutral-400"
                          : "text-neutral-500"
                      )}
                    >
                      {description}
                    </motion.p>
                  )}
                </div>
              </div>
            )}

            {/* Body */}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className={cn(bodyVariants({ theme }), bodyClassName)}
              >
                {children}
              </motion.div>
            )}

            {/* Footer */}
            {footer && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className={cn(footerVariants({ theme }), footerClassName)}
              >
                {footer}
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

Sheet.displayName = "Sheet";

// --- useSheet hook -----------------------------------------------------------
export function useSheet(defaultOpen = false) {
  const [open, setOpen] = React.useState(defaultOpen);
  return {
    open,
    onOpenChange: setOpen,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
    onToggle: () => setOpen((prev) => !prev),
  };
}

export { Sheet, useSheet };