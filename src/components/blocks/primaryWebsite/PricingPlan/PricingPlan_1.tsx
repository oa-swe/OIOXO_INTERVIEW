import { BlockConfig } from "../types/Config";

export function PricingPlan1({ config }: { config: BlockConfig }) {
  return (
    <>
      <style>{`
          .pricingplan-main-container {
            background-repeat: round;
            background-position: top;
            background-size: cover;
          }
          .transition-all {
            transition: all 0.3s ease;
          }
          .transition-all:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(106, 13, 173, 0.3) !important;
          }
          .bg-purple-light {
            background-color: #d9d7e6;
          }
          .text-purple {
            color: #7f56d9;
          }
          .text-dark-purple {
            color: #341578;
          }
          .text-gray {
            color: gray;
          }
          .form-check-input:checked {
            background-color: #7f56d9;
            border-color: #d9d7e6;
          }
        `}</style>
      <div
        className="pricingplan-main-container"
        style={{
          backgroundImage: config?.contents?.rightSection
            ?.pricingplanMainContainer?.background_image
            ? `url(${config?.contents?.rightSection?.pricingplanMainContainer?.background_image})`
            : "none",
          backgroundRepeat: "round",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="py-5 text-center">
            <div className="d-flex justify-content-center">
              {config?.contents?.rightSection?.pricingplanUpTitle?.render && (
                <p
                  className="badge bg-purple-light text-purple rounded-pill mb-3 px-3 py-2"
                  style={{
                    color:
                      config?.contents?.rightSection?.pricingplanUpTitle
                        ?.color || undefined,
                  }}
                  id={
                    config?.contents?.rightSection?.pricingplanUpTitle?.id ?? ""
                  }
                >
                  {config?.contents?.rightSection?.pricingplanUpTitle?.text ||
                    ""}
                </p>
              )}
            </div>

            {config?.contents?.rightSection?.pricingplanMainTitle?.render && (
              <h1
                className="display-4 fw-bold text-dark-purple mb-3"
                style={{
                  color:
                    config?.contents?.rightSection?.pricingplanMainTitle
                      ?.color || undefined,
                }}
                id={
                  config?.contents?.rightSection?.pricingplanMainTitle?.id ?? ""
                }
              >
                {config?.contents?.rightSection?.pricingplanMainTitle?.text ||
                  ""}
              </h1>
            )}

            {config?.contents?.rightSection?.pricingplanDesc?.render && (
              <p
                className="lead text-purple mb-4"
                style={{
                  color:
                    config?.contents?.rightSection?.pricingplanDesc?.color ||
                    undefined,
                }}
                id={config?.contents?.rightSection?.pricingplanDesc?.id ?? ""}
              >
                {config?.contents?.rightSection?.pricingplanDesc?.text || ""}
              </p>
            )}

            <div className="d-flex justify-content-center align-items-center mb-5">
              <div className="form-check form-switch me-3">
                {config?.contents?.rightSection?.pricingplanBillingToggleSwitch
                  ?.render && (
                  <input
                    onChange={() => {}}
                    className="form-check-input"
                    type="checkbox"
                    id="billingToggle"
                    checked
                    style={{
                      width: "3rem",
                      height: "1.5rem",
                      backgroundColor:
                        config?.contents?.rightSection
                          ?.pricingplanBillingToggleSwitch?.background_color ||
                        undefined,
                    }}
                  />
                )}
              </div>

              {config?.contents?.rightSection?.pricingplanBillingTogglePercent
                ?.render && (
                <span
                  className="text-purple fw-medium"
                  style={{
                    color:
                      config?.contents?.rightSection
                        ?.pricingplanBillingTogglePercent?.color || undefined,
                  }}
                  id={
                    config?.contents?.rightSection
                      ?.pricingplanBillingTogglePercent?.id ?? ""
                  }
                >
                  {config?.contents?.rightSection?.pricingplanBillingToggleTitle
                    ?.render && (
                    <strong
                      className="me-1"
                      style={{
                        color:
                          config?.contents?.rightSection
                            ?.pricingplanBillingToggleTitle?.color || undefined,
                      }}
                      id={
                        config?.contents?.rightSection
                          ?.pricingplanBillingToggleTitle?.id ?? ""
                      }
                    >
                      {config?.contents?.rightSection
                        ?.pricingplanBillingToggleTitle?.text || ""}
                    </strong>
                  )}
                  {config?.contents?.rightSection
                    ?.pricingplanBillingTogglePercent?.text || ""}
                </span>
              )}
            </div>
          </div>

          <div className="row g-4 pb-5">
            {[0, 1, 2].map((cardIndex) => (
              <div className="col-md-4 d-flex" key={cardIndex}>
                <div
                  className="card pricing-card h-100 border-0 shadow-lg transition-all"
                  style={{
                    backgroundColor:
                      config?.contents?.rightSection?.[
                        `pricingplanCard_${cardIndex}`
                      ]?.background_color || "white",
                    boxShadow: `0 10px 20px ${
                      config?.contents?.rightSection?.[
                        `pricingplanCard_${cardIndex}`
                      ]?.box_shadow_color || "rgba(106, 13, 173, 0.2)"
                    }`,
                  }}
                >
                  <div
                    className="card-header border-bottom-0 pt-4 text-center"
                    style={{
                      borderBottom: `1px solid ${
                        config?.contents?.rightSection?.[
                          `pricingplanCard_${cardIndex}_CardHeader`
                        ]?.border_bottom_color || "rgba(106, 13, 173, 0.1)"
                      }`,
                    }}
                  >
                    <div className="mb-3">
                      {config?.contents?.rightSection?.[
                        `pricingplanCard_${cardIndex}_Icon`
                      ]?.render && (
                        <i
                          className={
                            config?.contents?.rightSection?.[
                              `pricingplanCard_${cardIndex}_Icon`
                            ]?.class || ""
                          }
                          style={{
                            fontSize: "1.5rem",
                            color:
                              config?.contents?.rightSection?.[
                                `pricingplanCard_${cardIndex}_Icon`
                              ]?.color || "#7f56d9",
                            backgroundColor:
                              config?.contents?.rightSection?.[
                                `pricingplanCard_${cardIndex}_Icon`
                              ]?.background_color || "#d9d7e6",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "20px",
                          }}
                          id={
                            config?.contents?.rightSection?.[
                              `pricingplanCard_${cardIndex}_Icon`
                            ]?.id ?? ""
                          }
                        ></i>
                      )}
                    </div>

                    {config?.contents?.rightSection?.[
                      `pricingplanCard_${cardIndex}_Title`
                    ]?.render && (
                      <h3
                        className="h4 fw-semibold text-purple mb-2"
                        style={{
                          color:
                            config?.contents?.rightSection?.[
                              `pricingplanCard_${cardIndex}_Title`
                            ]?.color || "#7f56d9",
                        }}
                        id={
                          config?.contents?.rightSection?.[
                            `pricingplanCard_${cardIndex}_Title`
                          ]?.id ?? ""
                        }
                      >
                        {config?.contents?.rightSection?.[
                          `pricingplanCard_${cardIndex}_Title`
                        ]?.text || ""}
                      </h3>
                    )}

                    {config?.contents?.rightSection?.[
                      `pricingplanCard_${cardIndex}_MTH`
                    ]?.render && (
                      <div
                        className="display-5 fw-bold mb-1"
                        style={{
                          color:
                            config?.contents?.rightSection?.[
                              `pricingplanCard_${cardIndex}_MTH`
                            ]?.color || undefined,
                        }}
                        id={
                          config?.contents?.rightSection?.[
                            `pricingplanCard_${cardIndex}_MTH`
                          ]?.id ?? ""
                        }
                      >
                        {config?.contents?.rightSection?.[
                          `pricingplanCard_${cardIndex}_MTH`
                        ]?.text || ""}
                      </div>
                    )}

                    {config?.contents?.rightSection?.[
                      `pricingplanCard_${cardIndex}_Billed`
                    ]?.render && (
                      <small
                        className="text-muted"
                        style={{
                          color:
                            config?.contents?.rightSection?.[
                              `pricingplanCard_${cardIndex}_Billed`
                            ]?.color || "rgba(106, 13, 173, 0.7)",
                        }}
                        id={
                          config?.contents?.rightSection?.[
                            `pricingplanCard_${cardIndex}_Billed`
                          ]?.id ?? ""
                        }
                      >
                        {config?.contents?.rightSection?.[
                          `pricingplanCard_${cardIndex}_Billed`
                        ]?.text || ""}
                      </small>
                    )}
                  </div>

                  <div className="card-body px-4">
                    {[0, 1, 2, 3, 4].map((featureIndex) => (
                      <div
                        className="d-flex align-items-center mb-3"
                        key={featureIndex}
                      >
                        {config?.contents?.rightSection?.[
                          `pricingplanCard_${cardIndex}_ItemIcon_${featureIndex}`
                        ]?.render && (
                          <i
                            className={
                              config?.contents?.rightSection?.[
                                `pricingplanCard_${cardIndex}_ItemIcon_${featureIndex}`
                              ]?.class || ""
                            }
                            style={{
                              color:
                                config?.contents?.rightSection?.[
                                  `pricingplanCard_${cardIndex}_ItemIcon_${featureIndex}`
                                ]?.color || "#7f56d9",
                              backgroundColor:
                                config?.contents?.rightSection?.[
                                  `pricingplanCard_${cardIndex}_ItemIcon_${featureIndex}`
                                ]?.background_color || "#d9d7e6",
                              fontSize: "larger",
                              marginRight: "0.75rem",
                              borderRadius: "15px",
                              padding: "0 0.25rem",
                            }}
                            id={
                              config?.contents?.rightSection?.[
                                `pricingplanCard_${cardIndex}_ItemIcon_${featureIndex}`
                              ]?.id ?? ""
                            }
                          ></i>
                        )}

                        {config?.contents?.rightSection?.[
                          `pricingplanCard_${cardIndex}_ItemTitle_${featureIndex}`
                        ]?.render && (
                          <span
                            className="text-gray"
                            id={
                              config?.contents?.rightSection?.[
                                `pricingplanCard_${cardIndex}_ItemTitle_${featureIndex}`
                              ]?.id ?? ""
                            }
                            style={{
                              color:
                                config?.contents?.rightSection?.[
                                  `pricingplanCard_${cardIndex}_ItemTitle_${featureIndex}`
                                ]?.color || "gray",
                            }}
                          >
                            {config?.contents?.rightSection?.[
                              `pricingplanCard_${cardIndex}_ItemTitle_${featureIndex}`
                            ]?.text || ""}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="card-footer border-0 bg-transparent px-4 pb-4">
                    {config?.contents?.rightSection?.[
                      `pricingplanCard_${cardIndex}_Button`
                    ]?.render && (
                      <button
                        className="btn fw-semibold w-100 py-3"
                        style={{
                          color:
                            config?.contents?.rightSection?.[
                              `pricingplanCard_${cardIndex}_Button`
                            ]?.color || "white",
                          backgroundColor:
                            config?.contents?.rightSection?.[
                              `pricingplanCard_${cardIndex}_Button`
                            ]?.background_color || "#7f56d9",
                          borderColor:
                            config?.contents?.rightSection?.[
                              `pricingplanCard_${cardIndex}_Button`
                            ]?.border_color || undefined,
                          borderRadius:
                            config?.contents?.rightSection?.[
                              `pricingplanCard_${cardIndex}_Button`
                            ]?.border_radius || "8px",
                          boxShadow: "0 4px 6px rgba(106, 13, 173, 0.2)",
                        }}
                        id={
                          config?.contents?.rightSection?.[
                            `pricingplanCard_${cardIndex}_Button`
                          ]?.id ?? ""
                        }
                      >
                        {config?.contents?.rightSection?.[
                          `pricingplanCard_${cardIndex}_Button`
                        ]?.text || ""}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
