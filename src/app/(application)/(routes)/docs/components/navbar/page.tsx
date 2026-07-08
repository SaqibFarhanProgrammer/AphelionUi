'use client';

import Navbar from '@/registry/components/navbar/Navbar';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';

const navbarData = {
  name: 'Navbar',
  slug: 'navbar',
  title: 'Navbar',
  description:
    'A versatile navigation bar component with 7 layout variants, dark/light themes, dropdowns, search, breadcrumbs, and mobile responsive menu.',
  category: 'Navigation',
  installation: {
    command: 'shadcn@latest add aphelio/c/navbar',
  },
  usage: {
    import: "import { Navbar } from '@/components/ui/navbar'",
    basic:
      '<Navbar links={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />',
  },
  sections: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Seven distinct layout styles for different use cases.',
      examples: [
        {
          label: 'Default',
          code: `<Navbar
  variant="default"
  links={[
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
  ]}
  showSearch
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                variant="default"
                theme="dark"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'Features', href: '/features' },
                  { label: 'Pricing', href: '/pricing' },
                ]}
                showSearch
                className="relative !static"
              />
            </div>
          ),
        },
        {
          label: 'Pill',
          code: `<Navbar
  variant="pill"
  links={[
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Blog", href: "/blog" },
  ]}
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                variant="pill"
                theme="dark"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'Docs', href: '/docs' },
                  { label: 'Blog', href: '/blog' },
                ]}
                className="relative !static"
              />
            </div>
          ),
        },
        {
          label: 'Minimal',
          code: `<Navbar
  variant="minimal"
  links={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]}
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                variant="minimal"
                theme="dark"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                ]}
                className="relative !static"
              />
            </div>
          ),
        },
        {
          label: 'Split',
          code: `<Navbar
  variant="split"
  links={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Pricing", href: "/pricing" },
  ]}
  showSearch
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                variant="split"
                theme="dark"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'Products', href: '/products' },
                  { label: 'Pricing', href: '/pricing' },
                ]}
                showSearch
                className="relative !static"
              />
            </div>
          ),
        },
        {
          label: 'Centered',
          code: `<Navbar
  variant="centered"
  links={[
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
  ]}
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                variant="centered"
                theme="dark"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'Features', href: '/features' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'Docs', href: '/docs' },
                ]}
                className="relative !static"
              />
            </div>
          ),
        },
        {
          label: 'SaaS',
          code: `<Navbar
  variant="saas"
  links={[
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
  ]}
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                variant="saas"
                theme="dark"
                links={[
                  { label: 'Features', href: '/features' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'Docs', href: '/docs' },
                ]}
                className="relative !static"
              />
            </div>
          ),
        },
        {
          label: 'Dashboard',
          code: `<Navbar
  variant="dashboard"
  links={[
    { label: "Overview", href: "/dashboard" },
    { label: "Analytics", href: "/analytics" },
    { label: "Settings", href: "/settings" },
  ]}
  showSearch
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                variant="dashboard"
                theme="dark"
                links={[
                  { label: 'Overview', href: '/dashboard' },
                  { label: 'Analytics', href: '/analytics' },
                  { label: 'Settings', href: '/settings' },
                ]}
                showSearch
                className="relative !static"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: 'themes',
      title: 'Themes',
      description: 'Dark and light color themes for different backgrounds.',
      examples: [
        {
          label: 'Dark Theme',
          code: `<Navbar
  theme="dark"
  links={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ]}
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                theme="dark"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                ]}
                className="relative !static"
              />
            </div>
          ),
        },
        {
          label: 'Light Theme',
          code: `<Navbar
  theme="light"
  links={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ]}
/>`,
          preview: (
            <div className="bg-white rounded-xl p-4 border border-neutral-200">
              <Navbar
                theme="light"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                ]}
                className="relative !static"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: 'dropdowns',
      title: 'Dropdowns',
      description: 'Add dropdown menus with nested navigation links.',
      examples: [
        {
          label: 'With Dropdowns',
          code: `<Navbar
  links={[
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
  ]}
  dropdowns={[
    {
      label: "Products",
      items: [
        { label: "Features", href: "/features" },
        { label: "Integrations", href: "/integrations" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      label: "Resources",
      items: [
        { label: "Documentation", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Support", href: "/support" },
      ],
    },
  ]}
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                theme="dark"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'Pricing', href: '/pricing' },
                ]}
                dropdowns={[
                  {
                    label: 'Products',
                    items: [
                      { label: 'Features', href: '/features' },
                      { label: 'Integrations', href: '/integrations' },
                      { label: 'Changelog', href: '/changelog' },
                    ],
                  },
                  {
                    label: 'Resources',
                    items: [
                      { label: 'Documentation', href: '/docs' },
                      { label: 'Blog', href: '/blog' },
                      { label: 'Support', href: '/support' },
                    ],
                  },
                ]}
                className="relative !static"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: 'search',
      title: 'Search',
      description: 'Add a built-in search input to the navbar.',
      examples: [
        {
          label: 'With Search',
          code: `<Navbar
  showSearch
  searchPlaceholder="Search documentation..."
  links={[
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
  ]}
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                theme="dark"
                showSearch
                searchPlaceholder="Search documentation..."
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'Docs', href: '/docs' },
                ]}
                className="relative !static"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: 'breadcrumbs',
      title: 'Breadcrumbs',
      description: 'Show breadcrumb navigation below the navbar.',
      examples: [
        {
          label: 'With Breadcrumbs',
          code: `<Navbar
  links={[
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
  ]}
  showBreadcrumb
  breadcrumbItems={[
    { label: "Home", href: "/" },
    { label: "Components", href: "/docs" },
    { label: "Navbar" },
  ]}
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                theme="dark"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'Docs', href: '/docs' },
                ]}
                showBreadcrumb
                breadcrumbItems={[
                  { label: 'Home', href: '/' },
                  { label: 'Components', href: '/docs' },
                  { label: 'Navbar' },
                ]}
                className="relative !static"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: 'custom-cta',
      title: 'Custom CTA',
      description:
        'Override default buttons with custom call-to-action elements.',
      examples: [
        {
          label: 'Custom Buttons',
          code: `<Navbar
  links={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ]}
  ctaSecondary={<button className="text-sm text-white/60 hover:text-white">Sign In</button>}
  ctaPrimary={<button className="text-sm bg-white text-black px-4 py-2 rounded-xl">Get Started</button>}
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                theme="dark"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                ]}
                ctaSecondary={
                  <button className="text-sm text-white/60 hover:text-white transition-colors">
                    Sign In
                  </button>
                }
                ctaPrimary={
                  <button className="text-sm bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-white/90 transition-colors">
                    Get Started
                  </button>
                }
                className="relative !static"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: 'mobile-nav',
      title: 'Mobile Navigation',
      description: 'Custom mobile navigation with grouped menu items.',
      examples: [
        {
          label: 'Custom Mobile Menu',
          code: `<Navbar
  links={[
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
  ]}
  mobileNav={[
    {
      name: "Product",
      items: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Integrations", href: "/integrations" },
      ],
    },
    {
      name: "Company",
      items: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
      ],
    },
  ]}
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                theme="dark"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'Pricing', href: '/pricing' },
                ]}
                mobileNav={[
                  {
                    name: 'Product',
                    items: [
                      { label: 'Features', href: '/features' },
                      { label: 'Pricing', href: '/pricing' },
                      { label: 'Integrations', href: '/integrations' },
                    ],
                  },
                  {
                    name: 'Company',
                    items: [
                      { label: 'About', href: '/about' },
                      { label: 'Blog', href: '/blog' },
                      { label: 'Careers', href: '/careers' },
                    ],
                  },
                ]}
                className="relative !static"
              />
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
          label: 'Full Featured',
          code: `<Navbar
  variant="pill"
  theme="dark"
  links={[
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
  ]}
  dropdowns={[
    {
      label: "Products",
      items: [
        { label: "Features", href: "/features" },
        { label: "Integrations", href: "/integrations" },
      ],
    },
  ]}
  showSearch
  searchPlaceholder="Search..."
  showBreadcrumb
  breadcrumbItems={[
    { label: "Home", href: "/" },
    { label: "Navbar" },
  ]}
/>`,
          preview: (
            <div className="bg-black rounded-xl p-4">
              <Navbar
                variant="pill"
                theme="dark"
                links={[
                  { label: 'Home', href: '/' },
                  { label: 'Pricing', href: '/pricing' },
                ]}
                dropdowns={[
                  {
                    label: 'Products',
                    items: [
                      { label: 'Features', href: '/features' },
                      { label: 'Integrations', href: '/integrations' },
                    ],
                  },
                ]}
                showSearch
                searchPlaceholder="Search..."
                showBreadcrumb
                breadcrumbItems={[
                  { label: 'Home', href: '/' },
                  { label: 'Navbar' },
                ]}
                className="relative !static"
              />
            </div>
          ),
        },
      ],
    },
  ],
  props: [
    {
      name: 'variant',
      type: "'default' | 'pill' | 'minimal' | 'split' | 'centered' | 'saas' | 'dashboard'",
      default: "'default'",
      description: 'Layout variant of the navbar.',
    },
    {
      name: 'theme',
      type: "'dark' | 'light'",
      default: "'dark'",
      description: 'Color theme of the navbar.',
    },
    {
      name: 'logo',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Custom logo element.',
    },
    {
      name: 'logoHref',
      type: 'string',
      default: "'/'",
      description: 'URL for the logo link.',
    },
    {
      name: 'links',
      type: 'NavItem[]',
      default: '[]',
      description: 'Array of navigation links.',
    },
    {
      name: 'dropdowns',
      type: '{ label: string; items: NavItem[] }[]',
      default: '[]',
      description: 'Dropdown menus with nested links.',
    },
    {
      name: 'mobileNav',
      type: 'NavCategory[]',
      default: 'undefined',
      description: 'Custom mobile navigation structure.',
    },
    {
      name: 'ctaPrimary',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Primary call-to-action element.',
    },
    {
      name: 'ctaSecondary',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Secondary call-to-action element.',
    },
    {
      name: 'showSearch',
      type: 'boolean',
      default: 'false',
      description: 'Show the search input.',
    },
    {
      name: 'searchPlaceholder',
      type: 'string',
      default: "'Search...'",
      description: 'Placeholder text for the search input.',
    },
    {
      name: 'showBreadcrumb',
      type: 'boolean',
      default: 'false',
      description: 'Show breadcrumb navigation.',
    },
    {
      name: 'breadcrumbItems',
      type: 'BreadcrumbItem[]',
      default: '[]',
      description: 'Items for the breadcrumb trail.',
    },
    {
      name: 'avatar',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Avatar element for dashboard variant.',
    },
    {
      name: 'scrollThreshold',
      type: 'number',
      default: '50',
      description: 'Scroll distance (px) before navbar styling changes.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the navbar container.',
    },
    {
      name: 'containerClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the inner container.',
    },
    {
      name: 'scrolledClassName',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes when scrolled.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Button',
    href: '/docs/components/button',
    description: 'Clickable button component.',
  },
  {
    label: 'Input',
    href: '/docs/components/input',
    description: 'Text input with validation support.',
  },
];

export default function NavbarPage() {
  return (
    <DocsPageLayout
      category={navbarData.category}
      title={navbarData.title}
      description={navbarData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...navbarData.sections.map((section) => ({
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
          Install the Navbar component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={navbarData.installation.command} />
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
            <CodeBlock code={navbarData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={navbarData.usage.basic} />
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
        {navbarData.sections.map((section) => (
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
          All props available on the Navbar component.
        </p>
        <PropsTable props={navbarData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
