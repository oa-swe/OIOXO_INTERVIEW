// components/MobileSearchCard.tsx
interface MobileSearchCardProps {
  input?: {
    placeholder?: string;
    render?: boolean;
  };
  button?: {
    class?: string;
    iconColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: string;
    render?: boolean;
  };
  className?: string;
  render?: boolean;
}

export function MobileSearchCard({
  input,
  button,
  className = "",
  render = true,
}: MobileSearchCardProps) {
  if (!render) return null;

  return (
    <div className={`card d-md-none mb-4 border-0 p-3 shadow-sm ${className}`}>
      <div className="row align-items-center">
        <div className="col-9">
          {input?.render && (
            <input
              type="text"
              className="form-control border-0"
              placeholder={input.placeholder || ""}
              style={{ fontSize: "1.1rem" }}
            />
          )}
        </div>
        <div className="col-3 text-end">
          {button?.render && (
            <button
              className="btn btn-primary rounded-circle p-2"
              style={{
                backgroundColor: button.backgroundColor,
                borderColor: button.borderColor,
                borderRadius: button.borderRadius,
              }}
            >
              {button.class && (
                <i
                  className={button.class}
                  style={{ color: button.iconColor }}
                ></i>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
