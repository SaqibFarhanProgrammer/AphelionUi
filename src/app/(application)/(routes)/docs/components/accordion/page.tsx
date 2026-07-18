'use client';

import {
  Accordion,
  type AccordionItem,
  useAccordion,
} from '@/registry/components/Accordien/Accordian';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';
import { useState } from 'react';

// ─── Demo Data ───────────────────────────────────────────────────────────

const demoItems: AccordionItem[] = [
  {
    id: 'item-1',
    title: 'What is a design system?',
    content:
      'A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.',
  },
  {
    id: 'item-2',
    title: 'Why use Tailwind CSS?',
    content:
      'Tailwind CSS is a utility-first CSS framework that allows you to build custom designs quickly without leaving your HTML. It promotes consistency and reduces CSS bloat.',
  },
  {
    id: 'item-3',
    title: 'How does Framer Motion work?',
    content:
      'Framer Motion is a production-ready motion library for React. It provides declarative animations, gestures, and layout transitions with a simple API.',
  },
];

const longItems: AccordionItem[] = [
  {
    id: 'long-1',
    title: 'Getting Started with React',
    content: (
      <div className="space-y-2">
        <p>
          React is a JavaScript library for building user interfaces. It allows
          you to create reusable UI components and manage the state of your
          application efficiently.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Component-based architecture</li>
          <li>Virtual DOM for performance</li>
          <li>Unidirectional data flow</li>
          <li>Hooks for state and lifecycle</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'long-2',
    title: 'State Management in React',
    content: (
      <div className="space-y-2">
        <p>
          State management is crucial for building scalable React applications.
          Here are the most common approaches:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <strong>Local State:</strong> useState, useReducer for component
            state
          </li>
          <li>
            <strong>Global State:</strong> Context API, Redux, Zustand, Jotai
          </li>
          <li>
            <strong>Server State:</strong> React Query, SWR, Apollo Client
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'long-3',
    title: 'Styling in Modern React',
    content: (
      <div className="space-y-2">
        <p>There are multiple ways to style React components:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>CSS Modules for scoped styling</li>
          <li>Styled Components for CSS-in-JS</li>
          <li>Tailwind CSS for utility-first approach</li>
          <li>Sass/SCSS for advanced CSS features</li>
        </ul>
      </div>
    ),
  },
];

// ─── Accordion Data ──────────────────────────────────────────────────────

const accordionData = {
  name: 'Accordion',
  slug: 'accordion',
  title: 'Accordion',
  description:
    'A versatile accordion component that supports single/multiple selection, various themes, sizes, icon styles, and smooth Framer Motion animations.',
  category: 'Display',
  installation: {
    command: 'shadcn@latest add aphelio/c/accordion',
  },
  usage: {
    import: 'import { Accordion } from "@/components/ui/accordion"',
    basic: `const demoItems = [
  {
    id: "item-1",
    title: "What is a design system?",
    content: "A design system is a collection of reusable components...",
  },
  {
    id: "item-2",
    title: "Why use Tailwind CSS?",
    content: "Tailwind CSS is a utility-first CSS framework...",
  },
  {
    id: "item-3",
    title: "How does Framer Motion work?",
    content: "Framer Motion is a production-ready motion library for React...",
  },
];

<Accordion 
  items={demoItems} 
  theme="dark" 
  variant="default" 
/>`,
  },
  sections: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Three visual variants for different use cases.',
      examples: [
        {
          label: 'Default',
          code: `// Default variant with dark theme
<Accordion 
  items={demoItems} 
  theme="dark" 
  variant="default" 
/>`,
          preview: (
            <Accordion items={demoItems} theme="dark" variant="default" />
          ),
        },
        {
          label: 'Bordered',
          code: `// Bordered variant with dark theme
<Accordion 
  items={demoItems} 
  theme="dark" 
  variant="bordered" 
/>`,
          preview: (
            <Accordion items={demoItems} theme="dark" variant="bordered" />
          ),
        },
        {
          label: 'Card',
          code: `// Card variant with dark theme
<Accordion 
  items={demoItems} 
  theme="dark" 
  variant="card" 
/>`,
          preview: <Accordion items={demoItems} theme="dark" variant="card" />,
        },
      ],
    },
    {
      id: 'themes',
      title: 'Themes',
      description: 'Light and dark themes for different backgrounds.',
      examples: [
        {
          label: 'Dark Theme',
          code: `<Accordion 
  items={demoItems} 
  theme="dark" 
  variant="bordered" 
/>`,
          preview: (
            <Accordion items={demoItems} theme="dark" variant="bordered" />
          ),
        },
        {
          label: 'Light Theme',
          code: `<div className="rounded-xl border border-black/10 bg-white p-4">
  <Accordion 
    items={demoItems} 
    theme="light" 
    variant="bordered" 
  />
</div>`,
          preview: (
            <div className="rounded-xl border border-black/10 bg-white p-4">
              <Accordion items={demoItems} theme="light" variant="bordered" />
            </div>
          ),
        },
      ],
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Three predefined sizes for different contexts.',
      examples: [
        {
          label: 'Small',
          code: `<Accordion 
  items={demoItems} 
  theme="dark" 
  size="sm" 
  variant="bordered" 
/>`,
          preview: (
            <Accordion
              items={demoItems}
              theme="dark"
              size="sm"
              variant="bordered"
            />
          ),
        },
        {
          label: 'Medium (Default)',
          code: `<Accordion 
  items={demoItems} 
  theme="dark" 
  size="md" 
  variant="bordered" 
/>`,
          preview: (
            <Accordion
              items={demoItems}
              theme="dark"
              size="md"
              variant="bordered"
            />
          ),
        },
        {
          label: 'Large',
          code: `<Accordion 
  items={demoItems} 
  theme="dark" 
  size="lg" 
  variant="bordered" 
/>`,
          preview: (
            <Accordion
              items={demoItems}
              theme="dark"
              size="lg"
              variant="bordered"
            />
          ),
        },
      ],
    },
    {
      id: 'icons',
      title: 'Icons',
      description: 'Three icon styles for the accordion trigger.',
      examples: [
        {
          label: 'Chevron (Default)',
          code: `<Accordion 
  items={demoItems.slice(0, 2)} 
  theme="dark" 
  variant="bordered" 
  icon="chevron" 
/>`,
          preview: (
            <Accordion
              items={demoItems.slice(0, 2)}
              theme="dark"
              variant="bordered"
              icon="chevron"
            />
          ),
        },
        {
          label: 'Left Chevron',
          code: `<Accordion 
  items={demoItems.slice(0, 2)} 
  theme="dark" 
  variant="bordered" 
  icon="left-chevron" 
/>`,
          preview: (
            <Accordion
              items={demoItems.slice(0, 2)}
              theme="dark"
              variant="bordered"
              icon="left-chevron"
            />
          ),
        },
        {
          label: 'Plus / Minus',
          code: `<Accordion 
  items={demoItems.slice(0, 2)} 
  theme="dark" 
  variant="bordered" 
  icon="plus-minus" 
/>`,
          preview: (
            <Accordion
              items={demoItems.slice(0, 2)}
              theme="dark"
              variant="bordered"
              icon="plus-minus"
            />
          ),
        },
      ],
    },
    {
      id: 'behavior',
      title: 'Behavior',
      description: 'Single, multiple, and non-collapsible modes.',
      examples: [
        {
          label: 'Single (Default)',
          code: `<Accordion 
  items={demoItems} 
  theme="dark" 
  variant="bordered" 
  type="single" 
  defaultValue={["item-1"]} 
/>`,
          preview: (
            <Accordion
              items={demoItems}
              theme="dark"
              variant="bordered"
              type="single"
              defaultValue={['item-1']}
            />
          ),
        },
        {
          label: 'Multiple',
          code: `<Accordion 
  items={demoItems} 
  theme="dark" 
  variant="bordered" 
  type="multiple" 
  defaultValue={["item-1", "item-2"]} 
/>`,
          preview: (
            <Accordion
              items={demoItems}
              theme="dark"
              variant="bordered"
              type="multiple"
              defaultValue={['item-1', 'item-2']}
            />
          ),
        },
        {
          label: 'Non-Collapsible',
          code: `<Accordion 
  items={demoItems} 
  theme="dark" 
  variant="bordered" 
  type="single" 
  defaultValue={["item-1"]} 
  collapsible={false} 
/>`,
          preview: (
            <Accordion
              items={demoItems}
              theme="dark"
              variant="bordered"
              type="single"
              defaultValue={['item-1']}
              collapsible={false}
            />
          ),
        },
      ],
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Disable individual items or the entire accordion.',
      examples: [
        {
          label: 'Disabled Item',
          code: `const disabledItems = [
  { id: "1", title: "Active", content: "This is active" },
  { id: "2", title: "Disabled", content: "You can't open this", disabled: true },
  { id: "3", title: "Active 2", content: "This is also active" },
];

<Accordion 
  items={disabledItems} 
  theme="dark" 
  variant="bordered" 
/>`,
          preview: (
            <Accordion
              items={[
                { id: '1', title: 'Active', content: 'This is active' },
                {
                  id: '2',
                  title: 'Disabled',
                  content: "You can't open this",
                  disabled: true,
                },
                { id: '3', title: 'Active 2', content: 'This is also active' },
              ]}
              theme="dark"
              variant="bordered"
            />
          ),
        },
      ],
    },
    {
      id: 'controlled',
      title: 'Controlled',
      description:
        'Control the accordion state externally with value and onValueChange.',
      examples: [
        {
          label: 'Controlled State',
          code: `const [openItems, setOpenItems] = useState<string[]>(["item-1"]);

return (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-2">
      <button onClick={() => setOpenItems([])}>
        Close All
      </button>
      <button onClick={() => setOpenItems(["item-1"])}>
        Open Item 1
      </button>
      <button onClick={() => setOpenItems(["item-2"])}>
        Open Item 2
      </button>
    </div>
    <Accordion
      items={demoItems}
      theme="dark"
      variant="bordered"
      value={openItems}
      onValueChange={setOpenItems}
    />
  </div>
);`,
          preview: <ControlledAccordionPreview />,
        },
      ],
    },
    {
      id: 'long-content',
      title: 'Long Content',
      description:
        'Accordion items with rich content including lists and nested elements.',
      examples: [
        {
          label: 'Rich Content',
          code: `<Accordion 
  items={longItems} 
  theme="dark" 
  variant="card" 
  defaultValue={["long-1"]} 
/>`,
          preview: (
            <Accordion
              items={longItems}
              theme="dark"
              variant="card"
              defaultValue={['long-1']}
            />
          ),
        },
      ],
    },
    {
      id: 'hook',
      title: 'useAccordion Hook',
      description:
        'Programmatically control the accordion with the useAccordion hook.',
      examples: [
        {
          label: 'Hook Controlled',
          code: `const accordion = useAccordion(["hook-1"]);

const hookItems = [
  { id: "hook-1", title: "Hook Controlled Item 1", content: "..." },
  { id: "hook-2", title: "Hook Controlled Item 2", content: "..." },
];

return (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-2">
      <button onClick={accordion.closeAll}>Close All</button>
      <button onClick={() => accordion.open("hook-1")}>
        Open Item 1
      </button>
      <button onClick={() => accordion.toggle("hook-2")}>
        Toggle Item 2
      </button>
    </div>
    <Accordion
      items={hookItems}
      theme="dark"
      variant="card"
      value={accordion.openItems}
      onValueChange={accordion.setOpenItems}
    />
  </div>
);`,
          preview: <HookAccordionPreview />,
        },
      ],
    },
  ],
  props: [
    {
      name: 'items',
      type: 'AccordionItem[]',
      default: 'required',
      description:
        'Array of accordion items with id, title, content, and optional disabled.',
    },
    {
      name: 'theme',
      type: "'dark' | 'light'",
      default: '"dark"',
      description: 'Color theme of the accordion.',
    },
    {
      name: 'variant',
      type: "'default' | 'bordered' | 'card'",
      default: '"default"',
      description: 'Visual variant of the accordion.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: '"md"',
      description: 'Size of the accordion items.',
    },
    {
      name: 'icon',
      type: "'chevron' | 'left-chevron' | 'plus-minus'",
      default: '"chevron"',
      description: 'Icon style for the accordion trigger.',
    },
    {
      name: 'type',
      type: "'single' | 'multiple'",
      default: '"single"',
      description: 'Selection behavior — single or multiple open items.',
    },
    {
      name: 'defaultValue',
      type: 'string[]',
      default: '[]',
      description: 'Default open item IDs on mount.',
    },
    {
      name: 'value',
      type: 'string[]',
      default: 'undefined',
      description: 'Controlled open item IDs.',
    },
    {
      name: 'onValueChange',
      type: '(value: string[]) => void',
      default: 'undefined',
      description: 'Callback fired when open items change.',
    },
    {
      name: 'collapsible',
      type: 'boolean',
      default: 'true',
      description: 'Whether open items can be collapsed in single mode.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the accordion container.',
    },
    {
      name: 'itemClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for each accordion item.',
    },
    {
      name: 'triggerClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for each trigger button.',
    },
    {
      name: 'contentClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for each content area.',
    },
  ],
  hookProps: [
    {
      name: 'openItems',
      type: 'string[]',
      default: '[]',
      description: 'Currently open item IDs.',
    },
    {
      name: 'setOpenItems',
      type: '(items: string[]) => void',
      default: 'undefined',
      description: 'Set the open items directly.',
    },
    {
      name: 'isOpen',
      type: '(id: string) => boolean',
      default: 'undefined',
      description: 'Check if a specific item is open.',
    },
    {
      name: 'toggle',
      type: '(id: string) => void',
      default: 'undefined',
      description: "Toggle an item's open state.",
    },
    {
      name: 'open',
      type: '(id: string) => void',
      default: 'undefined',
      description: 'Open a specific item.',
    },
    {
      name: 'close',
      type: '(id: string) => void',
      default: 'undefined',
      description: 'Close a specific item.',
    },
    {
      name: 'closeAll',
      type: '() => void',
      default: 'undefined',
      description: 'Close all items.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Alert',
    href: '/docs/components/alert',
    description: 'Alert notification component.',
  },
  {
    label: 'Button',
    href: '/docs/components/button',
    description: 'Clickable element that triggers an action.',
  },
];

// ─── Controlled Preview Component ────────────────────────────────────────

function ControlledAccordionPreview() {
  const [openItems, setOpenItems] = useState<string[]>(['item-1']);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setOpenItems([])}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Close All
        </button>
        <button
          onClick={() => setOpenItems(['item-1'])}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Open Item 1
        </button>
        <button
          onClick={() => setOpenItems(['item-2'])}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Open Item 2
        </button>
        <button
          onClick={() => setOpenItems(['item-3'])}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Open Item 3
        </button>
      </div>
      <div className="text-sm text-white/40">
        Currently open: {openItems.length ? openItems.join(', ') : 'None'}
      </div>
      <Accordion
        items={demoItems}
        theme="dark"
        variant="bordered"
        value={openItems}
        onValueChange={setOpenItems}
      />
    </div>
  );
}

