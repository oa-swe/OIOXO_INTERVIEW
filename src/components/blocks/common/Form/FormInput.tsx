// components/FormInput.tsx
interface FormInputProps {
  id?: string;
  type?: string;
  label?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  placeholder?: string;
  color?: string;
  padding?: string;
  className?: string;
  render?: boolean;
}

export function FormInput({
  id,
  type = "text",
  label,
  placeholder,
  color,
  padding = "12px",
  className = "",
  render = true,
}: FormInputProps) {
  if (!render) return null;

  return (
    <div className={className}>
      {label?.render && (
        <label
          className="form-label fw-medium"
          style={{ color: label.color }}
          id={label.id}
        >
          {label.text}
        </label>
      )}
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        style={{ color, padding }}
        id={id}
      />
    </div>
  );
}
