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

// ═══════════════════════════════════════════════════════════════════════════
//  COMBOBOX COMPONENT SYSTEM
// ═══════════════════════════════════════════════════════════════════════════

// ─── CVA Variants ────────────────────────────────────────────────────────

const comboboxVariants = cva(['relative', 'w-full'], {
  variants: {
    theme: {
      dark: '',
      light: '',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
});

const inputVariants = cva(
  [
    'flex',
    'w-full',
    'items-center',
    'gap-2',
    'border',
    'font-normal',
    'transition-all',
    'duration-150',
    'ease-out',
    'focus-within:outline-none',
    'focus-within:ring-2',
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
          'focus-within:border-neutral-900',
          'focus-within:ring-neutral-900/15',
        ],
        dark: [
          'bg-[#0A0A0A]',
          'text-white',
          'border-white/[0.08]',
          'focus-within:border-white/20',
          'focus-within:ring-white/10',
        ],
      },
      open: {
        true: '',
        false: '',
      },
      error: {
        true: 'border-red-500 focus-within:ring-red-500/15 focus-within:border-red-500',
        false: '',
      },
    },
    compoundVariants: [
      {
        theme: 'dark',
        open: true,
        className: 'border-white/20',
      },
      {
        theme: 'light',
        open: true,
        className: 'border-neutral-900',
      },
    ],
    defaultVariants: {
      size: 'lg',
      theme: 'dark',
      open: false,
      error: false,
    },
  }
);

