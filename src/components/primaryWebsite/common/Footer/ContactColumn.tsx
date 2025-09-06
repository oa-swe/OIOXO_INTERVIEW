// components/ContactColumn.tsx
import { FooterColumn } from "./FooterColumn";

interface ContactItem {
  id?: string;
  text?: string;
  color?: string;
  iconClass?: string;
  iconColor?: string;
  render?: boolean;
}

interface ContactColumnProps {
  title?: string;
  titleId?: string;
  titleColor?: string;
  items: ContactItem[];
  className?: string;
  renderTitle?: boolean;
}

export function ContactColumn({
  title,
  titleId,
  titleColor,
  items,
  className = "",
  renderTitle = true,
}: ContactColumnProps) {
  return (
    <FooterColumn
      title={title}
      titleId={titleId}
      titleColor={titleColor}
      items={items}
      className={className}
      renderTitle={renderTitle}
    />
  );
}
