'use client';

import React from 'react';

// ─── Navbar Component ─────────────────────────────────────────────────────────

export default function DocsNavbar() {
  const navLinks = [
    { label: 'Docs', href: '/docs' },
    { label: 'Components', href: '/docs/components' },
    { label: 'GitHub', href: 'https://github.com' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0A0A0A] backdrop-blur-md     ">
      <div className="w-full pl-74 pr-10  mx-auto h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-['inter-semi'] text-[13px] text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 h-9 pl-4 pr-10 rounded-[10px] bg-white/[0.03] border border-white/[0.06] text-[13px] font-['inter-rag'] text-white/70 placeholder:text-white/20 outline-none focus:border-white/[0.15] focus:bg-white/[0.05] transition-all duration-200"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 font-['inter-rag'] text-[11px] text-white/15">
              /
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 h-8 rounded-[8px] bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.10] transition-all duration-200"
          >
            <svg
              className="w-4 h-4 text-white/50"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="font-['inter-semi'] text-[12px] text-white/50">
              2.4k
            </span>
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-[8px] bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.10] transition-all duration-200"
          >
            <svg
              className="w-3.5 h-3.5 text-white/50"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
