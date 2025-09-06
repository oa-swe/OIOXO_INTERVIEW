// components/FooterColumn.tsx
interface FooterColumnProps {
  title?: string;
  titleId?: string;
  titleColor?: string;
  items: Array<{
    id?: string;
    text?: string;
    color?: string;
    iconClass?: string;
    iconColor?: string;
    href?: string;
    render?: boolean;
  }>;
  className?: string;
  renderTitle?: boolean;
}

export function FooterColumn({
  title,
  titleId,
  titleColor,
  items,
  className = "",
  renderTitle = true,
}: FooterColumnProps) {
  const validItems = items.filter((item) => item.render !== false);

  if (validItems.length === 0 && !title) return null;

  return (
    <div className={className}>
      {renderTitle && title && (
        <div
          className="fw-bold mb-3"
          id={titleId}
          style={{ color: titleColor }}
        >
          {title}
        </div>
      )}
      {validItems.map((item, index) => (
        <a
          key={index}
          href={item.href || "#"}
          className="d-block text-decoration-none mb-2"
          id={item.id}
          style={{ color: item.color || "grey" }}
        >
          {item.iconClass && (
            <i
              className={item.iconClass}
              style={{ color: item.iconColor || "#2196f3" }}
            ></i>
          )}
          {item.iconClass && " "}
          {item.text}
        </a>
      ))}
    </div>
  );
}
