'use client';

import {
  Card,
  CardInput,
  CardTextarea,
  CardButton,
  CardSwitch,
  CardSelect,
  CardTabs,
  CardSlider,
} from '@/registry/components/Card/Card';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';
import { useState } from 'react';
import {
  ArrowRight,
  Check,
  CreditCard,
  Crown,
  Edit,
  Eye,
  Globe,
  Heart,
  Info,
  Lock,
  Mail,
  MessageSquare,
  Save,
  Share2,
  Star,
  User,
  UserPlus,
} from 'lucide-react';

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'in', label: 'India' },
];

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'zh', label: 'Chinese' },
  { value: 'ja', label: 'Japanese' },
];

const plans = [
  { value: 'basic', label: 'Basic - $9.99/mo' },
  { value: 'pro', label: 'Pro - $19.99/mo' },
  { value: 'enterprise', label: 'Enterprise - $49.99/mo' },
];

const settingsTabs = [
  { id: 'account', label: 'Account' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'privacy', label: 'Privacy' },
];

const cardData = {
  name: 'Card',
  slug: 'card',
  title: 'Card',
  description:
    'A comprehensive card component system with variants, themes, sizes, hover effects, image support, and a full suite of form sub-components.',
  category: 'Layout',
  installation: {
    command: 'shadcn@latest add aphelio/c/card',
  },
  usage: {
    import: "import { Card } from '@/components/ui/card'",
    basic: `<Card title="Card Title" description="Card description">
  <p>Your content goes here.</p>
</Card>`,
  },
  sections: [
    {
      id: 'basic-cards',
      title: 'Basic Cards',
      description: 'Three core variants for different visual styles.',
      examples: [
        {
          label: 'Default',
          code: `<Card
  theme="dark"
  title="Default Card"
  description="A standard card with default styling"
>
  <p className="text-white/60">
    This card comes with a solid background and subtle border.
    Perfect for displaying content in a clean, structured way.
  </p>
  <div className="mt-4 flex gap-2">
    <CardButton size="sm" variant="solid">
      <Check className="mr-1 h-3 w-3" />
      Confirm
    </CardButton>
    <CardButton size="sm" variant="outline">
      Cancel
    </CardButton>
  </div>
</Card>`,
          preview: (
            <Card
              theme="dark"
              title="Default Card"
              description="A standard card with default styling"
            >
              <p className="text-white/60">
                This card comes with a solid background and subtle border.
                Perfect for displaying content in a clean, structured way.
              </p>
              <div className="mt-4 flex gap-2">
                <CardButton size="sm" theme="dark" variant="solid">
                  <Check className="mr-1 h-3 w-3" />
                  Confirm
                </CardButton>
                <CardButton size="sm" theme="dark" variant="outline">
                  Cancel
                </CardButton>
              </div>
            </Card>
          ),
        },
        {
          label: 'Outlined',
          code: `<Card
  theme="dark"
  variant="outlined"
  title="Outlined Card"
  description="Transparent with clear borders"
>
  <p className="text-white/60">
    This card has a transparent background with a visible border.
    Great for minimal designs and separating content.
  </p>
  <div className="mt-4 flex gap-2">
    <CardButton size="sm" variant="outline">
      <Eye className="mr-1 h-3 w-3" />
      Preview
    </CardButton>
  </div>
</Card>`,
          preview: (
            <Card
              theme="dark"
              variant="outlined"
              title="Outlined Card"
              description="Transparent with clear borders"
            >
              <p className="text-white/60">
                This card has a transparent background with a visible border.
                Great for minimal designs and separating content.
              </p>
              <div className="mt-4 flex gap-2">
                <CardButton size="sm" theme="dark" variant="outline">
                  <Eye className="mr-1 h-3 w-3" />
                  Preview
                </CardButton>
              </div>
            </Card>
          ),
        },
        {
          label: 'Ghost',
          code: `<Card
  theme="dark"
  variant="ghost"
  title="Ghost Card"
  description="Minimal with no visible border"
  icon={<Info className="h-5 w-5 text-blue-400" />}
>
  <p className="text-white/60">
    This card has no border, making it ideal for subtle content
    sections that don't need visual separation.
  </p>
</Card>`,
          preview: (
            <Card
              theme="dark"
              variant="ghost"
              title="Ghost Card"
              description="Minimal with no visible border"
              icon={<Info className="h-5 w-5 text-blue-400" />}
            >
              <p className="text-white/60">
                This card has no border, making it ideal for subtle content
                sections that don't need visual separation.
              </p>
            </Card>
          ),
        },
      ],
    },
    {
      id: 'interactive',
      title: 'Interactive Cards',
      description: 'Cards with hover effects and click handling.',
      examples: [
        {
          label: 'Hover & Click',
          code: `<Card
  theme="dark"
  hover
  clickable
  title="Hover & Click Card"
  description="Hover and click effects built-in"
  onClick={() => alert("Card clicked!")}
>
  <p className="text-white/60">
    This card responds to hover and click interactions.
    Try hovering and clicking to see the effects in action!
  </p>
  <div className="mt-4">
    <CardButton size="sm" variant="solid">
      <ArrowRight className="mr-1 h-3 w-3" />
      Learn More
    </CardButton>
  </div>
</Card>`,
          preview: (
            <Card
              theme="dark"
              hover
              clickable
              title="Hover & Click Card"
              description="Hover and click effects built-in"
              onClick={() => alert('Card clicked!')}
            >
              <p className="text-white/60">
                This card responds to hover and click interactions. Try hovering
                and clicking to see the effects in action!
              </p>
              <div className="mt-4">
                <CardButton size="sm" theme="dark" variant="solid">
                  <ArrowRight className="mr-1 h-3 w-3" />
                  Learn More
                </CardButton>
              </div>
            </Card>
          ),
        },
        {
          label: 'With Actions',
          code: `<Card
  theme="dark"
  hover
  title="Card with Actions"
  description="Multiple actions in footer"
  actions={
    <div className="flex w-full gap-2">
      <CardButton size="sm" variant="outline" className="flex-1">
        <Heart className="mr-1 h-3 w-3" />
        Like
      </CardButton>
      <CardButton size="sm" variant="outline" className="flex-1">
        <Share2 className="mr-1 h-3 w-3" />
        Share
      </CardButton>
      <CardButton size="sm" variant="solid" className="flex-1">
        <Edit className="mr-1 h-3 w-3" />
        Edit
      </CardButton>
    </div>
  }
>
  <p className="text-white/60">
    Cards can have multiple action buttons in the footer.
    This is great for content that needs user interaction.
  </p>
</Card>`,
          preview: (
            <Card
              theme="dark"
              hover
              title="Card with Actions"
              description="Multiple actions in footer"
              actions={
                <div className="flex w-full gap-2">
                  <CardButton
                    size="sm"
                    theme="dark"
                    variant="outline"
                    className="flex-1"
                  >
                    <Heart className="mr-1 h-3 w-3" />
                    Like
                  </CardButton>
                  <CardButton
                    size="sm"
                    theme="dark"
                    variant="outline"
                    className="flex-1"
                  >
                    <Share2 className="mr-1 h-3 w-3" />
                    Share
                  </CardButton>
                  <CardButton
                    size="sm"
                    theme="dark"
                    variant="solid"
                    className="flex-1"
                  >
                    <Edit className="mr-1 h-3 w-3" />
                    Edit
                  </CardButton>
                </div>
              }
            >
              <p className="text-white/60">
                Cards can have multiple action buttons in the footer. This is
                great for content that needs user interaction.
              </p>
            </Card>
          ),
        },
      ],
    },
    {
      id: 'form',
      title: 'Form Components',
      description: 'Complete form layouts using Card with sub-components.',
      examples: [
        {
          label: 'User Registration',
          code: `<Card
  theme="dark"
  title="User Registration"
  description="Create a new account"
  icon={<UserPlus className="h-5 w-5" />}
>
  <div className="space-y-4">
    <CardInput
      theme="dark"
      label="Full Name"
      placeholder="Enter your full name"
      helperText="This will be your display name"
      leftIcon={<User className="h-4 w-4" />}
    />
    <CardInput
      theme="dark"
      label="Email Address"
      type="email"
      placeholder="Enter your email"
      leftIcon={<Mail className="h-4 w-4" />}
    />
    <CardInput
      theme="dark"
      label="Password"
      type="password"
      placeholder="Choose a strong password"
      leftIcon={<Lock className="h-4 w-4" />}
      error="Password must be at least 8 characters"
    />
    <CardSelect
      theme="dark"
      label="Country"
      placeholder="Select your country"
      options={countries}
      leftIcon={<Globe className="h-4 w-4" />}
    />
    <CardSwitch
      theme="dark"
      label="I agree to the Terms & Conditions"
      defaultChecked
    />
    <CardButton theme="dark" variant="solid" size="full">
      <UserPlus className="mr-2 h-4 w-4" />
      Create Account
    </CardButton>
  </div>
</Card>`,
          preview: (
            <Card
              theme="dark"
              title="User Registration"
              description="Create a new account"
              icon={<UserPlus className="h-5 w-5" />}
            >
              <div className="space-y-4">
                <CardInput
                  theme="dark"
                  label="Full Name"
                  placeholder="Enter your full name"
                  helperText="This will be your display name"
                  leftIcon={<User className="h-4 w-4" />}
                />
                <CardInput
                  theme="dark"
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  leftIcon={<Mail className="h-4 w-4" />}
                />
                <CardInput
                  theme="dark"
                  label="Password"
                  type="password"
                  placeholder="Choose a strong password"
                  leftIcon={<Lock className="h-4 w-4" />}
                  error="Password must be at least 8 characters"
                />
                <CardSelect
                  theme="dark"
                  label="Country"
                  placeholder="Select your country"
                  options={countries}
                  leftIcon={<Globe className="h-4 w-4" />}
                />
                <CardSwitch
                  theme="dark"
                  label="I agree to the Terms & Conditions"
                  defaultChecked
                />
                <CardButton theme="dark" variant="solid" size="full">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Create Account
                </CardButton>
              </div>
            </Card>
          ),
        },
        {
          label: 'Settings Panel',
          code: `<Card
  theme="dark"
  title="Settings"
  description="Manage your preferences"
>
  <CardTabs
    theme="dark"
    tabs={settingsTabs}
    activeTab="account"
    onTabChange={() => {}}
  />
  <div className="mt-4 space-y-4">
    <CardInput
      theme="dark"
      label="Username"
      defaultValue="johndoe"
      leftIcon={<User className="h-4 w-4" />}
    />
    <CardInput
      theme="dark"
      label="Email"
      type="email"
      defaultValue="john@example.com"
      leftIcon={<Mail className="h-4 w-4" />}
    />
    <CardSelect
      theme="dark"
      label="Language"
      placeholder="Select language"
      options={languages}
      defaultValue="en"
    />
  </div>
  <div className="mt-4 space-y-3">
    <CardSwitch theme="dark" label="Email notifications" defaultChecked />
    <CardSwitch theme="dark" label="Push notifications" />
    <CardSwitch theme="dark" label="Weekly digest" defaultChecked />
  </div>
  <div className="mt-4">
    <CardButton theme="dark" variant="solid" size="full">
      <Save className="mr-2 h-4 w-4" />
      Save Settings
    </CardButton>
  </div>
</Card>`,
          preview: <SettingsCardPreview />,
        },
      ],
    },
    {
      id: 'advanced',
      title: 'Advanced Components',
      description: 'Complex layouts with sliders, textareas, and pricing.',
      examples: [
        {
          label: 'Feedback Form',
          code: `<Card
  theme="dark"
  title="Feedback Form"
  description="Help us improve"
  icon={<MessageSquare className="h-5 w-5" />}
>
  <div className="space-y-4">
    <CardSlider
      theme="dark"
      label="Satisfaction: 50%"
      value={50}
      min={0}
      max={100}
      step={5}
    />
    <CardTextarea
      theme="dark"
      label="Your Feedback"
      placeholder="Tell us what you think..."
      rows={4}
    />
    <CardButton theme="dark" variant="solid" size="full">
      Submit Feedback
    </CardButton>
  </div>
</Card>`,
          preview: <FeedbackCardPreview />,
        },
        {
          label: 'Subscription Plan',
          code: `<Card
  theme="dark"
  title="Subscription Plan"
  description="Choose your plan"
  icon={<Crown className="h-5 w-5 text-yellow-400" />}
>
  <div className="space-y-4">
    <CardSelect
      theme="dark"
      label="Plan"
      options={plans}
      defaultValue="pro"
    />
    <CardSwitch
      theme="dark"
      label="Annual billing (Save 20%)"
    />
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-white/60">Total</p>
          <p className="text-2xl font-bold text-white">
            $19.99 <span className="text-base font-normal opacity-60">/mo</span>
          </p>
        </div>
        <CardButton theme="dark" variant="solid" size="sm">
          <CreditCard className="mr-1 h-3 w-3" />
          Subscribe
        </CardButton>
      </div>
    </div>
  </div>
</Card>`,
          preview: <SubscriptionCardPreview />,
        },
      ],
    },
    {
      id: 'images',
      title: 'Cards with Images',
      description: 'Display media content with optional badges and actions.',
      examples: [
        {
          label: 'With Image & Badge',
          code: `<Card
  theme="dark"
  title="Mountain View"
  description="Beautiful landscape"
  badge={
    <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
      Popular
    </span>
  }
>
  <p className="text-white/60">
    Discover the breathtaking beauty of mountain landscapes.
  </p>
</Card>`,
          preview: (
            <Card
              theme="dark"
              title="Mountain View"
              description="Beautiful landscape"
              badge={
                <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                  Popular
                </span>
              }
            >
              <p className="text-white/60">
                Discover the breathtaking beauty of mountain landscapes.
              </p>
            </Card>
          ),
        },
        {
          label: 'With Image & Actions',
          code: `<Card
  theme="dark"
  title="City Lights"
  description="Urban night scene"
>
  <p className="text-white/60">
    Explore the vibrant energy of the city after dark.
  </p>
  <div className="mt-3 flex gap-2">
    <CardButton size="sm" variant="outline">
      <Heart className="mr-1 h-3 w-3" />
      Save
    </CardButton>
  </div>
</Card>`,
          preview: (
            <Card
              theme="dark"
              title="City Lights"
              description="Urban night scene"
            >
              <p className="text-white/60">
                Explore the vibrant energy of the city after dark.
              </p>
              <div className="mt-3 flex gap-2">
                <CardButton size="sm" theme="dark" variant="outline">
                  <Heart className="mr-1 h-3 w-3" />
                  Save
                </CardButton>
              </div>
            </Card>
          ),
        },
        {
          label: 'With Image & Footer Actions',
          code: `<Card
  theme="dark"
  title="Ocean View"
  description="Serene coastal scene"
  actions={
    <div className="flex w-full gap-2">
      <CardButton size="sm" variant="outline" className="flex-1">
        <Star className="mr-1 h-3 w-3" />
        Rate
      </CardButton>
      <CardButton size="sm" variant="solid" className="flex-1">
        View
      </CardButton>
    </div>
  }
>
  <p className="text-white/60">
    Experience the calming beauty of ocean waves.
  </p>
</Card>`,
          preview: (
            <Card
              theme="dark"
              title="Ocean View"
              description="Serene coastal scene"
              actions={
                <div className="flex w-full gap-2">
                  <CardButton
                    size="sm"
                    theme="dark"
                    variant="outline"
                    className="flex-1"
                  >
                    <Star className="mr-1 h-3 w-3" />
                    Rate
                  </CardButton>
                  <CardButton
                    size="sm"
                    theme="dark"
                    variant="solid"
                    className="flex-1"
                  >
                    View
                  </CardButton>
                </div>
              }
            >
              <p className="text-white/60">
                Experience the calming beauty of ocean waves.
              </p>
            </Card>
          ),
        },
      ],
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Four predefined sizes for different content needs.',
      examples: [
        {
          label: 'Small',
          code: `<Card theme="dark" size="sm" title="Small" description="Compact card">
  <p className="text-white/60 text-sm">Perfect for sidebars.</p>
</Card>`,
          preview: (
            <Card
              theme="dark"
              size="sm"
              title="Small"
              description="Compact card"
            >
              <p className="text-white/60 text-sm">Perfect for sidebars.</p>
            </Card>
          ),
        },
        {
          label: 'Medium',
          code: `<Card theme="dark" size="md" title="Medium" description="Standard card">
  <p className="text-white/60">Balanced size for most use cases.</p>
</Card>`,
          preview: (
            <Card
              theme="dark"
              size="md"
              title="Medium"
              description="Standard card"
            >
              <p className="text-white/60">Balanced size for most use cases.</p>
            </Card>
          ),
        },
        {
          label: 'Large',
          code: `<Card theme="dark" size="lg" title="Large" description="Bigger card">
  <p className="text-white/60">More space for content.</p>
</Card>`,
          preview: (
            <Card
              theme="dark"
              size="lg"
              title="Large"
              description="Bigger card"
            >
              <p className="text-white/60">More space for content.</p>
            </Card>
          ),
        },
        {
          label: 'Extra Large',
          code: `<Card theme="dark" size="xl" title="Extra Large" description="Maximum size">
  <p className="text-white/60">For important content.</p>
</Card>`,
          preview: (
            <Card
              theme="dark"
              size="xl"
              title="Extra Large"
              description="Maximum size"
            >
              <p className="text-white/60">For important content.</p>
            </Card>
          ),
        },
      ],
    },
  ],
  props: [
    {
      name: 'theme',
      type: "'dark' | 'light'",
      default: "'dark'",
      description: 'Color theme of the card.',
    },
    {
      name: 'variant',
      type: "'default' | 'outlined' | 'ghost'",
      default: "'default'",
      description: 'Visual style variant.',
    },
    {
      name: 'radius',
      type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
      default: "'xl'",
      description: 'Border radius of the card.',
    },
    {
      name: 'padding',
      type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
      default: "'lg'",
      description: 'Internal padding size.',
    },
    {
      name: 'width',
      type: "'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
      default: "'md'",
      description: 'Width of the card.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg' | 'xl'",
      default: "'md'",
      description: 'Predefined size shorthand (padding + width combo).',
    },
    {
      name: 'hover',
      type: 'boolean',
      default: 'false',
      description: 'Enable hover effects.',
    },
    {
      name: 'clickable',
      type: 'boolean',
      default: 'false',
      description: 'Enable click cursor and pointer events.',
    },
    {
      name: 'title',
      type: 'string',
      default: 'undefined',
      description: 'Card title text displayed in the header.',
    },
    {
      name: 'description',
      type: 'string',
      default: 'undefined',
      description: 'Card description text displayed in the header.',
    },
    {
      name: 'icon',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Icon displayed in the header area.',
    },
    {
      name: 'badge',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Badge element shown on image or in header.',
    },
    {
      name: 'image',
      type: 'string',
      default: 'undefined',
      description: 'Image URL for the card header.',
    },
    {
      name: 'imageAlt',
      type: 'string',
      default: "''",
      description: 'Alt text for the image.',
    },
    {
      name: 'actions',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Action elements rendered in the footer area.',
    },
    {
      name: 'header',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Custom header content that overrides the default header.',
    },
    {
      name: 'footer',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Custom footer content that overrides the default footer.',
    },
    {
      name: 'onClick',
      type: '() => void',
      default: 'undefined',
      description: 'Click handler for the entire card.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional CSS classes for the card container.',
    },
    {
      name: 'headerClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the header section.',
    },
    {
      name: 'bodyClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the body section.',
    },
    {
      name: 'footerClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the footer section.',
    },
    {
      name: 'titleClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the title element.',
    },
    {
      name: 'descriptionClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the description element.',
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
    label: 'Input',
    href: '/docs/components/input',
    description: 'Text input with labels and icons.',
  },
];

function SettingsCardPreview() {
  const [settingsTab, setSettingsTab] = useState('account');

  return (
    <Card theme="dark" title="Settings" description="Manage your preferences">
      <CardTabs
        theme="dark"
        tabs={settingsTabs}
        activeTab={settingsTab}
        onTabChange={setSettingsTab}
      />

      {settingsTab === 'account' && (
        <div className="mt-4 space-y-4">
          <CardInput
            theme="dark"
            label="Username"
            defaultValue="johndoe"
            leftIcon={<User className="h-4 w-4" />}
          />
          <CardInput
            theme="dark"
            label="Email"
            type="email"
            defaultValue="john@example.com"
            leftIcon={<Mail className="h-4 w-4" />}
          />
          <CardSelect
            theme="dark"
            label="Language"
            placeholder="Select language"
            options={languages}
            defaultValue="en"
          />
        </div>
      )}

      {settingsTab === 'notifications' && (
        <div className="mt-4 space-y-3">
          <CardSwitch theme="dark" label="Email notifications" defaultChecked />
          <CardSwitch theme="dark" label="Push notifications" />
          <CardSwitch theme="dark" label="Weekly digest" defaultChecked />
        </div>
      )}

      {settingsTab === 'privacy' && (
        <div className="mt-4 space-y-3">
          <CardSwitch theme="dark" label="Make profile private" />
          <CardSwitch theme="dark" label="Show online status" defaultChecked />
          <CardSwitch theme="dark" label="Allow search engines to index" />
        </div>
      )}

      <div className="mt-4">
        <CardButton theme="dark" variant="solid" size="full">
          <Save className="mr-2 h-4 w-4" />
          Save Settings
        </CardButton>
      </div>
    </Card>
  );
}

function FeedbackCardPreview() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <Card
      theme="dark"
      title="Feedback Form"
      description="Help us improve"
      icon={<MessageSquare className="h-5 w-5" />}
    >
      <div className="space-y-4">
        <CardSlider
          theme="dark"
          label={`Satisfaction: ${sliderValue}%`}
          value={sliderValue}
          onChange={setSliderValue}
          min={0}
          max={100}
          step={5}
        />
        <CardTextarea
          theme="dark"
          label="Your Feedback"
          placeholder="Tell us what you think..."
          rows={4}
        />
        <CardButton theme="dark" variant="solid" size="full">
          Submit Feedback
        </CardButton>
      </div>
    </Card>
  );
}

