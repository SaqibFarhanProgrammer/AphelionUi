"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ─── Utility ──────────────────────────────────────────────────────────
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ──────────────────────────────────────────────────────────────────────
// TIMELINE COMPONENT SYSTEM
// ──────────────────────────────────────────────────────────────────────

// ─── CVA Variants ─────────────────────────────────────────────────────
const timelineVariants = cva(["relative", "w-full"], {
  variants: {
    layout: {
      vertical: "",
      "vertical-left": "",
      alternating: "",
      horizontal: "",
    },
    theme: {
      dark: "",
      light: "",
    },
  },
  defaultVariants: {
    layout: "vertical-left",
    theme: "dark",
  },
});

const dotVariants = cva(
  [
    "relative",
    "shrink-0",
    "rounded-full",
    "border-2",
    "transition-all",
    "duration-300",
    "z-10",
  ],
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5",
      },
      state: {
        completed: "",
        active: "",
        pending: "",
      },
      theme: {
        dark: "",
        light: "",
      },
    },
    compoundVariants: [
      {
        theme: "dark",
        state: "completed",
        className: "border-white bg-white",
      },
      {
        theme: "dark",
        state: "active",
        className: "border-white bg-black",
      },
      {
        theme: "dark",
        state: "pending",
        className: "border-white/30 bg-transparent",
      },
      {
        theme: "light",
        state: "completed",
        className: "border-black bg-black",
      },
      {
        theme: "light",
        state: "active",
        className: "border-black bg-white",
      },
      {
        theme: "light",
        state: "pending",
        className: "border-black/30 bg-transparent",
      },
    ],
    defaultVariants: {
      size: "md",
      state: "completed",
      theme: "dark",
    },
  }
);

const lineVariants = cva(["absolute", "transition-all", "duration-300"], {
  variants: {
    layout: {
      vertical: "",
      "vertical-left": "",
      alternating: "",
      horizontal: "",
    },
    theme: {
      dark: "",
      light: "",
    },
  },
  compoundVariants: [
    {
      theme: "dark",
      className: "bg-white/15",
    },
    {
      theme: "light",
      className: "bg-black/15",
    },
  ],
  defaultVariants: {
    layout: "vertical-left",
    theme: "dark",
  },
});

const contentVariants = cva(["flex", "flex-col"], {
  variants: {
    layout: {
      vertical: "",
      "vertical-left": "",
      alternating: "",
      horizontal: "",
    },
  },
  defaultVariants: {
    layout: "vertical-left",
  },
});

// ─── Types ────────────────────────────────────────────────────────────
export interface TimelineItem {
  id: string;
  date?: string;
  title: string;
  description?: string;
  state?: "completed" | "active" | "pending";
}

