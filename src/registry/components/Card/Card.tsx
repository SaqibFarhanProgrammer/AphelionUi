'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Loader2, ChevronDown } from 'lucide-react';
import { Input } from '../input/Input';
import { Button } from '../button/Button';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cardVariants = cva(
  [
    'relative',
    'flex',
    'flex-col',
    'overflow-hidden',
    'border',
    'transition-all',
    'duration-200',
  ],
  {
    variants: {
      theme: {
        dark: ['bg-[#111111]', 'border-white/[0.08]', 'text-white'],
        light: ['bg-white', 'border-black/[0.08]', 'text-black'],
      },
      variant: {
        default: '',
        outlined: '',
        ghost: 'border-transparent',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-lg',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        xl: 'rounded-3xl',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
      width: {
        auto: 'w-auto',
        xs: 'w-[280px]',
        sm: 'w-[320px]',
        md: 'w-[380px]',
        lg: 'w-[440px]',
        xl: 'w-[520px]',
        full: 'w-full',
      },
      hover: {
        true: '',
        false: '',
      },
      clickable: {
        true: 'cursor-pointer',
        false: '',
      },
    },
    compoundVariants: [
      {
        theme: 'dark',
        variant: 'default',
        hover: true,
        className: 'hover:border-white/[0.14] hover:bg-[#151515]',
      },
      {
        theme: 'light',
        variant: 'default',
        hover: true,
        className: 'hover:border-black/[0.14] hover:bg-neutral-50',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        hover: true,
        className: 'hover:bg-white/[0.02]',
      },
      {
        theme: 'light',
        variant: 'ghost',
        hover: true,
        className: 'hover:bg-black/[0.02]',
      },
    ],
    defaultVariants: {
      theme: 'dark',
      variant: 'default',
      radius: 'xl',
      padding: 'lg',
      width: 'md',
      hover: false,
      clickable: false,
    },
  }
);

const cardHeaderVariants = cva(['flex', 'flex-col', 'gap-1.5'], {
  variants: {
    padding: {
      none: '',
      sm: 'pb-4',
      md: 'pb-5',
      lg: 'pb-6',
      xl: 'pb-8',
    },
  },
  defaultVariants: {
    padding: 'lg',
  },
});

const cardTitleVariants = cva(
  ['text-2xl', 'font-semibold', 'leading-tight', 'tracking-tight'],
  {
    variants: {
      theme: {
        dark: 'text-white',
        light: 'text-black',
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

const cardDescriptionVariants = cva(['text-sm', 'leading-relaxed'], {
  variants: {
    theme: {
      dark: 'text-white/50',
      light: 'text-black/50',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
});

const cardFooterVariants = cva(['flex', 'items-center', 'gap-3'], {
  variants: {
    padding: {
      none: '',
      sm: 'pt-4',
      md: 'pt-5',
      lg: 'pt-6',
      xl: 'pt-8',
    },
    align: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },
  },
  defaultVariants: {
    padding: 'lg',
    align: 'end',
  },
});

const inputVariants = cva(
  [
    'flex',
    'w-full',
    'border',
    'font-normal',
    'transition-all',
    'duration-150',
    'ease-out',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-60',
  ],
  {
    variants: {
      size: {
        sm: ['h-9', 'px-3', 'text-sm', 'rounded-lg'],
        md: ['h-10', 'px-4', 'text-sm', 'rounded-lg'],
        lg: ['h-11', 'px-4', 'text-base', 'rounded-xl'],
        xl: ['h-12', 'px-5', 'text-base', 'rounded-xl'],
      },
      theme: {
        light: [
          'bg-white',
          'text-neutral-900',
          'placeholder:text-neutral-400',
          'border-neutral-300',
          'focus-visible:border-neutral-900',
          'focus-visible:ring-neutral-900/15',
        ],
        dark: [
          'bg-[#0A0A0A]',
          'text-white',
          'placeholder:text-white/30',
          'border-white/[0.08]',
          'focus-visible:border-white/20',
          'focus-visible:ring-white/10',
        ],
      },
      error: {
        true: 'border-red-500 focus-visible:ring-red-500/15 focus-visible:border-red-500',
        false: '',
      },
    },
    defaultVariants: {
      size: 'lg',
      theme: 'dark',
      error: false,
    },
  }
);

const labelVariants = cva(['block', 'text-sm', 'font-medium', 'mb-2'], {
  variants: {
    theme: {
      light: 'text-neutral-900',
      dark: 'text-white',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
});

const helperVariants = cva(['block', 'mt-1.5', 'text-xs'], {
  variants: {
    theme: {
      light: 'text-neutral-500',
      dark: 'text-white/40',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
});

const errorVariants = cva([
  'block',
  'mt-1.5',
  'text-xs',
  'font-medium',
  'text-red-500',
]);

const buttonVariants = cva(
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
        sm: 'h-8 px-3 text-xs rounded-lg',
        md: 'h-10 px-4 text-sm rounded-lg',
        lg: 'h-11 px-5 text-sm rounded-xl',
        xl: 'h-12 px-6 text-base rounded-xl',
        full: 'h-11 px-5 text-sm rounded-xl w-full',
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
          'bg-white/[0.06] text-white hover:bg-white/[0.10] border border-white/[0.08] focus-visible:ring-white/20',
      },
      {
        theme: 'dark',
        variant: 'outline',
        className:
          'bg-transparent text-white hover:bg-white/[0.04] border border-white/[0.12] focus-visible:ring-white/20',
      },
      {
        theme: 'dark',
        variant: 'ghost',
        className:
          'bg-transparent text-white hover:bg-white/[0.04] border border-transparent focus-visible:ring-white/20',
      },
      {
        theme: 'dark',
        variant: 'solid',
        className:
          'bg-white text-black hover:bg-white/90 border border-transparent focus-visible:ring-white/20',
      },
      {
        theme: 'light',
        variant: 'default',
        className:
          'bg-black/[0.06] text-black hover:bg-black/[0.10] border border-black/[0.08] focus-visible:ring-black/20',
      },
      {
        theme: 'light',
        variant: 'outline',
        className:
          'bg-transparent text-black hover:bg-black/[0.04] border border-black/[0.12] focus-visible:ring-black/20',
      },
      {
        theme: 'light',
        variant: 'ghost',
        className:
          'bg-transparent text-black hover:bg-black/[0.04] border border-transparent focus-visible:ring-black/20',
      },
      {
        theme: 'light',
        variant: 'solid',
        className:
          'bg-black text-white hover:bg-black/90 border border-transparent focus-visible:ring-black/20',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'lg',
      theme: 'dark',
    },
  }
);

const switchVariants = cva(
  [
    'relative',
    'inline-flex',
    'shrink-0',
    'cursor-pointer',
    'items-center',
    'rounded-full',
    'border-2',
    'border-transparent',
    'transition-colors',
    'duration-200',
    'ease-in-out',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-40',
  ],
  {
    variants: {
      size: {
        sm: ['h-5', 'w-9'],
        md: ['h-6', 'w-11'],
        lg: ['h-7', 'w-14'],
      },
      theme: {
        light: [
          'bg-neutral-200',
          'focus-visible:ring-neutral-900/20',
          'focus-visible:ring-offset-white',
        ],
        dark: [
          'bg-white/10',
          'focus-visible:ring-white/20',
          'focus-visible:ring-offset-neutral-900',
        ],
      },
      checked: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        theme: 'light',
        checked: true,
        className: ['bg-neutral-900'],
      },
      {
        theme: 'dark',
        checked: true,
        className: ['bg-white'],
      },
    ],
    defaultVariants: {
      size: 'md',
      theme: 'dark',
      checked: false,
    },
  }
);

const switchThumbVariants = cva(
  [
    'pointer-events-none',
    'block',
    'rounded-full',
    'shadow-sm',
    'ring-0',
    'transition-all',
    'duration-200',
    'ease-in-out',
  ],
  {
    variants: {
      size: {
        sm: ['h-3.5', 'w-3.5'],
        md: ['h-4', 'w-4'],
        lg: ['h-5', 'w-5'],
      },
      theme: {
        light: ['bg-white'],
        dark: ['bg-neutral-900'],
      },
      checked: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        theme: 'light',
        checked: true,
        className: ['bg-white'],
      },
      {
        theme: 'dark',
        checked: true,
        className: ['bg-neutral-900'],
      },
    ],
    defaultVariants: {
      size: 'md',
      theme: 'dark',
      checked: false,
    },
  }
);

const textareaVariants = cva(
  [
    'flex',
    'w-full',
    'border',
    'font-normal',
    'transition-all',
    'duration-150',
    'ease-out',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-60',
    'resize-y',
  ],
  {
    variants: {
      size: {
        sm: ['px-3', 'py-2', 'text-sm', 'rounded-lg', 'min-h-[80px]'],
        md: ['px-4', 'py-3', 'text-sm', 'rounded-lg', 'min-h-[100px]'],
        lg: ['px-4', 'py-3', 'text-base', 'rounded-xl', 'min-h-[120px]'],
      },
      theme: {
        light: [
          'bg-white',
          'text-neutral-900',
          'placeholder:text-neutral-400',
          'border-neutral-300',
          'focus-visible:border-neutral-900',
          'focus-visible:ring-neutral-900/15',
        ],
        dark: [
          'bg-[#0A0A0A]',
          'text-white',
          'placeholder:text-white/30',
          'border-white/[0.08]',
          'focus-visible:border-white/20',
          'focus-visible:ring-white/10',
        ],
      },
      error: {
        true: 'border-red-500 focus-visible:ring-red-500/15 focus-visible:border-red-500',
        false: '',
      },
    },
    defaultVariants: {
      size: 'lg',
      theme: 'dark',
      error: false,
    },
  }
);

const selectVariants = cva(
  [
    'flex',
    'w-full',
    'items-center',
    'justify-between',
    'border',
    'font-normal',
    'transition-all',
    'duration-150',
    'ease-out',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-60',
    'appearance-none',
    'cursor-pointer',
  ],
  {
    variants: {
      size: {
        sm: ['h-9', 'px-3', 'text-sm', 'rounded-lg'],
        md: ['h-10', 'px-4', 'text-sm', 'rounded-lg'],
        lg: ['h-11', 'px-4', 'text-base', 'rounded-xl'],
        xl: ['h-12', 'px-5', 'text-base', 'rounded-xl'],
      },
      theme: {
        light: [
          'bg-white',
          'text-neutral-900',
          'border-neutral-300',
          'focus-visible:border-neutral-900',
          'focus-visible:ring-neutral-900/15',
        ],
        dark: [
          'bg-[#0A0A0A]',
          'text-white',
          'border-white/[0.08]',
          'focus-visible:border-white/20',
          'focus-visible:ring-white/10',
        ],
      },
      error: {
        true: 'border-red-500 focus-visible:ring-red-500/15 focus-visible:border-red-500',
        false: '',
      },
    },
    defaultVariants: {
      size: 'lg',
      theme: 'dark',
      error: false,
    },
  }
);

const tabsVariants = cva(
  ['inline-flex', 'items-center', 'gap-1', 'rounded-lg', 'p-1'],
  {
    variants: {
      theme: {
        dark: 'bg-white/[0.03]',
        light: 'bg-black/[0.03]',
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

const tabTriggerVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'px-4',
    'py-2',
    'text-sm',
    'font-medium',
    'rounded-md',
    'transition-all',
    'duration-150',
    'outline-none',
    'select-none',
    'cursor-pointer',
    'focus-visible:ring-2',
  ],
  {
    variants: {
      theme: {
        dark: [
          'text-white/60',
          'hover:text-white',
          'focus-visible:ring-white/20',
        ],
        light: [
          'text-black/60',
          'hover:text-black',
          'focus-visible:ring-black/20',
        ],
      },
      active: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        theme: 'dark',
        active: true,
        className: 'bg-white/[0.08] text-white shadow-sm',
      },
      {
        theme: 'light',
        active: true,
        className: 'bg-black/[0.08] text-black shadow-sm',
      },
    ],
    defaultVariants: {
      theme: 'dark',
      active: false,
    },
  }
);

const sliderTrackVariants = cva(
  ['relative', 'h-2', 'w-full', 'rounded-full', 'overflow-hidden'],
  {
    variants: {
      theme: {
        dark: 'bg-white/10',
        light: 'bg-black/10',
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

const sliderThumbVariants = cva(
  [
    'absolute',
    'top-1/2',
    '-translate-y-1/2',
    'h-5',
    'w-5',
    'rounded-full',
    'border-2',
    'cursor-pointer',
    'transition-all',
    'duration-150',
    'shadow-md',
  ],
  {
    variants: {
      theme: {
        dark: ['bg-[#111111]', 'border-white', 'hover:scale-110'],
        light: ['bg-white', 'border-black', 'hover:scale-110'],
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

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
  onClick?: () => void;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export interface CardInputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    Omit<VariantProps<typeof inputVariants>, 'error'> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export interface CardTextareaProps
  extends
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    Omit<VariantProps<typeof textareaVariants>, 'error'> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
}

export interface CardButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  className?: string;
}

export interface CardSwitchProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
}

export interface CardSelectProps extends Omit<
  VariantProps<typeof selectVariants>,
  'error'
> {
  label?: string;
  options: { value: string; label: string }[];
  value?: string;
  id?: string | any;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
}

export interface CardTabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  theme?: 'dark' | 'light';
  className?: string;
}

export interface CardSliderProps {
  label?: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  theme?: 'dark' | 'light';
  className?: string;
  labelClassName?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    theme = 'dark',
    variant = 'default',
    radius = 'xl',
    padding = 'lg',
    width = 'md',
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
    onClick,
    className,
    headerClassName,
    bodyClassName,
    footerClassName,
    titleClassName,
    descriptionClassName,
    children,
    ...props
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        cardVariants({
          theme,
          variant,
          radius,
          padding,
          width,
          hover,
          clickable,
        }),
        className
      )}
      onClick={onClick}
      style={{ fontFamily: 'sans-serif' }}
      {...props}
    >
      {image && (
        <div className="relative -mx-6 -mt-6 mb-5 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || ''}
            className="h-48 w-full object-cover"
          />
          {badge && <div className="absolute top-4 right-4">{badge}</div>}
        </div>
      )}

      {(header || title || description || icon || (badge && !image)) && (
        <div className={cn(cardHeaderVariants({ padding }), headerClassName)}>
          {header || (
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                {(icon || badge) && !image && (
                  <div className="mb-3 flex items-center gap-2">
                    {icon && (
                      <span
                        className={
                          theme === 'dark' ? 'text-white/60' : 'text-black/60'
                        }
                      >
                        {icon}
                      </span>
                    )}
                    {badge && !image && <span>{badge}</span>}
                  </div>
                )}
                {title && (
                  <h3
                    className={cn(cardTitleVariants({ theme }), titleClassName)}
                  >
                    {title}
                  </h3>
                )}
                {description && (
                  <p
                    className={cn(
                      cardDescriptionVariants({ theme }),
                      descriptionClassName
                    )}
                  >
                    {description}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      <div className={cn('flex-1', bodyClassName)}>{children}</div>

      {(footer || actions) && (
        <div
          className={cn(
            cardFooterVariants({ padding, align: 'between' }),
            footerClassName
          )}
        >
          {footer || actions}
        </div>
      )}
    </div>
  );
});
Card.displayName = 'Card';

const CardInput = React.forwardRef<HTMLInputElement, CardInputProps>(
  function CardInput(
    {
      size = 'lg',
      theme = 'dark',
      label,
      helperText,
      error,
      fullWidth = true,
      disabled = false,
      required = false,
      type = 'text',
      placeholder,
      className,
      containerClassName,
      labelClassName,
      inputClassName,
      id,
      ...props
    },
    ref
  ) {
    const inputId = id ?? React.useId();
    const hasError = Boolean(error);

    return (
      <div
        className={cn(
          'flex flex-col',
          fullWidth && 'w-full',
          containerClassName
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={cn(labelVariants({ theme }), labelClassName)}
          >
            {label}
            {required && (
              <span className="ml-0.5 text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <Input
          ref={ref as any}
          id={inputId}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          label={label}
          error={error}
          fullWidth={fullWidth}
          aria-invalid={hasError}
          aria-describedby={
            hasError
              ? `${inputId}-err`
              : helperText
                ? `${inputId}-help`
                : undefined
          }
          className={cn(
            inputVariants({ size, theme, error: hasError }),
            className,
            inputClassName
          )}
          style={{ fontFamily: 'sans-serif' }}
          {...props}
        />
        {hasError && (
          <span id={`${inputId}-err`} role="alert" className={errorVariants()}>
            {error}
          </span>
        )}
        {!hasError && helperText && (
          <span id={`${inputId}-help`} className={helperVariants({ theme })}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);
CardInput.displayName = 'CardInput';

const CardTextarea = React.forwardRef<HTMLTextAreaElement, CardTextareaProps>(
  function CardTextarea(
    {
      size = 'lg',
      theme = 'dark',
      label,
      helperText,
      error,
      fullWidth = true,
      disabled = false,
      required = false,
      placeholder,
      rows = 4,
      className,
      containerClassName,
      labelClassName,
      textareaClassName,
      id,
      ...props
    },
    ref
  ) {
    const inputId = id ?? React.useId();
    const hasError = Boolean(error);

    return (
      <div
        className={cn(
          'flex flex-col',
          fullWidth && 'w-full',
          containerClassName
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={cn(labelVariants({ theme }), labelClassName)}
          >
            {label}
            {required && (
              <span className="ml-0.5 text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          aria-invalid={hasError}
          aria-describedby={
            hasError
              ? `${inputId}-err`
              : helperText
                ? `${inputId}-help`
                : undefined
          }
          className={cn(
            textareaVariants({ size, theme, error: hasError }),
            className,
            textareaClassName
          )}
          style={{ fontFamily: 'sans-serif' }}
          {...props}
        />
        {hasError && (
          <span id={`${inputId}-err`} role="alert" className={errorVariants()}>
            {error}
          </span>
        )}
        {!hasError && helperText && (
          <span id={`${inputId}-help`} className={helperVariants({ theme })}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);
CardTextarea.displayName = 'CardTextarea';

const CardButton = React.forwardRef<HTMLButtonElement, CardButtonProps>(
  function CardButton(
    {
      variant = 'solid',
      size = 'lg',
      theme = 'dark',
      leftIcon,
      rightIcon,
      loading = false,
      disabled = false,
      children,
      className,
      ...props
    },
    ref
  ) {
    return (
      <Button
        ref={ref as any}
        disabled={disabled || loading}
        loading={loading}
        variant={variant as any}
        className={cn(buttonVariants({ variant, size, theme }), className)}
        style={{ fontFamily: 'sans-serif' }}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!loading && leftIcon}
        {children}
        {!loading && rightIcon}
      </Button>
    );
  }
);
CardButton.displayName = 'CardButton';

const CardSwitch = React.forwardRef<HTMLButtonElement, CardSwitchProps>(
  function CardSwitch(
    {
      label,
      checked,
      defaultChecked = false,
      onChange,
      disabled = false,
      theme = 'dark',
      size = 'md',
      className,
      containerClassName,
      labelClassName,
      ...props
    },
    ref
  ) {
    const [internalChecked, setInternalChecked] =
      React.useState(defaultChecked);
    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : internalChecked;

    const handleToggle = () => {
      if (disabled) return;
      const newChecked = !currentChecked;
      if (!isControlled) setInternalChecked(newChecked);
      onChange?.(newChecked);
    };

    const thumbTranslate = {
      sm: currentChecked ? 'translate-x-4' : 'translate-x-0.5',
      md: currentChecked ? 'translate-x-5' : 'translate-x-0.5',
      lg: currentChecked ? 'translate-x-7' : 'translate-x-0.5',
    };

    return (
      <label
        className={cn(
          'inline-flex cursor-pointer items-center gap-3 select-none',
          containerClassName
        )}
      >
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={currentChecked}
          disabled={disabled}
          onClick={handleToggle}
          className={cn(
            switchVariants({ size, theme, checked: currentChecked }),
            className
          )}
          {...props}
        >
          <span
            className={cn(
              switchThumbVariants({ size, theme, checked: currentChecked }),
              thumbTranslate[size ?? 'md']
            )}
            aria-hidden="true"
          />
        </button>
        {label && (
          <span
            className={cn(
              'text-sm font-medium',
              theme === 'dark' ? 'text-white' : 'text-black',
              disabled && 'opacity-40',
              labelClassName
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);
CardSwitch.displayName = 'CardSwitch';

const CardSelect = React.forwardRef<HTMLSelectElement, CardSelectProps>(
  function CardSelect(
    {
      label,
      options,
      value,
      defaultValue,
      onChange,
      placeholder,
      helperText,
      error,
      disabled = false,
      theme = 'dark',
      size = 'lg',
      className,
      containerClassName,
      labelClassName,
      selectClassName,
      id,
      ...props
    },
    ref
  ) {
    const selectId = id ?? React.useId();
    const hasError = Boolean(error);

    return (
      <div className={cn('flex w-full flex-col', containerClassName)}>
        {label && (
          <label
            htmlFor={selectId}
            className={cn(labelVariants({ theme }), labelClassName)}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            aria-invalid={hasError}
            onChange={(e) => onChange?.(e.target.value)}
            className={cn(
              selectVariants({ size, theme, error: hasError }),
              'pr-10',
              className,
              selectClassName
            )}
            style={{ fontFamily: 'sans-serif' }}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div
            className={cn(
              'pointer-events-none absolute top-0 right-3 bottom-0 flex items-center',
              theme === 'dark' ? 'text-white/40' : 'text-black/40'
            )}
          >
            <ChevronDown size={16} strokeWidth={2.5} />
          </div>
        </div>
        {hasError && (
          <span id={`${selectId}-err`} role="alert" className={errorVariants()}>
            {error}
          </span>
        )}
        {!hasError && helperText && (
          <span id={`${selectId}-help`} className={helperVariants({ theme })}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);
CardSelect.displayName = 'CardSelect';

const CardTabs = React.forwardRef<HTMLDivElement, CardTabsProps>(
  function CardTabs(
    { tabs, activeTab, onTabChange, theme = 'dark', className },
    ref
  ) {
    return (
      <div ref={ref} className={cn(tabsVariants({ theme }), className)}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={cn(
              tabTriggerVariants({ theme, active: activeTab === tab.id })
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }
);
CardTabs.displayName = 'CardTabs';

const CardSlider = React.forwardRef<HTMLInputElement, CardSliderProps>(
  function CardSlider(
    {
      label,
      value = 0,
      min = 0,
      max = 100,
      step = 1,
      onChange,
      theme = 'dark',
      className,
      labelClassName,
    },
    ref
  ) {
    return (
      <div className={cn('w-full flex flex-col', className)}>
        {label && (
          <span
            className={cn(
              'text-sm font-medium mb-2',
              theme === 'dark' ? 'text-white' : 'text-black',
              labelClassName
            )}
          >
            {label}
          </span>
        )}
        <div className="relative flex items-center w-full h-5">
          <input
            ref={ref}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange?.(Number(e.target.value))}
            className="absolute w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
          />
          <div className={cn(sliderTrackVariants({ theme }))}>
            <div
              className={cn(
                'h-full transition-all duration-150',
                theme === 'dark' ? 'bg-white' : 'bg-black'
              )}
              style={{ width: `${((value - min) / (max - min)) * 100}%` }}
            />
          </div>
          <div
            className={cn(sliderThumbVariants({ theme }))}
            style={{
              left: `calc(${((value - min) / (max - min)) * 100}% - 10px)`,
            }}
          />
        </div>
      </div>
    );
  }
);
CardSlider.displayName = 'CardSlider';

export {
  Card,
  CardInput,
  CardTextarea,
  CardButton,
  CardSwitch,
  CardSelect,
  CardTabs,
  CardSlider,
};
