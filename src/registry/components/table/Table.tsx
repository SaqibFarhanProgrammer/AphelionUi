'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Table Container ──────────────────────────────────────────────────────

const tableContainerVariants = cva(['w-full', 'overflow-x-auto'], {
  variants: {
    layout: {
      default: '',
      card: 'rounded-[12px] border border-white/[0.08] overflow-hidden',
      vertical:
        'rounded-[12px] border border-white/[0.08] overflow-hidden max-w-[480px]',
    },
    theme: {
      dark: 'bg-black',
      light: 'bg-white',
    },
  },
  compoundVariants: [
    {
      theme: 'dark',
      layout: 'card',
      className: 'border-white/10',
    },
    {
      theme: 'light',
      layout: 'card',
      className: 'border-black/10',
    },
    {
      theme: 'dark',
      layout: 'vertical',
      className: 'border-white/10',
    },
    {
      theme: 'light',
      layout: 'vertical',
      className: 'border-black/10',
    },
  ],
  defaultVariants: {
    layout: 'default',
    theme: 'dark',
  },
});

// ─── Table ───────────────────────────────────────────────────────────────

const tableVariants = cva(['w-full', 'border-collapse', 'text-left'], {
  variants: {
    variant: {
      default: '',
      striped: '',
      'no-dividers': '',
      'vertical-lines': '',
      dense: '',
      card: '',
      vertical: '',
    },
    theme: {
      dark: '',
      light: '',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    theme: 'dark',
    size: 'md',
  },
});

// ─── Header ──────────────────────────────────────────────────────────────

const headerRowVariants = cva(['border-b'], {
  variants: {
    theme: {
      dark: 'border-white/[0.08]',
      light: 'border-black/[0.08]',
    },
    sticky: {
      true: 'sticky top-0 z-10',
      false: '',
    },
  },
  compoundVariants: [
    { theme: 'dark', sticky: true, className: 'bg-black' },
    { theme: 'light', sticky: true, className: 'bg-white' },
  ],
  defaultVariants: {
    theme: 'dark',
    sticky: false,
  },
});

const headerCellVariants = cva(
  ['font-medium', 'text-left', 'whitespace-nowrap', 'select-none'],
  {
    variants: {
      theme: {
        dark: 'text-white/50',
        light: 'text-black/50',
      },
      size: {
        sm: 'px-3 py-2 text-xs',
        md: 'px-4 py-3 text-sm',
        lg: 'px-6 py-4 text-sm',
      },
      sortable: {
        true: 'cursor-pointer hover:text-white/70 transition-colors',
        false: '',
      },
    },
    defaultVariants: {
      theme: 'dark',
      size: 'md',
      sortable: false,
    },
  }
);

// ─── Body ────────────────────────────────────────────────────────────────

const bodyRowVariants = cva(['transition-colors', 'duration-150'], {
  variants: {
    theme: {
      dark: '',
      light: '',
    },
    variant: {
      default: 'border-b',
      striped: 'border-b',
      'no-dividers': '',
      'vertical-lines': 'border-b',
      dense: 'border-b',
      card: 'border-b',
      vertical: 'border-b',
    },
    selectable: {
      true: 'cursor-pointer',
      false: '',
    },
    selected: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      theme: 'dark',
      variant: 'default',
      className: 'border-white/[0.06] hover:bg-white/[0.02]',
    },
    {
      theme: 'dark',
      variant: 'striped',
      className: 'border-white/[0.04] hover:bg-white/[0.03]',
    },
    {
      theme: 'dark',
      variant: 'no-dividers',
      className: 'hover:bg-white/[0.02]',
    },
    {
      theme: 'dark',
      variant: 'vertical-lines',
      className: 'border-white/[0.06] hover:bg-white/[0.02]',
    },
    {
      theme: 'dark',
      variant: 'dense',
      className: 'border-white/[0.06] hover:bg-white/[0.02]',
    },
    {
      theme: 'dark',
      variant: 'card',
      className: 'border-white/[0.06] hover:bg-white/[0.02]',
    },
    {
      theme: 'dark',
      variant: 'vertical',
      className: 'border-white/[0.06] hover:bg-white/[0.02]',
    },
    {
      theme: 'light',
      variant: 'default',
      className: 'border-black/[0.06] hover:bg-black/[0.02]',
    },
    {
      theme: 'light',
      variant: 'striped',
      className: 'border-black/[0.04] hover:bg-black/[0.03]',
    },
    {
      theme: 'light',
      variant: 'no-dividers',
      className: 'hover:bg-black/[0.02]',
    },
    {
      theme: 'light',
      variant: 'vertical-lines',
      className: 'border-black/[0.06] hover:bg-black/[0.02]',
    },
    {
      theme: 'light',
      variant: 'dense',
      className: 'border-black/[0.06] hover:bg-black/[0.02]',
    },
    {
      theme: 'light',
      variant: 'card',
      className: 'border-black/[0.06] hover:bg-black/[0.02]',
    },
    {
      theme: 'light',
      variant: 'vertical',
      className: 'border-black/[0.06] hover:bg-black/[0.02]',
    },
    { theme: 'dark', selected: true, className: 'bg-white/[0.04]' },
    { theme: 'light', selected: true, className: 'bg-black/[0.04]' },
  ],
  defaultVariants: {
    theme: 'dark',
    variant: 'default',
    selectable: false,
    selected: false,
  },
});

