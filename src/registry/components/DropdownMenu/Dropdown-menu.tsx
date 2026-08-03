'use client';

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────

export interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  href?: string;
  onClick?: () => void;
  items?: DropdownItem[];
  separator?: boolean;
  checked?: boolean;
  radio?: boolean;
  radioGroup?: string;
}

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  alignOffset?: number;
  className?: string;
  width?: number | string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  closeOnItemClick?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  disabled?: boolean;
  theme?: 'dark' | 'light';
}

interface DropdownContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: string | null;
  setActiveItem: (id: string | null) => void;
  registerItem: (id: string) => void;
  unregisterItem: (id: string) => void;
  focusNext: () => void;
  focusPrev: () => void;
  focusFirst: () => void;
  focusLast: () => void;
  selectActive: () => void;
  itemIds: string[];
  theme: 'dark' | 'light';
}

// ─── Context ──────────────────────────────────────────────────────────

const DropdownContext = createContext<DropdownContextType | null>(null);

function useDropdown() {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error('useDropdown must be used within DropdownMenu');
  return ctx;
}

// ─── Helper: Find item by ID recursively ─────────────────────────────

function findItemById(items: DropdownItem[], id: string): DropdownItem | null {
  for (const item of items) {
    if (item.id === id) return item;
    if (item.items) {
      const found = findItemById(item.items, id);
      if (found) return found;
    }
  }
  return null;
}

// ─── Helper: Collect all item IDs recursively ────────────────────────

function collectItemIds(items: DropdownItem[]): string[] {
  const ids: string[] = [];
  for (const item of items) {
    if (item.id && !item.separator) ids.push(item.id);
    if (item.items) ids.push(...collectItemIds(item.items));
  }
  return ids;
}

// ─── Icons (inline SVGs - no external deps) ──────────────────────────

