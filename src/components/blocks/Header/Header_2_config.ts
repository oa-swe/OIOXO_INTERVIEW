import { BlockConfig } from "../types/Config";
import { ElementType } from "../types/Html";
import { PossiblePages } from "../types/Pages";

export const header_2_config: BlockConfig = {
  possiblePages: [PossiblePages.ALL],
  contents: {
    containerSection: {
      sectionInfo: {
        sectionTitle: "HEADER Container",
      },
      headerMainContainer: {
        background_color: "white",
      },
    },

    logoSection: {
      sectionInfo: {
        sectionTitle: "HEADER Logo",
      },
      headerMainLogo: {
        id: "header_main_logo",
        name: "Logo image",
        render: true,
        elementType: ElementType.IMAGE,
        img_src: "/blocks/images/Header_Logo.png",
      },
      headerLogoTitle: {
        id: "header_logo_title",
        name: "Logo title",
        render: true,
        elementType: ElementType.HEADING,
        text: "Shikzone",
        color: "black",
      },
    },
    menuItemsSection: {
      sectionInfo: {
        sectionTitle: "Menu Items Section",
      },
      headerSearchInput: {
        id: "header_search_input_id",
        render: true,
        elementType: ElementType.INPUT_FIELD,
        name: "Search box input",
        background_color: "white",
        color: "black",
        border_color: "grey",
        border_radius: "0.375rem",
        placeholder_text: "Search",
        placeholder_color: "grey",
        class: "bi bi-search fs-5",
        icon_color: "red",
        icon_src: "/blocks/images/ic_search_48px.png",
      },
      headerMenuItemsParent: {
        id: "header_menu_items_parent_id",
        name: "Menu items list",
        render: true,
        elementType: ElementType.ITEMS_ARRAY,
        children: [
          {
            text: "Home",
            color: "Red",
          },
          {
            text: "Products",
            color: "black",
          },
          {
            text: "About us",
            color: "black",
          },
          {
            text: "Blog",
            color: "black",
          },

          {
            text: "Frequently Asked Questions",
            color: "black",
            href: "#",
          },
        ],
      },
    },
    iconItemsSection: {
      headerIconItems: {
        id: "header_icon_items_id",
        name: "Icon list",
        render: true,
        elementType: ElementType.ICONS_ARRAY,
        children: [
          {
            class: "bi bi-bell",
            icon_src: "/blocks/images/ic_local_mall_48px.png",
            text: "Basket",
            color: "black",
            children: {
              text: "3",
              color: "white",
              background_color: "red",
              border_color: "white",
            },
          },
          {
            class: "bi bi-heart",
            icon_src: "/blocks/images/ic_heart_48px.png",
            text: "Favorites",
            color: "black",
          },
          {
            class: "bi bi-search",
            icon_src: "/blocks/images/ic_search_48px.png",
            text: "Search",
            color: "black",
          },
        ],
      },
    },
    headerButtonsSection: {
      headerButtonsContainer: {
        id: "header_buttons_container",
        name: "Login/Register buttons Container",
        render: true,
        elementType: ElementType.DIVISION,
        background_color: "black",
        border_color: "black",
        border_radius: "3px",
      },
      headerLoginButton: {
        id: "header_login_button",
        name: "Login Button",
        render: true,
        elementType: ElementType.BUTTON,
        color: "white",
        text: "Login",
      },
      headerRegisterButton: {
        id: "header_register_button",
        name: "Register Button",
        render: true,
        elementType: ElementType.BUTTON,
        color: "white",
        text: "Register",
      },
    },
  },
};
