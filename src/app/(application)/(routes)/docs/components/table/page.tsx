'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



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

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}


const calendarVariants = cva(['w-full', 'select-none', 'bg-transparent'], {
  variants: {
    theme: {
      dark: '',
      light: '',
    },
    variant: {
      default: '',
      bordered: 'border rounded-[12px] overflow-hidden',
      card: 'border rounded-[12px] overflow-hidden',
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
      className: 'border-white/[0.08] bg-transparent',
    },
    {
      theme: 'dark',
      variant: 'card',
      className: 'border-white/[0.08] bg-white/[0.03] backdrop-blur-sm',
    },
    {
      theme: 'light',
      variant: 'bordered',
      className: 'border-black/[0.08] bg-transparent',
    },
    {
      theme: 'light',
      variant: 'card',
      className: 'border-black/[0.08] bg-black/[0.03] backdrop-blur-sm',
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
    'rounded-[10px]',
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
        disabled: 'cursor-not-allowed opacity-50',
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
      {
        theme: 'dark',
        state: 'default',
        className: 'text-white/80 hover:bg-white/[0.08]',
      },
      {
        theme: 'dark',
        state: 'selected',
        className: 'bg-white text-black hover:bg-white/90',
      },
      {
        theme: 'dark',
        state: 'in-range',
        className: 'bg-white/[0.08] text-white rounded-none',
      },
      {
        theme: 'dark',
        state: 'range-start',
        className: 'bg-white text-black rounded-r-none hover:bg-white/90',
      },
      {
        theme: 'dark',
        state: 'range-end',
        className: 'bg-white text-black rounded-l-none hover:bg-white/90',
      },
      {
        theme: 'dark',
        state: 'disabled',
        className: 'text-white/20 line-through',
      },
      {
        theme: 'dark',
        state: 'outside-month',
        className: 'text-white/20 hover:bg-transparent',
      },
      {
        theme: 'dark',
        state: 'today',
        className: 'text-white border border-white/20',
      },
      {
        theme: 'light',
        state: 'default',
        className: 'text-black/80 hover:bg-black/[0.08]',
      },
      {
        theme: 'light',
        state: 'selected',
        className: 'bg-black text-white hover:bg-black/90',
      },
      {
        theme: 'light',
        state: 'in-range',
        className: 'bg-black/[0.08] text-black rounded-none',
      },
      {
        theme: 'light',
        state: 'range-start',
        className: 'bg-black text-white rounded-r-none hover:bg-black/90',
      },
      {
        theme: 'light',
        state: 'range-end',
        className: 'bg-black text-white rounded-l-none hover:bg-black/90',
      },
      {
        theme: 'light',
        state: 'disabled',
        className: 'text-black/20 line-through',
      },
      {
        theme: 'light',
        state: 'outside-month',
        className: 'text-black/20 hover:bg-transparent',
      },
      {
        theme: 'light',
        state: 'today',
        className: 'text-black border border-black/20',
      },
    ],
    defaultVariants: {
      theme: 'dark',
      state: 'default',
      size: 'md',
    },
  }
);


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
        typeof selected === 'object' &&
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
        const current =
          selected && typeof selected === 'object' && 'from' in selected
            ? selected
            : null;
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
      let nextMonthDay = 1;

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
                  'absolute bottom-1 h-1 w-1 rounded-full',
                  theme === 'dark' ? 'bg-white/50' : 'bg-black/50'
                )}
              />
            )}
            {state === 'selected' && (
              <span
                className={cn(
                  'absolute bottom-1.5 h-1 w-1 rounded-full',
                  theme === 'dark' ? 'bg-black' : 'bg-white'
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
              {nextMonthDay}
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
        nextMonthDay++;
      }

      return days;
    };

    const renderWeekNumbers = () => {
      if (!showWeekNumbers) return null;
      const weeks: React.ReactNode[] = [];
      const totalCells =
        firstDay + daysInMonth + ((7 - ((firstDay + daysInMonth) % 7)) % 7);
      const weekCount = Math.ceil(totalCells / 7);

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
              theme === 'dark' ? 'text-white/30' : 'text-black/30',
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
      return (
        <div
          className={cn(
            'w-[130px] shrink-0 border-l pl-5',
            theme === 'dark' ? 'border-white/[0.08]' : 'border-black/[0.08]'
          )}
        >
          <p
            className={cn(
              'mb-3 text-base font-semibold',
              theme === 'dark' ? 'text-white' : 'text-black'
            )}
          >
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
                whileTap={{ scale: 0.95 }}
                onClick={() => onTimeSelect?.(time)}
                className={cn(
                  'w-full rounded-[8px] border px-3 py-2 text-sm font-medium transition-all',
                  selectedTime === time
                    ? theme === 'dark'
                      ? 'border-white bg-white text-black'
                      : 'border-black bg-black text-white'
                    : theme === 'dark'
                      ? 'border-white/[0.08] text-white/70 hover:border-white/20 hover:bg-white/[0.05]'
                      : 'border-black/[0.08] text-black/70 hover:border-black/20 hover:bg-black/[0.05]'
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
      return (
        <div
          className={cn(
            'w-[130px] shrink-0 space-y-0.5 border-r pr-5',
            theme === 'dark' ? 'border-white/[0.08]' : 'border-black/[0.08]'
          )}
        >
          {presets.map((preset) => (
            <button
              key={preset.label}
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
                'w-full rounded-[6px] px-3 py-2 text-left text-sm font-medium transition-colors',
                theme === 'dark'
                  ? 'text-white/80 hover:bg-white/[0.06]'
                  : 'text-black/80 hover:bg-black/[0.06]'
              )}
            >
              {preset.label}
            </button>
          ))}
        </div>
      );
    };

    const headerContent = showMonthYearSelect ? (
      <div className="mb-4 flex items-center gap-2">
        <select
          value={currentMonth}
          onChange={(e) => setCurrentMonth(Number(e.target.value))}
          className={cn(
            'h-9 flex-1 cursor-pointer appearance-none rounded-[8px] border bg-transparent px-3 text-sm font-semibold outline-none',
            theme === 'dark'
              ? 'border-white/[0.08] text-white'
              : 'border-black/[0.08] text-black'
          )}
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
          className={cn(
            'h-9 cursor-pointer appearance-none rounded-[8px] border bg-transparent px-3 text-sm font-semibold outline-none',
            theme === 'dark'
              ? 'border-white/[0.08] text-white'
              : 'border-black/[0.08] text-black'
          )}
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
            <button
              onClick={prevMonth}
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-[6px] transition-colors',
                theme === 'dark'
                  ? 'text-white/40 hover:bg-white/[0.06] hover:text-white'
                  : 'text-black/40 hover:bg-black/[0.06] hover:text-black'
              )}
            >
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
            </button>
            <span
              className={cn(
                'text-base font-semibold',
                theme === 'dark' ? 'text-white' : 'text-black'
              )}
            >
              {MONTHS[currentMonth]} {currentYear}
            </span>
            <button
              onClick={nextMonth}
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-[6px] transition-colors',
                theme === 'dark'
                  ? 'text-white/40 hover:bg-white/[0.06] hover:text-white'
                  : 'text-black/40 hover:bg-black/[0.06] hover:text-black'
              )}
            >
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
            </button>
          </>
        ) : (
          <>
            <span
              className={cn(
                'text-lg font-semibold',
                theme === 'dark' ? 'text-white' : 'text-black'
              )}
            >
              {MONTHS[currentMonth]} {currentYear}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={prevMonth}
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-[6px] transition-colors',
                  theme === 'dark'
                    ? 'text-white/40 hover:bg-white/[0.06] hover:text-white'
                    : 'text-black/40 hover:bg-black/[0.06] hover:text-black'
                )}
              >
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
              </button>
              <button
                onClick={nextMonth}
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-[6px] transition-colors',
                  theme === 'dark'
                    ? 'text-white/40 hover:bg-white/[0.06] hover:text-white'
                    : 'text-black/40 hover:bg-black/[0.06] hover:text-black'
                )}
              >
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
              </button>
            </div>
          </>
        )}
      </div>
    );

    return (
      <div
        style={{ fontFamily: 'sans-serif' }}
        ref={ref}
        className={cn(
          calendarVariants({ theme, variant, size }),
          (timeSlots || presets) && 'flex max-w-none bg-transparent',
          className
        )}
        {...props}
      >
        {renderPresets()}
        <div className="flex-1 p-4 bg-transparent">
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
                  theme === 'dark' ? 'text-white/40' : 'text-black/40',
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

    return (
      <div ref={containerRef} className="relative inline-block">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={cn(
            'flex h-11 min-w-[240px] items-center justify-between gap-3 rounded-[10px] border px-4 text-sm transition-colors bg-transparent',
            theme === 'dark'
              ? 'border-white/[0.08] text-white hover:border-white/20'
              : 'border-black/[0.08] text-black hover:border-black/20',
            className
          )}
        >
          <span
            className={
              value ? '' : theme === 'dark' ? 'text-white/40' : 'text-black/40'
            }
          >
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
            className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
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
              className="absolute top-full left-0 z-50 mt-2 bg-transparent"
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


export { Calendar, DatePicker };
export default Calendar;
