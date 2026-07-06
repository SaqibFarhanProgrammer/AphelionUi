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

const radioVariants = cva(
  [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'shrink-0',
    'rounded-full',
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
          'border-neutral-300',
          'bg-white',
          'focus-visible:ring-neutral-900/20',
          'focus-visible:ring-offset-white',
        ],
        dark: [
          'border-neutral-600',
          'bg-neutral-800',
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
        className: ['border-blue-600', 'bg-white'],
      },
      {
        theme: 'dark',
        checked: true,
        className: ['border-blue-500', 'bg-neutral-800'],
      },
    ],
    defaultVariants: {
      size: 'md',
      theme: 'light',
      checked: false,
    },
  }
);

const labelVariants = cva(
  ['text-sm', 'font-medium', 'transition-colors', 'duration-150'],
  {
    variants: {
      theme: {
        light: ['text-neutral-900'],
        dark: ['text-white'],
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

const cardVariants = cva(
  [
    'relative',
    'flex',
    'items-start',
    'gap-3',
    'rounded-xl',
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
          'border-neutral-200',
          'bg-white',
          'hover:border-neutral-300',
          'focus-visible:ring-neutral-900/20',
          'focus-visible:ring-offset-white',
        ],
        dark: [
          'border-neutral-700',
          'bg-neutral-900',
          'hover:border-neutral-600',
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
        className: ['border-blue-600', 'bg-blue-50/50'],
      },
      {
        theme: 'dark',
        checked: true,
        className: ['border-blue-500', 'bg-blue-500/10'],
      },
    ],
    defaultVariants: {
      theme: 'light',
      checked: false,
    },
  }
);

const tableRowVariants = cva(
  [
    'flex',
    'items-center',
    'gap-4',
    'rounded-lg',
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
          'border-neutral-200',
          'bg-white',
          'hover:border-neutral-300',
          'focus-visible:ring-neutral-900/20',
          'focus-visible:ring-offset-white',
        ],
        dark: [
          'border-neutral-700',
          'bg-neutral-900',
          'hover:border-neutral-600',
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
        className: ['border-blue-600', 'bg-blue-50/50'],
      },
      {
        theme: 'dark',
        checked: true,
        className: ['border-blue-500', 'bg-blue-500/10'],
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

// ─── Radio Component ───────────────────────────────────────────────────────

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

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
      }}
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
              'rounded-full',
              theme === 'light' ? 'bg-blue-600' : 'bg-blue-500',
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
            <span className="ml-0.5 text-red-500" aria-hidden="true">
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

    const renderDefault = (option: RadioOption) => {
      const isChecked = currentValue === option.value;
      const isDisabled = disabled || option.disabled;

      return (
        <div
          key={option.value}
          className={cn(
            'flex items-center justify-between gap-4',
            'rounded-lg border px-4 py-3',
            'transition-all duration-150 cursor-pointer',
            theme === 'light'
              ? isChecked
                ? 'border-blue-600 bg-blue-50/50'
                : 'border-neutral-200 bg-white hover:border-neutral-300'
              : isChecked
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600',
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
              <span
                className={cn(
                  'text-sm font-medium',
                  theme === 'light' ? 'text-neutral-900' : 'text-white'
                )}
              >
                {option.label}
              </span>
              {option.description && (
                <p
                  className={cn(
                    'text-xs mt-0.5',
                    theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'
                  )}
                >
                  {option.description}
                </p>
              )}
            </div>
          </div>
          {option.price && (
            <span
              className={cn(
                'text-sm font-semibold shrink-0',
                theme === 'light' ? 'text-neutral-900' : 'text-white'
              )}
            >
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
                  <span
                    className={cn(
                      'text-lg',
                      theme === 'light'
                        ? 'text-neutral-600'
                        : 'text-neutral-400'
                    )}
                  >
                    {option.icon}
                  </span>
                )}
                <span
                  className={cn(
                    'text-sm font-semibold',
                    theme === 'light' ? 'text-neutral-900' : 'text-white'
                  )}
                >
                  {option.label}
                </span>
              </div>
              {isChecked && (
                <span
                  className={cn(
                    'flex h-5 w-5 items-center justify-center rounded-full',
                    theme === 'light' ? 'bg-blue-600' : 'bg-blue-500'
                  )}
                >
                  <svg
                    className="h-3 w-3 text-white"
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
              <p
                className={cn(
                  'text-xs mb-3',
                  theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'
                )}
              >
                {option.description}
              </p>
            )}
            {option.specs && (
              <p
                className={cn(
                  'text-xs',
                  theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'
                )}
              >
                {option.specs}
              </p>
            )}
            {option.price && (
              <p
                className={cn(
                  'text-xl font-bold mt-2',
                  theme === 'light' ? 'text-neutral-900' : 'text-white'
                )}
              >
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
          <span
            className={cn(
              'text-sm font-medium flex-1',
              theme === 'light' ? 'text-neutral-900' : 'text-white'
            )}
          >
            {option.label}
          </span>
          {option.meta &&
            Object.entries(option.meta).map(([key, val]) => (
              <span
                key={key}
                className={cn(
                  'text-xs text-center min-w-[80px]',
                  theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'
                )}
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
            'rounded-lg border px-4 py-3',
            'transition-all duration-150 cursor-pointer',
            theme === 'light'
              ? isChecked
                ? 'border-blue-600 bg-blue-50/50'
                : 'border-neutral-200 bg-white hover:border-neutral-300'
              : isChecked
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600',
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
          <span
            className={cn(
              'text-sm font-medium',
              theme === 'light' ? 'text-neutral-900' : 'text-white'
            )}
          >
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
        style={{
          fontFamily: 'sans-serif',
        }}
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
