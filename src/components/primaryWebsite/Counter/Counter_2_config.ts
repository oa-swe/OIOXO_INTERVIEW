import { BlockConfig } from "../types/Config";
import { ElementType } from "../types/Html";
import { PossiblePages } from "../types/Pages";

export const counter_2_config: BlockConfig = {
  possiblePages: [PossiblePages.HOME, PossiblePages.ABOUT_US],
  contents: {
    containerSection: {
      sectionInfo: {
        sectionTitle: "Counter Container",
      },
      counterMainContainer: {
        background_color: "white",
      },
    },

    counterListSection: {
      sectionInfo: {
        orderPlacement: 0,
        sectionTitle: "Counter list items",
      },
      counterItems: {
        id: "counter_items",
        name: "Counter items",
        elementType: ElementType.ITEMS_ARRAY,
        render: true,
        children: [
          {
            title: {
              color: "#252b42",
              text: "15K",
              class: "number",
            },
            sub_title: {
              color: "#737373",
              text: "Happy Customers",
              class: "number-category",
            },
          },
          {
            title: {
              color: "#252b42",
              text: "150K",
              class: "number",
            },
            sub_title: {
              color: "#737373",
              text: "Monthly Visitors",
              class: "number-category",
            },
          },
          {
            title: {
              color: "#252b42",
              text: "15",
              class: "number",
            },
            sub_title: {
              color: "#737373",
              text: "Countries Worldwide",
              class: "number-category",
            },
          },
          {
            title: {
              color: "#252b42",
              text: "15",
              class: "number",
            },
            sub_title: {
              color: "#737373",
              text: "Top Partners",
              class: "number-category",
            },
          },
        ],
      },
    },
  },
};
