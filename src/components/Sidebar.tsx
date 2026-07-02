'use client';

import { useState } from 'react';
import { Search, X, Menu } from 'lucide-react';
//

const sidebarSections = [
  {
    heading: 'Getting Started',
    items: [
      { label: 'Introduction', href: '#introduction' },
      { label: 'Installation', href: '#installation' },
    ],
  },
  {
    heading: 'Components',
    items: [
      { label: 'Accordion', href: '#accordion' },
      { label: 'Alert', href: '#alert' },
      { label: 'Alert Dialog', href: '#alert-dialog' },
      { label: 'Aspect Ratio', href: '#aspect-ratio', isNew: true },
      { label: 'Attachment', href: '#attachment', isNew: true },
      { label: 'Avatar', href: '#avatar' },
      { label: 'Badge', href: '#badge' },
      { label: 'Breadcrumb', href: '#breadcrumb' },
      { label: 'Bubble', href: '#bubble', isNew: true },
      { label: 'Button', href: '#button' },
      { label: 'Button Group', href: '#button-group' },
      { label: 'Calendar', href: '#calendar' },
      { label: 'Card', href: '#card' },
      { label: 'Carousel', href: '#carousel' },
      { label: 'Chart', href: '#chart' },
      { label: 'Checkbox', href: '#checkbox' },
      { label: 'Collapsible', href: '#collapsible' },
      { label: 'Combobox', href: '#combobox' },
      { label: 'Command', href: '#command' },
      { label: 'Context Menu', href: '#context-menu' },
      { label: 'Data Table', href: '#data-table' },
      { label: 'Date Picker', href: '#date-picker' },
      { label: 'Dialog', href: '#dialog' },
      { label: 'Drawer', href: '#drawer' },
      { label: 'Dropdown Menu', href: '#dropdown-menu' },
      { label: 'Form', href: '#form' },
      { label: 'Hover Card', href: '#hover-card' },
      { label: 'Input', href: '#input' },
      { label: 'Input OTP', href: '#input-otp' },
      { label: 'Label', href: '#label' },
      { label: 'Menubar', href: '#menubar' },
      { label: 'Navigation Menu', href: '#navigation-menu' },
      { label: 'Pagination', href: '#pagination' },
      { label: 'Popover', href: '#popover' },
      { label: 'Progress', href: '#progress' },
      { label: 'Radio Group', href: '#radio-group' },
      { label: 'Resizable', href: '#resizable' },
      { label: 'Scroll Area', href: '#scroll-area' },
      { label: 'Select', href: '#select' },
      { label: 'Separator', href: '#separator' },
      { label: 'Sheet', href: '#sheet' },
      { label: 'Skeleton', href: '#skeleton' },
      { label: 'Slider', href: '#slider' },
      { label: 'Sonner', href: '#sonner' },
      { label: 'Switch', href: '#switch' },
      { label: 'Table', href: '#table' },
      { label: 'Tabs', href: '#tabs' },
      { label: 'Textarea', href: '#textarea' },
      { label: 'Toast', href: '#toast' },
      { label: 'Toggle', href: '#toggle' },
      { label: 'Toggle Group', href: '#toggle-group' },
      { label: 'Tooltip', href: '#tooltip' },
    ],
  },
  {
    heading: 'Hooks',
    items: [
      { label: 'useCallbackRef', href: '#use-callback-ref' },
      { label: 'useControllableState', href: '#use-controllable-state' },
      { label: 'useEscapeKeydown', href: '#use-escape-keydown' },
      { label: 'useId', href: '#use-id' },
    ],
  },
];

export default function Sidebar({
  activeHref = '#installation',
  onNavigate,
}: {
  activeHref?: string;
  onNavigate?: (href: string) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigate = (href: string) => {
    onNavigate?.(href);
    setMobileOpen(false);
  };

  const filteredSections = searchQuery
    ? sidebarSections
        .map((section) => ({
          ...section,
          items: section.items.filter((item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((section) => section.items.length > 0)
    : sidebarSections;

  const sidebarContent = (
    <div className="flex flex-col h-full remove-scroll">
      {/* Logo */}
      <div className="px-5 pt-6 pb-5">
        <a
          href="/"
          className="flex items-center gap-2.5 text-white font-['inter-semi'] text-[14px] tracking-[0.02em] uppercase"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#012FFE]" />
          Aphelion UI
        </a>
      </div>

      {/* Search */}
      <div className="px-5 pb-4">
        <div className="relative">
          <Search
            size={14}
            strokeWidth={1.8}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-9 pl-9 pr-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[13px] text-white placeholder:text-white/25 outline-none focus:border-white/20 transition-all duration-200 font-['inter-rag']"
          />
        </div>
      </div>

      {/* Nav Sections */}
      <div className="flex-1 overflow-y-scroll px-3 pb-6 remove-scroll">
        {filteredSections.map((section, sIdx) => (
          <div key={section.heading} className={sIdx > 0 ? 'mt-6' : ''}>
            {/* Section Heading */}
            <p className="px-3 mb-1.5 text-white/85 text-[11px] font-['inter'] uppercase tracking-[0.06em]">
              {section.heading}
            </p>

            {/* Section Items */}
            <div className="flex flex-col gap-0.5 remove-scroll">
              {section.items.map((item) => {
                const isActive = item.href === activeHref;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavigate(item.href)}
                    className={`
                      w-full remove-scroll flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] transition-all duration-150 text-left
                      ${
                        isActive
                          ? 'bg-white/[0.08] text-white font-[inter-semi]'
                          : 'text-white/80 hover:text-white/80 hover:bg-white/[0.03] font-[inter-rag]'
                      }
                    `}
                  >
                    <span>{item.label}</span>
                    {item.isNew && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#012FFE] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent ">
        /
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] w-9 h-9 flex items-center justify-center rounded-lg bg-[#111111] border border-white/[0.08] text-white/60 hover:text-white transition-all duration-200"
      >
        {mobileOpen ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[260px] bg-[#0A0A0A] border-r border-white/[0.06] z-50">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
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
