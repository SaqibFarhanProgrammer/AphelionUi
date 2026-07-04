'use client';

import React from 'react';

export interface PropItem {
  name: string;
  type: string;
  default: string;
  description: string;
}

interface PropsTableProps {
  props: PropItem[];
}

export default function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="rounded-[10px] border border-white/[0.06] overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/[0.06]">
            <th className="text-left px-5 py-3.5 font-['inter-semi'] text-[13px] text-white/80">
              Prop
            </th>
            <th className="text-left px-5 py-3.5 font-['inter-semi'] text-[13px] text-white/80">
              Type
            </th>
            <th className="text-left px-5 py-3.5 font-['inter-semi'] text-[13px] text-white/80">
              Default
            </th>
            <th className="text-left px-5 py-3.5 font-['inter-semi'] text-[13px] text-white/80">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="border-b border-white/[0.04] last:border-0"
            >
              <td className="px-5 py-4 font-['inter-semi'] text-[13px] text-white/90">
                {prop.name}
              </td>
              <td className="px-5 py-4 font-['inter-rag'] text-[13px] text-white/70">
                {prop.type}
              </td>
              <td className="px-5 py-4 font-['inter-rag'] text-[13px] text-white/70">
                {prop.default}
              </td>
              <td className="px-5 py-4 font-['inter-rag'] text-[13px] text-white/70">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
