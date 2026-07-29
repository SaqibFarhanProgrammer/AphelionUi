'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Select Variants ─────────────────────────────────────────────────────

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
        sm: ['h-9', 'px-3', 'text-sm', 'rounded-aphelion-md'],
        md: ['h-10', 'px-4', 'text-sm', 'rounded-aphelion-lg'],
        lg: ['h-11', 'px-4', 'text-base', 'rounded-aphelion-lg'],
      },
      theme: {
        light: [
          'bg-light-background',
          'text-light-text-primary',
          'border-light-input-border',
          'focus-visible:border-light-border-strong',
          'focus-visible:ring-light-focus-ring',
          'hover:border-light-border-strong',
        ],
        dark: [
          'bg-dark-background',
          'text-dark-text-primary',
          'border-dark-input-border',
          'focus-visible:border-dark-border-strong',
          'focus-visible:ring-dark-focus-ring',
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
          'focus-visible:border-light-destructive',
          'focus-visible:ring-light-focus-ring',
        ],
      },
      {
        theme: 'dark',
        state: 'error',
        className: [
          'border-dark-destructive',
          'focus-visible:border-dark-destructive',
          'focus-visible:ring-dark-focus-ring',
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

// ─── Label Variants ──────────────────────────────────────────────────────

const labelVariants = cva(['block', 'font-medium', 'text-sm', 'mb-1.5'], {
  variants: {
    theme: {
      light: ['text-light-text-primary'],
      dark: ['text-dark-text-primary'],
    },
  },
  defaultVariants: {
    theme: 'light',
  },
});

// ─── Helper Text Variants ────────────────────────────────────────────────

const helperVariants = cva(['block', 'mt-1.5', 'text-xs'], {
  variants: {
    theme: {
      light: ['text-light-text-muted'],
      dark: ['text-dark-text-muted'],
    },
  },
  defaultVariants: {
    theme: 'light',
  },
});

// ─── Error Variants ──────────────────────────────────────────────────────

const errorVariants = cva([
  'block',
  'mt-1.5',
  'text-xs',
  'font-medium',
  'text-light-destructive',
]);

// ─── Search Icon ─────────────────────────────────────────────────────────

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

// ─── Chevron Icon ────────────────────────────────────────────────────────

function ChevronIcon({
  open,
  className,
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      className={cn(
        'h-4 w-4 shrink-0 transition-transform duration-200',
        open && 'rotate-180',
        className
      )}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────

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

// ─── Select Component ────────────────────────────────────────────────────

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

  // ─── Theme-aware colors ────────────────────────────────────────────────

  const isDark = theme === 'dark';
  const placeholderColor = isDark ? 'text-dark-text-muted' : 'text-light-text-muted';
  const chevronColor = isDark ? 'text-dark-text-muted' : 'text-light-text-muted';
  const labelErrorColor = 'text-light-destructive';
  const requiredColor = 'text-light-destructive';
  const dropdownBg = isDark ? 'bg-dark-card' : 'bg-light-card';
  const dropdownBorder = isDark ? 'border-dark-border' : 'border-light-border';
  const searchBg = isDark ? 'bg-dark-muted' : 'bg-light-muted';
  const searchBorder = isDark ? 'border-dark-border' : 'border-light-border';
  const searchIconColor = isDark ? 'text-dark-text-muted' : 'text-light-text-muted';
  const searchTextColor = isDark ? 'text-dark-text-primary' : 'text-light-text-primary';
  const noResultsColor = isDark ? 'text-dark-text-muted' : 'text-light-text-muted';
  const optionHoverBg = isDark ? 'hover:bg-dark-hover' : 'hover:bg-light-hover';
  const optionSelectedBg = isDark ? 'bg-dark-selected' : 'bg-light-selected';
  const optionSelectedText = isDark ? 'text-dark-text-primary font-medium' : 'text-light-text-primary font-medium';
  const optionDefaultText = isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary';
  const optionCircleSelected = isDark ? 'border-dark-primary bg-dark-primary' : 'border-light-primary bg-light-primary';
  const optionCircleUnselected = isDark ? 'border-dark-border' : 'border-light-border';
  const openBorder = isDark ? 'border-dark-border-strong' : 'border-light-border-strong';

  return (
    <div className={cn('relative flex flex-col', containerClassName)}>
      {/* ─── Label ──────────────────────────────────────────────────── */}
      {label && (
        <label
          htmlFor={selectId}
          className={cn(
            labelVariants({ theme }),
            isError && labelErrorColor,
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
          isOpen && openBorder,
          className
        )}
        {...props}
      >
        <span
          className={cn(
            'truncate',
            !selectedOption && placeholderColor
          )}
        >
          {selectedOption?.label || placeholder}
        </span>
        <ChevronIcon open={isOpen} className={chevronColor} />
      </button>

      {/* ─── Dropdown ───────────────────────────────────────────────── */}
      {isOpen && (
        <div
          ref={dropdownRef}
          id={`${selectId}-listbox`}
          role="listbox"
          className={cn(
            'absolute z-50 mt-1.5 w-full overflow-hidden rounded-aphelion-lg border',
            dropdownBg,
            dropdownBorder,
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
                    'flex items-center gap-2 rounded-aphelion-md border px-3 py-2',
                    searchBg,
                    searchBorder
                  )}
                >
                  <SearchIcon className={cn('h-4 w-4 shrink-0', searchIconColor)} />
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
                      'w-full bg-transparent text-sm outline-none placeholder:text-light-text-muted',
                      searchTextColor
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
                className={cn('px-3 py-4 text-center text-sm', noResultsColor)}
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
                      'flex cursor-pointer items-center gap-3 rounded-aphelion-md px-3 py-2.5 text-sm transition-colors duration-150',
                      isDisabled && 'cursor-not-allowed opacity-40',
                      !isDisabled && optionHoverBg,
                      isSelected && cn(optionSelectedBg, optionSelectedText),
                      !isSelected && optionDefaultText,
                      optionClassName
                    )}
                  >
                    {/* Option Circle Indicator */}
                    <span
                      className={cn(
                        'h-2.5 w-2.5 shrink-0 rounded-aphelion-full border-2 transition-colors duration-150',
                        isSelected ? optionCircleSelected : optionCircleUnselected
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