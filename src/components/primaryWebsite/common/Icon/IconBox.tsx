// components/IconBox.tsx
interface IconBoxProps {
  id?: string;
  iconClass?: string;
  iconColor?: string;
  backgroundColor?: string;
  size?: number;
  className?: string;
  render?: boolean;
}

export function IconBox({
  id,
  iconClass,
  iconColor = "white",
  backgroundColor = "#fd580d",
  size = 50,
  className = "",
  render = true,
}: IconBoxProps) {
  if (!render) return null;

  return (
    <div
      className={`d-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor,
      }}
      id={id}
    >
      <i
        className={iconClass || "fas fa-check"}
        style={{ color: iconColor }}
      ></i>
    </div>
  );
}
