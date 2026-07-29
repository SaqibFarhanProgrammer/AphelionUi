'use client';

import {
  Popover,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverButton,
  PopoverCheckbox,
  PopoverNotification,
  PopoverShare,
  PopoverStepper,
  PopoverFormRow,
  PopoverDivider,
  usePopover,
} from '@/registry/components/Propover/Propover';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';
import { useState } from 'react';
import { Button } from '@/registry/components/button/Button';


const notifications = [
  {
    name: 'Alice Johnson',
    action: 'commented on',
    target: 'Project Alpha',
    time: '2 minutes ago',
    unread: true,
  },
  {
    name: 'Bob Smith',
    action: 'assigned you to',
    target: 'Task #42',
    time: '1 hour ago',
    unread: true,
  },
  {
    name: 'Carol Davis',
    action: 'mentioned you in',
    target: 'Design Review',
    time: '3 hours ago',
    unread: false,
  },
];

const stepperSteps = [
  {
    title: 'Welcome!',
    description: 'Learn how to use the popover component with this quick tour.',
  },
  {
    title: 'Customization',
    description: 'Popovers can be customized with themes, sizes, and positions.',
  },
  {
    title: 'Done!',
    description: "You've completed the tour. Click finish to close.",
  },
];


const popoverData = {
  name: 'Popover',
  slug: 'popover',
  title: 'Popover',
  description:
    'A flexible popover component with animated transitions, multiple positions, themes, sizes, arrow support, and built-in sub-components for headers, footers, forms, notifications, sharing, and steppers.',
  category: 'Overlay',
  installation: {
    command: 'shadcn@latest add aphelio/c/popover',
  },
  usage: {
    import: `import {
  Popover,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverButton,
  usePopover,
} from '@/components/ui/popover'`,
    basic: `const { open, setOpen } = usePopover();

<Popover
  triggerText="Open Popover"
  triggerVariant="solid"
  side="bottom"
>
  <PopoverHeader title="Title" description="Description" />
  <PopoverBody>
    <p>Your content goes here.</p>
  </PopoverBody>
  <PopoverFooter>
    <PopoverButton variant="ghost" size="sm">Cancel</PopoverButton>
    <PopoverButton variant="solid" size="sm">Confirm</PopoverButton>
  </PopoverFooter>
</Popover>`,
  },
  sections: [
    {
      id: 'sub-components',
      title: 'Sub-Components',
      description: 'Built-in helper components for common popover patterns.',
      examples: [
        {
          label: 'Share',
          code: `<Popover triggerText="Share" triggerVariant="outline" hasArrow size="lg">
  <PopoverHeader title="Share" description="Share with others" />
  <PopoverBody>
  </PopoverBody>
</Popover>`,
          preview: (
            <Popover triggerText="Share" triggerVariant="outline" hasArrow size="lg">
              <PopoverHeader title="Share" description="Share with others" />
              <PopoverBody>
              </PopoverBody>
            </Popover>
          ),
        },
        {
          label: 'Settings',
          code: `<Popover triggerText="Settings" triggerVariant="outline">
  <PopoverHeader title="Preferences" />
  <PopoverBody>
    <div className="space-y-3">
      <PopoverCheckbox label="Enable notifications" />
      <PopoverCheckbox label="Dark mode" checked />
      <PopoverCheckbox label="Auto-save" />
    </div>
  </PopoverBody>
  <PopoverFooter>
    <PopoverButton variant="ghost" size="sm">Reset</PopoverButton>
    <PopoverButton variant="solid" size="sm">Save</PopoverButton>
  </PopoverFooter>
</Popover>`,
          preview: <SettingsPopoverPreview />,
        },
        {
          label: 'Notifications',
          code: `<Popover
  trigger={
    <Button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
      <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-red-500" />
    </Button>
  }
  side="bottom"
  align="end"
  hasArrow
  size="lg"
>
  <PopoverHeader title="Notifications" description="Recent activity" showClose />
  <PopoverBody>
    <div className="max-h-64 space-y-0.5 overflow-y-auto">
      <PopoverNotification name="Alice" action="commented on" target="Project Alpha" time="2m ago" unread avatarFallback="A" />
    </div>
  </PopoverBody>
</Popover>`,
          preview: <NotificationPopoverPreview />,
        },
        {
          label: 'Edit Profile',
          code: `<Popover triggerText="Edit Profile" triggerVariant="solid">
  <PopoverHeader title="Edit Profile" description="Update your info" />
  <PopoverBody>
    <PopoverFormRow label="Name" value="" placeholder="Enter name" />
    <PopoverFormRow label="Email" value="" placeholder="Enter email" />
  </PopoverBody>
  <PopoverFooter>
    <PopoverButton variant="ghost" size="sm">Cancel</PopoverButton>
    <PopoverButton variant="solid" size="sm">Update</PopoverButton>
  </PopoverFooter>
</Popover>`,
          preview: (
            <Popover triggerText="Edit Profile" triggerVariant="solid">
              <PopoverHeader title="Edit Profile" description="Update your info" />
              <PopoverBody>
                <PopoverFormRow label="Name" value="" placeholder="Enter name" />
                <PopoverFormRow label="Email" value="" placeholder="Enter email" />
              </PopoverBody>
              <PopoverFooter>
                <PopoverButton variant="ghost" size="sm">Cancel</PopoverButton>
                <PopoverButton variant="solid" size="sm">Update</PopoverButton>
              </PopoverFooter>
            </Popover>
          ),
        },
        {
          label: 'Stepper / Tour',
          code: `<Popover triggerText="Start Tour" triggerVariant="solid" hasArrow size="lg">
  <PopoverHeader title="Quick Tour" description="Step 1 of 3" />
  <PopoverBody>
    <PopoverStepper
      steps={steps}
      currentStep={0}
      onNext={() => {}}
      onPrev={() => {}}
      onFinish={() => {}}
    />
  </PopoverBody>
</Popover>`,
          preview: <StepperPopoverPreview />,
        },
        {
          label: 'With Divider',
          code: `<Popover triggerText="With Divider" triggerVariant="outline">
  <PopoverHeader title="Divided Content" />
  <PopoverBody>
    <p className="text-sm text-white/60">First section</p>
    <PopoverDivider />
    <p className="text-sm text-white/60">Second section</p>
    <PopoverDivider />
    <p className="text-sm text-white/60">Third section</p>
  </PopoverBody>
</Popover>`,
          preview: (
            <Popover triggerText="With Divider" triggerVariant="outline">
              <PopoverHeader title="Divided Content" />
              <PopoverBody>
                <p className="text-sm text-white/60">First section</p>
                <PopoverDivider />
                <p className="text-sm text-white/60">Second section</p>
                <PopoverDivider />
                <p className="text-sm text-white/60">Third section</p>
              </PopoverBody>
            </Popover>
          ),
        },
      ],
    },
    {
      id: 'positions',
      title: 'Positions',
      description: 'Place the popover on any side of the trigger with alignment options.',
      examples: [
        {
          label: 'Sides',
          code: `<div className="flex flex-wrap items-center gap-6">
  <Popover triggerText="Top" side="top" triggerVariant="outline">
    <PopoverBody><p className="text-sm text-white/60">Top</p></PopoverBody>
  </Popover>
  <Popover triggerText="Bottom" side="bottom" triggerVariant="outline">
    <PopoverBody><p className="text-sm text-white/60">Bottom</p></PopoverBody>
  </Popover>
  <Popover triggerText="Left" side="left" triggerVariant="outline">
    <PopoverBody><p className="text-sm text-white/60">Left</p></PopoverBody>
  </Popover>
  <Popover triggerText="Right" side="right" triggerVariant="outline">
    <PopoverBody><p className="text-sm text-white/60">Right</p></PopoverBody>
  </Popover>
</div>`,
          preview: (
            <div className="flex flex-wrap items-center gap-6">
              <Popover triggerText="Top" side="top" triggerVariant="outline">
                <PopoverBody><p className="text-sm text-white/60">Top</p></PopoverBody>
              </Popover>
              <Popover triggerText="Bottom" side="bottom" triggerVariant="outline">
                <PopoverBody><p className="text-sm text-white/60">Bottom</p></PopoverBody>
              </Popover>
              <Popover triggerText="Left" side="left" triggerVariant="outline">
                <PopoverBody><p className="text-sm text-white/60">Left</p></PopoverBody>
              </Popover>
              <Popover triggerText="Right" side="right" triggerVariant="outline">
                <PopoverBody><p className="text-sm text-white/60">Right</p></PopoverBody>
              </Popover>
            </div>
          ),
        },
        {
          label: 'Alignment',
          code: `<div className="flex flex-wrap items-center gap-6">
  <Popover triggerText="Start" side="bottom" align="start" triggerVariant="outline">
    <PopoverBody><p className="text-sm text-white/60">Start</p></PopoverBody>
  </Popover>
  <Popover triggerText="Center" side="bottom" align="center" triggerVariant="outline">
    <PopoverBody><p className="text-sm text-white/60">Center</p></PopoverBody>
  </Popover>
  <Popover triggerText="End" side="bottom" align="end" triggerVariant="outline">
    <PopoverBody><p className="text-sm text-white/60">End</p></PopoverBody>
  </Popover>
</div>`,
          preview: (
            <div className="flex flex-wrap items-center gap-6">
              <Popover triggerText="Start" side="bottom" align="start" triggerVariant="outline">
                <PopoverBody><p className="text-sm text-white/60">Start</p></PopoverBody>
              </Popover>
              <Popover triggerText="Center" side="bottom" align="center" triggerVariant="outline">
                <PopoverBody><p className="text-sm text-white/60">Center</p></PopoverBody>
              </Popover>
              <Popover triggerText="End" side="bottom" align="end" triggerVariant="outline">
                <PopoverBody><p className="text-sm text-white/60">End</p></PopoverBody>
              </Popover>
            </div>
          ),
        },
      ],
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Three predefined sizes for the popover content.',
      examples: [
        {
          label: 'Size Variants',
          code: `<div className="flex flex-wrap items-center gap-6">
  <Popover triggerText="Small" size="sm" triggerVariant="outline">
    <PopoverBody><p className="text-xs text-white/60">Small</p></PopoverBody>
  </Popover>
  <Popover triggerText="Medium" size="md" triggerVariant="outline">
    <PopoverBody><p className="text-sm text-white/60">Medium (default)</p></PopoverBody>
  </Popover>
  <Popover triggerText="Large" size="lg" triggerVariant="outline">
    <PopoverBody><p className="text-base text-white/60">Large</p></PopoverBody>
  </Popover>
</div>`,
          preview: (
            <div className="flex flex-wrap items-center gap-6">
              <Popover triggerText="Small" size="sm" triggerVariant="outline">
                <PopoverBody><p className="text-xs text-white/60">Small</p></PopoverBody>
              </Popover>
              <Popover triggerText="Medium" size="md" triggerVariant="outline">
                <PopoverBody><p className="text-sm text-white/60">Medium (default)</p></PopoverBody>
              </Popover>
              <Popover triggerText="Large" size="lg" triggerVariant="outline">
                <PopoverBody><p className="text-base text-white/60">Large</p></PopoverBody>
              </Popover>
            </div>
          ),
        },
      ],
    },
    {
      id: 'trigger-variants',
      title: 'Trigger Variants',
      description: 'Four visual styles for the trigger button.',
      examples: [
        {
          label: 'Trigger Styles',
          code: `<div className="flex flex-wrap items-center gap-6">
  <Popover triggerText="Default" triggerVariant="default">
    <PopoverBody><p className="text-sm text-white/60">Default trigger</p></PopoverBody>
  </Popover>
  <Popover triggerText="Outline" triggerVariant="outline">
    <PopoverBody><p className="text-sm text-white/60">Outline trigger</p></PopoverBody>
  </Popover>
  <Popover triggerText="Ghost" triggerVariant="ghost">
    <PopoverBody><p className="text-sm text-white/60">Ghost trigger</p></PopoverBody>
  </Popover>
  <Popover triggerText="Solid" triggerVariant="solid">
    <PopoverBody><p className="text-sm text-white/60">Solid trigger</p></PopoverBody>
  </Popover>
</div>`,
          preview: (
            <div className="flex flex-wrap items-center gap-6">
              <Popover triggerText="Default" triggerVariant="default">
                <PopoverBody><p className="text-sm text-white/60">Default trigger</p></PopoverBody>
              </Popover>
              <Popover triggerText="Outline" triggerVariant="outline">
                <PopoverBody><p className="text-sm text-white/60">Outline trigger</p></PopoverBody>
              </Popover>
              <Popover triggerText="Ghost" triggerVariant="ghost">
                <PopoverBody><p className="text-sm text-white/60">Ghost trigger</p></PopoverBody>
              </Popover>
              <Popover triggerText="Solid" triggerVariant="solid">
                <PopoverBody><p className="text-sm text-white/60">Solid trigger</p></PopoverBody>
              </Popover>
            </div>
          ),
        },
      ],
    },
    {
      id: 'arrow',
      title: 'Arrow',
      description: 'Add an arrow pointing to the trigger element.',
      examples: [
        {
          label: 'Arrow Variants',
          code: `<div className="flex flex-wrap items-center gap-6">
  <Popover triggerText="Bottom Arrow" triggerVariant="solid" hasArrow side="bottom">
    <PopoverBody><p className="text-sm text-white/60">Arrow pointing up</p></PopoverBody>
  </Popover>
  <Popover triggerText="Top Arrow" triggerVariant="outline" hasArrow side="top">
    <PopoverBody><p className="text-sm text-white/60">Arrow pointing down</p></PopoverBody>
  </Popover>
</div>`,
          preview: (
            <div className="flex flex-wrap items-center gap-6">
              <Popover triggerText="Bottom Arrow" triggerVariant="solid" hasArrow side="bottom">
                <PopoverBody><p className="text-sm text-white/60">Arrow pointing up</p></PopoverBody>
              </Popover>
              <Popover triggerText="Top Arrow" triggerVariant="outline" hasArrow side="top">
                <PopoverBody><p className="text-sm text-white/60">Arrow pointing down</p></PopoverBody>
              </Popover>
            </div>
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
          label: 'Dark Theme (Default)',
          code: `<Popover triggerText="Dark" triggerVariant="solid" theme="dark">
  <PopoverHeader title="Dark Mode" theme="dark" />
  <PopoverBody>
    <p className="text-sm text-white/60">Dark theme popover</p>
  </PopoverBody>
  <PopoverFooter theme="dark">
    <PopoverButton variant="ghost" size="sm" theme="dark">Cancel</PopoverButton>
    <PopoverButton variant="solid" size="sm" theme="dark">Confirm</PopoverButton>
  </PopoverFooter>
</Popover>`,
          preview: (
            <Popover triggerText="Dark" triggerVariant="solid" theme="dark">
              <PopoverHeader title="Dark Mode" theme="dark" />
              <PopoverBody>
                <p className="text-sm text-white/60">Dark theme popover</p>
              </PopoverBody>
              <PopoverFooter theme="dark">
                <PopoverButton variant="ghost" size="sm" theme="dark">Cancel</PopoverButton>
                <PopoverButton variant="solid" size="sm" theme="dark">Confirm</PopoverButton>
              </PopoverFooter>
            </Popover>
          ),
        },
        {
          label: 'Light Theme',
          code: `<div className="rounded-aphelion-xl bg-white p-6">
  <Popover triggerText="Light" triggerVariant="outline" theme="light">
    <PopoverHeader title="Light Mode" description="Clean look" theme="light" />
    <PopoverBody>
      <p className="text-sm text-black/60">Light theme popover</p>
    </PopoverBody>
    <PopoverFooter theme="light">
      <PopoverButton variant="ghost" size="sm" theme="light">Cancel</PopoverButton>
      <PopoverButton variant="solid" size="sm" theme="light">Confirm</PopoverButton>
    </PopoverFooter>
  </Popover>
</div>`,
          preview: (
            <div className="rounded-aphelion-xl bg-white p-6">
              <Popover triggerText="Light" triggerVariant="outline" theme="light">
                <PopoverHeader title="Light Mode" description="Clean look" theme="light" />
                <PopoverBody>
                  <p className="text-sm text-black/60">Light theme popover</p>
                </PopoverBody>
                <PopoverFooter theme="light">
                  <PopoverButton variant="ghost" size="sm" theme="light">Cancel</PopoverButton>
                  <PopoverButton variant="solid" size="sm" theme="light">Confirm</PopoverButton>
                </PopoverFooter>
              </Popover>
            </div>
          ),
        },
      ],
    },
    {
      id: 'controlled',
      title: 'Controlled',
      description: 'Control the popover state externally with open and onOpenChange.',
      examples: [
        {
          label: 'Controlled State',
          code: `const [isOpen, setIsOpen] = useState(false);

return (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => setIsOpen(true)} className="...">Open</Button>
      <Button onClick={() => setIsOpen(false)} className="...">Close</Button>
    </div>
    <div className="text-sm text-aphelion-light-text-primary">Status: {isOpen ? 'Open' : 'Closed'}</div>
    <Popover open={isOpen} onOpenChange={setIsOpen} triggerText="Controlled" triggerVariant="solid">
      <PopoverBody>
        <p className="text-sm text-white/60">Controlled externally</p>
      </PopoverBody>
    </Popover>
  </div>
);`,
          preview: <ControlledPopoverPreview />,
        },
      ],
    },
    {
      id: 'hook',
      title: 'usePopover Hook',
      description: 'Programmatically control the popover with the usePopover hook.',
      examples: [
        {
          label: 'Hook Controlled',
          code: `const popover = usePopover();

return (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-2">
      <Button onClick={popover.openPopover}>Open</Button>
      <Button onClick={popover.closePopover}>Close</Button>
      <Button onClick={popover.toggle}>Toggle</Button>
    </div>
    <div className="text-sm text-aphelion-light-text-primary">Status: {popover.open ? 'Open' : 'Closed'}</div>
    <Popover open={popover.open} onOpenChange={popover.setOpen} triggerText="Hook" triggerVariant="solid">
      <PopoverBody>
        <p className="text-sm text-white/60">Controlled by usePopover hook</p>
      </PopoverBody>
    </Popover>
  </div>
);`,
          preview: <HookPopoverPreview />,
        },
      ],
    },
  ],
  props: [
    {
      name: 'open',
      type: 'boolean',
      default: 'undefined',
      description: 'Controlled open state.',
    },
    {
      name: 'defaultOpen',
      type: 'boolean',
      default: 'false',
      description: 'Default open state for uncontrolled usage.',
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      default: 'undefined',
      description: 'Callback fired when open state changes.',
    },
    {
      name: 'trigger',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Custom trigger element (overrides triggerText).',
    },
    {
      name: 'triggerText',
      type: 'string',
      default: '"Open popover"',
      description: 'Text for the default trigger button.',
    },
    {
      name: 'triggerVariant',
      type: "'default' | 'outline' | 'ghost' | 'solid'",
      default: '"default"',
      description: 'Visual variant of the trigger button.',
    },
    {
      name: 'triggerSize',
      type: "'sm' | 'md' | 'lg'",
      default: '"md"',
      description: 'Size of the trigger button.',
    },
    {
      name: 'side',
      type: "'top' | 'bottom' | 'left' | 'right'",
      default: '"bottom"',
      description: 'Position of the popover relative to the trigger.',
    },
    {
      name: 'align',
      type: "'start' | 'center' | 'end'",
      default: '"center"',
      description: 'Alignment of the popover relative to the trigger.',
    },
    {
      name: 'sideOffset',
      type: 'number',
      default: '8',
      description: 'Distance between the popover and trigger in pixels.',
    },
    {
      name: 'alignOffset',
      type: 'number',
      default: '0',
      description: 'Offset along the alignment axis.',
    },
    {
      name: 'hasArrow',
      type: 'boolean',
      default: 'false',
      description: 'Show an arrow pointing to the trigger.',
    },
    {
      name: 'closeOnClickOutside',
      type: 'boolean',
      default: 'true',
      description: 'Close popover when clicking outside.',
    },
    {
      name: 'closeOnEscape',
      type: 'boolean',
      default: 'true',
      description: 'Close popover when Escape key is pressed.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable the trigger button.',
    },
    {
      name: 'theme',
      type: "'dark' | 'light'",
      default: '"dark"',
      description: 'Color theme of the popover.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: '"md"',
      description: 'Size of the popover content area.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the container.',
    },
    {
      name: 'contentClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the content.',
    },
    {
      name: 'triggerClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the trigger.',
    },
    {
      name: 'arrowClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the arrow.',
    },
  ],
  hookProps: [
    {
      name: 'open',
      type: 'boolean',
      default: 'false',
      description: 'Current open state.',
    },
    {
      name: 'setOpen',
      type: '(open: boolean) => void',
      default: 'undefined',
      description: 'Set the open state directly.',
    },
    {
      name: 'toggle',
      type: '() => void',
      default: 'undefined',
      description: 'Toggle the open state.',
    },
    {
      name: 'openPopover',
      type: '() => void',
      default: 'undefined',
      description: 'Open the popover.',
    },
    {
      name: 'closePopover',
      type: '() => void',
      default: 'undefined',
      description: 'Close the popover.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Calendar',
    href: '/docs/components/calendar',
    description: 'Date picker with single, range, and multiple selection.',
  },
  {
    label: 'Dropdown',
    href: '/docs/components/dropdown',
    description: 'Dropdown menu component.',
  },
];


function SettingsPopoverPreview() {
  const [checked, setChecked] = useState(false);
  return (
    <Popover triggerText="Settings" triggerVariant="outline">
      <PopoverHeader title="Preferences" />
      <PopoverBody>
        <div className="space-y-3">
          <PopoverCheckbox label="Enable notifications" checked={checked} onChange={setChecked} />
          <PopoverCheckbox label="Dark mode" checked />
          <PopoverCheckbox label="Auto-save" />
        </div>
      </PopoverBody>
      <PopoverFooter>
        <PopoverButton variant="ghost" size="sm">Reset</PopoverButton>
        <PopoverButton variant="solid" size="sm">Save</PopoverButton>
      </PopoverFooter>
    </Popover>
  );
}

function NotificationPopoverPreview() {
  return (
    <Popover
      trigger={
        <Button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 hover:border-white/20 hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-red-500" />
        </Button>
      }
      side="bottom"
      align="end"
      hasArrow
      size="lg"
    >
      <PopoverHeader title="Notifications" description="Recent activity" showClose />
      <PopoverBody>
        <div className="max-h-64 space-y-0.5 overflow-y-auto">
          {notifications.map((notif, i) => (
            <PopoverNotification
              key={i}
              name={notif.name}
              action={notif.action}
              target={notif.target}
              time={notif.time}
              unread={notif.unread}
              avatarFallback={notif.name.charAt(0)}
            />
          ))}
        </div>
      </PopoverBody>
      <PopoverFooter>
        <PopoverButton variant="ghost" size="sm">Mark all read</PopoverButton>
        <PopoverButton variant="outline" size="sm">View all</PopoverButton>
      </PopoverFooter>
    </Popover>
  );
}

function StepperPopoverPreview() {
  const [step, setStep] = useState(0);
  const popover = usePopover();
  return (
    <Popover
      open={popover.open}
      onOpenChange={popover.setOpen}
      triggerText="Start Tour"
      triggerVariant="solid"
      hasArrow
      size="lg"
    >
      <PopoverHeader title="Quick Tour" description={`Step ${step + 1} of ${stepperSteps.length}`} />
      <PopoverBody>
        <PopoverStepper
          steps={stepperSteps}
          currentStep={step}
          onNext={() => setStep((s) => Math.min(s + 1, stepperSteps.length - 1))}
          onPrev={() => setStep((s) => Math.max(s - 1, 0))}
          onFinish={() => {
            popover.closePopover();
            setStep(0);
          }}
        />
      </PopoverBody>
    </Popover>
  );
}

function ControlledPopoverPreview() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-aphelion-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Open
        </Button>
        <Button
          onClick={() => setIsOpen(false)}
          className="rounded-aphelion-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Close
        </Button>
      </div>
      <div className="text-sm text-aphelion-light-text-primary">Status: {isOpen ? 'Open' : 'Closed'}</div>
      <Popover open={isOpen} onOpenChange={setIsOpen} triggerText="Controlled" triggerVariant="solid">
        <PopoverBody>
          <p className="text-sm text-white/60">Controlled externally</p>
        </PopoverBody>
      </Popover>
    </div>
  );
}

