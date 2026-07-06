'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// ─── Utility ─────────────────────────────────────────────────────────────

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── CVA Variants ────────────────────────────────────────────────────────

const cardVariants = cva(
  [
    'relative',
    'flex',
    'flex-col',
    'overflow-hidden',
    'border',
    'transition-all',
    'duration-200',
    'ease-out',
  ],
  {
    variants: {
      theme: {
        light: ['bg-white', 'border-neutral-200'],
        dark: ['bg-neutral-900', 'border-neutral-700'],
      },
      variant: {
        default: [],
        outlined: [],
        ghost: [],
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-lg',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        full: 'rounded-3xl',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
      width: {
        auto: '',
        xs: 'w-[240px]',
        sm: 'w-[300px]',
        md: 'w-[360px]',
        lg: 'w-[420px]',
        xl: 'w-[480px]',
        full: 'w-full',
      },
      height: {
        auto: '',
        xs: 'min-h-[160px]',
        sm: 'min-h-[220px]',
        md: 'min-h-[280px]',
        lg: 'min-h-[360px]',
        xl: 'min-h-[440px]',
        full: 'min-h-full',
      },
      hover: {
        true: [],
        false: [],
      },
      clickable: {
        true: 'cursor-pointer',
        false: '',
      },
    },
    compoundVariants: [
      {
        theme: 'light',
        variant: 'outlined',
        className: 'bg-transparent',
      },
      {
        theme: 'dark',
        variant: 'outlined',
        className: 'bg-transparent',
      },
      {
        theme: 'light',
        variant: 'ghost',
        className: 'border-transparent bg-transparent',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        className: 'border-transparent bg-transparent',
      },
      {
        theme: 'light',
        hover: true,
        className: 'hover:border-neutral-300',
      },
      {
        theme: 'dark',
        hover: true,
        className: 'hover:border-neutral-600',
      },
    ],
    defaultVariants: {
      theme: 'light',
      variant: 'default',
      radius: 'md',
      padding: 'md',
      width: 'auto',
      height: 'auto',
      hover: false,
      clickable: false,
    },
  }
);

const headerVariants = cva(
  ['flex', 'items-start', 'justify-between', 'gap-4'],
  {
    variants: {
      padding: {
        none: '',
        sm: 'px-4 pt-4 pb-2',
        md: 'px-6 pt-6 pb-3',
        lg: 'px-8 pt-8 pb-4',
        xl: 'px-10 pt-10 pb-5',
      },
    },
    defaultVariants: {
      padding: 'md',
    },
  }
);

const footerVariants = cva(
  ['flex', 'items-center', 'justify-between', 'gap-4'],
  {
    variants: {
      padding: {
        none: '',
        sm: 'px-4 pb-4 pt-2',
        md: 'px-6 pb-6 pt-3',
        lg: 'px-8 pb-8 pt-4',
        xl: 'px-10 pb-10 pt-5',
      },
    },
    defaultVariants: {
      padding: 'md',
    },
  }
);

// ─── Types ───────────────────────────────────────────────────────────────

export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  imageClassName?: string;
  onClick?: () => void;
}

// ─── Card Component ──────────────────────────────────────────────────────

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    theme = 'light',
    variant = 'default',
    radius = 'md',
    padding = 'md',
    width = 'auto',
    height = 'auto',
    hover = false,
    clickable = false,
    header,
    footer,
    title,
    description,
    icon,
    badge,
    image,
    imageAlt,
    actions,
    children,
    className,
    headerClassName,
    bodyClassName,
    footerClassName,
    imageClassName,
    onClick,
    ...props
  },
  ref
) {
  const isClickable = clickable || !!onClick;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      ref={ref}
      style={{
        fontFamily: 'sans-serif',
      }}
      className={cn(
        cardVariants({
          theme,
          variant,
          radius,
          padding,
          width,
          height,
          hover,
          clickable: isClickable,
        }),
        className
      )}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      {...props}
    >
      {image && (
        <div className={cn('-mx-6 -mt-6 mb-4', imageClassName)}>
          <img
            src={image}
            alt={imageAlt || ''}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {(header || title || icon || badge || actions) && (
        <div className={cn(headerVariants({ padding }), headerClassName)}>
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {icon && (
              <span
                className={cn(
                  'flex items-center justify-center shrink-0',
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                )}
              >
                {icon}
              </span>
            )}
            <div className="flex-1 min-w-0">
              {title && (
                <h3
                  className={cn(
                    'text-base font-semibold leading-tight',
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  )}
                >
                  {title}
                </h3>
              )}
              {description && (
                <p
                  className={cn(
                    'text-sm mt-0.5',
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  )}
                >
                  {description}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {badge}
            {actions}
          </div>
        </div>
      )}

      {header && !title && (
        <div className={cn(headerVariants({ padding }), headerClassName)}>
          {header}
        </div>
      )}

      <div className={cn('flex-1', bodyClassName)}>{children}</div>

      {footer && (
        <div className={cn(footerVariants({ padding }), footerClassName)}>
          {footer}
        </div>
      )}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
export { Card, cardVariants };
