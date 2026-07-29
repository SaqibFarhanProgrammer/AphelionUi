'use client';

import { Drawer, useDrawer } from '@/registry/components/Drower/Drower';
import { Button } from '@/registry/components/button/Button';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';
import { useState } from 'react';

// ─── Drawer Data ────────────────────────────────────────────────────────

const drawerData = {
  name: 'Drawer',
  slug: 'drawer',
  title: 'Drawer',
  description:
    'A versatile slide-over panel component with four positions, two themes, smooth Framer Motion animations, overlay click and Escape key support, and optional footer actions.',
  category: 'Overlay',
  installation: {
    command: 'shadcn@latest add aphelio/c/drawer',
  },
  usage: {
    import: `import { Drawer, useDrawer } from "@/components/ui/drawer";`,
    basic: `const { open, onOpenChange, onOpen } = useDrawer();

<Button onClick={onOpen}>Open Drawer</Button>

<Drawer
  open={open}
  onOpenChange={onOpenChange}
  side="right"
  theme="dark"
  title="Edit Profile"
  subtitle="Make changes to your profile here."
>
  <p>Drawer content goes here.</p>
</Drawer>`,
  },
  sections: [
    {
      id: 'sides',
      title: 'Sides',
      description: 'Four positions for the drawer to slide in from.',
      examples: [
        {
          label: 'Right (Default)',
          code: `<Drawer
  open={open}
  onOpenChange={onOpenChange}
  side="right"
  title="Right Drawer"
  subtitle="Slides in from the right side."
>
  <p>Content</p>
</Drawer>`,
          preview: (
            <DrawerPreview
              side="right"
              title="Right Drawer"
              subtitle="Slides in from the right side."
            />
          ),
        },
        {
          label: 'Left',
          code: `<Drawer
  open={open}
  onOpenChange={onOpenChange}
  side="left"
  title="Left Drawer"
  subtitle="Slides in from the left side."
>
  <p>Content</p>
</Drawer>`,
          preview: (
            <DrawerPreview
              side="left"
              title="Left Drawer"
              subtitle="Slides in from the left side."
            />
          ),
        },
        {
          label: 'Top',
          code: `<Drawer
  open={open}
  onOpenChange={onOpenChange}
  side="top"
  title="Top Drawer"
  subtitle="Slides in from the top."
>
  <p>Content</p>
</Drawer>`,
          preview: (
            <DrawerPreview
              side="top"
              title="Top Drawer"
              subtitle="Slides in from the top."
            />
          ),
        },
        {
          label: 'Bottom',
          code: `<Drawer
  open={open}
  onOpenChange={onOpenChange}
  side="bottom"
  title="Bottom Drawer"
  subtitle="Slides in from the bottom."
>
  <p>Content</p>
</Drawer>`,
          preview: (
            <DrawerPreview
              side="bottom"
              title="Bottom Drawer"
              subtitle="Slides in from the bottom."
            />
          ),
        },
      ],
    },
    {
      id: 'themes',
      title: 'Themes',
      description: 'Dark and light themes for different background contexts.',
      examples: [
        {
          label: 'Dark Theme',
          code: `<Drawer
  open={open}
  onOpenChange={onOpenChange}
  side="right"
  theme="dark"
  title="Dark Drawer"
  subtitle="Dark background with white text."
>
  <p>Content</p>
</Drawer>`,
          preview: (
            <DrawerPreview
              side="right"
              theme="dark"
              title="Dark Drawer"
              subtitle="Dark background with white text."
            />
          ),
        },
        {
          label: 'Light Theme',
          code: `<div className="rounded-aphelion-xl bg-white p-6">
  <Drawer
    open={open}
    onOpenChange={onOpenChange}
    side="right"
    theme="light"
    title="Light Drawer"
    subtitle="White background with dark text."
  >
    <p>Content</p>
  </Drawer>
</div>`,
          preview: (
            <div className="rounded-aphelion-xl bg-white p-4">
              <DrawerPreview
                side="right"
                theme="light"
                title="Light Drawer"
                subtitle="White background with dark text."
              />
            </div>
          ),
        },
      ],
    },
    {
      id: 'with-footer',
      title: 'With Footer',
      description: 'Add action buttons to the drawer footer.',
      examples: [
        {
          label: 'Footer Actions',
          code: `<Drawer
  open={open}
  onOpenChange={onOpenChange}
  side="right"
  title="Confirm Action"
  subtitle="Are you sure you want to proceed?"
  footer={
    <div className="flex w-full gap-3">
      <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
        Cancel
      </Button>
      <Button variant="primary" onClick={() => onOpenChange(false)} className="flex-1">
        Confirm
      </Button>
    </div>
  }
>
  <p>This action cannot be undone.</p>
</Drawer>`,
          preview: <DrawerWithFooterPreview />,
        },
      ],
    },
    {
      id: 'no-close',
      title: 'No Close Button',
      description: 'Hide the close button for mandatory actions.',
      examples: [
        {
          label: 'Hide Close',
          code: `<Drawer
  open={open}
  onOpenChange={onOpenChange}
  side="right"
  title="Important Notice"
  subtitle="You must click a button to close this drawer."
  showClose={false}
  footer={
    <Button onClick={() => onOpenChange(false)}>I Understand</Button>
  }
>
  <p>This drawer requires explicit action to close.</p>
</Drawer>`,
          preview: <DrawerNoClosePreview />,
        },
      ],
    },
    {
      id: 'no-overlay-close',
      title: 'No Overlay Close',
      description: 'Prevent closing when clicking the overlay.',
      examples: [
        {
          label: 'Disable Overlay Click',
          code: `<Drawer
  open={open}
  onOpenChange={onOpenChange}
  side="right"
  title="Locked Drawer"
  subtitle="Clicking the overlay won't close this."
  closeOnOverlayClick={false}
  footer={
    <Button onClick={() => onOpenChange(false)}>Close</Button>
  }
>
  <p>Only the close button or Escape key can dismiss this drawer.</p>
</Drawer>`,
          preview: <DrawerNoOverlayClosePreview />,
        },
      ],
    },
    {
      id: 'long-content',
      title: 'Long Content',
      description: 'Drawer with scrollable body content.',
      examples: [
        {
          label: 'Scrollable Content',
          code: `<Drawer
  open={open}
  onOpenChange={onOpenChange}
  side="right"
  title="Long Content"
  subtitle="Scroll to see all items"
>
  <div className="space-y-3">
    {Array.from({ length: 12 }, (_, i) => (
      <div key={i} className="rounded-aphelion-lg border border-white/10 p-3">
        <h4 className="text-white/80">Item {i + 1}</h4>
        <p className="text-sm text-aphelion-light-text-primary">Description for item {i + 1}.</p>
      </div>
    ))}
  </div>
</Drawer>`,
          preview: <DrawerLongContentPreview />,
        },
      ],
    },
    {
      id: 'controlled',
      title: 'Controlled',
      description:
        'Control the drawer state externally with open and onOpenChange.',
      examples: [
        {
          label: 'Controlled State',
          code: `const [open, setOpen] = useState(false);

return (
  <div className="flex items-center gap-3">
    <Button onClick={() => setOpen(true)}>Open</Button>
    <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
    <span className="text-sm text-aphelion-light-text-primary">{open ? "Open" : "Closed"}</span>
    <Drawer open={open} onOpenChange={setOpen} side="right" title="Controlled">
      <p>Content</p>
    </Drawer>
  </div>
);`,
          preview: <DrawerControlledPreview />,
        },
      ],
    },
    {
      id: 'use-drawer',
      title: 'useDrawer Hook',
      description:
        'Programmatically control the drawer with the useDrawer hook.',
      examples: [
        {
          label: 'Hook Controlled',
          code: `const drawer = useDrawer();

return (
  <>
    <Button onClick={drawer.onOpen}>Open</Button>
    <Button variant="outline" onClick={drawer.onClose}>Close</Button>
    <Button variant="outline" onClick={drawer.onToggle}>Toggle</Button>
    <Drawer open={drawer.open} onOpenChange={drawer.onOpenChange} side="right" title="Hook Controlled">
      <p>Content</p>
    </Drawer>
  </>
);`,
          preview: <DrawerHookPreview />,
        },
      ],
    },
  ],
  props: [
    {
      name: 'theme',
      type: "'light' | 'dark'",
      default: '"dark"',
      description: 'Color theme of the drawer.',
    },
    {
      name: 'side',
      type: "'top' | 'bottom' | 'left' | 'right'",
      default: '"right"',
      description: 'Which side the drawer slides in from.',
    },
    {
      name: 'open',
      type: 'boolean',
      default: 'false',
      description: 'Controls drawer visibility.',
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      default: 'undefined',
      description: 'Callback when drawer open state changes.',
    },
    {
      name: 'title',
      type: 'string',
      default: 'undefined',
      description: 'Drawer title text.',
    },
    {
      name: 'subtitle',
      type: 'string',
      default: 'undefined',
      description: 'Drawer subtitle text.',
    },
    {
      name: 'description',
      type: 'string',
      default: 'undefined',
      description: 'Additional description text below the subtitle.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Content rendered inside the drawer body.',
    },
    {
      name: 'footer',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Content rendered in the drawer footer.',
    },
    {
      name: 'showClose',
      type: 'boolean',
      default: 'true',
      description: 'Show the close button in the header.',
    },
    {
      name: 'closeOnOverlayClick',
      type: 'boolean',
      default: 'true',
      description: 'Close drawer when clicking the overlay.',
    },
    {
      name: 'closeOnEscape',
      type: 'boolean',
      default: 'true',
      description: 'Close drawer when the Escape key is pressed.',
    },
    {
      name: 'disableBodyScroll',
      type: 'boolean',
      default: 'true',
      description: 'Prevent body scrolling when the drawer is open.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the drawer panel.',
    },
    {
      name: 'overlayClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the overlay.',
    },
    {
      name: 'headerClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the header.',
    },
    {
      name: 'bodyClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the body.',
    },
    {
      name: 'footerClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the footer.',
    },
    {
      name: 'titleClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the title.',
    },
    {
      name: 'subtitleClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the subtitle.',
    },
  ],
  hookProps: [
    {
      name: 'open',
      type: 'boolean',
      default: 'false',
      description: 'Current open state.',
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      default: 'undefined',
      description: 'Set the open state directly.',
    },
    {
      name: 'onOpen',
      type: '() => void',
      default: 'undefined',
      description: 'Open the drawer.',
    },
    {
      name: 'onClose',
      type: '() => void',
      default: 'undefined',
      description: 'Close the drawer.',
    },
    {
      name: 'onToggle',
      type: '() => void',
      default: 'undefined',
      description: 'Toggle the drawer open state.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Dialog',
    href: '/docs/components/dialog',
    description: 'Modal overlay for confirmations and forms.',
  },
  {
    label: 'Dropdown Menu',
    href: '/docs/components/dropdown-menu',
    description: 'Contextual menu with nested items.',
  },
];

// ─── Preview Components ─────────────────────────────────────────────────

function DrawerPreview({
  side,
  theme = 'dark',
  title,
  subtitle,
}: {
  side: 'top' | 'bottom' | 'left' | 'right';
  theme?: 'light' | 'dark';
  title: string;
  subtitle: string;
}) {
  const { open, onOpenChange, onOpen } = useDrawer();

  return (
    <>
      <Button onClick={onOpen} variant="primary" size="sm">
        Open {side.charAt(0).toUpperCase() + side.slice(1)}
      </Button>
      <Drawer
        open={open}
        onOpenChange={onOpenChange}
        side={side}
        theme={theme}
        title={title}
        subtitle={subtitle}
      >
        <div className="space-y-3">
          <p className={theme === 'dark' ? 'text-white/70' : 'text-black/70'}>
            This drawer slides in from the {side}. Click the overlay, press
            Escape, or click the close button to dismiss.
          </p>
          <div className="flex gap-2">
            <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[11px] text-blue-400">
              Feature
            </span>
            <span className="rounded-full bg-green-500/20 px-2.5 py-0.5 text-[11px] text-green-400">
              New
            </span>
          </div>
        </div>
      </Drawer>
    </>
  );
}

function DrawerWithFooterPreview() {
  const { open, onOpenChange, onOpen } = useDrawer();

  return (
    <>
      <Button onClick={onOpen} variant="outline" size="sm">
        Open with Footer
      </Button>
      <Drawer
        open={open}
        onOpenChange={onOpenChange}
        side="right"
        theme="dark"
        title="Confirm Action"
        subtitle="Are you sure you want to proceed?"
        footer={
          <div className="flex w-full gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Confirm
            </Button>
          </div>
        }
      >
        <p className="text-white/70">
          This action cannot be undone. Please confirm your decision.
        </p>
      </Drawer>
    </>
  );
}

function DrawerNoClosePreview() {
  const { open, onOpenChange, onOpen } = useDrawer();

  return (
    <>
      <Button onClick={onOpen} variant="outline" size="sm">
        No Close Button
      </Button>
      <Drawer
        open={open}
        onOpenChange={onOpenChange}
        side="right"
        theme="dark"
        title="Important Notice"
        subtitle="You must click a button to close this drawer."
        showClose={false}
        footer={
          <Button onClick={() => onOpenChange(false)} className="w-full">
            I Understand
          </Button>
        }
      >
        <p className="text-white/70">
          This drawer requires explicit action to close.
        </p>
      </Drawer>
    </>
  );
}

function DrawerNoOverlayClosePreview() {
  const { open, onOpenChange, onOpen } = useDrawer();

  return (
    <>
      <Button onClick={onOpen} variant="outline" size="sm">
        No Overlay Close
      </Button>
      <Drawer
        open={open}
        onOpenChange={onOpenChange}
        side="right"
        theme="dark"
        title="Locked Drawer"
        subtitle="Clicking the overlay won't close this."
        closeOnOverlayClick={false}
        footer={
          <Button onClick={() => onOpenChange(false)} className="w-full">
            Close
          </Button>
        }
      >
        <p className="text-white/70">
          Only the close button or Escape key can dismiss this drawer.
        </p>
      </Drawer>
    </>
  );
}

function DrawerLongContentPreview() {
  const { open, onOpenChange, onOpen } = useDrawer();

  return (
    <>
      <Button onClick={onOpen} variant="outline" size="sm">
        Long Content
      </Button>
      <Drawer
        open={open}
        onOpenChange={onOpenChange}
        side="right"
        theme="dark"
        title="Long Content"
        subtitle="Scroll to see all items"
      >
        <div className="space-y-2">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="rounded-aphelion-lg border border-white/10 p-3">
              <h4 className="text-sm text-white/80">Item {i + 1}</h4>
              <p className="text-xs text-aphelion-light-text-primary">
                Description for item {i + 1}.
              </p>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
}

function DrawerControlledPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button onClick={() => setOpen(true)} size="sm">
        Open
      </Button>
      <Button variant="outline" onClick={() => setOpen(false)} size="sm">
        Close
      </Button>
      <span className="text-sm text-aphelion-light-text-primary">
        State: {open ? 'Open' : 'Closed'}
      </span>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        side="right"
        theme="dark"
        title="Controlled Drawer"
      >
        <p className="text-white/70">
          Aphelio UI is a modern React component library built for developers
          who want interfaces that feel intentional, consistent, and
          production-ready without sacrificing flexibility. It was created out
          of frustration with the usual trade-offs in existing libraries: either
          you get something that looks polished but is rigid and hard to
          customize, or you get something flexible that still requires days of
          extra work on styling, accessibility, and motion before it feels
          finished. Aphelio UI rejects that compromise. Every component is
          designed from the start with strong defaults, deep customization
          options, and a clear visual language that works equally well in dark
          and light themes. The name itself carries meaning. In astronomy the
          aphelion is the point in an orbit farthest from the sun, the place of
          maximum distance and perspective. Aphelio UI aims to give developers
          that same sense of clarity and distance from the noise of incomplete
          or over-opinionated component sets. The goal is not to replace your
          design system but to provide a solid, well-crafted foundation that you
          can shape into whatever your product needs. The library is built on a
          small set of deliberate principles. Theme support is treated as a
          first-class concern rather than an afterthought, so both dark and
          light modes feel designed rather than patched. Variants are meaningful
          instead of arbitrary; components expose options like bordered, card,
          ghost, striped, dense, and vertical that map to real design decisions.
          Motion is present but purposeful, powered by Framer Motion and tuned
          so that expand, collapse, enter, and exit animations communicate state
          clearly without feeling slow or decorative. Accessibility is baked in
          from the beginning through proper focus management, ARIA attributes,
          and keyboard support. The entire system sits on top of Tailwind CSS
          and class-variance-authority, which means you can override almost
          anything with ordinary utility classes while still benefiting from a
          coherent design language. Most interactive components also support
          both controlled and uncontrolled patterns, so you can start simple and
          grow into full state management without rewriting code. What you
          actually get is a focused but powerful collection of components that
          solve common interface problems well. The Accordion handles single or
          multiple expansion with three icon styles and smooth height animation.
          Alert provides semantic feedback in success, info, warning, error, and
          neutral variants, complete with optional dismiss behavior and a
          positioned container for toast-style stacking. Avatar supports
          multiple sizes, shapes, status indicators, and grouping. Button ships
          with several visual styles, loading state, and icon slots. Calendar
          and DatePicker cover single, range, and multiple selection along with
          optional time slots and presets. Card is both a flexible container and
          a family of form elements designed to live comfortably inside it.
          Popover offers a rich toolkit for floating content, including headers,
          footers, notifications, share panels, and multi-step flows. Radio and
          RadioGroup give you several visual treatments from simple lists to
          cards and table-style rows. Select is a fully custom dropdown with
          optional search. Sheet provides a slide-over panel from any side with
          proper focus trapping and escape handling. Switch is a clean toggle
          with optional dynamic labels. Table supports sorting, selection,
          striping, sticky headers, and even a vertical layout. Textarea
          includes character counting, error and hint text, and optional
          labeling. All of these pieces share the same visual language and the
          same technical conventions, so an interface built with Aphelio UI
          feels cohesive rather than pieced together from different sources. The
          library is still growing, but the foundation is already strong enough
          for real products: dashboards, SaaS applications, internal tools, and
          complex interactive experiences. The intention is not to be the
          biggest component library, only one of the most carefully considered..
        </p>
      </Drawer>
    </div>
  );
}

