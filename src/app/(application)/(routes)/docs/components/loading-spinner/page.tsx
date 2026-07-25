"use client";

import {
  Spinner,
  DefaultSpinner,
  CircleSpinner,
  PinwheelSpinner,
  CircleFilledSpinner,
  EllipsisSpinner,
  RingSpinner,
  BarsSpinner,
  InfiniteSpinner,
} from "@/registry/components/Loading-spinner/Loading-spinner";
import InstallCommand from "@/components/docs/InstallCommand";
import CodeBlock from "@/components/docs/CodeBlock";
import ComponentPreview from "@/components/docs/ComponentPreview";
import PropsTable from "@/components/docs/PropsTable";
import DocsSection from "@/components/docs/DocsSection";
import DocsPageLayout from "@/components/docs/DocsPageLayout";
import BottomNav from "@/components/docs/BottomNav";
import DocsFooter from "@/components/docs/DocsFooter";
import { useState } from "react";

// ─── Spinner Data ────────────────────────────────────────────────────────

const spinnerData = {
  name: "Loading-Spinner",
  slug: "loading-spinner",
  title: "Loading Spinner",
  description:
    "A collection of production-ready loading spinners with 8 unique variants, 5 sizes, and 2 color themes. Built with pure SVG and CSS animations — no external dependencies.",
  category: "Feedback",
  installation: {
    command: "shadcn@latest add aphelio/c/loading-spinner",
  },
  usage: {
    import: `import { Spinner } from "@/components/ui/loading-spinner";`,
    basic: `<Spinner variant="default" size="md" theme="dark" />`,
  },
  sections: [
    {
      id: "variants",
      title: "Variants",
      description: "Eight unique spinner styles for different contexts and aesthetics.",
      examples: [
        {
          label: "Default (Sunburst)",
          code: `<Spinner variant="default" size="lg" theme="dark" />`,
          preview: <Spinner variant="default" size="lg" theme="dark" />,
        },
        {
          label: "Circle (Rotating Arc)",
          code: `<Spinner variant="circle" size="lg" theme="dark" />`,
          preview: <Spinner variant="circle" size="lg" theme="dark" />,
        },
        {
          label: "Pinwheel (Swirl)",
          code: `<Spinner variant="pinwheel" size="lg" theme="dark" />`,
          preview: <Spinner variant="pinwheel" size="lg" theme="dark" />,
        },
        {
          label: "Circle Filled",
          code: `<Spinner variant="circle-filled" size="lg" theme="dark" />`,
          preview: <Spinner variant="circle-filled" size="lg" theme="dark" />,
        },
        {
          label: "Ellipsis (Bouncing Dots)",
          code: `<Spinner variant="ellipsis" size="lg" theme="dark" />`,
          preview: <Spinner variant="ellipsis" size="lg" theme="dark" />,
        },
        {
          label: "Ring (Pulsing)",
          code: `<Spinner variant="ring" size="lg" theme="dark" />`,
          preview: <Spinner variant="ring" size="lg" theme="dark" />,
        },
        {
          label: "Bars (Scaling)",
          code: `<Spinner variant="bars" size="lg" theme="dark" />`,
          preview: <Spinner variant="bars" size="lg" theme="dark" />,
        },
        {
          label: "Infinite (Infinity)",
          code: `<Spinner variant="infinite" size="lg" theme="dark" />`,
          preview: <Spinner variant="infinite" size="lg" theme="dark" />,
        },
      ],
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Five predefined sizes from small inline spinners to large page loaders.",
      examples: [
        {
          label: "Small (sm)",
          code: `<Spinner variant="default" size="sm" theme="dark" />`,
          preview: <Spinner variant="default" size="sm" theme="dark" />,
        },
        {
          label: "Medium (md) — Default",
          code: `<Spinner variant="default" size="md" theme="dark" />`,
          preview: <Spinner variant="default" size="md" theme="dark" />,
        },
        {
          label: "Large (lg)",
          code: `<Spinner variant="default" size="lg" theme="dark" />`,
          preview: <Spinner variant="default" size="lg" theme="dark" />,
        },
        {
          label: "Extra Large (xl)",
          code: `<Spinner variant="default" size="xl" theme="dark" />`,
          preview: <Spinner variant="default" size="xl" theme="dark" />,
        },
        {
          label: "2X Large (2xl)",
          code: `<Spinner variant="default" size="2xl" theme="dark" />`,
          preview: <Spinner variant="default" size="2xl" theme="dark" />,
        },
      ],
    },
    {
      id: "themes",
      title: "Themes",
      description: "Dark and light themes for different background contexts.",
      examples: [
        {
          label: "Dark Theme",
          code: `<Spinner variant="circle" size="lg" theme="dark" />`,
          preview: <Spinner variant="circle" size="lg" theme="dark" />,
        },
        {
          label: "Light Theme",
          code: `<div className="rounded-xl bg-white p-6 flex items-center justify-center">
  <Spinner variant="circle" size="lg" theme="light" />
</div>`,
          preview: (
            <div className="flex items-center justify-center rounded-xl bg-white p-6">
              <Spinner variant="circle" size="lg" theme="light" />
            </div>
          ),
        },
      ],
    },
    {
      id: "button-loading",
      title: "Button Loading",
      description: "Use spinners inside buttons to indicate loading states.",
      examples: [
        {
          label: "Loading Button",
          code: `<button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black opacity-70">
  <Spinner size="sm" variant="circle" theme="light" />
  Loading...
</button>`,
          preview: (
            <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black opacity-70">
              <Spinner size="sm" variant="circle" theme="light" />
              Loading...
            </button>
          ),
        },
      ],
    },
    {
      id: "page-loader",
      title: "Page Loader",
      description: "Full-page loading indicators with accompanying text.",
      examples: [
        {
          label: "Page Loading",
          code: `<div className="flex flex-col items-center gap-3 py-8">
  <Spinner size="xl" variant="pinwheel" theme="dark" />
  <p className="text-sm text-white/40">Loading content...</p>
</div>`,
          preview: (
            <div className="flex flex-col items-center gap-3 py-8">
              <Spinner size="xl" variant="pinwheel" theme="dark" />
              <p className="text-sm text-white/40">Loading content...</p>
            </div>
          ),
        },
      ],
    },
    {
      id: "inline-loading",
      title: "Inline Loading",
      description: "Compact inline spinners for form submissions and small actions.",
      examples: [
        {
          label: "Inline Spinner",
          code: `<div className="flex items-center gap-2">
  <Spinner size="sm" variant="ellipsis" theme="dark" />
  <span className="text-sm text-white/60">Saving changes...</span>
</div>`,
          preview: (
            <div className="flex items-center gap-2">
              <Spinner size="sm" variant="ellipsis" theme="dark" />
              <span className="text-sm text-white/60">Saving changes...</span>
            </div>
          ),
        },
      ],
    },
    {
      id: "individual-exports",
      title: "Individual Exports",
      description: "Import each spinner variant directly for tree-shaking and explicit usage.",
      examples: [
        {
          label: "Named Exports",
          code: `import {
  DefaultSpinner,
  CircleSpinner,
  PinwheelSpinner,
  CircleFilledSpinner,
  EllipsisSpinner,
  RingSpinner,
  BarsSpinner,
  InfiniteSpinner,
} from "@/components/ui/loading-spinner";

// Use directly without variant prop
<CircleSpinner size="md" theme="dark" />
<EllipsisSpinner size="lg" theme="light" />`,
          preview: (
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <DefaultSpinner size="md" theme="dark" />
                <span className="text-[10px] text-white/40">Default</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircleSpinner size="md" theme="dark" />
                <span className="text-[10px] text-white/40">Circle</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <PinwheelSpinner size="md" theme="dark" />
                <span className="text-[10px] text-white/40">Pinwheel</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircleFilledSpinner size="md" theme="dark" />
                <span className="text-[10px] text-white/40">Filled</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <EllipsisSpinner size="md" theme="dark" />
                <span className="text-[10px] text-white/40">Ellipsis</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RingSpinner size="md" theme="dark" />
                <span className="text-[10px] text-white/40">Ring</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <BarsSpinner size="md" theme="dark" />
                <span className="text-[10px] text-white/40">Bars</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <InfiniteSpinner size="md" theme="dark" />
                <span className="text-[10px] text-white/40">Infinite</span>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "interactive",
      title: "Interactive Playground",
      description: "Try all combinations of variant, size, and theme in real-time.",
      examples: [
        {
          label: "Live Preview",
          code: `const [variant, setVariant] = useState("default");
const [size, setSize] = useState("md");
const [theme, setTheme] = useState("dark");

<Spinner variant={variant} size={size} theme={theme} />`,
          preview: <InteractiveSpinnerPreview />,
        },
      ],
    },
  ],
  props: [
    {
      name: "variant",
      type: "'default' | 'circle' | 'pinwheel' | 'circle-filled' | 'ellipsis' | 'ring' | 'bars' | 'infinite'",
      default: '"default"',
      description: "Visual style of the spinner animation.",
    },
    {
      name: "size",
      type: "'sm' | 'md' | 'lg' | 'xl' | '2xl'",
      default: '"md"',
      description: "Size of the spinner. Maps to 16px, 24px, 32px, 40px, 48px respectively.",
    },
    {
      name: "theme",
      type: "'dark' | 'light'",
      default: '"dark"',
      description: "Color theme. Dark renders white spinners, light renders black spinners.",
    },
    {
      name: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes for custom styling.",
    },
  ],
};

const bottomNavItems = [
  {
    label: "Skeleton",
    href: "/docs/components/skeleton",
    description: "Placeholder loading state for content.",
  },
  {
    label: "Progress",
    href: "/docs/components/progress",
    description: "Linear progress indicator component.",
  },
];

// ─── Interactive Preview Component ──────────────────────────────────────

function InteractiveSpinnerPreview() {
  const [currentVariant, setCurrentVariant] = useState("default");
  const [currentSize, setCurrentSize] = useState("md");
  const [currentTheme, setCurrentTheme] = useState("dark");

  const variants = [
    { id: "default", label: "Default" },
    { id: "circle", label: "Circle" },
    { id: "pinwheel", label: "Pinwheel" },
    { id: "circle-filled", label: "Circle Filled" },
    { id: "ellipsis", label: "Ellipsis" },
    { id: "ring", label: "Ring" },
    { id: "bars", label: "Bars" },
    { id: "infinite", label: "Infinite" },
  ];

  const sizes = [
    { id: "sm", label: "SM" },
    { id: "md", label: "MD" },
    { id: "lg", label: "LG" },
    { id: "xl", label: "XL" },
    { id: "2xl", label: "2XL" },
  ];

  const themes = [
    { id: "dark", label: "Dark" },
    { id: "light", label: "Light" },
  ];

  return (
    <div className="space-y-5">
      {/* Controls */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
            Variant
          </p>
          <div className="flex flex-wrap gap-1.5">
            {variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setCurrentVariant(v.id)}
                className={`rounded-md px-2.5 py-1 text-[11px] transition-colors ${
                  currentVariant === v.id
                    ? "bg-white/15 text-white"
                    : "border border-white/[0.06] text-white/50 hover:bg-white/[0.06] hover:text-white/70"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
            Size
          </p>
          <div className="flex flex-wrap gap-1.5">
            {sizes.map((s) => (
              <button
                key={s.id}
                onClick={() => setCurrentSize(s.id)}
                className={`rounded-md px-2.5 py-1 text-[11px] transition-colors ${
                  currentSize === s.id
                    ? "bg-white/15 text-white"
                    : "border border-white/[0.06] text-white/50 hover:bg-white/[0.06] hover:text-white/70"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
            Theme
          </p>
          <div className="flex flex-wrap gap-1.5">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setCurrentTheme(t.id)}
                className={`rounded-md px-2.5 py-1 text-[11px] transition-colors ${
                  currentTheme === t.id
                    ? "bg-white/15 text-white"
                    : "border border-white/[0.06] text-white/50 hover:bg-white/[0.06] hover:text-white/70"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Live Preview */}
      <div
        className={`flex items-center justify-center gap-4 rounded-xl border border-white/[0.06] p-8 ${
          currentTheme === "light" ? "bg-white" : "bg-white/[0.02]"
        }`}
      >
        <Spinner
          variant={currentVariant as any}
          size={currentSize as any}
          theme={currentTheme as any}
        />
        <span
          className={`text-sm ${
            currentTheme === "light" ? "text-black/60" : "text-white/40"
          }`}
        >
          {currentVariant} • {currentSize} • {currentTheme}
        </span>
      </div>
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────

export default function LoadingSpinnerPage() {
  return (
    <DocsPageLayout
      category={spinnerData.category}
      title={spinnerData.title}
      description={spinnerData.description}
      sideMapGroup={[
        { id: "installation", title: "Installation" },
        { id: "usage", title: "Usage" },
        { id: "examples", title: "Examples" },
        ...spinnerData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: "props", title: "Props" },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          Installation
        </h2>
        <p className="mb-4 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Install the Loading-Spinner component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={spinnerData.installation.command} />
      </section>

      <section className="mb-14" id="usage">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          Usage
        </h2>
        <p className="mb-4 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Import the component and use it in your application.
        </p>
        <div className="space-y-4">
          <div>
            <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
              Import
            </p>
            <CodeBlock code={spinnerData.usage.import} />
          </div>
          <div>
            <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
              Basic
            </p>
            <CodeBlock code={spinnerData.usage.basic} />
          </div>
        </div>
      </section>

      <section className="mb-14" id="examples">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          Examples
        </h2>
        <p className="mb-6 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Common use cases and configurations.
        </p>
        {spinnerData.sections.map((section) => (
          <DocsSection
            key={section.id}
            title={section.title}
            description={section.description}
          >
            <div className="space-y-4">
              {section.examples.map((example, idx) => (
                <div key={idx}>
                  <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
                    {example.label}
                  </p>
                  <ComponentPreview>{example.preview}</ComponentPreview>
                  <div className="mt-3">
                    <CodeBlock code={example.code} />
                  </div>
                </div>
              ))}
            </div>
          </DocsSection>
        ))}
      </section>

      <section className="remove-scroll mb-14" id="props">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          Props
        </h2>
        <p className="mb-5 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          All props available on the Spinner component.
        </p>
        <PropsTable props={spinnerData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}