function SubscriptionCardPreview() {
  return (
    <Card
      theme="dark"
      title="Subscription Plan"
      description="Choose your plan"
      icon={<Crown className="h-5 w-5 text-yellow-400" />}
    >
      <div className="space-y-4">
        <CardSelect
          theme="dark"
          label="Plan"
          options={plans}
          defaultValue="pro"
        />
        <CardSwitch theme="dark" label="Annual billing (Save 20%)" />
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/60">Total</p>
              <p className="text-2xl font-bold text-white">
                $19.99{' '}
                <span className="text-base font-normal opacity-60">/mo</span>
              </p>
            </div>
            <CardButton theme="dark" variant="solid" size="sm">
              <CreditCard className="mr-1 h-3 w-3" />
              Subscribe
            </CardButton>
          </div>
        </div>
      </div>
    </Card>
  );
}

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
      {/* ─── Installation ──────────────────────────────────────────── */}
      <section className="mb-14" id="installation">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Installation
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Install the Card component system using the CLI. This will copy all
          sub-components into your project.
        </p>
        <InstallCommand command={cardData.installation.command} />
      </section>

      {/* ─── Usage ─────────────────────────────────────────────────── */}
      <section className="mb-14" id="usage">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Usage
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Import the components and use them in your application.
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
            <CodeBlock code={cardData.usage.basic} language="tsx" />
          </div>
        </div>
      </section>

      {/* ─── Examples ────────────────────────────────────────────────── */}
      <section className="mb-14" id="examples">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Examples
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-6 leading-relaxed">
          Common use cases and configurations for the Card component system.
        </p>
        {cardData.sections.map((section) => (
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
                    <CodeBlock code={example.code} language="tsx" />
                  </div>
                </div>
              ))}
            </div>
          </DocsSection>
        ))}
      </section>

      {/* ─── Props ───────────────────────────────────────────────────── */}
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
