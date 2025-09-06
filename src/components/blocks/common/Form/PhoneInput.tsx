// components/PhoneInput.tsx
interface SelectOption {
  id?: string;
  text?: string;
  color?: string;
  render?: boolean;
}

interface PhoneInputProps {
  id?: string;
  label?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  select?: {
    id?: string;
    placeholder?: string;
    borderColor?: string;
    options?: SelectOption[];
    render?: boolean;
  };
  className?: string;
  render?: boolean;
}

export function PhoneInput({
  id,
  label,
  select,
  className = "",
  render = true,
}: PhoneInputProps) {
  if (!render) return null;

  const validOptions =
    select?.options?.filter((opt) => opt.render !== false) || [];

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
      <div className="input-group">
        {select?.render && (
          <>
            <select
              className="form-select w-auto flex-grow-0"
              style={{ borderColor: select.borderColor }}
            >
              {validOptions.map((option, index) => (
                <option
                  key={index}
                  style={{ color: option.color }}
                  id={option.id}
                >
                  {option.text}
                </option>
              ))}
            </select>
            <input
              type="tel"
              className="form-control"
              placeholder={select.placeholder}
              style={{
                borderColor: select.borderColor,
                padding: "12px",
              }}
              id={id}
            />
          </>
        )}
      </div>
    </div>
  );
}
