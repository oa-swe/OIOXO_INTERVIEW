// components/SidebarColumn.tsx
import { SidebarItem } from "./SidebarItem";

interface SidebarColumnProps {
  backgroundColor?: string;
  items: Array<{
    id?: string;
    image?: any;
    title?: any;
    badge?: any;
    description?: any;
    callToAction?: any;
    render?: boolean;
  }>;
  className?: string;
  render?: boolean;
}

export function SidebarColumn({
  backgroundColor = "white",
  items,
  className = "",
  render = true,
}: SidebarColumnProps) {
  if (!render) return null;

  const validItems = items.filter((item) => item.render !== false);

  if (validItems.length === 0) return null;

  return (
    <div className={`col-md-3 mb-4 ${className}`}>
      <div className="ps-3" style={{ backgroundColor }}>
        {validItems.map((item, index) => (
          <SidebarItem
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            badge={item.badge}
            description={item.description}
            callToAction={item.callToAction}
            render={item.render}
          />
        ))}
      </div>
    </div>
  );
}
