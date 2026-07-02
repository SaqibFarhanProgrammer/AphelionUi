'use client';

import CodeBlock from '@/components/docs/CodeBlock';
import InstallCommand from '@/components/docs/InstallCommand';
import t, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';

function Step({
  number,
  title,
  description,
  children,
}: {
  number: number;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute -left-2.5 -top-2.5 w-7 h-7 rounded-full bg-[#0A0A0A] border border-white/[0.08] flex items-center justify-center">
        <span className="font-['inter-semi'] text-[11px] text-white/40">
          {number}
        </span>
      </div>
      <div className="pl-7 pt-3">
        <h3 className="font-['inter-bold'] text-[16px] text-white/90 mb-1">
          {title}
        </h3>
        <p className="font-['inter-rag'] text-[13px] text-white/70 mb-4 leading-relaxed">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}

function FrameworkSelector({
  active,
  onSelect,
}: {
  active: 'nextjs' | 'react';
  onSelect: (f: 'nextjs' | 'react') => void;
}) {
  return (
    <div className="flex items-center gap-4 p-2 rounded-[16px] bg-white/[0.02] border border-white/[0.05] w-fit">
      {(['nextjs', 'react'] as const).map((f) => (
        <button
          key={f}
          onClick={() => onSelect(f)}
          className={`flex flex-col items-center justify-center gap-3 w-36 h-32 rounded-[12px] font-['inter-semi'] text-[15px] transition-all duration-200 ${
            active === f
              ? 'bg-white text-black shadow-lg scale-105'
              : 'bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border border-transparent'
          }`}
        >
          {f === 'nextjs' ? (
            <>
              <RiNextjsFill className="w-10 h-10" />
              <span>Next.js</span>
            </>
          ) : (
            <>
              <FaReact className="w-10 h-10" />
              <span>React + Vite</span>
            </>
          )}
        </button>
      ))}
    </div>
  );
}

function NextJsSteps() {
  return (
    <div className="space-y-12">
      <Step
        number={1}
        title="Create a Next.js Project"
        description="Scaffold a new project with TypeScript and App Router."
      >
        <InstallCommand command="create-next-app@latest my-app --typescript --eslint --src-dir --app" />
        <p className="font-['inter-rag'] text-[12px] text-white/65 mt-3">
          When prompted, select No for Tailwind CSS — we will configure it
          manually.
        </p>
      </Step>

      <Step
        number={2}
        title="Install Tailwind CSS v4"
        description="Install Tailwind with the PostCSS plugin."
      >
        <InstallCommand command="install tailwindcss @tailwindcss/postcss postcss" />
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/70 mb-2 uppercase tracking-wider">
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
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/70 mb-2 uppercase tracking-wider">
              src/app/globals.css
            </p>
            <CodeBlock code={`@import "tailwindcss";`} />
          </div>
        </div>
      </Step>

      <Step
        number={3}
        title="Configure Path Aliases"
        description="Set up @/* imports so components install correctly."
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
      </Step>

      <Step
        number={4}
        title="Initialize shadcn/ui"
        description="Run the CLI to set up your component library."
      >
        <InstallCommand command="shadcn@latest init" />
        <div className="mt-3 rounded-[8px] bg-white/[0.02] border border-white/[0.04] p-4">
          <p className="font-['inter-semi'] text-[11px] text-white/60 mb-2">
            Select when prompted:
          </p>
          <div className="space-y-1">
            <p className="font-['inter-rag'] text-[12px] text-white/70">
              Style: Default
            </p>
            <p className="font-['inter-rag'] text-[12px] text-white/70">
              Base color: Zinc
            </p>
            <p className="font-['inter-rag'] text-[12px] text-white/70">
              CSS variables: Yes
            </p>
          </div>
        </div>
      </Step>

      <Step
        number={5}
        title="Install Dependencies"
        description="Install Framer Motion and Lucide React icons."
      >
        <InstallCommand command="install framer-motion lucide-react" />
      </Step>

      <Step
        number={7}
        title="Start Development"
        description="Run the dev server."
      >
        <InstallCommand command="run dev" />
      </Step>
    </div>
  );
}

// ─── React + Vite Steps ───────────────────────────────────────────────────────

function ReactViteSteps() {
  return (
    <div className="space-y-12">
      <Step
        number={1}
        title="Create a Vite Project"
        description="Scaffold a new React project with TypeScript template."
      >
        <InstallCommand command="create vite@latest my-app -- --template react-ts" />
      </Step>

      <Step
        number={2}
        title="Install Tailwind CSS v4"
        description="Install Tailwind with the Vite plugin."
      >
        <InstallCommand command="install tailwindcss @tailwindcss/vite" />
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/70 mb-2 uppercase tracking-wider">
              vite.config.ts
            </p>
            <CodeBlock
              code={`import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});`}
            />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/70 mb-2 uppercase tracking-wider">
              src/index.css
            </p>
            <CodeBlock code={`@import "tailwindcss";`} />
          </div>
        </div>
      </Step>

      <Step
        number={3}
        title="Configure Path Aliases"
        description="Set up @/* imports in your TypeScript config."
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
      </Step>

      <Step
        number={4}
        title="Initialize shadcn/ui"
        description="Run the CLI to set up your component library."
      >
        <InstallCommand command="shadcn@latest init" />
        <div className="mt-3 rounded-[8px] bg-white/[0.02] border border-white/[0.04] p-4">
          <p className="font-['inter-semi'] text-[11px] text-white/30 mb-2">
            Select when prompted:
          </p>
          <div className="space-y-1">
            <p className="font-['inter-rag'] text-[12px] text-white/70">
              Style: Default
            </p>
            <p className="font-['inter-rag'] text-[12px] text-white/70">
              Base color: Zinc
            </p>
            <p className="font-['inter-rag'] text-[12px] text-white/70">
              CSS variables: Yes
            </p>
          </div>
        </div>
      </Step>

      <Step
        number={5}
        title="Install Dependencies"
        description="Install Framer Motion and Lucide React icons."
      >
        <InstallCommand command="install framer-motion lucide-react" />
      </Step>

      <Step
        number={7}
        title="Start Development"
        description="Run the dev server."
      >
        <InstallCommand command="run dev" />
      </Step>
    </div>
  );
}

function End() {
  return (
    <div className="mt-16 pt-8 border-t border-white/[0.06]">
      <p className="font-['inter-semi'] text-[11px] text-white/20 mb-5 uppercase tracking-wider">
        Next
      </p>
      <div className="grid grid-cols-3 gap-3">
        <a
          href="/docs/contributing"
          className="group p-5 rounded-[12px] bg-black/10 border border-white/[0.06] hover:border-white/[0.15] hover:bg-black/20 transition-all duration-200"
        >
          <p className="font-['inter-semi'] text-[14px] text-white/80 group-hover:text-white transition-colors mb-1.5">
            Contributing
          </p>
          <p className="font-['inter-rag'] text-[12px] text-white/30 leading-relaxed">
            Learn how to contribute to the project.
          </p>
        </a>

        <a
          href="/docs/components"
          className="group p-5 rounded-[12px] bg-black/10 border border-white/[0.06] hover:border-white/[0.15] hover:bg-black/20 transition-all duration-200"
        >
          <p className="font-['inter-semi'] text-[14px] text-white/80 group-hover:text-white transition-colors mb-1.5">
            Components
          </p>
          <p className="font-['inter-rag'] text-[12px] text-white/30 leading-relaxed">
            Browse all available components.
          </p>
        </a>

        <a
          href="/docs/usage"
          className="group p-5 rounded-[12px] bg-black/10 border border-white/[0.06] hover:border-white/[0.15] hover:bg-black/20 transition-all duration-200"
        >
          <p className="font-['inter-semi'] text-[14px] text-white/80 group-hover:text-white transition-colors mb-1.5">
            Usage
          </p>
          <p className="font-['inter-rag'] text-[12px] text-white/30 leading-relaxed">
            See how to use components in your app.
          </p>
        </a>
      </div>
    </div>
  );
}
// ─── Main Page ──────────────────────────────────────────────────────────────

export default function InstallationPage() {
  const [framework, setFramework] = useState<'nextjs' | 'react'>('nextjs');

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="">
        <div className="max-w-[720px] mx-auto px-6 py-6 md:pt-20">
          <p className="font-['inter-semi'] text-[11px] text-white/15 tracking-[0.15em] uppercase mb-5">
            Getting Started
          </p>
          <h1 className="font-['inter-bold'] text-[36px] md:text-[48px] text-white leading-[1.1] tracking-tight mb-4">
            Installation
          </h1>
          <p className="font-['inter-rag'] text-[15px] text-white/70 leading-[1.7] max-w-[440px]">
            Install and configure the library in a few steps.
          </p>
        </div>
      </div>

      <div className="max-w-[720px] mx-auto px-6 py-12 md:py-16">
        <div className="mb-14">
          <p className="font-['inter-semi'] text-[11px] text-white/15 mb-3 uppercase tracking-wider">
            Select your framework
          </p>
          <FrameworkSelector active={framework} onSelect={setFramework} />
        </div>

        <div className="flex items-center gap-4 mb-14">
          <div className="h-px flex-1 bg-white/[0.03]" />
          <span className="font-['inter-semi'] text-[10px] text-white/10 tracking-[0.2em] uppercase">
            Setup
          </span>
          <div className="h-px flex-1 bg-white/[0.03]" />
        </div>

        {framework === 'nextjs' ? <NextJsSteps /> : <ReactViteSteps />}

        <End />

        <div className="mt-9  text-center">
          <p className="font-['inter-rag'] text-[12px] text-white/80">
            Need help? Open an issue on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}
