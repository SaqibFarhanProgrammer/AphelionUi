'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, type Transition, type Variants } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

// --- Utility ----------------------------------------------------------------
function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return twMerge(clsx(inputs));
}

// --- Overlay Variants -------------------------------------------------------
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

// --- Sheet Variants ---------------------------------------------------------
const sheetVariants = cva(['fixed', 'z-50', 'flex', 'flex-col'], {
  variants: {
    side: {
      top: ['inset-x-0', 'top-0', 'border-b', 'h-auto', 'max-h-[85vh]'],
      bottom: ['inset-x-0', 'bottom-0', 'border-t', 'h-auto', 'max-h-[85vh]'],
      left: ['inset-y-0', 'left-0', 'border-r', 'w-full', 'sm:max-w-[420px]'],
      right: ['inset-y-0', 'right-0', 'border-l', 'w-full', 'sm:max-w-[420px]'],
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
});

// --- Header Variants --------------------------------------------------------
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

// --- Title Variants ---------------------------------------------------------
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

// --- Subtitle Variants ------------------------------------------------------
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

// --- Body Variants ----------------------------------------------------------
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

// --- Footer Variants --------------------------------------------------------
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

// --- Close Icon -------------------------------------------------------------
function CloseIcon() {
  return (
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
  );
}

// --- Animation objects ------------------------------------------------------
const overlayAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] } as Transition,
};

const sheetAnimation: Record<
  NonNullable<VariantProps<typeof sheetVariants>['side']>,
  {
    initial: Variants['initial'];
    animate: Variants['animate'];
    exit: Variants['exit'];
    transition: Transition;
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

// --- Props type -------------------------------------------------------------
export interface SheetProps {
  theme?: 'light' | 'dark';
  side?: 'top' | 'bottom' | 'left' | 'right';
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

// --- Sheet Component --------------------------------------------------------
const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(function Sheet(
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
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeOnEscape, open]);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const anim = sheetAnimation[side ?? 'right'];

  const isDark = theme === 'dark';
  const descriptionColor = isDark
    ? 'text-dark-text-secondary'
    : 'text-light-text-secondary';
  const closeBtnColor = isDark
    ? 'text-dark-text-muted hover:bg-dark-hover hover:text-dark-text-primary'
    : 'text-light-text-muted hover:bg-light-hover hover:text-light-text-primary';

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
            className={cn(sheetVariants({ side, theme }), className)}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            {showClose && (
              <button
                type="button"
                onClick={handleClose}
                className={cn(
                  'absolute top-4 right-4 z-10 rounded-aphelion-md p-1.5 transition-colors',
                  closeBtnColor
                )}
                aria-label="Close"
              >
                <CloseIcon />
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

Sheet.displayName = 'Sheet';

// --- useSheet hook ----------------------------------------------------------
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
export default Sheet;