const dropdownVariants = cva(
  [
    'absolute',
    'z-50',
    'w-full',
    'mt-1.5',
    'rounded-xl',
    'border',
    'shadow-xl',
    'overflow-hidden',
    'outline-none',
  ],
  {
    variants: {
      theme: {
        dark: ['bg-[#111111]', 'border-white/[0.08]', 'shadow-black/40'],
        light: ['bg-white', 'border-black/[0.08]', 'shadow-black/10'],
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

const groupVariants = cva(['px-3', 'pt-3', 'pb-1'], {
  variants: {
    theme: {
      dark: '',
      light: '',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
});

const groupLabelVariants = cva(
  ['text-xs', 'font-semibold', 'uppercase', 'tracking-wider', 'mb-2'],
  {
    variants: {
      theme: {
        dark: 'text-white/40',
        light: 'text-black/40',
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

const optionVariants = cva(
  [
    'relative',
    'flex',
    'items-center',
    'gap-2.5',
    'px-3',
    'py-2',
    'text-sm',
    'rounded-lg',
    'cursor-pointer',
    'select-none',
    'transition-all',
    'duration-150',
    'outline-none',
  ],
  {
    variants: {
      theme: {
        dark: ['text-white/70', 'hover:bg-white/[0.06]', 'hover:text-white'],
        light: ['text-black/70', 'hover:bg-black/[0.06]', 'hover:text-black'],
      },
      selected: {
        true: '',
        false: '',
      },
      highlighted: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'opacity-40 cursor-not-allowed hover:bg-transparent',
        false: '',
      },
    },
    compoundVariants: [
      {
        theme: 'dark',
        selected: true,
        className: 'bg-white/[0.06] text-white',
      },
      {
        theme: 'light',
        selected: true,
        className: 'bg-black/[0.06] text-black',
      },
      {
        theme: 'dark',
        highlighted: true,
        className: 'bg-white/[0.04]',
      },
      {
        theme: 'light',
        highlighted: true,
        className: 'bg-black/[0.04]',
      },
    ],
    defaultVariants: {
      theme: 'dark',
      selected: false,
      highlighted: false,
      disabled: false,
    },
  }
);

const tagVariants = cva(
  [
    'inline-flex',
    'items-center',
    'gap-1',
    'rounded-md',
    'px-2',
    'py-0.5',
    'text-xs',
    'font-medium',
    'transition-all',
    'duration-150',
  ],
  {
    variants: {
      theme: {
        dark: [
          'bg-white/[0.08]',
          'text-white',
          'border',
          'border-white/[0.08]',
        ],
        light: [
          'bg-black/[0.08]',
          'text-black',
          'border',
          'border-black/[0.08]',
        ],
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

const emptyVariants = cva(['px-3', 'py-8', 'text-center', 'text-sm'], {
  variants: {
    theme: {
      dark: 'text-white/30',
      light: 'text-black/30',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
});

const separatorVariants = cva(['h-px', 'mx-3', 'my-1'], {
  variants: {
    theme: {
      dark: 'bg-white/[0.06]',
      light: 'bg-black/[0.06]',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
});

// ─── Types ───────────────────────────────────────────────────────────────

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
  icon?: React.ReactNode;
}

export interface ComboboxGroup {
  label: string;
  options: ComboboxOption[];
}

export interface ComboboxProps {
  options?: ComboboxOption[];
  groups?: ComboboxGroup[];
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  multiple?: boolean;
  searchable?: boolean;
  creatable?: boolean;
  clearable?: boolean;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  maxHeight?: string;
  maxTags?: number;
  className?: string;
  inputClassName?: string;
  dropdownClassName?: string;
}

// ─── Icons ───────────────────────────────────────────────────────────────

function SearchIcon({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={theme === 'dark' ? 'text-white/30' : 'text-black/30'}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ChevronDownIcon({
  open,
  theme = 'dark',
}: {
  open?: boolean;
  theme?: 'dark' | 'light';
}) {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
    >
      <path d="M6 9l6 6 6-6" />
    </motion.svg>
  );
}

function CheckIcon({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={theme === 'dark' ? 'text-white' : 'text-black'}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

// ─── Combobox Component ──────────────────────────────────────────────────

const Combobox = React.forwardRef<HTMLDivElement, ComboboxProps>(
  function Combobox(
    {
      options: propOptions,
      groups: propGroups,
      value: controlledValue,
      defaultValue,
      onChange,
      onSearch,
      placeholder = 'Select...',
      searchPlaceholder = 'Search...',
      label,
      helperText,
      error,
      disabled = false,
      multiple = false,
      searchable = true,
      creatable = false,
      clearable = true,
      theme = 'dark',
      size = 'lg',
      maxHeight = '320px',
      maxTags = 3,
      className,
      inputClassName,
      dropdownClassName,
    },
    ref
  ) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const listRef = React.useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [highlightedIndex, setHighlightedIndex] = React.useState(0);
    const [createdOptions, setCreatedOptions] = React.useState<
      ComboboxOption[]
    >([]);

    // Normalize groups
    const allGroups = React.useMemo(() => {
      if (propGroups) return propGroups;
      if (propOptions) return [{ label: '', options: propOptions }];
      return [];
    }, [propGroups, propOptions]);

    // Flatten all options for keyboard nav
    const flatOptions = React.useMemo(() => {
      const all: ComboboxOption[] = [];
      allGroups.forEach((g) => all.push(...g.options));
      all.push(...createdOptions);
      return all;
    }, [allGroups, createdOptions]);

    // Filter options by search
    const filteredGroups = React.useMemo(() => {
      if (!searchable || !searchQuery.trim()) return allGroups;
      const query = searchQuery.toLowerCase();
      return allGroups
        .map((group) => ({
          ...group,
          options: group.options.filter(
            (opt) =>
              opt.label.toLowerCase().includes(query) ||
              opt.value.toLowerCase().includes(query)
          ),
        }))
        .filter((group) => group.options.length > 0);
    }, [allGroups, searchQuery, searchable]);

    const filteredFlat = React.useMemo(() => {
      const all: ComboboxOption[] = [];
      filteredGroups.forEach((g) => all.push(...g.options));
      return all;
    }, [filteredGroups]);

    // Selection state
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = React.useState<string | string[]>(
      defaultValue ?? (multiple ? [] : '')
    );
    const currentValue = isControlled ? controlledValue : internalValue;

    const isSelected = (val: string) => {
      if (multiple) {
        return Array.isArray(currentValue) && currentValue.includes(val);
      }
      return currentValue === val;
    };

    const getSelectedLabels = () => {
      if (multiple) {
        const vals = Array.isArray(currentValue) ? currentValue : [];
        return vals
          .map((v) => {
            const opt = flatOptions.find((o) => o.value === v);
            return opt
              ? { value: v, label: opt.label }
              : { value: v, label: v };
          })
          .filter(Boolean);
      }
      const opt = flatOptions.find((o) => o.value === currentValue);
      return opt ? [{ value: currentValue as string, label: opt.label }] : [];
    };

    const selectedLabels = getSelectedLabels();

    // Toggle selection
    const toggleOption = (option: ComboboxOption) => {
      if (option.disabled) return;

      if (multiple) {
        const current = Array.isArray(currentValue) ? currentValue : [];
        const next = current.includes(option.value)
          ? current.filter((v) => v !== option.value)
          : [...current, option.value];
        if (!isControlled) setInternalValue(next);
        onChange?.(next);
      } else {
        const next = currentValue === option.value ? '' : option.value;
        if (!isControlled) setInternalValue(next);
        onChange?.(next);
        if (currentValue !== option.value) {
          setIsOpen(false);
          setSearchQuery('');
        }
      }
    };

    // Create new option
    const createOption = () => {
      if (!creatable || !searchQuery.trim()) return;
      const newOpt: ComboboxOption = {
        value: searchQuery.toLowerCase().replace(/\s+/g, '-'),
        label: searchQuery.trim(),
      };
      setCreatedOptions((prev) => [...prev, newOpt]);
      toggleOption(newOpt);
      setSearchQuery('');
    };

    // Clear all
    const clearAll = (e: React.MouseEvent) => {
      e.stopPropagation();
      const next = multiple ? [] : '';
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
      setSearchQuery('');
      inputRef.current?.focus();
    };

    // Remove tag
    const removeTag = (val: string) => {
      if (multiple) {
        const current = Array.isArray(currentValue) ? currentValue : [];
        const next = current.filter((v) => v !== val);
        if (!isControlled) setInternalValue(next);
        onChange?.(next);
      }
    };

    // Open/close
    const openDropdown = () => {
      if (!disabled) {
        setIsOpen(true);
        setHighlightedIndex(0);
      }
    };

    const closeDropdown = () => {
      setIsOpen(false);
      setSearchQuery('');
      setHighlightedIndex(0);
    };

    // Click outside
    React.useEffect(() => {
      if (!isOpen) return;
      const handleClick = (e: MouseEvent) => {
        const target = e.target as Node;
        if (containerRef.current && !containerRef.current.contains(target)) {
          closeDropdown();
        }
      };
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }, [isOpen]);

    // Keyboard navigation
    React.useEffect(() => {
      if (!isOpen) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            setHighlightedIndex((prev) =>
              Math.min(prev + 1, filteredFlat.length - 1)
            );
            break;
          case 'ArrowUp':
            e.preventDefault();
            setHighlightedIndex((prev) => Math.max(prev - 1, 0));
            break;
          case 'Enter':
            e.preventDefault();
            if (filteredFlat[highlightedIndex]) {
              toggleOption(filteredFlat[highlightedIndex]);
            } else if (creatable && searchQuery.trim()) {
              createOption();
            }
            break;
          case 'Escape':
            e.preventDefault();
            closeDropdown();
            break;
          case 'Backspace':
            if (multiple && searchQuery === '' && selectedLabels.length > 0) {
              const lastTag = selectedLabels[selectedLabels.length - 1];
              removeTag(lastTag.value);
            }
            break;
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, highlightedIndex, filteredFlat, searchQuery, selectedLabels]);

    // Scroll highlighted into view
    React.useEffect(() => {
      if (!isOpen || !listRef.current) return;
      const highlightedEl = listRef.current.querySelector(
        `[data-index="${highlightedIndex}"]`
      );
      highlightedEl?.scrollIntoView({ block: 'nearest' });
    }, [highlightedIndex, isOpen]);

    // Handle search
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setSearchQuery(val);
      setHighlightedIndex(0);
      onSearch?.(val);
    };

    // Show create option?
    const canCreate =
      creatable &&
      searchQuery.trim() &&
      !flatOptions.some(
        (o) => o.label.toLowerCase() === searchQuery.trim().toLowerCase()
      );

    const hasError = Boolean(error);

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref)
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              node;
        }}
        className={cn(comboboxVariants({ theme }), className)}
        style={{ fontFamily: 'sans-serif' }}
      >
        {/* ─── Label ────────────────────────────────────────────── */}
        {label && (
          <label
            className={cn(
              'block text-sm font-medium mb-2',
              theme === 'dark' ? 'text-white' : 'text-black'
            )}
          >
            {label}
          </label>
        )}

        {/* ─── Input ────────────────────────────────────────────── */}
        <div
          className={cn(
            inputVariants({ size, theme, open: isOpen, error: hasError }),
            inputClassName
          )}
          onClick={() => {
            if (!isOpen) openDropdown();
            inputRef.current?.focus();
          }}
        >
          {/* Search icon */}
          {searchable && <SearchIcon theme={theme} />}

          {/* Tags (multiple) or text */}
          <div className="flex flex-1 flex-wrap items-center gap-1.5 overflow-hidden">
            {multiple &&
              selectedLabels.slice(0, maxTags).map((tag) => (
                <span key={tag.value} className={cn(tagVariants({ theme }))}>
                  {tag.label}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTag(tag.value);
                    }}
                    className={cn(
                      'inline-flex items-center justify-center rounded-sm p-0.5 transition-colors',
                      theme === 'dark'
                        ? 'hover:bg-white/10 text-white/60'
                        : 'hover:bg-black/10 text-black/60'
                    )}
                  >
                    <XIcon theme={theme} />
                  </button>
                </span>
              ))}

            {multiple && selectedLabels.length > maxTags && (
              <span className={cn(tagVariants({ theme }))}>
                +{selectedLabels.length - maxTags}
              </span>
            )}

            {/* Input field */}
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={openDropdown}
              placeholder={
                !multiple && selectedLabels.length > 0
                  ? ''
                  : multiple && selectedLabels.length > 0
                    ? ''
                    : placeholder
              }
              disabled={disabled}
              className={cn(
                'flex-1 bg-transparent outline-none min-w-[60px]',
                theme === 'dark'
                  ? 'text-white placeholder:text-white/30'
                  : 'text-neutral-900 placeholder:text-neutral-400',
                size === 'sm' && 'text-xs',
                size === 'md' && 'text-sm',
                size === 'lg' && 'text-base',
                size === 'xl' && 'text-base'
              )}
              style={{ fontFamily: 'sans-serif' }}
            />
          </div>

          {/* Clear + Chevron */}
          <div className="flex items-center gap-1.5 shrink-0">
            {clearable && selectedLabels.length > 0 && (
              <button
                type="button"
                onClick={clearAll}
                className={cn(
                  'inline-flex items-center justify-center rounded-md p-0.5 transition-colors',
                  theme === 'dark'
                    ? 'text-white/30 hover:text-white/60 hover:bg-white/[0.06]'
                    : 'text-black/30 hover:text-black/60 hover:bg-black/[0.06]'
                )}
              >
                <XIcon theme={theme} />
              </button>
            )}
            <ChevronDownIcon open={isOpen} theme={theme} />
          </div>
        </div>

        {/* ─── Error / Helper ───────────────────────────────────── */}
        {hasError && (
          <span
            role="alert"
            className="block mt-1.5 text-xs font-medium text-red-500"
          >
            {error}
          </span>
        )}
        {!hasError && helperText && (
          <span
            className={cn(
              'block mt-1.5 text-xs',
              theme === 'dark' ? 'text-white/40' : 'text-neutral-500'
            )}
          >
            {helperText}
          </span>
        )}

        {/* ─── Dropdown ─────────────────────────────────────────── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={listRef}
              initial={{ opacity: 0, y: -4, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={cn(dropdownVariants({ theme }), dropdownClassName)}
              style={{ maxHeight, overflowY: 'auto', fontFamily: 'sans-serif' }}
            >
              {/* Search input inside dropdown (when not searchable in main input) */}
              {searchable && (
                <div
                  className={cn(
                    'sticky top-0 z-10 px-3 py-2',
                    theme === 'dark' ? 'bg-[#111111]' : 'bg-white'
                  )}
                >
                  <div
                    className={cn(
                      'flex items-center gap-2 rounded-lg border px-3 py-2',
                      theme === 'dark'
                        ? 'border-white/[0.08] bg-[#0A0A0A]'
                        : 'border-black/[0.08] bg-neutral-50'
                    )}
                  >
                    <SearchIcon theme={theme} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder={searchPlaceholder}
                      className={cn(
                        'flex-1 bg-transparent outline-none text-sm',
                        theme === 'dark'
                          ? 'text-white placeholder:text-white/30'
                          : 'text-neutral-900 placeholder:text-neutral-400'
                      )}
                      style={{ fontFamily: 'sans-serif' }}
                      autoFocus
                    />
                  </div>
                </div>
              )}

              {/* Options */}
              <div className="py-1">
                {filteredGroups.length === 0 && !canCreate && (
                  <div className={cn(emptyVariants({ theme }))}>
                    No results found
                  </div>
                )}

                {filteredGroups.map((group, groupIdx) => (
                  <React.Fragment key={group.label || `group-${groupIdx}`}>
                    {group.label && (
                      <div className={cn(groupVariants({ theme }))}>
                        <span className={cn(groupLabelVariants({ theme }))}>
                          {group.label}
                        </span>
                      </div>
                    )}
                    {group.options.map((option, optIdx) => {
                      const flatIdx = filteredFlat.findIndex(
                        (o) => o.value === option.value
                      );
                      const selected = isSelected(option.value);
                      const highlighted = flatIdx === highlightedIndex;

                      return (
                        <div
                          key={option.value}
                          data-index={flatIdx}
                          className={cn(
                            optionVariants({
                              theme,
                              selected,
                              highlighted,
                              disabled: option.disabled,
                            }),
                            'mx-1'
                          )}
                          onClick={() => toggleOption(option)}
                          onMouseEnter={() => setHighlightedIndex(flatIdx)}
                        >
                          {/* Checkbox for multi-select */}
                          {multiple && (
                            <span
                              className={cn(
                                'inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-all duration-150',
                                theme === 'dark'
                                  ? selected
                                    ? 'border-white bg-white text-black'
                                    : 'border-white/20'
                                  : selected
                                    ? 'border-black bg-black text-white'
                                    : 'border-black/20'
                              )}
                            >
                              {selected && <CheckIcon theme={theme} />}
                            </span>
                          )}

                          {/* Single select indicator */}
                          {!multiple && selected && (
                            <span className="absolute left-3">
                              <CheckIcon theme={theme} />
                            </span>
                          )}

                          <span
                            className={cn(
                              'flex items-center gap-2',
                              !multiple && selected && 'pl-6'
                            )}
                          >
                            {option.icon}
                            {option.label}
                          </span>
                        </div>
                      );
                    })}
                    {groupIdx < filteredGroups.length - 1 && (
                      <div className={cn(separatorVariants({ theme }))} />
                    )}
                  </React.Fragment>
                ))}

                {/* Create option */}
                {canCreate && (
                  <>
                    {filteredGroups.length > 0 && (
                      <div className={cn(separatorVariants({ theme }))} />
                    )}
                    <div
                      className={cn(
                        optionVariants({
                          theme,
                          highlighted: highlightedIndex === filteredFlat.length,
                        }),
                        'mx-1'
                      )}
                      onClick={createOption}
                      onMouseEnter={() =>
                        setHighlightedIndex(filteredFlat.length)
                      }
                    >
                      <span className="text-white/50">
                        Create "{searchQuery.trim()}"
                      </span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Combobox.displayName = 'Combobox';

// ═══════════════════════════════════════════════════════════════════════════
//  USE COMBOBOX HOOK
// ═══════════════════════════════════════════════════════════════════════════

export function useCombobox(defaultValue?: string | string[]) {
  const [value, setValue] = React.useState<string | string[]>(
    defaultValue ?? ''
  );
  const [searchQuery, setSearchQuery] = React.useState('');

  return {
    value,
    setValue,
    searchQuery,
    setSearchQuery,
    clear: () => {
      setValue('');
      setSearchQuery('');
    },
  };
}

export {
  Combobox,
  comboboxVariants,
  inputVariants,
  dropdownVariants,
  groupVariants,
  groupLabelVariants,
  optionVariants,
  tagVariants,
  emptyVariants,
  separatorVariants,
};

export default Combobox;
