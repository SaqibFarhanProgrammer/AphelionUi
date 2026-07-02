'use client';

import { useState } from 'react';
import { X, Menu, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const navLinks = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Showcase', href: '/showcase' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
      <div className="flex items-center justify-between h-[52px] px-2 pr-2 pl-5 bg-[#0A0A0A]/90 backdrop-blur-xl rounded-full border border-white/[0.08]  max-w-[70%] w-full mx-4">
        <a
          href="/"
          className="flex font-[a] items-center gap-2 text-white font-semibold text-[13px] tracking-[0.02em] uppercase shrink-0"
        >
          Aphelion UI
        </a>

        <div className="hidden md:flex items-center gap-0.5 mx-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-[13px] font-[inter-rag] text-white/60 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.06]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full text-white/40 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={15} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full text-white/40 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={14} strokeWidth={1.8} />
          </a>
          <a
            href="#contribute"
            className="flex font-[inter-rag] items-center gap-1.5 h-[36px] px-4 bg-white hover:bg-white/90 text-black text-[12px] font-semibold tracking-[0.01em] rounded-full transition-all duration-200"
          >
            Contribute
            <ArrowUpRight size={13} strokeWidth={2.2} />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-full text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={18} strokeWidth={1.8} />
          ) : (
            <Menu size={18} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed top-[76px] left-4 right-4 rounded-[20px] border border-white/[0.08] bg-[#0A0A0A]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-[13px] font-medium text-white/60 hover:text-white hover:bg-white/[0.04] rounded-xl transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/[0.06]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-[13px] font-medium text-white/50 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all duration-200"
              >
                <FaGithub size={15} />
                GitHub
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-[13px] font-medium text-white/50 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all duration-200"
              >
                <X size={14} strokeWidth={1.8} />X
              </a>
              <a
                href="#contribute"
                className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-white/90 text-black text-[12px] font-semibold rounded-full transition-all duration-200"
              >
                Contribute
                <ArrowUpRight size={12} strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
