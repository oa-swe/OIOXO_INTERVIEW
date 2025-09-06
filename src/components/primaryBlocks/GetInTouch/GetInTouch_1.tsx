import { BlockConfig } from "../types/Config";
import { Navbar } from "../common/Navbar/Navbar";
import { FormInput } from "../common/Form/FormInput";
import { PhoneInput } from "../common/Form/PhoneInput";
import { Textarea } from "../common/Form/TextArea";
import { Checkbox } from "../common/Form/Checkbox";
import { Button } from "../common/Button";
import { Image } from "../common/Image";

export function GetInTouch1({ config }: { config: BlockConfig }) {
  // Prepare menu items
  const menuItems = [0, 1, 2, 3].map((index) => ({
    ...config?.contents?.rightSection?.[`getintouchMenu_${index}`],
    active: index >= 2,
  }));

  // Prepare phone select options
  const phoneOptions = [0, 1].map((optIndex) => ({
    ...config?.contents?.rightSection?.[
      `getintouchFormPhoneNumberSelectOption_${optIndex}`
    ],
  }));

  return (
    <div
      className="getintouch-main-container"
      style={{
        backgroundColor:
          config?.contents?.rightSection?.getintouchMainContainer
            ?.background_color ?? "white",
      }}
    >
      {/* Header Section with Bootstrap Navbar */}
      <Navbar
        logoImage={config?.contents?.rightSection?.getintouchLogoImage}
        logoTitle={config?.contents?.rightSection?.getintouchLogoTitle}
        menuItems={menuItems}
        loginButton={config?.contents?.rightSection?.getintouchLoginButton}
        signupButton={config?.contents?.rightSection?.getintouchSignupButton}
      />

      {/* Main Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Form Column */}
            <div className="col-lg-6 py-lg-5 pe-lg-5 py-4">
              {config?.contents?.rightSection?.getintouchFormTitle?.render && (
                <h1
                  className="display-5 fw-bold mb-3"
                  style={{
                    color:
                      config?.contents?.rightSection?.getintouchFormTitle
                        ?.color ?? "",
                  }}
                  id={
                    config?.contents?.rightSection?.getintouchFormTitle?.id ??
                    ""
                  }
                >
                  {config?.contents?.rightSection?.getintouchFormTitle?.text ||
                    ""}
                </h1>
              )}

              {config?.contents?.rightSection?.getintouchFormDesc?.render && (
                <p
                  className="text-body-secondary mb-4"
                  style={{
                    color:
                      config?.contents?.rightSection?.getintouchFormDesc
                        ?.color ?? "",
                  }}
                  id={
                    config?.contents?.rightSection?.getintouchFormDesc?.id ?? ""
                  }
                >
                  {config?.contents?.rightSection?.getintouchFormDesc?.text ||
                    ""}
                </p>
              )}

              <form>
                <div className="row">
                  <FormInput
                    id={
                      config?.contents?.rightSection
                        ?.getintouchFormFirstNameInput?.id
                    }
                    label={
                      config?.contents?.rightSection
                        ?.getintouchFormFirstNameLabel
                    }
                    placeholder={
                      config?.contents?.rightSection
                        ?.getintouchFormFirstNameInput?.placeholder_text
                    }
                    color={
                      config?.contents?.rightSection
                        ?.getintouchFormFirstNameInput?.color
                    }
                    className="col-md-6 mb-3"
                    render={
                      config?.contents?.rightSection
                        ?.getintouchFormFirstNameInput?.render
                    }
                  />

                  <FormInput
                    id={
                      config?.contents?.rightSection
                        ?.getintouchFormLastNameInput?.id
                    }
                    label={
                      config?.contents?.rightSection
                        ?.getintouchFormLastNameLabel
                    }
                    placeholder={
                      config?.contents?.rightSection
                        ?.getintouchFormLastNameInput?.placeholder_text
                    }
                    color={
                      config?.contents?.rightSection
                        ?.getintouchFormLastNameInput?.color
                    }
                    className="col-md-6 mb-3"
                    render={
                      config?.contents?.rightSection
                        ?.getintouchFormLastNameInput?.render
                    }
                  />
                </div>

                <FormInput
                  id={
                    config?.contents?.rightSection?.getintouchFormEmailInput?.id
                  }
                  type="email"
                  label={
                    config?.contents?.rightSection?.getintouchFormEmailLabel
                  }
                  placeholder={
                    config?.contents?.rightSection?.getintouchFormEmailInput
                      ?.placeholder_text
                  }
                  color={
                    config?.contents?.rightSection?.getintouchFormEmailInput
                      ?.color
                  }
                  className="mb-3"
                  render={
                    config?.contents?.rightSection?.getintouchFormEmailInput
                      ?.render
                  }
                />

                <PhoneInput
                  id={
                    config?.contents?.rightSection
                      ?.getintouchFormPhoneNumberSelect?.id
                  }
                  label={
                    config?.contents?.rightSection
                      ?.getintouchFormPhoneNumberLabel
                  }
                  select={{
                    id: config?.contents?.rightSection
                      ?.getintouchFormPhoneNumberSelect?.id,
                    placeholder:
                      config?.contents?.rightSection
                        ?.getintouchFormPhoneNumberSelect?.placeholder_text,
                    borderColor:
                      config?.contents?.rightSection
                        ?.getintouchFormPhoneNumberSelect?.border_color,
                    options: phoneOptions,
                    render:
                      config?.contents?.rightSection
                        ?.getintouchFormPhoneNumberSelect?.render,
                  }}
                  className="mb-3"
                  render={
                    config?.contents?.rightSection
                      ?.getintouchFormPhoneNumberSelect?.render
                  }
                />

                <Textarea
                  id={
                    config?.contents?.rightSection?.getintouchFormMessageInput
                      ?.id
                  }
                  label={
                    config?.contents?.rightSection?.getintouchFormMessageLabel
                  }
                  placeholder={
                    config?.contents?.rightSection?.getintouchFormMessageInput
                      ?.placeholder_text
                  }
                  borderColor={
                    config?.contents?.rightSection
                      ?.getintouchFormPhoneNumberSelect?.border_color
                  }
                  className="mb-3"
                  render={
                    config?.contents?.rightSection?.getintouchFormMessageInput
                      ?.render
                  }
                />

                <Checkbox
                  input={{
                    id: config?.contents?.rightSection
                      ?.getintouchFormPrivacyPolicyInput?.id,
                    borderColor:
                      config?.contents?.rightSection
                        ?.getintouchFormPhoneNumberSelect?.border_color,
                    render:
                      config?.contents?.rightSection
                        ?.getintouchFormPrivacyPolicyInput?.render,
                  }}
                  label={
                    config?.contents?.rightSection
                      ?.getintouchFormPrivacyPolicyLabel
                  }
                  link={
                    config?.contents?.rightSection
                      ?.getintouchFormPrivacyPolicyLink
                  }
                  className="mb-4"
                  render={
                    config?.contents?.rightSection
                      ?.getintouchFormPrivacyPolicyInput?.render ||
                    config?.contents?.rightSection
                      ?.getintouchFormPrivacyPolicyLabel?.render
                  }
                />

                <div className="d-grid">
                  <Button
                    id={
                      config?.contents?.rightSection
                        ?.getintouchSendMessageButton?.id
                    }
                    text={
                      config?.contents?.rightSection
                        ?.getintouchSendMessageButton?.text || ""
                    }
                    color={
                      config?.contents?.rightSection
                        ?.getintouchSendMessageButton?.color
                    }
                    borderColor={
                      config?.contents?.rightSection
                        ?.getintouchSendMessageButton?.border_color
                    }
                    backgroundColor={
                      config?.contents?.rightSection
                        ?.getintouchSendMessageButton?.background_color
                    }
                    borderRadius={
                      config?.contents?.rightSection
                        ?.getintouchSendMessageButton?.border_radius
                    }
                    className="btn-primary w-100 py-3"
                    type="submit"
                    render={
                      config?.contents?.rightSection
                        ?.getintouchSendMessageButton?.render
                    }
                  />
                </div>
              </form>
            </div>

            {/* Image Column */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="bg-light rounded-3 d-flex align-items-center justify-content-center min-vh-50 h-100">
                <Image
                  id={config?.contents?.rightSection?.getintouchMainImage?.id}
                  src={
                    config?.contents?.rightSection?.getintouchMainImage
                      ?.img_src || ""
                  }
                  alt="Contact illustration"
                  className="rounded-3"
                  render={
                    config?.contents?.rightSection?.getintouchMainImage?.render
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
