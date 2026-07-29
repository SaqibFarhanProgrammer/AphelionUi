'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Utility ─────────────────────────────────────────────────────────────

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Dismiss Button (inline to avoid missing import) ─────────────────────

function DismissButton({
  onClick,
  theme,
}: {
  onClick?: () => void;
  theme?: 'light' | 'dark';
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'shrink-0 rounded-aphelion-md p-1 transition-colors duration-150',
        theme === 'light'
          ? 'text-light-text-muted hover:text-light-text-primary hover:bg-light-hover'
          : 'text-dark-text-muted hover:text-dark-text-primary hover:bg-dark-hover'
      )}
      aria-label="Dismiss alert"
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

// ─── CVA Variants ────────────────────────────────────────────────────────

const alertVariants = cva(
  ['relative', 'flex', 'items-start', 'gap-3', 'border', 'p-4', 'w-full'],
  {
    variants: {
      theme: {
        light: [],
        dark: [],
      },
      variant: {
        default: [],
        success: [],
        info: [],
        warning: [],
        error: [],
        neutral: [],
      },
      size: {
        sm: ['gap-2.5', 'p-3', 'rounded-aphelion-lg'],
        md: ['gap-3', 'p-4', 'rounded-aphelion-xl'],
        lg: ['gap-4', 'p-5', 'rounded-aphelion-2xl'],
      },
      width: {
        auto: '',
        xs: 'max-w-[280px]',
        sm: 'max-w-[340px]',
        md: 'max-w-[420px]',
        lg: 'max-w-[520px]',
        xl: 'max-w-[640px]',
        full: 'max-w-full',
      },
      height: {
        auto: '',
        sm: 'min-h-[48px]',
        md: 'min-h-[64px]',
        lg: 'min-h-[80px]',
        xl: 'min-h-[100px]',
      },
    },
    compoundVariants: [
      // ─── Light Theme ────────────────────────────────────────────
      {
        theme: 'light',
        variant: 'default',
        className: [
          'border-light-border',
          'bg-light-card',
          'text-light-text-primary',
          'shadow-aphelion-sm',
        ],
      },
      {
        theme: 'light',
        variant: 'success',
        className: [
          'border-light-success-border',
          'bg-light-success-background',
          'text-light-success',
          'shadow-aphelion-sm',
        ],
      },
      {
        theme: 'light',
        variant: 'info',
        className: [
          'border-light-info-border',
          'bg-light-info-background',
          'text-light-info',
          'shadow-aphelion-sm',
        ],
      },
      {
        theme: 'light',
        variant: 'warning',
        className: [
          'border-light-warning-border',
          'bg-light-warning-background',
          'text-light-warning',
          'shadow-aphelion-sm',
        ],
      },
      {
        theme: 'light',
        variant: 'error',
        className: [
          'border-light-destructive-border',
          'bg-light-destructive-background',
          'text-light-destructive',
          'shadow-aphelion-sm',
        ],
      },
      {
        theme: 'light',
        variant: 'neutral',
        className: [
          'border-light-border',
          'bg-light-muted',
          'text-light-text-secondary',
          'shadow-aphelion-sm',
        ],
      },
      // ─── Dark Theme ─────────────────────────────────────────────
      {
        theme: 'dark',
        variant: 'default',
        className: [
          'border-dark-border',
          'bg-dark-card',
          'text-dark-text-primary',
          'shadow-aphelion-sm',
        ],
      },
      {
        theme: 'dark',
        variant: 'success',
        className: [
          'border-dark-success-border',
          'bg-dark-success-background',
          'text-dark-success',
          'shadow-aphelion-sm',
        ],
      },
      {
        theme: 'dark',
        variant: 'info',
        className: [
          'border-dark-info-border',
          'bg-dark-info-background',
          'text-dark-info',
          'shadow-aphelion-sm',
        ],
      },
      {
        theme: 'dark',
        variant: 'warning',
        className: [
          'border-dark-warning-border',
          'bg-dark-warning-background',
          'text-dark-warning',
          'shadow-aphelion-sm',
        ],
      },
      {
        theme: 'dark',
        variant: 'error',
        className: [
          'border-dark-destructive-border',
          'bg-dark-destructive-background',
          'text-dark-destructive',
          'shadow-aphelion-sm',
        ],
      },
      {
        theme: 'dark',
        variant: 'neutral',
        className: [
          'border-dark-border',
          'bg-dark-muted',
          'text-dark-text-secondary',
          'shadow-aphelion-sm',
        ],
      },
    ],
    defaultVariants: {
      theme: 'dark',
      variant: 'default',
      size: 'md',
      width: 'md',
      height: 'auto',
    },
  }
);

