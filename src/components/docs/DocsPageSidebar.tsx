'use client';

import * as React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// ─── Utility ─────────────────────────────────────────────────────────────

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Types ───────────────────────────────────────────────────────────────

export interface TocItem {
  id: string;
  title: string;
  level?: number;
}

export interface TocGroup {
  title: string;
  items: TocItem[];
}

export interface OnThisPageProps {
  items?: TocItem[];
  groups?: TocGroup[];
  className?: string;
  title?: string;
}

// ─── OnThisPage Component ────────────────────────────────────────────────

const OnThisPage = React.forwardRef<HTMLDivElement, OnThisPageProps>(
  function OnThisPage(
    { items, groups, className, title = 'On This Page' },
    ref
  ) {
    const [activeId, setActiveId] = React.useState<string>('');

    React.useEffect(() => {
      if (typeof window === 'undefined') return;

      const allIds: string[] = [];
      if (items) {
        allIds.push(...items.map((i) => i.id));
      }
      if (groups) {
        groups.forEach((g) => {
          allIds.push(...g.items.map((i) => i.id));
        });
      }

      if (allIds.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
            );

          if (visible.length > 0) {
            setActiveId(visible[0].target.id);
          }
        },
        {
          rootMargin: '-80px 0px -60% 0px',
          threshold: 0,
        }
      );

      allIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }, [items, groups]);

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement>,
      id: string
    ) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveId(id);
      }
    };

    const renderItem = (item: TocItem) => {
      const isActive = activeId === item.id;
      const indent = item.level ? (item.level - 2) * 16 : 0;

      return (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => handleClick(e, item.id)}
          className={cn(
            'block text-sm transition-colors duration-150',
            'hover:text-white',
            isActive ? 'text-white font-medium' : 'text-neutral-400'
          )}
          style={{
            paddingLeft: indent > 0 ? `${indent}px` : undefined,
          }}
        >
          {item.title}
        </a>
      );
    };

    return (
      <div ref={ref} className={cn('w-[240px] ', className)}>
        <div className="fixed font-[inter-rag] h-screen top-24">
          <h4 className="mb-4 text-sm font-medium text-white">{title}</h4>
          <nav className="flex flex-col gap-2.5">
            {items && items.map(renderItem)}
            {groups &&
              groups.map((group, idx) => (
                <div key={idx} className="flex flex-col gap-2.5">
                  {group.title && (
                    <span className="text-sm font-medium text-white">
                      {group.title}
                    </span>
                  )}
                  {group.items.map(renderItem)}
                </div>
              ))}
          </nav>
        </div>
      </div>
    );
  }
);

OnThisPage.displayName = 'OnThisPage';

export { OnThisPage };
