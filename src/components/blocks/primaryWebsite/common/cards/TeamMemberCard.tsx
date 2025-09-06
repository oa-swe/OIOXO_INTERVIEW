/* eslint-disable @next/next/no-img-element */
// components/TeamMemberCard.tsx
interface SocialIcon {
  id?: string;
  class?: string;
  color?: string;
  render?: boolean;
}

interface TeamMemberCardProps {
  id?: string;
  image?: {
    id?: string;
    img_src?: string;
    color?: string;
    alt?: string;
    render?: boolean;
  };
  fullName?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  jobTitle?: {
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
  socialIcons?: SocialIcon[];
  className?: string;
  render?: boolean;
}

export function TeamMemberCard({
  id,
  image,
  fullName,
  jobTitle,
  description,
  socialIcons = [],
  className = "",
  render = true,
}: TeamMemberCardProps) {
  if (!render) return null;

  const validSocialIcons = socialIcons.filter((icon) => icon.render !== false);

  return (
    <div id={id} className={`col-md-6 col-lg-3 ${className}`}>
      <style>
        {`
                .elevateOnHoverY {
                    transition: transform 0.6s ease;
                }
                .elevateOnHoverY:hover {
                    transform: translateY(-5px);
                }
            `}
      </style>
      <div className="card elevateOnHoverY h-100 border-0 transition-all">
        {image?.render && (
          <img
            className="card-img-top object-fit-cover"
            style={{
              height: "350px",
              color: image.color,
            }}
            alt={image.alt || ""}
            src={image.img_src || ""}
            id={image.id}
          />
        )}

        <div className="card-body px-0">
          {fullName?.render && (
            <h5
              className="card-title fw-semibold mb-1"
              style={{ color: fullName.color }}
              id={fullName.id}
            >
              {fullName.text}
            </h5>
          )}

          {jobTitle?.render && (
            <p
              className="text-purple fw-bold text-body-secondary mb-2"
              style={{ color: jobTitle.color }}
              id={jobTitle.id}
            >
              {jobTitle.text}
            </p>
          )}

          {description?.render && (
            <p
              className="text-body-secondary small mb-3"
              style={{ color: description.color }}
              id={description.id}
            >
              {description.text}
            </p>
          )}

          {validSocialIcons.length > 0 && (
            <div className="d-flex gap-3">
              {validSocialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-body-secondary text-decoration-none"
                >
                  <i
                    className={`fs-4 ${icon.class || ""}`}
                    style={{ color: icon.color }}
                    id={icon.id}
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
