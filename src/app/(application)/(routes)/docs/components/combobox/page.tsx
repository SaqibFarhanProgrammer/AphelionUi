'use client';

import { Combobox, useCombobox } from '@/registry/components/Combobox/Combobox';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';
import { useState } from 'react';

// ─── Demo Data ───────────────────────────────────────────────────────────

const FRUITS = [
  { value: 'apple', label: '🍎 Apple' },
  { value: 'banana', label: '🍌 Banana' },
  { value: 'cherry', label: '🍒 Cherry' },
  { value: 'date', label: '🌴 Date' },
  { value: 'elderberry', label: '🫐 Elderberry' },
  { value: 'fig', label: '🍐 Fig' },
  { value: 'grape', label: '🍇 Grape' },
];

const USERS = [
  { value: 'alice', label: 'Alice Johnson', group: 'Design' },
  { value: 'bob', label: 'Bob Smith', group: 'Engineering' },
  { value: 'carol', label: 'Carol Davis', group: 'Product' },
  { value: 'dave', label: 'Dave Wilson', group: 'Engineering' },
  { value: 'eve', label: 'Eve Brown', group: 'Marketing' },
  { value: 'frank', label: 'Frank Miller', group: 'Design' },
  { value: 'grace', label: 'Grace Lee', group: 'Product' },
  { value: 'hank', label: 'Hank Green', group: 'Engineering' },
];

const groupedOptions = [
  {
    label: 'Design',
    options: [
      { value: 'alice', label: 'Alice Johnson' },
      { value: 'frank', label: 'Frank Miller' },
    ],
  },
  {
    label: 'Engineering',
    options: [
      { value: 'bob', label: 'Bob Smith' },
      { value: 'dave', label: 'Dave Wilson' },
      { value: 'hank', label: 'Hank Green' },
    ],
  },
  {
    label: 'Product',
    options: [
      { value: 'carol', label: 'Carol Davis' },
      { value: 'grace', label: 'Grace Lee' },
    ],
  },
  {
    label: 'Marketing',
    options: [{ value: 'eve', label: 'Eve Brown' }],
  },
];

// ─── Combobox Data ───────────────────────────────────────────────────────


