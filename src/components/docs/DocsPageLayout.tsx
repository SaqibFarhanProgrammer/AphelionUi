import React from 'react';
import { OnThisPage } from './DocsPageSidebar';

interface DocsPageLayoutProps {
  sideMapGroup: any;
  category: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function DocsPageLayout({
  title,
  description,
  children,
  sideMapGroup,
}: DocsPageLayoutProps) {
  return (
    <div
      className="min-h-screen w-full flex bg-[#0A0A0A]"
      style={{ fontFamily: 'sans-serif' }}
    >
      <div className="w-[90%]">
        <div className="border-b border-white/[0.04]">
          <div className="max-w-[720px] mx-auto px-6 py-16 md:py-20">
            <p className="font-['inter-semi'] text-[11px] text-white/50 tracking-[0.15em] uppercase mb-5">
              Components
            </p>
            <h1 className="font-['inter-bold'] text-[36px] md:text-[48px] text-white leading-[1.1] tracking-tight mb-4">
              {title}
            </h1>
            <p className="font-['inter-rag'] text-[15px] text-white/70 leading-[1.7] max-w-[480px]">
              {description}
            </p>
          </div>
          <div className="max-w-[720px] mx-auto px-6 py-12 md:py-16">
            {children}
          </div>
        </div>
      </div>

      <div className="w-[20%]">
        <OnThisPage items={sideMapGroup} />
      </div>
    </div>
  );
}
