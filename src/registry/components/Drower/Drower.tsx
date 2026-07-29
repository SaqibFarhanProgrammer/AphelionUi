'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Overlay Variants ────────────────────────────────────────────────────

const overlayVariants = cva(
  ['fixed', 'inset-0', 'z-40', 'transition-colors', 'duration-300'],
  {
    variants: {
      theme: {
        light: 'bg-light-background/30',
        dark: 'bg-dark-background/60',
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

// ─── Drawer Variants ─────────────────────────────────────────────────────

const drawerVariants = cva(
  ['fixed', 'z-50', 'flex', 'flex-col', 'overflow-hidden'],
  {
    variants: {
      side: {
        top: ['inset-x-0', 'top-0', 'border-b', 'h-auto', 'max-h-[85vh]'],
        bottom: ['inset-x-0', 'bottom-0', 'border-t', 'h-auto', 'max-h-[85vh]'],
        left: ['inset-y-0', 'left-0', 'border-r', 'w-full', 'sm:max-w-[420px]'],
        right: [
          'inset-y-0',
          'right-0',
          'border-l',
          'w-full',
          'sm:max-w-[420px]',
        ],
      },
      theme: {
        light: ['bg-light-card', 'border-light-border', 'shadow-aphelion-lg'],
        dark: ['bg-dark-card', 'border-dark-border', 'shadow-aphelion-lg'],
      },
    },
    defaultVariants: {
      side: 'right',
      theme: 'dark',
    },
  }
);

// ─── Header Variants ─────────────────────────────────────────────────────

const headerVariants = cva(
  ['flex', 'items-start', 'justify-between', 'gap-4', 'p-6', 'pb-0'],
  {
    variants: {
      theme: {
        light: [],
        dark: [],
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

// ─── Title Variants ──────────────────────────────────────────────────────

const titleVariants = cva(['text-lg', 'font-semibold', 'leading-tight'], {
  variants: {
    theme: {
      light: 'text-light-text-primary',
      dark: 'text-dark-text-primary',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
});

// ─── Subtitle Variants ───────────────────────────────────────────────────

const subtitleVariants = cva(['mt-1', 'text-sm', 'leading-relaxed'], {
  variants: {
    theme: {
      light: 'text-light-text-muted',
      dark: 'text-dark-text-secondary',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
});

// ─── Body Variants ───────────────────────────────────────────────────────

const bodyVariants = cva(
  ['flex-1', 'overflow-y-auto', 'p-6', 'scrollbar-hide'],
  {
    variants: {
      theme: {
        light: [],
        dark: [],
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

// ─── Footer Variants ─────────────────────────────────────────────────────

const footerVariants = cva(
  ['flex', 'items-center', 'justify-end', 'gap-3', 'p-6', 'pt-0'],
  {
    variants: {
      theme: {
        light: [],
        dark: [],
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

// ─── Close Icon ──────────────────────────────────────────────────────────

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

// ─── Close Button ────────────────────────────────────────────────────────

function CloseButton({
  onClick,
  theme,
}: {
  onClick: () => void;
  theme?: 'dark' | 'light';
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'absolute top-4 right-4 z-10 rounded-aphelion-md p-1.5 transition-colors',
        theme === 'dark'
          ? 'text-dark-text-muted hover:bg-dark-hover hover:text-dark-text-primary'
          : 'text-light-text-muted hover:bg-light-hover hover:text-light-text-primary'
      )}
      aria-label="Close drawer"
    >
      <XIcon />
    </button>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────

export type DrawerSide = 'top' | 'bottom' | 'left' | 'right';

export interface DrawerProps {
  theme?: 'light' | 'dark';
  side?: DrawerSide;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  showClose?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  disableBodyScroll?: boolean;
  className?: string;
  overlayClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

// ─── Animation Configs ───────────────────────────────────────────────────

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
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0 },
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  bottom: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 },
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  left: {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  right: {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Drawer Component ────────────────────────────────────────────────────

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
  {
    theme = 'dark',
    side = 'right',
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
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeOnEscape, open, handleClose]);

  React.useEffect(() => {
    if (!disableBodyScroll) return;

    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open, disableBodyScroll]);

  const anim = drawerAnimation[side];

  const descriptionColor =
    theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary';

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
            aria-labelledby={title ? 'drawer-title' : undefined}
            aria-describedby={subtitle ? 'drawer-subtitle' : undefined}
          >
            {/* Close Button */}
            {showClose && <CloseButton onClick={handleClose} theme={theme} />}

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
                        'mt-3 text-sm leading-relaxed',
                        descriptionColor
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

Drawer.displayName = 'Drawer';

// ─── useDrawer Hook ──────────────────────────────────────────────────────

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

// ─── DrawerTrigger Component ─────────────────────────────────────────────

interface DrawerTriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

function DrawerTrigger({ children, onClick, className }: DrawerTriggerProps) {
  return (
    <div onClick={onClick} className={cn('inline-block', className)}>
      {children}
    </div>
  );
}

// ─── Exports ─────────────────────────────────────────────────────────────

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
