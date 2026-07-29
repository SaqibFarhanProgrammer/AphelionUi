'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Icons ───────────────────────────────────────────────────────────────

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

// ─── Hamburger Icon ──────────────────────────────────────────────────────

function HamburgerIcon({
  open,
  theme = 'dark',
}: {
  open: boolean;
  theme?: 'dark' | 'light';
}) {
  const barColor =
    theme === 'dark' ? 'bg-dark-text-primary' : 'bg-light-text-primary';
  return (
    <div className="relative w-4 h-3">
      <span
        className={cn(
          'absolute left-0 block h-0.5 w-4 transition-all duration-200',
          barColor,
          open ? 'top-[0.35rem] -rotate-45' : 'top-0'
        )}
      />
      <span
        className={cn(
          'absolute left-0 block h-0.5 w-4 transition-all duration-200',
          barColor,
          open ? 'top-[0.35rem] rotate-45' : 'top-[0.55rem]'
        )}
      />
    </div>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface NavCategory {
  name: string;
  items: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export type NavbarVariant =
  | 'default'
  | 'pill'
  | 'minimal'
  | 'split'
  | 'centered'
  | 'saas'
  | 'dashboard';

export type NavbarTheme = 'dark' | 'light';

// ─── Inline Button ───────────────────────────────────────────────────────

interface InlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'ghost'
    | 'outline'
    | 'accent'
    | 'dark'
    | 'light';
  size?: 'sm' | 'md' | 'lg' | 'pill' | 'icon';
  icon?: React.ReactNode;
  theme?: NavbarTheme;
}

function InlineButton({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className,
  theme = 'dark',
  ...props
}: InlineButtonProps) {
  const isDark = theme === 'dark';

  const variantClasses: Record<string, string> = {
    primary: isDark
      ? 'bg-dark-primary text-dark-primary-foreground hover:bg-dark-primary-hover'
      : 'bg-light-primary text-light-primary-foreground hover:bg-light-primary-hover',
    secondary: isDark
      ? 'bg-dark-muted text-dark-text-primary border border-dark-border hover:bg-dark-hover hover:border-dark-border-strong'
      : 'bg-light-muted text-light-text-primary border border-light-border hover:bg-light-hover hover:border-light-border-strong',
    ghost: isDark
      ? 'bg-transparent text-dark-text-secondary hover:text-dark-text-primary hover:bg-dark-hover'
      : 'bg-transparent text-light-text-secondary hover:text-light-text-primary hover:bg-light-hover',
    outline: isDark
      ? 'bg-transparent text-dark-text-primary border border-dark-border hover:border-dark-border-strong hover:bg-dark-hover'
      : 'bg-transparent text-light-text-primary border border-light-border hover:border-light-border-strong hover:bg-light-hover',
    accent: isDark
      ? 'bg-dark-destructive text-dark-destructive-foreground hover:bg-dark-destructive/80'
      : 'bg-light-destructive text-light-destructive-foreground hover:bg-light-destructive/80',
    dark: isDark
      ? 'bg-dark-primary text-dark-primary-foreground hover:bg-dark-primary-hover'
      : 'bg-light-muted text-light-text-primary hover:bg-light-hover',
    light: isDark
      ? 'bg-dark-muted text-dark-text-primary hover:bg-dark-hover'
      : 'bg-light-muted text-light-text-primary hover:bg-light-hover',
  };

  const sizeClasses: Record<string, string> = {
    sm: 'px-3 py-1.5 text-xs rounded-aphelion-lg',
    md: 'px-4 py-2 text-sm rounded-aphelion-xl',
    lg: 'px-5 py-2.5 text-sm rounded-aphelion-xl',
    pill: 'px-5 py-2 text-sm rounded-aphelion-full',
    icon: 'w-8 h-8 rounded-aphelion-lg',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out select-none active:scale-[0.97]',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

// ─── Search Input ────────────────────────────────────────────────────────

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  theme?: NavbarTheme;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ containerClassName, className, theme = 'dark', ...props }, ref) => {
    const isDark = theme === 'dark';
    return (
      <div
        className={cn(
          'flex items-center gap-2 rounded-aphelion-xl px-3 py-2 transition-all duration-200',
          isDark
            ? 'bg-dark-muted border border-dark-border focus-within:border-dark-border-strong'
            : 'bg-light-muted border border-light-border focus-within:border-light-border-strong',
          containerClassName
        )}
      >
        <SearchIcon
          className={cn(
            'shrink-0',
            isDark ? 'text-dark-text-muted' : 'text-light-text-muted'
          )}
        />
        <input
          ref={ref}
          type="text"
          className={cn(
            'bg-transparent text-sm outline-none w-full',
            isDark
              ? 'text-dark-text-primary placeholder:text-dark-text-muted'
              : 'text-light-text-primary placeholder:text-light-text-muted',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
SearchInput.displayName = 'SearchInput';

// ─── Dropdown ────────────────────────────────────────────────────────────

interface DropdownProps {
  trigger: React.ReactNode;
  items: NavItem[];
  align?: 'left' | 'right';
  theme?: NavbarTheme;
}

function Dropdown({
  trigger,
  items,
  align = 'left',
  theme = 'dark',
}: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isDark = theme === 'dark';

  return (
    <div ref={ref} className="relative">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {trigger}
      </div>
      {open && (
        <div
          className={cn(
            'absolute top-full mt-2 min-w-[180px] rounded-aphelion-xl border py-1.5 z-50 shadow-aphelion-lg',
            isDark
              ? 'border-dark-border bg-dark-card'
              : 'border-light-border bg-light-card',
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                'block px-4 py-2.5 text-sm transition-colors duration-150',
                isDark
                  ? 'text-dark-text-secondary hover:text-dark-text-primary hover:bg-dark-hover'
                  : 'text-light-text-secondary hover:text-light-text-primary hover:bg-light-hover'
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Mobile Nav ──────────────────────────────────────────────────────────

interface MobileNavProps {
  nav: NavCategory[];
  logo?: React.ReactNode;
  cta?: React.ReactNode;
  theme?: NavbarTheme;
}

function MobileNav({ nav, logo, cta, theme = 'dark' }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  const isDark = theme === 'dark';

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close Menu' : 'Open Menu'}
        className="relative z-50 flex items-center justify-center w-10 h-10"
      >
        <HamburgerIcon open={open} theme={theme} />
      </button>

      <div
        className={cn(
          'fixed inset-0 z-40 backdrop-blur-xl transition-all duration-300',
          isDark ? 'bg-dark-background/95' : 'bg-light-background/95',
          open
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        )}
      >
        <div className="flex flex-col h-full px-6 pt-20 pb-6 overflow-auto">
          {logo && <div className="mb-8">{logo}</div>}

          <div className="flex flex-col gap-10">
            {nav.map((category, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <p
                  className={cn(
                    'text-sm font-medium uppercase tracking-wider',
                    isDark ? 'text-dark-text-muted' : 'text-light-text-muted'
                  )}
                >
                  {category.name}
                </p>
                <div className="flex flex-col gap-3">
                  {category.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className={cn(
                        'text-2xl font-medium transition-colors',
                        isDark
                          ? 'text-dark-text-secondary hover:text-dark-text-primary'
                          : 'text-light-text-secondary hover:text-light-text-primary'
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {cta && <div className="mt-auto pt-8">{cta}</div>}
        </div>
      </div>
    </div>
  );
}

// ─── Breadcrumb ──────────────────────────────────────────────────────────

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: NavbarTheme;
}

function Breadcrumb({ items, className, theme = 'dark' }: BreadcrumbProps) {
  const isDark = theme === 'dark';
  return (
    <nav
      aria-label="breadcrumb"
      className={cn('flex items-center gap-2 text-sm', className)}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight
              className={cn(
                'shrink-0',
                isDark ? 'text-dark-text-muted' : 'text-light-text-muted'
              )}
            />
          )}
          {item.href ? (
            <a
              href={item.href}
              className={cn(
                'transition-colors duration-150',
                isDark
                  ? 'text-dark-text-muted hover:text-dark-text-primary'
                  : 'text-light-text-muted hover:text-light-text-primary'
              )}
            >
              {item.label}
            </a>
          ) : (
            <span
              className={
                isDark ? 'text-dark-text-primary' : 'text-light-text-primary'
              }
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

// ─── NavLinks Component ──────────────────────────────────────────────────

interface NavLinksProps {
  links: NavItem[];
  dropdowns?: { label: string; items: NavItem[] }[];
  className?: string;
  theme?: NavbarTheme;
}

function NavLinks({
  links,
  dropdowns = [],
  className,
  theme = 'dark',
}: NavLinksProps) {
  const isDark = theme === 'dark';
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={cn(
            'px-4 py-2 text-sm transition-colors duration-200 rounded-aphelion-lg',
            isDark
              ? 'text-dark-text-secondary hover:text-dark-text-primary hover:bg-dark-hover'
              : 'text-light-text-secondary hover:text-light-text-primary hover:bg-light-hover'
          )}
        >
          {link.label}
        </a>
      ))}
      {dropdowns.map((dropdown) => (
        <Dropdown
          key={dropdown.label}
          theme={theme}
          trigger={
            <span
              className={cn(
                'flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200 rounded-aphelion-lg cursor-pointer',
                isDark
                  ? 'text-dark-text-secondary hover:text-dark-text-primary hover:bg-dark-hover'
                  : 'text-light-text-secondary hover:text-light-text-primary hover:bg-light-hover'
              )}
            >
              {dropdown.label} <ChevronDown className="shrink-0" />
            </span>
          }
          items={dropdown.items}
        />
      ))}
    </div>
  );
}

// ─── Logo Icon ───────────────────────────────────────────────────────────

function DefaultLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="6" fill="currentColor" />
    </svg>
  );
}

function DashboardLogo({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={cn(
        'w-8 h-8 rounded-aphelion-lg flex items-center justify-center text-xs font-bold',
        isDark
          ? 'bg-dark-primary text-dark-primary-foreground'
          : 'bg-light-primary text-light-primary-foreground'
      )}
    >
      /
    </div>
  );
}

// ─── THEME UTILS ─────────────────────────────────────────────────────────

function useThemeClasses(theme: NavbarTheme) {
  const isDark = theme === 'dark';
  return {
    bg: isDark ? 'bg-transparent' : 'bg-light-background',
    border: isDark ? 'border-dark-border' : 'border-light-border',
    text: isDark ? 'text-dark-text-primary' : 'text-light-text-primary',
    textMuted: isDark
      ? 'text-dark-text-secondary'
      : 'text-light-text-secondary',
    hoverBg: isDark ? 'hover:bg-dark-hover' : 'hover:bg-light-hover',
    pillBg: isDark ? 'bg-dark-card' : 'bg-light-card',
    pillBorder: isDark ? 'border-dark-border' : 'border-light-border',
    scrolledBg: isDark ? 'bg-dark-background/80' : 'bg-light-background/80',
    mobileBg: isDark ? 'bg-dark-background/95' : 'bg-light-background/95',
    inputBg: isDark ? 'bg-dark-muted' : 'bg-light-muted',
    inputBorder: isDark ? 'border-dark-border' : 'border-light-border',
    dropdownBg: isDark ? 'bg-dark-card' : 'bg-light-card',
    dropdownBorder: isDark ? 'border-dark-border' : 'border-light-border',
    dropdownText: isDark
      ? 'text-dark-text-secondary'
      : 'text-light-text-secondary',
    dropdownHover: isDark
      ? 'hover:bg-dark-hover hover:text-dark-text-primary'
      : 'hover:bg-light-hover hover:text-light-text-primary',
    hamburger: isDark ? 'bg-dark-text-primary' : 'bg-light-text-primary',
    breadcrumbText: isDark ? 'text-dark-text-muted' : 'text-light-text-muted',
    breadcrumbActive: isDark
      ? 'text-dark-text-primary'
      : 'text-light-text-primary',
    breadcrumbSeparator: isDark
      ? 'text-dark-text-muted'
      : 'text-light-text-muted',
    logoCircleBg: isDark ? 'bg-dark-primary' : 'bg-light-primary',
    logoCircleText: isDark
      ? 'text-dark-primary-foreground'
      : 'text-light-primary-foreground',
  };
}

// ─── VARIANT 1: Default ──────────────────────────────────────────────────

function DefaultNavbar({
  logo,
  logoHref,
  links,
  dropdowns,
  ctaPrimary,
  ctaSecondary,
  showSearch,
  searchPlaceholder,
  mobileNav,
  isScrolled,
  theme,
}: any) {
  const t = useThemeClasses(theme);
  return (
    <div className="relative flex items-center justify-between py-3">
      <a
        href={logoHref}
        className={cn('flex items-center gap-2.5 shrink-0', t.text)}
      >
        {logo || <DefaultLogo />}
      </a>

      <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
        <NavLinks links={links} dropdowns={dropdowns} theme={theme} />
      </div>

      <div className="hidden md:flex items-center gap-2.5 shrink-0">
        {showSearch && (
          <SearchInput
            placeholder={searchPlaceholder}
            containerClassName="w-48 hidden lg:flex"
            theme={theme}
          />
        )}
        {ctaSecondary}
        {ctaPrimary || (
          <>
            <InlineButton
              variant="secondary"
              size="sm"
              theme={theme}
              className={cn(isScrolled && 'hidden lg:hidden')}
            >
              {theme === 'dark' ? 'Sign-in' : 'Log in'}
            </InlineButton>
            <InlineButton
              variant="primary"
              size="sm"
              theme={theme}
              className={cn(isScrolled && 'hidden lg:hidden')}
            >
              Get Started
            </InlineButton>
            {isScrolled && (
              <InlineButton
                variant="primary"
                size="sm"
                theme={theme}
                className="hidden lg:inline-flex"
              >
                Get Started
              </InlineButton>
            )}
          </>
        )}
      </div>

      <MobileNav nav={mobileNav} theme={theme} />
    </div>
  );
}

// ─── VARIANT 2: Pill ────────────────────────────────────────────────────

function PillNavbar({
  logo,
  logoHref,
  links,
  dropdowns,
  ctaPrimary,
  showSearch,
  searchPlaceholder,
  mobileNav,
  theme,
}: any) {
  const t = useThemeClasses(theme);
  const isDark = theme === 'dark';
  return (
    <div className="flex justify-center py-4">
      <div
        className={cn(
          'flex items-center gap-1 rounded-aphelion-full px-2 py-2 shadow-aphelion-lg border',
          t.pillBg,
          t.pillBorder
        )}
      >
        <a
          href={logoHref}
          className={cn(
            'flex items-center justify-center w-10 h-10 rounded-aphelion-full mr-1 shrink-0',
            isDark
              ? 'bg-dark-primary text-dark-primary-foreground'
              : 'bg-light-primary text-light-primary-foreground'
          )}
        >
          {logo || <DefaultLogo />}
        </a>
        <div className="hidden md:flex items-center gap-0.5">
          <NavLinks links={links} dropdowns={dropdowns} theme={theme} />
        </div>
        {showSearch && (
          <div
            className={cn(
              'hidden lg:flex items-center ml-2 pl-2',
              t.pillBorder,
              'border-l'
            )}
          >
            <SearchInput
              placeholder={searchPlaceholder}
              containerClassName={cn('w-44 border-none', t.inputBg)}
              theme={theme}
            />
          </div>
        )}
        {ctaPrimary && <div className="ml-2">{ctaPrimary}</div>}
        <div className="md:hidden ml-2">
          <MobileNav nav={mobileNav} theme={theme} />
        </div>
      </div>
    </div>
  );
}

// ─── VARIANT 3: Minimal ──────────────────────────────────────────────────

function MinimalNavbar({
  logo,
  logoHref,
  links,
  dropdowns,
  ctaPrimary,
  mobileNav,
  theme,
}: any) {
  const t = useThemeClasses(theme);
  return (
    <div className="flex items-center justify-between py-4">
      <a
        href={logoHref}
        className={cn('flex items-center gap-2.5 shrink-0', t.text)}
      >
        {logo || <DefaultLogo />}
      </a>

      <div className="hidden md:flex items-center gap-6">
        <NavLinks links={links} dropdowns={dropdowns} theme={theme} />
        {ctaPrimary && <div className="ml-4">{ctaPrimary}</div>}
      </div>

      <MobileNav nav={mobileNav} theme={theme} />
    </div>
  );
}

// ─── VARIANT 4: Split ────────────────────────────────────────────────────

function SplitNavbar({
  logo,
  logoHref,
  links,
  dropdowns,
  ctaPrimary,
  ctaSecondary,
  showSearch,
  searchPlaceholder,
  mobileNav,
  theme,
}: any) {
  const t = useThemeClasses(theme);
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-6">
        <a
          href={logoHref}
          className={cn('flex items-center gap-2.5 shrink-0', t.text)}
        >
          {logo || <DefaultLogo />}
        </a>
        <div className="hidden md:flex">
          <NavLinks links={links} dropdowns={dropdowns} theme={theme} />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-2.5 shrink-0">
        {showSearch && (
          <SearchInput
            placeholder={searchPlaceholder}
            containerClassName="w-56"
            theme={theme}
          />
        )}
        {ctaSecondary}
        {ctaPrimary}
      </div>

      <MobileNav nav={mobileNav} theme={theme} />
    </div>
  );
}

// ─── VARIANT 5: Centered ─────────────────────────────────────────────────

function CenteredNavbar({
  logo,
  logoHref,
  links,
  dropdowns,
  ctaPrimary,
  ctaSecondary,
  mobileNav,
  theme,
}: any) {
  const t = useThemeClasses(theme);
  return (
    <div className="flex items-center justify-between py-3">
      <div className="hidden md:flex items-center gap-1">
        <NavLinks
          links={links.slice(0, Math.ceil(links.length / 2))}
          dropdowns={dropdowns}
          theme={theme}
        />
      </div>

      <a
        href={logoHref}
        className={cn('flex items-center gap-2.5 shrink-0', t.text)}
      >
        {logo || <DefaultLogo />}
      </a>

      <div className="hidden md:flex items-center gap-1">
        <NavLinks
          links={links.slice(Math.ceil(links.length / 2))}
          theme={theme}
        />
      </div>

      <div className="hidden md:flex items-center gap-2.5 shrink-0">
        {ctaSecondary}
        {ctaPrimary}
      </div>

      <MobileNav nav={mobileNav} theme={theme} />
    </div>
  );
}

// ─── VARIANT 6: SaaS ─────────────────────────────────────────────────────

function SaasNavbar({
  logo,
  logoHref,
  links,
  dropdowns,
  ctaPrimary,
  ctaSecondary,
  mobileNav,
  theme,
}: any) {
  const t = useThemeClasses(theme);
  return (
    <div className="flex items-center justify-between py-4">
      <a
        href={logoHref}
        className={cn('flex items-center gap-2.5 shrink-0', t.text)}
      >
        {logo || <DefaultLogo />}
      </a>

      <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
        <NavLinks links={links} dropdowns={dropdowns} theme={theme} />
      </div>

      <div className="hidden md:flex items-center gap-2.5 shrink-0">
        {ctaSecondary || (
          <InlineButton variant="ghost" size="sm" theme={theme}>
            Log in
          </InlineButton>
        )}
        {ctaPrimary || (
          <InlineButton
            variant="accent"
            size="pill"
            theme={theme}
            className="px-5"
          >
            Sign up
          </InlineButton>
        )}
      </div>

      <MobileNav nav={mobileNav} theme={theme} />
    </div>
  );
}

// ─── VARIANT 7: Dashboard ────────────────────────────────────────────────

function DashboardNavbar({
  logo,
  logoHref,
  links,
  dropdowns,
  ctaPrimary,
  showSearch,
  searchPlaceholder,
  mobileNav,
  avatar,
  theme,
}: any) {
  const t = useThemeClasses(theme);
  const isDark = theme === 'dark';
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-6">
        <a
          href={logoHref}
          className={cn('flex items-center gap-2.5 shrink-0', t.text)}
        >
          {logo || <DashboardLogo isDark={isDark} />}
        </a>
        <div className="hidden md:flex">
          <NavLinks links={links} dropdowns={dropdowns} theme={theme} />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3 shrink-0">
        {showSearch && (
          <SearchInput
            placeholder={searchPlaceholder}
            containerClassName="w-64"
            theme={theme}
          />
        )}
        {avatar && (
          <div className="w-8 h-8 rounded-aphelion-full overflow-hidden">
            {avatar}
          </div>
        )}
        {ctaPrimary || (
          <InlineButton variant="secondary" size="sm" theme={theme}>
            Upgrade
          </InlineButton>
        )}
      </div>

      <MobileNav nav={mobileNav} theme={theme} />
    </div>
  );
}

// ─── Main Navbar ─────────────────────────────────────────────────────────

export interface NavbarProps {
  logo?: React.ReactNode;
  logoHref?: string;
  links?: NavItem[];
  dropdowns?: { label: string; items: NavItem[] }[];
  mobileNav?: NavCategory[];
  ctaPrimary?: React.ReactNode;
  ctaSecondary?: React.ReactNode;
  showSearch?: boolean;
  searchPlaceholder?: string;
  showBreadcrumb?: boolean;
  breadcrumbItems?: BreadcrumbItem[];
  variant?: NavbarVariant;
  theme?: NavbarTheme;
  className?: string;
  containerClassName?: string;
  scrolledClassName?: string;
  scrollThreshold?: number;
  avatar?: React.ReactNode;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(function Navbar(
  {
    logo,
    logoHref = '/',
    links = [],
    dropdowns = [],
    mobileNav,
    ctaPrimary,
    ctaSecondary,
    showSearch = false,
    searchPlaceholder = 'Search...',
    showBreadcrumb = false,
    breadcrumbItems = [],
    variant = 'default',
    theme = 'dark',
    className,
    containerClassName,
    scrolledClassName,
    scrollThreshold = 50,
    avatar,
  },
  ref
) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  const defaultMobileNav: NavCategory[] = [
    {
      name: 'Navigation',
      items: [...links, ...dropdowns.flatMap((d) => d.items)],
    },
  ];

  const navProps = {
    logo,
    logoHref,
    links,
    dropdowns,
    ctaPrimary,
    ctaSecondary,
    showSearch,
    searchPlaceholder,
    mobileNav: mobileNav || defaultMobileNav,
    isScrolled,
    avatar,
    theme,
  };

  const t = useThemeClasses(theme);
  const isLight = theme === 'light';

  return (
    <>
      <header
        ref={ref}
        className={cn(
          'fixed left-0 top-0 w-full z-50',
          variant !== 'pill' && isLight
            ? 'bg-light-background border-b border-light-border'
            : '',
          className
        )}
      >
        <div
          className={cn(
            'mx-auto px-4 transition-all duration-300 lg:px-8',
            variant === 'default' && [
              'mt-3 max-w-6xl',
              isScrolled &&
                cn(
                  'max-w-4xl rounded-aphelion-2xl border backdrop-blur-xl lg:px-6',
                  t.scrolledBg,
                  t.border,
                  scrolledClassName
                ),
            ],
            variant === 'minimal' && 'max-w-6xl',
            variant === 'split' && 'max-w-6xl',
            variant === 'centered' && 'max-w-6xl',
            variant === 'saas' && 'max-w-6xl',
            variant === 'dashboard' && 'max-w-6xl',
            variant === 'pill' && '',
            containerClassName
          )}
        >
          {variant === 'default' && <DefaultNavbar {...navProps} />}
          {variant === 'pill' && <PillNavbar {...navProps} />}
          {variant === 'minimal' && <MinimalNavbar {...navProps} />}
          {variant === 'split' && <SplitNavbar {...navProps} />}
          {variant === 'centered' && <CenteredNavbar {...navProps} />}
          {variant === 'saas' && <SaasNavbar {...navProps} />}
          {variant === 'dashboard' && <DashboardNavbar {...navProps} />}
        </div>
      </header>

      {showBreadcrumb && breadcrumbItems.length > 0 && (
        <div className="pt-24 pb-4 px-6 max-w-6xl mx-auto">
          <Breadcrumb items={breadcrumbItems} theme={theme} />
        </div>
      )}
    </>
  );
});

Navbar.displayName = 'Navbar';

export {
  Navbar,
  InlineButton as Button,
  SearchInput,
  Dropdown,
  MobileNav,
  Breadcrumb,
  NavLinks,
};
export default Navbar;
