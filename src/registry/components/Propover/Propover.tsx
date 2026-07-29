'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Popover Variants ────────────────────────────────────────────────────

const popoverVariants = cva(
  ['relative', 'inline-flex', 'items-center', 'justify-center'],
  {
    variants: {
      theme: {
        dark: '',
        light: '',
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

const contentVariants = cva(
  [
    'absolute',
    'z-50',
    'w-max',
    'min-w-[200px]',
    'max-w-[360px]',
    'rounded-aphelion-xl',
    'border',
    'outline-none',
    'transition-all',
    'duration-200',
  ],
  {
    variants: {
      theme: {
        dark: [
          'bg-dark-card',
          'border-dark-border',
          'text-dark-text-primary',
          'shadow-aphelion-lg',
        ],
        light: [
          'bg-light-card',
          'border-light-border',
          'text-light-text-primary',
          'shadow-aphelion-lg',
        ],
      },
      size: {
        sm: 'p-3 text-sm',
        md: 'p-4 text-sm',
        lg: 'p-5 text-base',
      },
      hasArrow: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      theme: 'dark',
      size: 'md',
      hasArrow: false,
    },
  }
);

const triggerVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'font-medium',
    'transition-all',
    'duration-150',
    'outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: '',
        outline: 'border',
        ghost: '',
        solid: '',
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-aphelion-md',
        md: 'h-9 px-4 text-sm rounded-aphelion-lg',
        lg: 'h-10 px-5 text-sm rounded-aphelion-lg',
      },
      theme: {
        dark: '',
        light: '',
      },
    },
    compoundVariants: [
      {
        theme: 'dark',
        variant: 'default',
        className:
          'bg-dark-muted text-dark-text-primary hover:bg-dark-hover border border-dark-border focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'outline',
        className:
          'bg-transparent text-dark-text-primary hover:bg-dark-hover border border-dark-border-strong focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        className:
          'bg-transparent text-dark-text-primary hover:bg-dark-hover border border-transparent focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'dark',
        variant: 'solid',
        className:
          'bg-dark-primary text-dark-primary-foreground hover:bg-dark-primary-hover border border-transparent focus-visible:ring-dark-focus-ring',
      },
      {
        theme: 'light',
        variant: 'default',
        className:
          'bg-light-muted text-light-text-primary hover:bg-light-hover border border-light-border focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'outline',
        className:
          'bg-transparent text-light-text-primary hover:bg-light-hover border border-light-border-strong focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'ghost',
        className:
          'bg-transparent text-light-text-primary hover:bg-light-hover border border-transparent focus-visible:ring-light-focus-ring',
      },
      {
        theme: 'light',
        variant: 'solid',
        className:
          'bg-light-primary text-light-primary-foreground hover:bg-light-primary-hover border border-transparent focus-visible:ring-light-focus-ring',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      theme: 'dark',
    },
  }
);

const arrowVariants = cva(['absolute', 'w-3', 'h-3', 'rotate-45'], {
  variants: {
    theme: {
      dark: 'bg-dark-card border-dark-border',
      light: 'bg-light-card border-light-border',
    },
    side: {
      top: 'border-b border-r',
      bottom: 'border-t border-l',
      left: 'border-t border-r',
      right: 'border-b border-l',
    },
  },
  defaultVariants: {
    theme: 'dark',
    side: 'top',
  },
});

// ─── Types ───────────────────────────────────────────────────────────────

export type PopoverSide = 'top' | 'bottom' | 'left' | 'right';
export type PopoverAlign = 'start' | 'center' | 'end';

export interface PopoverProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof popoverVariants>,
    VariantProps<typeof contentVariants> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  triggerVariant?: 'default' | 'outline' | 'ghost' | 'solid';
  triggerSize?: 'sm' | 'md' | 'lg';
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

// ─── Positioning Helpers ─────────────────────────────────────────────────

function getPopoverStyles(
  side: PopoverSide,
  align: PopoverAlign,
  sideOffset: number,
  alignOffset: number,
  hasArrow: boolean
): React.CSSProperties {
  const arrowSize = hasArrow ? 6 : 0;
  const offset = sideOffset + arrowSize;

  const base: React.CSSProperties = {
    position: 'absolute',
  };

  switch (side) {
    case 'top':
      base.bottom = `calc(100% + ${offset}px)`;
      if (align === 'start') base.left = alignOffset;
      if (align === 'center') base.left = '50%';
      if (align === 'end') base.right = alignOffset;
      break;
    case 'bottom':
      base.top = `calc(100% + ${offset}px)`;
      if (align === 'start') base.left = alignOffset;
      if (align === 'center') base.left = '50%';
      if (align === 'end') base.right = alignOffset;
      break;
    case 'left':
      base.right = `calc(100% + ${offset}px)`;
      if (align === 'start') base.top = alignOffset;
      if (align === 'center') base.top = '50%';
      if (align === 'end') base.bottom = alignOffset;
      break;
    case 'right':
      base.left = `calc(100% + ${offset}px)`;
      if (align === 'start') base.top = alignOffset;
      if (align === 'center') base.top = '50%';
      if (align === 'end') base.bottom = alignOffset;
      break;
  }

  if (align === 'center') {
    if (side === 'top' || side === 'bottom') {
      base.transform = 'translateX(-50%)';
    } else {
      base.transform = 'translateY(-50%)';
    }
  }

  return base;
}

function getArrowStyles(
  side: PopoverSide,
  align: PopoverAlign,
  _sideOffset: number
): React.CSSProperties {
  const base: React.CSSProperties = {
    position: 'absolute',
    width: 12,
    height: 12,
    transform: 'rotate(45deg)',
  };

  switch (side) {
    case 'top':
      base.bottom = -6;
      if (align === 'start') base.left = 20;
      if (align === 'center') base.left = '50%';
      if (align === 'end') base.right = 20;
      break;
    case 'bottom':
      base.top = -6;
      if (align === 'start') base.left = 20;
      if (align === 'center') base.left = '50%';
      if (align === 'end') base.right = 20;
      break;
    case 'left':
      base.right = -6;
      if (align === 'start') base.top = 16;
      if (align === 'center') base.top = '50%';
      if (align === 'end') base.bottom = 16;
      break;
    case 'right':
      base.left = -6;
      if (align === 'start') base.top = 16;
      if (align === 'center') base.top = '50%';
      if (align === 'end') base.bottom = 16;
      break;
  }

  if (align === 'center') {
    if (side === 'top' || side === 'bottom') {
      base.transform = 'rotate(45deg) translateX(-50%)';
    } else {
      base.transform = 'rotate(45deg) translateY(-50%)';
    }
  }

  return base;
}

// ─── Inline Button ───────────────────────────────────────────────────────

function InlineButton({
  onClick,
  disabled,
  className,
  children,
  ariaLabel,
  ariaExpanded,
  ariaHasPopup,
}: {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaHasPopup?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHasPopup as any}
    >
      {children}
    </button>
  );
}

