// src/components/ComponentPreview.tsx
import * as React from "react"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
}

export function ComponentPreview({ name, className, ...props }: ComponentPreviewProps) {
  return (
    <div 
      className={`my-4 flex min-h-[200px] items-center justify-center rounded-md border p-10 ${className}`} 
      {...props}
    >
      {/* Yeh temporary text hai. Baad mein aap yahan dynamic components load karwa sakte hain */}
      <p className="text-sm text-muted-foreground">
        Preview for component: <span className="font-mono text-zinc-300">{name}</span>
      </p>
    </div>
  )
}