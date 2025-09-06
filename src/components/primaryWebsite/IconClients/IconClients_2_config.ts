import { BlockConfig } from "../types/Config";
import { ElementType } from "../types/Html";
import { PossiblePages } from "../types/Pages";

export const iconclients_2_config: BlockConfig = {
  possiblePages: [PossiblePages.HOME, PossiblePages.ABOUT_US],
  contents: {
    containerSection: {
      sectionInfo: {
        sectionTitle: "IconClients Container",
      },
      iconclientsMainContainer: {
        background_color: "white",
      },
    },

    iconclientsTitleSection: {
      sectionInfo: {
        orderPlacement: 0,
        sectionTitle: "IconClients title section",
      },
      iconclientsTitle: {
        id: "iconclients_title_id",
        elementType: ElementType.HEADING,
        name: "Title",
        render: true,
        text: "Big Companies Are Here",
        color: "#252b42",
      },
      iconclientsDescription: {
        id: "iconclients_description_id",
        elementType: ElementType.PARAGRAPH,
        name: "Description",
        render: true,
        isRichText: true,
        text: `Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics`,
        color: "#737373",
      },
    },
    iconclientsBrandListSection: {
      sectionInfo: {
        sectionTitle: "IconClients brands list",
      },
      iconclientsBrandItemsParent: {
        id: "iconclients_brand_items_parent",
        name: "Brand items parent",
        elementType: ElementType.ITEMS_ARRAY,
        render: true,
        children: [
          {
            img_src: "/blocks/images/fa-brands-1.png",
          },
          {
            img_src: "/blocks/images/fa-brands-2.png",
          },
          {
            img_src: "/blocks/images/fa-brands-3.png",
          },
          {
            img_src: "/blocks/images/fa-brands-4.png",
          },
          {
            img_src: "/blocks/images/fa-brands-5.png",
          },
          {
            img_src: "/blocks/images/fa-brands-6.png",
          },
        ],
      },
    },
  },
};
