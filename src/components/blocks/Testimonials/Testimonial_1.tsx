/* eslint-disable @next/next/no-img-element */
import { BlockConfig } from "../types/Config";

export function Testimonial1({ config }: { config: BlockConfig }) {
  const rightSection = config?.contents?.rightSection;

  const renderTestimonialCard = (cardIndex: number) => {
    const card = rightSection?.testimonialCards?.children?.[cardIndex];
    return (
      <div className="col-md-4 mb-4" key={cardIndex}>
        <div
          className="card rounded-3 h-100 p-3 shadow-sm"
          style={{
            backgroundColor: card?.[cardIndex]?.background_color ?? "white",
            boxShadow: `0 0.125rem 0.25rem ${card?.box_shadow_color ?? "rgba(0, 0, 0, 0.1)"}`,
          }}
        >
          <div className="card-body d-flex flex-column">
            {/* Stars */}
            <div className="d-flex align-items-center mb-3">
              {card?.stars?.map(
                (star: any, starIndex: number) =>
                  star?.render && (
                    <i
                      key={starIndex}
                      className={`bi bi-star-fill me-1`}
                      style={{
                        color: star?.color ?? "",
                        fontSize: "1.1rem",
                      }}
                      id={star?.id ?? ""}
                    />
                  )
              )}
            </div>

            {/* Description */}
            {card?.description?.render && (
              <p
                className="card-text mb-4 flex-grow-1"
                style={{
                  color: card?.description?.color ?? "",
                }}
                id={card?.description?.id ?? ""}
              >
                {card?.description?.text || ""}
              </p>
            )}

            {/* Client Info */}
            <div className="d-flex align-items-center mt-auto">
              {card?.image?.render && (
                <img
                  src={card?.image?.img_src || ""}
                  className="rounded-circle me-3"
                  width="70"
                  height="70"
                  alt="Client"
                  id={card?.image?.id ?? ""}
                />
              )}

              <div className="flex-grow-1">
                {card?.name?.render && (
                  <h6
                    className="card-title fw-bold mb-1"
                    style={{
                      color: card.name?.color ?? "",
                    }}
                    id={card.name?.id ?? ""}
                  >
                    {card.name?.text || ""}
                  </h6>
                )}

                {card?.jobTitle?.render && (
                  <span
                    className="text-body-secondary small"
                    style={{
                      color: card?.jobTitle?.color ?? "",
                    }}
                    id={card?.jobTitle?.id ?? ""}
                  >
                    {card?.jobTitle?.text || ""}
                  </span>
                )}
              </div>

              {/* Quote Icon */}
              {card?.quote?.render && (
                <i
                  className={`bi bi-quote display-4 text-body-tertiary ms-auto opacity-25`}
                  style={{
                    color: card?.quote?.color ?? "",
                  }}
                  id={card?.quote?.id ?? ""}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="testimonial-main-container py-5"
      style={{
        backgroundColor:
          rightSection?.testimonialMainContainer?.background_color ?? "#f8fbfd",
      }}
    >
      {rightSection?.testimonialMainTitle?.render && (
        <h3
          className="mb-5 pt-4 text-center"
          style={{
            color: rightSection?.testimonialMainTitle?.color ?? "",
            backgroundColor:
              rightSection?.testimonialMainTitle?.background_color ??
              "#00000000",
          }}
          id={rightSection?.testimonialMainTitle?.id ?? ""}
        >
          {rightSection?.testimonialMainTitle?.text || ""}
        </h3>
      )}

      <div className="container">
        <div className="row">{[0, 1, 2].map(renderTestimonialCard)}</div>

        {/* Load More Button (Mobile) */}
        <div className="row d-md-none mt-3 text-center">
          <div className="col-12">
            {rightSection?.pricingplanLoadMoreButton?.render && (
              <button
                className="btn btn-outline-primary"
                style={{
                  color: rightSection?.pricingplanLoadMoreButton?.color ?? "",
                  backgroundColor:
                    rightSection?.pricingplanLoadMoreButton?.background_color ??
                    "",
                  borderColor:
                    rightSection?.pricingplanLoadMoreButton?.border_color ?? "",
                  borderRadius:
                    rightSection?.pricingplanLoadMoreButton?.border_radius ??
                    "",
                }}
                id={rightSection?.pricingplanLoadMoreButton?.id ?? ""}
              >
                {rightSection?.pricingplanLoadMoreButton?.text || ""}
              </button>
            )}
          </div>
        </div>

        {/* Navigation Arrows (Desktop) */}
        <div className="d-none d-md-flex justify-content-center align-items-center mt-5">
          {rightSection?.testimonialLeftArrowButton?.render && (
            <button
              className="btn btn-light rounded-circle me-3"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor:
                  rightSection?.testimonialLeftArrowButton?.background_color ??
                  "white",
              }}
              id={rightSection?.testimonialLeftArrowButton?.id ?? ""}
            >
              <i
                className={
                  rightSection?.testimonialLeftArrowButton?.class ||
                  "bi bi-arrow-left"
                }
                style={{
                  color:
                    rightSection?.testimonialLeftArrowButton?.color ??
                    "#8080c4",
                }}
              />
            </button>
          )}

          {rightSection?.testimonialRightArrowButton?.render && (
            <button
              className="btn btn-light rounded-circle"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor:
                  rightSection?.testimonialRightArrowButton?.background_color ??
                  "white",
              }}
              id={rightSection?.testimonialRightArrowButton?.id ?? ""}
            >
              <i
                className={
                  rightSection?.testimonialRightArrowButton?.class ||
                  "bi bi-arrow-right"
                }
                style={{
                  color:
                    rightSection?.testimonialRightArrowButton?.color ??
                    "#8080c4",
                }}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