function DrawerHookPreview() {
  const drawer = useDrawer();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button onClick={drawer.onOpen} size="sm">
        Open
      </Button>
      <Button variant="outline" onClick={drawer.onClose} size="sm">
        Close
      </Button>
      <Button variant="outline" onClick={drawer.onToggle} size="sm">
        Toggle
      </Button>
      <span className="text-sm text-aphelion-light-text-primary">
        {drawer.open ? 'Open' : 'Closed'}
      </span>
      <Drawer
        open={drawer.open}
        onOpenChange={drawer.onOpenChange}
        side="right"
        theme="dark"
        title="Hook Controlled"
      >
        <p className="text-white/70">Controlled via useDrawer hook.</p>
      </Drawer>
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────

export default function DrawerPage() {
  return (
    <DocsPageLayout
      category={drawerData.category}
      title={drawerData.title}
      description={drawerData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...drawerData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: 'props', title: 'Props' },
        { id: 'hook-props', title: 'useDrawer Hook' },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          Installation
        </h2>
        <p className="mb-4 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Install the Drawer component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={drawerData.installation.command} />
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
            <CodeBlock code={drawerData.usage.import} />
          </div>
          <div>
            <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
              Basic
            </p>
            <CodeBlock code={drawerData.usage.basic} />
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
        {drawerData.sections.map((section) => (
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
          All props available on the Drawer component.
        </p>
        <PropsTable props={drawerData.props} />
      </section>

      <section className="remove-scroll mb-14" id="hook-props">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          useDrawer Hook
        </h2>
        <p className="mb-5 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Programmatically control drawer state with the useDrawer hook.
        </p>
        <PropsTable props={drawerData.hookProps} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
