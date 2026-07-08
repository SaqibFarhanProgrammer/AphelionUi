'use client';

import {
  Alert,
  AlertContainer,
  useAlert,
} from '@/registry/components/alert/Alert';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';
import { Button } from '@/registry/components/button/Button';

// ─── Position Demo Component ────────────────────────────────────────
type Position =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

function PositionDemo({
  position,
  label,
}: {
  position: Position;
  label: string;
}) {
  const { add, AlertComponent } = useAlert(position);

  return (
    <div className="space-y-2">
      <p className="font-['inter-semi'] text-[12px] text-white/60">{label}</p>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            add({
              title: 'Success!',
              description: `${label} – Action completed.`,
              variant: 'success',
              duration: 3000,
            })
          }
        >
          Success
        </Button>
        <Button
          onClick={() =>
            add({
              title: 'Error!',
              description: `${label} – Something failed.`,
              variant: 'error',
              duration: 3000,
            })
          }
        >
          Error
        </Button>
        <Button
          onClick={() =>
            add({
              title: 'Warning!',
              description: `${label} – Check settings.`,
              variant: 'warning',
              duration: 3000,
              
            })
          }
        >
          Warning
        </Button>
        <Button
          onClick={() =>
            add({
              title: 'Info',
              description: `${label} – New update available.`,
              variant: 'info',
              duration: 3000,
            })
          }
        >
          Info
        </Button>
      </div>
      <AlertComponent />
    </div>
  );
}

// ─── All Positions Live Demo ────────────────────────────────────────
function LiveAlertDemoAllPositions() {
  const positions: { key: Position; label: string }[] = [
    { key: 'top-left', label: 'Top Left' },
    { key: 'top-center', label: 'Top Center' },
    { key: 'top-right', label: 'Top Right' },
    { key: 'bottom-left', label: 'Bottom Left' },
    { key: 'bottom-center', label: 'Bottom Center' },
    { key: 'bottom-right', label: 'Bottom Right' },
  ];

  return (
    <div className="space-y-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
      <p className="font-['inter-semi'] text-[13px] text-white/80 mb-2">
        Click any button to see alert at that position
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {positions.map((pos) => (
          <PositionDemo key={pos.key} position={pos.key} label={pos.label} />
        ))}
      </div>
    </div>
  );
}

