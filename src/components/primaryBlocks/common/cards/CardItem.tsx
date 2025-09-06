// components/CardItem.tsx

import { IconBadge } from "../Icon/IconBadge";

interface CardItemProps {
  id?: string;
  icon?: {
    id?: string;
    class?: string;
    iconColor?: string;
    backgroundColor?: string;
    render?: boolean;
  };
  title?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  description?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  callToAction?: {
    id?: string;
    text?: string;
    color?: string;
    iconClass?: string;
    iconColor?: string;
    render?: boolean;
  };
  className?: string;
  render?: boolean;
}

export function CardItem({
  id,
  icon,
  title,
  description,
  callToAction,
  className = "",
  render = true,
}: CardItemProps) {
  if (!render) return null;

  return (
    <div id={id} className={`d-flex align-items-start mb-3 ${className}`}>
      <div className="d-flex align-items-start">
        <IconBadge
          id={icon?.id}
          iconClass={icon?.class}
          iconColor={icon?.iconColor}
          backgroundColor={icon?.backgroundColor}
          render={icon?.render}
        />

        <div className="flex-grow-1">
          {title?.render && (
            <h6
              className="fw-medium mb-1"
              style={{ color: title.color }}
              id={title.id}
            >
              {title.text}
            </h6>
          )}

          {description?.render && (
            <p
              className="small text-body-secondary mb-1"
              style={{ color: description.color }}
              id={description.id}
            >
              {description.text}
            </p>
          )}

          {callToAction?.render && (
            <a
              href="#"
              className="text-decoration-none small"
              style={{ color: callToAction.color }}
              id={callToAction.id}
            >
              {callToAction.text}
              {callToAction.iconClass && (
                <i
                  className={`${callToAction.iconClass} ms-1`}
                  style={{ color: callToAction.iconColor }}
                ></i>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
