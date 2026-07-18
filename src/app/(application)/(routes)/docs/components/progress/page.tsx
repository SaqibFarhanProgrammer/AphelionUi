'use client';

import { Progress } from '@/registry/components/Progress/Progress';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';

const progressData = {
  name: 'Progress',
  slug: 'progress',
  title: 'Progress',
  description:
    'A flexible progress bar component with multiple variants, sizes, themes, animated fills, indeterminate state, and value display options.',
  category: 'Feedback',
  installation: {
    command: 'shadcn@latest add aphelio/c/progress',
  },
  usage: {
    import: "import { Progress } from '@/components/ui/progress'",
    basic: '<Progress value={60} />',
  },
  sections: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Seven color variants for different contexts.',
      examples: [
        {
          label: 'Default',
          code: `<Progress
  variant="default"
  value={60}
  label="Default"
/>`,
          preview: (
            <Progress
              theme="dark"
              variant="default"
              value={60}
              label="Default"
            />
          ),
        },
        {
          label: 'Primary',
          code: `<Progress
  variant="primary"
  value={60}
  label="Primary"
/>`,
          preview: (
            <Progress
              theme="dark"
              variant="primary"
              value={60}
              label="Primary"
            />
          ),
        },
        {
          label: 'Success',
          code: `<Progress
  variant="success"
  value={75}
  label="Success"
/>`,
          preview: (
            <Progress
              theme="dark"
              variant="success"
              value={75}
              label="Success"
            />
          ),
        },
        {
          label: 'Info',
          code: `<Progress
  variant="info"
  value={50}
  label="Info"
/>`,
          preview: (
            <Progress theme="dark" variant="info" value={50} label="Info" />
          ),
        },
        {
          label: 'Warning',
          code: `<Progress
  variant="warning"
  value={40}
  label="Warning"
/>`,
          preview: (
            <Progress
              theme="dark"
              variant="warning"
              value={40}
              label="Warning"
            />
          ),
        },
        {
          label: 'Error',
          code: `<Progress
  variant="error"
  value={90}
  label="Error"
/>`,
          preview: (
            <Progress theme="dark" variant="error" value={90} label="Error" />
          ),
        },
        {
          label: 'Neutral',
          code: `<Progress
  variant="neutral"
  value={30}
  label="Neutral"
/>`,
          preview: (
            <Progress
              theme="dark"
              variant="neutral"
              value={30}
              label="Neutral"
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
          code: `<Progress
  theme="dark"
  variant="success"
  value={65}
  label="Dark Theme"
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Progress
                theme="dark"
                variant="success"
                value={65}
                label="Dark Theme"
              />
            </div>
          ),
        },
        {
          label: 'Light Theme',
          code: `<Progress
  theme="light"
  variant="success"
  value={65}
  label="Light Theme"
/>`,
          preview: (
            <div className="bg-white rounded-xl p-4 border border-neutral-200">
              <Progress
                theme="light"
                variant="success"
                value={65}
                label="Light Theme"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Control the height of the progress bar.',
      examples: [
        {
          label: 'Small',
          code: `<Progress
  size="sm"
  value={60}
  label="Small"
/>`,
          preview: <Progress theme="dark" size="sm" value={60} label="Small" />,
        },
        {
          label: 'Medium',
          code: `<Progress
  size="md"
  value={60}
  label="Medium"
/>`,
          preview: (
            <Progress theme="dark" size="md" value={60} label="Medium" />
          ),
        },
        {
          label: 'Large',
          code: `<Progress
  size="lg"
  value={60}
  label="Large"
/>`,
          preview: <Progress theme="dark" size="lg" value={60} label="Large" />,
        },
        {
          label: 'Extra Large',
          code: `<Progress
  size="xl"
  value={60}
  label="Extra Large"
/>`,
          preview: (
            <Progress theme="dark" size="xl" value={60} label="Extra Large" />
          ),
        },
      ],
    },
    {
      id: 'radius',
      title: 'Radius',
      description: 'Control the border radius of the progress bar.',
      examples: [
        {
          label: 'None',
          code: `<Progress
  radius="none"
  value={60}
  label="No Radius"
/>`,
          preview: (
            <Progress theme="dark" radius="none" value={60} label="No Radius" />
          ),
        },
        {
          label: 'Small',
          code: `<Progress
  radius="sm"
  value={60}
  label="Small Radius"
/>`,
          preview: (
            <Progress
              theme="dark"
              radius="sm"
              value={60}
              label="Small Radius"
            />
          ),
        },
        {
          label: 'Medium',
          code: `<Progress
  radius="md"
  value={60}
  label="Medium Radius"
/>`,
          preview: (
            <Progress
              theme="dark"
              radius="md"
              value={60}
              label="Medium Radius"
            />
          ),
        },
        {
          label: 'Large',
          code: `<Progress
  radius="lg"
  value={60}
  label="Large Radius"
/>`,
          preview: (
            <Progress
              theme="dark"
              radius="lg"
              value={60}
              label="Large Radius"
            />
          ),
        },
        {
          label: 'Full',
          code: `<Progress
  radius="full"
  value={60}
  label="Full Radius"
/>`,
          preview: (
            <Progress
              theme="dark"
              radius="full"
              value={60}
              label="Full Radius"
            />
          ),
        },
      ],
    },
    {
      id: 'value-display',
      title: 'Value Display',
      description: 'Show the current progress percentage.',
      examples: [
        {
          label: 'Outside Value',
          code: `<Progress
  value={72}
  showValue
  valuePosition="outside"
  label="Upload Progress"
/>`,
          preview: (
            <Progress
              theme="dark"
              value={72}
              showValue
              valuePosition="outside"
              label="Upload Progress"
            />
          ),
        },
        {
          label: 'Inside Value',
          code: `<Progress
  value={45}
  showValue
  valuePosition="inside"
  label="Storage Used"
/>`,
          preview: (
            <Progress
              theme="dark"
              value={45}
              showValue
              valuePosition="inside"
              label="Storage Used"
            />
          ),
        },
        {
          label: 'Top Value',
          code: `<Progress
  value={88}
  showValue
  valuePosition="top"
  label="Download Progress"
/>`,
          preview: (
            <Progress
              theme="dark"
              value={88}
              showValue
              valuePosition="top"
              label="Download Progress"
            />
          ),
        },
        {
          label: 'Bottom Value',
          code: `<Progress
  value={34}
  showValue
  valuePosition="bottom"
  label="Battery Level"
/>`,
          preview: (
            <Progress
              theme="dark"
              value={34}
              showValue
              valuePosition="bottom"
              label="Battery Level"
            />
          ),
        },
      ],
    },
    {
      id: 'indeterminate',
      title: 'Indeterminate',
      description: 'Animated indeterminate state for unknown progress.',
      examples: [
        {
          label: 'Indeterminate',
          code: `<Progress
  indeterminate
  label="Loading..."
  description="Please wait while we process your request."
/>`,
          preview: (
            <Progress
              theme="dark"
              indeterminate
              label="Loading..."
              description="Please wait while we process your request."
            />
          ),
        },
      ],
    },
    {
      id: 'widths',
      title: 'Widths',
      description: 'Control the width of the progress bar.',
      examples: [
        {
          label: 'Small Width',
          code: `<Progress
  width="sm"
  value={60}
  label="Small"
/>`,
          preview: (
            <Progress theme="dark" width="sm" value={60} label="Small" />
          ),
        },
        {
          label: 'Medium Width',
          code: `<Progress
  width="md"
  value={60}
  label="Medium"
/>`,
          preview: (
            <Progress theme="dark" width="md" value={60} label="Medium" />
          ),
        },
        {
          label: 'Large Width',
          code: `<Progress
  width="lg"
  value={60}
  label="Large"
/>`,
          preview: (
            <Progress theme="dark" width="lg" value={60} label="Large" />
          ),
        },
        {
          label: 'Full Width',
          code: `<Progress
  width="full"
  value={60}
  label="Full Width"
/>`,
          preview: (
            <Progress theme="dark" width="full" value={60} label="Full Width" />
          ),
        },
      ],
    },
    {
      id: 'animated',
      title: 'Animated',
      description: 'Toggle the fill animation on or off.',
      examples: [
        {
          label: 'Animated (Default)',
          code: `<Progress
  animated
  value={80}
  label="Animated"
/>`,
          preview: (
            <Progress theme="dark" animated value={80} label="Animated" />
          ),
        },
        {
          label: 'No Animation',
          code: `<Progress
  animated={false}
  value={80}
  label="No Animation"
/>`,
          preview: (
            <Progress
              theme="dark"
              animated={false}
              value={80}
              label="No Animation"
            />
          ),
        },
      ],
    },
    {
      id: 'with-description',
      title: 'With Description',
      description: 'Add a description below the progress bar.',
      examples: [
        {
          label: 'With Description',
          code: `<Progress
  value={45}
  label="Uploading file..."
  description="Estimated time remaining: 2 minutes"
/>`,
          preview: (
            <Progress
              theme="dark"
              value={45}
              label="Uploading file..."
              description="Estimated time remaining: 2 minutes"
            />
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
          code: `<Progress
  variant="success"
  theme="dark"
  size="lg"
  width="lg"
  radius="lg"
  value={78}
  showValue
  valuePosition="outside"
  label="Project Completion"
  description="78 out of 100 tasks completed"
/>`,
          preview: (
            <Progress
              theme="dark"
              variant="success"
              size="lg"
              width="lg"
              radius="lg"
              value={78}
              showValue
              valuePosition="outside"
              label="Project Completion"
              description="78 out of 100 tasks completed"
            />
          ),
        },
      ],
    },
  ],
  props: [
    {
      name: 'variant',
      type: "'default' | 'primary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'",
      default: "'default'",
      description: 'Color variant of the progress fill.',
    },
    {
      name: 'theme',
      type: "'light' | 'dark'",
      default: "'dark'",
      description: 'Color theme of the progress bar.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg' | 'xl'",
      default: "'md'",
      description: 'Height of the progress bar.',
    },
    {
      name: 'radius',
      type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
      default: "'full'",
      description: 'Border radius of the progress bar.',
    },
    {
      name: 'width',
      type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
      default: "'md'",
      description: 'Width of the progress bar.',
    },
    {
      name: 'animated',
      type: 'boolean',
      default: 'true',
      description: 'Animate the fill width on value change.',
    },
    {
      name: 'value',
      type: 'number',
      default: '0',
      description: 'Current progress value.',
    },
    {
      name: 'max',
      type: 'number',
      default: '100',
      description: 'Maximum value.',
    },
    {
      name: 'min',
      type: 'number',
      default: '0',
      description: 'Minimum value.',
    },
    {
      name: 'showValue',
      type: 'boolean',
      default: 'false',
      description: 'Show the percentage value.',
    },
    {
      name: 'valuePosition',
      type: "'inside' | 'outside' | 'top' | 'bottom'",
      default: "'outside'",
      description: 'Position of the value display.',
    },
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Label text above the progress bar.',
    },
    {
      name: 'description',
      type: 'string',
      default: 'undefined',
      description: 'Description text below the progress bar.',
    },
    {
      name: 'indeterminate',
      type: 'boolean',
      default: 'false',
      description: 'Show animated indeterminate state.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes.',
    },
    {
      name: 'fillClassName',
      type: 'string',
      default: 'undefined',
      description: 'Classes for the fill element.',
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
    label: 'Spinner',
    href: '/docs/components/spinner',
    description: 'Loading spinner component.',
  },
];

export default function ProgressPage() {
  return (
    <DocsPageLayout
      category={progressData.category}
      title={progressData.title}
      description={progressData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...progressData.sections.map((section) => ({
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
          Install the Progress component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={progressData.installation.command} />
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
            <CodeBlock code={progressData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={progressData.usage.basic} />
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
        {progressData.sections.map((section) => (
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
          All props available on the Progress component.
        </p>
        <PropsTable props={progressData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
