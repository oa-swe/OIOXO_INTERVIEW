// components/SectionHeader.tsx
interface SectionHeaderProps {
  upTitle?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  mainTitle?: {
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
  className?: string;
  maxWidth?: string;
  render?: boolean;
}

export function SectionHeader({
  upTitle,
  mainTitle,
  description,
  className = "",
  maxWidth = "700px",
  render = true,
}: SectionHeaderProps) {
  if (!render) return null;

  return (
    <div className={`mb-5 text-center ${className}`}>
      {upTitle?.render && (
        <p
          className="text-purple fw-medium mb-2"
          style={{ color: upTitle.color }}
          id={upTitle.id}
        >
          {upTitle.text}
        </p>
      )}

      {mainTitle?.render && (
        <h1
          className="display-5 fw-bold mb-3"
          style={{ color: mainTitle.color }}
          id={mainTitle.id}
        >
          {mainTitle.text}
        </h1>
      )}

      {description?.render && (
        <div className="mx-auto" style={{ maxWidth }}>
          <p
            className="lead text-body-secondary"
            style={{ color: description.color }}
            id={description.id}
          >
            {description.text}
          </p>
        </div>
      )}
    </div>
  );
}