function ChevronRightIcon({ className = '' }: { className?: string }) {
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
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function ChevronLeftIcon({ className = '' }: { className?: string }) {
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
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
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

function CircleIcon({
  className = '',
  filled = false,
}: {
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}

// ─── Inline Button ───────────────────────────────────────────────────

function MenuButton({
  onClick,
  disabled,
  className,
  children,
}: {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}

// ─── Navigation State ────────────────────────────────────────────────

interface NavState {
  items: DropdownItem[];
  title?: string;
  depth: number;
}

// ─── Dropdown Content (with nested navigation) ───────────────────────

function DropdownContent({
  navStack,
  onNavigate,
  onBack,
  closeOnItemClick,
  selectedRadios,
  onRadioSelect,
  checkedItems,
  onCheckToggle,
}: {
  navStack: NavState[];
  onNavigate: (items: DropdownItem[], title: string, depth: number) => void;
  onBack: () => void;
  closeOnItemClick: boolean;
  selectedRadios: Record<string, string>;
  onRadioSelect: (group: string, value: string) => void;
  checkedItems: Set<string>;
  onCheckToggle: (id: string) => void;
}) {
  const currentNav = navStack[navStack.length - 1];
  const isRoot = navStack.length === 1;
  const { setOpen, theme } = useDropdown();

  const menuBg = theme === 'dark' ? 'bg-dark-card' : 'bg-light-card';
  const menuBorder =
    theme === 'dark' ? 'border-dark-border' : 'border-light-border';
  const itemDefaultText =
    theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary';
  const itemHoverText =
    theme === 'dark'
      ? 'hover:text-dark-text-primary'
      : 'hover:text-light-text-primary';
  const itemHoverBg =
    theme === 'dark' ? 'hover:bg-dark-hover' : 'hover:bg-light-hover';
  const itemDisabledText =
    theme === 'dark' ? 'text-dark-text-disabled' : 'text-light-text-disabled';
  const dangerText =
    theme === 'dark' ? 'text-dark-destructive' : 'text-light-destructive';
  const dangerHoverText =
    theme === 'dark'
      ? 'hover:text-dark-destructive'
      : 'hover:text-light-destructive';
  const dangerHoverBg =
    theme === 'dark'
      ? 'hover:bg-dark-destructive-background'
      : 'hover:bg-light-destructive-background';
  const mutedIconColor =
    theme === 'dark' ? 'text-dark-text-muted' : 'text-light-text-muted';
  const shortcutColor =
    theme === 'dark' ? 'text-dark-text-muted' : 'text-light-text-muted';
  const separatorColor =
    theme === 'dark' ? 'bg-dark-divider' : 'bg-light-divider';
  const labelColor =
    theme === 'dark' ? 'text-dark-text-muted' : 'text-light-text-muted';
  const radioDefault =
    theme === 'dark' ? 'text-dark-text-muted' : 'text-light-text-muted';
  const radioSelected =
    theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary';
  const checkboxBorder =
    theme === 'dark' ? 'border-dark-border' : 'border-light-border';
  const checkboxCheckedColor =
    theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary';

  const handleItemClick = (item: DropdownItem) => {
    if (item.disabled) return;

    if (item.items && item.items.length > 0) {
      onNavigate(item.items, item.label, currentNav.depth + 1);
      return;
    }

    if (item.radio && item.radioGroup) {
      onRadioSelect(item.radioGroup, item.id);
      return;
    }

    if (item.checked !== undefined) {
      onCheckToggle(item.id);
      return;
    }

    if (item.onClick) item.onClick();
    if (closeOnItemClick) setOpen(false);
  };

  return (
    <div
      className={cn(
        'overflow-hidden rounded-aphelion-xl border py-1 min-w-55 max-w-[calc(100vw-1rem)]',
        menuBg,
        menuBorder
      )}
    >
      {/* Back Button */}
      {!isRoot && (
        <MenuButton
          onClick={onBack}
          className={cn(
            'relative mx-1 flex w-[calc(100%-8px)] items-center gap-2.5 rounded-aphelion-lg px-3 py-2 text-left text-[13px] transition-all duration-150 outline-none',
            itemDefaultText,
            itemHoverBg,
            itemHoverText,
            'cursor-pointer'
          )}
        >
          <ChevronLeftIcon className={cn('shrink-0', mutedIconColor)} />
          <span className="font-medium">Back</span>
        </MenuButton>
      )}

      {/* Title */}
      {!isRoot && currentNav.title && (
        <div
          className={cn(
            'mx-1 px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] uppercase',
            labelColor
          )}
        >
          {currentNav.title}
        </div>
      )}

      {/* Root label */}
      {isRoot && (
        <div
          className={cn(
            'mx-1 px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] uppercase',
            labelColor
          )}
        >
          Menu Actions
        </div>
      )}

      {/* Items */}
      {currentNav.items.map((item, index) => {
        if (item.separator) {
          return (
            <div
              key={`sep-${index}`}
              className={cn('mx-3 my-1 h-px', separatorColor)}
            />
          );
        }

        const isSubmenu = item.items && item.items.length > 0;
        const isChecked = checkedItems.has(item.id);
        const isRadioSelected =
          item.radioGroup && selectedRadios[item.radioGroup] === item.id;

        return (
          <MenuButton
            key={item.id || `item-${index}`}
            onClick={() => handleItemClick(item)}
            disabled={item.disabled}
            className={cn(
              'relative flex min-w-0 max-w-full items-center gap-2.5 px-3 py-2 mx-1 rounded-aphelion-lg text-[13px] transition-all duration-150 outline-none w-[calc(100%-8px)] text-left',
              item.disabled
                ? `opacity-40 cursor-not-allowed ${itemDisabledText}`
                : item.danger
                  ? `${dangerText} ${dangerHoverText} ${dangerHoverBg} cursor-pointer`
                  : `${itemDefaultText} ${itemHoverBg} ${itemHoverText} cursor-pointer`
            )}
          >
            {/* Radio indicator */}
            {item.radio && (
              <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                <CircleIcon
                  className={isRadioSelected ? radioSelected : radioDefault}
                  filled={isRadioSelected as boolean}
                />
              </span>
            )}

            {/* Checkbox indicator */}
            {item.checked !== undefined && !item.radio && (
              <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                {isChecked ? (
                  <CheckIcon className={checkboxCheckedColor} />
                ) : (
                  <span
                    className={cn('h-3.5 w-3.5 rounded border', checkboxBorder)}
                  />
                )}
              </span>
            )}

            {/* Regular icon */}
            {item.icon && !item.radio && item.checked === undefined && (
              <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                {item.icon}
              </span>
            )}

            <span className="min-w-0 flex-1 wrap-break-word">{item.label}</span>

            {/* Submenu arrow */}
            {isSubmenu && (
              <ChevronRightIcon
                className={cn('shrink-0', mutedIconColor)}
              />
            )}

            {/* Shortcut */}
            {item.shortcut && (
              <span
                className={cn('ml-2 text-[11px] font-medium', shortcutColor)}
              >
                {item.shortcut}
              </span>
            )}
          </MenuButton>
        );
      })}
    </div>
  );
}

// ─── cn Utility ──────────────────────────────────────────────────────

function cn(...inputs: (string | undefined | false | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// ─── Main DropdownMenu Component ─────────────────────────────────────

export function DropdownMenu({
  trigger,
  items,
  align = 'center',
  side = 'bottom',
  sideOffset = 8,
  alignOffset = 0,
  className = '',
  width = 220,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  closeOnItemClick = true,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  disabled = false,
  theme = 'dark',
}: DropdownMenuProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [itemIds, setItemIds] = useState<string[]>([]);

  const [navStack, setNavStack] = useState<NavState[]>([{ items, depth: 0 }]);

  const [selectedRadios, setSelectedRadios] = useState<Record<string, string>>(
    {}
  );

  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = useCallback(
    (value: boolean) => {
      if (!isControlled) setUncontrolledOpen(value);
      onOpenChange?.(value);
      if (!value) {
        setActiveItem(null);
        setTimeout(() => setNavStack([{ items, depth: 0 }]), 200);
      }
    },
    [isControlled, onOpenChange, items]
  );

  const registerItem = useCallback((id: string) => {
    setItemIds((prev) => [...prev, id]);
  }, []);

  const unregisterItem = useCallback((id: string) => {
    setItemIds((prev) => prev.filter((i) => i !== id));
  }, []);

  const focusNext = useCallback(() => {
    if (itemIds.length === 0) return;
    const currentIndex = activeItem ? itemIds.indexOf(activeItem) : -1;
    const nextIndex = currentIndex < itemIds.length - 1 ? currentIndex + 1 : 0;
    setActiveItem(itemIds[nextIndex]);
  }, [activeItem, itemIds]);

  const focusPrev = useCallback(() => {
    if (itemIds.length === 0) return;
    const currentIndex = activeItem
      ? itemIds.indexOf(activeItem)
      : itemIds.length;
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : itemIds.length - 1;
    setActiveItem(itemIds[prevIndex]);
  }, [activeItem, itemIds]);

  const focusFirst = useCallback(() => {
    if (itemIds.length > 0) setActiveItem(itemIds[0]);
  }, [itemIds]);

  const focusLast = useCallback(() => {
    if (itemIds.length > 0) setActiveItem(itemIds[itemIds.length - 1]);
  }, [itemIds]);

  const selectActive = useCallback(() => {
    if (activeItem) {
      const item = findItemById(items, activeItem);
      if (item && !item.disabled && !item.items && item.onClick) {
        item.onClick();
        if (closeOnItemClick) setOpen(false);
      }
    }
  }, [activeItem, items, closeOnItemClick, setOpen]);

  const handleNavigate = useCallback(
    (subItems: DropdownItem[], title: string, depth: number) => {
      setNavStack((prev) => [...prev, { items: subItems, title, depth }]);
    },
    []
  );

  const handleBack = useCallback(() => {
    setNavStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  }, []);

  const handleRadioSelect = useCallback((group: string, value: string) => {
    setSelectedRadios((prev) => ({ ...prev, [group]: value }));
  }, []);

  const handleCheckToggle = useCallback((id: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  // Click outside
  useEffect(() => {
    if (!open || !closeOnOutsideClick) return;
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, closeOnOutsideClick, setOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!open || !closeOnEscape) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (navStack.length > 1) {
          handleBack();
        } else {
          setOpen(false);
        }
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        focusNext();
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        focusPrev();
      }
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectActive();
      }
      if (e.key === 'Home') {
        e.preventDefault();
        focusFirst();
      }
      if (e.key === 'End') {
        e.preventDefault();
        focusLast();
      }
      if (e.key === 'ArrowLeft' && navStack.length > 1) {
        e.preventDefault();
        handleBack();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [
    open,
    closeOnEscape,
    setOpen,
    focusNext,
    focusPrev,
    selectActive,
    focusFirst,
    focusLast,
    navStack.length,
    handleBack,
  ]);

  const contextValue: DropdownContextType = {
    open,
    setOpen,
    activeItem,
    setActiveItem,
    registerItem,
    unregisterItem,
    focusNext,
    focusPrev,
    focusFirst,
    focusLast,
    selectActive,
    itemIds,
    theme,
  };

  const getPositionStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'absolute',
      zIndex: 50,
      width: typeof width === 'number' ? `${width}px` : width,
      maxWidth: 'calc(100vw - 1rem)',
    };

    switch (side) {
      case 'bottom':
        base.top = '100%';
        base.marginTop = `${sideOffset}px`;
        if (align === 'start') base.left = '0';
        else if (align === 'end') base.right = '0';
        else {
          base.left = '50%';
          base.transform = 'translateX(-50%)';
        }
        break;
      case 'top':
        base.bottom = '100%';
        base.marginBottom = `${sideOffset}px`;
        if (align === 'start') base.left = '0';
        else if (align === 'end') base.right = '0';
        else {
          base.left = '50%';
          base.transform = 'translateX(-50%)';
        }
        break;
      case 'right':
        base.left = '100%';
        base.marginLeft = `${sideOffset}px`;
        base.top = '0';
        break;
      case 'left':
        base.right = '100%';
        base.marginRight = `${sideOffset}px`;
        base.top = '0';
        break;
    }

    if (alignOffset !== 0) {
      if (align === 'start') base.marginLeft = `${alignOffset}px`;
      if (align === 'end') base.marginRight = `${alignOffset}px`;
    }

    return base;
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      <div className="relative inline-block max-w-full" ref={triggerRef}>
        <div
          onClick={() => !disabled && setOpen(!open)}
          className={
            disabled ? 'pointer-events-none opacity-50' : 'cursor-pointer'
          }
        >
          {trigger}
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              ref={menuRef}
              initial={{
                opacity: 0,
                scale: 0.96,
                y: side === 'bottom' ? -4 : side === 'top' ? 4 : 0,
              }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: side === 'bottom' ? -4 : side === 'top' ? 4 : 0,
              }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={getPositionStyles()}
              className={className}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={navStack.length}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.15 }}
                >
                  <DropdownContent
                    navStack={navStack}
                    onNavigate={handleNavigate}
                    onBack={handleBack}
                    closeOnItemClick={closeOnItemClick}
                    selectedRadios={selectedRadios}
                    onRadioSelect={handleRadioSelect}
                    checkedItems={checkedItems}
                    onCheckToggle={handleCheckToggle}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DropdownContext.Provider>
  );
}

// ─── Utility Exports ──────────────────────────────────────────────────

export function DropdownMenuLabel({
  children,
  className = '',
  theme = 'dark',
}: {
  children: React.ReactNode;
  className?: string;
  theme?: 'dark' | 'light';
}) {
  const labelColor =
    theme === 'dark' ? 'text-dark-text-muted' : 'text-light-text-muted';
  return (
    <div
      className={cn(
        'mx-1 px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] uppercase',
        labelColor,
        className
      )}
    >
      {children}
    </div>
  );
}

export function DropdownMenuSeparator({
  className = '',
  theme = 'dark',
}: {
  className?: string;
  theme?: 'dark' | 'light';
}) {
  const separatorColor =
    theme === 'dark' ? 'bg-dark-divider' : 'bg-light-divider';
  return <div className={cn('mx-3 my-1 h-px', separatorColor, className)} />;
}

export function DropdownMenuGroup({
  children,
  label,
  theme = 'dark',
}: {
  children: React.ReactNode;
  label?: string;
  theme?: 'dark' | 'light';
}) {
  return (
    <div>
      {label && <DropdownMenuLabel theme={theme}>{label}</DropdownMenuLabel>}
      {children}
    </div>
  );
}

export function useDropdownMenu(defaultOpen = false) {
  const [open, setOpen] = useState(defaultOpen);
  return {
    open,
    onOpenChange: setOpen,
    toggle: () => setOpen((p) => !p),
  };
}

export default DropdownMenu;
