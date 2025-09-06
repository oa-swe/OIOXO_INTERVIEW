import { BlockConfig } from "../types/Config";
import { ElementPosition, ElementType, FlexDirection } from "../types/Html";
import { PossiblePages } from "../types/Pages";

export const workwithus_2_config: BlockConfig = {
  possiblePages: [PossiblePages.HOME],
  contents: {
    containerSection: {
      sectionInfo: {
        sectionTitle: "WORK WITH US Container",
      },
      workWithUsMainContainer: {
        background_color: "#2A7CC7",
      },
      parentSidesContainer: {
        flex_direction: FlexDirection.ROW,
      },
    },
    leftSideSection: {
      sectionInfo: {
        orderPlacement: 0,
        sectionTitle: "Left Side",
      },
      workWithUsSmallTitle: {
        id: "workwithus_small_title",
        name: "Left side Small Title",
        elementType: ElementType.DIVISION,
        render: true,
        text: "WORK WITH US",
        class: "small-title",
      },
      workWithUsBigTitle: {
        id: "workwithus_big_title",
        name: "Left side big title",
        elementType: ElementType.HEADING,
        render: true,
        text: "Now Let's grow Your",
        class: "big-title",
      },
      workWithUsDescription: {
        id: "workwithus_description",
        name: "Left side description",
        elementType: ElementType.PARAGRAPH,
        isRichText: true,
        render: true,
        text: `The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th`,
        class: "description",
      },
      workWithUsButton: {
        id: "workwithus_button",
        name: "Left side Button",
        elementType: ElementType.BUTTON,
        render: true,
        text: "Button",
        color: "white",
        border_color: "white",
        border_radius: "6px",
        position: ElementPosition.START,
        class: "fa fa-arrow-right",
        icon_color: "white",
        icon_src: "/blocks/images/right_arrow_icon.png",
      },
    },
    rightSideSection: {
      workWithUsImage: {
        id: "workwithus_image",
        name: "Right side main image",
        elementType: ElementType.IMAGE,
        render: true,
        img_src: "/Blocks/Images/work-with-us.png",
      },
    },
  },
};
