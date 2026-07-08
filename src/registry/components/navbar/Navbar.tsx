"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Icons ───────────────────────────────────────────────────────────────

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
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
  | "default"
  | "pill"
  | "minimal"
  | "split"
  | "centered"
  | "saas"
  | "dashboard";

export type NavbarTheme = "dark" | "light";

// ─── Button ──────────────────────────────────────────────────────────────

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out select-none active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary: "bg-white text-black hover:bg-white/90",
        secondary: "bg-white/10 text-white border border-white/10 hover:bg-white/15 hover:border-white/20",
        ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
        outline: "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5",
        accent: "bg-orange-500 text-white hover:bg-orange-400",
        dark: "bg-black text-white hover:bg-neutral-800",
        light: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
      },
      size: {
        sm: "px-3 py-1.5 text-xs rounded-lg",
        md: "px-4 py-2 text-sm rounded-xl",
        lg: "px-5 py-2.5 text-sm rounded-xl",
        pill: "px-5 py-2 text-sm rounded-full",
        icon: "w-8 h-8 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, icon, children, className, asChild, ...props }, ref) => {
    const Comp = asChild ? React.Slot : "button";
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

// ─── Search Input ────────────────────────────────────────────────────────

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  theme?: NavbarTheme;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ containerClassName, className, theme = "dark", ...props }, ref) => {
    const isDark = theme === "dark";
    return (
      <div 
        style={{ fontFamily: "sans-serif" }}
        className={cn(
          "flex items-center gap-2 rounded-xl px-3 py-2 transition-all duration-200",
          isDark 
            ? "bg-white/5 border border-white/10 focus-within:border-white/20" 
            : "bg-neutral-100 border border-neutral-200 focus-within:border-neutral-300",
          containerClassName
        )}
      >
        <SearchIcon className={cn("shrink-0", isDark ? "text-white/40" : "text-neutral-400")} />
        <input
          ref={ref}
          type="text"
          className={cn(
            "bg-transparent text-sm outline-none w-full",
            isDark ? "text-white placeholder:text-white/30" : "text-neutral-900 placeholder:text-neutral-400",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
SearchInput.displayName = "SearchInput";

// ─── Dropdown ────────────────────────────────────────────────────────────

interface DropdownProps {
  trigger: React.ReactNode;
  items: NavItem[];
  align?: "left" | "right";
  theme?: NavbarTheme;
}

function Dropdown({ trigger, items, align = "left", theme = "dark" }: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isDark = theme === "dark";

  return (
    <div ref={ref} className="relative" style={{ fontFamily: "sans-serif" }}>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {trigger}
      </div>
      {open && (
        <div 
          style={{ fontFamily: "sans-serif" }}
          className={cn(
            "absolute top-full mt-2 min-w-[180px] rounded-xl border py-1.5 z-50 shadow-2xl",
            isDark 
              ? "border-white/10 bg-[#1a1a1a] shadow-black/40" 
              : "border-neutral-200 bg-white shadow-black/10",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-4 py-2.5 text-sm transition-colors duration-150",
                isDark 
                  ? "text-white/70 hover:text-white hover:bg-white/5" 
                  : "text-neutral-600 hover:text-black hover:bg-neutral-50"
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

function MobileNav({ nav, logo, cta, theme = "dark" }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  const Link = 'a';
  const isDark = theme === "dark";

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="md:hidden" style={{ fontFamily: "sans-serif" }}>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close Menu' : 'Open Menu'}
        className="relative z-50 flex items-center justify-center w-10 h-10"
      >
        <div className="relative w-4 h-3">
          <span className={cn(
            "absolute left-0 block h-0.5 w-4 transition-all duration-200",
            isDark ? "bg-white" : "bg-black",
            open ? "top-[0.35rem] -rotate-45" : "top-0"
          )} />
          <span className={cn(
            "absolute left-0 block h-0.5 w-4 transition-all duration-200",
            isDark ? "bg-white" : "bg-black",
            open ? "top-[0.35rem] rotate-45" : "top-[0.55rem]"
          )} />
        </div>
      </button>

      <div className={cn(
        "fixed inset-0 z-40 backdrop-blur-xl transition-all duration-300",
        isDark ? "bg-black/95" : "bg-white/95",
        open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <div className="flex flex-col h-full px-6 pt-20 pb-6 overflow-auto" style={{ fontFamily: "sans-serif" }}>
          {logo && <div className="mb-8">{logo}</div>}

          <div className="flex flex-col gap-10">
            {nav.map((category, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <p className={cn(
                  "text-sm font-medium uppercase tracking-wider",
                  isDark ? "text-white/40" : "text-neutral-400"
                )}>
                  {category.name}
                </p>
                <div className="flex flex-col gap-3">
                  {category.items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className={cn(
                        "text-2xl font-medium transition-colors",
                        isDark ? "text-white/80 hover:text-white" : "text-neutral-800 hover:text-black"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
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

function Breadcrumb({ items, className, theme = "dark" }: BreadcrumbProps) {
  const isDark = theme === "dark";
  return (
    <nav aria-label="breadcrumb" className={cn("flex items-center gap-2 text-sm", className)} style={{ fontFamily: "sans-serif" }}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight className={cn("shrink-0", isDark ? "text-white/30" : "text-neutral-300")} />
          )}
          {item.href ? (
            <a
              href={item.href}
              className={cn(
                "transition-colors duration-150",
                isDark ? "text-white/50 hover:text-white" : "text-neutral-500 hover:text-black"
              )}
            >
              {item.label}
            </a>
          ) : (
            <span className={isDark ? "text-white" : "text-neutral-900"}>{item.label}</span>
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

function NavLinks({ links, dropdowns = [], className, theme = "dark" }: NavLinksProps) {
  const isDark = theme === "dark";
  return (
    <div className={cn("flex items-center gap-1", className)} style={{ fontFamily: "sans-serif" }}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={cn(
            "px-4 py-2 text-sm transition-colors duration-200 rounded-lg",
            isDark 
              ? "text-white/60 hover:text-white hover:bg-white/5" 
              : "text-neutral-600 hover:text-black hover:bg-neutral-100"
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
            <span className={cn(
              "flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200 rounded-lg cursor-pointer",
              isDark 
                ? "text-white/60 hover:text-white hover:bg-white/5" 
                : "text-neutral-600 hover:text-black hover:bg-neutral-100"
            )}>
              {dropdown.label} <ChevronDown className="shrink-0" />
            </span>
          }
          items={dropdown.items}
        />
      ))}
    </div>
  );
}

// ─── THEME UTILS ─────────────────────────────────────────────────────────

function useThemeClasses(theme: NavbarTheme) {
  const isDark = theme === "dark";
  return {
    bg: isDark ? "bg-transparent" : "bg-white",
    border: isDark ? "border-white/10" : "border-neutral-200",
    text: isDark ? "text-white" : "text-neutral-900",
    textMuted: isDark ? "text-white/60" : "text-neutral-600",
    hoverBg: isDark ? "hover:bg-white/5" : "hover:bg-neutral-100",
    pillBg: isDark ? "bg-[#1a1a1a]" : "bg-white",
    pillBorder: isDark ? "border-white/10" : "border-neutral-200",
    scrolledBg: isDark ? "bg-black/80" : "bg-white/80",
    mobileBg: isDark ? "bg-black/95" : "bg-white/95",
    inputBg: isDark ? "bg-white/5" : "bg-neutral-100",
    inputBorder: isDark ? "border-white/10" : "border-neutral-200",
    dropdownBg: isDark ? "bg-[#1a1a1a]" : "bg-white",
    dropdownBorder: isDark ? "border-white/10" : "border-neutral-200",
    dropdownText: isDark ? "text-white/70" : "text-neutral-600",
    dropdownHover: isDark ? "hover:bg-white/5 hover:text-white" : "hover:bg-neutral-50 hover:text-black",
    hamburger: isDark ? "bg-white" : "bg-black",
    breadcrumbText: isDark ? "text-white/50" : "text-neutral-500",
    breadcrumbActive: isDark ? "text-white" : "text-neutral-900",
    breadcrumbSeparator: isDark ? "text-white/30" : "text-neutral-300",
  };
}

// ─── VARIANT 1: Default ──────────────────────────────────────────────────
// Logo left, links center, buttons right. Scroll pe pill + blur.

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
    <div className="relative flex items-center justify-between py-3" style={{ fontFamily: "sans-serif" }}>
      <a href={logoHref} className={cn("flex items-center gap-2.5 shrink-0", t.text)} style={{ fontFamily: "sans-serif" }}>
        {logo || (
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
            <circle cx="16" cy="16" r="6" fill="currentColor" />
          </svg>
        )}
      </a>

      <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
        <NavLinks links={links} dropdowns={dropdowns} theme={theme} />
      </div>

      <div className="hidden md:flex items-center gap-2.5 shrink-0" style={{ fontFamily: "sans-serif" }}>
        {showSearch && <SearchInput placeholder={searchPlaceholder} containerClassName="w-48 hidden lg:flex" theme={theme} />}
        {ctaSecondary}
        {ctaPrimary || (
          <>
            <Button variant={theme === "dark" ? "secondary" : "light"} size="sm" className={cn(isScrolled && "hidden lg:hidden")}>
              {theme === "dark" ? "Sign-in" : "Log in"}
            </Button>
            <Button variant={theme === "dark" ? "primary" : "dark"} size="sm" className={cn(isScrolled && "hidden lg:hidden")}>
              Get Started
            </Button>
            {isScrolled && (
              <Button variant={theme === "dark" ? "primary" : "dark"} size="sm" className="hidden lg:inline-flex">
                Get Started
              </Button>
            )}
          </>
        )}
      </div>

      <MobileNav nav={mobileNav} theme={theme} />
    </div>
  );
}

// ─── VARIANT 2: Pill ────────────────────────────────────────────────────
// Centered pill navbar, all items inside pill. Works with both themes.

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
  return (
    <div className="flex justify-center py-4" style={{ fontFamily: "sans-serif" }}>
      <div className={cn(
        "flex items-center gap-1 rounded-full px-2 py-2 shadow-2xl",
        t.pillBg,
        t.pillBorder,
        theme === "dark" ? "shadow-black/50" : "shadow-black/10 border"
      )}>
        <a href={logoHref} className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full mr-1 shrink-0",
          theme === "dark" ? "bg-white text-black" : "bg-black text-white"
        )}>
          {logo || (
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
              <circle cx="16" cy="16" r="6" fill="currentColor" />
            </svg>
          )}
        </a>
        <div className="hidden md:flex items-center gap-0.5">
          <NavLinks links={links} dropdowns={dropdowns} theme={theme} />
        </div>
        {showSearch && (
          <div className={cn("hidden lg:flex items-center ml-2 pl-2", t.pillBorder, "border-l")}>
            <SearchInput 
              placeholder={searchPlaceholder} 
              containerClassName={cn("w-44 border-none", t.inputBg)} 
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
// No bg, no border, just text links.

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
    <div className="flex items-center justify-between py-4" style={{ fontFamily: "sans-serif" }}>
      <a href={logoHref} className={cn("flex items-center gap-2.5 shrink-0", t.text)} style={{ fontFamily: "sans-serif" }}>
        {logo || (
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
            <circle cx="16" cy="16" r="6" fill="currentColor" />
          </svg>
        )}
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
// Logo + links left, search + buttons right.

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
    <div className="flex items-center justify-between py-3" style={{ fontFamily: "sans-serif" }}>
      <div className="flex items-center gap-6">
        <a href={logoHref} className={cn("flex items-center gap-2.5 shrink-0", t.text)} style={{ fontFamily: "sans-serif" }}>
          {logo || (
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
              <circle cx="16" cy="16" r="6" fill="currentColor" />
            </svg>
          )}
        </a>
        <div className="hidden md:flex">
          <NavLinks links={links} dropdowns={dropdowns} theme={theme} />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-2.5 shrink-0" style={{ fontFamily: "sans-serif" }}>
        {showSearch && <SearchInput placeholder={searchPlaceholder} containerClassName="w-56" theme={theme} />}
        {ctaSecondary}
        {ctaPrimary}
      </div>

      <MobileNav nav={mobileNav} theme={theme} />
    </div>
  );
}

// ─── VARIANT 5: Centered ─────────────────────────────────────────────────
// Logo center, links left, buttons right.

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
    <div className="flex items-center justify-between py-3" style={{ fontFamily: "sans-serif" }}>
      <div className="hidden md:flex items-center gap-1">
        <NavLinks links={links.slice(0, Math.ceil(links.length / 2))} dropdowns={dropdowns} theme={theme} />
      </div>

      <a href={logoHref} className={cn("flex items-center gap-2.5 shrink-0", t.text)} style={{ fontFamily: "sans-serif" }}>
        {logo || (
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
            <circle cx="16" cy="16" r="6" fill="currentColor" />
          </svg>
        )}
      </a>

      <div className="hidden md:flex items-center gap-1">
        <NavLinks links={links.slice(Math.ceil(links.length / 2))} theme={theme} />
      </div>

      <div className="hidden md:flex items-center gap-2.5 shrink-0" style={{ fontFamily: "sans-serif" }}>
        {ctaSecondary}
        {ctaPrimary}
      </div>

      <MobileNav nav={mobileNav} theme={theme} />
    </div>
  );
}

// ─── VARIANT 6: SaaS ─────────────────────────────────────────────────────
// Full width, accent CTA, dropdowns.

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
  const isDark = theme === "dark";
  return (
    <div className="flex items-center justify-between py-4" style={{ fontFamily: "sans-serif" }}>
      <a href={logoHref} className={cn("flex items-center gap-2.5 shrink-0", t.text)} style={{ fontFamily: "sans-serif" }}>
        {logo || (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke={isDark ? "white" : "#f97316"} strokeWidth="2" />
            <path d="M12 6v6l4 2" stroke={isDark ? "white" : "#f97316"} strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </a>

      <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
        <NavLinks links={links} dropdowns={dropdowns} theme={theme} />
      </div>

      <div className="hidden md:flex items-center gap-2.5 shrink-0" style={{ fontFamily: "sans-serif" }}>
        {ctaSecondary || (
          <Button variant="ghost" size="sm" className={isDark ? "" : "text-neutral-600 hover:text-black hover:bg-neutral-100"}>
            Log in
          </Button>
        )}
        {ctaPrimary || <Button variant="accent" size="pill" className="px-5">Sign up</Button>}
      </div>

      <MobileNav nav={mobileNav} theme={theme} />
    </div>
  );
}

// ─── VARIANT 7: Dashboard ────────────────────────────────────────────────
// Full width, search + avatar + button.

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
  const isDark = theme === "dark";
  return (
    <div className="flex items-center justify-between py-3" style={{ fontFamily: "sans-serif" }}>
      <div className="flex items-center gap-6">
        <a href={logoHref} className={cn("flex items-center gap-2.5 shrink-0", t.text)} style={{ fontFamily: "sans-serif" }}>
          {logo || (
            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold", isDark ? "bg-white text-black" : "bg-black text-white")}>
              /
            </div>
          )}
        </a>
        <div className="hidden md:flex">
          <NavLinks links={links} dropdowns={dropdowns} theme={theme} />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3 shrink-0" style={{ fontFamily: "sans-serif" }}>
        {showSearch && (
          <SearchInput placeholder={searchPlaceholder} containerClassName="w-64" theme={theme} />
        )}
        {avatar && <div className="w-8 h-8 rounded-full overflow-hidden">{avatar}</div>}
        {ctaPrimary || <Button variant={isDark ? "secondary" : "dark"} size="sm">Upgrade</Button>}
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

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  function Navbar(
    {
      logo,
      logoHref = "/",
      links = [],
      dropdowns = [],
      mobileNav,
      ctaPrimary,
      ctaSecondary,
      showSearch = false,
      searchPlaceholder = "Search...",
      showBreadcrumb = false,
      breadcrumbItems = [],
      variant = "default",
      theme = "dark",
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
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollThreshold]);

    const defaultMobileNav: NavCategory[] = [
      {
        name: "Navigation",
        items: [...links, ...dropdowns.flatMap(d => d.items)],
      },
    ];

    const navProps = {
      logo, logoHref, links, dropdowns,
      ctaPrimary, ctaSecondary,
      showSearch, searchPlaceholder,
      mobileNav: mobileNav || defaultMobileNav,
      isScrolled, avatar, theme,
    };

    const t = useThemeClasses(theme);
    const isLight = theme === "light";

    return (
      <>
        <header 
          ref={ref} 
          className={cn(
            "fixed left-0 top-0 w-full z-50",
            variant !== "pill" && isLight ? "bg-white border-b border-neutral-100" : "",
            className
          )} 
          style={{ fontFamily: "sans-serif" }}
        >
          <div
            className={cn(
              "mx-auto px-4 transition-all duration-300 lg:px-8",
              variant === "default" && [
                "mt-3 max-w-6xl",
                isScrolled && cn(
                  "max-w-4xl rounded-2xl border backdrop-blur-xl lg:px-6",
                  t.scrolledBg,
                  t.border,
                  scrolledClassName
                ),
              ],
              variant === "minimal" && "max-w-6xl",
              variant === "split" && "max-w-6xl",
              variant === "centered" && "max-w-6xl",
              variant === "saas" && "max-w-6xl",
              variant === "dashboard" && "max-w-6xl",
              variant === "pill" && "",
              containerClassName
            )}
          >
            {variant === "default" && <DefaultNavbar {...navProps} />}
            {variant === "pill" && <PillNavbar {...navProps} />}
            {variant === "minimal" && <MinimalNavbar {...navProps} />}
            {variant === "split" && <SplitNavbar {...navProps} />}
            {variant === "centered" && <CenteredNavbar {...navProps} />}
            {variant === "saas" && <SaasNavbar {...navProps} />}
            {variant === "dashboard" && <DashboardNavbar {...navProps} />}
          </div>
        </header>

        {showBreadcrumb && breadcrumbItems.length > 0 && (
          <div className="pt-24 pb-4 px-6 max-w-6xl mx-auto">
            <Breadcrumb items={breadcrumbItems} theme={theme} />
          </div>
        )}
      </>
    );
  }
);

Navbar.displayName = "Navbar";

export { Navbar, Button, SearchInput, Dropdown, MobileNav, Breadcrumb, NavLinks };
export default Navbar;