'use client';

import { Dialog, useDialog } from '@/registry/components/dialog/Dialog';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';
import { useState } from 'react';
import { Button } from '@/registry/components/button/Button';

const dialogData = {
  name: 'Dialog',
  slug: 'dialog',
  title: 'Dialog',
  description:
    'A flexible modal dialog component with animated transitions, overlay, header, body, footer support, and a built-in useDialog hook.',
  category: 'Overlay',
  installation: {
    command: 'shadcn@latest add aphelio/c/dialog',
  },
  usage: {
    import: "import { Dialog, useDialog } from '@/components/ui/dialog'",
    basic: `const { open, onOpenChange } = useDialog();

<Dialog
  open={open}
  onOpenChange={onOpenChange}
  title="Edit Profile"
  description="Make changes to your profile here."
  footer={
    <>
      <button onClick={() => onOpenChange(false)}>Cancel</button>
      <button>Save</button>
    </>
  }
/>`,
  },
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description:
        'A simple dialog with title, description, and footer buttons.',
      examples: [
        {
          label: 'Open Dialog',
          code: `<Dialog
  open={open}
  onOpenChange={onOpenChange}
  title="Edit Profile"
  description="Make changes to your profile here."
  footer={
    <>
      <button className="text-sm text-neutral-400 hover:text-white transition-colors">Cancel</button>
      <button className="text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors">Save</button>
    </>
  }
/>`,
          preview: (
            <ComponentPreview>
              <DialogPreview
                title="Edit Profile"
                description="Make changes to your profile here."
                footer={
                  <>
                    <button className="text-sm text-neutral-400 hover:text-white transition-colors px-4 py-2">
                      Cancel
                    </button>
                    <button className="text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors">
                      Save
                    </button>
                  </>
                }
              />
            </ComponentPreview>
          ),
        },
      ],
    },

    {
      id: 'with-content',
      title: 'With Content',
      description: 'Add custom content inside the dialog body.',
      examples: [
        {
          label: 'Form Content',
          code: `<Dialog
  open={open}
  onOpenChange={onOpenChange}
  title="Create Account"
  description="Fill in your details to get started."
  footer={
    <>
      <button>Cancel</button>
      <button>Create Account</button>
    </>
  }
>
  <div className="space-y-3">
    <input placeholder="Name" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white" />
    <input placeholder="Email" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white" />
    <input placeholder="Password" type="password" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white" />
  </div>
</Dialog>`,
          preview: (
            <ComponentPreview>
              <DialogPreview
                title="Create Account"
                description="Fill in your details to get started."
                footer={
                  <>
                    <button className="text-sm text-neutral-400 hover:text-white transition-colors px-4 py-2">
                      Cancel
                    </button>
                    <button className="text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors">
                      Create Account
                    </button>
                  </>
                }
              >
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
              </DialogPreview>
            </ComponentPreview>
          ),
        },
      ],
    },

    {
      id: 'overlay-click',
      title: 'Overlay Click',
      description: 'Control whether clicking the overlay closes the dialog.',
      examples: [
        {
          label: 'No Overlay Close',
          code: `<Dialog
  open={open}
  onOpenChange={onOpenChange}
  closeOnOverlayClick={false}
  title="Important Notice"
  description="You must click a button to close this dialog."
  footer={
    <button>I Understand</button>
  }
/>`,
          preview: (
            <ComponentPreview>
              <DialogPreview
                closeOnOverlayClick={false}
                title="Important Notice"
                description="You must click a button to close this dialog."
                footer={
                  <button className="text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors">
                    I Understand
                  </button>
                }
              />
            </ComponentPreview>
          ),
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
          code: `<Dialog
  theme="dark"
  size="lg"
  radius="xl"
  open={open}
  onOpenChange={onOpenChange}
  title="Delete Account"
  description="Are you sure you want to delete your account? This action cannot be undone."
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
</Dialog>`,
          preview: (
            <ComponentPreview>
              <DialogPreview
                theme="dark"
                size="lg"
                radius="xl"
                title="Delete Account"
                description="Are you sure you want to delete your account? This action cannot be undone."
                footer={
                  <>
                    <button className="text-sm text-neutral-400 hover:text-white transition-colors px-4 py-2">
                      Cancel
                    </button>
                    <button className="text-sm bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-500 transition-colors">
                      Delete Account
                    </button>
                  </>
                }
              >
                <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-lg text-sm text-red-400">
                  Warning: All your data will be permanently removed.
                </div>
              </DialogPreview>
            </ComponentPreview>
          ),
        },
      ],
    },
  ],
  props: [
    {
      name: 'theme',
      type: "'light' | 'dark'",
      default: "'dark'",
      description: 'Color theme of the dialog.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
      default: "'md'",
      description: 'Maximum width of the dialog.',
    },
    {
      name: 'radius',
      type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
      default: "'xl'",
      description: 'Border radius of the dialog.',
    },
    {
      name: 'open',
      type: 'boolean',
      default: 'false',
      description: 'Controls dialog visibility.',
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      default: 'undefined',
      description: 'Callback when dialog open state changes.',
    },
    {
      name: 'title',
      type: 'string',
      default: 'undefined',
      description: 'Dialog title text.',
    },
    {
      name: 'description',
      type: 'string',
      default: 'undefined',
      description: 'Dialog description text.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Custom content rendered in the dialog body.',
    },
    {
      name: 'footer',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Content rendered in the dialog footer.',
    },
    {
      name: 'showClose',
      type: 'boolean',
      default: 'true',
      description: 'Show the close button.',
    },
    {
      name: 'closeOnOverlayClick',
      type: 'boolean',
      default: 'true',
      description: 'Close dialog when overlay is clicked.',
    },
    {
      name: 'closeOnEscape',
      type: 'boolean',
      default: 'true',
      description: 'Close dialog when Escape key is pressed.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the dialog panel.',
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
  ],
};

const bottomNavItems = [
  {
    label: 'Alert',
    href: '/docs/components/alert',
    description: 'Alert notification component.',
  },
  {
    label: 'Dropdown',
    href: '/docs/components/dropdown',
    description: 'Dropdown menu component.',
  },
];

// ─── Dialog Preview Component ────────────────────────────────────────────

function DialogPreview({
  theme = 'dark',
  size = 'md',
  radius = 'xl',
  title,
  description,
  children,
  footer,
  showClose = true,
  closeOnOverlayClick = true,
  buttonLabel = 'Open Dialog',
}: {
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  showClose?: boolean;
  closeOnOverlayClick?: boolean;
  buttonLabel?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{buttonLabel}</Button>
      <Dialog
        theme={theme}
        size={size}
        radius={radius}
        open={open}
        onOpenChange={setOpen}
        title={title}
        description={description}
        showClose={showClose}
        closeOnOverlayClick={closeOnOverlayClick}
        footer={footer}
      >
        {children}
      </Dialog>
    </>
  );
}

export default function DialogPage() {
  return (
    <DocsPageLayout
      category={dialogData.category}
      title={dialogData.title}
      description={dialogData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...dialogData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: 'props', title: 'Props' },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Installation
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Install the Dialog component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={dialogData.installation.command} />
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
            <CodeBlock code={dialogData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={dialogData.usage.basic} />
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
        {dialogData.sections.map((section) => (
          <DocsSection
            key={section.id}
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
          All props available on the Dialog component.
        </p>
        <PropsTable props={dialogData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
