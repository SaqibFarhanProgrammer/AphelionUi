import { Button } from '@/registry/components/button/Button';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';

const buttonData = {
  name: 'Button',
  slug: 'button',
  title: 'Button',
  description:
    'A clickable element that triggers an action or event. Supports multiple variants, sizes, shapes, loading states, and icon placement.',
  category: 'Inputs',
  installation: {
    command: 'shadcn@latest add aphelio/c/button',
  },
  usage: {
    import: "import { Button } from '@/components/ui/button'",
    basic: '<Button>Click me</Button>',
  },
  sections: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Buttons come in six visual styles for different contexts.',
      examples: [
        {
          label: 'Primary',
          code: "<Button variant='primary'>Primary</Button>",
          preview: <Button variant="primary">Primary</Button>,
        },
        {
          label: 'Secondary',
          code: "<Button variant='secondary'>Secondary</Button>",
          preview: <Button variant="secondary">Secondary</Button>,
        },
        {
          label: 'Outline',
          code: "<Button variant='outline'>Outline</Button>",
          preview: <Button variant="outline">Outline</Button>,
        },
        {
          label: 'Destructive',
          code: "<Button variant='destructive'>Destructive</Button>",
          preview: <Button variant="destructive">Destructive</Button>,
        },
        {
          label: 'Success',
          code: "<Button variant='success'>Success</Button>",
          preview: <Button variant="success">Success</Button>,
        },
        {
          label: 'Link',
          code: "<Button variant='link'>Link</Button>",
          preview: <Button variant="link">Link</Button>,
        },
      ],
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Six predefined sizes from extra small to extra large.',
      examples: [
        {
          label: 'Extra Small',
          code: "<Button size='xs'>Extra Small</Button>",
          preview: <Button size="xs">Extra Small</Button>,
        },
        {
          label: 'Small',
          code: "<Button size='sm'>Small</Button>",
          preview: <Button size="sm">Small</Button>,
        },
        {
          label: 'Medium',
          code: "<Button size='md'>Medium</Button>",
          preview: <Button size="md">Medium</Button>,
        },
        {
          label: 'Large',
          code: "<Button size='lg'>Large</Button>",
          preview: <Button size="lg">Large</Button>,
        },
        {
          label: 'Extra Large',
          code: "<Button size='xl'>Extra Large</Button>",
          preview: <Button size="xl">Extra Large</Button>,
        },
      ],
    },
    {
      id: 'shapes',
      title: 'Shapes',
      description: 'Three shape options for different visual contexts.',
      examples: [
        {
          label: 'Default',
          code: "<Button shape='default'>Default</Button>",
          preview: <Button shape="default">Default</Button>,
        },
        {
          label: 'Pill',
          code: "<Button shape='pill'>Pill</Button>",
          preview: <Button shape="pill">Pill</Button>,
        },
        {
          label: 'Square',
          code: "<Button shape='square'>Square</Button>",
          preview: <Button shape="square">Square</Button>,
        },
      ],
    },
    {
      id: 'loading',
      title: 'Loading State',
      description: 'Display a spinner when the button is processing an action.',
      examples: [
        {
          label: 'Loading',
          code: '<Button loading>Saving...</Button>',
          preview: <Button loading>Saving...</Button>,
        },
      ],
    },
    {
      id: 'full-width',
      title: 'Full Width',
      description: 'Expand the button to fill the width of its container.',
      examples: [
        {
          label: 'Full Width',
          code: '<Button fullWidth>Full Width Button</Button>',
          preview: <Button fullWidth>Full Width Button</Button>,
        },
      ],
    },
  ],
  props: [
    {
      name: 'variant',
      type: "'primary' | 'secondary' | 'outline' | 'destructive' | 'success' | 'link'",
      default: "'primary'",
      description: 'Visual style of the button.',
    },
    {
      name: 'size',
      type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon'",
      default: "'md'",
      description: 'Size of the button.',
    },
    {
      name: 'shape',
      type: "'default' | 'pill' | 'square'",
      default: "'default'",
      description: 'Border radius shape of the button.',
    },
    {
      name: 'loading',
      type: 'boolean',
      default: 'false',
      description: 'Shows a spinner and disables the button.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables button interactions.',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: 'false',
      description: 'Makes the button fill its container width.',
    },
    {
      name: 'leftIcon',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Icon rendered before the button text.',
    },
    {
      name: 'rightIcon',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Icon rendered after the button text.',
    },
    {
      name: 'theme',
      type: "'dark' | 'light'",
      default: 'undefined',
      description: 'Override the color theme.',
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
    label: 'Dialog',
    href: '/docs/components/dialog',
    description: 'Modal overlay for confirmations.',
  },
];

export default function ButtonPage() {
  return (
    <DocsPageLayout
      category={buttonData.category}
      title={buttonData.title}
      description={buttonData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...buttonData.sections.map((section) => ({
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
          Install the Button component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={buttonData.installation.command} />
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
            <CodeBlock code={buttonData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={buttonData.usage.basic} />
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
        {buttonData.sections.map((section) => (
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
          All props available on the Button component.
        </p>
        <PropsTable props={buttonData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
