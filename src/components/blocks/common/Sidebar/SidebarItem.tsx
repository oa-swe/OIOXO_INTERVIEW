/* eslint-disable @next/next/no-img-element */
// components/SidebarItem.tsx
interface SidebarItemProps {
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
  badge?: {
    id?: string;
    text?: string;
    color?: string;
    borderColor?: string;
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

export function SidebarItem({
  id,
  image,
  title,
  badge,
  description,
  callToAction,
  className = "",
  render = true,
}: SidebarItemProps) {
  if (!render) return null;

  return (
    <div id={id} className={`card mb-3 border-0 bg-transparent ${className}`}>
      <div className="card-body p-0">
        <div className="row align-items-center">
          <div className="col-3 pe-0">
            {image?.render && (
              <img
                src={image.img_src || "/blocks/images/mayoralven-sidebar-1.png"}
                className="img-fluid rounded"
                alt="App Preview"
                style={{ height: "60px", objectFit: "cover" }}
                id={image.id}
              />
            )}
          </div>

          <div className="col-9">
            {title?.render && (
              <h6
                className="fw-semibold mb-1"
                style={{ color: title.color }}
                id={title.id}
              >
                {title.text}
              </h6>
            )}

            {badge?.render && (
              <span
                className="badge text-body-secondary border-body-secondary mt-1 border"
                style={{
                  color: badge.color || "gray",
                  borderColor: badge.borderColor || "gray",
                }}
                id={badge.id}
              >
                {badge.text}
              </span>
            )}

            {description?.render && (
              <p
                className="small text-body-secondary mt-2 mb-2"
                style={{ color: description.color }}
                id={description.id}
              >
                {description.text}
              </p>
            )}

            {callToAction?.render && (
              <a
                href="#"
                className="text-decoration-none small fw-medium"
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
    </div>
  );
}
