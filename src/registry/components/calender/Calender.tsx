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
//  CALENDAR / DATE PICKER COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

// ─── Helpers ─────────────────────────────────────────────────────────────

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function getPrevMonthDays(year: number, month: number): number {
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  return getDaysInMonth(prevYear, prevMonth);
}

function isSameDate(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isDateInRange(date: Date, start: Date, end: Date): boolean {
  const d = date.getTime();
  const s = Math.min(start.getTime(), end.getTime());
  const e = Math.max(start.getTime(), end.getTime());
  return d >= s && d <= e;
}

// ─── CVA Variants ────────────────────────────────────────────────────────

const calendarVariants = cva(['w-full', 'select-none'], {
  variants: {
    theme: {
      dark: 'bg-dark-background text-dark-text-primary',
      light: 'bg-light-background text-light-text-primary',
    },
    variant: {
      default: '',
      bordered: 'border rounded-aphelion-xl overflow-hidden',
      card: 'border rounded-aphelion-xl overflow-hidden shadow-aphelion-lg',
    },
    size: {
      sm: 'max-w-[280px]',
      md: 'max-w-[320px]',
      lg: 'max-w-[380px]',
    },
  },
  compoundVariants: [
    {
      theme: 'dark',
      variant: 'bordered',
      className: 'border-dark-border',
    },
    {
      theme: 'dark',
      variant: 'card',
      className: 'border-dark-border',
    },
    {
      theme: 'light',
      variant: 'bordered',
      className: 'border-light-border',
    },
    {
      theme: 'light',
      variant: 'card',
      className: 'border-light-border',
    },
  ],
  defaultVariants: {
    theme: 'dark',
    variant: 'bordered',
    size: 'md',
  },
});

const dayCellVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-aphelion-sm',
    'text-sm',
    'font-medium',
    'transition-all',
    'duration-150',
    'cursor-pointer',
    'select-none',
    'relative',
  ],
  {
    variants: {
      theme: {
        dark: '',
        light: '',
      },
      state: {
        default: '',
        selected: '',
        'in-range': '',
        'range-start': '',
        'range-end': '',
        disabled: 'cursor-not-allowed',
        'outside-month': '',
        today: '',
      },
      size: {
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
      },
    },
    compoundVariants: [
      // Dark theme
      {
        theme: 'dark',
        state: 'default',
        className: 'text-dark-text-primary hover:bg-dark-hover',
      },
      {
        theme: 'dark',
        state: 'selected',
        className:
          'bg-dark-primary text-dark-primary-foreground hover:bg-dark-primary-hover',
      },
      {
        theme: 'dark',
        state: 'in-range',
        className:
          'bg-dark-selected text-dark-text-primary rounded-aphelion-none hover:bg-dark-active',
      },
      {
        theme: 'dark',
        state: 'range-start',
        className:
          'bg-dark-primary text-dark-primary-foreground rounded-r-aphelion-none hover:bg-dark-primary-hover',
      },
      {
        theme: 'dark',
        state: 'range-end',
        className:
          'bg-dark-primary text-dark-primary-foreground rounded-l-aphelion-none hover:bg-dark-primary-hover',
      },
      {
        theme: 'dark',
        state: 'disabled',
        className:
          'text-dark-text-disabled line-through cursor-not-allowed hover:bg-transparent',
      },
      {
        theme: 'dark',
        state: 'outside-month',
        className:
          'text-dark-text-disabled cursor-default hover:bg-transparent',
      },
      {
        theme: 'dark',
        state: 'today',
        className: 'text-dark-text-primary font-bold',
      },
      // Light theme
      {
        theme: 'light',
        state: 'default',
        className: 'text-light-text-primary hover:bg-light-hover',
      },
      {
        theme: 'light',
        state: 'selected',
        className:
          'bg-light-primary text-light-primary-foreground hover:bg-light-primary-hover',
      },
      {
        theme: 'light',
        state: 'in-range',
        className:
          'bg-light-selected text-light-text-primary rounded-aphelion-none hover:bg-light-active',
      },
      {
        theme: 'light',
        state: 'range-start',
        className:
          'bg-light-primary text-light-primary-foreground rounded-r-aphelion-none hover:bg-light-primary-hover',
      },
      {
        theme: 'light',
        state: 'range-end',
        className:
          'bg-light-primary text-light-primary-foreground rounded-l-aphelion-none hover:bg-light-primary-hover',
      },
      {
        theme: 'light',
        state: 'disabled',
        className:
          'text-light-text-disabled line-through cursor-not-allowed hover:bg-transparent',
      },
      {
        theme: 'light',
        state: 'outside-month',
        className:
          'text-light-text-disabled cursor-default hover:bg-transparent',
      },
      {
        theme: 'light',
        state: 'today',
        className: 'text-light-text-primary font-bold',
      },
    ],
    defaultVariants: {
      theme: 'dark',
      state: 'default',
      size: 'md',
    },
  }
);

