// components/NavbarContainer.tsx
interface NavbarContainerProps {
  backgroundColor?: string;
  boxShadowColor?: string;
  padding?: string;
  className?: string;
  children: React.ReactNode;
}

export function NavbarContainer({
  backgroundColor = "white",
  boxShadowColor = "rgba(0, 0, 0, 0.1)",
  padding = "15px 0",
  className = "",
  children,
}: NavbarContainerProps) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${className}`}
      style={{
        backgroundColor,
        boxShadow: `0 2px 4px ${boxShadowColor}`,
        padding,
      }}
    >
      {children}
    </nav>
  );
}
