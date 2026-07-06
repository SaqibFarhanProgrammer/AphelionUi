'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const selectVariants = cva(
  [
    'flex',
    'w-full',
    'items-center',
    'justify-between',
    'gap-2',
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
        sm: ['h-9', 'px-3', 'text-sm', 'rounded-md'],
        md: ['h-10', 'px-4', 'text-sm', 'rounded-lg'],
        lg: ['h-11', 'px-4', 'text-base', 'rounded-lg'],
      },
      theme: {
        light: [
          'bg-white',
          'text-neutral-900',
          'border-neutral-300',
          'focus-visible:border-neutral-900',
          'focus-visible:ring-neutral-900/15',
          'hover:border-neutral-400',
        ],
        dark: [
          'bg-neutral-900',
          'text-white',
          'border-neutral-700',
          'focus-visible:border-neutral-500',
          'focus-visible:ring-white/10',
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
          'focus-visible:border-red-500',
          'focus-visible:ring-red-500/15',
        ],
      },
      {
        theme: 'dark',
        state: 'error',
        className: [
          'border-red-500',
          'focus-visible:border-red-500',
          'focus-visible:ring-red-500/15',
        ],
      },
    ],
    defaultVariants: {
      size: 'md',
      theme: 'light',
      state: 'default',
    },
  }
);

const labelVariants = cva(['block', 'font-medium', 'text-sm', 'mb-1.5'], {
  variants: {
    theme: {
      light: ['text-neutral-900'],
      dark: ['text-white'],
    },
  },
  defaultVariants: {
    theme: 'light',
  },
});

const helperVariants = cva(['block', 'mt-1.5', 'text-xs'], {
  variants: {
    theme: {
      light: ['text-neutral-500'],
      dark: ['text-neutral-400'],
    },
  },
  defaultVariants: {
    theme: 'light',
  },
});

