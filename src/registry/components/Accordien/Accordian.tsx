"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

// ─── Utility ─────────────────────────────────────────────────────────────

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ═══════════════════════════════════════════════════════════════════════════
//  ACCORDION COMPONENT SYSTEM
// ═══════════════════════════════════════════════════════════════════════════

// ─── CVA Variants ────────────────────────────────────────────────────────

const accordionVariants = cva(["w-full"], {
  variants: {
    theme: {
      dark: "",
      light: "",
    },
    variant: {
      default: "",
      bordered: "",
      card: "",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  compoundVariants: [
    { theme: "dark", variant: "default", className: "" },
    {
      theme: "dark",
      variant: "bordered",
      className: "border border-white/[0.08] rounded-[12px] overflow-hidden",
    },
    {
      theme: "dark",
      variant: "card",
      className:
        "border border-white/[0.08] rounded-[12px] overflow-hidden bg-white/[0.02]",
    },
    { theme: "light", variant: "default", className: "" },
    {
      theme: "light",
      variant: "bordered",
      className: "border border-black/[0.08] rounded-[12px] overflow-hidden",
    },
    {
      theme: "light",
      variant: "card",
      className:
        "border border-black/[0.08] rounded-[12px] overflow-hidden bg-black/[0.02]",
    },
  ],
  defaultVariants: {
    theme: "dark",
    variant: "default",
    size: "md",
  },
});

const itemVariants = cva(["w-full"], {
  variants: {
    theme: {
      dark: "",
      light: "",
    },
    variant: {
      default: "border-b",
      bordered: "border-b last:border-b-0",
      card: "border-b last:border-b-0",
    },
  },
  compoundVariants: [
    { theme: "dark", variant: "default", className: "border-white/[0.08]" },
    { theme: "dark", variant: "bordered", className: "border-white/[0.06]" },
    { theme: "dark", variant: "card", className: "border-white/[0.06]" },
    { theme: "light", variant: "default", className: "border-black/[0.08]" },
    { theme: "light", variant: "bordered", className: "border-black/[0.06]" },
    { theme: "light", variant: "card", className: "border-black/[0.06]" },
  ],
  defaultVariants: {
    theme: "dark",
    variant: "default",
  },
});

const triggerVariants = cva(
  [
    "flex",
    "w-full",
    "items-center",
    "justify-between",
    "gap-4",
    "text-left",
    "transition-colors",
    "duration-200",
    "select-none",
    "outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
  ],
  {
    variants: {
      theme: {
        dark: "text-white hover:bg-white/[0.02] focus-visible:ring-white/20",
        light: "text-black hover:bg-black/[0.02] focus-visible:ring-black/20",
      },
      size: {
        sm: "px-4 py-3 text-sm",
        md: "px-5 py-4 text-base",
        lg: "px-6 py-5 text-lg",
      },
    },
    defaultVariants: {
      theme: "dark",
      size: "md",
    },
  },
);

const contentVariants = cva(["overflow-hidden"], {
  variants: {
    theme: {
      dark: "text-white/60",
      light: "text-black/60",
    },
    size: {
      sm: "px-4 pb-3 text-sm",
      md: "px-5 pb-4 text-base",
      lg: "px-6 pb-5 text-base",
    },
  },
  defaultVariants: {
    theme: "dark",
    size: "md",
  },
});

// ─── Icon Components ─────────────────────────────────────────────────────

function ChevronIcon({
  open,
  theme = "dark",
}: {
  open: boolean;
  theme?: "dark" | "light";
}) {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "shrink-0",
        theme === "dark" ? "text-white/40" : "text-black/40",
      )}
    >
      <path d="M6 9l6 6 6-6" />
    </motion.svg>
  );
}

function LeftChevronIcon({
  open,
  theme = "dark",
}: {
  open: boolean;
  theme?: "dark" | "light";
}) {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? -90 : 0 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "shrink-0",
        theme === "dark" ? "text-white/40" : "text-black/40",
      )}
    >
      <path d="M9 18l6-6-6-6" />
    </motion.svg>
  );
}

