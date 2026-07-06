'use client';

import { Card } from '@/registry/components/card/Card';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';

const cardData = {
  name: 'Card',
  slug: 'card',
  title: 'Card',
  description:
    'A versatile card component with support for headers, footers, images, icons, badges, and multiple variants, themes, and sizes.',
  category: 'Layout',
  installation: {
    command: 'shadcn@latest add aphelio/c/card',
  },
  usage: {
    import: "import { Card } from '@/components/ui/card'",
    basic: '<Card>Card content goes here.</Card>',
    full: `import { Card } from '@/components/ui/card';

export default function App() {
  return (
    <Card
      title="Project Overview"
      description="Manage your project settings and team members."
      icon={<span>📁</span>}
      badge={<span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">Active</span>}
      footer={
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-sm bg-neutral-800 text-white rounded-md">Edit</button>
          <button className="px-3 py-1.5 text-sm border border-neutral-700 text-neutral-300 rounded-md">Delete</button>
        </div>
      }
      theme="dark"
      variant="default"
      radius="xl"
      padding="lg"
      hover
    >
      <p className="text-neutral-400 text-sm">Your project is currently active with 12 team members.</p>
    </Card>
  );
}`,
  },
  sections: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Three visual styles for different contexts.',
      examples: [
        {
          label: 'Default',
          code: "<Card theme='dark' variant='default'>Default card with background.</Card>",
          preview: (
            <Card theme="dark" variant="default">
              Default card with background.
            </Card>
          ),
        },
        {
          label: 'Outlined',
          code: "<Card theme='dark' variant='outlined'>Outlined card with transparent background.</Card>",
          preview: (
            <Card theme="dark" variant="outlined">
              Outlined card with transparent background.
            </Card>
          ),
        },
        {
          label: 'Ghost',
          code: "<Card theme='dark' variant='ghost'>Ghost card with no border or background.</Card>",
          preview: (
            <Card theme="dark" variant="ghost">
              Ghost card with no border or background.
            </Card>
          ),
        },
      ],
    },
    {
      id: 'radius',
      title: 'Radius',
      description: 'Five border radius options for different visual styles.',
      examples: [
        {
          label: 'None',
          code: "<Card theme='dark' radius='none'>No border radius.</Card>",
          preview: (
            <Card theme="dark" radius="none">
              No border radius.
            </Card>
          ),
        },
        {
          label: 'Small',
          code: "<Card theme='dark' radius='sm'>Small border radius.</Card>",
          preview: (
            <Card theme="dark" radius="sm">
              Small border radius.
            </Card>
          ),
        },
        {
          label: 'Medium',
          code: "<Card theme='dark' radius='md'>Medium border radius.</Card>",
          preview: (
            <Card theme="dark" radius="md">
              Medium border radius.
            </Card>
          ),
        },
        {
          label: 'Large',
          code: "<Card theme='dark' radius='lg'>Large border radius.</Card>",
          preview: (
            <Card theme="dark" radius="lg">
              Large border radius.
            </Card>
          ),
        },
        {
          label: 'Full',
          code: "<Card theme='dark' radius='full'>Fully rounded corners.</Card>",
          preview: (
            <Card theme="dark" radius="full">
              Fully rounded corners.
            </Card>
          ),
        },
      ],
    },
    {
      id: 'padding',
      title: 'Padding',
      description: 'Five padding sizes for different content densities.',
      examples: [
        {
          label: 'None',
          code: "<Card theme='dark' padding='none'>No padding applied.</Card>",
          preview: (
            <Card theme="dark" padding="none">
              No padding applied.
            </Card>
          ),
        },
        {
          label: 'Small',
          code: "<Card theme='dark' padding='sm'>Small padding.</Card>",
          preview: (
            <Card theme="dark" padding="sm">
              Small padding.
            </Card>
          ),
        },
        {
          label: 'Medium',
          code: "<Card theme='dark' padding='md'>Medium padding.</Card>",
          preview: (
            <Card theme="dark" padding="md">
              Medium padding.
            </Card>
          ),
        },
        {
          label: 'Large',
          code: "<Card theme='dark' padding='lg'>Large padding.</Card>",
          preview: (
            <Card theme="dark" padding="lg">
              Large padding.
            </Card>
          ),
        },
        {
          label: 'Extra Large',
          code: "<Card theme='dark' padding='xl'>Extra large padding.</Card>",
          preview: (
            <Card theme="dark" padding="xl">
              Extra large padding.
            </Card>
          ),
        },
      ],
    },
    {
      id: 'header',
      title: 'Header',
      description:
        'Add a structured header with title, description, icon, and badge.',
      examples: [
        {
          label: 'With Title & Description',
          code: "<Card theme='dark' title='Card Title' description='This is the card description.'>Card body content.</Card>",
          preview: (
            <Card
              theme="dark"
              title="Card Title"
              description="This is the card description."
            >
              Card body content.
            </Card>
          ),
        },
        {
          label: 'With Icon',
          code: "<Card theme='dark' title='Settings' icon={<span>⚙️</span>}>Configure your preferences.</Card>",
          preview: (
            <Card theme="dark" title="Settings" icon={<span>⚙️</span>}>
              Configure your preferences.
            </Card>
          ),
        },
        {
          label: 'With Badge',
          code: "<Card theme='dark' title='Status' badge={<span className='px-2 py-0.5 bg-green-500 text-white text-xs rounded-full'>Online</span>}>System is running smoothly.</Card>",
          preview: (
            <Card
              theme="dark"
              title="Status"
              badge={
                <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                  Online
                </span>
              }
            >
              System is running smoothly.
            </Card>
          ),
        },
        {
          label: 'With Actions',
          code: "<Card theme='dark' title='Actions' actions={<button className='text-xs text-blue-400 hover:text-blue-300'>Edit</button>}>Card with action buttons.</Card>",
          preview: (
            <Card
              theme="dark"
              title="Actions"
              actions={
                <button className="text-xs text-blue-400 hover:text-blue-300">
                  Edit
                </button>
              }
            >
              Card with action buttons.
            </Card>
          ),
        },
      ],
    },
    {
      id: 'footer',
      title: 'Footer',
      description: 'Add a footer section for actions or additional info.',
      examples: [
        {
          label: 'With Footer',
          code: "<Card theme='dark' title='Footer Example' footer={<div className='flex gap-2'><button className='px-3 py-1 text-xs bg-neutral-700 text-white rounded'>Save</button><button className='px-3 py-1 text-xs border border-neutral-600 text-neutral-300 rounded'>Cancel</button></div>}>Content with footer actions.</Card>",
          preview: (
            <Card
              theme="dark"
              title="Footer Example"
              footer={
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs bg-neutral-700 text-white rounded">
                    Save
                  </button>
                  <button className="px-3 py-1 text-xs border border-neutral-600 text-neutral-300 rounded">
                    Cancel
                  </button>
                </div>
              }
            >
              Content with footer actions.
            </Card>
          ),
        },
      ],
    },
    {
      id: 'image',
      title: 'Image',
      description: 'Add a featured image to the top of the card.',
      examples: [
        {
          label: 'With Image',
          code: "<Card theme='dark' title='Image Card' description='Card with a featured image.' image='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop'>Content below the image.</Card>",
          preview: (
            <Card
              theme="dark"
              title="Image Card"
              description="Card with a featured image."
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop"
            ></Card>
          ),
        },
      ],
    },
    {
      id: 'hover',
      title: 'Hover',
      description: 'Enable hover effects for interactive cards.',
      examples: [
        {
          label: 'With Hover',
          code: "<Card theme='dark' hover>Hover over this card to see the effect.</Card>",
          preview: (
            <Card theme="dark" hover>
              Hover over this card to see the effect.
            </Card>
          ),
        },
      ],
    },
    {
      id: 'clickable',
      title: 'Clickable',
      description: 'Make the card interactive with click events.',
      examples: [
        {
          label: 'Clickable Card',
          code: "<Card theme='dark' clickable onClick={() => console.log('Card clicked!')}>Click this card.</Card>",
          preview: (
            <Card
              theme="dark"
              clickable
              onClick={() => console.log('Card clicked!')}
            >
              Click this card.
            </Card>
          ),
        },
      ],
    },
    {
      id: 'combinations',
      title: 'Combinations',
      description: 'Mix and match props for complex card layouts.',
      examples: [
        {
          label: 'Full Featured',
          code: "<Card theme='dark' title='Project' description='Team dashboard' icon={<span>🚀</span>} badge={<span className='px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full'>New</span>} footer={<span className='text-xs text-neutral-400'>Updated 2 mins ago</span>} radius='xl' padding='lg' hover>Your project stats and analytics.</Card>",
          preview: (
            <Card
              theme="dark"
              title="Project"
              description="Team dashboard"
              icon={<span>🚀</span>}
              badge={
                <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                  New
                </span>
              }
              footer={
                <span className="text-xs text-neutral-400">
                  Updated 2 mins ago
                </span>
              }
              radius="lg"
              padding="lg"
              hover
            >
              Your project stats and analytics.
            </Card>
          ),
        },
        {
          label: 'Outlined Ghost',
          code: "<Card theme='dark' variant='outlined' radius='lg' padding='md' title='Outline Style' description='Transparent background with border.'>Clean outlined card design.</Card>",
          preview: (
            <Card
              theme="dark"
              variant="outlined"
              radius="lg"
              padding="md"
              title="Outline Style"
              description="Transparent background with border."
            >
              Clean outlined card design.
            </Card>
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
      description: 'Color theme of the card.',
    },
    {
      name: 'variant',
      type: "'default' | 'outlined' | 'ghost'",
      default: "'default'",
      description: 'Visual style variant of the card.',
    },
    {
      name: 'radius',
      type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
      default: "'md'",
      description: 'Border radius of the card.',
    },
    {
      name: 'padding',
      type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
      default: "'md'",
      description: 'Padding size inside the card.',
    },
    {
      name: 'hover',
      type: 'boolean',
      default: 'false',
      description: 'Enables hover border effect.',
    },
    {
      name: 'clickable',
      type: 'boolean',
      default: 'false',
      description: 'Makes the card focusable and clickable.',
    },
    {
      name: 'title',
      type: 'string',
      default: 'undefined',
      description: 'Title text displayed in the header.',
    },
    {
      name: 'description',
      type: 'string',
      default: 'undefined',
      description: 'Description text displayed below the title.',
    },
    {
      name: 'icon',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Icon displayed next to the title.',
    },
    {
      name: 'badge',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Badge element displayed in the header.',
    },
    {
      name: 'image',
      type: 'string',
      default: 'undefined',
      description: 'URL for the featured image.',
    },
    {
      name: 'imageAlt',
      type: 'string',
      default: "''",
      description: 'Alt text for the featured image.',
    },
    {
      name: 'actions',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Action elements displayed in the header.',
    },
    {
      name: 'header',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Custom header content.',
    },
    {
      name: 'footer',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Footer content displayed at the bottom.',
    },
    {
      name: 'onClick',
      type: '() => void',
      default: 'undefined',
      description: 'Click handler for the card.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the card.',
    },
    {
      name: 'headerClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the header.',
    },
    {
      name: 'bodyClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the body.',
    },
    {
      name: 'footerClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the footer.',
    },
    {
      name: 'imageClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the image container.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Switch',
    href: '/docs/components/switch',
    description: 'Toggle switch component.',
  },
  {
    label: 'Dialog',
    href: '/docs/components/dialog',
    description: 'Modal overlay for confirmations.',
  },
];

export default function CardPage() {
  return (
    <DocsPageLayout
      category={cardData.category}
      title={cardData.title}
      description={cardData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...cardData.sections.map((section) => ({
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
          Install the Card component using the CLI. This will copy the component
          source into your project.
        </p>
        <InstallCommand command={cardData.installation.command} />
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
            <CodeBlock code={cardData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={cardData.usage.basic} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Full Example
            </p>
            <CodeBlock code={cardData.usage.full} language="tsx" />
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
        {cardData.sections.map((section) => (
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
          All props available on the Card component.
        </p>
        <PropsTable props={cardData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
