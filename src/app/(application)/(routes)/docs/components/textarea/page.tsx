import Textarea from '@/registry/components/textarea/Textarea';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';

const textareaData = {
  name: 'Textarea',
  slug: 'textarea',
  title: 'Textarea',
  description:
    'A multi-line text input component with support for labels, character count, error states, hints, and light/dark themes.',
  category: 'Inputs',
  installation: {
    command: 'shadcn@latest add aphelio/c/textarea',
  },
  usage: {
    import: "import { Textarea } from '@/components/ui/textarea'",
    basic: '<Textarea placeholder="Enter your message..." />',
  },
  sections: [
    {
      id: 'themes',
      title: 'Themes',
      description: 'Two color themes for light and dark backgrounds.',
      examples: [
        {
          label: 'Light Theme',
          code: "<Textarea theme='light' placeholder='Light theme textarea' />",
          preview: (
            <Textarea theme="light" placeholder="Light theme textarea" />
          ),
        },
        {
          label: 'Dark Theme',
          code: "<Textarea theme='dark' placeholder='Dark theme textarea' />",
          preview: <Textarea theme="dark" placeholder="Dark theme textarea" />,
        },
      ],
    },
    {
      id: 'label',
      title: 'Label',
      description: 'Add a descriptive label above the textarea field.',
      examples: [
        {
          label: 'With Label',
          code: "<Textarea label='Bio' placeholder='Tell us about yourself...' />",
          preview: (
            <Textarea
              label="Bio"
              theme={'dark'}
              placeholder="Tell us about yourself..."
            />
          ),
        },
        {
          label: 'Required Label',
          code: "<Textarea label='Description' placeholder='Enter description' required />",
          preview: (
            <Textarea
              theme={'dark'}
              label="Description"
              placeholder="Enter description"
              required
            />
          ),
        },
        {
          label: 'Optional Label',
          code: "<Textarea label='Notes' placeholder='Any additional notes' optional />",
          preview: (
            <Textarea
              label="Notes"
              theme={'dark'}
              placeholder="Any additional notes"
              optional
            />
          ),
        },
      ],
    },
    {
      id: 'hint',
      title: 'Hint',
      description:
        'Provide additional context or instructions below the textarea.',
      examples: [
        {
          label: 'With Hint',
          code: "<Textarea label='Feedback' hint='Your feedback helps us improve.' placeholder='Share your thoughts' />",
          preview: (
            <Textarea
              theme={'dark'}
              label="Feedback"
              hint="Your feedback helps us improve."
              placeholder="Share your thoughts"
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
          code: "<Textarea label='Comments' error='Comments must be at least 10 characters.' placeholder='Enter comments' />",
          preview: (
            <Textarea
              label="Comments"
              theme={'dark'}
              error="Comments must be at least 10 characters."
              placeholder="Enter comments"
            />
          ),
        },
        {
          label: 'Error State Prop',
          code: "<Textarea label='Review' state='error' placeholder='Write a review' />",
          preview: (
            <Textarea
              label="Review"
              theme={'dark'}
              state="error"
              placeholder="Write a review"
            />
          ),
        },
      ],
    },
    {
      id: 'character-count',
      title: 'Character Count',
      description: 'Show character count with optional max length validation.',
      examples: [
        {
          label: 'Show Count',
          code: "<Textarea label='Tweet' showCount placeholder='What's happening?' />",
          preview: (
            <Textarea
              label="Tweet"
              showCount
              placeholder="What's happening?"
              theme={'dark'}
            />
          ),
        },
        {
          label: 'Max Length',
          code: "<Textarea label='Bio' maxLength={160} showCount placeholder='Short bio' />",
          preview: (
            <Textarea
              label="Bio"
              maxLength={160}
              theme={'dark'}
              showCount
              placeholder="Short bio"
            />
          ),
        },
      ],
    },
    {
      id: 'rows',
      title: 'Rows',
      description: 'Control the number of visible text rows.',
      examples: [
        {
          label: '2 Rows',
          code: "<Textarea rows={2} placeholder='Compact textarea' />",
          preview: (
            <Textarea rows={2} placeholder="Compact textarea" theme={'dark'} />
          ),
        },
        {
          label: '6 Rows',
          code: "<Textarea rows={6} placeholder='Expanded textarea' />",
          preview: (
            <Textarea rows={6} placeholder="Expanded textarea" theme={'dark'} />
          ),
        },
      ],
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Disable the textarea for non-interactive states.',
      examples: [
        {
          label: 'Disabled',
          code: "<Textarea disabled placeholder='Disabled textarea' />",
          preview: (
            <Textarea disabled placeholder="Disabled textarea" theme={'dark'} />
          ),
        },
        {
          label: 'Disabled with Label',
          code: "<Textarea label='Summary' disabled value='This field is locked.' />",
          preview: (
            <Textarea
              label="Summary"
              disabled
              value="This field is locked."
              theme={'dark'}
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
          code: "<Textarea label='Bio' hint='Tell us about yourself.' maxLength={200} showCount required placeholder='I am a developer...' />",
          preview: (
            <Textarea
              label="Bio"
              hint="Tell us about yourself."
              maxLength={200}
              theme={'dark'}
              showCount
              required
              placeholder="I am a developer..."
            />
          ),
        },
        {
          label: 'Dark with Error',
          code: "<Textarea theme='dark' label='Message' error='Message is required.' state='error' placeholder='Type something...' />",
          preview: (
            <Textarea
              theme="dark"
              label="Message"
              error="Message is required."
              state="error"
              placeholder="Type something..."
            />
          ),
        },
      ],
    },
  ],
  props: [
    {
      name: 'theme',
      type: "'light' | 'dark'",
      default: "'light'",
      description: 'Color theme of the textarea.',
    },
    {
      name: 'state',
      type: "'default' | 'error'",
      default: "'default'",
      description: 'Visual state of the textarea.',
    },
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Label text displayed above the textarea.',
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Marks the textarea as required.',
    },
    {
      name: 'optional',
      type: 'boolean',
      default: 'false',
      description: 'Marks the textarea as optional.',
    },
    {
      name: 'optionalText',
      type: 'string',
      default: "'optional'",
      description: 'Custom text for the optional indicator.',
    },
    {
      name: 'error',
      type: 'string',
      default: 'undefined',
      description: 'Error message displayed below the textarea.',
    },
    {
      name: 'hint',
      type: 'string',
      default: 'undefined',
      description: 'Hint text displayed below the textarea.',
    },
    {
      name: 'maxLength',
      type: 'number',
      default: 'undefined',
      description: 'Maximum number of characters allowed.',
    },
    {
      name: 'showCount',
      type: 'boolean',
      default: 'false',
      description: 'Shows the character count.',
    },
    {
      name: 'actionButton',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Action button rendered next to the label.',
    },
    {
      name: 'rows',
      type: 'number',
      default: '4',
      description: 'Number of visible text rows.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables the textarea.',
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
    label: 'Select',
    href: '/docs/components/select',
    description: 'Dropdown selection component.',
  },
];

export default function TextareaPage() {
  return (
    <DocsPageLayout
      category={textareaData.category}
      title={textareaData.title}
      description={textareaData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...textareaData.sections.map((section) => ({
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
          Install the Textarea component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={textareaData.installation.command} />
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
            <CodeBlock code={textareaData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={textareaData.usage.basic} />
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
        {textareaData.sections.map((section) => (
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
          All props available on the Textarea component.
        </p>
        <PropsTable props={textareaData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
