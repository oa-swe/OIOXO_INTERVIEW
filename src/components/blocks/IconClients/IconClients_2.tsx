/* eslint-disable @next/next/no-img-element */
import { iconclients_2_config } from "./IconClients_2_config";
import { BlockConfig } from "../types/Config";

export function IconClients2({ config }: { config: BlockConfig }) {
  const iconclientsTitleSection =
    config?.contents?.iconclientsTitleSection ??
    iconclients_2_config.contents.iconclientsTitleSection;
  const { sectionInfo, iconclientsTitle, iconclientsDescription } =
    iconclientsTitleSection;

  const iconclientsBrandListSection =
    config?.contents?.iconclientsBrandListSection ??
    iconclients_2_config.contents.iconclientsBrandListSection;
  const { iconclientsBrandItemsParent } = iconclientsBrandListSection;

  const mainContainerStyle = {
    backgroundColor:
      config?.contents?.containerSection?.iconclientsMainContainer
        ?.background_color ?? "white",
  };

  return (
    <>
      <div
        className="iconclients-main-container container py-5 text-center"
        style={mainContainerStyle}
      >
        <div
          className="row justify-content-center"
          style={{ order: sectionInfo.orderPlacement }}
        >
          <div className="col-md-8 col-lg-6 col-12">
            {iconclientsTitle?.render && (
              <h2
                id={iconclientsTitle.id}
                className="fw-bold lh-base text-body-emphasis mb-3"
                style={{ color: iconclientsTitle.color }}
              >
                {iconclientsTitle.text}
              </h2>
            )}
            {iconclientsDescription?.render && (
              <p
                id={iconclientsDescription.id}
                className="text-body-secondary lh-sm mb-0"
                style={{ color: iconclientsDescription.color || "" }}
              >
                {iconclientsDescription.text}
              </p>
            )}
          </div>
        </div>

        {iconclientsBrandItemsParent?.render && (
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3 justify-content-center align-items-center mt-5">
            {iconclientsBrandItemsParent.children?.map((item, index) => (
              <div key={index} className="col px-3 py-2">
                <img
                  src={item.img_src || ""}
                  alt={`Client logo ${index + 1}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
