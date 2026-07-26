"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

const drawerVariants = cva(
  [
    "fixed",
    "z-50",
    "bg-neutral-950",
    "border-neutral-800",
    "shadow-2xl",
    "flex",
    "flex-col",
    "overflow-hidden",
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
      theme: {
        light: ["bg-white", "border-neutral-200"],
        dark: ["bg-neutral-950", "border-neutral-800"],
      },
    },
    defaultVariants: {
      side: "right",
      theme: "dark",
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

const titleVariants = cva(
  ["text-lg", "font-semibold", "leading-tight"],
  {
    variants: {
      theme: {
        light: "text-neutral-900",
        dark: "text-white",
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  }
);

const subtitleVariants = cva(
  ["mt-1", "text-sm", "leading-relaxed"],
  {
    variants: {
      theme: {
        light: "text-neutral-500",
        dark: "text-neutral-400",
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  }
);

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

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export type DrawerSide = "top" | "bottom" | "left" | "right";

export interface DrawerProps {
  /** Visual theme */
  theme?: "light" | "dark";
  /** Which side the drawer opens from */
  side?: DrawerSide;
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Drawer title */
  title?: string;
  /** Drawer subtitle / description */
  subtitle?: string;
  /** Additional description text */
  description?: string;
  /** Content inside drawer */
  children?: React.ReactNode;
  /** Footer content (buttons, actions) */
  footer?: React.ReactNode;
  /** Show close button in header */
  showClose?: boolean;
  /** Close when clicking overlay */
  closeOnOverlayClick?: boolean;
  /** Close on Escape key */
  closeOnEscape?: boolean;
  /** Disable body scroll when open */
  disableBodyScroll?: boolean;
  /** Custom className for drawer panel */
  className?: string;
  /** Overlay className */
  overlayClassName?: string;
  /** Header className */
  headerClassName?: string;
  /** Body className */
  bodyClassName?: string;
  /** Footer className */
  footerClassName?: string;
  /** Title className */
  titleClassName?: string;
  /** Subtitle className */
  subtitleClassName?: string;
}

const overlayAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
};

const drawerAnimation: Record<
  DrawerSide,
  {
    initial: { [key: string]: string | number };
    animate: { [key: string]: string | number };
    exit: { [key: string]: string | number };
    transition: { duration: number; ease: number[] };
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

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  function Drawer(
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
      disableBodyScroll = true,
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
    const handleClose = React.useCallback(() => {
      onOpenChange?.(false);
    }, [onOpenChange]);

    const handleOverlayClick = React.useCallback(
      (e: React.MouseEvent) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
          handleClose();
        }
      },
      [closeOnOverlayClick, handleClose]
    );

    React.useEffect(() => {
      if (!closeOnEscape || !open) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [closeOnEscape, open, handleClose]);

    React.useEffect(() => {
      if (!disableBodyScroll) return;

      if (open) {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      }
    }, [open, disableBodyScroll]);

    const anim = drawerAnimation[side];

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

            {/* Drawer Panel */}
            <motion.div
              ref={ref}
              initial={anim.initial}
              animate={anim.animate}
              exit={anim.exit}
              transition={anim.transition}
              className={cn(drawerVariants({ side, theme }), className)}
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? "drawer-title" : undefined}
              aria-describedby={subtitle ? "drawer-subtitle" : undefined}
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
                  aria-label="Close drawer"
                >
                  <XIcon />
                </button>
              )}

              {/* Header */}
              {(title || subtitle || description) && (
                <div className={cn(headerVariants({ theme }), headerClassName)}>
                  <div className="flex-1 pr-8">
                    {title && (
                      <motion.h2
                        id="drawer-title"
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
                        id="drawer-subtitle"
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
  }
);

Drawer.displayName = "Drawer";

export function useDrawer(defaultOpen = false) {
  const [open, setOpen] = React.useState(defaultOpen);

  return {
    open,
    onOpenChange: setOpen,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
    onToggle: () => setOpen((prev) => !prev),
  };
}

interface DrawerTriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

function DrawerTrigger({ children, onClick, className }: DrawerTriggerProps) {
  return (
    <div onClick={onClick} className={cn("inline-block", className)}>
      {children}
    </div>
  );
}

export {
  Drawer,
  DrawerTrigger,
  overlayVariants,
  drawerVariants,
  headerVariants,
  titleVariants,
  subtitleVariants,
  bodyVariants,
  footerVariants,
};

export default Drawer;