const bodyCellVariants = cva(['whitespace-nowrap', 'text-left'], {
  variants: {
    theme: {
      dark: 'text-white',
      light: 'text-black',
    },
    size: {
      sm: 'px-3 py-2.5 text-xs',
      md: 'px-4 py-4 text-sm',
      lg: 'px-6 py-5 text-base',
    },
    variant: {
      default: '',
      striped: '',
      'no-dividers': '',
      'vertical-lines': 'border-r',
      dense: '',
      card: '',
      vertical: '',
    },
  },
  compoundVariants: [
    {
      theme: 'dark',
      variant: 'vertical-lines',
      className: 'border-white/[0.06] last:border-r-0',
    },
    {
      theme: 'light',
      variant: 'vertical-lines',
      className: 'border-black/[0.06] last:border-r-0',
    },
  ],
  defaultVariants: {
    theme: 'dark',
    size: 'md',
    variant: 'default',
  },
});

// ─── Footer ──────────────────────────────────────────────────────────────

const footerRowVariants = cva(['border-t'], {
  variants: {
    theme: {
      dark: 'border-white/[0.08]',
      light: 'border-black/[0.08]',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
});

const footerCellVariants = cva(
  ['font-medium', 'whitespace-nowrap', 'text-left'],
  {
    variants: {
      theme: {
        dark: 'text-white',
        light: 'text-black',
      },
      size: {
        sm: 'px-3 py-3 text-xs',
        md: 'px-4 py-4 text-sm',
        lg: 'px-6 py-5 text-base',
      },
    },
    defaultVariants: {
      theme: 'dark',
      size: 'md',
    },
  }
);

// ─── Checkbox ────────────────────────────────────────────────────────────

function Checkbox({
  checked,
  onChange,
  theme = 'dark',
  className,
}: {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  theme?: 'dark' | 'light';
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange?.(!checked)}
      className={cn(
        'inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-all duration-150',
        theme === 'dark'
          ? checked
            ? 'border-white bg-white text-black'
            : 'border-white/20 hover:border-white/40'
          : checked
            ? 'border-black bg-black text-white'
            : 'border-black/20 hover:border-black/40',
        className
      )}
      aria-checked={checked}
      role="checkbox"
    >
      {checked && (
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </button>
  );
}

// ─── Sort Icon ───────────────────────────────────────────────────────────

function SortIcon({ direction }: { direction?: 'asc' | 'desc' | null }) {
  return (
    <span className="ml-1.5 inline-flex flex-col">
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        className={cn(
          'transition-opacity',
          direction === 'asc' ? 'opacity-100' : 'opacity-30'
        )}
      >
        <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="currentColor" />
      </svg>
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        className={cn(
          'transition-opacity',
          direction === 'desc' ? 'opacity-100' : 'opacity-30'
        )}
      >
        <path d="M4 5L0.535898 0.5H7.4641L4 5Z" fill="currentColor" />
      </svg>
    </span>
  );
}

// ─── Icons ──────────────────────────────────────────────────────────────

function CheckIcon({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={theme === 'dark' ? 'text-red-400' : 'text-red-600'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

// ─── Avatar ──────────────────────────────────────────────────────────────

function Avatar({
  src,
  alt,
  fallback,
  size = 'md',
  className,
}: {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const [error, setError] = React.useState(false);
  const sizeClasses = {
    sm: 'h-7 w-7 text-[10px]',
    md: 'h-9 w-9 text-xs',
    lg: 'h-11 w-11 text-sm',
  };

  return (
    <div
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10',
        sizeClasses[size],
        className
      )}
    >
      {src && !error ? (
        <img
          src={src}
          alt={alt || ''}
          className="h-full w-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <span className="font-medium text-white/70">
          {fallback?.charAt(0).toUpperCase() || '?'}
        </span>
      )}
    </div>
  );
}

// ─── Status Badge ────────────────────────────────────────────────────────

function StatusBadge({
  status,
  theme = 'dark',
}: {
  status: string;
  theme?: 'dark' | 'light';
}) {
  const isActive = status.toLowerCase() === 'active';
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-sm',
        theme === 'dark' ? 'text-white' : 'text-black'
      )}
    >
      <span
        className={cn(
          'inline-block h-2 w-2 rounded-full',
          isActive
            ? theme === 'dark'
              ? 'bg-emerald-400'
              : 'bg-emerald-600'
            : theme === 'dark'
              ? 'bg-white/30'
              : 'bg-black/30'
        )}
      />
      {status}
    </span>
  );
}

// ─── Intent Badge ────────────────────────────────────────────────────────

function IntentBadge({
  label,
  theme = 'dark',
}: {
  label: string;
  theme?: 'dark' | 'light';
}) {
  const colors: Record<string, string> = {
    C:
      theme === 'dark'
        ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
        : 'bg-amber-100 text-amber-700 border-amber-200',
    T:
      theme === 'dark'
        ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
        : 'bg-rose-100 text-rose-700 border-rose-200',
    I:
      theme === 'dark'
        ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
        : 'bg-blue-100 text-blue-700 border-blue-200',
    N:
      theme === 'dark'
        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
        : 'bg-emerald-100 text-emerald-700 border-emerald-200',
  };

  return (
    <span
      className={cn(
        'inline-flex h-5 w-5 items-center justify-center rounded-[4px] border text-[10px] font-bold',
        colors[label] || colors.N
      )}
    >
      {label}
    </span>
  );
}

// ─── Filter Input ────────────────────────────────────────────────────────

function FilterInput({
  placeholder,
  value,
  onChange,
  theme = 'dark',
  className,
}: {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  theme?: 'dark' | 'light';
  className?: string;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={cn(
        'h-9 rounded-[6px] border bg-transparent px-3 text-sm transition-colors outline-none placeholder:text-white/30',
        theme === 'dark'
          ? 'border-white/[0.08] text-white focus:border-white/20'
          : 'border-black/[0.08] text-black placeholder:text-black/30 focus:border-black/20',
        className
      )}
    />
  );
}

// ─── Table Component ─────────────────────────────────────────────────────

export interface TableColumn<T = any> {
  key: string;
  header: React.ReactNode;
  width?: string;
  sortable?: boolean;
  align?: 'left' | 'right' | 'center';
  render?: (row: T, index: number) => React.ReactNode;
}

export interface TableProps<T = any>
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableContainerVariants>,
    VariantProps<typeof tableVariants> {
  columns: TableColumn<T>[];
  data: T[];
  footer?: React.ReactNode;
  stickyHeader?: boolean;
  maxHeight?: string;
  selectable?: boolean;
  selectedRows?: Set<string | number>;
  onRowSelect?: (id: string | number, selected: boolean) => void;
  onSelectAll?: (selected: boolean) => void;
  rowKey?: (row: T, index: number) => string | number;
  onRowClick?: (row: T, index: number) => void;
  sortColumn?: string | null;
  sortDirection?: 'asc' | 'desc' | null;
  onSort?: (column: string) => void;
  filters?: React.ReactNode;
  className?: string;
  tableClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
}

function Table<T = any>({
  columns,
  data,
  footer,
  stickyHeader = false,
  maxHeight,
  selectable = false,
  selectedRows = new Set(),
  onRowSelect,
  onSelectAll,
  rowKey = (_, index) => index,
  onRowClick,
  sortColumn,
  sortDirection,
  onSort,
  filters,
  theme = 'dark',
  variant = 'default',
  size = 'md',
  layout = 'default',
  className,
  tableClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
  ...props
}: TableProps<T>) {
  const allSelected =
    data.length > 0 && data.every((row, i) => selectedRows.has(rowKey(row, i)));
  const someSelected =
    data.some((row, i) => selectedRows.has(rowKey(row, i))) && !allSelected;

  const isStriped = variant === 'striped';
  const isVertical = variant === 'vertical';

  return (
    <div
      className={cn('flex flex-col gap-4', className)}
      {...props}
      style={{ fontFamily: 'sans-serif' }}
    >
      {filters && (
        <div className="flex flex-wrap items-center gap-3">{filters}</div>
      )}

      <div
        className={cn(tableContainerVariants({ layout, theme }))}
        style={maxHeight ? { maxHeight } : undefined}
      >
        <table
          className={cn(
            tableVariants({ variant, theme, size }),
            tableClassName
          )}
        >
          {!isVertical && (
            <thead className={cn(headerClassName)}>
              <tr
                className={cn(
                  headerRowVariants({ theme, sticky: stickyHeader })
                )}
              >
                {selectable && (
                  <th
                    className={cn(headerCellVariants({ theme, size }), 'w-12')}
                  >
                    <Checkbox
                      checked={allSelected}
                      onChange={(checked) => onSelectAll?.(checked)}
                      theme={theme!}
                    />
                  </th>
                )}

                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={cn(
                      headerCellVariants({
                        theme,
                        size,
                        sortable: col.sortable,
                      }),
                      col.align === 'right' && 'text-right',
                      col.align === 'center' && 'text-center'
                    )}
                    style={
                      col.width
                        ? { width: col.width, minWidth: col.width }
                        : undefined
                    }
                    onClick={() => col.sortable && onSort?.(col.key)}
                  >
                    <span className="inline-flex items-center">
                      {col.header}
                      {col.sortable && (
                        <SortIcon
                          direction={
                            sortColumn === col.key ? sortDirection : null
                          }
                        />
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
          )}

          <tbody className={cn(bodyClassName)}>
            {data.map((row, index) => {
              const key = rowKey(row, index);
              const selected = selectedRows.has(key);

              const isStripedRow = isStriped && index % 2 === 0;

              if (isVertical) {
                return (
                  <React.Fragment key={String(key)}>
                    {columns.map((col, colIndex) => (
                      <tr
                        key={`${String(key)}-${col.key}`}
                        className={cn(
                          bodyRowVariants({
                            theme,
                            variant,
                            selectable: !!onRowClick,
                            selected,
                          }),
                          isStripedRow && theme === 'dark' && 'bg-white/[0.02]',
                          isStripedRow && theme === 'light' && 'bg-black/[0.02]'
                        )}
                        onClick={() => onRowClick?.(row, index)}
                      >
                        <td
                          className={cn(
                            bodyCellVariants({ theme, size, variant }),
                            'font-medium',
                            theme === 'dark'
                              ? 'text-white/50'
                              : 'text-black/50',
                            'w-[140px]'
                          )}
                        >
                          {col.header}
                        </td>
                        <td
                          className={cn(
                            bodyCellVariants({ theme, size, variant })
                          )}
                        >
                          {col.render
                            ? col.render(row, index)
                            : (row as any)[col.key]}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                );
              }

              return (
                <tr
                  key={String(key)}
                  className={cn(
                    bodyRowVariants({
                      theme,
                      variant,
                      selectable: !!onRowClick,
                      selected,
                    }),
                    isStripedRow && theme === 'dark' && 'bg-white/[0.02]',
                    isStripedRow && theme === 'light' && 'bg-black/[0.02]'
                  )}
                  onClick={() => onRowClick?.(row, index)}
                >
                  {selectable && (
                    <td
                      className={cn(
                        bodyCellVariants({ theme, size, variant }),
                        'w-12'
                      )}
                    >
                      <Checkbox
                        checked={selected}
                        onChange={(checked) => onRowSelect?.(key, checked)}
                        theme={theme!}
                      />
                    </td>
                  )}

                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={cn(
                        bodyCellVariants({ theme, size, variant }),
                        col.align === 'right' && 'text-right',
                        col.align === 'center' && 'text-center'
                      )}
                    >
                      {col.render
                        ? col.render(row, index)
                        : (row as any)[col.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>

          {footer && (
            <tfoot className={cn(footerClassName)}>
              <tr className={cn(footerRowVariants({ theme }))}>
                {selectable && (
                  <td className={cn(footerCellVariants({ theme, size }))} />
                )}
                {footer}
              </tr>
            </tfoot>
          )}
        </table>

        {data.length === 0 && (
          <div
            className={cn(
              'flex items-center justify-center py-16 text-sm',
              theme === 'dark' ? 'text-white/30' : 'text-black/30'
            )}
          >
            No data available
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Exports ─────────────────────────────────────────────────────────────

export {
  Table,
  Checkbox,
  Avatar,
  StatusBadge,
  IntentBadge,
  FilterInput,
  CheckIcon,
  CrossIcon,
  SortIcon,
  tableContainerVariants,
  tableVariants,
  headerRowVariants,
  headerCellVariants,
  bodyRowVariants,
  bodyCellVariants,
  footerRowVariants,
  footerCellVariants,
};

export default Table;
