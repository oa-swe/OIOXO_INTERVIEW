/* eslint-disable @next/next/no-img-element */
import { BlockConfig } from "../types/Config";
import { meetourteam_2_config } from "./MeetOurTeam_2_config";
import { Key } from "react";

export function MeetOurTeam2({ config }: { config: BlockConfig }) {
  const meetourteamTitleSection =
    config?.contents?.meetourteamTitleSection ??
    meetourteam_2_config.contents.meetourteamTitleSection;
  const { meetourteamTitle, meetourteamDescription } = meetourteamTitleSection;

  const meetourteamMemberInfoSection =
    config?.contents?.meetourteamMemberInfoSection ??
    meetourteam_2_config.contents.meetourteamMemberInfoSection;
  const { meetourteamMemberList } = meetourteamMemberInfoSection;

  const mainContainerStyle = {
    backgroundColor:
      config?.contents?.containerSection?.meetourteamMainContainer
        ?.background_color || "white",
  };

  return (
    <section
      className="meetourteam-main-container container py-5 text-center"
      style={mainContainerStyle}
    >
      <style>{`
        .horizontally-flip:dir(rtl)::before,
        .horizontally-flip:dir(rtl) {
          transform: scaleX(-1) !important;
        }
      `}</style>
      <div
        className="row justify-content-center mb-5"
        style={{
          order: meetourteamTitleSection?.sectionInfo?.orderPlacement ?? 0,
        }}
      >
        <div className="col-md-8 col-lg-6 col-12">
          {meetourteamTitle?.render && (
            <h2
              id={meetourteamTitle.id ?? ""}
              className="fw-bold lh-sm text-body-emphasis mb-3"
              style={{ color: meetourteamTitle.color ?? "" }}
            >
              {meetourteamTitle.text}
            </h2>
          )}

          {meetourteamDescription?.render && (
            <p
              id={meetourteamDescription.id ?? ""}
              className="text-body-secondary mb-0"
              style={{ color: meetourteamDescription.color ?? "" }}
            >
              {meetourteamDescription.text}
            </p>
          )}
        </div>
      </div>

      {meetourteamMemberList?.render && (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {meetourteamMemberList?.children?.map((main_child, main_idx) => {
            const img = main_child.image;
            const username = main_child.username;
            const jobtitle = main_child.job_title;

            return (
              <div key={main_idx} className="col">
                <div className="card h-100 border-0">
                  <img
                    src={img.img_src}
                    className="card-img-top"
                    alt={`Team member ${username.text}`}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title fw-semibold text-body-emphasis mb-1"
                      style={{ color: username.color ?? "" }}
                    >
                      {username.text}
                    </h5>
                    <h6
                      className="card-subtitle text-body-secondary mb-3"
                      style={{ color: jobtitle.color ?? "" }}
                    >
                      {jobtitle.text}
                    </h6>
                    {main_child?.meetourteamMemberSocialLinks?.render && (
                      <div className="d-flex justify-content-center gap-3 pt-2">
                        {main_child.meetourteamMemberSocialLinks.children?.map(
                          (
                            child: {
                              class: string | undefined;
                              icon_src: string | undefined;
                              color: any;
                              background_color: any;
                            },
                            idx: Key | null | undefined
                          ) => {
                            return (
                              <a
                                key={idx}
                                href="#"
                                className="text-decoration-none"
                              >
                                {child.icon_src ? (
                                  <img
                                    className="horizontally-flip"
                                    src={child.icon_src}
                                    width="32"
                                    height="32"
                                    alt="Social icon"
                                  />
                                ) : (
                                  <i
                                    className={`horizontally-flip ${child.class ?? ""}`}
                                    style={{
                                      color: child.color ?? "",
                                      backgroundColor:
                                        child.background_color ?? "",
                                    }}
                                  ></i>
                                )}
                              </a>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
