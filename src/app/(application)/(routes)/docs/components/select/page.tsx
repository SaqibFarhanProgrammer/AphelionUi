import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';
import Select from '@/registry/components/select/page';

const selectOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

const selectData = {
  name: 'Select',
  slug: 'select',
  title: 'Select',
  description:
    'A dropdown selection component with support for labels, search, error states, helper text, and multiple sizes and themes.',
  category: 'Inputs',
  installation: {
    command: 'shadcn@latest add aphelio/c/select',
  },
  usage: {
    import: "import { Select } from '@/components/ui/select'",
    basic: '<Select options={options} placeholder="Choose an option" />',
    full: `import Select from '@/components/ui/select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

export default function App() {
  return (
    <Select
      label="Favorite Fruit"
      options={options}
      placeholder="Choose a fruit"
      helperText="Select your most liked fruit."
      size="md"
      theme="light"
      required
      searchable
      onChange={(value) => console.log('Selected:', value)}
    />
  );
}`,
  },
  sections: [
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Three predefined sizes for different use cases.',
      examples: [
        {
          label: 'Small',
          code: "<Select size='sm' options={options} placeholder='Small select' />",
          preview: (
            <Select
              size="sm"
              options={selectOptions}
              placeholder="Small select"
            />
          ),
        },
        {
          label: 'Medium',
          code: "<Select size='md' options={options} placeholder='Medium select' />",
          preview: (
            <Select
              size="md"
              options={selectOptions}
              placeholder="Medium select"
            />
          ),
        },
        {
          label: 'Large',
          code: "<Select size='lg' options={options} placeholder='Large select' />",
          preview: (
            <Select
              size="lg"
              options={selectOptions}
              placeholder="Large select"
            />
          ),
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
          code: "<Select theme='light' options={options} placeholder='Light theme' />",
          preview: (
            <Select
              theme="light"
              options={selectOptions}
              placeholder="Light theme"
            />
          ),
        },
        {
          label: 'Dark Theme',
          code: "<Select theme='dark' options={options} placeholder='Dark theme' />",
          preview: (
            <Select
              theme="dark"
              options={selectOptions}
              placeholder="Dark theme"
            />
          ),
        },
      ],
    },
    {
      id: 'label',
      title: 'Label',
      description: 'Add a descriptive label above the select field.',
      examples: [
        {
          label: 'With Label',
          code: "<Select label='Favorite Fruit' options={options} placeholder='Choose a fruit' />",
          preview: (
            <Select
              label="Favorite Fruit"
              options={selectOptions}
              placeholder="Choose a fruit"
            />
          ),
        },
        {
          label: 'Required Label',
          code: "<Select label='Country' options={options} placeholder='Select country' required />",
          preview: (
            <Select
              label="Country"
              options={selectOptions}
              placeholder="Select country"
              required
            />
          ),
        },
      ],
    },
    {
      id: 'helper-text',
      title: 'Helper Text',
      description: 'Provide additional context below the select field.',
      examples: [
        {
          label: 'With Helper Text',
          code: "<Select label='Category' options={options} helperText='Select the most relevant category.' placeholder='Choose category' />",
          preview: (
            <Select
              label="Category"
              options={selectOptions}
              helperText="Select the most relevant category."
              placeholder="Choose category"
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
          code: "<Select label='Payment Method' options={options} error='Please select a payment method.' placeholder='Select method' />",
          preview: (
            <Select
              label="Payment Method"
              options={selectOptions}
              error="Please select a payment method."
              placeholder="Select method"
            />
          ),
        },
        {
          label: 'Error State Prop',
          code: "<Select options={options} state='error' placeholder='Error state' />",
          preview: (
            <Select
              options={selectOptions}
              state="error"
              placeholder="Error state"
            />
          ),
        },
      ],
    },
    {
      id: 'searchable',
      title: 'Searchable',
      description: 'Enable search filtering inside the dropdown.',
      examples: [
        {
          label: 'Searchable',
          code: "<Select label='Search Items' options={options} searchable placeholder='Search and select' />",
          preview: (
            <Select
              label="Search Items"
              options={selectOptions}
              searchable
              placeholder="Search and select"
            />
          ),
        },
      ],
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Disable the select for non-interactive states.',
      examples: [
        {
          label: 'Disabled',
          code: "<Select options={options} disabled placeholder='Disabled select' />",
          preview: (
            <Select
              options={selectOptions}
              disabled
              placeholder="Disabled select"
            />
          ),
        },
        {
          label: 'Disabled Option',
          code: "<Select options={[{value:'a',label:'Active'},{value:'b',label:'Disabled',disabled:true}]} placeholder='Select item' />",
          preview: (
            <Select
              options={[
                { value: 'a', label: 'Active' },
                { value: 'b', label: 'Disabled', disabled: true },
              ]}
              placeholder="Select item"
            />
          ),
        },
      ],
    },
    {
      id: 'default-value',
      title: 'Default Value',
      description: 'Pre-select an option by default.',
      examples: [
        {
          label: 'With Default Value',
          code: "<Select options={options} defaultValue='banana' placeholder='Choose a fruit' />",
          preview: (
            <Select
              options={selectOptions}
              defaultValue="banana"
              placeholder="Choose a fruit"
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
          code: "<Select label='Product' options={options} helperText='Search and select a product.' searchable required placeholder='Select product' />",
          preview: (
            <Select
              label="Product"
              options={selectOptions}
              helperText="Search and select a product."
              searchable
              required
              placeholder="Select product"
            />
          ),
        },
        {
          label: 'Dark with Error',
          code: "<Select theme='dark' label='Priority' options={options} error='Priority is required.' state='error' placeholder='Select priority' />",
          preview: (
            <Select
              theme="dark"
              label="Priority"
              options={selectOptions}
              error="Priority is required."
              state="error"
              placeholder="Select priority"
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
      description: 'Size of the select trigger.',
    },
    {
      name: 'theme',
      type: "'light' | 'dark'",
      default: "'light'",
      description: 'Color theme of the select.',
    },
    {
      name: 'state',
      type: "'default' | 'error'",
      default: "'default'",
      description: 'Visual state of the select.',
    },
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Label text displayed above the select.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "'Select options'",
      description: 'Placeholder text when no option is selected.',
    },
    {
      name: 'options',
      type: 'SelectOption[]',
      default: 'required',
      description: 'Array of options to display in the dropdown.',
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
      name: 'error',
      type: 'string',
      default: 'undefined',
      description: 'Error message displayed below the select.',
    },
    {
      name: 'helperText',
      type: 'string',
      default: 'undefined',
      description: 'Helper text displayed below the select.',
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Marks the select as required.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables the select.',
    },
    {
      name: 'searchable',
      type: 'boolean',
      default: 'false',
      description: 'Enables search filtering inside the dropdown.',
    },
    {
      name: 'searchInput',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Custom search input element.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the select trigger.',
    },
    {
      name: 'containerClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the container.',
    },
    {
      name: 'dropdownClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the dropdown.',
    },
    {
      name: 'optionClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for each option.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Textarea',
    href: '/docs/components/textarea',
    description: 'Multi-line text input component.',
  },
  {
    label: 'Dialog',
    href: '/docs/components/dialog',
    description: 'Modal overlay for confirmations.',
  },
];

export default function SelectPage() {
  return (
    <DocsPageLayout
      category={selectData.category}
      title={selectData.title}
      description={selectData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...selectData.sections.map((section) => ({
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
          Install the Select component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={selectData.installation.command} />
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
            <CodeBlock code={selectData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={selectData.usage.basic} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Full Example
            </p>
            <CodeBlock code={selectData.usage.full} language="tsx" />
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
        {selectData.sections.map((section) => (
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
          All props available on the Select component.
        </p>
        <PropsTable props={selectData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
