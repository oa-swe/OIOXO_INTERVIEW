// components/IconBadge.tsx
interface IconBadgeProps {
  id?: string;
  iconClass?: string;
  iconColor?: string;
  backgroundColor?: string;
  size?: number;
  className?: string;
  render?: boolean;
}

export function IconBadge({
  id,
  iconClass,
  iconColor = "white",
  backgroundColor,
  size = 32,
  className = "",
  render = true,
}: IconBadgeProps) {
  if (!render) return null;

  return (
    <span
      className={`rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor,
      }}
      id={id}
    >
      <i
        className={iconClass}
        style={{
          color: iconColor,
          fontSize: "0.9rem",
        }}
      ></i>
    </span>
  );
}