const errorVariants = cva([
  'block',
  'mt-1.5',
  'text-xs',
  'font-medium',
  'text-red-500',
]);

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends
    VariantProps<typeof selectVariants>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onChange'> {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  searchable?: boolean;
  searchInput?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(function Select(
  {
    size = 'md',
    theme = 'light',
    state,
    label,
    placeholder = 'Select options',
    options,
    value,
    defaultValue,
    onChange,
    error,
    helperText,
    required = false,
    disabled = false,
    searchable = false,
    searchInput,
    className,
    containerClassName,
    labelClassName,
    dropdownClassName,
    optionClassName,
    id,
    ...props
  },
  ref
) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(defaultValue || '');
  const [searchQuery, setSearchQuery] = React.useState('');
  const selectId = id ?? React.useId();
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const isError = state === 'error' || !!error;

  const selectedOption = options.find((opt) => opt.value === currentValue);

  const filteredOptions = React.useMemo(() => {
    if (!searchable || !searchQuery.trim()) return options;
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [options, searchable, searchQuery]);

  const handleSelect = (optionValue: string) => {
    if (!isControlled) {
      setInternalValue(optionValue);
    }
    onChange?.(optionValue);
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
      if (isOpen) setSearchQuery('');
    }
  };

  React.useEffect(() => {
    if (isOpen && searchable && !searchInput) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 10);
    }
  }, [isOpen, searchable, searchInput]);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearchQuery('');
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target === searchInputRef.current) return;

      const enabledOptions = filteredOptions.filter((o) => !o.disabled);
      const currentIndex = enabledOptions.findIndex(
        (o) => o.value === currentValue
      );

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex =
          currentIndex < enabledOptions.length - 1 ? currentIndex + 1 : 0;
        handleSelect(enabledOptions[nextIndex].value);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex =
          currentIndex > 0 ? currentIndex - 1 : enabledOptions.length - 1;
        handleSelect(enabledOptions[prevIndex].value);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (currentIndex >= 0) {
          handleSelect(enabledOptions[currentIndex].value);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredOptions, currentValue]);

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
      }}
      className={cn('relative flex flex-col', containerClassName)}
    >
      {/* ─── Label ──────────────────────────────────────────────────── */}
      {label && (
        <label
          htmlFor={selectId}
          className={cn(
            labelVariants({ theme }),
            isError && 'text-red-500',
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

      {/* ─── Trigger ────────────────────────────────────────────────── */}
      <button
        ref={triggerRef}
        id={selectId}
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`${selectId}-listbox`}
        aria-activedescendant={
          selectedOption
            ? `${selectId}-option-${selectedOption.value}`
            : undefined
        }
        disabled={disabled}
        onClick={handleToggle}
        className={cn(
          selectVariants({ size, theme, state: isError ? 'error' : 'default' }),
          isOpen && [
            theme === 'light' ? 'border-neutral-900' : 'border-neutral-500',
          ],
          className
        )}
        {...props}
      >
        <span
          className={cn(
            'truncate',
            !selectedOption &&
              (theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400')
          )}
        >
          {selectedOption?.label || placeholder}
        </span>
        <svg
          className={cn(
            'h-4 w-4 shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180',
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* ─── Dropdown ───────────────────────────────────────────────── */}
      {isOpen && (
        <div
          ref={dropdownRef}
          id={`${selectId}-listbox`}
          role="listbox"
          className={cn(
            'absolute z-50 mt-1.5 w-full overflow-hidden rounded-lg border',
            theme === 'light'
              ? 'border-neutral-200 bg-white'
              : 'border-neutral-700 bg-neutral-900',
            dropdownClassName
          )}
          style={{
            top: '100%',
          }}
        >
          {/* Search Input */}
          {searchable && (
            <div className="p-2">
              {searchInput ? (
                <div onClick={(e) => e.stopPropagation()}>{searchInput}</div>
              ) : (
                <div
                  className={cn(
                    'flex items-center gap-2 rounded-md border px-3 py-2',
                    theme === 'light'
                      ? 'border-neutral-200 bg-neutral-50'
                      : 'border-neutral-700 bg-neutral-800'
                  )}
                >
                  <svg
                    className={cn(
                      'h-4 w-4 shrink-0',
                      theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                        e.preventDefault();
                        triggerRef.current?.focus();
                      }
                    }}
                    className={cn(
                      'w-full bg-transparent text-sm outline-none placeholder:text-neutral-400',
                      theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    )}
                  />
                </div>
              )}
            </div>
          )}

          {/* Options List */}
          <div
            className={cn(
              'max-h-[240px] overflow-y-auto',
              searchable ? 'px-2 pb-2' : 'p-1'
            )}
          >
            {filteredOptions.length === 0 ? (
              <div
                className={cn(
                  'px-3 py-4 text-center text-sm',
                  theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
                )}
              >
                No results found
              </div>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = option.value === currentValue;
                const isDisabled = option.disabled;

                return (
                  <div
                    key={option.value}
                    id={`${selectId}-option-${option.value}`}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      if (!isDisabled) handleSelect(option.value);
                    }}
                    className={cn(
                      'flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors duration-150',
                      isDisabled && 'cursor-not-allowed opacity-40',
                      !isDisabled &&
                        (theme === 'light'
                          ? 'hover:bg-neutral-100'
                          : 'hover:bg-neutral-800'),
                      isSelected &&
                        (theme === 'light'
                          ? 'bg-neutral-100 font-medium text-neutral-900'
                          : 'bg-neutral-800 font-medium text-white'),
                      !isSelected &&
                        (theme === 'dark'
                          ? 'text-neutral-300'
                          : 'text-neutral-700'),
                      optionClassName
                    )}
                  >
                    {/* Option Circle Indicator */}
                    <span
                      className={cn(
                        'h-2.5 w-2.5 shrink-0 rounded-full border-2 transition-colors duration-150',
                        isSelected
                          ? theme === 'light'
                            ? 'border-neutral-900 bg-neutral-900'
                            : 'border-white bg-white'
                          : theme === 'light'
                            ? 'border-neutral-300'
                            : 'border-neutral-600'
                      )}
                    />
                    <span className="truncate">{option.label}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* ─── Helper / Error ─────────────────────────────────────────── */}
      {isError && (
        <span id={`${selectId}-err`} role="alert" className={errorVariants()}>
          {error}
        </span>
      )}
      {!isError && helperText && (
        <span id={`${selectId}-help`} className={helperVariants({ theme })}>
          {helperText}
        </span>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
export { Select, selectVariants };