const comboboxData = {
  name: 'Combobox',
  slug: 'combobox',
  title: 'Combobox',
  description:
    'A versatile dropdown component with support for single and multiple selection, search, grouped options, creatable tags, keyboard navigation, and multiple sizes and themes.',
  category: 'Inputs',
  installation: {
    command: 'shadcn@latest add aphelio/c/combobox',
  },
  usage: {
    import: "import { Combobox } from '@/components/ui/combobox'",
    basic: `<Combobox
  options={[
    { value: 'apple', label: '🍎 Apple' },
    { value: 'banana', label: '🍌 Banana' },
    { value: 'cherry', label: '🍒 Cherry' },
  ]}
  placeholder="Select a fruit..."
/>`,
  },
  sections: [
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Four predefined sizes for different use cases.',
      examples: [
        {
          label: 'Small',
          code: `<Combobox
  options={FRUITS}
  placeholder="Small"
  size="sm"
/>`,
          preview: <Combobox options={FRUITS} placeholder="Small" size="sm" />,
        },
        {
          label: 'Medium',
          code: `<Combobox
  options={FRUITS}
  placeholder="Medium"
  size="md"
/>`,
          preview: <Combobox options={FRUITS} placeholder="Medium" size="md" />,
        },
        {
          label: 'Large (Default)',
          code: `<Combobox
  options={FRUITS}
  placeholder="Large"
  size="lg"
/>`,
          preview: <Combobox options={FRUITS} placeholder="Large" size="lg" />,
        },
        {
          label: 'XL',
          code: `<Combobox
  options={FRUITS}
  placeholder="XL"
  size="xl"
/>`,
          preview: <Combobox options={FRUITS} placeholder="XL" size="xl" />,
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
          code: `<Combobox
  options={FRUITS}
  placeholder="Dark theme..."
  theme="dark"
/>`,
          preview: (
            <Combobox
              options={FRUITS}
              placeholder="Dark theme..."
              theme="dark"
            />
          ),
        },
        {
          label: 'Light Theme',
          code: `<div className="rounded-xl border border-black/10 bg-white p-4">
  <Combobox
    options={FRUITS}
    placeholder="Light theme..."
    theme="light"
  />
</div>`,
          preview: (
            <div className="rounded-xl border border-black/10 bg-white p-4">
              <Combobox
                options={FRUITS}
                placeholder="Light theme..."
                theme="light"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: 'single-select',
      title: 'Single Select',
      description:
        'Basic single selection with label, helper text, and clear button.',
      examples: [
        {
          label: 'With Label & Helper',
          code: `<Combobox
  options={FRUITS}
  placeholder="Pick a fruit..."
  label="Favorite Fruit"
  helperText="Choose your favorite fruit"
  clearable
/>`,
          preview: (
            <Combobox
              options={FRUITS}
              placeholder="Pick a fruit..."
              label="Favorite Fruit"
              helperText="Choose your favorite fruit"
              clearable
            />
          ),
        },
      ],
    },
    {
      id: 'multiple-select',
      title: 'Multiple Select',
      description:
        'Select multiple options with tag display and max tags limit.',
      examples: [
        {
          label: 'Multiple Selection',
          code: `<Combobox
  options={FRUITS}
  placeholder="Select fruits..."
  label="Favorite Fruits"
  helperText="Pick multiple fruits"
  multiple
  clearable
  maxTags={3}
/>`,
          preview: (
            <Combobox
              options={FRUITS}
              placeholder="Select fruits..."
              label="Favorite Fruits"
              helperText="Pick multiple fruits"
              multiple
              clearable
              maxTags={3}
            />
          ),
        },
      ],
    },
    {
      id: 'grouped',
      title: 'Grouped Options',
      description: 'Organize options into labeled groups.',
      examples: [
        {
          label: 'Grouped',
          code: `<Combobox
  groups={groupedOptions}
  placeholder="Select a team member..."
  label="Team Member"
  helperText="Grouped by department"
  clearable
/>`,
          preview: (
            <Combobox
              groups={groupedOptions}
              placeholder="Select a team member..."
              label="Team Member"
              helperText="Grouped by department"
              clearable
            />
          ),
        },
      ],
    },
    {
      id: 'creatable',
      title: 'Creatable',
      description: 'Allow users to create new options by typing.',
      examples: [
        {
          label: 'Creatable Multi',
          code: `<Combobox
  options={FRUITS}
  placeholder="Search or create..."
  label="Custom Tags"
  helperText="Type something and press Enter to create"
  multiple
  creatable
  clearable
  searchable
/>`,
          preview: (
            <Combobox
              options={FRUITS}
              placeholder="Search or create..."
              label="Custom Tags"
              helperText="Type something and press Enter to create"
              multiple
              creatable
              clearable
              searchable
            />
          ),
        },
      ],
    },
    {
      id: 'searchable',
      title: 'Searchable',
      description: 'Enable or disable search filtering inside the dropdown.',
      examples: [
        {
          label: 'Searchable (Default)',
          code: `<Combobox
  options={FRUITS}
  placeholder="Search fruits..."
  searchable
/>`,
          preview: (
            <Combobox
              options={FRUITS}
              placeholder="Search fruits..."
              searchable
            />
          ),
        },
        {
          label: 'Non-Searchable',
          code: `<Combobox
  options={FRUITS}
  placeholder="Select a fruit..."
  searchable={false}
/>`,
          preview: (
            <Combobox
              options={FRUITS}
              placeholder="Select a fruit..."
              searchable={false}
            />
          ),
        },
      ],
    },
    {
      id: 'states',
      title: 'States',
      description: 'Error and disabled states for form control.',
      examples: [
        {
          label: 'Error State',
          code: `<Combobox
  options={FRUITS}
  placeholder="Pick something..."
  label="Required Field"
  error="This field is required"
  clearable
/>`,
          preview: (
            <Combobox
              options={FRUITS}
              placeholder="Pick something..."
              label="Required Field"
              error="This field is required"
              clearable
            />
          ),
        },
        {
          label: 'Disabled',
          code: `<Combobox
  options={FRUITS}
  value="apple"
  label="Disabled"
  disabled
  clearable={false}
/>`,
          preview: (
            <Combobox
              options={FRUITS}
              value="apple"
              label="Disabled"
              disabled
              clearable={false}
            />
          ),
        },
      ],
    },
    {
      id: 'controlled',
      title: 'Controlled',
      description:
        'Control the combobox state externally with value and onChange.',
      examples: [
        {
          label: 'Controlled State',
          code: `const [value, setValue] = useState('');

return (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => setValue('apple')}
        className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
      >
        Select Apple
      </button>
      <button
        onClick={() => setValue('')}
        className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
      >
        Clear
      </button>
    </div>
    <div className="text-sm text-white/40">
      Selected: {value || 'none'}
    </div>
    <Combobox
      options={FRUITS}
      value={value}
      onChange={setValue}
      placeholder="Select a fruit..."
      clearable
    />
  </div>
);`,
          preview: <ControlledComboboxPreview />,
        },
      ],
    },
    {
      id: 'hook',
      title: 'useCombobox Hook',
      description:
        'Programmatically control the combobox with the useCombobox hook.',
      examples: [
        {
          label: 'Hook Controlled',
          code: `const combobox = useCombobox('banana');

return (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => combobox.setValue('cherry')}
        className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
      >
        Set Cherry
      </button>
      <button
        onClick={combobox.clear}
        className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
      >
        Clear
      </button>
    </div>
    <div className="text-sm text-white/40">
      Value: {combobox.value || 'none'}
    </div>
    <Combobox
      options={FRUITS}
      value={combobox.value}
      onChange={combobox.setValue}
      placeholder="Select a fruit..."
      clearable
    />
  </div>
);`,
          preview: <HookComboboxPreview />,
        },
      ],
    },
  ],
  props: [
    {
      name: 'options',
      type: 'ComboboxOption[]',
      default: 'undefined',
      description:
        'Array of options with value, label, disabled, group, and icon.',
    },
    {
      name: 'groups',
      type: 'ComboboxGroup[]',
      default: 'undefined',
      description: 'Array of grouped options with label and options.',
    },
    {
      name: 'value',
      type: 'string | string[]',
      default: 'undefined',
      description: 'Controlled selected value(s).',
    },
    {
      name: 'defaultValue',
      type: 'string | string[]',
      default: "'' | []",
      description: 'Default selected value(s) for uncontrolled usage.',
    },
    {
      name: 'onChange',
      type: '(value: string | string[]) => void',
      default: 'undefined',
      description: 'Callback fired when selection changes.',
    },
    {
      name: 'onSearch',
      type: '(query: string) => void',
      default: 'undefined',
      description: 'Callback fired when search query changes.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: '"Select..."',
      description: 'Placeholder text for the input.',
    },
    {
      name: 'searchPlaceholder',
      type: 'string',
      default: '"Search..."',
      description: 'Placeholder text for the search input inside dropdown.',
    },
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Label text displayed above the combobox.',
    },
    {
      name: 'helperText',
      type: 'string',
      default: 'undefined',
      description: 'Helper text displayed below the combobox.',
    },
    {
      name: 'error',
      type: 'string',
      default: 'undefined',
      description: 'Error message displayed below the combobox.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables the combobox.',
    },
    {
      name: 'multiple',
      type: 'boolean',
      default: 'false',
      description: 'Enable multiple selection with tags.',
    },
    {
      name: 'searchable',
      type: 'boolean',
      default: 'true',
      description: 'Enable search filtering inside the dropdown.',
    },
    {
      name: 'creatable',
      type: 'boolean',
      default: 'false',
      description: 'Allow creating new options by typing.',
    },
    {
      name: 'clearable',
      type: 'boolean',
      default: 'true',
      description: 'Show clear button when items are selected.',
    },
    {
      name: 'theme',
      type: "'dark' | 'light'",
      default: '"dark"',
      description: 'Color theme of the combobox.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg' | 'xl'",
      default: '"lg"',
      description: 'Size of the combobox input.',
    },
    {
      name: 'maxHeight',
      type: 'string',
      default: '"320px"',
      description: 'Maximum height of the dropdown.',
    },
    {
      name: 'maxTags',
      type: 'number',
      default: '3',
      description: 'Maximum number of tags to show before collapsing.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the container.',
    },
    {
      name: 'inputClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the input wrapper.',
    },
    {
      name: 'dropdownClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the dropdown.',
    },
  ],
  hookProps: [
    {
      name: 'value',
      type: 'string | string[]',
      default: "''",
      description: 'Current selected value.',
    },
    {
      name: 'setValue',
      type: '(value: string | string[]) => void',
      default: 'undefined',
      description: 'Set the selected value directly.',
    },
    {
      name: 'searchQuery',
      type: 'string',
      default: "''",
      description: 'Current search query.',
    },
    {
      name: 'setSearchQuery',
      type: '(query: string) => void',
      default: 'undefined',
      description: 'Set the search query directly.',
    },
    {
      name: 'clear',
      type: '() => void',
      default: 'undefined',
      description: 'Clear both value and search query.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Input',
    href: '/docs/components/input',
    description: 'Text input component with labels, icons, and states.',
  },
  {
    label: 'Switch',
    href: '/docs/components/switch',
    description: 'Toggle switch component for on/off states.',
  },
];

// ─── Controlled Preview Component ────────────────────────────────────────

function ControlledComboboxPreview() {
const combobox = useCombobox('banana');

  const [value, setValue] = useState('');

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setValue('apple')}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Select Apple
        </button>
        <button
          onClick={() => setValue('banana')}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Select Banana
        </button>
        <button
          onClick={() => setValue('')}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Clear
        </button>
      </div>
      <div className="text-sm text-white/40">Selected: {value || 'none'}</div>
      <Combobox
        options={FRUITS}
        value={value}
        onChange={() => setValue}
        placeholder="Select a fruit..."
        clearable
      />
    </div>
  );
}

