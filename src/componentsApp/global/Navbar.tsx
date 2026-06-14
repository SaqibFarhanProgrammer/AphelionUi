'use client';

import { useState } from 'react';
import {  X, Menu, ArrowUpRight } from 'lucide-react';
import { FaGithub } from "react-icons/fa";


const navLinks = [
  { label: 'Components', href: '#components' },
  { label: 'Documentation', href: '#docs' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="w-full px-7 mx-auto ">
        <div className="flex items-center justify-between h-[60px]">
          <a
            href="/"
            className="flex items-center gap-2 text-white font-semibold text-[13px] tracking-[0.02em] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#012FFE]" />
            Aphelion UI
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-3 py-1.5 text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-md text-white/50 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={16} strokeWidth={1.8} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-md text-white/50 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              aria-label="X (Twitter)"
            >
              <X size={15} strokeWidth={1.8} />
            </a>
            <a
              href="#contribute"
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#012FFE] hover:bg-[#0138FF] text-white text-[12px] font-semibold tracking-[0.01em] rounded-md transition-all duration-200"
            >
              Contribute
              <ArrowUpRight size={13} strokeWidth={2.2} />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-md text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={18} strokeWidth={1.8} />
            ) : (
              <Menu size={18} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#0A0A0A]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-[13px] font-medium text-white/60 hover:text-white hover:bg-white/[0.04] rounded-md transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/[0.06]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-[13px] font-medium text-white/50 hover:text-white hover:bg-white/[0.04] rounded-md transition-all duration-200"
              >
                <Github size={15} strokeWidth={1.8} />
                GitHub
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-[13px] font-medium text-white/50 hover:text-white hover:bg-white/[0.04] rounded-md transition-all duration-200"
              >
                <X size={14} strokeWidth={1.8} />X
              </a>
              <a
                href="#contribute"
                className="flex items-center gap-1.5 px-3.5 py-2 bg-[#012FFE] hover:bg-[#0138FF] text-white text-[12px] font-semibold rounded-md transition-all duration-200"
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
