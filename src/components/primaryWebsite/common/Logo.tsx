/* eslint-disable @next/next/no-img-element */
// components/Logo.tsx
interface LogoProps {
  id?: string;
  image?: {
    id?: string;
    img_src?: string;
    render?: boolean;
  };
  title?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  className?: string;
  render?: boolean;
}

export function Logo({
  id,
  image,
  title,
  className = "",
  render = true,
}: LogoProps) {
  if (!render) return null;

  return (
    <div
      id={id}
      className={`navbar-brand d-flex align-items-center ${className}`}
    >
      {image?.render && (
        <img
          id={image.id}
          src={image.img_src || ""}
          alt="Logo"
          className="me-2"
        />
      )}
      {title?.render && (
        <span
          className="fs-3 fw-bold align-middle"
          id={title.id}
          style={{ color: title.color || "red" }}
        >
          {title.text}
        </span>
      )}
    </div>
  );
}