function PlusMinusIcon({
  open,
  theme = "dark",
}: {
  open: boolean;
  theme?: "dark" | "light";
}) {
  return (
    <motion.span
      className={cn(
        "inline-flex h-5 w-5 shrink-0 items-center justify-center text-lg leading-none font-light",
        theme === "dark" ? "text-white/50" : "text-black/50",
      )}
      animate={{ rotate: open ? 90 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        className="absolute"
      >
        +
      </motion.span>
      <motion.span
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.15 }}
        className="absolute"
      >
        −
      </motion.span>
    </motion.span>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionVariants> {
  items: AccordionItem[];
  icon?: "chevron" | "left-chevron" | "plus-minus";
  type?: "single" | "multiple";
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  collapsible?: boolean;
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

// ─── Accordion Component ─────────────────────────────────────────────────

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion(
    {
      items,
      theme = "dark",
      variant = "default",
      size = "md",
      icon = "chevron",
      type = "single",
      defaultValue = [],
      value: controlledValue,
      onValueChange,
      collapsible = true,
      className,
      itemClassName,
      triggerClassName,
      contentClassName,
      ...props
    },
    ref,
  ) {
    const [internalValue, setInternalValue] =
      React.useState<string[]>(defaultValue);
    const isControlled = controlledValue !== undefined;
    const openItems = isControlled ? controlledValue : internalValue;

    const toggleItem = (id: string) => {
      let next: string[];
      if (type === "single") {
        if (openItems.includes(id)) {
          next = collapsible ? [] : [id];
        } else {
          next = [id];
        }
      } else {
        next = openItems.includes(id)
          ? openItems.filter((v) => v !== id)
          : [...openItems, id];
      }
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    };

    const renderIcon = (id: string) => {
      const isOpen = openItems.includes(id);
      switch (icon) {
        case "left-chevron":
          return <LeftChevronIcon open={isOpen} theme={theme!} />;
        case "plus-minus":
          return <PlusMinusIcon open={isOpen} theme={theme!} />;
        default:
          return <ChevronIcon open={isOpen} theme={theme!} />;
      }
    };

    return (
      <div
        style={{
          fontFamily: "sans-serif",
        }}
        ref={ref}
        className={cn(accordionVariants({ theme, variant, size }), className)}
        {...props}
      >
        {items.map((item) => {
          const isOpen = openItems.includes(item.id);
          return (
            <div
              key={item.id}
              className={cn(itemVariants({ theme, variant }), itemClassName)}
            >
              <button
                type="button"
                disabled={item.disabled}
                onClick={() => toggleItem(item.id)}
                className={cn(
                  triggerVariants({ theme, size }),
                  item.disabled && "cursor-not-allowed opacity-40",
                  triggerClassName,
                )}
                aria-expanded={isOpen}
              >
                <span className="font-medium">{item.title}</span>
                {renderIcon(item.id)}
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
                      opacity: { duration: 0.2, ease: "easeInOut" },
                    }}
                  >
                    <div
                      className={cn(
                        contentVariants({ theme, size }),
                        contentClassName,
                      )}
                    >
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    );
  },
);

Accordion.displayName = "Accordion";

// ─── useAccordion Hook ───────────────────────────────────────────────────

export function useAccordion(defaultOpen: string[] = []) {
  const [openItems, setOpenItems] = React.useState<string[]>(defaultOpen);
  return {
    openItems,
    setOpenItems,
    isOpen: (id: string) => openItems.includes(id),
    toggle: (id: string) => {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
      );
    },
    open: (id: string) => {
      setOpenItems((prev) => (prev.includes(id) ? prev : [...prev, id]));
    },
    close: (id: string) => {
      setOpenItems((prev) => prev.filter((v) => v !== id));
    },
    closeAll: () => setOpenItems([]),
  };
}

// ─── Named Exports ───────────────────────────────────────────────────────

export {
  Accordion,
  ChevronIcon,
  LeftChevronIcon,
  PlusMinusIcon,
  accordionVariants,
  itemVariants,
  triggerVariants,
  contentVariants,
};

export default Accordion;
