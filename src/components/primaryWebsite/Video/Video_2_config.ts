import { ElementType } from "@/components/primaryWebsite/types/Html";
import { BlockConfig } from "@/components/primaryWebsite/types/Config";
import { PossiblePages } from "../types/Pages";

export const video_2_config: BlockConfig = {
  possiblePages: [PossiblePages.HOME, PossiblePages.ABOUT_US],
  contents: {
    containerSection: {
      sectionInfo: {
        sectionTitle: "Video Container",
      },
      videoMainContainer: {
        background_color: "white",
      },
    },

    videoPlayerSection: {
      sectionInfo: {
        sectionTitle: "Video player",
      },
      videoPlayerBackImage: {
        id: "video_player_back_image",
        name: "Video player",
        elementType: ElementType.IMAGE,
        render: true,
        img_src: "/blocks/images/mountain.jpg",
      },
      videoPlayButton: {
        id: "video_play_button",
        name: "Play Button",
        elementType: ElementType.BUTTON,
        render: true,
        class: "fa fa-play",
        background_color: "#23a6f0",
        icon_color: "white",
        icon_src: "/blocks/images/ic_play_button.png",
        border_radius: "50%",
      },
      videoPlayer: {
        id: "videoPlay_video_player_id",
        name: "video player",
        elementType: ElementType.VIDEO,
        render: true,
        src: "/blocks/images/SampleVideo.mp4",
      },
    },
  },
};
