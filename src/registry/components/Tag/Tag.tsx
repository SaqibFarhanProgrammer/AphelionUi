"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const tagsContainerVariants = cva(
  [
    "relative",
    "w-full",
    "min-h-[42px]",
    "flex",
    "flex-wrap",
    "items-center",
    "gap-2",
    "border",
    "rounded-aphelion-lg",
    "px-3",
    "py-2",
    "transition-all",
    "duration-150",
    "cursor-text",
    "focus-within:ring-2",
    "focus-within:ring-offset-1",
  ],
  {
    variants: {
      theme: {
        light: [
          "bg-light-background",
          "border-light-input-border",
          "text-light-text-primary",
          "focus-within:border-light-border-strong",
          "focus-within:ring-light-focus-ring",
          "focus-within:ring-offset-light-background",
        ],
        dark: [
          "bg-dark-background",
          "border-dark-input-border",
          "text-dark-text-primary",
          "focus-within:border-dark-border-strong",
          "focus-within:ring-dark-focus-ring",
          "focus-within:ring-offset-dark-background",
        ],
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      theme: "dark",
      disabled: false,
    },
  }
);


const tagVariants = cva(
  [
    "inline-flex",
    "items-center",
    "gap-1.5",
    "px-2.5",
    "py-1",
    "rounded-aphelion-full",
    "text-sm",
    "font-medium",
    "transition-all",
    "duration-150",
    "select-none",
  ],
  {
    variants: {
      theme: {
        light: "bg-light-primary text-light-primary-foreground",
        dark: "bg-dark-primary text-dark-primary-foreground",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-2.5 py-1",
        lg: "text-base px-3 py-1.5",
      },
    },
    defaultVariants: {
      theme: "dark",
      size: "md",
    },
  }
);


