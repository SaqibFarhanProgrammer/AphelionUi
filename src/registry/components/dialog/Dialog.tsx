'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── CVA ─────────────────────────────────────────────────────────────────

const overlayVariants = cva(
  ['fixed', 'inset-0', 'z-40', 'flex', 'items-center', 'justify-center', 'p-4'],
  {
    variants: {
      theme: {
        light: 'bg-black/40',
        dark: 'bg-black/60',
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

const dialogVariants = cva(
  ['relative', 'z-50', 'w-full', 'border', 'outline-none', 'overflow-hidden'],
  {
    variants: {
      theme: {
        light: ['bg-white', 'border-neutral-200'],
        dark: ['bg-neutral-950', 'border-neutral-800'],
      },
      size: {
        sm: 'max-w-[400px]',
        md: 'max-w-[480px]',
        lg: 'max-w-[560px]',
        xl: 'max-w-[640px]',
        full: 'max-w-full',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-lg',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        xl: 'rounded-3xl',
      },
    },
    defaultVariants: {
      theme: 'dark',
      size: 'md',
      radius: 'xl',
    },
  }
);

// ─── Types ───────────────────────────────────────────────────────────────

export interface DialogProps
  extends
    VariantProps<typeof dialogVariants>,
    VariantProps<typeof overlayVariants> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
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
}

// ─── Dialog Component ────────────────────────────────────────────────────

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(function Dialog(
  {
    theme = 'dark',
    size = 'md',
    radius = 'xl',
    open = false,
    onOpenChange,
    title,
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
  },
  ref
) {
  const handleClose = () => onOpenChange?.(false);

  const handleOverlayClick = (e: React.MouseEvent) => {
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(overlayVariants({ theme }), overlayClassName)}
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn(dialogVariants({ theme, size, radius }), className)}
            role="dialog"
            aria-modal="true"
            style={{ fontFamily: 'sans-serif' }}
          >
            {/* Close Button */}
            {showClose && (
              <button
                type="button"
                onClick={handleClose}
                className={cn(
                  'absolute top-4 right-4 rounded-md p-1 transition-colors',
                  theme === 'dark'
                    ? 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800'
                    : 'text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100'
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
            {(title || description) && (
              <div className={cn('p-6 pb-0', headerClassName)}>
                {title && (
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className={cn(
                      'text-lg font-semibold',
                      theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    )}
                  >
                    {title}
                  </motion.h2>
                )}
                {description && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className={cn(
                      'mt-2 text-sm leading-relaxed',
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    )}
                  >
                    {description}
                  </motion.p>
                )}
              </div>
            )}

            {/* Body */}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className={cn('p-6', bodyClassName)}
              >
                {children}
              </motion.div>
            )}

            {/* Footer */}
            {footer && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className={cn(
                  'flex items-center justify-end gap-3 p-6 pt-0',
                  footerClassName
                )}
              >
                {footer}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

Dialog.displayName = 'Dialog';

// ─── useDialog Hook ────────────────────────────────────────────────────────

export function useDialog(defaultOpen = false) {
  const [open, setOpen] = React.useState(defaultOpen);
  return {
    open,
    onOpenChange: setOpen,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
    onToggle: () => setOpen((p) => !p),
  };
}

export default Dialog;
export { Dialog };