export interface TimelineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineVariants> {
  items: TimelineItem[];
  dotSize?: "sm" | "md" | "lg";
  className?: string;
  itemClassName?: string;
  dotClassName?: string;
  lineClassName?: string;
  contentClassName?: string;
  dateClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

// ─── Vertical Left Layout (Image 1) ───────────────────────────────────
function VerticalLeftTimeline({
  items,
  theme = "dark",
  dotSize = "md",
  className,
  itemClassName,
  dotClassName,
  lineClassName,
  contentClassName,
  dateClassName,
  titleClassName,
  descriptionClassName,
}: TimelineProps) {
  const textMuted = theme === "dark" ? "text-white/50" : "text-black/50";
  const textTitle = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className={cn("relative pl-8", className)}>
      {/* Vertical Line */}
      <div
        className={cn(
          "absolute left-[7px] top-1 bottom-1 w-px",
          theme === "dark" ? "bg-white/15" : "bg-black/15",
          lineClassName
        )}
      />

      <div className="flex flex-col gap-10">
        {items.map((item, index) => {
          const state = item.state ?? (index < items.length - 1 ? "completed" : "pending");
          return (
            <div key={item.id} className={cn("relative flex items-start gap-5", itemClassName)}>
              {/* Dot */}
              <div
                className={cn(
                  "absolute -left-8 top-1",
                  dotVariants({ size: dotSize, state, theme }),
                  dotClassName
                )}
              />

              {/* Content */}
              <div className={cn("flex flex-col gap-1", contentClassName)}>
                {item.date && (
                  <span className={cn("text-sm", textMuted, dateClassName)}>
                    {item.date}
                  </span>
                )}
                <h3 className={cn("text-base font-semibold", textTitle, titleClassName)}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className={cn("text-sm leading-relaxed", textMuted, descriptionClassName)}>
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Alternating Layout (Image 2) ─────────────────────────────────────
function AlternatingTimeline({
  items,
  theme = "dark",
  dotSize = "md",
  className,
  itemClassName,
  dotClassName,
  lineClassName,
  contentClassName,
  dateClassName,
  titleClassName,
  descriptionClassName,
}: TimelineProps) {
  const textMuted = theme === "dark" ? "text-white/50" : "text-black/50";
  const textTitle = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className={cn("relative", className)}>
      {/* Center Vertical Line */}
      <div
        className={cn(
          "absolute left-1/2 top-1 bottom-1 w-px -translate-x-1/2",
          theme === "dark" ? "bg-white/15" : "bg-black/15",
          lineClassName
        )}
      />

      <div className="flex flex-col gap-12">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const state = item.state ?? (index < items.length - 1 ? "completed" : "pending");

          return (
            <div
              key={item.id}
              className={cn(
                "relative flex items-center",
                isLeft ? "justify-start" : "justify-end",
                itemClassName
              )}
            >
              {/* Content - Left Side */}
              <div
                className={cn(
                  "w-[calc(50%-2rem)]",
                  isLeft ? "text-right pr-8" : "order-2 pl-8 text-left",
                  contentClassName
                )}
              >
                {item.date && (
                  <span className={cn("text-sm", textMuted, dateClassName)}>
                    {item.date}
                  </span>
                )}
                <h3 className={cn("text-base font-semibold", textTitle, titleClassName)}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className={cn("text-sm leading-relaxed", textMuted, descriptionClassName)}>
                    {item.description}
                  </p>
                )}
              </div>

              {/* Center Dot */}
              <div
                className={cn(
                  "absolute left-1/2 -translate-x-1/2",
                  dotVariants({ size: dotSize, state, theme }),
                  dotClassName
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Horizontal Layout (Image 3) ──────────────────────────────────────
function HorizontalTimeline({
  items,
  theme = "dark",
  dotSize = "md",
  className,
  itemClassName,
  dotClassName,
  lineClassName,
  contentClassName,
  dateClassName,
  titleClassName,
  descriptionClassName,
}: TimelineProps) {
  const textMuted = theme === "dark" ? "text-white/50" : "text-black/50";
  const textTitle = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className={cn("relative w-full", className)}>
      {/* Horizontal Line */}
      <div
        className={cn(
          "absolute top-[7px] left-0 right-0 h-px",
          theme === "dark" ? "bg-white/15" : "bg-black/15",
          lineClassName
        )}
      />

      <div className="flex justify-between">
        {items.map((item, index) => {
          const state = item.state ?? (index < items.length - 1 ? "completed" : "pending");

          return (
            <div
              key={item.id}
              className={cn(
                "relative flex flex-col items-start pt-8",
                index === 0 ? "items-start" : index === items.length - 1 ? "items-end" : "items-start",
                itemClassName
              )}
              style={{ flex: 1 }}
            >
              {/* Dot */}
              <div
                className={cn(
                  "absolute top-0",
                  index === 0 ? "left-0" : index === items.length - 1 ? "right-0" : "left-0",
                  dotVariants({ size: dotSize, state, theme }),
                  dotClassName
                )}
              />

              {/* Content */}
              <div className={cn("flex flex-col gap-1 max-w-[200px]", contentClassName)}>
                {item.date && (
                  <span className={cn("text-sm", textMuted, dateClassName)}>
                    {item.date}
                  </span>
                )}
                <h3 className={cn("text-base font-semibold", textTitle, titleClassName)}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className={cn("text-sm leading-relaxed", textMuted, descriptionClassName)}>
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Timeline Component ──────────────────────────────────────────
const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  function Timeline(
    {
      layout = "vertical-left",
      theme = "dark",
      items,
      dotSize = "md",
      className,
      ...props
    },
    ref
  ) {
    const renderTimeline = () => {
      switch (layout) {
        case "alternating":
          return (
            <AlternatingTimeline
              items={items}
              theme={theme}
              dotSize={dotSize}
              className={className}
              {...props}
            />
          );
        case "horizontal":
          return (
            <HorizontalTimeline
              items={items}
              theme={theme}
              dotSize={dotSize}
              className={className}
              {...props}
            />
          );
        case "vertical-left":
        default:
          return (
            <VerticalLeftTimeline
              items={items}
              theme={theme}
              dotSize={dotSize}
              className={className}
              {...props}
            />
          );
      }
    };

    return (
      <div
        ref={ref}
        className={cn(timelineVariants({ layout, theme }), className)}
        {...props}
      >
        {renderTimeline()}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";

// ─── Timeline Item Component (for custom layouts) ─────────────────────
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: string;
  title: string;
  description?: string;
  state?: "completed" | "active" | "pending";
  theme?: "dark" | "light";
  dotSize?: "sm" | "md" | "lg";
  className?: string;
}

const TimelineItemComponent = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  function TimelineItemComponent(
    {
      date,
      title,
      description,
      state = "completed",
      theme = "dark",
      dotSize = "md",
      className,
      ...props
    },
    ref
  ) {
    const textMuted = theme === "dark" ? "text-white/50" : "text-black/50";
    const textTitle = theme === "dark" ? "text-white" : "text-black";

    return (
      <div ref={ref} className={cn("flex flex-col gap-1", className)} {...props}>
        {date && <span className={cn("text-sm", textMuted)}>{date}</span>}
        <h3 className={cn("text-base font-semibold", textTitle)}>{title}</h3>
        {description && (
          <p className={cn("text-sm leading-relaxed", textMuted)}>{description}</p>
        )}
      </div>
    );
  }
);
TimelineItemComponent.displayName = "TimelineItem";

// ─── Named Exports ────────────────────────────────────────────────────
export {
  Timeline,
  TimelineItemComponent as TimelineItem,
  timelineVariants,
  dotVariants,
  lineVariants,
  contentVariants,
  VerticalLeftTimeline,
  AlternatingTimeline,
  HorizontalTimeline,
};

export default Timeline;