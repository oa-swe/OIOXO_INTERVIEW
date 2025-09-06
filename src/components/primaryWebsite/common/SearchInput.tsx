/* eslint-disable @next/next/no-img-element */
// components/SearchInput.tsx
interface SearchInputProps {
  id?: string;
  iconSrc?: string;
  iconClass?: string;
  iconColor?: string;
  placeholder?: string;
  placeholderColor?: string;
  borderColor?: string;
  borderRadius?: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
  render?: boolean;
  mobileOnly?: boolean;
}

export function SearchInput({
  id,
  iconSrc,
  iconClass,
  iconColor,
  placeholder,
  placeholderColor,
  borderColor,
  borderRadius,
  color,
  backgroundColor,
  className = "",
  render = true,
  mobileOnly = true,
}: SearchInputProps) {
  if (!render) return null;

  return (
    <div
      id={id}
      className={`input-group ${mobileOnly ? "d-lg-none" : ""} mb-lg-0 me-lg-3 mb-3 ${className}`}
    >
      <span
        className="input-group-text border-end-0 rounded-end-0 bg-transparent"
        style={{
          borderColor,
          borderRadius,
        }}
      >
        <a href="#">
          {iconSrc ? (
            <img
              src={iconSrc}
              width="32"
              height="32"
              alt="Search"
              className="horizontally-flip"
            />
          ) : (
            <i
              style={{ color: iconColor }}
              className={`${iconClass} fs-5 horizontally-flip`}
            ></i>
          )}
        </a>
      </span>
      <input
        type="text"
        className="form-control search-box-input border-start-0 rounded-start-0"
        placeholder={placeholder}
        aria-label={placeholder}
        style={{
          borderColor,
          borderRadius,
          color,
          backgroundColor,
        }}
      />
      <style>{`
        .search-box-input::placeholder {
          color: ${placeholderColor};
        }
      `}</style>
    </div>
  );
}
