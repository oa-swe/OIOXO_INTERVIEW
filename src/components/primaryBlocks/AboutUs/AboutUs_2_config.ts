import { BlockConfig } from "../types/Config";
import { ElementPosition, ElementType, FlexDirection } from "../types/Html";
import { PossiblePages } from "../types/Pages";

export const aboutus_2_config: BlockConfig = {
  possiblePages: [PossiblePages.HOME, PossiblePages.ABOUT_US],
  contents: {
    containerSection: {
      sectionInfo: {
        sectionTitle: "ABOUT US Container",
      },
      aboutusMainContainer: {
        background_color: "white",
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
      aboutusSmallTitle: {
        id: "aboutus_small_title",
        name: "Left side Small Title",
        elementType: ElementType.DIVISION,
        render: true,
        text: "ABOUT COMPANY",
      },
      aboutusBigTitle: {
        id: "aboutus_big_title",
        name: "Left side big title",
        elementType: ElementType.HEADING,
        render: true,
        text: "ABOUT US",
      },
      aboutusDescription: {
        id: "aboutus_description",
        name: "Left side description",
        elementType: ElementType.PARAGRAPH,
        isRichText: true,
        render: true,
        text: `A world of fashion and style awaits you on Niloufar's website!
              Here you can enjoy a variety of high-quality women's, men's and
              children's clothing at reasonable prices. From elegant evening
              dresses to winter, summer and sportswear, Niloufar has everything
              you need to shine with the best choices and stay up to date.`,
      },
      aboutusButton: {
        id: "aboutus_button",
        name: "Left side 'View Product' button",
        elementType: ElementType.BUTTON,
        render: true,
        text: "View Product",
        color: "white",
        background_color: "#23A6F0",
        border_color: "#23A6F0",
        border_radius: "5px",
        position: ElementPosition.START,
        class: "fa fa-arrow-right",
        icon_color: "white",
        icon_src: "/blocks/images/right_arrow_icon.png",
      },
      aboutUsSocialLinks: {
        id: "aboutUs_2_social_links_id",
        name: "Social Links",
        render: true,
        elementType: ElementType.ICONS_ARRAY,
        children: [
          {
            color: "gray",
            class: "fa-brands fa-twitter",
            icon_src: "/blocks/images/twitter_icon.png",
            background_color: "white",
          },
          {
            class: "fa-brands fa-linkedin-in",
            color: "white",
            background_color: "#EC1B69",
            icon_src: "/blocks/images/linkedin_icon.png",
          },
          {
            color: "gray",
            class: "fa-brands fa-facebook",
            background_color: "white",
            icon_src: "/blocks/images/facebook_icon.png",
          },
        ],
      },
    },
    rightSideSection: {
      aboutusImage: {
        id: "aboutus_image",
        name: "Righ side main image",
        elementType: ElementType.IMAGE,
        render: true,
        img_src: "/blocks/images/technology1.png",
      },
    },
  },
};
