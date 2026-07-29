"use client";

import {
  Timeline,
  TimelineItem,
  VerticalLeftTimeline,
  AlternatingTimeline,
  HorizontalTimeline,
} from "@/registry/components/Timeline/Timeline";
import InstallCommand from "@/components/docs/InstallCommand";
import CodeBlock from "@/components/docs/CodeBlock";
import ComponentPreview from "@/components/docs/ComponentPreview";
import PropsTable from "@/components/docs/PropsTable";
import DocsSection from "@/components/docs/DocsSection";
import DocsPageLayout from "@/components/docs/DocsPageLayout";
import BottomNav from "@/components/docs/BottomNav";
import DocsFooter from "@/components/docs/DocsFooter";
import { useState } from "react";


const sampleItems = [
  {
    id: "1",
    date: "2024-01-15",
    title: "Project Kickoff",
    description: "Initial project planning and team alignment meeting.",
    state: "completed" as const,
  },
  {
    id: "2",
    date: "2024-01-22",
    title: "Design Phase",
    description: "UI/UX design and prototyping completed.",
    state: "completed" as const,
  },
  {
    id: "3",
    date: "2024-02-01",
    title: "Development Sprint 1",
    description: "Core features implementation and testing.",
    state: "active" as const,
  },
  {
    id: "4",
    date: "2024-02-15",
    title: "Development Sprint 2",
    description: "Advanced features and performance optimization.",
    state: "pending" as const,
  },
  {
    id: "5",
    date: "2024-03-01",
    title: "Project Launch",
    description: "Final release and deployment to production.",
    state: "pending" as const,
  },
];

const eventItems = [
  {
    id: "1",
    date: "9:00 AM",
    title: "Registration",
    description: "Check-in and welcome coffee.",
    state: "completed" as const,
  },
  {
    id: "2",
    date: "10:00 AM",
    title: "Keynote Speech",
    description: "Opening presentation by CEO.",
    state: "completed" as const,
  },
  {
    id: "3",
    date: "11:30 AM",
    title: "Workshop Session",
    description: "Hands-on workshop with experts.",
    state: "active" as const,
  },
  {
    id: "4",
    date: "1:00 PM",
    title: "Lunch Break",
    description: "Networking and refreshments.",
    state: "pending" as const,
  },
];


