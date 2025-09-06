/* eslint-disable @next/next/no-img-element */
import { workwithus_2_config } from "./WorkWithUs_2_config";
import { BlockConfig } from "../types/Config";
import { ElementPosition } from "../types/Html";

export function WorkWithUs2({ config }: { config: BlockConfig }) {
  const leftSection =
    config?.contents?.leftSideSection ??
    workwithus_2_config.contents.leftSideSection;
  const {
    workWithUsSmallTitle,
    workWithUsBigTitle,
    workWithUsDescription,
    workWithUsButton,
  } = leftSection;
  const rightSection =
    config?.contents?.rightSideSection ??
    workwithus_2_config.contents.rightSideSection;
  const { workWithUsImage } = rightSection;

  const mainContainerStyle = {
    backgroundColor:
      config?.contents?.containerSection?.workWithUsMainContainer
        ?.background_color ?? "white",
  };

  return (
    <>
      <style>{`
        .horizontally-flip:dir(rtl)::before,
        .horizontally-flip:dir(rtl) {
          transform: scaleX(-1) !important;
        }
        @media (max-width: 767.98px) {
          .main-image-column {
            display: none;
          }
        }
      `}</style>
      <section
        className="work-with-us-main-container"
        style={mainContainerStyle}
      >
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-center">
            <div className="col-md-7 px-lg-5 order-md-0 order-1 col-12 px-4 py-5">
              <div className="d-flex flex-column justify-content-center h-100">
                {workWithUsSmallTitle?.render && (
                  <h6
                    id={workWithUsSmallTitle.id}
                    className="fw-bold mb-3 text-white"
                    style={
                      workWithUsSmallTitle.color
                        ? { color: workWithUsSmallTitle.color }
                        : {}
                    }
                  >
                    {workWithUsSmallTitle.text}
                  </h6>
                )}

                {workWithUsBigTitle?.render && (
                  <h2
                    id={workWithUsBigTitle.id}
                    className="fw-bold mb-3 text-white"
                    style={
                      workWithUsBigTitle.color
                        ? { color: workWithUsBigTitle.color }
                        : {}
                    }
                  >
                    {workWithUsBigTitle.text}
                  </h2>
                )}

                {workWithUsDescription?.render && (
                  <p
                    id={workWithUsDescription.id}
                    className="mb-4 text-white"
                    style={
                      workWithUsDescription.color
                        ? { color: workWithUsDescription.color }
                        : {}
                    }
                  >
                    {workWithUsDescription.text}
                  </p>
                )}

                {workWithUsButton?.render && (
                  <button
                    id={workWithUsButton.id}
                    className={`btn btn-outline-light align-self-${
                      workWithUsButton.position == ElementPosition.END
                        ? "md-end"
                        : "md-start"
                    }`}
                    style={{
                      color: workWithUsButton.color,
                      borderColor: workWithUsButton.border_color,
                      borderRadius: workWithUsButton.border_radius,
                    }}
                  >
                    {workWithUsButton.text}
                    {workWithUsButton.icon_src ? (
                      <img
                        className="horizontally-flip ms-2"
                        src={workWithUsButton.icon_src}
                        width="32"
                        height="32"
                        alt=""
                      />
                    ) : (
                      <i
                        style={{
                          color: workWithUsButton?.icon_color ?? "",
                        }}
                        className={`horizontally-flip ms-2 ${workWithUsButton.class}`}
                      />
                    )}
                  </button>
                )}
              </div>
            </div>

            <div className="col-md-5 main-image-column order-md-1 order-0 col-12">
              {workWithUsImage?.render && (
                <img
                  className="img-fluid w-100"
                  src={workWithUsImage.img_src}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
