// components/TabNavigation.tsx

import { ListItemLink } from "../List/ListLinkItem";

interface TabItem {
  id?: string;
  text?: string;
  color?: string;
  render?: boolean;
  active?: boolean;
}

interface TabNavigationProps {
  items?: TabItem[];
  borderBottomColor?: string;
  className?: string;
  render?: boolean;
}

export function TabNavigation({
  items,
  borderBottomColor = "#1A3E5E",
  className = "",
  render = true,
}: TabNavigationProps) {
  if (!render) return null;

  const validItems = items?.filter((item) => item.render !== false) || [];

  if (validItems.length === 0) return null;

  return (
    <ul
      className={`nav nav-tabs mb-4 ${className}`}
      style={{ borderBottomColor }}
    >
      {validItems.map((item, index) => (
        <ListItemLink
          key={index}
          item={item}
          isActive={item.active || index === 0}
        />
      ))}
    </ul>
  );
}
