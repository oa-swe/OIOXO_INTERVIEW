// components/FooterSection.tsx
interface FooterSectionProps {
  backgroundColor?: string;
  className?: string;
  children: React.ReactNode;
}

export function FooterSection({
  backgroundColor = "#f8f9fa",
  className = "",
  children,
}: FooterSectionProps) {
  return (
    <div className={`py-5 ${className}`} style={{ backgroundColor }}>
      <div className="container">{children}</div>
    </div>
  );
}
