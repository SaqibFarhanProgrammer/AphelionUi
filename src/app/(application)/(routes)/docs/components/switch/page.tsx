import { Switch } from '@/registry/components/switch/Switch';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';

const bottomNavItems = [
  {
    label: 'Radio',
    href: '/docs/components/radio',
    description: 'Single selection input component.',
  },
  {
    label: 'Checkbox',
    href: '/docs/components/checkbox',
    description: 'Multi-selection input component.',
  },
];

export default function SwitchPage() {
  const switchData = {
    name: 'Switch',
    slug: 'switch',
    title: 'Switch',
    description:
      'A toggle switch component with support for labels, checked/unchecked states, multiple sizes, themes, and disabled states.',
    category: 'Inputs',
    installation: {
      command: 'shadcn@latest add aphelio/c/switch',
    },
    usage: {
      import: "import { Switch } from '@/components/ui/switch'",
      basic: '<Switch />',
      full: `import { Switch } from '@/components/ui/switch';

export default function App() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <Switch
      label="Enable Notifications"
      checked={enabled}
      onChange={(checked) => setEnabled(checked)}
      theme="dark"
      size="md"
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
            code: "<Switch size='sm' theme='dark' />",
            preview: <Switch size="sm" theme="dark" />,
          },
          {
            label: 'Medium',
            code: "<Switch size='md' theme='dark' />",
            preview: <Switch size="md" theme="dark" />,
          },
          {
            label: 'Large',
            code: "<Switch size='lg' theme='dark' />",
            preview: <Switch size="lg" theme="dark" />,
          },
        ],
      },
      {
        id: 'states',
        title: 'States',
        description: 'Checked and unchecked states of the switch.',
        examples: [
          {
            label: 'Unchecked',
            code: "<Switch checked={false} theme='dark' />",
            preview: <Switch checked={false} theme="dark" />,
          },
          {
            label: 'Checked',
            code: "<Switch checked={true} theme='dark' />",
            preview: <Switch checked={true} theme="dark" />,
          },
          {
            label: 'Default Checked',
            code: "<Switch defaultChecked theme='dark' />",
            preview: <Switch defaultChecked theme="dark" />,
          },
        ],
      },
      {
        id: 'label',
        title: 'Label',
        description: 'Add a descriptive label next to the switch.',
        examples: [
          {
            label: 'With Label',
            code: "<Switch label='Airplane Mode' theme='dark' />",
            preview: <Switch label="Airplane Mode" theme="dark" />,
          },
          {
            label: 'Dynamic Label',
            code: "<Switch labelOn='Enabled' labelOff='Disabled' theme='dark' />",
            preview: (
              <Switch labelOn="Enabled" labelOff="Disabled" theme="dark" />
            ),
          },
        ],
      },
      {
        id: 'disabled',
        title: 'Disabled',
        description: 'Disable the switch for non-interactive states.',
        examples: [
          {
            label: 'Disabled Unchecked',
            code: "<Switch disabled label='Disabled' theme='dark' />",
            preview: <Switch disabled label="Disabled" theme="dark" />,
          },
          {
            label: 'Disabled Checked',
            code: "<Switch disabled checked label='Disabled Checked' theme='dark' />",
            preview: (
              <Switch disabled checked label="Disabled Checked" theme="dark" />
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
            label: 'Large with Label',
            code: "<Switch size='lg' label='Dark Mode' defaultChecked theme='dark' />",
            preview: (
              <Switch size="lg" label="Dark Mode" defaultChecked theme="dark" />
            ),
          },
          {
            label: 'Small Disabled',
            code: "<Switch size='sm' disabled checked label='Locked' theme='dark' />",
            preview: (
              <Switch size="sm" disabled checked label="Locked" theme="dark" />
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
        description: 'Size of the switch.',
      },
      {
        name: 'theme',
        type: "'light' | 'dark'",
        default: "'light'",
        description: 'Color theme of the switch.',
      },
      {
        name: 'label',
        type: 'string',
        default: 'undefined',
        description: 'Static label text displayed next to the switch.',
      },
      {
        name: 'labelOn',
        type: 'string',
        default: 'undefined',
        description: 'Label text shown when the switch is checked.',
      },
      {
        name: 'labelOff',
        type: 'string',
        default: 'undefined',
        description: 'Label text shown when the switch is unchecked.',
      },
      {
        name: 'checked',
        type: 'boolean',
        default: 'undefined',
        description: 'Controlled checked state.',
      },
      {
        name: 'defaultChecked',
        type: 'boolean',
        default: 'false',
        description: 'Default checked state for uncontrolled usage.',
      },
      {
        name: 'onChange',
        type: '(checked: boolean) => void',
        default: 'undefined',
        description: 'Callback fired when the switch is toggled.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the switch.',
      },
      {
        name: 'className',
        type: 'string',
        default: 'undefined',
        description: 'Additional classes for the container.',
      },
      {
        name: 'switchClassName',
        type: 'string',
        default: 'undefined',
        description: 'Additional classes for the switch track.',
      },
      {
        name: 'thumbClassName',
        type: 'string',
        default: 'undefined',
        description: 'Additional classes for the switch thumb.',
      },
      {
        name: 'labelClassName',
        type: 'string',
        default: 'undefined',
        description: 'Additional classes for the label.',
      },
    ],
  };
  return (
    <DocsPageLayout
      category={switchData.category}
      title={switchData.title}
      description={switchData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...switchData.sections.map((section) => ({
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
          Install the Switch component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={switchData.installation.command} />
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
            <CodeBlock code={switchData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={switchData.usage.basic} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Full Example
            </p>
            <CodeBlock code={switchData.usage.full} language="tsx" />
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
        {switchData.sections.map((section) => (
          <DocsSection
            key={section.id}
            title={section.title}
            id={section.id}
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
          All props available on the Switch component.
        </p>
        <PropsTable props={switchData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