// ─── Inline Icon Button ──────────────────────────────────────────────────

function IconButton({
  onClick,
  theme,
  children,
  className,
}: {
  onClick?: () => void;
  theme?: 'light' | 'dark';
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex h-8 w-8 items-center justify-center rounded-aphelion-sm transition-colors',
        theme === 'dark'
          ? 'text-dark-text-secondary hover:bg-dark-hover hover:text-dark-text-primary'
          : 'text-light-text-secondary hover:bg-light-hover hover:text-light-text-primary',
        className
      )}
    >
      {children}
    </button>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────

export interface CalendarProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calendarVariants> {
  mode?: 'single' | 'range' | 'multiple';
  selected?: Date | Date[] | { from: Date; to: Date } | null;
  onSelect?: (date: Date | Date[] | { from: Date; to: Date } | null) => void;
  disabled?: Date[] | ((date: Date) => boolean);
  showOutsideDays?: boolean;
  showWeekNumbers?: boolean;
  navPosition?: 'top' | 'right';
  showMonthYearSelect?: boolean;
  presets?: { label: string; value: Date | { from: Date; to: Date } }[];
  timeSlots?: string[];
  onTimeSelect?: (time: string) => void;
  selectedTime?: string;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

export interface DatePickerProps extends Omit<
  CalendarProps,
  'selected' | 'onSelect'
> {
  placeholder?: string;
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}

// ─── Calendar Component ──────────────────────────────────────────────────

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  function Calendar(
    {
      theme = 'dark',
      variant = 'bordered',
      size = 'md',
      mode = 'single',
      selected,
      onSelect,
      disabled,
      showOutsideDays = true,
      showWeekNumbers = false,
      navPosition = 'top',
      showMonthYearSelect = false,
      presets,
      timeSlots,
      onTimeSelect,
      selectedTime,
      minDate,
      maxDate,
      className,
      ...props
    },
    ref
  ) {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = React.useState(today.getMonth());
    const [currentYear, setCurrentYear] = React.useState(today.getFullYear());

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const prevMonthDays = getPrevMonthDays(currentYear, currentMonth);

    const isDisabled = (date: Date): boolean => {
      if (minDate && date < minDate) return true;
      if (maxDate && date > maxDate) return true;
      if (Array.isArray(disabled)) {
        return disabled.some((d) => isSameDate(d, date));
      }
      if (typeof disabled === 'function') {
        return disabled(date);
      }
      return false;
    };

    const getDayState = (date: Date): string => {
      if (isDisabled(date)) return 'disabled';

      if (
        mode === 'single' &&
        selected instanceof Date &&
        isSameDate(selected, date)
      ) {
        return 'selected';
      }

      if (mode === 'multiple' && Array.isArray(selected)) {
        if (selected.some((d) => isSameDate(d, date))) return 'selected';
      }

      if (
        mode === 'range' &&
        selected &&
        'from' in selected &&
        'to' in selected
      ) {
        const { from, to } = selected;
        if (isSameDate(from, date)) return 'range-start';
        if (isSameDate(to, date)) return 'range-end';
        if (isDateInRange(date, from, to)) return 'in-range';
      }

      if (isSameDate(date, today)) return 'today';
      return 'default';
    };

    const handleDayClick = (date: Date) => {
      if (isDisabled(date)) return;

      if (mode === 'single') {
        onSelect?.(date);
      } else if (mode === 'multiple') {
        const current = Array.isArray(selected) ? selected : [];
        const exists = current.some((d) => isSameDate(d, date));
        const next = exists
          ? current.filter((d) => !isSameDate(d, date))
          : [...current, date];
        onSelect?.(next);
      } else if (mode === 'range') {
        const current = selected && 'from' in selected ? selected : null;
        if (!current || (current.from && current.to)) {
          onSelect?.({ from: date, to: date });
        } else {
          if (date < current.from) {
            onSelect?.({ from: date, to: current.from });
          } else {
            onSelect?.({ from: current.from, to: date });
          }
        }
      }
    };

    const prevMonth = () => {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear((y) => y - 1);
      } else {
        setCurrentMonth((m) => m - 1);
      }
    };

