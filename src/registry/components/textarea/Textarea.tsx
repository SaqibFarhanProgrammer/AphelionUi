'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Textarea Variants ───────────────────────────────────────────────────

const textareaVariants = cva(
  [
    'w-full',
    'resize-none',
    'rounded-aphelion-lg',
    'border',
    'px-4',
    'py-3',
    'text-sm',
    'leading-relaxed',
    'transition-all',
    'duration-200',
    'outline-none',
    'placeholder:text-light-text-muted',
    'focus:ring-2',
    'focus:ring-offset-0',
  ],
  {
    variants: {
      theme: {
        light: [
          'bg-light-muted',
          'border-light-border',
          'text-light-text-primary',
          'focus:border-light-border-strong',
          'focus:ring-light-focus-ring',
          'hover:border-light-border-strong',
        ],
        dark: [
          'bg-dark-background',
          'border-dark-input-border',
          'text-dark-text-primary',
          'focus:border-dark-border-strong',
          'focus:ring-dark-focus-ring',
          'hover:border-dark-border-strong',
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
          'border-light-destructive',
          'focus:border-light-destructive',
          'focus:ring-light-focus-ring',
          'placeholder:text-light-destructive/30',
        ],
      },
      {
        theme: 'dark',
        state: 'error',
        className: [
          'border-dark-destructive',
          'focus:border-dark-destructive',
          'focus:ring-dark-focus-ring',
          'placeholder:text-dark-destructive/40',
        ],
      },
    ],
    defaultVariants: {
      theme: 'light',
      state: 'default',
    },
  }
);

// ─── Types ───────────────────────────────────────────────────────────────

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

// ─── Textarea Component ──────────────────────────────────────────────────

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

    // ─── Theme-aware colors ──────────────────────────────────────────────
    const isDark = theme === 'dark';
    const labelDefaultColor = isDark ? 'text-dark-text-primary' : 'text-light-text-primary';
    const labelErrorColor = 'text-light-destructive';
    const requiredColor = 'text-light-destructive';
    const optionalColor = isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary';
    const hintColor = isDark ? 'text-dark-text-muted' : 'text-light-text-muted';
    const charCountColor = isDark ? 'text-dark-text-muted' : 'text-light-text-muted';
    const charCountErrorColor = 'text-light-destructive';
    const disabledBg = isDark ? 'bg-dark-muted' : 'bg-light-muted';

    return (
      <div className={cn('flex flex-col gap-1.5', containerClassName)}>
        {label && (
          <div className="flex items-center justify-between">
            <label
              htmlFor={props.id}
              className={cn(
                'text-sm font-medium',
                isError ? labelErrorColor : labelDefaultColor,
                labelClassName
              )}
            >
              {label}
              {required && (
                <span className={cn('ml-0.5', requiredColor)} aria-hidden="true">
                  *
                </span>
              )}
              {optional && !required && (
                <span className={cn('ml-1.5 font-normal', optionalColor)}>
                  ({optionalText})
                </span>
              )}
            </label>
            {actionButton && <div className="shrink-0">{actionButton}</div>}
          </div>
        )}

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
              disabledBg,
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

        <div className="flex items-center justify-between min-h-[20px]">
          <div className="flex-1">
            {error ? (
              <span id={`${props.id}-error`} className="text-xs text-light-destructive">
                {error}
              </span>
            ) : hint ? (
              <span
                id={`${props.id}-hint`}
                className={cn('text-xs', hintColor)}
              >
                {hint}
              </span>
            ) : null}
          </div>
          {(showCount || maxLength) && (
            <span
              className={cn(
                'text-xs tabular-nums shrink-0 ml-4',
                isOverLimit ? charCountErrorColor : charCountColor
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