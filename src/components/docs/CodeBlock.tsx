'use client';

import { useState, useMemo } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

// Token types for syntax highlighting
interface Token {
  text: string;
  type:
    | 'default'
    | 'keyword'
    | 'string'
    | 'tag'
    | 'attr'
    | 'number'
    | 'comment';
}

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  const keywords = [
    'import',
    'export',
    'from',
    'return',
    'function',
    'const',
    'let',
    'var',
    'if',
    'else',
    'for',
    'while',
    'class',
    'interface',
    'type',
    'default',
    'as',
    'async',
    'await',
    'new',
    'this',
    'typeof',
    'instanceof',
  ];

  let remaining = line;

  while (remaining.length > 0) {
    // Comment
    const commentMatch = remaining.match(/^(\/\/.*)/);
    if (commentMatch) {
      tokens.push({ text: commentMatch[1], type: 'comment' });
      remaining = remaining.slice(commentMatch[1].length);
      continue;
    }

    // String (double quotes)
    const stringMatch = remaining.match(/^("(?:[^"\\]|\\.)*")/);
    if (stringMatch) {
      tokens.push({ text: stringMatch[1], type: 'string' });
      remaining = remaining.slice(stringMatch[1].length);
      continue;
    }

    // String (single quotes)
    const singleStringMatch = remaining.match(/^('(?:[^'\\]|\\.)*')/);
    if (singleStringMatch) {
      tokens.push({ text: singleStringMatch[1], type: 'string' });
      remaining = remaining.slice(singleStringMatch[1].length);
      continue;
    }

    // JSX tag
    const tagMatch = remaining.match(/^(<\/?)([A-Za-z][A-Za-z0-9]*)/);
    if (tagMatch) {
      tokens.push({ text: tagMatch[1] + tagMatch[2], type: 'tag' });
      remaining = remaining.slice(tagMatch[0].length);
      continue;
    }

    // JSX attribute
    const attrMatch = remaining.match(/^([a-zA-Z][a-zA-Z0-9-]*)=/);
    if (attrMatch) {
      tokens.push({ text: attrMatch[1], type: 'attr' });
      tokens.push({ text: '=', type: 'default' });
      remaining = remaining.slice(attrMatch[0].length);
      continue;
    }

    // Keyword
    const keywordMatch = remaining.match(
      new RegExp(`^(${keywords.join('|')})\\b`)
    );
    if (keywordMatch) {
      tokens.push({ text: keywordMatch[1], type: 'keyword' });
      remaining = remaining.slice(keywordMatch[1].length);
      continue;
    }

    // Number
    const numMatch = remaining.match(/^(\d+)/);
    if (numMatch) {
      tokens.push({ text: numMatch[1], type: 'number' });
      remaining = remaining.slice(numMatch[1].length);
      continue;
    }

    // Default (single char)
    tokens.push({ text: remaining[0], type: 'default' });
    remaining = remaining.slice(1);
  }

  return tokens;
}

const tokenColors: Record<Token['type'], string> = {
  default: 'text-white/70',
  keyword: 'text-[#FF7B72]',
  string: 'text-[#A5D6FF]',
  tag: 'text-[#7EE787]',
  attr: 'text-[#79C0FF]',
  number: 'text-[#79C0FF]',
  comment: 'text-[#8B949E]',
};

export default function CodeBlock({
  code,
  language = 'tsx',
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const lines = useMemo(() => code.split('\n'), [code]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-[9px] border border-white/[0.08] bg-[#1b1b1b] overflow-hidden">
      <div className="flex items-center justify-between pl-4   border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <span className="text-white/25 text-[11px] font-['inter-rag']">
            {language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center justify-center w-8 h-8 rounded-md text-white/50 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
          aria-label="Copy code"
        >
          {copied ? (
            <Check size={15} strokeWidth={2} className="text-emerald-400" />
          ) : (
            <Copy size={15} strokeWidth={1.8} />
          )}
        </button>
      </div>

      <div className="overflow-x-auto remove-scroll">
        <pre className="px-0 py-4 text-[13px] leading-[1.7] font-['inter-rag']">
          {lines.map((line, i) => {
            const tokens = tokenizeLine(line);
            return (
              <div key={i} className="flex">
                <span className="shrink-0 w-[48px] text-right pr-4 text-white/20 text-[12px] select-none">
                  {i + 1}
                </span>
                <code>
                  {tokens.length === 0 ? (
                    <span>&nbsp;</span>
                  ) : (
                    tokens.map((token, ti) => (
                      <span key={ti} className={tokenColors[token.type]}>
                        {token.text}
                      </span>
                    ))
                  )}
                </code>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
}
