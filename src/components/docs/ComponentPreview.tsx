interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
}

export default function ComponentPreview({
  children,
  className = '',
}: ComponentPreviewProps) {
  return (
    <div
      className={`rounded-[10px] border border-white/[0.06] bg-[#0D0D0D] p-6 flex items-center justify-center min-h-[280px] ${className}`}
    >
      {children}
    </div>
  );
}