// ─── Hook Preview Component ──────────────────────────────────────────────

function HookAccordionPreview() {
  const accordion = useAccordion(['hook-1']);

  const hookItems: AccordionItem[] = [
    {
      id: 'hook-1',
      title: 'Hook Controlled Item 1',
      content: 'This item is controlled by the useAccordion hook.',
    },
    {
      id: 'hook-2',
      title: 'Hook Controlled Item 2',
      content: 'You can control this accordion programmatically!',
    },
    {
      id: 'hook-3',
      title: 'Hook Controlled Item 3',
      content: 'Use the buttons below to control the state.',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={accordion.closeAll}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Close All
        </button>
        <button
          onClick={() => accordion.open('hook-1')}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Open Item 1
        </button>
        <button
          onClick={() => accordion.open('hook-2')}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Open Item 2
        </button>
        <button
          onClick={() => accordion.toggle('hook-3')}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Toggle Item 3
        </button>
      </div>
      <div className="text-sm text-white/40">
        Open:{' '}
        {accordion.openItems.length ? accordion.openItems.join(', ') : 'None'}
      </div>
      <Accordion
        items={hookItems}
        theme="dark"
        variant="card"
        value={accordion.openItems}
        onValueChange={accordion.setOpenItems}
      />
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────

export default function AccordionPage() {
  return (
    <DocsPageLayout
      category={accordionData.category}
      title={accordionData.title}
      description={accordionData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...accordionData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: 'props', title: 'Props' },
        { id: 'hook-props', title: 'useAccordion Hook' },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Installation
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Install the Accordion component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={accordionData.installation.command} />
      </section>

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
            <CodeBlock code={accordionData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={accordionData.usage.basic} />
          </div>
        </div>
      </section>

      <section className="mb-14" id="examples">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Examples
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-6 leading-relaxed">
          Common use cases and configurations.
        </p>
        {accordionData.sections.map((section) => (
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
                    <CodeBlock code={example.code} />
                  </div>
                </div>
              ))}
            </div>
          </DocsSection>
        ))}
      </section>

      <section className="remove-scroll mb-14" id="props">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Props
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-5 leading-relaxed">
          All props available on the Accordion component.
        </p>
        <PropsTable props={accordionData.props} />
      </section>

      <section className="remove-scroll mb-14" id="hook-props">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          useAccordion Hook
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-5 leading-relaxed">
          Programmatically control accordion state with the useAccordion hook.
        </p>
        <PropsTable props={accordionData.hookProps} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
