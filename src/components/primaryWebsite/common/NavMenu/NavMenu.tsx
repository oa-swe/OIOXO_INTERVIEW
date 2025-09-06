// components/NavMenu.tsx (updated)

import { NavItem } from "../Navbar/NavItem";

interface MenuItem {
  id?: string;
  text?: string;
  color?: string;
  class?: string;
  icon_color?: string;
  active?: boolean;
  render?: boolean;
}

interface NavMenuProps {
  id?: string;
  items?: MenuItem[];
  className?: string;
  render?: boolean;
}

export function NavMenu({
  id,
  items,
  className = "",
  render = true,
}: NavMenuProps) {
  if (!render) return null;

  const validItems = items?.filter((item) => item.render !== false) || [];

  if (validItems.length === 0) return null;

  return (
    <ul id={id} className={`navbar-nav mb-lg-0 mx-auto mb-2 ${className}`}>
      {validItems.map((item, index) => (
        <NavItem
          key={index}
          id={item.id}
          text={item.text}
          color={item.color}
          iconClass={item.class}
          iconColor={item.icon_color}
          active={item.active}
          className="px-3"
        />
      ))}
    </ul>
  );
}
