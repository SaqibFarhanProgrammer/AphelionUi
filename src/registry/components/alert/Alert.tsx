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

// ─── CVA Variants ────────────────────────────────────────────────────────

const alertVariants = cva(
  [
    'relative',
    'flex',
    'items-start',
    'gap-3',
    'rounded-xl',
    'border',
    'p-4',
    'shadow-sm',
    'w-full',
  ],
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
        sm: ['gap-2.5', 'p-3', 'rounded-lg'],
        md: ['gap-3', 'p-4', 'rounded-xl'],
        lg: ['gap-4', 'p-5', 'rounded-2xl'],
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
        className: ['border-neutral-300', 'bg-white', 'text-neutral-800'],
      },
      {
        theme: 'light',
        variant: 'success',
        className: ['border-emerald-300', 'bg-emerald-50', 'text-emerald-900'],
      },
      {
        theme: 'light',
        variant: 'info',
        className: ['border-blue-300', 'bg-blue-50', 'text-blue-900'],
      },
      {
        theme: 'light',
        variant: 'warning',
        className: ['border-amber-300', 'bg-amber-50', 'text-amber-900'],
      },
      {
        theme: 'light',
        variant: 'error',
        className: ['border-red-300', 'bg-red-50', 'text-red-900'],
      },
      {
        theme: 'light',
        variant: 'neutral',
        className: ['border-neutral-300', 'bg-neutral-100', 'text-neutral-800'],
      },
      // ─── Dark Theme ─────────────────────────────────────────────
      {
        theme: 'dark',
        variant: 'default',
        className: ['border-neutral-800', 'bg-neutral-900', 'text-white'],
      },
      {
        theme: 'dark',
        variant: 'success',
        className: [
          'border-emerald-900/50',
          'bg-emerald-950/20',
          'text-emerald-400',
        ],
      },
      {
        theme: 'dark',
        variant: 'info',
        className: ['border-blue-900/50', 'bg-blue-950/20', 'text-blue-400'],
      },
      {
        theme: 'dark',
        variant: 'warning',
        className: ['border-amber-900/50', 'bg-amber-950/20', 'text-amber-400'],
      },
      {
        theme: 'dark',
        variant: 'error',
        className: ['border-red-900/50', 'bg-red-950/20', 'text-red-400'],
      },
      {
        theme: 'dark',
        variant: 'neutral',
        className: ['border-neutral-800', 'bg-neutral-900', 'text-neutral-300'],
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
  ['flex', 'shrink-0', 'items-center', 'justify-center', 'rounded-full'],
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

// ─── Animation Variants (FIXED – Position-based) ────────────────────────

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
  // Default: top positions
  return topAnimation;
}

// ─── Alert Component (NO animation wrapper – animation handled by parent) ──

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
  const variantIcons: Record<
    string,
    { icon: React.ReactNode; bg: string; color: string }
  > = {
    success: {
      icon: <SuccessIcon className="h-3.5 w-3.5" />,
      bg: theme === 'light' ? 'bg-emerald-100' : 'bg-emerald-900/50',
      color: theme === 'light' ? 'text-emerald-700' : 'text-emerald-400',
    },
    info: {
      icon: <InfoIcon className="h-3.5 w-3.5" />,
      bg: theme === 'light' ? 'bg-blue-100' : 'bg-blue-900/50',
      color: theme === 'light' ? 'text-blue-700' : 'text-blue-400',
    },
    warning: {
      icon: <WarningIcon className="h-3.5 w-3.5" />,
      bg: theme === 'light' ? 'bg-amber-100' : 'bg-amber-900/50',
      color: theme === 'light' ? 'text-amber-700' : 'text-amber-400',
    },
    error: {
      icon: <ErrorIcon className="h-3.5 w-3.5" />,
      bg: theme === 'light' ? 'bg-red-100' : 'bg-red-900/50',
      color: theme === 'light' ? 'text-red-700' : 'text-red-400',
    },
    neutral: {
      icon: <NeutralIcon className="h-3.5 w-3.5" />,
      bg: theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800',
      color: theme === 'light' ? 'text-neutral-700' : 'text-neutral-400',
    },
    default: {
      icon: null,
      bg: '',
      color: '',
    },
  };

  const variantConfig = variantIcons[variant] || variantIcons.default;
  const showIcon = icon !== undefined ? icon : variantConfig.icon;

  const sizeTextMap = {
    sm: { title: 'text-xs', desc: 'text-xs' },
    md: { title: 'text-sm', desc: 'text-sm' },
    lg: { title: 'text-base', desc: 'text-sm' },
  };

  const textSize = sizeTextMap[size ?? 'md'];

  return (
    <div
      ref={ref}
      style={{ fontFamily: 'sans-serif' }}
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
            variantConfig.bg,
            variantConfig.color,
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
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600',
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
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className={cn(
            'shrink-0 rounded-md p-1 transition-colors duration-150',
            theme === 'light'
              ? 'text-neutral-400 hover:text-neutral-600 hover:bg-neutral-200'
              : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800'
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
      )}
    </div>
  );
});

Alert.displayName = 'Alert';

// ─── Alert Container (FIXED – Single animation wrapper) ──────────────────

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

// ─── useAlert Hook (FIXED – No double animation) ─────────────────────────

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
  const alertsRef = React.useRef(alerts);
  alertsRef.current = alerts;

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