// ─── Close Icon ──────────────────────────────────────────────────────────

function CloseIcon() {
  return (
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
  );
}

// ─── Popover Component ───────────────────────────────────────────────────

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(function Popover(
  {
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    trigger,
    triggerVariant = 'default',
    triggerSize = 'md',
    triggerText,
    side = 'bottom',
    align = 'center',
    sideOffset = 8,
    alignOffset = 0,
    hasArrow = false,
    closeOnClickOutside = true,
    closeOnEscape = true,
    disabled = false,
    theme = 'dark',
    size = 'md',
    className,
    contentClassName,
    triggerClassName,
    arrowClassName,
    children,
    ...props
  },
  ref
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
  const close = () => handleOpenChange(false);

  React.useEffect(() => {
    if (!closeOnClickOutside || !isOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        close();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, closeOnClickOutside]);

  React.useEffect(() => {
    if (!closeOnEscape || !isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeOnEscape]);

  React.useEffect(() => {
    if (!isOpen) return;
    const content = contentRef.current;
    if (!content) return;
    const focusableElements = content.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
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
    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  const popoverStyles = getPopoverStyles(
    side,
    align,
    sideOffset,
    alignOffset,
    hasArrow
  );
  const arrowStyles = getArrowStyles(side, align, sideOffset);

  const contentVariants_fr = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: side === 'bottom' ? -4 : side === 'top' ? 4 : 0,
      x: side === 'right' ? -4 : side === 'left' ? 4 : 0,
    },
    visible: { opacity: 1, scale: 1, y: 0, x: 0 },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: side === 'bottom' ? -4 : side === 'top' ? 4 : 0,
      x: side === 'right' ? -4 : side === 'left' ? 4 : 0,
    },
  };

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        if (typeof ref === 'function') ref(node);
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
        <InlineButton
          onClick={toggle}
          disabled={disabled}
          className={cn(
            triggerVariants({
              variant: triggerVariant,
              size: triggerSize,
              theme,
            }),
            triggerClassName
          )}
          ariaExpanded={isOpen}
          ariaHasPopup="dialog"
        >
          {triggerText || 'Open popover'}
        </InlineButton>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={contentRef}
            style={popoverStyles}
            className={cn(
              contentVariants({ theme, size, hasArrow }),
              contentClassName
            )}
            variants={contentVariants_fr}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
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

Popover.displayName = 'Popover';

// ─── Popover Header ──────────────────────────────────────────────────────

interface PopoverHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  theme?: 'dark' | 'light';
  showClose?: boolean;
  onClose?: () => void;
  className?: string;
}

const PopoverHeader = React.forwardRef<HTMLDivElement, PopoverHeaderProps>(
  function PopoverHeader(
    {
      title,
      description,
      theme = 'dark',
      showClose = false,
      onClose,
      className,
      children,
      ...props
    },
    ref
  ) {
    const borderColor =
      theme === 'dark' ? 'border-dark-divider' : 'border-light-divider';
    const titleColor =
      theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary';
    const descColor =
      theme === 'dark' ? 'text-dark-text-muted' : 'text-light-text-muted';
    const closeBtnColor =
      theme === 'dark'
        ? 'text-dark-text-muted hover:bg-dark-hover hover:text-dark-text-primary'
        : 'text-light-text-muted hover:bg-light-hover hover:text-light-text-primary';

    return (
      <div
        ref={ref}
        className={cn(
          'mb-3 flex items-start justify-between gap-3 pb-3 border-b',
          borderColor,
          className
        )}
        {...props}
      >
        <div className="min-w-0 flex-1">
          {title && (
            <h3
              className={cn('text-sm leading-tight font-semibold', titleColor)}
            >
              {title}
            </h3>
          )}
          {description && (
            <p className={cn('mt-1 text-xs leading-relaxed', descColor)}>
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
              'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-aphelion-md transition-colors',
              closeBtnColor
            )}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  }
);

PopoverHeader.displayName = 'PopoverHeader';

// ─── Popover Body ────────────────────────────────────────────────────────

interface PopoverBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const PopoverBody = React.forwardRef<HTMLDivElement, PopoverBodyProps>(
  function PopoverBody({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={cn('space-y-3', className)} {...props}>
        {children}
      </div>
    );
  }
);

PopoverBody.displayName = 'PopoverBody';

// ─── Popover Footer ──────────────────────────────────────────────────────

interface PopoverFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: 'dark' | 'light';
  className?: string;
}

const PopoverFooter = React.forwardRef<HTMLDivElement, PopoverFooterProps>(
  function PopoverFooter(
    { theme = 'dark', className, children, ...props },
    ref
  ) {
    const borderColor =
      theme === 'dark' ? 'border-dark-divider' : 'border-light-divider';
    return (
      <div
        ref={ref}
        className={cn(
          'mt-3 flex items-center justify-end gap-2 pt-3 border-t',
          borderColor,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PopoverFooter.displayName = 'PopoverFooter';

// ─── Popover Button ──────────────────────────────────────────────────────

interface PopoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
  className?: string;
}

const PopoverButton = React.forwardRef<HTMLButtonElement, PopoverButtonProps>(
  function PopoverButton(
    {
      variant = 'default',
      size = 'md',
      theme = 'dark',
      className,
      children,
      ...props
    },
    ref
  ) {
    const isDark = theme === 'dark';
    const variantClasses: Record<string, string> = {
      default: isDark
        ? 'bg-dark-muted text-dark-text-primary hover:bg-dark-hover border border-dark-border focus-visible:ring-dark-focus-ring'
        : 'bg-light-muted text-light-text-primary hover:bg-light-hover border border-light-border focus-visible:ring-light-focus-ring',
      outline: isDark
        ? 'bg-transparent text-dark-text-primary hover:bg-dark-hover border border-dark-border-strong focus-visible:ring-dark-focus-ring'
        : 'bg-transparent text-light-text-primary hover:bg-light-hover border border-light-border-strong focus-visible:ring-light-focus-ring',
      ghost: isDark
        ? 'bg-transparent text-dark-text-primary hover:bg-dark-hover border border-transparent focus-visible:ring-dark-focus-ring'
        : 'bg-transparent text-light-text-primary hover:bg-light-hover border border-transparent focus-visible:ring-light-focus-ring',
      solid: isDark
        ? 'bg-dark-primary text-dark-primary-foreground hover:bg-dark-primary-hover border border-transparent focus-visible:ring-dark-focus-ring'
        : 'bg-light-primary text-light-primary-foreground hover:bg-light-primary-hover border border-transparent focus-visible:ring-light-focus-ring',
    };
    const sizeClasses: Record<string, string> = {
      sm: 'h-7 px-2.5 text-xs rounded-aphelion-md',
      md: 'h-8 px-3.5 text-xs rounded-aphelion-md',
      lg: 'h-9 px-4 text-sm rounded-aphelion-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-150 outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PopoverButton.displayName = 'PopoverButton';

// ─── Popover Checkbox ────────────────────────────────────────────────────

interface PopoverCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  theme?: 'dark' | 'light';
  className?: string;
}

function PopoverCheckbox({
  checked,
  onChange,
  label,
  theme = 'dark',
  className,
}: PopoverCheckboxProps) {
  const isDark = theme === 'dark';
  const checkboxUnchecked = isDark
    ? 'border-dark-border bg-transparent hover:border-dark-border-strong'
    : 'border-light-border bg-transparent hover:border-light-border-strong';
  const checkboxChecked = isDark
    ? 'border-dark-primary bg-dark-primary text-dark-primary-foreground'
    : 'border-light-primary bg-light-primary text-light-primary-foreground';
  const labelColor = isDark
    ? 'text-dark-text-secondary group-hover:text-dark-text-primary'
    : 'text-light-text-secondary group-hover:text-light-text-primary';

  return (
    <label
      className={cn(
        'group inline-flex cursor-pointer items-center gap-2.5 select-none',
        className
      )}
    >
      <button
        type="button"
        onClick={() => onChange?.(!checked)}
        className={cn(
          'inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-aphelion-xs border transition-all duration-150',
          checked ? checkboxChecked : checkboxUnchecked
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
        <span className={cn('text-sm transition-colors', labelColor)}>
          {label}
        </span>
      )}
    </label>
  );
}

// ─── Popover Notification ────────────────────────────────────────────────

interface PopoverNotificationProps {
  avatar?: string;
  avatarFallback?: string;
  name: string;
  action: string;
  target: string;
  time: string;
  unread?: boolean;
  theme?: 'dark' | 'light';
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
  theme = 'dark',
  onClick,
  className,
}: PopoverNotificationProps) {
  const [imgError, setImgError] = React.useState(false);
  const isDark = theme === 'dark';

  return (
    <div
      onClick={onClick}
      className={cn(
        '-mx-1 flex cursor-pointer items-start gap-3 rounded-aphelion-lg px-1 py-3 transition-colors',
        isDark ? 'hover:bg-dark-hover' : 'hover:bg-light-hover',
        className
      )}
    >
      <div
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-aphelion-full text-xs font-medium',
          isDark
            ? 'bg-dark-muted text-dark-text-secondary'
            : 'bg-light-muted text-light-text-secondary'
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
              isDark
                ? 'font-medium text-dark-text-primary'
                : 'font-medium text-light-text-primary'
            }
          >
            {name}
          </span>{' '}
          <span
            className={
              isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
            }
          >
            {action}
          </span>{' '}
          <span
            className={
              isDark
                ? 'font-medium text-dark-text-primary'
                : 'font-medium text-light-text-primary'
            }
          >
            {target}
          </span>
        </p>
        <p
          className={cn(
            'mt-0.5 text-xs',
            isDark ? 'text-dark-text-muted' : 'text-light-text-muted'
          )}
        >
          {time}
        </p>
      </div>
      {unread && (
        <span
          className={cn(
            'mt-2 h-2 w-2 shrink-0 rounded-aphelion-full',
            isDark ? 'bg-dark-primary' : 'bg-light-primary'
          )}
        />
      )}
    </div>
  );
}

// ─── Popover Share ───────────────────────────────────────────────────────

interface PopoverShareProps {
  url?: string;
  onCopy?: () => void;
  theme?: 'dark' | 'light';
  className?: string;
}

function PopoverShare({
  url = 'https://example.com',
  onCopy,
  theme = 'dark',
  className,
}: PopoverShareProps) {
  const [copied, setCopied] = React.useState(false);
  const isDark = theme === 'dark';

  const handleCopy = () => {
    if (url) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        onCopy?.();
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const iconBtnClasses = cn(
    'inline-flex h-10 w-10 items-center justify-center rounded-aphelion-lg border transition-all duration-150',
    isDark
      ? 'border-dark-border text-dark-text-secondary hover:text-dark-text-primary hover:bg-dark-hover hover:border-dark-border-strong'
      : 'border-light-border text-light-text-secondary hover:text-light-text-primary hover:bg-light-hover hover:border-light-border-strong'
  );

  const urlBarClasses = cn(
    'flex items-center gap-2 rounded-aphelion-lg border px-3 py-2.5',
    isDark
      ? 'border-dark-border bg-dark-muted'
      : 'border-light-border bg-light-muted'
  );

  const copyBtnClasses = cn(
    'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-aphelion-md transition-colors',
    isDark
      ? 'text-dark-text-muted hover:bg-dark-hover hover:text-dark-text-primary'
      : 'text-light-text-muted hover:bg-light-hover hover:text-light-text-primary'
  );

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center justify-center gap-3">
        {['embed', 'x', 'facebook', 'email'].map((type) => (
          <button
            key={type}
            type="button"
            className={iconBtnClasses}
            aria-label={`Share via ${type}`}
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
              {type === 'embed' && (
                <>
                  <path d="M16 18l6-6-6-6" />
                  <path d="M8 6l-6 6 6 6" />
                </>
              )}
              {type === 'x' && (
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="currentColor"
                />
              )}
              {type === 'facebook' && (
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  fill="currentColor"
                />
              )}
              {type === 'email' && (
                <>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </>
              )}
            </svg>
          </button>
        ))}
      </div>
      <div className={urlBarClasses}>
        <span
          className={cn(
            'flex-1 truncate text-sm',
            isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
          )}
        >
          {url}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className={copyBtnClasses}
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

// ─── Popover Stepper ─────────────────────────────────────────────────────

interface PopoverStepperProps {
  steps: { title: string; description: string }[];
  currentStep: number;
  onNext?: () => void;
  onPrev?: () => void;
  onFinish?: () => void;
  theme?: 'dark' | 'light';
  className?: string;
}

function PopoverStepper({
  steps,
  currentStep,
  onNext,
  onPrev,
  onFinish,
  theme = 'dark',
  className,
}: PopoverStepperProps) {
  const step = steps[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;
  const isDark = theme === 'dark';

  return (
    <div className={cn('space-y-4', className)}>
      <div>
        <h4
          className={cn(
            'text-sm font-semibold',
            isDark ? 'text-dark-text-primary' : 'text-light-text-primary'
          )}
        >
          {step.title}
        </h4>
        <p
          className={cn(
            'mt-1.5 text-xs leading-relaxed',
            isDark ? 'text-dark-text-muted' : 'text-light-text-muted'
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
                'h-1.5 rounded-aphelion-full transition-all duration-300',
                i === currentStep
                  ? isDark
                    ? 'w-4 bg-dark-primary'
                    : 'w-4 bg-light-primary'
                  : i < currentStep
                    ? isDark
                      ? 'w-1.5 bg-dark-text-secondary'
                      : 'w-1.5 bg-light-text-secondary'
                    : isDark
                      ? 'w-1.5 bg-dark-muted'
                      : 'w-1.5 bg-light-muted'
              )}
            />
          ))}
        </div>
        <span
          className={cn(
            'text-xs tabular-nums',
            isDark ? 'text-dark-text-muted' : 'text-light-text-muted'
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

// ─── Popover Form Row ────────────────────────────────────────────────────

interface PopoverFormRowProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  theme?: 'dark' | 'light';
  className?: string;
}

function PopoverFormRow({
  label,
  value,
  onChange,
  placeholder,
  theme = 'dark',
  className,
}: PopoverFormRowProps) {
  const isDark = theme === 'dark';
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <label
        className={cn(
          'w-[100px] shrink-0 text-sm font-medium',
          isDark ? 'text-dark-text-primary' : 'text-light-text-primary'
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
          'h-9 min-w-0 flex-1 rounded-aphelion-lg border px-3 text-sm transition-all duration-150 outline-none',
          isDark
            ? 'border-dark-input-border bg-dark-muted text-dark-text-primary placeholder:text-dark-text-muted focus:border-dark-border-strong focus:ring-1 focus:ring-dark-focus-ring'
            : 'border-light-input-border bg-light-muted text-light-text-primary placeholder:text-light-text-muted focus:border-light-border-strong focus:ring-1 focus:ring-light-focus-ring'
        )}
      />
    </div>
  );
}

// ─── Popover Divider ─────────────────────────────────────────────────────

interface PopoverDividerProps {
  theme?: 'dark' | 'light';
  className?: string;
}

function PopoverDivider({ theme = 'dark', className }: PopoverDividerProps) {
  const dividerColor =
    theme === 'dark' ? 'bg-dark-divider' : 'bg-light-divider';
  return <div className={cn('my-3 h-px w-full', dividerColor, className)} />;
}

// ─── usePopover Hook ─────────────────────────────────────────────────────

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

// ─── Exports ─────────────────────────────────────────────────────────────

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
