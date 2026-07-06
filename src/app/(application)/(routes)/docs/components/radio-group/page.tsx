'use client';

import { Radio, RadioGroup } from '@/registry/components/RadioGroup/RadioGroup';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';

const radioOptions = [
  {
    value: 'basic',
    label: 'Basic Plan',
    description: 'For individuals',
    price: '$9/mo',
  },
  {
    value: 'pro',
    label: 'Pro Plan',
    description: 'For small teams',
    price: '$29/mo',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    description: 'For large organizations',
    price: '$99/mo',
  },
];

const simpleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const tableOptions = [
  {
    value: 'plan-a',
    label: 'Plan A',
    meta: { storage: '10GB', users: '1 User', support: 'Email' },
  },
  {
    value: 'plan-b',
    label: 'Plan B',
    meta: { storage: '50GB', users: '5 Users', support: 'Priority' },
  },
  {
    value: 'plan-c',
    label: 'Plan C',
    meta: { storage: '200GB', users: 'Unlimited', support: '24/7' },
  },
];

const radioData = {
  name: 'Radio',
  slug: 'radio',
  title: 'Radio',
  description:
    'A radio button component with support for single selection, multiple variants (default, card, table, inline), sizes, themes, and disabled states.',
  category: 'Inputs',
  installation: {
    command: 'shadcn@latest add aphelio/c/radio',
  },
  usage: {
    import: "import { Radio, RadioGroup } from '@/components/ui/radio'",
    basic: '<Radio label="Option" checked={false} onChange={(v) => {}} />',
    full: `import { RadioGroup } from '@/components/ui/radio';

const options = [
  { value: 'basic', label: 'Basic Plan', description: 'For individuals', price: '$9/mo' },
  { value: 'pro', label: 'Pro Plan', description: 'For small teams', price: '$29/mo' },
  { value: 'enterprise', label: 'Enterprise', description: 'For large organizations', price: '$99/mo' },
];

export default function App() {
  return (
    <RadioGroup
      options={options}
      variant="card"
      theme="dark"
      size="md"
      defaultValue="pro"
      columns={2}
      onChange={(value) => console.log('Selected:', value)}
    />
  );
}`,
  },
  sections: [
    {
      id: 'radio-sizes',
      title: 'Radio Sizes',
      description: 'Three predefined sizes for the radio indicator.',
      examples: [
        {
          label: 'Small',
          code: "<Radio size='sm' label='Small Radio' theme='dark' />",
          preview: <Radio size="sm" label="Small Radio" theme="dark" />,
        },
        {
          label: 'Medium',
          code: "<Radio size='md' label='Medium Radio' theme='dark' />",
          preview: <Radio size="md" label="Medium Radio" theme="dark" />,
        },
        {
          label: 'Large',
          code: "<Radio size='lg' label='Large Radio' theme='dark' />",
          preview: <Radio size="lg" label="Large Radio" theme="dark" />,
        },
      ],
    },
    {
      id: 'radio-checked',
      title: 'Radio States',
      description: 'Checked and unchecked states of the radio button.',
      examples: [
        {
          label: 'Unchecked',
          code: "<Radio label='Unchecked' checked={false} theme='dark' />",
          preview: <Radio label="Unchecked" checked={false} theme="dark" />,
        },
        {
          label: 'Checked',
          code: "<Radio label='Checked' checked={true} theme='dark' />",
          preview: <Radio label="Checked" checked={true} theme="dark" />,
        },
        {
          label: 'Disabled',
          code: "<Radio label='Disabled' disabled theme='dark' />",
          preview: <Radio label="Disabled" disabled theme="dark" />,
        },
        {
          label: 'Required',
          code: "<Radio label='Required' required theme='dark' />",
          preview: <Radio label="Required" required theme="dark" />,
        },
      ],
    },
    {
      id: 'group-default',
      title: 'Default Variant',
      description: 'Standard radio group with label and description.',
      examples: [
        {
          label: 'Default Group',
          code: "<RadioGroup options={options} variant='default' theme='dark' defaultValue='pro' />",
          preview: (
            <RadioGroup
              options={radioOptions}
              variant="default"
              theme="dark"
              defaultValue="pro"
            />
          ),
        },
      ],
    },
    {
      id: 'group-card',
      title: 'Card Variant',
      description: 'Radio options displayed as selectable cards.',
      examples: [
        {
          label: 'Card Group',
          code: "<RadioGroup options={options} variant='card' theme='dark' defaultValue='pro' />",
          preview: (
            <RadioGroup
              options={radioOptions}
              variant="card"
              theme="dark"
              defaultValue="pro"
            />
          ),
        },
        {
          label: 'Card 2 Columns',
          code: "<RadioGroup options={options} variant='card' theme='dark' columns={2} defaultValue='pro' />",
          preview: (
            <RadioGroup
              options={radioOptions}
              variant="card"
              theme="dark"
              columns={2}
              defaultValue="pro"
            />
          ),
        },
        {
          label: 'Card 3 Columns',
          code: "<RadioGroup options={options} variant='card' theme='dark' columns={3} defaultValue='pro' />",
          preview: (
            <RadioGroup
              options={radioOptions}
              variant="card"
              theme="dark"
              columns={3}
              defaultValue="pro"
            />
          ),
        },
      ],
    },
    {
      id: 'group-table',
      title: 'Table Variant',
      description:
        'Radio options displayed in a table-like row layout with metadata.',
      examples: [
        {
          label: 'Table Group',
          code: "<RadioGroup options={tableOptions} variant='table' theme='dark' defaultValue='plan-b' />",
          preview: (
            <RadioGroup
              options={tableOptions}
              variant="table"
              theme="dark"
              defaultValue="plan-b"
            />
          ),
        },
      ],
    },
    {
      id: 'group-inline',
      title: 'Inline Variant',
      description: 'Radio options displayed in a horizontal row.',
      examples: [
        {
          label: 'Inline Group',
          code: "<RadioGroup options={simpleOptions} variant='inline' theme='dark' defaultValue='option2' />",
          preview: (
            <RadioGroup
              options={simpleOptions}
              variant="inline"
              theme="dark"
              defaultValue="option2"
            />
          ),
        },
      ],
    },
    {
      id: 'group-sizes',
      title: 'Group Sizes',
      description: 'Different sizes for the radio indicator within a group.',
      examples: [
        {
          label: 'Small Group',
          code: "<RadioGroup options={simpleOptions} size='sm' theme='dark' defaultValue='option1' />",
          preview: (
            <RadioGroup
              options={simpleOptions}
              size="sm"
              theme="dark"
              defaultValue="option1"
            />
          ),
        },
        {
          label: 'Large Group',
          code: "<RadioGroup options={simpleOptions} size='lg' theme='dark' defaultValue='option1' />",
          preview: (
            <RadioGroup
              options={simpleOptions}
              size="lg"
              theme="dark"
              defaultValue="option1"
            />
          ),
        },
      ],
    },
    {
      id: 'group-disabled',
      title: 'Disabled Options',
      description: 'Disable specific options within the group.',
      examples: [
        {
          label: 'Disabled Option',
          code: "<RadioGroup options={[{value:'a',label:'Active'},{value:'b',label:'Disabled',disabled:true},{value:'c',label:'Active 2'}]} theme='dark' />",
          preview: (
            <RadioGroup
              options={[
                { value: 'a', label: 'Active' },
                { value: 'b', label: 'Disabled', disabled: true },
                { value: 'c', label: 'Active 2' },
              ]}
              theme="dark"
            />
          ),
        },
        {
          label: 'Disabled Group',
          code: "<RadioGroup options={simpleOptions} disabled theme='dark' defaultValue='option1' />",
          preview: (
            <RadioGroup
              options={simpleOptions}
              disabled
              theme="dark"
              defaultValue="option1"
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
          label: 'Full Featured Card',
          code: "<RadioGroup options={options} variant='card' theme='dark' size='lg' columns={3} defaultValue='enterprise' />",
          preview: (
            <RadioGroup
              options={radioOptions}
              variant="card"
              theme="dark"
              size="lg"
              columns={3}
              defaultValue="enterprise"
            />
          ),
        },
        {
          label: 'Table with Meta',
          code: "<RadioGroup options={tableOptions} variant='table' theme='dark' size='md' defaultValue='plan-c' />",
          preview: (
            <RadioGroup
              options={tableOptions}
              variant="table"
              theme="dark"
              size="md"
              defaultValue="plan-c"
            />
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
      description: 'Size of the radio indicator.',
    },
    {
      name: 'theme',
      type: "'light' | 'dark'",
      default: "'light'",
      description: 'Color theme of the radio.',
    },
    {
      name: 'checked',
      type: 'boolean',
      default: 'false',
      description: 'Whether the radio is checked.',
    },
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Label text for the radio.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables the radio.',
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Marks the radio as required.',
    },
    {
      name: 'onChange',
      type: '(checked: boolean) => void',
      default: 'undefined',
      description: 'Callback fired when the radio is toggled.',
    },
  ],
  groupProps: [
    {
      name: 'options',
      type: 'RadioOption[]',
      default: 'required',
      description: 'Array of options to display in the group.',
    },
    {
      name: 'value',
      type: 'string',
      default: 'undefined',
      description: 'Controlled value of the selected option.',
    },
    {
      name: 'defaultValue',
      type: 'string',
      default: 'undefined',
      description: 'Default value of the selected option.',
    },
    {
      name: 'onChange',
      type: '(value: string) => void',
      default: 'undefined',
      description: 'Callback fired when an option is selected.',
    },
    {
      name: 'name',
      type: 'string',
      default: 'undefined',
      description: 'Name attribute for the radio group.',
    },
    {
      name: 'theme',
      type: "'light' | 'dark'",
      default: "'light'",
      description: 'Color theme of the radio group.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'Size of the radio indicators.',
    },
    {
      name: 'variant',
      type: "'default' | 'card' | 'table' | 'inline'",
      default: "'default'",
      description: 'Visual layout variant of the radio group.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables the entire radio group.',
    },
    {
      name: 'columns',
      type: '1 | 2 | 3',
      default: '1',
      description: 'Number of columns for card variant.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Select',
    href: '/docs/components/select',
    description: 'Dropdown selection component.',
  },
  {
    label: 'Checkbox',
    href: '/docs/components/checkbox',
    description: 'Multi-selection input component.',
  },
];

export default function RadioPage() {
  return (
    <DocsPageLayout
      category={radioData.category}
      title={radioData.title}
      description={radioData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...radioData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: 'props', title: 'Props' },
        { id: 'group-props', title: 'RadioGroup Props' },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Installation
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Install the Radio component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={radioData.installation.command} />
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
            <CodeBlock code={radioData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={radioData.usage.basic} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Full Example
            </p>
            <CodeBlock code={radioData.usage.full} language="tsx" />
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
        {radioData.sections.map((section) => (
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
          All props available on the Radio component.
        </p>
        <PropsTable props={radioData.props} />
      </section>

      <section className="remove-scroll mb-14" id="group-props">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          RadioGroup Props
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-5 leading-relaxed">
          All props available on the RadioGroup component.
        </p>
        <PropsTable props={radioData.groupProps} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
