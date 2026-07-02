'use client';

import React from 'react';
import { Settings } from 'lucide-react';

// Import existing components
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';

// ─── StepCard ───────────────────────────────────────────────────────────────

function StepCard({
  number,
  title,
  description,
  icon,
  children,
}: {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-[#111111] border border-white/[0.06] flex items-center justify-center z-10">
        <span className="font-['inter-bold'] text-[12px] text-white">
          {number}
        </span>
      </div>
      <div className="pl-8 pt-4">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-11 h-11 rounded-[12px] bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="font-['inter-bold'] text-[18px] text-white leading-tight">
              {title}
            </h3>
            <p className="font-['inter-rag'] text-[14px] text-white/30 mt-1 leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
        </div>
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}

// ─── RequirementsCard ───────────────────────────────────────────────────────

function RequirementsCard() {
  const items = [
    { name: 'Node.js', version: 'v18+' },
    { name: 'React', version: '18+' },
    { name: 'TypeScript', version: '5+' },
    { name: 'Tailwind CSS', version: 'v4+' },
  ];

  return (
    <div className="rounded-[20px] border border-white/[0.05] bg-[#0D0D0D] p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-[10px] bg-[#0044ff]/10 border border-[#0044ff]/20 flex items-center justify-center">
          <Settings className="w-4 h-4 text-[#0044ff]" />
        </div>
        <h3 className="font-['inter-bold'] text-[16px] text-white">
          Prerequisites
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between py-2.5 px-4 rounded-[10px] bg-white/[0.02] border border-white/[0.04]"
          >
            <span className="font-['inter-semi'] text-[13px] text-white/70">
              {item.name}
            </span>
            <span className="font-['inter-rag'] text-[12px] text-[#0044ff]/60 bg-[#0044ff]/5 px-2 py-1 rounded-[6px]">
              {item.version}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <div className="border-b border-white/[0.04]">
        <div className="max-w-[800px] mx-auto px-6 py-16 md:py-20">
          <div className="flex items-center gap-2 mb-6"></div>

          <h1 className="font-['inter-bold'] text-[40px] md:text-[52px] text-white leading-[1.1] tracking-tight mb-4">
            Installation
          </h1>

          <p className="font-['inter-rag'] text-[16px] text-white/30 leading-[1.7] max-w-[480px]">
            Install and configure the library in your project. Follow the steps
            below to get started.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 py-12 md:py-16">
        {/* Divider */}

        {/* Steps */}
        <div className="space-y-14">
          {/* Step 1 */}
          <StepCard
            number={1}
            title="Create Project"
            description="Scaffold a new Next.js project with TypeScript and App Router."
            icon={null}
          >
            <InstallCommand command="create-next-app@latest my-app --typescript --eslint --src-dir --app" />
          </StepCard>

          {/* Step 2 */}
          <StepCard
            number={2}
            title="Install Tailwind CSS v4"
            description="Install Tailwind CSS with PostCSS plugin for the CSS-first config approach."
            icon={null}
          >
            <InstallCommand command="npm install tailwindcss @tailwindcss/postcss postcss" />

            <div className="mt-3">
              <p className="font-['inter-semi'] text-[12px] text-white/30 mb-2 uppercase tracking-wider">
                postcss.config.mjs
              </p>
              <CodeBlock
                code={`export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};`}
              />
            </div>

            <div className="mt-3">
              <p className="font-['inter-semi'] text-[12px] text-white/30 mb-2 uppercase tracking-wider">
                globals.css
              </p>
              <CodeBlock code={`@import "tailwindcss";`} />
            </div>
          </StepCard>

          {/* Step 3 */}
          <StepCard
            number={3}
            title="Configure Path Aliases"
            description="Set up @/* import aliases so components install to the correct location."
            icon={null}
          >
            <CodeBlock
              code={`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
            />
          </StepCard>

          {/* Step 4 */}
          <StepCard
            number={4}
            title="Initialize shadcn/ui"
            description="Run the CLI to create the component configuration and theme setup."
            icon={null}
          >
            <InstallCommand command="shadcn@latest init" />

            <div className="rounded-[12px] bg-[#0044ff]/[0.04] border border-[#0044ff]/10 p-4">
              <p className="font-['inter-semi'] text-[12px] text-[#0044ff]/70 mb-2">
                Select when prompted:
              </p>
              <div className="space-y-1.5">
                {[
                  'Style: Default',
                  'Base color: Zinc',
                  'CSS variables: Yes',
                ].map((opt) => (
                  <div key={opt} className="flex items-center gap-2">
                    <span className="block w-1.5 h-1.5 rounded-full bg-white/30" />
                    <span className="font-['inter-rag'] text-[13px] text-white/35">
                      {opt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </StepCard>

          {/* Step 5 */}
          <StepCard
            number={5}
            title="Install Dependencies"
            description="Install the core packages required by our components."
            icon={null}
          >
            <InstallCommand command="npm install framer-motion lucide-react" />
          </StepCard>

          {/* Step 6 */}
          <StepCard
            number={6}
            title="Add Components"
            description="Use the CLI to add components directly into your codebase."
            icon={null}
          >
            <InstallCommand command="shadcn@latest add button" />

            <div className="mt-3">
              <p className="font-['inter-semi'] text-[12px] text-white/30 mb-2 uppercase tracking-wider">
                Usage
              </p>
              <CodeBlock
                code={`import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button>Click me</Button>
    </div>
  );
}`}
              />
            </div>
          </StepCard>

          {/* Step 7 */}
          <StepCard
            number={7}
            title="Start Development"
            description="Run the dev server and begin building."
            icon={null}
          >
            <InstallCommand command="npm run dev" />
          </StepCard>
        </div>

        {/* Next Steps */}
        <div className="mt-16 pt-10 border-t border-white/[0.04]">
          <h2 className="font-['inter-bold'] text-[24px] text-white mb-2">
            Next Steps
          </h2>
          <p className="font-['inter-rag'] text-[14px] text-white/25 mb-6">
            Explore components and start building.
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                title: 'Components',
                desc: '50+ ready-to-use UI blocks',
                icon: null,
              },
              {
                title: 'Theming',
                desc: 'Customize your design tokens',
                icon: null,
              },
              {
                title: 'Examples',
                desc: 'Real-world layout patterns',
                icon: null,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group p-5 rounded-[16px] border border-white/[0.04] bg-[#0D0D0D] hover:border-[#0044ff]/20 transition-all duration-200 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-[8px] bg-[#0044ff]/8 flex items-center justify-center mb-3 text-[#0044ff]/60">
                  {card.icon}
                </div>
                <h3 className="font-['inter-semi'] text-[14px] text-white mb-1">
                  {card.title}
                </h3>
                <p className="font-['inter-rag'] text-[12px] text-white/25">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mt-10 p-5 rounded-[16px] bg-[#0D0D0D] border border-white/[0.04]">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-['inter-bold'] text-[14px] text-white/70">
              Troubleshooting
            </h3>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Path alias errors?',
                a: 'Check baseUrl and paths in tsconfig.json',
              },
              {
                q: 'Tailwind not working?',
                a: 'Ensure @import tailwindcss is in globals.css',
              },
              {
                q: 'Import failures?',
                a: 'Verify components.json alias paths match your structure',
              },
            ].map((item) => (
              <div key={item.q} className="flex items-start gap-2.5">
                <div className="w-1 h-1 rounded-full bg-[#0044ff]/40 mt-2 shrink-0" />
                <div>
                  <p className="font-['inter-semi'] text-[12px] text-white/50">
                    {item.q}
                  </p>
                  <p className="font-['inter-rag'] text-[12px] text-white/20 mt-0.5">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
