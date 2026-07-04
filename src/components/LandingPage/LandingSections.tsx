'use client';

import React from 'react';
import { motion } from 'framer-motion';

// ──────────────────────────────────────────────────────────────
// SECTION 1: LOGO CLOUD (Tailark Style)
// ──────────────────────────────────────────────────────────────

const logos = [
  'Vercel',
  'Stripe',
  'Linear',
  'Notion',
  'Figma',
  'Supabase',
  'Raycast',
  'Arc',
  'Clerk',
  'Vercel',
];

export function LogoCloud() {
  return (
    <section className="w-full border-y border-white/[0.06]">
      <div className="mx-auto max-w-[1100px] px-6 py-12">
        <p className="text-center text-xs text-white/25 tracking-widest uppercase mb-8">
          Trusted by developers from
        </p>
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-16 animate-marquee">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-sm font-medium text-white/15 tracking-tight whitespace-nowrap select-none flex-shrink-0"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// SECTION 2: FEATURES (Tailark Bento Grid Style)
// ──────────────────────────────────────────────────────────────

const features = [
  {
    title: 'Marketing Campaigns',
    description:
      'Launch and manage campaigns seamlessly. Collaborate with your team to deliver impactful strategies.',
    tag: 'Campaigns',
    large: false,
  },
  {
    title: 'Collaborative Campaigns',
    description:
      'Work together for greater impact. Engage with your team on comprehensive campaigns.',
    tag: 'Collaboration',
    large: false,
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Track performance metrics in real-time. Make data-driven decisions with comprehensive insights and reporting tools.',
    tag: 'Analytics',
    large: true,
  },
  {
    title: 'Customer Support',
    description:
      'Provide exceptional support with integrated chat, ticketing, and knowledge base management.',
    tag: 'Support',
    large: true,
  },
];

export function FeaturesGrid() {
  return (
    <section className="w-full py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-16">
          <p className="text-xs text-white/25 tracking-widest uppercase mb-4">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight max-w-xl">
            Everything you need to ship faster
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-[#000000] p-8 md:p-10 group hover:bg-white/[0.02] transition-colors duration-500 ${
                feature.large ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="text-xs text-white/25 tracking-widest uppercase">
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-xl font-medium text-white/90 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-white/35 leading-relaxed max-w-md">
                {feature.description}
              </p>

              {/* Mock UI element inside card */}
              <div className="mt-8 p-4 border border-white/[0.06] rounded-lg bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-md bg-white/[0.06]" />
                  <div>
                    <div className="h-2 w-24 bg-white/[0.08] rounded" />
                    <div className="h-1.5 w-16 bg-white/[0.04] rounded mt-1.5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-white/[0.04] rounded" />
                  <div className="h-1.5 w-3/4 bg-white/[0.04] rounded" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// SECTION 3: STATS (Tailark Style with large numbers)
// ──────────────────────────────────────────────────────────────

const stats = [
  { value: '99.99%', label: 'Uptime', sublabel: 'Reliable infrastructure' },
  { value: '50+', label: 'Components', sublabel: 'Production ready' },
  { value: '10k+', label: 'Downloads', sublabel: 'Growing community' },
  { value: '0', label: 'Dependencies', sublabel: 'Lightweight' },
];

export function StatsSection() {
  return (
    <section className="w-full border-y border-white/[0.06] py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#000000] p-10 md:p-12"
            >
              <p className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-3">
                {stat.value}
              </p>
              <p className="text-sm text-white/50 font-medium mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-white/20">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// SECTION 4: INTEGRATIONS (Tailark Style - Logo Grid)
// ──────────────────────────────────────────────────────────────

const integrations = [
  { name: 'Stripe', category: 'Payments' },
  { name: 'PayPal', category: 'Payments' },
  { name: 'Beacon', category: 'Analytics' },
  { name: 'Vercel', category: 'Hosting' },
  { name: 'Linear', category: 'Project' },
  { name: 'Notion', category: 'Docs' },
  { name: 'Figma', category: 'Design' },
  { name: 'GitHub', category: 'Code' },
];

export function IntegrationsSection() {
  return (
    <section className="w-full py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-16 text-center">
          <p className="text-xs text-white/25 tracking-widest uppercase mb-4">
            Integrations
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight max-w-xl mx-auto">
            Works with your favorite tools
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06]">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-[#000000] p-8 flex flex-col items-center justify-center gap-3 group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center text-xs font-medium text-white/30 group-hover:border-white/20 group-hover:text-white/50 transition-all duration-300">
                {item.name.charAt(0)}
              </div>
              <div className="text-center">
                <p className="text-sm text-white/60 font-medium">{item.name}</p>
                <p className="text-xs text-white/20 mt-0.5">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// SECTION 5: TESTIMONIALS (Tailark Wall of Love Style)
// ──────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: 'Alex Chen',
    handle: '@alexchen',
    content:
      'This is exactly what I have been looking for. Clean, minimal, and actually useful components that I can drop into any project.',
    avatar: 'A',
  },
  {
    name: 'Sarah Miller',
    handle: '@sarahmiller',
    content:
      'The attention to detail is incredible. Every component feels intentional and well-crafted. Saved me hours of dev time.',
    avatar: 'S',
  },
  {
    name: 'James Wilson',
    handle: '@jameswilson',
    content:
      'Finally, a component library that does not try to do too much. Just the essentials, beautifully designed and fully accessible.',
    avatar: 'J',
  },
  {
    name: 'Emily Zhang',
    handle: '@emilyzhang',
    content:
      'The copy-and-paste workflow is a game changer. No npm packages, no version conflicts, no bloat. Just clean code.',
    avatar: 'E',
  },
  {
    name: 'Michael Park',
    handle: '@michaelpark',
    content:
      'We rebuilt our entire marketing site using these blocks. The result looks like we hired a top-tier design agency.',
    avatar: 'M',
  },
  {
    name: 'Lisa Johnson',
    handle: '@lisajohnson',
    content:
      'The black-only aesthetic is bold and beautiful. Forces you to focus on structure and typography. Exactly what good design should do.',
    avatar: 'L',
  },
];

export function Testimonials() {
  return (
    <section className="w-full border-y border-white/[0.06] py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-16">
          <p className="text-xs text-white/25 tracking-widest uppercase mb-4">
            Wall of Love
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight max-w-xl">
            Trusted by founders on X
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-[#000000] p-8 flex flex-col group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-white/[0.08] flex items-center justify-center text-sm font-medium text-white/50">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm text-white/80 font-medium leading-none">
                    {t.name}
                  </p>
                  <p className="text-xs text-white/25 mt-1">{t.handle}</p>
                </div>
              </div>
              <p className="text-sm text-white/40 leading-relaxed flex-1">
                {t.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// SECTION 6: CTA (Tailark Style - Big headline + buttons)
// ──────────────────────────────────────────────────────────────

export function CTASection() {
  return (
    <section className="w-full py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/[0.06] p-12 md:p-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-6 max-w-2xl mx-auto">
            Build modern interfaces with Aphelion UI
          </h2>
          <p className="text-base text-white/30 max-w-lg mx-auto mb-10 leading-relaxed">
            Copy, paste, and ship. No installation required. Just beautiful,
            accessible components ready for your next project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors duration-200">
              Get Started
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/[0.12] text-white/50 text-sm font-medium tracking-wide hover:border-white/25 hover:text-white/70 transition-all duration-200">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// SECTION 7: FOOTER (Tailark Style - Multi-column)
// ──────────────────────────────────────────────────────────────

const footerLinks = {
  Product: ['Components', 'Blocks', 'Templates', 'Changelog'],
  Resources: ['Documentation', 'Getting Started', 'Examples', 'GitHub'],
  Company: ['About', 'Blog', 'Contact', 'License'],
};

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1100px] px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <p className="text-base font-medium text-white tracking-tight mb-3">
              Aphelion UI
            </p>
            <p className="text-sm text-white/25 leading-relaxed max-w-xs">
              A minimal UI component library built for developers who value
              structure over decoration.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs text-white/30 tracking-widest uppercase mb-4">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/35 hover:text-white/60 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/15">
            &copy; {new Date().getFullYear()} Aphelion UI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'GitHub'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/15 hover:text-white/35 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ──────────────────────────────────────────────────────────────
// SECTION 8: PRICING (Tailark Style)
// ──────────────────────────────────────────────────────────────

const plans = [
  {
    name: 'Free',
    price: '$0',
    description:
      'A strong starting point with free blocks and lifetime access.',
    features: [
      'Lifetime Access',
      'Unlimited projects',
      'Free blocks',
      'Community support',
    ],
    cta: 'Get access',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'For solo founders building polished marketing sites.',
    features: [
      'Everything in Free',
      'Premium blocks',
      'Code snippets',
      'Priority support',
    ],
    cta: 'Get access',
    popular: true,
  },
  {
    name: 'Team',
    price: '$99',
    description: 'Designed for teams collaborating at scale.',
    features: [
      'Everything in Pro',
      '10 team members',
      'High priority support',
      'Custom blocks',
    ],
    cta: 'Get access',
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="w-full border-y border-white/[0.06] py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-16 text-center">
          <p className="text-xs text-white/25 tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight max-w-xl mx-auto">
            Choose the plan that fits your workflow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-[#000000] p-8 md:p-10 flex flex-col ${
                plan.popular ? 'relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-px bg-white/30" />
              )}
              <div className="mb-6">
                <p className="text-sm text-white/60 font-medium mb-2">
                  {plan.name}
                </p>
                <p className="text-3xl font-medium text-white tracking-tight mb-3">
                  {plan.price}
                </p>
                <p className="text-sm text-white/30 leading-relaxed">
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-sm text-white/40">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 text-sm font-medium tracking-wide transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'border border-white/[0.12] text-white/50 hover:border-white/25 hover:text-white/70'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// SECTION 9: FAQ (Tailark Style)
// ──────────────────────────────────────────────────────────────

const faqs = [
  {
    question: 'What is Aphelion UI?',
    answer:
      'Aphelion UI is a minimal component library built for developers who value structure over decoration. It provides production-ready React components with a black-only design philosophy.',
  },
  {
    question: 'Is it free to use?',
    answer:
      'Yes, Aphelion UI is completely free and open-source under the MIT license. You can use it in personal and commercial projects without any restrictions.',
  },
  {
    question: 'How do I install components?',
    answer:
      'Simply copy and paste the component code into your project. No npm install required. Each component is self-contained and works with Tailwind CSS.',
  },
  {
    question: 'Does it support dark mode?',
    answer:
      'Aphelion UI is designed with a black-only aesthetic that works beautifully in dark environments. It is inherently dark mode friendly.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="w-full py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-16 max-w-xl">
          <p className="text-xs text-white/25 tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="border border-white/[0.06]">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`${i !== 0 ? 'border-t border-white/[0.06]' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group hover:bg-white/[0.02] transition-colors duration-200"
              >
                <span className="text-sm text-white/70 font-medium pr-8">
                  {faq.question}
                </span>
                <span className="text-white/30 text-lg flex-shrink-0 transition-transform duration-200">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-white/35 leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// USAGE EXAMPLE
// ──────────────────────────────────────────────────────────────

/*
  In your page.tsx:

  import {
    LogoCloud,
    FeaturesGrid,
    StatsSection,
    IntegrationsSection,
    Testimonials,
    PricingSection,
    FAQSection,
    CTASection,
    Footer,
  } from "./LandingSections";

  export default function LandingPage() {
    return (
      <main className="min-h-screen bg-black text-white">
        <Hero />          // ← already created by you
        <LogoCloud />
        <FeaturesGrid />
        <StatsSection />
        <IntegrationsSection />
        <Testimonials />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
        // <About />     // ← already created by you
      </main>
    );
  }
*/
