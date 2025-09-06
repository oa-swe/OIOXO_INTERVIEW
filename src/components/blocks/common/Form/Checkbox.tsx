// components/Checkbox.tsx
interface CheckboxProps {
  input?: {
    id?: string;
    borderColor?: string;
    render?: boolean;
  };
  label?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  link?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  className?: string;
  render?: boolean;
}

export function Checkbox({
  input,
  label,
  link,
  className = "",
  render = true,
}: CheckboxProps) {
  if (!render) return null;

  return (
    <div className={`form-check ${className}`}>
      {input?.render && (
        <input
          className="form-check-input me-2"
          type="checkbox"
          style={{ borderColor: input.borderColor }}
          id={input.id}
        />
      )}
      {label?.render && (
        <label
          className="form-check-label text-body-secondary"
          style={{ color: label.color }}
          id={label.id}
        >
          {label.text}
          {link?.render && (
            <a
              href="#"
              className="text-body-secondary text-decoration-none ms-1"
              style={{ color: link.color }}
              id={link.id}
            >
              {link.text}
            </a>
          )}
        </label>
      )}
    </div>
  );
}
