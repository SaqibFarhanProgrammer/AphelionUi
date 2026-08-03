'use client';

import { useState } from 'react';
import { Search, X, Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/registry/components/button/Button';
//

const sidebarSections = [
  {
    heading: 'Getting Started',
    items: [
      { label: 'Introduction', href: '/introduction' },
      { label: 'Installation', href: '/docs/installation' },
    ],
  },
  {
    heading: 'Components',
    items: [
      { label: 'Accordion', href: '/docs/components/accordion' },
      { label: 'Alert', href: '/docs/components/alert' },
      { label: 'Avatar', href: '/docs/components/avatar' },
      { label: 'Badge', href: '/docs/components/badge' },
      { label: 'Button', href: '/docs/components/button' },
      { label: 'Calender', href: '/docs/components/calender' },
      { label: 'Card', href: '/docs/components/card' },
      { label: 'Combobox', href: '/docs/components/combobox' },
      { label: 'Dialog', href: '/docs/components/dialog' },
      { label: 'Dropdown Menu', href: '/docs/components/dropdown-menu' },
      { label: 'Drawer', href: '/docs/components/drower' },
      { label: 'Input', href: '/docs/components/input' },
      { label: 'Label', href: '/docs/components/label' },
      { label: 'Loading Spinner', href: '/docs/components/loading-spinner' },
      { label: 'Navbar', href: '/docs/components/navbar' },
      { label: 'Popover', href: '/docs/components/popover' },
      { label: 'Progress', href: '/docs/components/progress' },
      { label: 'Radio Group', href: '/docs/components/radio-group' },
      { label: 'Select', href: '/docs/components/select' },
      { label: 'Sheet', href: '/docs/components/sheet' },
      { label: 'Switch', href: '/docs/components/switch' },
      { label: 'Table', href: '/docs/components/table' },
      { label: 'Tag', href: '/docs/components/tag' },
      { label: 'Textarea', href: '/docs/components/textarea' },
      { label: 'Timeline', href: '/docs/components/timeline' },
    ],
  },
 
];

export default function Sidebar({
  activeHref = 'installation',
  onNavigate,
}: {
  activeHref?: string;
  onNavigate?: (href: string) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (href: string) => {
    onNavigate?.(href);
    setMobileOpen(false);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full remove-scroll">
      <div className="px-5 pt-6 pb-5 bg-gradient to-t from bg-black to bg-transparent">
        <a
          href="/"
          className="flex items-center gap-2.5 text-white font-['inter-semi'] text-[14px] tracking-[0.02em] uppercase"
        >
          Aphelion UI
        </a>
      </div>

      <div className="flex-1 overflow-y-scroll px-3 pb-6 remove-scroll">
        {sidebarSections.map((section, sIdx) => (
          <div key={section.heading} className={sIdx > 0 ? 'mt-6' : ''}>
            <p className="px-3 mb-1.5 text-white/65 text-[11px] font-['inter'] uppercase tracking-[0.06em]">
              {section.heading}
            </p>

            <div className="flex flex-col gap-0.5 remove-scroll">
              {section.items.map((item) => {
                const isActive = item.href === activeHref;
                return (
                  <Link
                    key={item.href}
                    onClick={() => handleNavigate(item.href)}
                    href={item.href}
                    className={`
                      z-20 w-full remove-scroll flex items-center gap-2 px-3 py-1.5 rounded-md text-[16px] transition-all duration-150 text-left
                      ${
                        isActive
                          ? 'bg-white/[0.08] text-white font-[inter-semi]'
                          : 'text-white/80 hover:text-white/80 hover:bg-white/[0.03] font-[inter-semi]'
                      }
                    `}
                  >
                    <span>{item.label}</span>
                    {item.isNew && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[/012FFE] shrink-0" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent "></div>
    </div>
  );

  return (
    <>
      <Button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] w-9 h-9 flex items-center justify-center rounded-aphelion-lg bg-dark-brand-primary border border-white/[0.08] text-white/60 hover:text-white transition-all duration-200"
      >
        {mobileOpen ? <X size={16} /> : <Menu size={16} />}
      </Button>

      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[260px] bg-[#0A0A0A] border-r border-white/[0.06] z-50">
        {sidebarContent}
      </aside>

      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="lg:hidden fixed left-0 top-0 bottom-0 w-[280px] bg-[#0A0A0A] border-r border-white/[0.06] z-[60]">
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
}
