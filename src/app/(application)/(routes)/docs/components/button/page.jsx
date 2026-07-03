import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import { Button } from '@/registry/components/button/Button';

function PropsTable({ props }) {
  return (
    <div className="rounded-[10px] border border-white/[0.06] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.06] bg-white/[0.02]">
              <th className="text-left px-5 py-3 font-['inter-semi'] text-[12px] text-white/50 uppercase tracking-wider">
                Prop
              </th>
              <th className="text-left px-5 py-3 font-['inter-semi'] text-[12px] text-white/50 uppercase tracking-wider">
                Type
              </th>
              <th className="text-left px-5 py-3 font-['inter-semi'] text-[12px] text-white/50 uppercase tracking-wider">
                Default
              </th>
              <th className="text-left px-5 py-3 font-['inter-semi'] text-[12px] text-white/50 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop) => (
              <tr
                key={prop.name}
                className="border-b border-white/[0.04] last:border-0"
              >
                <td className="px-5 py-3 font-['inter-semi'] text-[13px] text-white/80">
                  {prop.name}
                </td>
                <td className="px-5 py-3 font-['inter-rag'] text-[13px] text-white/80">
                  {prop.type}
                </td>
                <td className="px-5 py-3 font-['inter-rag'] text-[13px] text-white/70">
                  {prop.default}
                </td>
                <td className="px-5 py-3 font-['inter-rag'] text-[13px] text-white/50">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Section({ title, description, children }) {
  return (
    <div className="mb-12">
      <h3 className="font-['inter-bold'] text-[18px] text-white/90 mb-2">
        {title}
      </h3>
      <p className="font-['inter-rag'] text-[14px] text-white/80 mb-5 leading-relaxed">
        {description}
      </p>
      {children}
    </div>
  );
}

const buttonData = {

  name: 'Button',
  slug: 'button',
  title: 'Button',
  description:
    'A clickable element that triggers an action or event. Supports multiple variants, sizes, shapes, loading states, and icon placement.',
  category: 'Inputs',
  installation: {
    command:"shadcn@latest add aphelio/c/button"
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

export default function ButtonPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="bo">
        <div className="max-w-[720px] mx-auto px-6 py-6 md:pt-20">
          <p className="font-['inter-semi'] text-[11px] text-white/50 tracking-[0.15em] uppercase mb-5">
            Components
          </p>
          <h1 className="font-['inter-bold'] text-[36px] md:text-[48px] text-white leading-[1.1] tracking-tight mb-4">
            {buttonData.title}
          </h1>
          <p className="font-['inter-rag'] text-[15px] text-white/70 leading-[1.7] max-w-[480px]">
            {buttonData.description}
          </p>
        </div>
      </div>

      <div className="max-w-[720px] mx-auto px-6 py-12 md:py-16">
        <section className="mb-14">
          <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
            Installation
          </h2>
          <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
            Install the Button component using the CLI. This will copy the
            component source into your project.
          </p>
          <InstallCommand command={buttonData.installation.command} />
        </section>

        <section className="mb-14">
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

        <section className="mb-14">
          <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
            Examples
          </h2>
          <p className="font-['inter-rag'] text-[14px] text-white/70 mb-6 leading-relaxed">
            Common use cases and configurations.
          </p>

          {buttonData.sections.map((section) => (
            <Section
              key={section.id}
              title={section.title}
              description={section.description}
            >
              <div className="space-y-4">
                {section.examples.map((example, idx) => (
                  <div key={idx}>
                    <p className="font-['inter-semi'] text-[11px] text-white/80 mb-2 uppercase tracking-wider">
                      {example.label}
                    </p>
                    <div className="rounded-[10px] relative border border-white/[0.06] bg-[#0D0D0D] p-6 flex items-center justify-center min-h-[80px] mb-3">
                      {example.preview}
                    </div>
                    <CodeBlock code={example.code} />
                  </div>
                ))}
              </div>
            </Section>
          ))}
        </section>

        <section className="mb-14">
          <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
            Props
          </h2>
          <p className="font-['inter-rag'] text-[14px] text-white/70 mb-5 leading-relaxed">
            All props available on the Button component.
          </p>
          <PropsTable props={buttonData.props} />
        </section>

        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <p className="font-['inter-semi'] text-[11px] text-white/50 mb-5 uppercase tracking-wider">
            Next
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href="/docs/components/input"
              className="group p-5 rounded-[12px] bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
            >
              <p className="font-['inter-semi'] text-[14px] text-white/70 group-hover:text-white/90 transition-colors mb-1.5">
                Input
              </p>
              <p className="font-['inter-rag'] text-[12px] text-white/80 leading-relaxed">
                Text input with validation support.
              </p>
            </a>
            <a
              href="/docs/components/dialog"
              className="group p-5 rounded-[12px] bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
            >
              <p className="font-['inter-semi'] text-[14px] text-white/70 group-hover:text-white/90 transition-colors mb-1.5">
                Dialog
              </p>
              <p className="font-['inter-rag'] text-[12px] text-white/80 leading-relaxed">
                Modal overlay for confirmations.
              </p>
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-['inter-rag'] text-[12px] text-white/80">
            Aphelion UI — Built for developers who value structure.
          </p>
        </div>
      </div>
    </div>
  );
}