const timelineData = {
  name: "Timeline",
  slug: "timeline",
  title: "Timeline",
  description:
    "A versatile timeline component with three layouts (vertical-left, alternating, horizontal), three item states, two themes, and customizable dot sizes. Built with pure Tailwind CSS.",
  category: "Display",
  installation: {
    command: "shadcn@latest add aphelio/c/timeline",
  },
  usage: {
    import: `import {
  Timeline,
  VerticalLeftTimeline,
  AlternatingTimeline,
  HorizontalTimeline,
} from "@/components/ui/timeline";`,
    basic: `<Timeline
  items={[
    { id: "1", date: "Jan 15", title: "Started", state: "completed" },
    { id: "2", date: "Jan 22", title: "In Progress", state: "active" },
    { id: "3", date: "Feb 1", title: "Pending", state: "pending" },
  ]}
  layout="vertical-left"
  theme="dark"
/>`,
  },
  sections: [
    {
      id: "layouts",
      title: "Layouts",
      description: "Three distinct layouts for different use cases and screen sizes.",
      examples: [
        {
          label: "Vertical Left",
          code: `<Timeline
  items={items}
  layout="vertical-left"
  theme="dark"
  dotSize="md"
/>`,
          preview: (
            <VerticalLeftTimeline
              items={sampleItems.slice(0, 4)}
              theme="dark"
              dotSize="md"
            />
          ),
        },
        {
          label: "Alternating",
          code: `<Timeline
  items={items}
  layout="alternating"
  theme="dark"
  dotSize="md"
/>`,
          preview: (
            <AlternatingTimeline
              items={sampleItems.slice(0, 4)}
              theme="dark"
              dotSize="md"
            />
          ),
        },
        {
          label: "Horizontal",
          code: `<Timeline
  items={items}
  layout="horizontal"
  theme="dark"
  dotSize="md"
/>`,
          preview: (
            <HorizontalTimeline
              items={sampleItems}
              theme="dark"
              dotSize="md"
            />
          ),
        },
      ],
    },
   
    {
      id: "states",
      title: "States",
      description: "Three visual states to indicate item progress: completed, active, and pending.",
      examples: [
        {
          label: "Completed",
          code: `<Timeline
  items={[
    { id: "1", title: "Task Done", state: "completed" },
  ]}
  layout="vertical-left"
  theme="dark"
/>`,
          preview: (
            <VerticalLeftTimeline
              items={[
                {
                  id: "1",
                  date: "2024-01-15",
                  title: "Task Completed",
                  description: "All requirements fulfilled.",
                  state: "completed",
                },
              ]}
              theme="dark"
              dotSize="md"
            />
          ),
        },
        {
          label: "Active",
          code: `<Timeline
  items={[
    { id: "1", title: "In Progress", state: "active" },
  ]}
  layout="vertical-left"
  theme="dark"
/>`,
          preview: (
            <VerticalLeftTimeline
              items={[
                {
                  id: "1",
                  date: "2024-01-15",
                  title: "Task In Progress",
                  description: "Currently working on this task.",
                  state: "active",
                },
              ]}
              theme="dark"
              dotSize="md"
            />
          ),
        },
        {
          label: "Pending",
          code: `<Timeline
  items={[
    { id: "1", title: "Awaiting", state: "pending" },
  ]}
  layout="vertical-left"
  theme="dark"
/>`,
          preview: (
            <VerticalLeftTimeline
              items={[
                {
                  id: "1",
                  date: "2024-01-15",
                  title: "Task Pending",
                  description: "Awaiting action.",
                  state: "pending",
                },
              ]}
              theme="dark"
              dotSize="md"
            />
          ),
        },
      ],
    },
    {
      id: "dot-sizes",
      title: "Dot Sizes",
      description: "Three dot sizes for different visual emphasis.",
      examples: [
        {
          label: "Small",
          code: `<Timeline items={items} layout="vertical-left" dotSize="sm" />`,
          preview: (
            <VerticalLeftTimeline
              items={sampleItems.slice(0, 3)}
              theme="dark"
              dotSize="sm"
            />
          ),
        },
        {
          label: "Medium (Default)",
          code: `<Timeline items={items} layout="vertical-left" dotSize="md" />`,
          preview: (
            <VerticalLeftTimeline
              items={sampleItems.slice(0, 3)}
              theme="dark"
              dotSize="md"
            />
          ),
        },
        {
          label: "Large",
          code: `<Timeline items={items} layout="vertical-left" dotSize="lg" />`,
          preview: (
            <VerticalLeftTimeline
              items={sampleItems.slice(0, 3)}
              theme="dark"
              dotSize="lg"
            />
          ),
        },
      ],
    },
    {
      id: "project-timeline",
      title: "Project Timeline",
      description: "A real-world project timeline example with mixed states.",
      examples: [
        {
          label: "Development Roadmap",
          code: `<Timeline
  layout="vertical-left"
  theme="dark"
  items={[
    { id: "1", date: "Week 1", title: "Research", description: "User interviews.", state: "completed" },
    { id: "2", date: "Week 2-3", title: "Design", description: "Wireframes.", state: "completed" },
    { id: "3", date: "Week 4-6", title: "Development", description: "Implementation.", state: "active" },
    { id: "4", date: "Week 7", title: "Testing", description: "QA and deployment.", state: "pending" },
  ]}
/>`,
          preview: (
            <VerticalLeftTimeline
              items={[
                {
                  id: "1",
                  date: "Week 1",
                  title: "Research & Discovery",
                  description: "User interviews and market analysis.",
                  state: "completed",
                },
                {
                  id: "2",
                  date: "Week 2-3",
                  title: "Design & Prototyping",
                  description: "Wireframes and interactive prototypes.",
                  state: "completed",
                },
                {
                  id: "3",
                  date: "Week 4-6",
                  title: "Development",
                  description: "Frontend and backend implementation.",
                  state: "active",
                },
                {
                  id: "4",
                  date: "Week 7",
                  title: "Testing & Deployment",
                  description: "QA testing and production deployment.",
                  state: "pending",
                },
              ]}
              theme="dark"
              dotSize="md"
            />
          ),
        },
      ],
    },
 
    {
      id: "individual-exports",
      title: "Individual Exports",
      description: "Import each layout directly for tree-shaking and explicit usage.",
      examples: [
        {
          label: "Named Layout Exports",
          code: `import {
  VerticalLeftTimeline,
  AlternatingTimeline,
  HorizontalTimeline,
} from "@/components/ui/timeline";

<VerticalLeftTimeline items={items} theme="dark" dotSize="md" />
<AlternatingTimeline items={items} theme="dark" dotSize="md" />
<HorizontalTimeline items={items} theme="dark" dotSize="md" />`,
          preview: (
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-wider text-aphelion-light-text-primary">VerticalLeftTimeline</p>
                <VerticalLeftTimeline
                  items={sampleItems.slice(0, 2)}
                  theme="dark"
                  dotSize="sm"
                />
              </div>
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-wider text-aphelion-light-text-primary">HorizontalTimeline</p>
                <HorizontalTimeline
                  items={sampleItems.slice(0, 3)}
                  theme="dark"
                  dotSize="sm"
                />
              </div>
            </div>
          ),
        },
      ],
    },
  
  ],
  props: [
    {
      name: "layout",
      type: "'vertical-left' | 'alternating' | 'horizontal'",
      default: '"vertical-left"',
      description: "Layout style of the timeline.",
    },
    {
      name: "theme",
      type: "'dark' | 'light'",
      default: '"dark"',
      description: "Color theme. Dark uses white dots/lines, light uses black.",
    },
    {
      name: "items",
      type: "TimelineItem[]",
      default: "required",
      description: "Array of timeline items with id, title, description, date, and state.",
    },
    {
      name: "dotSize",
      type: "'sm' | 'md' | 'lg'",
      default: '"md"',
      description: "Size of the dot markers.",
    },
    {
      name: "className",
      type: "string",
      default: '""',
      description: "Additional classes for the timeline container.",
    },
    {
      name: "itemClassName",
      type: "string",
      default: '""',
      description: "Additional classes for each timeline item.",
    },
    {
      name: "dotClassName",
      type: "string",
      default: '""',
      description: "Additional classes for each dot marker.",
    },
    {
      name: "lineClassName",
      type: "string",
      default: '""',
      description: "Additional classes for the connecting line.",
    },
    {
      name: "contentClassName",
      type: "string",
      default: '""',
      description: "Additional classes for the content area.",
    },
    {
      name: "dateClassName",
      type: "string",
      default: '""',
      description: "Additional classes for the date text.",
    },
    {
      name: "titleClassName",
      type: "string",
      default: '""',
      description: "Additional classes for the title text.",
    },
    {
      name: "descriptionClassName",
      type: "string",
      default: '""',
      description: "Additional classes for the description text.",
    },
  ],
  itemProps: [
    {
      name: "id",
      type: "string",
      default: "required",
      description: "Unique identifier for the timeline item.",
    },
    {
      name: "title",
      type: "string",
      default: "required",
      description: "Main title text displayed for the item.",
    },
    {
      name: "description",
      type: "string",
      default: "undefined",
      description: "Optional description text below the title.",
    },
    {
      name: "date",
      type: "string",
      default: "undefined",
      description: "Optional date or timestamp displayed above the title.",
    },
    {
      name: "state",
      type: "'completed' | 'active' | 'pending'",
      default: "auto-detected",
      description: "Visual state of the item. Auto-detected from position if not provided.",
    },
  ],
};

