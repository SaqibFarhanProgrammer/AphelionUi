'use client';

import { Sheet, useSheet } from '@/registry/components/Sheet/Sheet';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';
import { useState } from 'react';

// ─── Sheet Data ──────────────────────────────────────────────────────────

const sheetData = {
  name: 'Sheet',
  slug: 'sheet',
  title: 'Sheet',
  description:
    'A flexible modal sheet component with animated transitions, four directional sides, overlay support, header, body, footer, and a built-in useSheet hook.',
  category: 'Overlay',
  installation: {
    command: 'shadcn@latest add aphelio/c/sheet',
  },
  usage: {
    import: "import { Sheet, useSheet } from '@/components/ui/sheet'",
    basic: `const { open, onOpenChange, onOpen, onClose } = useSheet();

<>
  <button onClick={onOpen}>Open Sheet</button>
  <Sheet
    open={open}
    onOpenChange={onOpenChange}
    side="right"
    title="Edit Profile"
    subtitle="Make changes to your profile here."
    footer={
      <>
        <button onClick={onClose}>Cancel</button>
        <button>Save</button>
      </>
    }
  >
    <p>Your content goes here.</p>
  </Sheet>
</>`,
  },
  sections: [
    {
      id: 'sides',
      title: 'Sides',
      description: 'Four directional sides for different use cases.',
      examples: [
        {
          label: 'Right (Default)',
          code: `<Sheet
  open={open}
  onOpenChange={onOpenChange}
  side="right"
  title="Right Sheet"
  subtitle="Slides in from the right"
  footer={
    <>
      <button>Cancel</button>
      <button>Save</button>
    </>
  }
>
  <p>Content for the right sheet.</p>
</Sheet>`,
          preview: <SheetPreview side="right" title="Right Sheet" subtitle="Slides in from the right" buttonLabel="Open Right Sheet" />,
        },
        {
          label: 'Left',
          code: `<Sheet
  open={open}
  onOpenChange={onOpenChange}
  side="left"
  title="Left Sheet"
  subtitle="Slides in from the left"
  footer={
    <>
      <button>Cancel</button>
      <button>Save</button>
    </>
  }
>
  <p>Content for the left sheet.</p>
</Sheet>`,
          preview: <SheetPreview side="left" title="Left Sheet" subtitle="Slides in from the left" buttonLabel="Open Left Sheet" />,
        },
        {
          label: 'Top',
          code: `<Sheet
  open={open}
  onOpenChange={onOpenChange}
  side="top"
  title="Top Sheet"
  subtitle="Slides in from the top"
  footer={
    <>
      <button>Dismiss</button>
      <button>Confirm</button>
    </>
  }
>
  <p>Content for the top sheet.</p>
</Sheet>`,
          preview: <SheetPreview side="top" title="Top Sheet" subtitle="Slides in from the top" buttonLabel="Open Top Sheet" />,
        },
        {
          label: 'Bottom',
          code: `<Sheet
  open={open}
  onOpenChange={onOpenChange}
  side="bottom"
  title="Bottom Sheet"
  subtitle="Slides in from the bottom"
  footer={
    <>
      <button>Reject</button>
      <button>Accept</button>
    </>
  }
>
  <p>Content for the bottom sheet.</p>
</Sheet>`,
          preview: <SheetPreview side="bottom" title="Bottom Sheet" subtitle="Slides in from the bottom" buttonLabel="Open Bottom Sheet" />,
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
          code: `<Sheet
  open={open}
  onOpenChange={onOpenChange}
  theme="dark"
  side="right"
  title="Dark Sheet"
  subtitle="Default dark theme"
  footer={
    <>
      <button>Cancel</button>
      <button>Save</button>
    </>
  }
>
  <p>Dark themed content.</p>
</Sheet>`,
          preview: <SheetPreview theme="dark" side="right" title="Dark Sheet" subtitle="Default dark theme" buttonLabel="Open Dark Sheet" />,
        },
        {
          label: 'Light Theme',
          code: `<div className="rounded-xl border border-black/10 bg-white p-4">
  <Sheet
    open={open}
    onOpenChange={onOpenChange}
    theme="light"
    side="right"
    title="Light Sheet"
    subtitle="Light theme variant"
    footer={
      <>
        <button>Cancel</button>
        <button>Save</button>
      </>
    }
  >
    <p>Light themed content.</p>
  </Sheet>
</div>`,
          preview: (
            <div className="rounded-xl border border-black/10 bg-white p-4">
              <SheetPreview theme="light" side="right" title="Light Sheet" subtitle="Light theme variant" buttonLabel="Open Light Sheet" />
            </div>
          ),
        },
      ],
    },
    {
      id: 'with-content',
      title: 'With Content',
      description: 'Add custom content inside the sheet body.',
      examples: [
        {
          label: 'Form Content',
          code: `<Sheet
  open={open}
  onOpenChange={onOpenChange}
  side="right"
  title="Create Account"
  subtitle="Fill in your details to get started."
  footer={
    <>
      <button>Cancel</button>
      <button>Create Account</button>
    </>
  }
>
  <div className="space-y-3">
    <input placeholder="Name" />
    <input placeholder="Email" />
    <input placeholder="Password" type="password" />
  </div>
</Sheet>`,
          preview: <SheetPreview side="right" title="Create Account" subtitle="Fill in your details to get started." buttonLabel="Open Form Sheet" bodyType="form" />,
        },
      ],
    },
    {
      id: 'overlay-click',
      title: 'Overlay Click',
      description: 'Control whether clicking the overlay closes the sheet.',
      examples: [
        {
          label: 'No Overlay Close',
          code: `<Sheet
  open={open}
  onOpenChange={onOpenChange}
  closeOnOverlayClick={false}
  side="right"
  title="Important Notice"
  subtitle="You must click a button to close this sheet."
  footer={
    <button>I Understand</button>
  }
>
  <p>This sheet requires explicit action to close.</p>
</Sheet>`,
          preview: <SheetPreview side="right" title="Important Notice" subtitle="You must click a button to close this sheet." buttonLabel="Open Locked Sheet" closeOnOverlayClick={false} />,
        },
      ],
    },
    {
      id: 'close-button',
      title: 'Close Button',
      description: 'Show or hide the default close button.',
      examples: [
        {
          label: 'Without Close Button',
          code: `<Sheet
  open={open}
  onOpenChange={onOpenChange}
  side="right"
  title="Custom Sheet"
  subtitle="No close button by default"
  showClose={false}
  footer={
    <>
      <button>Close</button>
      <button>Done</button>
    </>
  }
>
  <p>This sheet has no close button.</p>
</Sheet>`,
          preview: <SheetPreview side="right" title="Custom Sheet" subtitle="No close button by default" buttonLabel="Open (No Close)" showClose={false} />,
        },
      ],
    },
    {
      id: 'combinations',
      title: 'Combinations',
      description: 'Mix and match props for complex use cases.',
      examples: [
        {
          label: 'Full Featured',
          code: `<Sheet
  theme="dark"
  side="right"
  open={open}
  onOpenChange={onOpenChange}
  title="Delete Account"
  subtitle="Are you sure you want to delete your account?"
  description="This action cannot be undone. All your data will be permanently removed."
  footer={
    <>
      <button>Cancel</button>
      <button>Delete Account</button>
    </>
  }
>
  <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-lg text-sm text-red-400">
    Warning: All your data will be permanently removed.
  </div>
</Sheet>`,
          preview: <SheetPreview side="right" title="Delete Account" subtitle="Are you sure you want to delete your account?" description="This action cannot be undone." buttonLabel="Open Full Featured" bodyType="warning" />,
        },
      ],
    },
    {
      id: 'controlled',
      title: 'Controlled',
      description: 'Control the sheet state externally with open and onOpenChange.',
      examples: [
        {
          label: 'Controlled State',
          code: `const [isOpen, setIsOpen] = useState(false);

return (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-2">
      <button onClick={() => setIsOpen(true)}>Open Sheet</button>
      <button onClick={() => setIsOpen(false)}>Close Sheet</button>
    </div>
    <div className="text-sm text-white/40">
      Status: {isOpen ? 'Open' : 'Closed'}
    </div>
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}
      side="right"
      title="Controlled Sheet"
      subtitle="Managed by external state"
    >
      <p>This sheet is controlled externally.</p>
    </Sheet>
  </div>
);`,
          preview: <ControlledSheetPreview />,
        },
      ],
    },
    {
      id: 'hook',
      title: 'useSheet Hook',
      description: 'Programmatically control the sheet with the useSheet hook.',
      examples: [
        {
          label: 'Hook Controlled',
          code: `const sheet = useSheet();

return (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-2">
      <button onClick={sheet.onOpen}>Open</button>
      <button onClick={sheet.onClose}>Close</button>
      <button onClick={sheet.onToggle}>Toggle</button>
    </div>
    <div className="text-sm text-white/40">
      Status: {sheet.open ? 'Open' : 'Closed'}
    </div>
    <Sheet
      open={sheet.open}
      onOpenChange={sheet.onOpenChange}
      side="right"
      title="Hook Sheet"
      subtitle="Controlled by useSheet hook"
    >
      <p>Content controlled by the hook.</p>
    </Sheet>
  </div>
);`,
          preview: <HookSheetPreview />,
        },
      ],
    },
  ],
  props: [
    {
      name: 'open',
      type: 'boolean',
      default: 'false',
      description: 'Controls sheet visibility.',
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      default: 'undefined',
      description: 'Callback when sheet open state changes.',
    },
    {
      name: 'side',
      type: "'top' | 'bottom' | 'left' | 'right'",
      default: '"right"',
      description: 'Direction from which the sheet slides in.',
    },
    {
      name: 'theme',
      type: "'light' | 'dark'",
      default: '"dark"',
      description: 'Color theme of the sheet.',
    },
    {
      name: 'title',
      type: 'string',
      default: 'undefined',
      description: 'Sheet title text.',
    },
    {
      name: 'subtitle',
      type: 'string',
      default: 'undefined',
      description: 'Sheet subtitle text.',
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
      description: 'Custom content rendered in the sheet body.',
    },
    {
      name: 'footer',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Content rendered in the sheet footer.',
    },
    {
      name: 'showClose',
      type: 'boolean',
      default: 'true',
      description: 'Show the close button in the top-right corner.',
    },
    {
      name: 'closeOnOverlayClick',
      type: 'boolean',
      default: 'true',
      description: 'Close sheet when overlay is clicked.',
    },
    {
      name: 'closeOnEscape',
      type: 'boolean',
      default: 'true',
      description: 'Close sheet when Escape key is pressed.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the sheet panel.',
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
      description: 'Open the sheet.',
    },
    {
      name: 'onClose',
      type: '() => void',
      default: 'undefined',
      description: 'Close the sheet.',
    },
    {
      name: 'onToggle',
      type: '() => void',
      default: 'undefined',
      description: 'Toggle the sheet open state.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Dialog',
    href: '/docs/components/dialog',
    description: 'Modal overlay for confirmations and alerts.',
  },
  {
    label: 'Dropdown',
    href: '/docs/components/dropdown',
    description: 'Dropdown menu component.',
  },
];

// ─── Sheet Preview Component ─────────────────────────────────────────────

function SheetPreview({
  theme = 'dark',
  side = 'right',
  title,
  subtitle,
  description,
  buttonLabel = 'Open Sheet',
  showClose = true,
  closeOnOverlayClick = true,
  bodyType = 'default',
}: {
  theme?: 'light' | 'dark';
  side?: 'top' | 'bottom' | 'left' | 'right';
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  showClose?: boolean;
  closeOnOverlayClick?: boolean;
  bodyType?: 'default' | 'form' | 'warning';
}) {
  const sheet = useSheet();

  const renderBody = () => {
    if (bodyType === 'form') {
      return (
        <div className="space-y-3">
          <input
            placeholder="Name"
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-neutral-700 transition-colors"
          />
          <input
            placeholder="Email"
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-neutral-700 transition-colors"
          />
          <input
            placeholder="Password"
            type="password"
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-neutral-700 transition-colors"
          />
        </div>
      );
    }
    if (bodyType === 'warning') {
      return (
        <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-lg text-sm text-red-400">
          Warning: All your data will be permanently removed.
        </div>
      );
    }
    return <p className="text-sm text-neutral-400">This is the sheet body content.</p>;
  };

  return (
    <>
      <button
        onClick={sheet.onOpen}
        className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
      >
        {buttonLabel}
      </button>
      <Sheet
        theme={theme}
        side={side}
        open={sheet.open}
        onOpenChange={sheet.onOpenChange}
        title={title}
        subtitle={subtitle}
        description={description}
        showClose={showClose}
        closeOnOverlayClick={closeOnOverlayClick}
        footer={
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={sheet.onClose}
              className="text-sm text-neutral-400 hover:text-white transition-colors px-4 py-2"
            >
              Cancel
            </button>
            <button
              onClick={sheet.onClose}
              className="text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Save
            </button>
          </div>
        }
      >
        {renderBody()}
      </Sheet>
    </>
  );
}

// ─── Controlled Preview Component ────────────────────────────────────────

function ControlledSheetPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Open Sheet
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Close Sheet
        </button>
      </div>
      <div className="text-sm text-white/40">
        Status: {isOpen ? 'Open' : 'Closed'}
      </div>
      <Sheet
        open={isOpen}
        onOpenChange={setIsOpen}
        side="right"
        title="Controlled Sheet"
        subtitle="Managed by external state"
        footer={
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-neutral-400 hover:text-white transition-colors px-4 py-2"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Done
            </button>
          </div>
        }
      >
        <p className="text-sm text-neutral-400">This sheet is controlled externally.</p>
      </Sheet>
    </div>
  );
}

