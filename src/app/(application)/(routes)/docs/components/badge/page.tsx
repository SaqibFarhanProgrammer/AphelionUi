'use client';

import { Badge, BadgeGroup } from '@/registry/components/Badge/Badge';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';


const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const IconUser = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const IconTag = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);


const badgeData = {
  name: 'Badge',
  slug: 'badge',
  title: 'Badge',
  description:
    'A versatile badge component with support for variants, colors, sizes, shapes, icons, avatars, dot indicators, prefixes, dismissible states, and grouping.',
  category: 'Display',
  installation: {
    command: 'shadcn@latest add aphelio/c/badge',
  },
  usage: {
    import: "import { Badge, BadgeGroup } from '@/components/ui/badge'",
    basic: '<Badge>Default</Badge>',
  },
  sections: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Five visual variants for different contexts.',
      examples: [
        {
          label: 'Default',
          code: `<Badge>Default</Badge>
<Badge color="success">Success</Badge>
<Badge color="destructive">Danger</Badge>`,
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="destructive">Danger</Badge>
            </div>
          ),
        },
        {
          label: 'Outline',
          code: `<Badge variant="outline">Outline</Badge>
<Badge variant="outline" color="success">Success</Badge>
<Badge variant="outline" color="destructive">Danger</Badge>`,
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Outline</Badge>
              <Badge variant="outline" color="success">Success</Badge>
              <Badge variant="outline" color="destructive">Danger</Badge>
            </div>
          ),
        },
        {
          label: 'Solid',
          code: `<Badge variant="solid">Solid</Badge>
<Badge variant="solid" color="success">Success</Badge>
<Badge variant="solid" color="destructive">Danger</Badge>`,
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge variant="solid">Solid</Badge>
              <Badge variant="solid" color="success">Success</Badge>
              <Badge variant="solid" color="destructive">Danger</Badge>
            </div>
          ),
        },
        {
          label: 'Ghost',
          code: `<Badge variant="ghost">Ghost</Badge>
<Badge variant="ghost" color="success">Success</Badge>
<Badge variant="ghost" color="destructive">Danger</Badge>`,
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge variant="ghost">Ghost</Badge>
              <Badge variant="ghost" color="success">Success</Badge>
              <Badge variant="ghost" color="destructive">Danger</Badge>
            </div>
          ),
        },
        {
          label: 'Soft',
          code: `<Badge variant="soft">Soft</Badge>
<Badge variant="soft" color="success">Success</Badge>
<Badge variant="soft" color="destructive">Danger</Badge>`,
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge variant="soft">Soft</Badge>
              <Badge variant="soft" color="success">Success</Badge>
              <Badge variant="soft" color="destructive">Danger</Badge>
            </div>
          ),
        },
      ],
    },
    {
      id: 'colors',
      title: 'Colors',
      description: 'Seven color options for semantic meaning.',
      examples: [
        {
          label: 'All Colors',
          code: `<Badge>Default</Badge>
<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="success">Success</Badge>
<Badge color="destructive">Destructive</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="info">Info</Badge>`,
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge color="primary">Primary</Badge>
              <Badge color="secondary">Secondary</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="destructive">Destructive</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="info">Info</Badge>
            </div>
          ),
        },
      ],
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Three predefined sizes for different contexts.',
      examples: [
        {
          label: 'Small',
          code: '<Badge size="sm">Small</Badge>',
          preview: <Badge size="sm">Small</Badge>,
        },
        {
          label: 'Medium (Default)',
          code: '<Badge size="md">Medium</Badge>',
          preview: <Badge size="md">Medium</Badge>,
        },
        {
          label: 'Large',
          code: '<Badge size="lg">Large</Badge>',
          preview: <Badge size="lg">Large</Badge>,
        },
      ],
    },
    {
      id: 'shapes',
      title: 'Shapes',
      description: 'Three shape options for different use cases.',
      examples: [
        {
          label: 'Pill (Default)',
          code: '<Badge shape="pill">Pill</Badge>',
          preview: <Badge shape="pill">Pill</Badge>,
        },
        {
          label: 'Circle',
          code: '<Badge shape="circle">1</Badge>',
          preview: <Badge shape="circle">1</Badge>,
        },
        {
          label: 'Square',
          code: '<Badge shape="square">Square</Badge>',
          preview: <Badge shape="square">Square</Badge>,
        },
      ],
    },
    {
      id: 'icons',
      title: 'Icons',
      description: 'Add left or right icons to the badge.',
      examples: [
        {
          label: 'Left Icon',
          code: '<Badge leftIcon={<IconCheck />} color="success">Verified</Badge>',
          preview: <Badge leftIcon={<IconCheck />} color="success">Verified</Badge>,
        },
        {
          label: 'Right Icon',
          code: '<Badge rightIcon={<IconStar />} color="warning">Featured</Badge>',
          preview: <Badge rightIcon={<IconStar />} color="warning">Featured</Badge>,
        },
        {
          label: 'Both Icons',
          code: '<Badge leftIcon={<IconUser />} rightIcon={<IconCheck />} color="success">User</Badge>',
          preview: (
            <Badge leftIcon={<IconUser />} rightIcon={<IconCheck />} color="success">
              User
            </Badge>
          ),
        },
      ],
    },
    {
      id: 'avatar',
      title: 'Avatar',
      description: 'Display a user avatar alongside the badge text.',
      examples: [
        {
          label: 'With Avatar',
          code: `<Badge
  avatarFallback="A"
  color="primary"
>
  Alice Johnson
</Badge>`,
          preview: (
            <Badge
              avatarFallback="A"
              color="primary"
            >
              Alice Johnson
            </Badge>
          ),
        },
        {
          label: 'Avatar with Fallback',
          code: '<Badge avatarFallback="JD" color="destructive">John Doe</Badge>',
          preview: <Badge avatarFallback="JD" color="destructive">John Doe</Badge>,
        },
      ],
    },
    {
      id: 'dot',
      title: 'Dot Indicator',
      description: 'Show a colored dot indicator for status or alerts.',
      examples: [
        {
          label: 'Status Dots',
          code: `<Badge dot color="default">Default</Badge>
<Badge dot dotColor="success" color="success">Online</Badge>
<Badge dot dotColor="destructive" color="destructive">Offline</Badge>
<Badge dot dotColor="warning" color="warning">Pending</Badge>
<Badge dot dotColor="info" color="info">Info</Badge>`,
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge dot color="default">Default</Badge>
              <Badge dot dotColor="success" color="success">Online</Badge>
              <Badge dot dotColor="destructive" color="destructive">Offline</Badge>
              <Badge dot dotColor="warning" color="warning">Pending</Badge>
              <Badge dot dotColor="info" color="info">Info</Badge>
            </div>
          ),
        },
      ],
    },
    {
      id: 'prefix',
      title: 'Prefix',
      description: 'Add a prefix label for additional context.',
      examples: [
        {
          label: 'With Prefix',
          code: `<Badge prefix="Dept:" color="primary">Engineering</Badge>
<Badge prefix="Status:" color="success">Active</Badge>
<Badge prefix="Priority:" color="destructive">High</Badge>`,
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge prefix="Dept:" color="primary">Engineering</Badge>
              <Badge prefix="Status:" color="success">Active</Badge>
              <Badge prefix="Priority:" color="destructive">High</Badge>
            </div>
          ),
        },
      ],
    },
    {
      id: 'dismissible',
      title: 'Dismissible',
      description: 'Add a dismiss button to remove the badge.',
      examples: [
        {
          label: 'Dismissible Badges',
          code: `<Badge dismissible onDismiss={() => {}}>Dismiss me</Badge>
<Badge dismissible color="success" variant="solid">Completed</Badge>
<Badge dismissible color="destructive" variant="outline">Error</Badge>`,
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge dismissible>Dismiss me</Badge>
              <Badge dismissible color="success" variant="solid">Completed</Badge>
              <Badge dismissible color="destructive" variant="outline">Error</Badge>
            </div>
          ),
        },
      ],
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Disable the badge for non-interactive states.',
      examples: [
        {
          label: 'Disabled',
          code: `<Badge disabled>Disabled</Badge>
<Badge disabled color="success">Success</Badge>
<Badge disabled variant="solid" color="destructive">Solid</Badge>`,
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge disabled>Disabled</Badge>
              <Badge disabled color="success">Success</Badge>
              <Badge disabled variant="solid" color="destructive">Solid</Badge>
            </div>
          ),
        },
      ],
    },
    {
      id: 'badge-group',
      title: 'Badge Group',
      description: 'Group multiple badges with configurable gap and wrapping.',
      examples: [
        {
          label: 'Small Gap',
          code: `<BadgeGroup gap="sm">
  <Badge>React</Badge>
  <Badge color="primary">TypeScript</Badge>
  <Badge color="success">Tailwind</Badge>
</BadgeGroup>`,
          preview: (
            <BadgeGroup gap="sm">
              <Badge>React</Badge>
              <Badge color="primary">TypeScript</Badge>
              <Badge color="success">Tailwind</Badge>
            </BadgeGroup>
          ),
        },
        {
          label: 'Medium Gap',
          code: `<BadgeGroup gap="md">
  <Badge variant="outline">Design</Badge>
  <Badge variant="outline" color="success">UX</Badge>
  <Badge variant="outline" color="info">Research</Badge>
</BadgeGroup>`,
          preview: (
            <BadgeGroup gap="md">
              <Badge variant="outline">Design</Badge>
              <Badge variant="outline" color="success">UX</Badge>
              <Badge variant="outline" color="info">Research</Badge>
            </BadgeGroup>
          ),
        },
        {
          label: 'Large Gap with Wrap',
          code: `<BadgeGroup gap="lg" wrap>
  <Badge leftIcon={<IconTag />} color="primary">Frontend</Badge>
  <Badge leftIcon={<IconTag />} color="success">Backend</Badge>
  <Badge leftIcon={<IconTag />} color="destructive">DevOps</Badge>
  <Badge leftIcon={<IconTag />} color="info">Cloud</Badge>
</BadgeGroup>`,
          preview: (
            <BadgeGroup gap="lg" wrap>
              <Badge leftIcon={<IconTag />} color="primary">Frontend</Badge>
              <Badge leftIcon={<IconTag />} color="success">Backend</Badge>
              <Badge leftIcon={<IconTag />} color="destructive">DevOps</Badge>
              <Badge leftIcon={<IconTag />} color="info">Cloud</Badge>
            </BadgeGroup>
          ),
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
          code: `<Badge theme="dark">Default</Badge>
<Badge theme="dark" color="success">Success</Badge>
<Badge theme="dark" variant="solid" color="primary">Solid</Badge>`,
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge theme="dark">Default</Badge>
              <Badge theme="dark" color="success">Success</Badge>
              <Badge theme="dark" variant="solid" color="primary">Solid</Badge>
            </div>
          ),
        },
        {
          label: 'Light Theme',
          code: `<div className="rounded-aphelion-xl bg-white p-4">
  <Badge theme="light">Default</Badge>
  <Badge theme="light" color="success">Success</Badge>
  <Badge theme="light" variant="solid" color="primary">Solid</Badge>
</div>`,
          preview: (
            <div className="rounded-aphelion-xl border border-black/10 bg-white p-4 flex flex-wrap gap-2">
              <Badge theme="light">Default</Badge>
              <Badge theme="light" color="success">Success</Badge>
              <Badge theme="light" variant="solid" color="primary">Solid</Badge>
            </div>
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
          label: 'Status Badges',
          code: `<Badge dot dotColor="success" color="success">Online</Badge>
<Badge dot dotColor="warning" color="warning">Away</Badge>
<Badge dot dotColor="destructive" color="destructive">Offline</Badge>`,
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge dot dotColor="success" color="success">Online</Badge>
              <Badge dot dotColor="warning" color="warning">Away</Badge>
              <Badge dot dotColor="destructive" color="destructive">Offline</Badge>
            </div>
          ),
        },
        {
          label: 'Tag Group',
          code: `<BadgeGroup>
  <Badge variant="soft" color="primary">React</Badge>
  <Badge variant="soft" color="success">TypeScript</Badge>
  <Badge variant="soft" color="warning">Tailwind</Badge>
  <Badge variant="soft" color="info">Next.js</Badge>
</BadgeGroup>`,
          preview: (
            <BadgeGroup>
              <Badge variant="soft" color="primary">React</Badge>
              <Badge variant="soft" color="success">TypeScript</Badge>
              <Badge variant="soft" color="warning">Tailwind</Badge>
              <Badge variant="soft" color="info">Next.js</Badge>
            </BadgeGroup>
          ),
        },
      ],
    },
  ],
  props: [
    {
      name: 'variant',
      type: "'default' | 'outline' | 'solid' | 'ghost' | 'soft'",
      default: "'default'",
      description: 'Visual variant of the badge.',
    },
    {
      name: 'color',
      type: "'default' | 'primary' | 'secondary' | 'success' | 'destructive' | 'warning' | 'info'",
      default: "'default'",
      description: 'Color theme of the badge.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'Size of the badge.',
    },
    {
      name: 'shape',
      type: "'pill' | 'circle' | 'square'",
      default: "'pill'",
      description: 'Shape of the badge.',
    },
    {
      name: 'theme',
      type: "'dark' | 'light'",
      default: "'dark'",
      description: 'Color theme of the badge.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Badge text content.',
    },
    {
      name: 'leftIcon',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Icon rendered on the left side.',
    },
    {
      name: 'rightIcon',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Icon rendered on the right side.',
    },
    {
      name: 'dot',
      type: 'boolean',
      default: 'false',
      description: 'Show a dot indicator on the left.',
    },
    {
      name: 'dotColor',
      type: "'default' | 'success' | 'destructive' | 'warning' | 'info'",
      default: "'default'",
      description: 'Color of the dot indicator.',
    },
    {
      name: 'dismissible',
      type: 'boolean',
      default: 'false',
      description: 'Show a dismiss button.',
    },
    {
      name: 'onDismiss',
      type: '(e: React.MouseEvent<HTMLButtonElement>) => void',
      default: 'undefined',
      description: 'Callback fired when the dismiss button is clicked.',
    },
    {
      name: 'avatar',
      type: 'string',
      default: 'undefined',
      description: 'Avatar image URL.',
    },
    {
      name: 'avatarAlt',
      type: 'string',
      default: 'undefined',
      description: 'Avatar alt text.',
    },
    {
      name: 'avatarFallback',
      type: 'string',
      default: 'undefined',
      description: 'Avatar fallback text (initials).',
    },
    {
      name: 'prefix',
      type: 'string',
      default: 'undefined',
      description: 'Prefix label displayed before the content.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable the badge.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the badge.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Alert',
    href: '/docs/components/alert',
    description: 'Alert notification component.',
  },
  {
    label: 'Button',
    href: '/docs/components/button',
    description: 'Clickable element that triggers an action.',
  },
];


export default function BadgePage() {
  return (
    <DocsPageLayout
      category={badgeData.category}
      title={badgeData.title}
      description={badgeData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...badgeData.sections.map((section) => ({
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
          Install the Badge component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={badgeData.installation.command} />
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
            <CodeBlock code={badgeData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={badgeData.usage.basic} />
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
        {badgeData.sections.map((section) => (
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
          All props available on the Badge component.
        </p>
        <PropsTable props={badgeData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}