const bottomNavItems = [
  {
    label: "Loading-Spinner",
    href: "/docs/components/loading-spinner",
    description: "Loading indicators with multiple variants.",
  },
  {
    label: "Accordion",
    href: "/docs/components/accordion",
    description: "Collapsible content sections.",
  },
];


function InteractiveTimelinePreview() {
  const [currentLayout, setCurrentLayout] = useState("vertical-left");
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [currentDotSize, setCurrentDotSize] = useState("md");

  const layouts = [
    { id: "vertical-left", label: "Vertical Left" },
    { id: "alternating", label: "Alternating" },
    { id: "horizontal", label: "Horizontal" },
  ];

  const themes = [
    { id: "dark", label: "Dark" },
    { id: "light", label: "Light" },
  ];

  const dotSizes = [
    { id: "sm", label: "Small" },
    { id: "md", label: "Medium" },
    { id: "lg", label: "Large" },
  ];

  return (
    <div className="space-y-5">
      {/* Controls */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
            Layout
          </p>
          <div className="flex flex-wrap gap-1.5">
            {layouts.map((l) => (
              <button
                key={l.id}
                onClick={() => setCurrentLayout(l.id)}
                className={`rounded-md px-2.5 py-1 text-[11px] transition-colors ${
                  currentLayout === l.id
                    ? "bg-white/15 text-white"
                    : "border border-white/[0.06] text-white/50 hover:bg-white/[0.06] hover:text-white/70"
                }`}
              >
                {l.label}
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
        <div>
          <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
            Dot Size
          </p>
          <div className="flex flex-wrap gap-1.5">
            {dotSizes.map((s) => (
              <button
                key={s.id}
                onClick={() => setCurrentDotSize(s.id)}
                className={`rounded-md px-2.5 py-1 text-[11px] transition-colors ${
                  currentDotSize === s.id
                    ? "bg-white/15 text-white"
                    : "border border-white/[0.06] text-white/50 hover:bg-white/[0.06] hover:text-white/70"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Live Preview */}
      <div
        className={`rounded-aphelion-xl border border-white/[0.06] p-6 ${
          currentTheme === "light" ? "bg-white" : "bg-white/[0.02]"
        }`}
      >
        <Timeline
          layout={currentLayout as any}
          theme={currentTheme as any}
          dotSize={currentDotSize as any}
          items={sampleItems.slice(0, 4)}
        />
      </div>
    </div>
  );
}


export default function TimelinePage() {
  return (
    <DocsPageLayout
      category={timelineData.category}
      title={timelineData.title}
      description={timelineData.description}
      sideMapGroup={[
        { id: "installation", title: "Installation" },
        { id: "usage", title: "Usage" },
        { id: "examples", title: "Examples" },
        ...timelineData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: "props", title: "Props" },
        { id: "item-props", title: "TimelineItem Props" },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          Installation
        </h2>
        <p className="mb-4 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Install the Timeline component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={timelineData.installation.command} />
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
            <CodeBlock code={timelineData.usage.import} />
          </div>
          <div>
            <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
              Basic
            </p>
            <CodeBlock code={timelineData.usage.basic} />
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
        {timelineData.sections.map((section) => (
          <DocsSection
            key={section.id}
            id={section.id}
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
          All props available on the Timeline component.
        </p>
        <PropsTable props={timelineData.props} />
      </section>

      <section className="remove-scroll mb-14" id="item-props">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          TimelineItem Props
        </h2>
        <p className="mb-5 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Properties available on each item in the items array.
        </p>
        <PropsTable props={timelineData.itemProps} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}