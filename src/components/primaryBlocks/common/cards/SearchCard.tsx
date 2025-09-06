// components/SearchCard.tsx
interface SearchFieldProps {
  title?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  value?: {
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

export function SearchField({
  title,
  value,
  className = "",
  render = true,
}: SearchFieldProps) {
  if (!render) return null;

  return (
    <div className={className}>
      {title?.render && (
        <label
          className="form-label small text-body-secondary mb-1"
          style={{ color: title.color }}
          id={title.id}
        >
          {title.text}
        </label>
      )}
      {value?.render && (
        <p className="fw-bold mb-0" style={{ color: value.color }}>
          {value.text}
          {value.iconClass && (
            <i
              className={`${value.iconClass} ms-2`}
              style={{ color: value.iconColor }}
            ></i>
          )}
        </p>
      )}
    </div>
  );
}
