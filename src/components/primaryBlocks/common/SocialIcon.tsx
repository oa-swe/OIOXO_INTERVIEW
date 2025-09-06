/* eslint-disable @next/next/no-img-element */
// components/SocialIcon.tsx
interface SocialIconProps {
  id?: string;
  iconSrc?: string;
  iconClass?: string;
  color?: string;
  backgroundColor?: string;
  href?: string;
  className?: string;
}

export function SocialIcon({
  id,
  iconSrc,
  iconClass,
  color,
  backgroundColor,
  href = "#",
  className = "",
}: SocialIconProps) {
  return (
    <div id={id} className={`feature-item ${className}`}>
      <a href={href}>
        {iconSrc ? (
          <img
            className="horizontally-flip"
            src={iconSrc}
            width="32"
            height="32"
            alt=""
          />
        ) : (
          <i
            style={{
              color,
              backgroundColor,
            }}
            className={`${iconClass} horizontally-flip p-1`}
          ></i>
        )}
      </a>
    </div>
  );
}
