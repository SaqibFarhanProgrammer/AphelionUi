'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const textareaVariants = cva(
  [
    'w-full',
    'resize-none',
    'rounded-lg',
    'border',
    'px-4',
    'py-3',
    'text-sm',
    'leading-relaxed',
    'transition-all',
    'duration-200',
    'outline-none',
    'placeholder:text-neutral-400',
    'focus:ring-2',
    'focus:ring-offset-0',
  ],
  {
    variants: {
      theme: {
        light: [
          'bg-neutral-50',
          'border-neutral-200',
          'text-neutral-900',
          'focus:border-neutral-900',
          'focus:ring-neutral-900/10',
          'hover:border-neutral-300',
        ],
        dark: [
          'bg-neutral-900',
          'border-neutral-700',
          'text-white',
          'focus:border-white',
          'focus:ring-white/10',
          'hover:border-neutral-600',
        ],
      },
      state: {
        default: [],
        error: [],
      },
    },
    compoundVariants: [
      {
        theme: 'light',
        state: 'error',
        className: [
          'border-red-500',
          'focus:border-red-500',
          'focus:ring-red-500/10',
          'placeholder:text-red-300',
        ],
      },
      {
        theme: 'dark',
        state: 'error',
        className: [
          'border-red-500',
          'focus:border-red-500',
          'focus:ring-red-500/10',
          'placeholder:text-red-400',
        ],
      },
    ],
    defaultVariants: {
      theme: 'light',
      state: 'default',
    },
  }
);

export interface TextareaProps
  extends
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  required?: boolean;
  optional?: boolean;
  optionalText?: string;
  error?: string;
  hint?: string;
  maxLength?: number;
  showCount?: boolean;
  actionButton?: React.ReactNode;
  rows?: number;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      theme = 'light',
      state,
      label,
      required = false,
      optional = false,
      optionalText = 'optional',
      error,
      hint,
      maxLength,
      showCount = false,
      actionButton,
      rows = 4,
      className,
      containerClassName,
      labelClassName,
      onChange,
      value,
      defaultValue,
      disabled,
      ...props
    },
    ref
  ) {
    const [internalValue, setInternalValue] = React.useState(
      (defaultValue as string) || ''
    );

    const isControlled = value !== undefined;
    const currentValue = isControlled ? (value as string) : internalValue;
    const charCount = currentValue?.length || 0;
    const isError = state === 'error' || !!error;
    const isOverLimit = maxLength ? charCount > maxLength : false;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    return (
      <div
        className={cn('flex flex-col gap-1.5', containerClassName)}
        style={{ fontFamily: 'sans-serif' }}
      >
        {label && (
          <div className="flex items-center justify-between">
            <label
              htmlFor={props.id}
              className={cn(
                'text-sm font-medium',
                isError
                  ? 'text-red-500'
                  : theme === 'dark'
                    ? 'text-white'
                    : 'text-neutral-900',
                labelClassName
              )}
            >
              {label}
              {required && (
                <span className="ml-0.5 text-red-500" aria-hidden="true">
                  *
                </span>
              )}
              {optional && !required && (
                <span
                  className={cn(
                    'ml-1.5 font-normal',
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-400'
                  )}
                >
                  ({optionalText})
                </span>
              )}
            </label>
            {actionButton && <div className="shrink-0">{actionButton}</div>}
          </div>
        )}

        {/* ─── Textarea ───────────────────────────────────────────────── */}
        <textarea
          ref={ref}
          rows={rows}
          disabled={disabled}
          maxLength={maxLength}
          className={cn(
            textareaVariants({ theme, state: isError ? 'error' : 'default' }),
            disabled && [
              'cursor-not-allowed',
              'opacity-50',
              theme === 'light' ? 'bg-neutral-100' : 'bg-neutral-800',
            ],
            className
          )}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          aria-invalid={isError}
          aria-describedby={
            error ? `${props.id}-error` : hint ? `${props.id}-hint` : undefined
          }
          {...props}
        />

        {/* ─── Bottom Row: Hint / Error / Count ───────────────────────── */}
        <div className="flex items-center justify-between min-h-[20px]">
          <div className="flex-1">
            {error ? (
              <span id={`${props.id}-error`} className="text-xs text-red-500">
                {error}
              </span>
            ) : hint ? (
              <span
                id={`${props.id}-hint`}
                className={cn(
                  'text-xs',
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                )}
              >
                {hint}
              </span>
            ) : null}
          </div>
          {(showCount || maxLength) && (
            <span
              className={cn(
                'text-xs tabular-nums shrink-0 ml-4',
                isOverLimit
                  ? 'text-red-500'
                  : theme === 'dark'
                    ? 'text-neutral-400'
                    : 'text-neutral-400'
              )}
            >
              {charCount}
              {maxLength ? `/${maxLength}` : ''}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
