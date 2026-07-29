'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Radio Variants ──────────────────────────────────────────────────────

const radioVariants = cva(
  [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'shrink-0',
    'rounded-aphelion-full',
    'border-2',
    'transition-all',
    'duration-150',
    'ease-out',
    'cursor-pointer',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-40',
  ],
  {
    variants: {
      size: {
        sm: ['h-4', 'w-4'],
        md: ['h-5', 'w-5'],
        lg: ['h-6', 'w-6'],
      },
      theme: {
        light: [
          'border-light-input-border',
          'bg-light-background',
          'focus-visible:ring-light-focus-ring',
          'focus-visible:ring-offset-light-background',
        ],
        dark: [
          'border-dark-input-border',
          'bg-dark-background',
          'focus-visible:ring-dark-focus-ring',
          'focus-visible:ring-offset-dark-background',
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
        className: ['border-light-primary', 'bg-light-background'],
      },
      {
        theme: 'dark',
        checked: true,
        className: ['border-dark-primary', 'bg-dark-background'],
      },
    ],
    defaultVariants: {
      size: 'md',
      theme: 'light',
      checked: false,
    },
  }
);

// ─── Label Variants ──────────────────────────────────────────────────────

const labelVariants = cva(
  ['text-sm', 'font-medium', 'transition-colors', 'duration-150'],
  {
    variants: {
      theme: {
        light: ['text-light-text-primary'],
        dark: ['text-dark-text-primary'],
      },
      disabled: {
        true: ['opacity-40'],
        false: [],
      },
    },
    defaultVariants: {
      theme: 'light',
      disabled: false,
    },
  }
);

// ─── Card Variants ───────────────────────────────────────────────────────

const cardVariants = cva(
  [
    'relative',
    'flex',
    'items-start',
    'gap-3',
    'rounded-aphelion-xl',
    'border-2',
    'p-4',
    'transition-all',
    'duration-200',
    'cursor-pointer',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-40',
  ],
  {
    variants: {
      theme: {
        light: [
          'border-light-border',
          'bg-light-card',
          'hover:border-light-border-strong',
          'focus-visible:ring-light-focus-ring',
          'focus-visible:ring-offset-light-background',
        ],
        dark: [
          'border-dark-border',
          'bg-dark-card',
          'hover:border-dark-border-strong',
          'focus-visible:ring-dark-focus-ring',
          'focus-visible:ring-offset-dark-background',
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
        className: ['border-light-primary', 'bg-light-selected'],
      },
      {
        theme: 'dark',
        checked: true,
        className: ['border-dark-primary', 'bg-dark-selected'],
      },
    ],
    defaultVariants: {
      theme: 'light',
      checked: false,
    },
  }
);

// ─── Table Row Variants ──────────────────────────────────────────────────

const tableRowVariants = cva(
  [
    'flex',
    'items-center',
    'gap-4',
    'rounded-aphelion-lg',
    'border',
    'px-4',
    'py-3',
    'transition-all',
    'duration-150',
    'cursor-pointer',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
  ],
  {
    variants: {
      theme: {
        light: [
          'border-light-border',
          'bg-light-card',
          'hover:border-light-border-strong',
          'focus-visible:ring-light-focus-ring',
          'focus-visible:ring-offset-light-background',
        ],
        dark: [
          'border-dark-border',
          'bg-dark-card',
          'hover:border-dark-border-strong',
          'focus-visible:ring-dark-focus-ring',
          'focus-visible:ring-offset-dark-background',
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
        className: ['border-light-primary', 'bg-light-selected'],
      },
      {
        theme: 'dark',
        checked: true,
        className: ['border-dark-primary', 'bg-dark-selected'],
      },
    ],
    defaultVariants: {
      theme: 'light',
      checked: false,
    },
  }
);

// ─── Types ───────────────────────────────────────────────────────────────

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  price?: string;
  specs?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  meta?: Record<string, string>;
}

export interface RadioProps
  extends
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'size' | 'checked' | 'onChange'
    >,
    VariantProps<typeof radioVariants> {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  containerClassName?: string;
  radioClassName?: string;
  labelClassName?: string;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'card' | 'table' | 'inline';
  disabled?: boolean;
  className?: string;
  optionClassName?: string;
  columns?: 1 | 2 | 3;
}

// ─── Radio Component ─────────────────────────────────────────────────────

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    size = 'md',
    theme = 'light',
    label,
    checked = false,
    onChange,
    disabled = false,
    required = false,
    className,
    containerClassName,
    radioClassName,
    labelClassName,
    id,
    ...props
  },
  ref
) {
  const radioId = id ?? React.useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  const handleClick = () => {
    if (disabled) return;
    onChange?.(true);
  };

  const dotColor =
    theme === 'light' ? 'bg-light-primary' : 'bg-dark-primary';
  const requiredColor = 'text-light-destructive';

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5',
        className,
        containerClassName
      )}
    >
      <span
        className={cn(radioVariants({ size, theme, checked }), radioClassName)}
        onClick={handleClick}
      >
        <input
          ref={ref}
          id={radioId}
          type="radio"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          className="sr-only"
          {...props}
        />
        {checked && (
          <span
            className={cn(
              'rounded-aphelion-full',
              dotColor,
              size === 'sm' && 'h-1.5 w-1.5',
              size === 'md' && 'h-2 w-2',
              size === 'lg' && 'h-2.5 w-2.5'
            )}
          />
        )}
      </span>
      {label && (
        <label
          htmlFor={radioId}
          className={cn(
            labelVariants({ theme, disabled }),
            'cursor-pointer select-none',
            disabled && 'cursor-not-allowed',
            labelClassName
          )}
        >
          {label}
          {required && (
            <span className={cn('ml-0.5', requiredColor)} aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
    </div>
  );
});

Radio.displayName = 'Radio';

// ─── RadioGroup Component ────────────────────────────────────────────────

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup(
    {
      options,
      value,
      defaultValue,
      onChange,
      name,
      theme = 'light',
      size = 'md',
      variant = 'default',
      disabled = false,
      className,
      optionClassName,
      columns = 1,
    },
    ref
  ) {
    const [internalValue, setInternalValue] = React.useState(
      defaultValue || ''
    );
    const groupName = name ?? React.useId();
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleSelect = (optionValue: string) => {
      if (!isControlled) {
        setInternalValue(optionValue);
      }
      onChange?.(optionValue);
    };

    const gridCols = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    };

    // Theme-aware color helpers
    const labelColor = theme === 'light' ? 'text-light-text-primary' : 'text-dark-text-primary';
    const descColor = theme === 'light' ? 'text-light-text-muted' : 'text-dark-text-muted';
    const iconColor = theme === 'light' ? 'text-light-text-secondary' : 'text-dark-text-secondary';
    const priceColor = theme === 'light' ? 'text-light-text-primary' : 'text-dark-text-primary';
    const metaColor = theme === 'light' ? 'text-light-text-muted' : 'text-dark-text-muted';
    const checkBg = theme === 'light' ? 'bg-light-primary' : 'bg-dark-primary';
    const checkText = theme === 'light' ? 'text-light-primary-foreground' : 'text-dark-primary-foreground';

    // Default option border colors
    const defaultBorder = theme === 'light' ? 'border-light-border' : 'border-dark-border';
    const defaultBg = theme === 'light' ? 'bg-light-card' : 'bg-dark-card';
    const defaultHoverBorder = theme === 'light' ? 'hover:border-light-border-strong' : 'hover:border-dark-border-strong';
    const checkedBorder = theme === 'light' ? 'border-light-primary' : 'border-dark-primary';
    const checkedBg = theme === 'light' ? 'bg-light-selected' : 'bg-dark-selected';

    const renderDefault = (option: RadioOption) => {
      const isChecked = currentValue === option.value;
      const isDisabled = disabled || option.disabled;

      return (
        <div
          key={option.value}
          className={cn(
            'flex items-center justify-between gap-4',
            'rounded-aphelion-lg border px-4 py-3',
            'transition-all duration-150 cursor-pointer',
            isChecked
              ? cn(checkedBorder, checkedBg)
              : cn(defaultBorder, defaultBg, defaultHoverBorder),
            isDisabled && 'opacity-40 cursor-not-allowed',
            optionClassName
          )}
          onClick={() => !isDisabled && handleSelect(option.value)}
          role="radio"
          aria-checked={isChecked}
          tabIndex={isDisabled ? -1 : 0}
        >
          <div className="flex items-center gap-3">
            <Radio
              size={size}
              theme={theme}
              checked={isChecked}
              onChange={() => handleSelect(option.value)}
              disabled={isDisabled}
              name={groupName}
            />
            <div>
              <span className={cn('text-sm font-medium', labelColor)}>
                {option.label}
              </span>
              {option.description && (
                <p className={cn('text-xs mt-0.5', descColor)}>
                  {option.description}
                </p>
              )}
            </div>
          </div>
          {option.price && (
            <span className={cn('text-sm font-semibold shrink-0', priceColor)}>
              {option.price}
            </span>
          )}
        </div>
      );
    };

    const renderCard = (option: RadioOption) => {
      const isChecked = currentValue === option.value;
      const isDisabled = disabled || option.disabled;

      return (
        <div
          key={option.value}
          className={cn(
            cardVariants({ theme, checked: isChecked }),
            isDisabled && 'opacity-40 cursor-not-allowed',
            optionClassName
          )}
          onClick={() => !isDisabled && handleSelect(option.value)}
          role="radio"
          aria-checked={isChecked}
          tabIndex={isDisabled ? -1 : 0}
        >
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {option.icon && (
                  <span className={cn('text-lg', iconColor)}>
                    {option.icon}
                  </span>
                )}
                <span className={cn('text-sm font-semibold', labelColor)}>
                  {option.label}
                </span>
              </div>
              {isChecked && (
                <span
                  className={cn(
                    'flex h-5 w-5 items-center justify-center rounded-aphelion-full',
                    checkBg
                  )}
                >
                  <svg
                    className={cn('h-3 w-3', checkText)}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              )}
            </div>
            {option.description && (
              <p className={cn('text-xs mb-3', descColor)}>
                {option.description}
              </p>
            )}
            {option.specs && (
              <p className={cn('text-xs', descColor)}>
                {option.specs}
              </p>
            )}
            {option.price && (
              <p className={cn('text-xl font-bold mt-2', priceColor)}>
                {option.price}
              </p>
            )}
          </div>
        </div>
      );
    };

    const renderTable = (option: RadioOption) => {
      const isChecked = currentValue === option.value;
      const isDisabled = disabled || option.disabled;

      return (
        <div
          key={option.value}
          className={cn(
            tableRowVariants({ theme, checked: isChecked }),
            isDisabled && 'opacity-40 cursor-not-allowed',
            optionClassName
          )}
          onClick={() => !isDisabled && handleSelect(option.value)}
          role="radio"
          aria-checked={isChecked}
          tabIndex={isDisabled ? -1 : 0}
        >
          <Radio
            size={size}
            theme={theme}
            checked={isChecked}
            onChange={() => handleSelect(option.value)}
            disabled={isDisabled}
            name={groupName}
          />
          <span className={cn('text-sm font-medium flex-1', labelColor)}>
            {option.label}
          </span>
          {option.meta &&
            Object.entries(option.meta).map(([key, val]) => (
              <span
                key={key}
                className={cn('text-xs text-center min-w-[80px]', metaColor)}
              >
                {val}
              </span>
            ))}
        </div>
      );
    };

    const renderInline = (option: RadioOption) => {
      const isChecked = currentValue === option.value;
      const isDisabled = disabled || option.disabled;

      return (
        <div
          key={option.value}
          className={cn(
            'flex items-center gap-3',
            'rounded-aphelion-lg border px-4 py-3',
            'transition-all duration-150 cursor-pointer',
            isChecked
              ? cn(checkedBorder, checkedBg)
              : cn(defaultBorder, defaultBg, defaultHoverBorder),
            isDisabled && 'opacity-40 cursor-not-allowed',
            optionClassName
          )}
          onClick={() => !isDisabled && handleSelect(option.value)}
          role="radio"
          aria-checked={isChecked}
          tabIndex={isDisabled ? -1 : 0}
        >
          <Radio
            size={size}
            theme={theme}
            checked={isChecked}
            onChange={() => handleSelect(option.value)}
            disabled={isDisabled}
            name={groupName}
          />
          <span className={cn('text-sm font-medium', labelColor)}>
            {option.label}
          </span>
        </div>
      );
    };

    const renderOption = (option: RadioOption) => {
      switch (variant) {
        case 'card':
          return renderCard(option);
        case 'table':
          return renderTable(option);
        case 'inline':
          return renderInline(option);
        default:
          return renderDefault(option);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col gap-3',
          variant === 'card' && cn('grid', gridCols[columns]),
          variant === 'inline' && 'flex-row flex-wrap',
          className
        )}
        role="radiogroup"
      >
        {options.map(renderOption)}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
export { Radio, RadioGroup };