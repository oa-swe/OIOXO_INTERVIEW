// components/IconGroup.tsx
import { IconWithBadge } from "./IconWithBadge";

interface IconItem {
  id?: string;
  iconSrc?: string;
  class?: string;
  color?: string;
  text?: string;
  children?: {
    text?: string;
    color?: string;
    background_color?: string;
    border_color?: string;
    render?: boolean;
  };
  render?: boolean;
}

interface IconGroupProps {
  id?: string;
  items?: IconItem[];
  className?: string;
  render?: boolean;
  mobileOnlyText?: boolean;
}

export function IconGroup({
  id,
  items,
  className = "",
  render = true,
  mobileOnlyText = true,
}: IconGroupProps) {
  if (!render) return null;

  const validItems = items?.filter((item) => item.render !== false) || [];

  if (validItems.length === 0) return null;

  return (
    <div
      id={id}
      className={`d-flex flex-column flex-lg-row align-items-start align-items-lg-center mb-lg-0 me-lg-3 three-icons mb-3 ${className}`}
    >
      {validItems.map((item, index) => (
        <IconWithBadge
          key={index}
          id={item.id}
          iconSrc={item.iconSrc}
          iconClass={item.class}
          color={item.color}
          text={item.text}
          badge={
            item.children
              ? {
                  text: item.children.text,
                  color: item.children.color,
                  backgroundColor: item.children.background_color,
                  borderColor: item.children.border_color,
                  render: item.children.render !== false,
                }
              : undefined
          }
          mobileOnlyText={mobileOnlyText}
        />
      ))}
    </div>
  );
}
