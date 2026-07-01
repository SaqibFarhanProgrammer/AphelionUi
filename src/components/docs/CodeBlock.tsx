"use client"


type Props = {
  children: React.ReactNode
}

export default function CodeBlock({ children }: Props) {
  // children is usually a <code className="language-...">...</code>
  // extract code string
  const codeString =
    // @ts-ignore
    (children && (children as any).props && (children as any).props.children) || String(children)

  const className =
    // @ts-ignore
    (children && (children as any).props && (children as any).props.className) || ""

  const language = className.replace("language-", "")

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(String(codeString))
    } catch (e) {
      /* ignore */
    }
  }

  return (
    <div className="my-4 rounded-lg border border-border bg-card p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-muted">{language || "code"}</span>
        <button
          onClick={copy}
          className="text-xs px-2 py-1 rounded bg-muted/40 hover:bg-muted/60"
        >
          Copy
        </button>
      </div>
      <pre className="overflow-x-auto text-sm"><code>{codeString}</code></pre>
    </div>
  )
}
