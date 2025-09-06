// components/NavItem.tsx (updated)
interface NavItemProps {
  id?: string;
  text?: string;
  color?: string;
  iconClass?: string;
  iconColor?: string;
  active?: boolean;
  href?: string;
  className?: string;
  render?: boolean;
}

export function NavItem({
  id,
  text,
  color = "black",
  iconClass,
  iconColor,
  active = false,
  href = "#",
  className = "",
  render = true,
}: NavItemProps) {
  if (!render) return null;

  return (
    <li className="nav-item">
      <a
        id={id}
        href={href}
        style={{ color }}
        className={`nav-link fs-5 fw-medium px-3 ${active ? "active" : ""} ${className}`}
        aria-current={active ? "page" : undefined}
      >
        {iconClass && (
          <i className={`${iconClass} me-1`} style={{ color: iconColor }}></i>
        )}
        {text || ""}
      </a>
    </li>
  );
}