// ─── Hook Preview Component ──────────────────────────────────────────────

function HookSheetPreview() {
  const sheet = useSheet();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={sheet.onOpen}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Open
        </button>
        <button
          onClick={sheet.onClose}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Close
        </button>
        <button
          onClick={sheet.onToggle}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Toggle
        </button>
      </div>
      <div className="text-sm text-white/40">
        Status: {sheet.open ? 'Open' : 'Closed'}
      </div>
      <Sheet
        open={sheet.open}
        onOpenChange={sheet.onOpenChange}
        side="right"
        title="Hook Sheet"
        subtitle="Controlled by useSheet hook"
        footer={
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={sheet.onClose}
              className="text-sm text-neutral-400 hover:text-white transition-colors px-4 py-2"
            >
              Cancel
            </button>
            <button
              onClick={sheet.onClose}
              className="text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Done
            </button>
          </div>
        }
      >
        <p className="text-sm text-neutral-400">Content controlled by the useSheet hook.</p>
      </Sheet>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────

export default function SheetPage() {
  return (
    <DocsPageLayout
      category={sheetData.category}
      title={sheetData.title}
      description={sheetData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...sheetData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: 'props', title: 'Props' },
        { id: 'hook-props', title: 'useSheet Hook' },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Installation
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Install the Sheet component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={sheetData.installation.command} />
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
            <CodeBlock code={sheetData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={sheetData.usage.basic} />
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
        {sheetData.sections.map((section) => (
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
          All props available on the Sheet component.
        </p>
        <PropsTable props={sheetData.props} />
      </section>

      <section className="remove-scroll mb-14" id="hook-props">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          useSheet Hook
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-5 leading-relaxed">
          Programmatically control sheet state with the useSheet hook.
        </p>
        <PropsTable props={sheetData.hookProps} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}