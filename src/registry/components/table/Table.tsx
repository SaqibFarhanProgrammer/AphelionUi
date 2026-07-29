'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const tableContainerVariants = cva(['w-full', 'overflow-x-auto'], {
  variants: {
    layout: {
      default: '',
      card: 'rounded-aphelion-xl border overflow-hidden',
      vertical:
        'rounded-aphelion-xl border overflow-hidden max-w-[480px]',
    },
    theme: {
      dark: 'bg-dark-background',
      light: 'bg-light-background',
    },
  },
  compoundVariants: [
    {
      theme: 'dark',
      layout: 'card',
      className: 'border-dark-border',
    },
    {
      theme: 'light',
      layout: 'card',
      className: 'border-light-border',
    },
    {
      theme: 'dark',
      layout: 'vertical',
      className: 'border-dark-border',
    },
    {
      theme: 'light',
      layout: 'vertical',
      className: 'border-light-border',
    },
  ],
  defaultVariants: {
    layout: 'default',
    theme: 'dark',
  },
});


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


const headerRowVariants = cva(['border-b'], {
  variants: {
    theme: {
      dark: 'border-dark-border',
      light: 'border-light-border',
    },
    sticky: {
      true: 'sticky top-0 z-10',
      false: '',
    },
  },
  compoundVariants: [
    { theme: 'dark', sticky: true, className: 'bg-dark-background' },
    { theme: 'light', sticky: true, className: 'bg-light-background' },
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
        dark: 'text-dark-text-muted',
        light: 'text-light-text-muted',
      },
      size: {
        sm: 'px-3 py-2 text-xs',
        md: 'px-4 py-3 text-sm',
        lg: 'px-6 py-4 text-sm',
      },
      sortable: {
        true: 'cursor-pointer hover:text-dark-text-secondary transition-colors',
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
      className: 'border-dark-divider hover:bg-dark-hover',
    },
    {
      theme: 'dark',
      variant: 'striped',
      className: 'border-dark-divider hover:bg-dark-hover',
    },
    {
      theme: 'dark',
      variant: 'no-dividers',
      className: 'hover:bg-dark-hover',
    },
    {
      theme: 'dark',
      variant: 'vertical-lines',
      className: 'border-dark-divider hover:bg-dark-hover',
    },
    {
      theme: 'dark',
      variant: 'dense',
      className: 'border-dark-divider hover:bg-dark-hover',
    },
    {
      theme: 'dark',
      variant: 'card',
      className: 'border-dark-divider hover:bg-dark-hover',
    },
    {
      theme: 'dark',
      variant: 'vertical',
      className: 'border-dark-divider hover:bg-dark-hover',
    },
    {
      theme: 'light',
      variant: 'default',
      className: 'border-light-divider hover:bg-light-hover',
    },
    {
      theme: 'light',
      variant: 'striped',
      className: 'border-light-divider hover:bg-light-hover',
    },
    {
      theme: 'light',
      variant: 'no-dividers',
      className: 'hover:bg-light-hover',
    },
    {
      theme: 'light',
      variant: 'vertical-lines',
      className: 'border-light-divider hover:bg-light-hover',
    },
    {
      theme: 'light',
      variant: 'dense',
      className: 'border-light-divider hover:bg-light-hover',
    },
    {
      theme: 'light',
      variant: 'card',
      className: 'border-light-divider hover:bg-light-hover',
    },
    {
      theme: 'light',
      variant: 'vertical',
      className: 'border-light-divider hover:bg-light-hover',
    },
    { theme: 'dark', selected: true, className: 'bg-dark-selected' },
    { theme: 'light', selected: true, className: 'bg-light-selected' },
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
      dark: 'text-dark-text-primary',
      light: 'text-light-text-primary',
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
      className: 'border-dark-divider last:border-r-0',
    },
    {
      theme: 'light',
      variant: 'vertical-lines',
      className: 'border-light-divider last:border-r-0',
    },
  ],
  defaultVariants: {
    theme: 'dark',
    size: 'md',
    variant: 'default',
  },
});


