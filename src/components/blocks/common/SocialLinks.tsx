// components/SocialLinks.tsx
import { SocialIcon } from "./SocialIcon";

interface SocialLinkItem {
  id?: string;
  icon_src?: string;
  class?: string;
  color?: string;
  background_color?: string;
}

interface SocialLinksProps {
  id?: string;
  children?: SocialLinkItem[];
  className?: string;
}

export function SocialLinks({
  id,
  children,
  className = "",
}: SocialLinksProps) {
  if (!children || children.length === 0) return null;

  return (
    <div id={id} className={`d-flex gap-4 ${className}`}>
      {children.map((child, idx) => (
        <SocialIcon
          key={idx}
          id={child.id}
          iconSrc={child.icon_src}
          iconClass={child.class}
          color={child.color}
          backgroundColor={child.background_color}
        />
      ))}
    </div>
  );
}
