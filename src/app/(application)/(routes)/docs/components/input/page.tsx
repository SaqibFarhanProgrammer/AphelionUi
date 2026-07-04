import { Input } from '@/registry/components/input/Input';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';
import { Search } from 'lucide-react';

const inputData = {
  name: 'Input',
  slug: 'input',
  title: 'Input',
  description:
    'A text input component with support for labels, helper text, error states, icons, addons, and multiple sizes and themes.',
  category: 'Inputs',
  installation: {
    command: 'shadcn@latest add aphelio/c/input',
  },
  usage: {
    import: "import { Input } from '@/components/ui/input'",
    basic: '<Input placeholder="Enter your name" />',
  },
  sections: [
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Three predefined sizes for different use cases.',
      examples: [
        {
          label: 'Small',
          code: "<Input size='sm' placeholder='Small input' />",
          preview: <Input size="sm" placeholder="Small input" />,
        },
        {
          label: 'Medium',
          code: "<Input size='md' placeholder='Medium input' />",
          preview: <Input size="md" placeholder="Medium input" />,
        },
        {
          label: 'Large',
          code: "<Input size='lg' placeholder='Large input' />",
          preview: <Input size="lg" placeholder="Large input" />,
        },
      ],
    },
    {
      id: 'themes',
      title: 'Themes',
      description: 'Two color themes for light and dark backgrounds.',
      examples: [
        {
          label: 'Light Theme',
          code: "<Input theme='light' placeholder='Light theme input' />",
          preview: <Input theme="light" placeholder="Light theme input" />,
        },
        {
          label: 'Dark Theme',
          code: "<Input theme='dark' placeholder='Dark theme input' />",
          preview: <Input theme="dark" placeholder="Dark theme input" />,
        },
      ],
    },
    {
      id: 'label',
      title: 'Label',
      description: 'Add a descriptive label above the input field.',
      examples: [
        {
          label: 'With Label',
          code: "<Input label='Email Address' placeholder='you@example.com' />",
          preview: (
            <Input label="Email Address" placeholder="you@example.com" />
          ),
        },
        {
          label: 'Required Label',
          code: "<Input label='Full Name' placeholder='John Doe' required />",
          preview: <Input label="Full Name" placeholder="John Doe" required />,
        },
      ],
    },
    {
      id: 'helper-text',
      title: 'Helper Text',
      description:
        'Provide additional context or instructions below the input.',
      examples: [
        {
          label: 'With Helper Text',
          code: "<Input label='Password' type='password' helperText='Must be at least 8 characters.' placeholder='Enter password' />",
          preview: (
            <Input
              label="Password"
              type="password"
              helperText="Must be at least 8 characters."
              placeholder="Enter password"
            />
          ),
        },
      ],
    },
    {
      id: 'error',
      title: 'Error State',
      description: 'Display validation errors with visual feedback.',
      examples: [
        {
          label: 'With Error',
          code: "<Input label='Email' error='Please enter a valid email address.' placeholder='you@example.com' />",
          preview: (
            <Input
              label="Email"
              error="Please enter a valid email address."
              placeholder="you@example.com"
            />
          ),
        },
      ],
    },
    {
      id: 'icons',
      title: 'Icons',
      description: 'Add icons on the left or right side of the input.',
      examples: [
        {
          label: 'Left Icon',
          code: "<Input leftIcon={<Search />} placeholder='Search...' />",
          preview: <Input leftIcon={<Search />} placeholder="Search..." />,
        },
        {
          label: 'Right Icon',
          code: "<Input rightIcon={<span>✓</span>} placeholder='Verified' />",
          preview: <Input rightIcon={<span>✓</span>} placeholder="Verified" />,
        },
        {
          label: 'Both Icons',
          code: "<Input leftIcon={<span>@</span>} rightIcon={<span>✓</span>} placeholder='Username' />",
          preview: (
            <Input
              leftIcon={<span>@</span>}
              rightIcon={<span>✓</span>}
              placeholder="Username"
            />
          ),
        },
      ],
    },
    {
      id: 'addons',
      title: 'Addons',
      description:
        'Attach text or elements to the left or right side of the input.',
      examples: [
        {
          label: 'Left Addon',
          code: "<Input leftAddon='https://' placeholder='example.com' />",
          preview: <Input leftAddon="https://" placeholder="example.com" />,
        },
        {
          label: 'Right Addon',
          code: "<Input rightAddon='.com' placeholder='example' />",
          preview: <Input rightAddon=".com" placeholder="example" />,
        },
      ],
    },
    {
      id: 'states',
      title: 'States',
      description: 'Disabled and read-only states for form control.',
      examples: [
        {
          label: 'Disabled',
          code: "<Input disabled placeholder='Disabled input' />",
          preview: <Input disabled placeholder="Disabled input" />,
        },
        {
          label: 'Read Only',
          code: "<Input readOnly value='Read only value' />",
          preview: <Input readOnly value="Read only value" />,
        },
      ],
    },
    {
      id: 'full-width',
      title: 'Full Width',
      description: 'Expand the input to fill the width of its container.',
      examples: [
        {
          label: 'Full Width',
          code: '<Input fullWidth placeholder="Full width input" />',
          preview: <Input fullWidth placeholder="Full width input" />,
        },
      ],
    },
  ],
  props: [
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'Size of the input field.',
    },
    {
      name: 'theme',
      type: "'light' | 'dark'",
      default: "'light'",
      description: 'Color theme of the input.',
    },
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Label text displayed above the input.',
    },
    {
      name: 'helperText',
      type: 'string',
      default: 'undefined',
      description: 'Helper text displayed below the input.',
    },
    {
      name: 'error',
      type: 'string',
      default: 'undefined',
      description: 'Error message displayed below the input.',
    },
    {
      name: 'leftIcon',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Icon rendered on the left side of the input.',
    },
    {
      name: 'rightIcon',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Icon rendered on the right side of the input.',
    },
    {
      name: 'leftAddon',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Addon element attached to the left side of the input.',
    },
    {
      name: 'rightAddon',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Addon element attached to the right side of the input.',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: 'true',
      description: 'Makes the input fill its container width.',
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Marks the input as required.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables the input.',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      default: 'false',
      description: 'Makes the input read-only.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Button',
    href: '/docs/components/button',
    description: 'Clickable element that triggers an action.',
  },
  {
    label: 'Dialog',
    href: '/docs/components/dialog',
    description: 'Modal overlay for confirmations.',
  },
];

export default function InputPage() {
  return (
    <DocsPageLayout
      category={inputData.category}
      title={inputData.title}
      description={inputData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...inputData.sections.map((section) => ({
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
          Install the Input component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={inputData.installation.command} />
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
            <CodeBlock code={inputData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={inputData.usage.basic} />
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
        {inputData.sections.map((section) => (
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
          All props available on the Input component.
        </p>
        <PropsTable props={inputData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
