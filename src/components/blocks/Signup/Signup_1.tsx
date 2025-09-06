/* eslint-disable @next/next/no-img-element */

import { BlockConfig } from "../types/Config";

export function Signup1({ config }: { config: BlockConfig }) {
  return (
    <>
      <style>{`
        .form-control::placeholder {
          color: ${
            config?.contents?.rightSection?.formNameField?.placeholder_color ||
            "var(--bs-secondary-color)"
          } !important;
        }
        #${config?.contents?.rightSection?.formEmailField?.id}::placeholder {
          color: ${
            config?.contents?.rightSection?.formEmailField?.placeholder_color ||
            "var(--bs-secondary-color)"
          } !important;
        }
        #${config?.contents?.rightSection?.formPasswordField?.id}::placeholder {
          color: ${
            config?.contents?.rightSection?.formPasswordField
              ?.placeholder_color || "var(--bs-secondary-color)"
          } !important;
        }
      `}</style>
      <div
        className="signup-main-container min-vh-100"
        style={{
          backgroundColor:
            config?.contents?.rightSection?.formMainContainer
              ?.background_color || "white",
        }}
      >
        <div className="container-fluid h-100">
          <div className="row h-100">
            {/* Left: Sign up form */}
            <div className="col-lg-6 d-flex flex-column justify-content-between">
              <div className="col-12 pt-4">
                <a className="navbar-brand d-flex align-items-center" href="#">
                  {config?.contents?.rightSection?.formLoginImageSRC
                    ?.render && (
                    <img
                      id={config?.contents?.rightSection?.formLoginImageSRC?.id}
                      alt="Logo"
                      className="img-fluid me-3"
                      width="40"
                      height="40"
                      src={
                        config?.contents?.rightSection?.formLoginImageSRC
                          ?.text || ""
                      }
                    />
                  )}
                  <span className="fw-semibold d-none d-md-inline">
                    Untitled UI
                  </span>
                </a>
              </div>

              <div className="px-md-5 py-lg-0 col-12 px-3 py-4">
                {config?.contents?.rightSection?.formTitle?.render && (
                  <h2
                    className="fw-bold mb-3"
                    style={{
                      color:
                        config?.contents?.rightSection?.formTitle?.color ?? "",
                    }}
                    id={
                      config?.contents?.rightSection?.formTitle?.id ??
                      "notFoundId"
                    }
                  >
                    {config?.contents?.rightSection?.formTitle?.text || ""}
                  </h2>
                )}

                {config?.contents?.rightSection?.formTitleDescription
                  ?.render && (
                  <p
                    className="text-body-secondary mb-4"
                    style={{
                      color:
                        config?.contents?.rightSection?.formTitleDescription
                          ?.color ?? "",
                    }}
                    id={
                      config?.contents?.rightSection?.formTitleDescription?.id
                    }
                  >
                    {config?.contents?.rightSection?.formTitleDescription
                      ?.text || ""}
                  </p>
                )}

                <form>
                  <div className="mb-3">
                    {config?.contents?.rightSection?.formNameLabel?.render && (
                      <label
                        className="form-label fw-medium"
                        style={{
                          color:
                            config?.contents?.rightSection?.formNameLabel
                              ?.color ?? "",
                        }}
                        id={config?.contents?.rightSection?.formNameLabel?.id}
                      >
                        {config?.contents?.rightSection?.formNameLabel?.text ||
                          ""}
                      </label>
                    )}

                    {config?.contents?.rightSection?.formNameField?.render && (
                      <input
                        type="text"
                        className="form-control"
                        style={{
                          borderColor:
                            config?.contents?.rightSection?.formNameField
                              ?.border_color ?? "",
                        }}
                        placeholder={
                          config?.contents?.rightSection?.formNameField
                            ?.placeholder_text || "Enter your name"
                        }
                        id={config?.contents?.rightSection?.formNameField?.id}
                      />
                    )}
                  </div>

                  <div className="mb-3">
                    {config?.contents?.rightSection?.formEmailLabel?.render && (
                      <label
                        className="form-label fw-medium"
                        style={{
                          color:
                            config?.contents?.rightSection?.formEmailLabel
                              ?.color ?? "",
                        }}
                        id={config?.contents?.rightSection?.formEmailLabel?.id}
                      >
                        {config?.contents?.rightSection?.formEmailLabel?.text ||
                          ""}
                      </label>
                    )}

                    {config?.contents?.rightSection?.formEmailField?.render && (
                      <input
                        type="email"
                        className="form-control"
                        style={{
                          borderColor:
                            config?.contents?.rightSection?.formEmailField
                              ?.border_color ?? "",
                        }}
                        placeholder={
                          config?.contents?.rightSection?.formEmailField
                            ?.placeholder_text || "Enter your email"
                        }
                        id={config?.contents?.rightSection?.formEmailField?.id}
                      />
                    )}
                  </div>

                  <div className="mb-1">
                    {config?.contents?.rightSection?.formPasswordLabel
                      ?.render && (
                      <label
                        className="form-label fw-medium"
                        style={{
                          color:
                            config?.contents?.rightSection?.formPasswordLabel
                              ?.color ?? "",
                        }}
                        id={
                          config?.contents?.rightSection?.formPasswordLabel?.id
                        }
                      >
                        {config?.contents?.rightSection?.formPasswordLabel
                          ?.text || ""}
                      </label>
                    )}

                    {config?.contents?.rightSection?.formPasswordField
                      ?.render && (
                      <input
                        type="password"
                        className="form-control"
                        style={{
                          borderColor:
                            config?.contents?.rightSection?.formPasswordField
                              ?.border_color ?? "",
                        }}
                        placeholder={
                          config?.contents?.rightSection?.formPasswordField
                            ?.placeholder_text || "Enter your password"
                        }
                        id={
                          config?.contents?.rightSection?.formPasswordField?.id
                        }
                      />
                    )}
                  </div>

                  {config?.contents?.rightSection?.formPasswordLimitation
                    ?.render && (
                    <div
                      className="text-body-secondary small mb-4"
                      style={{
                        color:
                          config?.contents?.rightSection?.formPasswordLimitation
                            ?.color ?? "",
                      }}
                      id={
                        config?.contents?.rightSection?.formPasswordLimitation
                          ?.id
                      }
                    >
                      {config?.contents?.rightSection?.formPasswordLimitation
                        ?.text || ""}
                    </div>
                  )}

                  {config?.contents?.rightSection?.formCreateAccountButton
                    ?.render && (
                    <button
                      className="btn btn-primary mb-3 w-100 py-2"
                      style={{
                        color:
                          config?.contents?.rightSection
                            ?.formCreateAccountButton?.color ?? "",
                        backgroundColor:
                          config?.contents?.rightSection
                            ?.formCreateAccountButton?.background_color ?? "",
                        borderRadius:
                          config?.contents?.rightSection
                            ?.formCreateAccountButton?.border_radius ?? "",
                      }}
                      id={
                        config?.contents?.rightSection?.formCreateAccountButton
                          ?.id
                      }
                    >
                      {config?.contents?.rightSection?.formCreateAccountButton
                        ?.text || ""}
                    </button>
                  )}

                  {config?.contents?.rightSection?.formSignupWithGoogleButton
                    ?.render && (
                    <button
                      type="button"
                      id={
                        config?.contents?.rightSection
                          ?.formSignupWithGoogleButton?.id
                      }
                      className="btn btn-outline-secondary d-flex align-items-center justify-content-center w-100 py-2"
                      style={{
                        color:
                          config?.contents?.rightSection
                            ?.formSignupWithGoogleButton?.color ?? "",
                        borderRadius:
                          config?.contents?.rightSection
                            ?.formSignupWithGoogleButton?.border_radius ?? "",
                      }}
                    >
                      {config?.contents?.rightSection
                        ?.formSignupWithGoogleButton?.img_src && (
                        <img
                          alt="Google"
                          src={
                            config?.contents?.rightSection
                              ?.formSignupWithGoogleButton?.img_src
                          }
                          width="20"
                          className="me-2"
                        />
                      )}
                      <span
                        dangerouslySetInnerHTML={{
                          __html:
                            config?.contents?.rightSection
                              ?.formSignupWithGoogleButton?.text || "",
                        }}
                      />
                    </button>
                  )}
                </form>
              </div>

              <div className="mt-auto py-4 text-center">
                {config?.contents?.rightSection?.formAlreadyHaveAnAccountTitle
                  ?.render && (
                  <p
                    className="text-body-secondary small mb-0"
                    style={{
                      color:
                        config?.contents?.rightSection?.formLoginLink?.color ??
                        "",
                    }}
                    id={
                      config?.contents?.rightSection
                        ?.formAlreadyHaveAnAccountTitle?.id
                    }
                  >
                    {config?.contents?.rightSection
                      ?.formAlreadyHaveAnAccountTitle?.text || ""}
                    {config?.contents?.rightSection?.formLoginLink?.render && (
                      <a
                        href="#"
                        className="fw-bold text-decoration-none ms-1"
                        style={{
                          color:
                            config?.contents?.rightSection?.formLoginLink
                              ?.color ?? "",
                        }}
                        id={config?.contents?.rightSection?.formLoginLink?.id}
                      >
                        {config?.contents?.rightSection?.formLoginLink?.text ||
                          ""}
                      </a>
                    )}
                  </p>
                )}
              </div>

              <div className="d-flex justify-content-between text-body-secondary small d-none d-md-flex px-3 py-3">
                {config?.contents?.rightSection?.formUntitledUITitle
                  ?.render && (
                  <span
                    id={config?.contents?.rightSection?.formUntitledUITitle?.id}
                    style={{
                      color:
                        config?.contents?.rightSection?.formUntitledUITitle
                          ?.color ?? "",
                    }}
                  >
                    {config?.contents?.rightSection?.formUntitledUITitle
                      ?.text || ""}
                  </span>
                )}

                {config?.contents?.rightSection?.formFooterEmailTitle
                  ?.render && (
                  <span
                    id={
                      config?.contents?.rightSection?.formFooterEmailTitle?.id
                    }
                    style={{
                      color:
                        config?.contents?.rightSection?.formFooterEmailTitle
                          ?.color ?? "",
                    }}
                  >
                    <i className="bi bi-envelope me-1"></i>
                    {config?.contents?.rightSection?.formFooterEmailTitle
                      ?.text || ""}
                  </span>
                )}
              </div>
            </div>

            {/* Right: Image & Quote */}
            <div
              className="col-lg-6 d-none d-lg-block position-relative"
              style={{
                background: config?.contents?.rightSection?.formMainImageSRC
                  ?.render
                  ? `url('${config?.contents?.rightSection?.formMainImageSRC?.text || ""}') no-repeat center center`
                  : "",
                backgroundSize: "cover",
                borderTopLeftRadius: "10%",
                borderBottomLeftRadius: "10%",
              }}
            >
              <div className="d-flex flex-column h-100">
                <div className="mt-auto p-4 text-white">
                  <div className="mb-4">
                    {config?.contents?.rightSection?.formMainImageText
                      ?.render && (
                      <em
                        className="fs-3 fw-semibold d-block"
                        style={{
                          color:
                            config?.contents?.rightSection?.formMainImageText
                              ?.color ?? "",
                        }}
                        id={
                          config?.contents?.rightSection?.formMainImageText?.id
                        }
                      >
                        {config?.contents?.rightSection?.formMainImageText
                          ?.text || ""}
                      </em>
                    )}
                  </div>
                  <div className="d-flex justify-content-end gap-2">
                    {config?.contents?.rightSection?.formLeftArrow?.render && (
                      <button
                        className="btn btn-outline-light rounded-circle"
                        style={{
                          color:
                            config?.contents?.rightSection?.formLeftArrow
                              ?.color ?? "",
                          borderColor:
                            config?.contents?.rightSection?.formLeftArrow
                              ?.border_color ?? "",
                          width: "40px",
                          height: "40px",
                        }}
                      >
                        <i className="fas fa-arrow-left"></i>
                      </button>
                    )}
                    {config?.contents?.rightSection?.formRightArrow?.render && (
                      <button
                        className="btn btn-outline-light rounded-circle"
                        style={{
                          color:
                            config?.contents?.rightSection?.formRightArrow
                              ?.color ?? "",
                          borderColor:
                            config?.contents?.rightSection?.formRightArrow
                              ?.border_color ?? "",
                          width: "40px",
                          height: "40px",
                        }}
                      >
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