function HookPopoverPreview() {
  const popover = usePopover();
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={popover.openPopover}
          className="rounded-aphelion-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Open
        </Button>
        <Button
          onClick={popover.closePopover}
          className="rounded-aphelion-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Close
        </Button>
        <Button
          onClick={popover.toggle}
          className="rounded-aphelion-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-white/10 text-white"
        >
          Toggle
        </Button>
      </div>
      <div className="text-sm text-aphelion-light-text-primary">Status: {popover.open ? 'Open' : 'Closed'}</div>
      <Popover open={popover.open} onOpenChange={popover.setOpen} triggerText="Hook" triggerVariant="solid">
        <PopoverBody>
          <p className="text-sm text-white/60">Controlled by usePopover hook</p>
        </PopoverBody>
      </Popover>
    </div>
  );
}


export default function PopoverPage() {
  return (
    <DocsPageLayout
      category={popoverData.category}
      title={popoverData.title}
      description={popoverData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...popoverData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: 'props', title: 'Props' },
        { id: 'hook-props', title: 'usePopover Hook' },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Installation
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Install the Popover component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={popoverData.installation.command} />
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
            <CodeBlock code={popoverData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={popoverData.usage.basic} />
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
        {popoverData.sections.map((section) => (
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
          All props available on the Popover component.
        </p>
        <PropsTable props={popoverData.props} />
      </section>

      <section className="remove-scroll mb-14" id="hook-props">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          usePopover Hook
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-5 leading-relaxed">
          Programmatically control popover state with the usePopover hook.
        </p>
        <PropsTable props={popoverData.hookProps} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}