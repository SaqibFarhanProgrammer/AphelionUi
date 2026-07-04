'use client';

import { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

const packageManagers = ['pnpm', 'npm', 'yarn', 'bun'] as const;

type PackageManager = (typeof packageManagers)[number];

interface InstallCommandProps {
  command: string; // e.g. "dlx shadcn@latest apply a2r6bw"
}

export default function InstallCommand({ command }: InstallCommandProps) {
  const [pm, setPm] = useState<PackageManager>('pnpm');
  const [copied, setCopied] = useState(false);

  const commands: Record<PackageManager, string> = {
    pnpm: `pnpm ${command}`,
    npm: `npx ${command}`,
    yarn: `yarn ${command}`,
    bun: `bunx ${command}`,
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(commands[pm]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-[640px] rounded-[9px] border border-white/[0.08] bg-[#1b1b1b] overflow-hidden">
      <div className="flex items-center justify-between pl-4 pr-1 py-1 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {packageManagers.map((m) => (
              <button
                key={m}
                onClick={() => setPm(m)}
                className={`
                  px-3 py-1 rounded-sm text-[13px] transition-all duration-200
                  ${
                    pm === m
                      ? 'bg-white/[0.08] text-white font-[inter-semi]'
                      : 'text-white/35 hover:text-white/60 font-[inter-rag]'
                  }
                `}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center justify-center w-8 h-8 rounded-md text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
          aria-label="Copy command"
        >
          {copied ? (
            <Check size={15} strokeWidth={2} className="text-emerald-400" />
          ) : (
            <Copy size={15} strokeWidth={1.8} />
          )}
        </button>
      </div>

      <div className="px-5 py-4">
        <code className="text-white/70 text-[14px] font-['inter-rag'] tracking-wide select-all">
          {commands[pm]}
        </code>
      </div>
    </div>
  );
}