const iconVariants = cva(
  [
    'flex',
    'shrink-0',
    'items-center',
    'justify-center',
    'rounded-aphelion-full',
  ],
  {
    variants: {
      size: {
        sm: ['h-5', 'w-5'],
        md: ['h-6', 'w-6'],
        lg: ['h-7', 'w-7'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

// ─── Icon Components ─────────────────────────────────────────────────────

function SuccessIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );
}

function ErrorIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function NeutralIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────

export type AlertVariant =
  | 'default'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'neutral';

export interface AlertProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  actions?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export interface AlertContainerProps {
  children: React.ReactNode;
  position?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center';
  className?: string;
}

// ─── Animation Variants ──────────────────────────────────────────────────

const topAnimation = {
  hidden: { opacity: 0, y: -20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.96,
    transition: { duration: 0.2 },
  },
};

const bottomAnimation = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.96,
    transition: { duration: 0.2 },
  },
};

const leftAnimation = {
  hidden: { opacity: 0, x: -20, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  },
  exit: {
    opacity: 0,
    x: -10,
    scale: 0.96,
    transition: { duration: 0.2 },
  },
};

const rightAnimation = {
  hidden: { opacity: 0, x: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  },
  exit: {
    opacity: 0,
    x: 10,
    scale: 0.96,
    transition: { duration: 0.2 },
  },
};

function getAnimationByPosition(position: string) {
  if (position.includes('bottom')) return bottomAnimation;
  if (position.includes('left')) return leftAnimation;
  if (position.includes('right')) return rightAnimation;
  return topAnimation;
}

// ─── Alert Component ─────────────────────────────────────────────────────

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  {
    theme = 'dark',
    variant = 'default',
    size = 'md',
    width = 'md',
    height = 'auto',
    title,
    description,
    icon,
    dismissible = false,
    onDismiss,
    actions,
    children,
    className,
    iconClassName,
    titleClassName,
    descriptionClassName,
    ...props
  },
  ref
) {
  const iconBgColor =
    theme === 'light'
      ? {
          success: 'bg-light-success-background',
          info: 'bg-light-info-background',
          warning: 'bg-light-warning-background',
          error: 'bg-light-destructive-background',
          neutral: 'bg-light-muted',
          default: '',
        }
      : {
          success: 'bg-dark-success-background',
          info: 'bg-dark-info-background',
          warning: 'bg-dark-warning-background',
          error: 'bg-dark-destructive-background',
          neutral: 'bg-dark-muted',
          default: '',
        };

  const iconTextColor =
    theme === 'light'
      ? {
          success: 'text-light-success',
          info: 'text-light-info',
          warning: 'text-light-warning',
          error: 'text-light-destructive',
          neutral: 'text-light-text-secondary',
          default: '',
        }
      : {
          success: 'text-dark-success',
          info: 'text-dark-info',
          warning: 'text-dark-warning',
          error: 'text-dark-destructive',
          neutral: 'text-dark-text-secondary',
          default: '',
        };

  const variantIcons: Record<string, React.ReactNode> = {
    success: <SuccessIcon className="h-3.5 w-3.5" />,
    info: <InfoIcon className="h-3.5 w-3.5" />,
    warning: <WarningIcon className="h-3.5 w-3.5" />,
    error: <ErrorIcon className="h-3.5 w-3.5" />,
    neutral: <NeutralIcon className="h-3.5 w-3.5" />,
    default: null,
  };

  const defaultIcon = variantIcons[variant || 'default'];
  const showIcon = icon !== undefined ? icon : defaultIcon;

  const sizeTextMap = {
    sm: { title: 'text-xs', desc: 'text-xs' },
    md: { title: 'text-sm', desc: 'text-sm' },
    lg: { title: 'text-base', desc: 'text-sm' },
  };

  const textSize = sizeTextMap[size ?? 'md'];

  const descriptionTextColor =
    theme === 'light'
      ? 'text-light-text-secondary'
      : 'text-dark-text-secondary';

  return (
    <div
      ref={ref}
      className={cn(
        alertVariants({ theme, variant, size, width, height }),
        className
      )}
      role="alert"
      {...props}
    >
      {/* Icon */}
      {showIcon && (
        <span
          className={cn(
            iconVariants({ size: size === 'lg' ? 'lg' : 'md' }),
            iconBgColor[variant || 'default'],
            iconTextColor[variant || 'default'],
            iconClassName
          )}
        >
          {showIcon}
        </span>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <h4
            className={cn(
              textSize.title,
              'font-semibold leading-tight',
              titleClassName
            )}
          >
            {title}
          </h4>
        )}
        {(description || children) && (
          <p
            className={cn(
              textSize.desc,
              'mt-1 leading-relaxed',
              descriptionTextColor,
              descriptionClassName
            )}
          >
            {description}
            {children}
          </p>
        )}
        {actions && (
          <div className="flex items-center gap-4 mt-3">{actions}</div>
        )}
      </div>

      {/* Dismiss */}
      {dismissible && <DismissButton onClick={onDismiss} theme={theme} />}
    </div>
  );
});