// ─── Hook Preview Component ──────────────────────────────────────────────

function HookComboboxPreview() {
const combobox = useCombobox('banana');

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => combobox.setValue('cherry')}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Set Cherry
        </button>
        <button
          onClick={() => combobox.setValue('grape')}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Set Grape
        </button>
        <button
          onClick={combobox.clear}
          className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Clear
        </button>
      </div>
      <div className="text-sm text-white/40">
        Value: {combobox.value || 'none'}
      </div>
      <Combobox
        options={FRUITS}
        value={combobox.value}
        onChange={() => combobox.setValue(combobox.value)}
        placeholder="Select a fruit..."
        clearable
      />
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────

export default function ComboboxPage() {
const combobox = useCombobox('banana');

  return (
    <DocsPageLayout
      category={comboboxData.category}
      title={comboboxData.title}
      description={comboboxData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...comboboxData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: 'props', title: 'Props' },
        { id: 'hook-props', title: 'useCombobox Hook' },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Installation
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Install the Combobox component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={comboboxData.installation.command} />
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
            <CodeBlock code={comboboxData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={comboboxData.usage.basic} />
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
        {comboboxData.sections.map((section) => (
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
          All props available on the Combobox component.
        </p>
        <PropsTable props={comboboxData.props} />
      </section>

      <section className="remove-scroll mb-14" id="hook-props">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          useCombobox Hook
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-5 leading-relaxed">
          Programmatically control combobox state with the useCombobox hook.
        </p>
        <PropsTable props={comboboxData.hookProps} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
