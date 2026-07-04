import React from 'react';

interface NavItem {
  label: string;
  href: string;
  description: string;
}

interface BottomNavProps {
  items: NavItem[];
}

export default function BottomNav({ items }: BottomNavProps) {
  return (
    <div className="mt-16 pt-8 border-t border-white/[0.06]">
      <p className="font-['inter-semi'] text-[11px] text-white/50 mb-5 uppercase tracking-wider">
        Next
      </p>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group p-5 rounded-[12px] bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
          >
            <p className="font-['inter-semi'] text-[14px] text-white/70 group-hover:text-white/90 transition-colors mb-1.5">
              {item.label}
            </p>
            <p className="font-['inter-rag'] text-[12px] text-white/80 leading-relaxed">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
