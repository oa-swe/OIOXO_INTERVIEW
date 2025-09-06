// components/Textarea.tsx
interface TextareaProps {
  id?: string;
  label?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  placeholder?: string;
  borderColor?: string;
  rows?: number;
  padding?: string;
  className?: string;
  render?: boolean;
}

export function Textarea({
  id,
  label,
  placeholder,
  borderColor,
  rows = 4,
  padding = "12px",
  className = "",
  render = true,
}: TextareaProps) {
  if (!render) return null;

  return (
    <div className={className}>
      {label?.render && (
        <label
          className="form-label fw-medium"
          style={{ color: label?.color }}
          id={label?.id}
        >
          {label?.text}
        </label>
      )}
      <textarea
        className="form-control"
        rows={rows}
        placeholder={placeholder}
        style={{ borderColor, padding }}
        id={id}
      ></textarea>
    </div>
  );
}