    const nextMonth = () => {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear((y) => y + 1);
      } else {
        setCurrentMonth((m) => m + 1);
      }
    };

    const renderDays = () => {
      const days: React.ReactNode[] = [];

      for (let i = 0; i < firstDay; i++) {
        const day = prevMonthDays - firstDay + i + 1;
        if (showOutsideDays) {
          days.push(
            <button
              key={`prev-${i}`}
              disabled
              className={cn(
                dayCellVariants({ theme, state: 'outside-month', size })
              )}
            >
              {day}
            </button>
          );
        } else {
          days.push(
            <div
              key={`prev-${i}`}
              className={cn(dayCellVariants({ theme, size }), 'opacity-0')}
            />
          );
        }
      }

      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const state = getDayState(date);
        const isToday = isSameDate(date, today);

        days.push(
          <motion.button
            key={`day-${i}`}
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => handleDayClick(date)}
            className={cn(
              dayCellVariants({ theme, state: state as any, size })
            )}
          >
            {i}
            {isToday && state === 'default' && (
              <span
                className={cn(
                  'absolute bottom-1 h-1 w-1 rounded-aphelion-full',
                  theme === 'dark'
                    ? 'bg-dark-text-muted'
                    : 'bg-light-text-muted'
                )}
              />
            )}
            {state === 'selected' && (
              <span
                className={cn(
                  'absolute bottom-1.5 h-1 w-1 rounded-aphelion-full',
                  theme === 'dark'
                    ? 'bg-dark-primary-foreground'
                    : 'bg-light-primary-foreground'
                )}
              />
            )}
          </motion.button>
        );
      }

      const remaining = (7 - ((firstDay + daysInMonth) % 7)) % 7;
      for (let i = 0; i < remaining; i++) {
        if (showOutsideDays) {
          days.push(
            <button
              key={`next-${i}`}
              disabled
              className={cn(
                dayCellVariants({ theme, state: 'outside-month', size })
              )}
            >
              {i + 1}
            </button>
          );
        } else {
          days.push(
            <div
              key={`next-${i}`}
              className={cn(dayCellVariants({ theme, size }), 'opacity-0')}
            />
          );
        }
      }

      return days;
    };

    const renderWeekNumbers = () => {
      if (!showWeekNumbers) return null;
      const weeks: React.ReactNode[] = [];
      const totalCells =
        firstDay + daysInMonth + ((7 - ((firstDay + daysInMonth) % 7)) % 7);
      const weekCount = Math.ceil(totalCells / 7);

      const weekTextColor =
        theme === 'dark'
          ? 'text-dark-text-disabled'
          : 'text-light-text-disabled';

      for (let i = 0; i < weekCount; i++) {
        const weekStart = new Date(
          currentYear,
          currentMonth,
          1 + i * 7 - firstDay
        );
        const startOfYear = new Date(weekStart.getFullYear(), 0, 1);
        const daysDiff = Math.floor(
          (weekStart.getTime() - startOfYear.getTime()) / 86400000
        );
        const weekNum = Math.ceil((daysDiff + startOfYear.getDay() + 1) / 7);

        weeks.push(
          <div
            key={`week-${i}`}
            className={cn(
              'flex items-center justify-center text-xs font-medium',
              weekTextColor,
              size === 'sm'
                ? 'h-8 w-8'
                : size === 'md'
                  ? 'h-10 w-10'
                  : 'h-12 w-12'
            )}
          >
            {weekNum}
          </div>
        );
      }
      return weeks;
    };

    const renderTimeSlots = () => {
      if (!timeSlots) return null;
      const selDate = selected instanceof Date ? selected : null;

      const borderColor =
        theme === 'dark' ? 'border-dark-border' : 'border-light-border';
      const headingColor =
        theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary';

      return (
        <div className={cn('w-[130px] shrink-0 border-l pl-5', borderColor)}>
          <p className={cn('mb-3 text-base font-semibold', headingColor)}>
            {selDate
              ? selDate.toLocaleDateString('en-US', {
                  weekday: 'long',
                  day: 'numeric',
                })
              : 'Select date'}
          </p>
          <div className="scrollbar-hide max-h-[260px] space-y-1.5 overflow-y-auto">
            {timeSlots.map((time) => (
              <motion.button
                key={time}
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => onTimeSelect?.(time)}
                className={cn(
                  'w-full rounded-aphelion-md border px-3 py-2 text-sm font-medium transition-all',
                  selectedTime === time
                    ? theme === 'dark'
                      ? 'border-dark-primary bg-dark-primary text-dark-primary-foreground'
                      : 'border-light-primary bg-light-primary text-light-primary-foreground'
                    : theme === 'dark'
                      ? 'border-dark-border text-dark-text-secondary hover:border-dark-border-strong hover:bg-dark-hover'
                      : 'border-light-border text-light-text-secondary hover:border-light-border-strong hover:bg-light-hover'
                )}
              >
                {time}
              </motion.button>
            ))}
          </div>
        </div>
      );
    };

    const renderPresets = () => {
      if (!presets) return null;
      const borderColor =
        theme === 'dark' ? 'border-dark-border' : 'border-light-border';

      return (
        <div
          className={cn(
            'w-[130px] shrink-0 space-y-0.5 border-r pr-5',
            borderColor
          )}
        >
          {presets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => {
                if (preset.value instanceof Date) {
                  onSelect?.(preset.value);
                  setCurrentMonth(preset.value.getMonth());
                  setCurrentYear(preset.value.getFullYear());
                } else {
                  onSelect?.(preset.value);
                  setCurrentMonth(preset.value.from.getMonth());
                  setCurrentYear(preset.value.from.getFullYear());
                }
              }}
              className={cn(
                'w-full rounded-aphelion-sm px-3 py-2 text-left text-sm font-medium transition-colors',
                theme === 'dark'
                  ? 'text-dark-text-primary hover:bg-dark-hover'
                  : 'text-light-text-primary hover:bg-light-hover'
              )}
            >
              {preset.label}
            </button>
          ))}
        </div>
      );
    };

    const selectClasses = cn(
      'h-9 cursor-pointer appearance-none rounded-aphelion-md border bg-transparent px-3 text-sm font-semibold outline-none',
      theme === 'dark'
        ? 'border-dark-border text-dark-text-primary'
        : 'border-light-border text-light-text-primary'
    );

    const headerContent = showMonthYearSelect ? (
      <div className="mb-4 flex items-center gap-2">
        <select
          value={currentMonth}
          onChange={(e) => setCurrentMonth(Number(e.target.value))}
          className={cn(selectClasses, 'flex-1')}
        >
          {MONTHS.map((m, i) => (
            <option key={m} value={i}>
              {m}
            </option>
          ))}
        </select>
        <select
          value={currentYear}
          onChange={(e) => setCurrentYear(Number(e.target.value))}
          className={cn(selectClasses, 'flex-1')}
        >
          {Array.from({ length: 21 }, (_, i) => currentYear - 10 + i).map(
            (y) => (
              <option key={y} value={y}>
                {y}
              </option>
            )
          )}
        </select>
      </div>
    ) : (
      <div className="mb-4 flex items-center justify-between">
        {navPosition === 'top' ? (
          <>
            <IconButton onClick={prevMonth} theme={theme}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </IconButton>
            <span
              className={cn(
                'text-base font-semibold',
                theme === 'dark'
                  ? 'text-dark-text-primary'
                  : 'text-light-text-primary'
              )}
            >
              {MONTHS[currentMonth]} {currentYear}
            </span>
            <IconButton onClick={nextMonth} theme={theme}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </IconButton>
          </>
        ) : (
          <>
            <span
              className={cn(
                'text-lg font-semibold',
                theme === 'dark'
                  ? 'text-dark-text-primary'
                  : 'text-light-text-primary'
              )}
            >
              {MONTHS[currentMonth]} {currentYear}
            </span>
            <div className="flex items-center gap-1">
              <IconButton onClick={prevMonth} theme={theme}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </IconButton>
              <IconButton onClick={nextMonth} theme={theme}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </IconButton>
            </div>
          </>
        )}
      </div>
    );

    const dayLabelColor =
      theme === 'dark'
        ? 'text-dark-text-secondary'
        : 'text-light-text-secondary';

    return (
      <div
        ref={ref}
        className={cn(
          calendarVariants({ theme, variant, size }),
          (timeSlots || presets) && 'flex max-w-none',
          className
        )}
        {...props}
      >
        {renderPresets()}
        <div className="flex-1 p-4">
          {headerContent}
          <div
            className={cn(
              'mb-1 grid',
              showWeekNumbers ? 'grid-cols-8' : 'grid-cols-7'
            )}
          >
            {showWeekNumbers && <div />}
            {DAYS.map((day) => (
              <div
                key={day}
                className={cn(
                  'flex items-center justify-center pb-2 text-xs font-medium',
                  dayLabelColor,
                  size === 'sm' ? 'h-8' : size === 'md' ? 'h-10' : 'h-12'
                )}
              >
                {day}
              </div>
            ))}
          </div>
          <div
            className={cn(
              'grid',
              showWeekNumbers ? 'grid-cols-8' : 'grid-cols-7'
            )}
          >
            {showWeekNumbers && (
              <div className="flex flex-col">{renderWeekNumbers()}</div>
            )}
            {renderDays()}
          </div>
        </div>
        {renderTimeSlots()}
      </div>
    );
  }
);