const footerRowVariants = cva(['border-t'], {
  variants: {
    theme: {
      dark: 'border-dark-border',
      light: 'border-light-border',
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
        dark: 'text-dark-text-primary',
        light: 'text-light-text-primary',
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
  const isDark = theme === 'dark';
  const uncheckedBorder = isDark ? 'border-dark-border hover:border-dark-border-strong' : 'border-light-border hover:border-light-border-strong';
  const checkedClasses = isDark
    ? 'border-dark-primary bg-dark-primary text-dark-primary-foreground'
    : 'border-light-primary bg-light-primary text-light-primary-foreground';

  return (
    <button
      type="button"
      onClick={() => onChange?.(!checked)}
      className={cn(
        'inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-aphelion-xs border transition-all duration-150',
        checked ? checkedClasses : uncheckedBorder,
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


function CheckIcon({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={theme === 'dark' ? 'text-dark-success' : 'text-light-success'}
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
      className={theme === 'dark' ? 'text-dark-destructive' : 'text-light-destructive'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}


function Avatar({
  src,
  alt,
  fallback,
  size = 'md',
  className,
  theme = 'dark',
}: {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  theme?: 'dark' | 'light';
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
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-aphelion-full',
        theme === 'dark' ? 'bg-dark-muted' : 'bg-light-muted',
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
        <span className={cn('font-medium', theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary')}>
          {fallback?.charAt(0).toUpperCase() || '?'}
        </span>
      )}
    </div>
  );
}


function StatusBadge({
  status,
  theme = 'dark',
}: {
  status: string;
  theme?: 'dark' | 'light';
}) {
  const isActive = status.toLowerCase() === 'active';
  const isDark = theme === 'dark';
  const dotColor = isActive
    ? isDark ? 'bg-dark-success' : 'bg-light-success'
    : isDark ? 'bg-dark-text-muted' : 'bg-light-text-muted';
  const textColor = isDark ? 'text-dark-text-primary' : 'text-light-text-primary';

  return (
    <span className={cn('inline-flex items-center gap-1.5 text-sm', textColor)}>
      <span className={cn('inline-block h-2 w-2 rounded-aphelion-full', dotColor)} />
      {status}
    </span>
  );
}


function IntentBadge({
  label,
  theme = 'dark',
}: {
  label: string;
  theme?: 'dark' | 'light';
}) {
  const isDark = theme === 'dark';
  const colors: Record<string, string> = {
    C: isDark
      ? 'bg-dark-warning-background text-dark-warning border-dark-warning-border'
      : 'bg-light-warning-background text-light-warning border-light-warning-border',
    T: isDark
      ? 'bg-dark-destructive-background text-dark-destructive border-dark-destructive-border'
      : 'bg-light-destructive-background text-light-destructive border-light-destructive-border',
    I: isDark
      ? 'bg-dark-info-background text-dark-info border-dark-info-border'
      : 'bg-light-info-background text-light-info border-light-info-border',
    N: isDark
      ? 'bg-dark-success-background text-dark-success border-dark-success-border'
      : 'bg-light-success-background text-light-success border-light-success-border',
  };

  return (
    <span
      className={cn(
        'inline-flex h-5 w-5 items-center justify-center rounded-aphelion-xs border text-[10px] font-bold',
        colors[label] || colors.N
      )}
    >
      {label}
    </span>
  );
}


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
  const isDark = theme === 'dark';
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={cn(
        'h-9 rounded-aphelion-sm border bg-transparent px-3 text-sm transition-colors outline-none',
        isDark
          ? 'border-dark-border text-dark-text-primary placeholder:text-dark-text-muted focus:border-dark-border-strong'
          : 'border-light-border text-light-text-primary placeholder:text-light-text-muted focus:border-light-border-strong',
        className
      )}
    />
  );
}


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
  const isDark = theme === 'dark';

  const emptyTextColor = isDark ? 'text-dark-text-muted' : 'text-light-text-muted';
  const verticalLabelColor = isDark ? 'text-dark-text-muted' : 'text-light-text-muted';
  const stripedEvenBg = isDark ? 'bg-dark-selected' : 'bg-light-selected';

  return (
    <div
      className={cn('flex flex-col gap-4', className)}
      {...props}
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
                          isStripedRow && stripedEvenBg
                        )}
                        onClick={() => onRowClick?.(row, index)}
                      >
                        <td
                          className={cn(
                            bodyCellVariants({ theme, size, variant }),
                            'font-medium',
                            verticalLabelColor,
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
                    isStripedRow && stripedEvenBg
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
              emptyTextColor
            )}
          >
            No data available
          </div>
        )}
      </div>
    </div>
  );
}


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