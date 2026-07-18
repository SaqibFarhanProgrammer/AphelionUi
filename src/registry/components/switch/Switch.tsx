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
          'bg-neutral-700',
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
      theme: 'light',
      checked: false,
    },
  }
);

const thumbVariants = cva(
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

// ─── Types ───────────────────────────────────────────────────────────────

export interface SwitchProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'checked' | 'onChange'>,
    VariantProps<typeof switchVariants> {
  label?: string;
  labelOn?: string;
  labelOff?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  containerClassName?: string;
  switchClassName?: string;
  thumbClassName?: string;
  labelClassName?: string;
}

// ─── Switch Component ────────────────────────────────────────────────────

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  {
    size = 'md',
    theme = 'light',
    label,
    labelOn,
    labelOff,
    checked,
    defaultChecked = false,
    onChange,
    disabled = false,
    className,
    containerClassName,
    switchClassName,
    thumbClassName,
    labelClassName,
    id,
    ...props
  },
  ref
) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const switchId = id ?? React.useId();
  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    const newChecked = !currentChecked;
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  // Thumb translate values
  const thumbTranslate = {
    sm: currentChecked ? 'translate-x-4' : 'translate-x-0.5',
    md: currentChecked ? 'translate-x-5' : 'translate-x-0.5',
    lg: currentChecked ? 'translate-x-7' : 'translate-x-0.5',
  };

  const displayLabel = label || (currentChecked ? labelOn : labelOff) || '';

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
      }}
      className={cn(
        'inline-flex items-center gap-3',
        className,
        containerClassName
      )}
    >
      <button
        ref={ref}
        id={switchId}
        type="button"
        role="switch"
        aria-checked={currentChecked}
        disabled={disabled}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={cn(
          switchVariants({ size, theme, checked: currentChecked }),
          switchClassName
        )}
        {...props}
      >
        <span
          className={cn(
            thumbVariants({ size, theme, checked: currentChecked }),
            thumbTranslate[size ?? 'md'],
            thumbClassName
          )}
          aria-hidden="true"
        />
      </button>

      {displayLabel && (
        <label
          htmlFor={switchId}
          className={cn(
            labelVariants({ theme, disabled }),
            'cursor-pointer select-none',
            disabled && 'cursor-not-allowed',
            labelClassName
          )}
        >
          {displayLabel}
        </label>
      )}
    </div>
  );
});

Switch.displayName = 'Switch';

export default Switch;
export { Switch };
