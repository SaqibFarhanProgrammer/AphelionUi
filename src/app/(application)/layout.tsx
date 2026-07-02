import Sidebar from '@/components/Sidebar';
import React from 'react';

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Pure page ko flexible screen height dein aur overflow hide karein taake double scrollbars na banein
    <div className="flex h-screen w-screen overflow-hidden bg-background text-foreground">
      {/* Sidebar - Yeh apni jagah fixed rahega aur agar buttons zyada hon toh khud scroll hoga */}
      <Sidebar />

      {/* Main Content Workspace */}
      <main className="flex-1 overflow-y-auto px-6 py-8 md:px-10">
        {/* Max width set karne se docs ya panels ki readability behtar ho jati hai */}
        <div className="mx-auto max-w-5xl space-y-6">{children}</div>
      </main>
    </div>
  );
}
