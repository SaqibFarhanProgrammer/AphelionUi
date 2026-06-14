'use client';

import { ArrowRight, Star } from 'lucide-react';

const avatars = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
];

const tabs = [
  'Hero Sections',
  'Features',
  'Bento Grids',
  'Parallax Blocks',
  'Keyboard',
  'Glowing Effect',
  'Glare Card',
  'Canvas Card',
  'Text Reveal',
];

export default function Hero() {
  return (
    <section className="relative bg-[#0A0A0A] min-h-screen pt-20 pb-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center pt-12">
          <h1 className="text-white text-[clamp(40px,6vw,72px)] font-bold leading-[1.05] tracking-[-0.03em] mb-6 max-w-[800px]">
            Ship landing pages at lightning speed.
          </h1>

          <p className="text-white/40 text-[15px] leading-[1.7] max-w-[560px] mb-8">
            200+ production-ready components, blocks and templates that make
            your site feel like you hired a design team. Copy, paste, customize,
            no wrestling with Framer Motion animations or Tailwind styling.
          </p>
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`User ${i + 1}`}
                    className="w-9 h-9 rounded-full border-2 border-[#0A0A0A] object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-0.5 ml-1">
                50+ Developer Contriuting
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-12">
            <a
              href="#components"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-white hover:bg-white/90 text-[#0A0A0A] text-[13px] font-semibold rounded-lg transition-all duration-200"
            >
              Browse Components
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-white/[0.12] hover:border-white/[0.25] text-white/70 hover:text-white text-[13px] font-medium rounded-lg transition-all duration-200"
            >
              Get All-Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
