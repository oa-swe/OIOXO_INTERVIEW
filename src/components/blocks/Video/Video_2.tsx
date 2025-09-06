/* eslint-disable @next/next/no-img-element */
import { BlockConfig } from "../types/Config";
import { video_2_config } from "./Video_2_config";
import { useState } from "react";

export function Video2({ config }: { config: BlockConfig }) {
  const videoPlayerSection =
    config?.contents?.videoPlayerSection ??
    video_2_config.contents.videoPlayerSection;
  const { videoPlayerBackImage, videoPlayButton, videoPlayer } =
    videoPlayerSection;

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const mainContainerStyle = {
    backgroundColor:
      config?.contents?.containerSection?.videoMainContainer
        ?.background_color ?? "white",
  };

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <style>{`
          .horizontally-flip:dir(rtl)::before,
          .horizontally-flip:dir(rtl) {
            transform: scaleX(-1) !important;
          }
        `}</style>
      <section
        className="video-main-container container py-5"
        style={mainContainerStyle}
      >
        <div className="d-flex justify-content-center">
          <div className="position-relative p-5">
            {!isVideoPlaying ? (
              <>
                {videoPlayButton?.render && (
                  <div className="position-relative">
                    {videoPlayerBackImage?.render && (
                      <img
                        alt="video play image"
                        className="img-fluid rounded-4"
                        src={videoPlayerBackImage.img_src ?? ""}
                      />
                    )}

                    <button
                      onClick={handlePlayButtonClick}
                      className="play-button position-absolute translate-middle rounded-circle start-50 top-50 border-0"
                      style={{
                        backgroundColor:
                          videoPlayButton.background_color || "#23a6f0",
                        borderRadius: videoPlayButton.border_radius || "50%",
                        width: "13vw",
                        height: "13vw",
                      }}
                    >
                      {videoPlayButton.icon_src ? (
                        <img
                          alt="video player play button"
                          className="horizontally-flip"
                          src={videoPlayButton.icon_src}
                          width="32"
                          height="32"
                        />
                      ) : (
                        <i
                          className={`${videoPlayButton?.class} horizontally-flip`}
                          style={{
                            color: videoPlayButton?.color || "white",
                            fontSize: "3vw",
                          }}
                        ></i>
                      )}
                    </button>
                  </div>
                )}
              </>
            ) : (
              videoPlayer?.render && (
                <video
                  id={videoPlayer.id}
                  controls
                  autoPlay
                  className="rounded-4 h-100 w-100"
                >
                  <source src={videoPlayer.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
