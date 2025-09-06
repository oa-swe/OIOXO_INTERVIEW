// components/CardColumn.tsx
import { CardItem } from "./CardItem";

interface CardColumnProps {
  title?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  items: Array<{
    id?: string;
    icon?: any;
    title?: any;
    description?: any;
    callToAction?: any;
    render?: boolean;
  }>;
  className?: string;
  render?: boolean;
}

export function CardColumn({
  title,
  items,
  className = "",
  render = true,
}: CardColumnProps) {
  if (!render) return null;

  const validItems = items.filter((item) => item.render !== false);

  if (validItems.length === 0 && !title?.render) return null;

  return (
    <div className={`col-md-3 mb-4 ${className}`}>
      <div className="card border-0 bg-transparent">
        <div className="card-body p-0">
          {title?.render && (
            <h6
              className="fw-semibold text-body-secondary mb-3"
              style={{ color: title.color }}
              id={title.id}
            >
              {title.text}
            </h6>
          )}

          {validItems.map((item, index) => (
            <CardItem
              key={index}
              id={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              callToAction={item.callToAction}
              render={item.render}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
