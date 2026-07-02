import Sidebar from '@/components/Sidebar';
import React from 'react';

export default function Applicationlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="w-64 shrink-0">
        <Sidebar />
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
