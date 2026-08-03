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
  ['fixed', 'inset-0', 'z-40', 'flex', 'items-center', 'justify-center', 'p-2', 'sm:p-4'],
  {
    variants: {
      theme: {
        light: 'bg-light-background/40',
        dark: 'bg-dark-background/60',
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

const dialogVariants = cva(
  ['relative', 'z-50', 'w-full', 'max-w-[calc(100vw-1rem)]', 'max-h-[min(90dvh,720px)]', 'flex', 'flex-col', 'overflow-hidden', 'border', 'outline-none'],
  {
    variants: {
      theme: {
        light: ['bg-light-card', 'border-light-border'],
        dark: ['bg-dark-card', 'border-dark-border'],
      },
      size: {
        sm: 'sm:max-w-[400px]',
        md: 'sm:max-w-[480px]',
        lg: 'sm:max-w-[560px]',
        xl: 'sm:max-w-[640px]',
        full: 'sm:max-w-[calc(100vw-1rem)]',
      },
      radius: {
        none: 'rounded-aphelion-none',
        sm: 'rounded-aphelion-lg',
        md: 'rounded-aphelion-xl',
        lg: 'rounded-aphelion-2xl',
        xl: 'rounded-aphelion-2xl',
      },
    },
    defaultVariants: {
      theme: 'dark',
      size: 'md',
      radius: 'xl',
    },
  }
);

// ─── Close Icon Button ───────────────────────────────────────────────────

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
        'absolute top-3 right-3 rounded-aphelion-md p-1 transition-colors sm:top-4 sm:right-4',
        theme === 'dark'
          ? 'text-dark-text-muted hover:text-dark-text-primary hover:bg-dark-hover'
          : 'text-light-text-muted hover:text-light-text-primary hover:bg-light-hover'
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
  );
}

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

  const titleColor =
    theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary';
  const descriptionColor =
    theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary';

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
          >
            {/* Close Button */}
            {showClose && <CloseButton onClick={handleClose} theme={theme} />}

            {/* Header */}
            {(title || description) && (
              <div className={cn('p-4 pb-0 sm:p-6 sm:pb-0', headerClassName)}>
                {title && (
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className={cn('text-lg font-semibold wrap-break-word', titleColor)}
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
                      'mt-2 text-sm leading-relaxed wrap-break-word',
                      descriptionColor
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
                className={cn('overflow-y-auto p-4 sm:p-6', bodyClassName)}
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
                  'flex flex-wrap items-center justify-end gap-3 p-4 pt-0 sm:p-6 sm:pt-0',
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

// ─── useDialog Hook ──────────────────────────────────────────────────────

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
