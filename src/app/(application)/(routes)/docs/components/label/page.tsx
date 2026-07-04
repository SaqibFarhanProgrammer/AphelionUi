'use client';

import { Label } from '@/registry/components/label/Label';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';

const labelData = {
  name: 'Label',
  slug: 'label',
  title: 'Label',
  description:
    'A versatile label component with support for icons, dismissible state, multiple sizes, themes, and variants.',
  category: 'Data Display',
  installation: {
    command: 'shadcn@latest add aphelio/c/label',
  },
  usage: {
    import: "import { Label } from '@/components/ui/label'",
    basic: '<Label>Default Label</Label>',
  },
  sections: [
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Three predefined sizes for different contexts.',
      examples: [
        {
          label: 'Small',
          code: "<Label size='sm'>Small Label</Label>",
          preview: <Label size="sm">Small Label</Label>,
        },
        {
          label: 'Medium',
          code: "<Label size='md'>Medium Label</Label>",
          preview: <Label size="md">Medium Label</Label>,
        },
        {
          label: 'Large',
          code: "<Label size='lg'>Large Label</Label>",
          preview: <Label size="lg">Large Label</Label>,
        },
      ],
    },
    {
      id: 'themes',
      title: 'Themes',
      description: 'Four color themes for different visual contexts.',
      examples: [
        {
          label: 'Light',
          code: "<Label theme='light'>Light Label</Label>",
          preview: <Label theme="light">Light Label</Label>,
        },
        {
          label: 'Dark',
          code: "<Label theme='dark'>Dark Label</Label>",
          preview: <Label theme="dark">Dark Label</Label>,
        },
        {
          label: 'Light Primary',
          code: "<Label theme='light-primary'>Light Primary</Label>",
          preview: <Label theme="light-primary">Light Primary</Label>,
        },
        {
          label: 'Dark Primary',
          code: "<Label theme='dark-primary'>Dark Primary</Label>",
          preview: <Label theme="dark-primary">Dark Primary</Label>,
        },
      ],
    },
    {
      id: 'variants',
      title: 'Variants',
      description: 'Three style variants for different use cases.',
      examples: [
        {
          label: 'Default',
          code: "<Label variant='default'>Default</Label>",
          preview: <Label variant="default">Default</Label>,
        },
        {
          label: 'Outline',
          code: "<Label variant='outline'>Outline</Label>",
          preview: <Label variant="outline">Outline</Label>,
        },
        {
          label: 'Ghost',
          code: "<Label variant='ghost'>Ghost</Label>",
          preview: <Label variant="ghost">Ghost</Label>,
        },
      ],
    },
    {
      id: 'icons',
      title: 'Icons',
      description: 'Built-in icon support with multiple icon types.',
      examples: [
        {
          label: 'Dot Icon',
          code: "<Label icon='dot'>Dot Label</Label>",
          preview: <Label icon="dot">Dot Label</Label>,
        },
        {
          label: 'Circle Icon',
          code: "<Label icon='circle'>Circle Label</Label>",
          preview: <Label icon="circle">Circle Label</Label>,
        },
        {
          label: 'Check Icon',
          code: "<Label icon='check'>Check Label</Label>",
          preview: <Label icon="check">Check Label</Label>,
        },
        {
          label: 'User Icon',
          code: "<Label icon='user'>User Label</Label>",
          preview: <Label icon="user">User Label</Label>,
        },
        {
          label: 'Right Icon',
          code: "<Label iconRight='check'>Right Icon</Label>",
          preview: <Label iconRight="check">Right Icon</Label>,
        },
      ],
    },
    {
      id: 'dismissible',
      title: 'Dismissible',
      description: 'Add a dismiss button to remove the label.',
      examples: [
        {
          label: 'Dismissible',
          code: "<Label dismissible onDismiss={() => console.log('dismissed')}>Dismissible</Label>",
          preview: (
            <Label dismissible onDismiss={() => console.log('dismissed')}>
              Dismissible
            </Label>
          ),
        },
        {
          label: 'Dismissible with Icon',
          code: "<Label icon='dot' dismissible onDismiss={() => {}}>Tagged</Label>",
          preview: (
            <Label icon="dot" dismissible onDismiss={() => {}}>
              Tagged
            </Label>
          ),
        },
      ],
    },
    {
      id: 'combinations',
      title: 'Combinations',
      description: 'Mix and match props for complex labels.',
      examples: [
        {
          label: 'Primary with Icon',
          code: "<Label theme='light-primary' icon='check'>Verified</Label>",
          preview: (
            <Label theme="light-primary" icon="check">
              Verified
            </Label>
          ),
        },
        {
          label: 'Dark Outline with Dismiss',
          code: "<Label theme='dark' variant='outline' icon='user' dismissible onDismiss={() => {}}>Member</Label>",
          preview: (
            <Label
              theme="dark"
              variant="outline"
              icon="user"
              dismissible
              onDismiss={() => {}}
            >
              Member
            </Label>
          ),
        },
      ],
    },
  ],
  props: [
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'Size of the label.',
    },
    {
      name: 'theme',
      type: "'light' | 'dark' | 'light-primary' | 'dark-primary'",
      default: "'light'",
      description: 'Color theme of the label.',
    },
    {
      name: 'variant',
      type: "'default' | 'outline' | 'ghost'",
      default: "'default'",
      description: 'Visual style variant of the label.',
    },
    {
      name: 'icon',
      type: "'dot' | 'circle' | 'check' | 'user' | React.ReactNode",
      default: 'undefined',
      description: 'Icon rendered on the left side of the label.',
    },
    {
      name: 'iconRight',
      type: "'dot' | 'circle' | 'check' | 'user' | React.ReactNode",
      default: 'undefined',
      description: 'Icon rendered on the right side of the label.',
    },
    {
      name: 'dismissible',
      type: 'boolean',
      default: 'false',
      description: 'Shows a dismiss button on the label.',
    },
    {
      name: 'onDismiss',
      type: '() => void',
      default: 'undefined',
      description: 'Callback fired when the dismiss button is clicked.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'required',
      description: 'The content of the label.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Input',
    href: '/docs/components/input',
    description: 'Text input with validation support.',
  },
  {
    label: 'Badge',
    href: '/docs/components/badge',
    description: 'Status indicator for UI elements.',
  },
];

export default function LabelPage() {
  return (
    <DocsPageLayout
      category={labelData.category}
      title={labelData.title}
      description={labelData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...labelData.sections.map((section) => ({
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
          Install the Label component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={labelData.installation.command} />
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
            <CodeBlock code={labelData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={labelData.usage.basic} />
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
        {labelData.sections.map((section) => (
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
          All props available on the Label component.
        </p>
        <PropsTable props={labelData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
