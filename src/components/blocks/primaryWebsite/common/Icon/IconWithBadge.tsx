/* eslint-disable @next/next/no-img-element */
// components/IconWithBadge.tsx
interface Badge {
  text?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  render?: boolean;
}

interface IconWithBadgeProps {
  id?: string;
  iconSrc?: string;
  iconClass?: string;
  color?: string;
  text?: string;
  badge?: Badge;
  href?: string;
  className?: string;
  render?: boolean;
  mobileOnlyText?: boolean;
}

export function IconWithBadge({
  id,
  iconSrc,
  iconClass,
  color = "black",
  text,
  badge,
  href = "#",
  className = "",
  render = true,
  mobileOnlyText = true,
}: IconWithBadgeProps) {
  if (!render) return null;

  return (
    <a
      id={id}
      href={href}
      className={`d-flex align-items-center text-decoration-none text-dark mb-lg-0 me-lg-3 mb-2 ${className}`}
    >
      <span className="position-relative d-flex align-items-center">
        {/* Main Icon */}
        {iconSrc ? (
          <img
            src={iconSrc}
            width="32"
            height="32"
            alt={text || "Icon"}
            className="horizontally-flip"
          />
        ) : (
          <i
            className={`${iconClass} fs-5 horizontally-flip`}
            style={{ color }}
          ></i>
        )}

        {/* Notification Badge */}
        {badge?.render && (
          <span
            className="position-absolute translate-middle badge rounded-pill start-100 top-0"
            style={{
              backgroundColor: badge.backgroundColor || "red",
              color: badge.color || "white",
              border: `1px solid ${badge.borderColor || "white"}`,
            }}
          >
            {badge.text || "3"}
          </span>
        )}
      </span>

      {/* Icon Text - Only visible on mobile by default */}
      {text && (
        <span className={`icon-text ${mobileOnlyText ? "d-lg-none" : ""} ms-2`}>
          {text}
        </span>
      )}
    </a>
  );
}
