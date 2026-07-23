"use client";

import React from "react";
import { Avatar, AvatarGroup } from "@/registry/components/Avatar/Avatar";
import DocsPageLayout from "@/components/docs/DocsPageLayout";
import InstallCommand from "@/components/docs/InstallCommand";
import CodeBlock from "@/components/docs/CodeBlock";
import ComponentPreview from "@/components/docs/ComponentPreview";
import PropsTable from "@/components/docs/PropsTable";
import DocsSection from "@/components/docs/DocsSection";
import BottomNav from "@/components/docs/BottomNav";
import DocsFooter from "@/components/docs/DocsFooter";

const data = {
  name: "Avatar",
  slug: "avatar",
  title: "Avatar",
  description:
    "A versatile avatar component with image support, fallback initials, status indicators positioned outside the border, and grouping capabilities.",
  category: "Data Display",
  installation: {
    command: "npx aphelion add avatar",
  },
  usage: {
    import:
      "import { Avatar, AvatarGroup } from '@/registry/components/avatar/Avatar';",
    basic: '<Avatar src="https://i.pravatar.cc/150?img=1" alt="User" size="md" />',
  },
  sections: [
    {
      id: "sizes",
      title: "Sizes",
      description: "Seven predefined sizes for different use cases.",
      examples: [
        {
          label: "All Sizes",
          code: `<div className="flex items-center gap-4">
  <Avatar src="https://i.pravatar.cc/150?img=10" size="xs" />
  <Avatar src="https://i.pravatar.cc/150?img=11" size="sm" />
  <Avatar src="https://i.pravatar.cc/150?img=12" size="md" />
  <Avatar src="https://i.pravatar.cc/150?img=13" size="lg" />
  <Avatar src="https://i.pravatar.cc/150?img=14" size="xl" />
  <Avatar src="https://i.pravatar.cc/150?img=15" size="2xl" />
  <Avatar src="https://i.pravatar.cc/150?img=16" size="3xl" />
</div>`,
          preview: (
            <div className="flex items-center gap-4">
              <Avatar src="https://i.pravatar.cc/150?img=10" size="xs" />
              <Avatar src="https://i.pravatar.cc/150?img=11" size="sm" />
              <Avatar src="https://i.pravatar.cc/150?img=12" size="md" />
              <Avatar src="https://i.pravatar.cc/150?img=13" size="lg" />
              <Avatar src="https://i.pravatar.cc/150?img=14" size="xl" />
              <Avatar src="https://i.pravatar.cc/150?img=15" size="2xl" />
              <Avatar src="https://i.pravatar.cc/150?img=16" size="3xl" />
            </div>
          ),
        },
      ],
    },
    {
      id: "shapes",
      title: "Shapes",
      description: "Circle, square, and rounded border radius variants.",
      examples: [
        {
          label: "Shape Variants",
          code: `<div className="flex items-center gap-6">
  <Avatar src="https://i.pravatar.cc/150?img=20" shape="circle" size="xl" />
  <Avatar src="https://i.pravatar.cc/150?img=21" shape="square" size="xl" />
  <Avatar src="https://i.pravatar.cc/150?img=22" shape="rounded" size="xl" />
</div>`,
          preview: (
            <div className="flex items-center gap-6">
              <Avatar src="https://i.pravatar.cc/150?img=20" shape="circle" size="xl" />
              <Avatar src="https://i.pravatar.cc/150?img=21" shape="square" size="xl" />
              <Avatar src="https://i.pravatar.cc/150?img=22" shape="rounded" size="xl" />
            </div>
          ),
        },
      ],
    },
    {
      id: "fallback",
      title: "Fallback",
      description:
        "Displays initials when no image is provided or the image fails to load.",
      examples: [
        {
          label: "Initials Fallback",
          code: `<div className="flex items-center gap-4">
  <Avatar fallback="John Doe" size="xl" />
  <Avatar fallback="Alice Smith" size="xl" />
  <Avatar alt="Robert Brown" size="xl" />
</div>`,
          preview: (
            <div className="flex items-center gap-4">
              <Avatar fallback="John Doe" size="xl" />
              <Avatar fallback="Alice Smith" size="xl" />
              <Avatar alt="Robert Brown" size="xl" />
            </div>
          ),
        },
        {
          label: "Error State",
          code: `<Avatar src="https://invalid-url.com/image.jpg" fallback="Error" size="xl" />`,
          preview: (
            <Avatar
              src="https://invalid-url.com/image.jpg"
              fallback="Error"
              size="xl"
            />
          ),
        },
      ],
    },
    {
      id: "status",
      title: "Status",
      description:
        "Online, offline, away, busy, and invisible status indicators positioned outside the avatar border.",
      examples: [
        {
          label: "All Statuses",
          code: `<div className="flex items-center gap-6">
  <Avatar src="https://i.pravatar.cc/150?img=30" size="xl" status="online" />
  <Avatar src="https://i.pravatar.cc/150?img=31" size="xl" status="offline" />
  <Avatar src="https://i.pravatar.cc/150?img=32" size="xl" status="away" />
  <Avatar src="https://i.pravatar.cc/150?img=33" size="xl" status="busy" />
  <Avatar src="https://i.pravatar.cc/150?img=34" size="xl" status="invisible" />
</div>`,
          preview: (
            <div className="flex items-center gap-6">
              <Avatar src="https://i.pravatar.cc/150?img=30" size="xl" status="online" />
              <Avatar src="https://i.pravatar.cc/150?img=31" size="xl" status="offline" />
              <Avatar src="https://i.pravatar.cc/150?img=32" size="xl" status="away" />
              <Avatar src="https://i.pravatar.cc/150?img=33" size="xl" status="busy" />
              <Avatar src="https://i.pravatar.cc/150?img=34" size="xl" status="invisible" />
            </div>
          ),
        },
      ],
    },
    {
      id: "status-positions",
      title: "Status Positions",
      description:
        "Place the status indicator in any corner of the avatar.",
      examples: [
        {
          label: "Position Variants",
          code: `<div className="flex items-center gap-6">
  <Avatar src="https://i.pravatar.cc/150?img=40" size="xl" status="online" statusPosition="bottom-right" />
  <Avatar src="https://i.pravatar.cc/150?img=41" size="xl" status="online" statusPosition="bottom-left" />
  <Avatar src="https://i.pravatar.cc/150?img=42" size="xl" status="online" statusPosition="top-right" />
  <Avatar src="https://i.pravatar.cc/150?img=43" size="xl" status="online" statusPosition="top-left" />
</div>`,
          preview: (
            <div className="flex items-center gap-6">
              <Avatar
                src="https://i.pravatar.cc/150?img=40"
                size="xl"
                status="online"
                statusPosition="bottom-right"
              />
              <Avatar
                src="https://i.pravatar.cc/150?img=41"
                size="xl"
                status="online"
                statusPosition="bottom-left"
              />
              <Avatar
                src="https://i.pravatar.cc/150?img=42"
                size="xl"
                status="online"
                statusPosition="top-right"
              />
              <Avatar
                src="https://i.pravatar.cc/150?img=43"
                size="xl"
                status="online"
                statusPosition="top-left"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: "group",
      title: "Avatar Group",
      description:
        "Stack multiple avatars with configurable spacing, direction, and overflow handling.",
      examples: [
        {
          label: "Horizontal Group",
          code: `<AvatarGroup>
  <Avatar src="https://i.pravatar.cc/150?img=50" size="md" status="online" />
  <Avatar src="https://i.pravatar.cc/150?img=51" size="md" status="away" />
  <Avatar src="https://i.pravatar.cc/150?img=52" size="md" status="busy" />
  <Avatar src="https://i.pravatar.cc/150?img=53" size="md" status="offline" />
</AvatarGroup>`,
          preview: (
            <AvatarGroup>
              <Avatar src="https://i.pravatar.cc/150?img=50" size="md" status="online" />
              <Avatar src="https://i.pravatar.cc/150?img=51" size="md" status="away" />
              <Avatar src="https://i.pravatar.cc/150?img=52" size="md" status="busy" />
              <Avatar src="https://i.pravatar.cc/150?img=53" size="md" status="offline" />
            </AvatarGroup>
          ),
        },
        {
          label: "With Max Limit",
          code: `<AvatarGroup max={3} total={8}>
  <Avatar src="https://i.pravatar.cc/150?img=60" size="md" />
  <Avatar src="https://i.pravatar.cc/150?img=61" size="md" />
  <Avatar src="https://i.pravatar.cc/150?img=62" size="md" />
  <Avatar src="https://i.pravatar.cc/150?img=63" size="md" />
  <Avatar src="https://i.pravatar.cc/150?img=64" size="md" />
</AvatarGroup>`,
          preview: (
            <AvatarGroup max={3} total={8}>
              <Avatar src="https://i.pravatar.cc/150?img=60" size="md" />
              <Avatar src="https://i.pravatar.cc/150?img=61" size="md" />
              <Avatar src="https://i.pravatar.cc/150?img=62" size="md" />
              <Avatar src="https://i.pravatar.cc/150?img=63" size="md" />
              <Avatar src="https://i.pravatar.cc/150?img=64" size="md" />
            </AvatarGroup>
          ),
        },
        {
          label: "Vertical Group",
          code: `<AvatarGroup direction="vertical" spacing="tight">
  <Avatar src="https://i.pravatar.cc/150?img=70" size="md" status="online" />
  <Avatar src="https://i.pravatar.cc/150?img=71" size="md" status="online" />
  <Avatar src="https://i.pravatar.cc/150?img=72" size="md" status="online" />
</AvatarGroup>`,
          preview: (
            <AvatarGroup direction="vertical" spacing="tight">
              <Avatar src="https://i.pravatar.cc/150?img=70" size="md" status="online" />
              <Avatar src="https://i.pravatar.cc/150?img=71" size="md" status="online" />
              <Avatar src="https://i.pravatar.cc/150?img=72" size="md" status="online" />
            </AvatarGroup>
          ),
        },
      ],
    },
    {
      id: "interactive",
      title: "Interactive",
      description: "Clickable avatars with hover states.",
      examples: [
        {
          label: "Clickable",
          code: `<Avatar
  src="https://i.pravatar.cc/150?img=80"
  size="xl"
  status="online"
  onClick={() => console.log("Avatar clicked")}
/>`,
          preview: (
            <Avatar
              src="https://i.pravatar.cc/150?img=80"
              size="xl"
              status="online"
              onClick={() => console.log("Avatar clicked")}
            />
          ),
        },
      ],
    },
  ],
  props: [
    {
      name: "src",
      type: "string",
      default: "undefined",
      description: "URL of the avatar image.",
    },
    {
      name: "alt",
      type: "string",
      default: "undefined",
      description: "Alt text for the image, also used as a fallback for initials.",
    },
    {
      name: "fallback",
      type: "string",
      default: "undefined",
      description: "Text to derive initials from when no image is available.",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"',
      default: '"md"',
      description: "Size of the avatar.",
    },
    {
      name: "shape",
      type: '"circle" | "square" | "rounded"',
      default: '"circle"',
      description: "Border radius shape of the avatar.",
    },
    {
      name: "status",
      type: '"online" | "offline" | "away" | "busy" | "invisible" | false',
      default: "false",
      description: "Status indicator displayed outside the avatar border.",
    },
    {
      name: "statusPosition",
      type: '"bottom-right" | "bottom-left" | "top-right" | "top-left"',
      default: '"bottom-right"',
      description: "Corner position of the status indicator.",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Additional classes for the root element.",
    },
    {
      name: "imageClassName",
      type: "string",
      default: "undefined",
      description: "Additional classes for the image element.",
    },
    {
      name: "fallbackClassName",
      type: "string",
      default: "undefined",
      description: "Additional classes for the fallback text element.",
    },
    {
      name: "onClick",
      type: "() => void",
      default: "undefined",
      description: "Click handler that adds cursor-pointer and hover state.",
    },
  ],
  groupProps: [
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Avatar components to render in the group.",
    },
    {
      name: "direction",
      type: '"horizontal" | "vertical"',
      default: '"horizontal"',
      description: "Layout direction of the group.",
    },
    {
      name: "spacing",
      type: '"tight" | "normal" | "loose"',
      default: '"normal"',
      description: "Spacing between avatars in the group.",
    },
    {
      name: "max",
      type: "number",
      default: "undefined",
      description: "Maximum number of avatars to display before showing a counter.",
    },
    {
      name: "total",
      type: "number",
      default: "undefined",
      description: "Total number of items for the counter label.",
    },
    {
      name: "remainingText",
      type: "string",
      default: "undefined",
      description: "Custom text for the remaining counter.",
    },
    {
      name: "remainingClassName",
      type: "string",
      default: "undefined",
      description: "Additional classes for the remaining counter element.",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Additional classes for the group container.",
    },
  ],
};

const bottomNavItems = [
  {
    label: "Badge",
    href: "/docs/components/badge",
    description: "Small status indicators for UI elements.",
  },
  {
    label: "Button",
    href: "/docs/components/button",
    description: "Interactive elements for triggering actions.",
  },
];

export default function AvatarPage() {
  return (
    <DocsPageLayout
      category={data.category}
      title={data.title}
      description={data.description}
      sideMapGroup={[
        { id: "installation", title: "Installation" },
        { id: "usage", title: "Usage" },
        { id: "examples", title: "Examples" },
        ...data.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: "props", title: "Props" },
        { id: "group-props", title: "AvatarGroup Props" },
      ]}
    >
      {/* Installation */}
      <section className="mb-14" id="installation">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Installation
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Install the Avatar component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={data.installation.command} />
      </section>

      {/* Usage */}
      <section className="mb-14" id="usage">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Usage
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Import the component and use it in your application.
        </p>
        <div className="space-y-4">
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Import
            </p>
            <CodeBlock language="tsx" code={data.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock language="tsx" code={data.usage.basic} />
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="mb-14" id="examples">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Examples
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-6 leading-relaxed">
          Common use cases and configurations.
        </p>
        {data.sections.map((section) => (
          <DocsSection
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
          >
            <div className="space-y-4">
              {section.examples.map((example, idx) => (
                <div key={idx}>
                  <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
                    {example.label}
                  </p>
                  <ComponentPreview>{example.preview}</ComponentPreview>
                  <div className="mt-3">
                    <CodeBlock language="tsx" code={example.code} />
                  </div>
                </div>
              ))}
            </div>
          </DocsSection>
        ))}
      </section>

      {/* Props */}
      <section className="remove-scroll mb-14" id="props">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Props
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-5 leading-relaxed">
          All props available on the Avatar component.
        </p>
        <PropsTable props={data.props} />
      </section>

      {/* AvatarGroup Props */}
      <section className="remove-scroll mb-14" id="group-props">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          AvatarGroup Props
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-5 leading-relaxed">
          All props available on the AvatarGroup component.
        </p>
        <PropsTable props={data.groupProps} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );

}