import DocsNavbar from '@/components/docs/DocsNavbar';
import Sidebar from '@/components/Sidebar';
import React from 'react';

export default function Applicationlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
        <DocsNavbar />

      <aside className="w-64 shrink-0">
        <Sidebar />
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="pt-6">{children}</div>
      </main>
    </div>
  );
}