const dropdownVariants = cva(
  [
    "absolute",
    "z-50",
    "w-full",
    "mt-1.5",
    "rounded-aphelion-xl",
    "border",
    "overflow-hidden",
    "outline-none",
  ],
  {
    variants: {
      theme: {
        light: ["bg-light-card", "border-light-border", "shadow-aphelion-lg"],
        dark: ["bg-dark-card", "border-dark-border", "shadow-aphelion-lg"],
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  }
);


const optionVariants = cva(
  [
    "relative",
    "flex",
    "items-center",
    "gap-3",
    "px-3",
    "py-2.5",
    "text-sm",
    "rounded-aphelion-lg",
    "cursor-pointer",
    "select-none",
    "transition-all",
    "duration-150",
    "outline-none",
    "mx-1",
  ],
  {
    variants: {
      theme: {
        light: [
          "text-light-text-secondary",
          "hover:bg-light-hover",
          "hover:text-light-text-primary",
        ],
        dark: [
          "text-dark-text-secondary",
          "hover:bg-dark-hover",
          "hover:text-dark-text-primary",
        ],
      },
      selected: {
        true: "",
        false: "",
      },
      highlighted: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        theme: "light",
        selected: true,
        className: "bg-light-selected text-light-text-primary font-medium",
      },
      {
        theme: "dark",
        selected: true,
        className: "bg-dark-selected text-dark-text-primary font-medium",
      },
      {
        theme: "light",
        highlighted: true,
        className: "bg-light-hover",
      },
      {
        theme: "dark",
        highlighted: true,
        className: "bg-dark-hover",
      },
    ],
    defaultVariants: {
      theme: "dark",
      selected: false,
      highlighted: false,
    },
  }
);


const searchInputVariants = cva(
  [
    "w-full",
    "bg-transparent",
    "outline-none",
    "text-sm",
    "placeholder:text-light-text-muted",
  ],
  {
    variants: {
      theme: {
        light: "text-light-text-primary",
        dark: "text-dark-text-primary",
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  }
);


export interface TagOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface TagGroup {
  label: string;
  options: TagOption[];
}

export interface TagsInputProps
  extends VariantProps<typeof tagsContainerVariants> {
  options?: TagOption[];
  groups?: TagGroup[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (values: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  multiple?: boolean;
  searchable?: boolean;
  creatable?: boolean;
  maxTags?: number;
  maxDropdownHeight?: string;
  className?: string;
  containerClassName?: string;
  tagSize?: "sm" | "md" | "lg";
  onCreateTag?: (value: string) => void;
  emptyMessage?: string;
}


function XIcon({ className }: { className?: string }) {
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
      className={className}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
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
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ChevronDownIcon({
  open,
  className,
}: {
  open?: boolean;
  className?: string;
}) {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      <path d="M6 9l6 6 6-6" />
    </motion.svg>
  );
}


const TagsInput = React.forwardRef<HTMLDivElement, TagsInputProps>(
  function TagsInput(
    {
      options: propOptions,
      groups: propGroups,
      value: controlledValue,
      defaultValue,
      onChange,
      placeholder = "Select a tag...",
      searchPlaceholder = "Add or remove tags...",
      label,
      helperText,
      error,
      disabled = false,
      multiple = true,
      searchable = true,
      creatable = false,
      maxTags = 3,
      maxDropdownHeight = "280px",
      theme = "dark",
      tagSize = "md",
      className,
      containerClassName,
      onCreateTag,
      emptyMessage = "No matching tags found.",
    },
    ref
  ) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [highlightedIndex, setHighlightedIndex] = React.useState(0);
    const [createdOptions, setCreatedOptions] = React.useState<TagOption[]>([]);

    const allGroups = React.useMemo<TagGroup[]>(() => {
      if (propGroups) return propGroups;
      if (propOptions) return [{ label: "", options: propOptions }];
      return [];
    }, [propGroups, propOptions]);

    const flatOptions = React.useMemo<TagOption[]>(() => {
      const all: TagOption[] = [];
      allGroups.forEach((g) => all.push(...g.options));
      all.push(...createdOptions);
      return all;
    }, [allGroups, createdOptions]);

    const filteredGroups = React.useMemo<TagGroup[]>(() => {
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

    const filteredFlat = React.useMemo<TagOption[]>(() => {
      const all: TagOption[] = [];
      filteredGroups.forEach((g) => all.push(...g.options));
      return all;
    }, [filteredGroups]);

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = React.useState<string[]>(
      defaultValue ?? []
    );
    const currentValue = isControlled ? controlledValue : internalValue;

    const isSelected = (val: string) => currentValue.includes(val);

    const getSelectedLabels = () => {
      return currentValue
        .map((v) => {
          const opt = flatOptions.find((o) => o.value === v);
          return opt ? { value: v, label: opt.label } : { value: v, label: v };
        })
        .filter(Boolean);
    };

    const selectedLabels = getSelectedLabels();

    const toggleOption = (option: TagOption) => {
      if (option.disabled || disabled) return;

      if (multiple) {
        const next = currentValue.includes(option.value)
          ? currentValue.filter((v) => v !== option.value)
          : [...currentValue, option.value];
        if (!isControlled) setInternalValue(next);
        onChange?.(next);
      } else {
        const next = currentValue.includes(option.value) ? [] : [option.value];
        if (!isControlled) setInternalValue(next);
        onChange?.(next);
        if (!currentValue.includes(option.value)) {
          setIsOpen(false);
          setSearchQuery("");
        }
      }
    };

    const removeTag = (val: string) => {
      if (disabled) return;
      const next = currentValue.filter((v) => v !== val);
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    };

    const createTag = () => {
      if (!creatable || !searchQuery.trim()) return;
      const newValue = searchQuery.toLowerCase().replace(/\s+/g, "-");
      const newOpt: TagOption = {
        value: newValue,
        label: searchQuery.trim(),
      };
      setCreatedOptions((prev) => [...prev, newOpt]);
      toggleOption(newOpt);
      onCreateTag?.(newValue);
      setSearchQuery("");
    };

    const openDropdown = () => {
      if (!disabled) {
        setIsOpen(true);
        setHighlightedIndex(0);
        setTimeout(() => inputRef.current?.focus(), 10);
      }
    };

    const closeDropdown = () => {
      setIsOpen(false);
      setSearchQuery("");
      setHighlightedIndex(0);
    };

    React.useEffect(() => {
      if (!isOpen) return;
      const handleClick = (e: MouseEvent) => {
        const target = e.target as Node;
        if (
          containerRef.current &&
          !containerRef.current.contains(target)
        ) {
          closeDropdown();
        }
      };
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }, [isOpen]);

    React.useEffect(() => {
      if (!isOpen) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault();
            setHighlightedIndex((prev) =>
              Math.min(prev + 1, filteredFlat.length - 1)
            );
            break;
          case "ArrowUp":
            e.preventDefault();
            setHighlightedIndex((prev) => Math.max(prev - 1, 0));
            break;
          case "Enter":
            e.preventDefault();
            if (filteredFlat[highlightedIndex]) {
              toggleOption(filteredFlat[highlightedIndex]);
            } else if (creatable && searchQuery.trim()) {
              createTag();
            }
            break;
          case "Escape":
            e.preventDefault();
            closeDropdown();
            break;
          case "Backspace":
            if (searchQuery === "" && selectedLabels.length > 0) {
              const lastTag = selectedLabels[selectedLabels.length - 1];
              removeTag(lastTag.value);
            }
            break;
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, highlightedIndex, filteredFlat, searchQuery, selectedLabels]);

    React.useEffect(() => {
      if (!isOpen || !dropdownRef.current) return;
      const highlightedEl = dropdownRef.current.querySelector(
        `[data-index="${highlightedIndex}"]`
      );
      highlightedEl?.scrollIntoView({ block: "nearest" });
    }, [highlightedIndex, isOpen]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setSearchQuery(val);
      setHighlightedIndex(0);
    };

    const canCreate =
      creatable &&
      searchQuery.trim() &&
      !flatOptions.some(
        (o) => o.label.toLowerCase() === searchQuery.trim().toLowerCase()
      );

    const hasError = Boolean(error);

    const visibleTags =
      maxTags && selectedLabels.length > maxTags
        ? selectedLabels.slice(0, maxTags)
        : selectedLabels;
    const remainingCount =
      maxTags && selectedLabels.length > maxTags
        ? selectedLabels.length - maxTags
        : 0;

    const isDark = theme === "dark";
    const labelColor = isDark ? "text-dark-text-primary" : "text-light-text-primary";
    const chevronColor = isDark ? "text-dark-text-muted" : "text-light-text-muted";
    const errorBorder = "border-light-destructive focus-within:ring-light-focus-ring";
    const errorText = "text-light-destructive";
    const helperColor = isDark ? "text-dark-text-muted" : "text-light-text-muted";
    const dropdownStickyBg = isDark ? "bg-dark-card" : "bg-light-card";
    const searchInnerBg = isDark ? "bg-dark-background" : "bg-light-background";
    const searchInnerBorder = isDark ? "border-dark-border" : "border-light-border";
    const searchIconColor = isDark ? "text-dark-text-muted" : "text-light-text-muted";
    const searchInnerTextColor = isDark ? "text-dark-text-primary" : "text-light-text-primary";
    const searchInnerPlaceholder = isDark ? "placeholder:text-dark-text-muted" : "placeholder:text-light-text-muted";
    const emptyColor = isDark ? "text-dark-text-muted" : "text-light-text-muted";
    const groupLabelColor = isDark ? "text-dark-text-muted" : "text-light-text-muted";
    const separatorColor = isDark ? "bg-dark-divider" : "bg-light-divider";
    const createOptionColor = isDark ? "text-dark-text-muted" : "text-light-text-muted";
    const remainingBg = isDark ? "bg-dark-muted" : "bg-light-muted";
    const remainingText = isDark ? "text-dark-text-secondary" : "text-light-text-muted";
    const tagRemoveHoverBg = isDark ? "hover:bg-dark-hover" : "hover:bg-light-hover";
    const tagRemoveDefault = isDark ? "text-dark-primary-foreground/60 hover:text-dark-primary-foreground" : "text-light-primary-foreground/60 hover:text-light-primary-foreground";
    const checkboxUnchecked = isDark ? "border-dark-border" : "border-light-border";
    const checkboxChecked = isDark ? "border-dark-primary bg-dark-primary text-dark-primary-foreground" : "border-light-primary bg-light-primary text-light-primary-foreground";
    const singleCheckColor = isDark ? "text-dark-text-primary" : "text-light-text-primary";

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref)
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              node;
        }}
        className={cn("relative w-full", containerClassName)}
      >
        {label && (
          <label
            className={cn("block text-sm font-medium mb-2", labelColor)}
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            tagsContainerVariants({ theme, disabled }),
            hasError && errorBorder,
            className
          )}
          onClick={() => {
            if (!disabled) {
              openDropdown();
              inputRef.current?.focus();
            }
          }}
        >
          {visibleTags.map((tag) => (
            <motion.span
              key={tag.value}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className={cn(tagVariants({ theme, size: tagSize }))}
            >
              <span>{tag.label}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTag(tag.value);
                }}
                className={cn(
                  "inline-flex items-center justify-center rounded-aphelion-full p-0.5 transition-colors",
                  tagRemoveDefault,
                  tagRemoveHoverBg
                )}
                aria-label={`Remove ${tag.label}`}
              >
                <XIcon />
              </button>
            </motion.span>
          ))}

          {remainingCount > 0 && (
            <span
              className={cn(
                "inline-flex items-center px-2 py-1 rounded-aphelion-full text-xs font-medium",
                remainingBg,
                remainingText
              )}
            >
              +{remainingCount}
            </span>
          )}

          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={openDropdown}
            placeholder={selectedLabels.length === 0 ? placeholder : ""}
            disabled={disabled}
            className={cn(
              searchInputVariants({ theme }),
              "flex-1 min-w-[80px] h-6",
              !multiple && selectedLabels.length > 0 && "hidden"
            )}
          />

          <ChevronDownIcon
            open={isOpen}
            className={cn("shrink-0 ml-auto", chevronColor)}
          />
        </div>

        {hasError && (
          <span role="alert" className={cn("block mt-1.5 text-xs font-medium", errorText)}>
            {error}
          </span>
        )}
        {!hasError && helperText && (
          <span className={cn("block mt-1.5 text-xs", helperColor)}>
            {helperText}
          </span>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: -4, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={cn(dropdownVariants({ theme }))}
              style={{
                maxHeight: maxDropdownHeight,
                overflowY: "auto",
              }}
            >
              {searchable && (
                <div
                  className={cn("sticky top-0 z-10 px-3 py-2", dropdownStickyBg)}
                >
                  <div
                    className={cn(
                      "flex items-center gap-2 rounded-aphelion-lg border px-3 py-2",
                      searchInnerBorder,
                      searchInnerBg
                    )}
                  >
                    <SearchIcon className={searchIconColor} />
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder={searchPlaceholder}
                      className={cn(
                        "flex-1 bg-transparent outline-none text-sm",
                        searchInnerTextColor,
                        searchInnerPlaceholder
                      )}
                      autoFocus
                    />
                  </div>
                </div>
              )}

              <div className="py-1">
                {filteredGroups.length === 0 && !canCreate && (
                  <div className={cn("px-3 py-8 text-center text-sm", emptyColor)}>
                    {emptyMessage}
                  </div>
                )}

                {filteredGroups.map((group, groupIdx) => (
                  <React.Fragment key={group.label || `group-${groupIdx}`}>
                    {group.label && (
                      <div className="px-3 pt-3 pb-1">
                        <span
                          className={cn(
                            "text-xs font-semibold uppercase tracking-wider",
                            groupLabelColor
                          )}
                        >
                          {group.label}
                        </span>
                      </div>
                    )}

                    {group.options.map((option) => {
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
                            optionVariants({ theme, selected, highlighted })
                          )}
                          onClick={() => toggleOption(option)}
                          onMouseEnter={() => setHighlightedIndex(flatIdx)}
                        >
                          {multiple && (
                            <span
                              className={cn(
                                "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-aphelion-xs border transition-all duration-150",
                                selected ? checkboxChecked : checkboxUnchecked
                              )}
                            >
                              {selected && <CheckIcon />}
                            </span>
                          )}

                          {!multiple && selected && (
                            <span className="absolute left-3">
                              <CheckIcon className={singleCheckColor} />
                            </span>
                          )}

                          <span
                            className={cn(
                              "flex-1",
                              !multiple && selected && "pl-6"
                            )}
                          >
                            {option.label}
                          </span>
                        </div>
                      );
                    })}

                    {groupIdx < filteredGroups.length - 1 && (
                      <div className={cn("h-px mx-3 my-1", separatorColor)} />
                    )}
                  </React.Fragment>
                ))}

                {canCreate && (
                  <>
                    {filteredGroups.length > 0 && (
                      <div className={cn("h-px mx-3 my-1", separatorColor)} />
                    )}
                    <div
                      className={cn(
                        optionVariants({
                          theme,
                          highlighted: highlightedIndex === filteredFlat.length,
                        }),
                        "mx-1"
                      )}
                      onClick={createTag}
                      onMouseEnter={() =>
                        setHighlightedIndex(filteredFlat.length)
                      }
                    >
                      <span className={cn("text-sm", createOptionColor)}>
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

TagsInput.displayName = "TagsInput";


export function useTagsInput(defaultValue?: string[]) {
  const [value, setValue] = React.useState<string[]>(defaultValue ?? []);
  const [searchQuery, setSearchQuery] = React.useState("");

  return {
    value,
    setValue,
    searchQuery,
    setSearchQuery,
    add: (val: string) =>
      setValue((prev) => (prev.includes(val) ? prev : [...prev, val])),
    remove: (val: string) =>
      setValue((prev) => prev.filter((v) => v !== val)),
    toggle: (val: string) =>
      setValue((prev) =>
        prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
      ),
    clear: () => {
      setValue([]);
      setSearchQuery("");
    },
  };
}

export {
  TagsInput,
  tagsContainerVariants,
  tagVariants,
  dropdownVariants,
  optionVariants,
  searchInputVariants,
};

export default TagsInput;