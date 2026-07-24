interface DocsSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function DocsSection({
  title,
  description,
  children,
}: DocsSectionProps) {
  return (
    <div className="mb-12">
      <h3 className="font-['inter-bold'] text-[18px] text-white/90 mb-2">
        {title}
      </h3>
      <p className="font-['inter-rag'] text-[14px] text-white/80 mb-5 leading-relaxed">
        {description}
      </p>
      {children}
    </div>
  );
}