// ─── Alert Page Data ──────────────────────────────────────────────────
const alertData = {
  name: 'Alert',
  slug: 'alert',
  title: 'Alert',
  description:
    'A flexible alert component with multiple variants, themes, dismissible support, animated containers, and a built-in useAlert hook for toast-style notifications.',
  category: 'Feedback',
  installation: {
    command: 'shadcn@latest add aphelio/c/alert',
  },
  usage: {
    import:
      "import { Alert, AlertContainer, useAlert } from '@/components/ui/alert'",
    basic:
      '<Alert title="Heads up!" description="You can add components to your app using the CLI." />',
  },
  sections: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Six visual variants for different alert types.',
      examples: [
        {
          label: 'Default',
          code: `<Alert
  variant="default"
  title="Default Alert"
  description="This is a standard alert with no special emphasis."
/>`,
          preview: (
            <Alert
              variant="default"
              theme="dark"
              title="Default Alert"
              description="This is a standard alert with no special emphasis."
            />
          ),
        },
        {
          label: 'Success',
          code: `<Alert
  variant="success"
  title="Success!"
  description="Your changes have been saved successfully."
/>`,
          preview: (
            <Alert
              variant="success"
              theme="dark"
              title="Success!"
              description="Your changes have been saved successfully."
            />
          ),
        },
        {
          label: 'Info',
          code: `<Alert
  variant="info"
  title="Information"
  description="A new update is available for your application."
/>`,
          preview: (
            <Alert
              variant="info"
              theme="dark"
              title="Information"
              description="A new update is available for your application."
            />
          ),
        },
        {
          label: 'Warning',
          code: `<Alert
  variant="warning"
  title="Warning"
  description="Your subscription will expire in 3 days."
/>`,
          preview: (
            <Alert
              variant="warning"
              theme="dark"
              title="Warning"
              description="Your subscription will expire in 3 days."
            />
          ),
        },
        {
          label: 'Error',
          code: `<Alert
  variant="error"
  title="Error"
  description="Failed to connect to the server. Please try again."
/>`,
          preview: (
            <Alert
              variant="error"
              theme="dark"
              title="Error"
              description="Failed to connect to the server. Please try again."
            />
          ),
        },
        {
          label: 'Neutral',
          code: `<Alert
  variant="neutral"
  title="Neutral"
  description="This is a neutral alert for general messages."
/>`,
          preview: (
            <Alert
              variant="neutral"
              theme="dark"
              title="Neutral"
              description="This is a neutral alert for general messages."
            />
          ),
        },
      ],
    },
    {
      id: 'themes',
      title: 'Themes',
      description: 'Dark and light color themes.',
      examples: [
        {
          label: 'Dark Theme',
          code: `<Alert
  theme="dark"
  variant="info"
  title="Dark Theme"
  description="This alert uses the dark theme."
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Alert
                theme="dark"
                variant="info"
                title="Dark Theme"
                description="This alert uses the dark theme."
              />
            </div>
          ),
        },
        {
          label: 'Light Theme',
          code: `<Alert
  theme="light"
  variant="info"
  title="Light Theme"
  description="This alert uses the light theme."
/>`,
          preview: (
            <div className="bg-white rounded-xl p-4 border border-neutral-200">
              <Alert
                theme="light"
                variant="info"
                title="Light Theme"
                description="This alert uses the light theme."
              />
            </div>
          ),
        },
      ],
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Control the visual size of the alert.',
      examples: [
        {
          label: 'Small',
          code: `<Alert
  size="sm"
  variant="info"
  title="Small Alert"
  description="Compact size for tight spaces."
/>`,
          preview: (
            <Alert
              theme="dark"
              size="sm"
              variant="info"
              title="Small Alert"
              description="Compact size for tight spaces."
            />
          ),
        },
        {
          label: 'Medium',
          code: `<Alert
  size="md"
  variant="info"
  title="Medium Alert"
  description="Default size for most use cases."
/>`,
          preview: (
            <Alert
              theme="dark"
              size="md"
              variant="info"
              title="Medium Alert"
              description="Default size for most use cases."
            />
          ),
        },
        {
          label: 'Large',
          code: `<Alert
  size="lg"
  variant="info"
  title="Large Alert"
  description="Larger size for more emphasis."
/>`,
          preview: (
            <Alert
              theme="dark"
              size="lg"
              variant="info"
              title="Large Alert"
              description="Larger size for more emphasis."
            />
          ),
        },
      ],
    },
    {
      id: 'widths',
      title: 'Widths',
      description: 'Control the width of the alert.',
      examples: [
        {
          label: 'Small Width',
          code: `<Alert
  variant="info"
  width="sm"
  title="Small"
  description="Compact alert for tight spaces."
/>`,
          preview: (
            <Alert
              theme="dark"
              variant="info"
              width="sm"
              title="Small"
              description="Compact alert for tight spaces."
            />
          ),
        },
        {
          label: 'Large Width',
          code: `<Alert
  variant="info"
  width="lg"
  title="Large"
  description="Wider alert for more content."
/>`,
          preview: (
            <Alert
              theme="dark"
              variant="info"
              width="lg"
              title="Large"
              description="Wider alert for more content."
            />
          ),
        },
        {
          label: 'Full Width',
          code: `<Alert
  variant="info"
  width="full"
  title="Full Width"
  description="Spans the full width of its container."
/>`,
          preview: (
            <Alert
              theme="dark"
              variant="info"
              width="full"
              title="Full Width"
              description="Spans the full width of its container."
            />
          ),
        },
      ],
    },
    {
      id: 'dismissible',
      title: 'Dismissible',
      description: 'Allow users to dismiss alerts with a close button.',
      examples: [
        {
          label: 'Dismissible Alert',
          code: `<Alert
  variant="success"
  title="Dismissible"
  description="Click the X button to dismiss this alert."
  dismissible
  onDismiss={() => console.log("Dismissed")}
/>`,
          preview: (
            <Alert
              theme="dark"
              variant="success"
              title="Dismissible"
              description="Click the X button to dismiss this alert."
              dismissible
              onDismiss={() => console.log('Dismissed')}
            />
          ),
        },
      ],
    },
    {
      id: 'actions',
      title: 'Actions',
      description: 'Add action buttons inside the alert.',
      examples: [
        {
          label: 'With Actions',
          code: `<Alert
  variant="warning"
  title="Unsaved Changes"
  description="You have unsaved changes. Do you want to save them?"
  dismissible
  actions={
    <>
      <button className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors">Save</button>
      <button className="text-sm font-medium text-neutral-400 hover:text-neutral-300 transition-colors">Discard</button>
    </>
  }
/>`,
          preview: (
            <Alert
              theme="dark"
              variant="warning"
              title="Unsaved Changes"
              description="You have unsaved changes. Do you want to save them?"
              dismissible
              actions={
                <>
                  <Button className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors">
                    Save
                  </Button>
                  <Button className="text-sm font-medium text-neutral-400 hover:text-neutral-300 transition-colors">
                    Discard
                  </Button>
                </>
              }
            />
          ),
        },
      ],
    },
    {
      id: 'custom-icon',
      title: 'Custom Icon',
      description: 'Override the default variant icon with a custom one.',
      examples: [
        {
          label: 'Custom Icon',
          code: `<Alert
  variant="default"
  title="Custom Icon"
  description="You can pass any React node as the icon."
  icon={
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  }
/>`,
          preview: (
            <Alert
              theme="dark"
              variant="default"
              title="Custom Icon"
              description="You can pass any React node as the icon."
              icon={
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
          ),
        },
      ],
    },
    {
      id: 'alert-container',
      title: 'Alert Container',
      description:
        'Positioned container for stacking multiple alerts with animations.',
      examples: [
        {
          label: 'Top Right Container',
          code: `<AlertContainer position="top-right">
  <Alert variant="success" title="Success" description="Item saved." />
  <Alert variant="info" title="Info" description="New update available." />
</AlertContainer>`,
          preview: (
            <div className="relative h-[200px] bg-neutral-900/50 rounded-xl overflow-hidden">
              <div className="absolute top-4 right-4 flex flex-col gap-3">
                <Alert
                  theme="dark"
                  variant="success"
                  title="Success"
                  description="Item saved."
                />
                <Alert
                  theme="dark"
                  variant="info"
                  title="Info"
                  description="New update available."
                />
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: 'usealert-hook',
      title: 'useAlert Hook',
      description:
        'Programmatically trigger alerts with a simple hook. Click the buttons below to see animated alerts in action at all six positions.',
      examples: [
        {
          label: 'Live Demo – All Positions',
          code: `const { add, AlertComponent } = useAlert("top-right");

// Render <AlertComponent /> in your JSX
// Then trigger alerts programmatically:
add({
  title: "Success!",
  description: "Your action was completed successfully.",
  variant: "success",
  duration: 4000,
});

// Available positions:
// "top-left" | "top-right" | "top-center" 
// "bottom-left" | "bottom-right" | "bottom-center"`,
          preview: <LiveAlertDemoAllPositions />,
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
          code: `<Alert
  variant="error"
  theme="dark"
  size="lg"
  width="lg"
  title="Payment Failed"
  description="Your payment could not be processed. Please check your card details and try again."
  dismissible
  actions={
    <>
      <button className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">Retry</button>
      <button className="text-sm font-medium text-neutral-400 hover:text-neutral-300 transition-colors">Contact Support</button>
    </>
  }
/>`,
          preview: (
            <Alert
              theme="light"
              variant="error"
              size="lg"
              width="lg"
              title="Payment Failed"
              description="Your payment could not be processed. Please check your card details and try again."
              dismissible
              actions={
                <>
                  <Button className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">
                    Retry
                  </Button>
                  <Button className="text-sm font-medium text-neutral-400 hover:text-neutral-300 transition-colors">
                    Contact Support
                  </Button>
                </>
              }
            />
          ),
        },
      ],
    },
  ],
  props: [
    {
      name: 'variant',
      type: "'default' | 'success' | 'info' | 'warning' | 'error' | 'neutral'",
      default: "'default'",
      description: 'Visual style of the alert.',
    },
    {
      name: 'theme',
      type: "'light' | 'dark'",
      default: "'dark'",
      description: 'Color theme of the alert.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'Visual size of the alert (padding, gap, border-radius).',
    },
    {
      name: 'width',
      type: "'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
      default: "'md'",
      description: 'Width of the alert.',
    },
    {
      name: 'height',
      type: "'auto' | 'sm' | 'md' | 'lg' | 'xl'",
      default: "'auto'",
      description: 'Minimum height of the alert.',
    },
    {
      name: 'title',
      type: 'string',
      default: 'undefined',
      description: 'Alert title text.',
    },
    {
      name: 'description',
      type: 'string',
      default: 'undefined',
      description: 'Alert description text.',
    },
    {
      name: 'icon',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Custom icon element. Uses variant icon by default.',
    },
    {
      name: 'dismissible',
      type: 'boolean',
      default: 'false',
      description: 'Show close button.',
    },
    {
      name: 'onDismiss',
      type: '() => void',
      default: 'undefined',
      description: 'Callback when dismiss button is clicked.',
    },
    {
      name: 'actions',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Action buttons rendered below description.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes.',
    },
    {
      name: 'iconClassName',
      type: 'string',
      default: 'undefined',
      description: 'Classes for the icon container.',
    },
    {
      name: 'titleClassName',
      type: 'string',
      default: 'undefined',
      description: 'Classes for the title.',
    },
    {
      name: 'descriptionClassName',
      type: 'string',
      default: 'undefined',
      description: 'Classes for the description.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Button',
    href: '/docs/components/button',
    description: 'Clickable button component.',
  },
  {
    label: 'Toast',
    href: '/docs/components/toast',
    description: 'Toast notification component.',
  },
];

// ─── Main Page Component ──────────────────────────────────────────────
export default function AlertPage() {
  return (
    <DocsPageLayout
      category={alertData.category}
      title={alertData.title}
      description={alertData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...alertData.sections.map((section) => ({
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
          Install the Alert component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={alertData.installation.command} />
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
            <CodeBlock code={alertData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={alertData.usage.basic} />
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
        {alertData.sections.map((section) => (
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
          All props available on the Alert component.
        </p>
        <PropsTable props={alertData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
