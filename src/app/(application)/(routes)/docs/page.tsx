'use client';

import React from 'react';

// ─── Main Introduction Page ─────────────────────────────────────────────────

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <div className="">
        <div className="max-w-[720px] mx-auto px-6 pt-16 md:py-">
          <p className="font-['inter-semi'] text-[11px] text-white/15 tracking-[0.15em] uppercase mb-5">
            Overview
          </p>
          <h1 className="font-['inter-bold'] text-[36px] md:text-[48px] text-white leading-[1.1] tracking-tight mb-4">
            Introduction
          </h1>
          <p className="font-['inter-rag'] text-[15px] text-white/70 leading-[1.7] max-w-[480px]">
            A minimal component library built for developers who value structure
            over decoration.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[720px] mx-auto px-6 py-12 md:py-16">
        {/* What is Aphelion UI */}
        <section className="mb-14">
          <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
            What is Aphelion UI
          </h2>
          <p className="font-['inter-rag'] text-[14px] text-white/70 leading-[1.8] mb-4">
            Aphelion UI is a collection of reusable components designed for
            building clean, functional interfaces. It is not a traditional
            component library distributed via npm. Instead, components are
            copied directly into your codebase using a CLI, giving you full
            ownership and control over every line of code.
          </p>
          <p className="font-['inter-rag'] text-[14px] text-white/70 leading-[1.8]">
            The design philosophy is simple: everything is black, structure is
            everything, nothing is decorative. No gradients, no icons, no extra
            colors. Just pure functionality wrapped in a strict black and white
            visual system.
          </p>
        </section>

        {/* Key Principles */}
        <section className="mb-14">
          <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
            Key Principles
          </h2>
          <div className="space-y-4">
            <div className="p-5 rounded-[12px] bg-white/[0.02] border border-white/[0.05]">
              <h3 className="font-['inter-semi'] text-[15px] text-white/80 mb-2">
                Black-Only Design System
              </h3>
              <p className="font-['inter-rag'] text-[13px] text-white/70 leading-[1.7]">
                The entire visual system uses a single black background with
                white text at varying opacity levels. No other colors, no
                gradients, no decorative elements.
              </p>
            </div>

            <div className="p-5 rounded-[12px] bg-white/[0.02] border border-white/[0.05]">
              <h3 className="font-['inter-semi'] text-[15px] text-white/80 mb-2">
                Code Ownership
              </h3>
              <p className="font-['inter-rag'] text-[13px] text-white/70 leading-[1.7]">
                Components live in your codebase, not in node_modules. You can
                modify, extend, or remove anything without waiting for upstream
                updates or fighting with override APIs.
              </p>
            </div>

            <div className="p-5 rounded-[12px] bg-white/[0.02] border border-white/[0.05]">
              <h3 className="font-['inter-semi'] text-[15px] text-white/80 mb-2">
                Minimal Dependencies
              </h3>
              <p className="font-['inter-rag'] text-[13px] text-white/70 leading-[1.7]">
                Built on top of Tailwind CSS and Radix UI primitives. Only
                essential dependencies are included: Framer Motion for
                animations and Lucide React for icons when needed.
              </p>
            </div>

            <div className="p-5 rounded-[12px] bg-white/[0.02] border border-white/[0.05]">
              <h3 className="font-['inter-semi'] text-[15px] text-white/80 mb-2">
                Developer-First Experience
              </h3>
              <p className="font-['inter-rag'] text-[13px] text-white/70 leading-[1.7]">
                Documentation is designed for clarity, not marketing. Every page
                contains exactly what you need to implement a component, with no
                fluff or unnecessary explanation.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture */}

        {/* Getting Started */}
        <section className="mb-14">
          <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
            Getting Started
          </h2>
          <p className="font-['inter-rag'] text-[14px] text-white/70 leading-[1.8] mb-4">
            To start using Aphelion UI, follow the installation guide for your
            framework. The library supports Next.js, React with Vite, React
            Router, Astro, Laravel, TanStack Start, and manual installation for
            custom setups.
          </p>
          <p className="font-['inter-rag'] text-[14px] text-white/70 leading-[1.8]">
            Each framework has its own setup steps, but the core workflow
            remains the same: install Tailwind CSS, configure path aliases,
            initialize the CLI, and start adding components.
          </p>
        </section>

        {/* Community */}
        <section className="mb-14">
          <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
            Community
          </h2>
          <p className="font-['inter-rag'] text-[14px] text-white/70 leading-[1.8] mb-4">
            Aphelion UI is open source and maintained by contributors who
            believe in minimal, functional design. If you want to contribute,
            report an issue, or request a component, open an issue on GitHub.
          </p>
          <p className="font-['inter-rag'] text-[14px] text-white/70 leading-[1.8]">
            The project is licensed under MIT. You are free to use it in
            personal and commercial projects without restriction.
          </p>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-white/[0.03]" />
          <span className="font-['inter-semi'] text-[10px] text-white/10 tracking-[0.2em] uppercase">
            Next
          </span>
          <div className="h-px flex-1 bg-white/[0.03]" />
        </div>

        {/* Bottom Navigation */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href="/docs"
            className="group p-5 rounded-[12px] bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
          >
            <p className="font-['inter-semi'] text-[14px] text-white/70 group-hover:text-white/90 transition-colors mb-1.5">
              Installation
            </p>
            <p className="font-['inter-rag'] text-[12px] text-white/70 leading-tight">
              Install and configure the library in your project.
            </p>
          </a>

          <a
            href="/docs/components"
            className="group p-5 rounded-[12px] bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
          >
            <p className="font-['inter-semi'] text-[14px] text-white/70 group-hover:text-white/90 transition-colors mb-1.5">
              Components
            </p>
            <p className="font-['inter-rag'] text-[12px] text-white/70 leading-tight">
              Browse all available components.
            </p>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="font-['inter-rag'] text-[12px] text-white/15">
            Aphelion UI — Built for developers who value structure.
          </p>
        </div>
      </div>
    </div>
  );
}
