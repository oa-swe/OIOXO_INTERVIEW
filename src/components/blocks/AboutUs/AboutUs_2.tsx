/* eslint-disable @next/next/no-img-element */
import { BlockConfig } from "../types/Config";
import { aboutus_2_config } from "./AboutUs_2_config";
import { FlexDirection } from "../types/Html";
import { Button } from "../common/Button";
import { SocialLinks } from "../common/SocialLinks";

export function AboutUs2({ config }: { config: BlockConfig }) {
  const leftSection =
    config?.contents?.leftSideSection ??
    aboutus_2_config.contents.leftSideSection;
  const {
    aboutusSmallTitle,
    aboutusBigTitle,
    aboutusDescription,
    aboutusButton,
    aboutUsSocialLinks,
  } = leftSection;
  const rightSection =
    config?.contents?.rightSideSection ??
    aboutus_2_config.contents.rightSideSection;
  const { aboutusImage } = rightSection;

  const parentSidesContainer =
    config?.contents?.containerSection?.parentSidesContainer;

  const mainContainerStyle = {
    backgroundColor:
      config?.contents?.containerSection?.aboutusMainContainer
        ?.background_color ?? "white",
  };

  return (
    <>
      <section className="aboutus-main-container" style={mainContainerStyle}>
        <div className="container">
          <div
            className={`row align-items-center ${
              parentSidesContainer?.flex_direction == FlexDirection.COLUMN
                ? "flex-column"
                : ""
            }`}
          >
            <div
              className="col-lg-6 mb-lg-0 mb-4"
              style={{
                order: `${leftSection?.sectionInfo?.orderPlacement ?? "0"}`,
              }}
            >
              {aboutusSmallTitle?.render && (
                <div
                  id={aboutusSmallTitle.id || ""}
                  style={{ color: aboutusSmallTitle.color }}
                  className="text-uppercase letter-spacing-2 text-body-tertiary mb-3"
                >
                  {aboutusSmallTitle.text}
                </div>
              )}

              {aboutusBigTitle?.render && (
                <h1
                  id={aboutusBigTitle.id || ""}
                  style={{ color: aboutusBigTitle.color }}
                  className="display-4 fw-bold text-body mb-4"
                >
                  {aboutusBigTitle.text}
                </h1>
              )}

              {aboutusDescription?.render && (
                <p
                  id={aboutusDescription.id || ""}
                  style={{ color: aboutusDescription.color, maxWidth: "55%" }}
                  className="text-body-secondary lh-lg mx-lg-0 mx-auto mb-4"
                >
                  {aboutusDescription.text}
                </p>
              )}

              {aboutusButton?.render && (
                <Button
                  id={aboutusButton.id}
                  text={aboutusButton.text ?? ""}
                  color={aboutusButton.color}
                  backgroundColor={aboutusButton.background_color}
                  borderRadius={aboutusButton.border_radius}
                  borderColor={aboutusButton.border_color}
                  iconSrc={aboutusButton.icon_src}
                  iconClass={aboutusButton.class}
                  iconColor={aboutusButton.icon_color}
                  position={aboutusButton.position}
                  className="mb-5"
                />
              )}

              {aboutUsSocialLinks?.render && (
                <SocialLinks id={aboutUsSocialLinks.id}>
                  {aboutUsSocialLinks.children}
                </SocialLinks>
              )}
            </div>

            <div className="col-lg-6">
              {aboutusImage?.render && (
                <img
                  id={aboutusImage.id || ""}
                  src={aboutusImage.img_src || ""}
                  className="img-fluid w-100"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <style>{`
          .letter-spacing-2 {
            letter-spacing: 2px;
          }
          .horizontally-flip:dir(rtl)::before,
          .horizontally-flip:dir(rtl) {
            transform: scaleX(-1) !important;
          }
          @media (max-width: 991.98px) {
            .mx-lg-0 {
              max-width: 80% !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