Calendar.displayName = 'Calendar';

// ─── DatePicker Input ────────────────────────────────────────────────────

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  function DatePicker(
    {
      theme = 'dark',
      placeholder = 'Pick a date',
      value,
      onChange,
      className,
      ...props
    },
    ref
  ) {
    const [open, setOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const triggerBorderColor =
      theme === 'dark' ? 'border-dark-border' : 'border-light-border';
    const triggerBgColor =
      theme === 'dark' ? 'bg-dark-background' : 'bg-light-background';
    const triggerTextColor =
      theme === 'dark' ? 'text-dark-text-primary' : 'text-light-text-primary';
    const placeholderColor =
      theme === 'dark' ? 'text-dark-text-muted' : 'text-light-text-muted';
    const iconColor =
      theme === 'dark' ? 'text-dark-text-muted' : 'text-light-text-muted';
    const hoverBorderColor =
      theme === 'dark'
        ? 'hover:border-dark-border-strong'
        : 'hover:border-light-border-strong';

    return (
      <div ref={containerRef} className="relative inline-block">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={cn(
            'flex h-11 min-w-[240px] items-center justify-between gap-3 rounded-aphelion-sm border px-4 text-sm transition-colors',
            triggerBorderColor,
            triggerBgColor,
            triggerTextColor,
            hoverBorderColor,
            className
          )}
        >
          <span className={value ? '' : placeholderColor}>
            {value
              ? value.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              : placeholder}
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={iconColor}
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute top-full left-0 z-50 mt-2"
            >
              <Calendar
                theme={theme}
                selected={value}
                onSelect={(date) => {
                  if (date instanceof Date) {
                    onChange?.(date);
                    setOpen(false);
                  }
                }}
                {...props}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

// ─── Exports ─────────────────────────────────────────────────────────────

export { Calendar, DatePicker };
export default Calendar;