Alert.displayName = 'Alert';

// ─── Alert Container ─────────────────────────────────────────────────────

const AlertContainer = React.forwardRef<HTMLDivElement, AlertContainerProps>(
  function AlertContainer(
    { children, position = 'top-right', className },
    ref
  ) {
    const positionClasses = {
      'top-left': 'top-4 left-4',
      'top-right': 'top-4 right-4',
      'top-center': 'top-4 left-1/2 -translate-x-1/2',
      'bottom-left': 'bottom-4 left-4',
      'bottom-right': 'bottom-4 right-4',
      'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
    };

    const alignItems = position.includes('left')
      ? 'items-start'
      : position.includes('right')
        ? 'items-end'
        : 'items-center';

    return (
      <div
        ref={ref}
        className={cn(
          'fixed z-50 flex flex-col gap-2 pointer-events-none',
          positionClasses[position],
          alignItems,
          className
        )}
      >
        <AnimatePresence mode="popLayout">
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return null;
            return (
              <motion.div
                key={child.key || index}
                layout
                variants={getAnimationByPosition(position)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="pointer-events-auto"
              >
                {child}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    );
  }
);

AlertContainer.displayName = 'AlertContainer';

// ─── useAlert Hook ───────────────────────────────────────────────────────

export interface AlertItem {
  id: string;
  title?: string;
  description?: string;
  variant?: AlertVariant;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  dismissible?: boolean;
  actions?: React.ReactNode;
  duration?: number;
}

export function useAlert(
  position: AlertContainerProps['position'] = 'top-right'
) {
  const [alerts, setAlerts] = React.useState<AlertItem[]>([]);

  const remove = React.useCallback((id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const add = React.useCallback(
    (alert: Omit<AlertItem, 'id'>) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newAlert = {
        ...alert,
        id,
        dismissible: alert.dismissible !== false,
      };
      setAlerts((prev) => [...prev, newAlert]);

      if (alert.duration && alert.duration > 0) {
        setTimeout(() => {
          remove(id);
        }, alert.duration);
      }

      return id;
    },
    [remove]
  );

  const clear = React.useCallback(() => {
    setAlerts([]);
  }, []);

  const AlertComponent = React.useCallback(() => {
    const alignItems = position?.includes('left')
      ? 'items-start'
      : position?.includes('right')
        ? 'items-end'
        : 'items-center';

    const positionClasses = {
      'top-left': 'top-4 left-4',
      'top-right': 'top-4 right-4',
      'top-center': 'top-4 left-1/2 -translate-x-1/2',
      'bottom-left': 'bottom-4 left-4',
      'bottom-right': 'bottom-4 right-4',
      'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
    };

    return (
      <div
        className={cn(
          'fixed z-50 flex flex-col gap-2 pointer-events-none',
          positionClasses[position || 'top-right'],
          alignItems
        )}
      >
        <AnimatePresence mode="popLayout">
          {alerts.map((alert) => (
            <motion.div
              key={alert.id}
              layout
              variants={getAnimationByPosition(position || 'top-right')}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="pointer-events-auto"
            >
              <Alert
                variant={alert.variant || 'info'}
                theme={alert.theme || 'dark'}
                size={alert.size || 'md'}
                title={alert.title}
                description={alert.description}
                dismissible={alert.dismissible}
                onDismiss={() => remove(alert.id)}
                actions={alert.actions}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }, [alerts, position, remove]);

  return { alerts, add, remove, clear, AlertComponent };
}

export default Alert;
export { Alert, AlertContainer };
