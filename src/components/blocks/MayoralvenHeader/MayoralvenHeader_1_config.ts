import { BlockConfig } from "../types/Config";
import { ElementType } from "../types/Html";
import { PossiblePages } from "../types/Pages";

export const mayoralvenheader_1_config: BlockConfig = {
  possiblePages: [PossiblePages.HOME, PossiblePages.FAQ],
  contents: {
    containerSection: {
      sectionInfo: {
        sectionTitle: "Mayoralven Header Container",
        name: "Header container section",
      },
      mayoralvenheaderMainContainer: {
        name: "Main container background",
        background_color: "white",
      },
      mayoralvenheaderMainMenuStyle: {
        name: "Main menu styling",
        background_color: "rgba(var(--bs-white-rgb),var(--bs-bg-opacity))",
        box_shadow_color: "rgba(0, 0, 0, 0.1)",
      },
    },
    titleSection: {
      sectionInfo: {
        sectionTitle: "Header Title Section",
        name: "Header title section",
      },
      mayoralvenheaderLogoImage: {
        id: "mayoralvenheader_logo_image_id",
        name: "Company logo image",
        elementType: ElementType.IMAGE,
        render: true,
        img_src: "/blocks/images/mayoralven-logo.png",
      },
      mayoralvenheaderLogoTitle: {
        id: "mayoralvenheader_logo_title_id",
        name: "Logo title text",
        elementType: ElementType.SPAN,
        render: true,
        text: "mayoralvenheader",
        color: "var(--bs-navbar-brand-color)",
      },
    },
    menuItemsSection: {
      sectionInfo: {
        sectionTitle: "Header Menu Items Section",
        name: "Menu items section",
      },
      test: {},
      menuItemsParent: {
        id: "mayoralvenheader_items_parent_id",
        name: "Header items parent",
        render: true,
        elementType: ElementType.ITEMS_ARRAY,
        children: [
          {
            text: "Product",
            color: "var(--bs-nav-link-color)",
            class: "bi bi-house-door",
            icon_color: "var(--bs-nav-link-color)",
          },
          {
            text: "Features",
            color: "var(--bs-nav-link-color)",
            class: "bi bi-calendar",
            icon_color: "var(--bs-nav-link-color)",
          },
          {
            text: "Pricing",
            color: "var(--bs-nav-link-color)",
            class: "bi bi-graph-up",
            icon_color: "var(--bs-nav-link-color)",
          },
          {
            text: "Support",
            color: "var(--bs-nav-link-color)",
            class: "bi bi-gear",
            icon_color: "var(--bs-nav-link-color)",
          },
        ],
      },
    },

    buttonsSection: {
      sectionInfo: {
        sectionTitle: "Header Right Buttons",
        name: "Header buttons section",
      },
      mayoralvenheaderLoginButton: {
        id: "mayoralvenheader_login_button_id",
        name: "Login button",
        elementType: ElementType.ANCHOR,
        render: true,
        text: "Login",
        color: "#6c757d",
        border_color: "#3361FF",
      },
      mayoralvenheaderSignupButton: {
        id: "mayoralvenheader_signup_button_id",
        name: "Signup button",
        elementType: ElementType.BUTTON,
        render: true,
        text: "Sign up",
        color: "#33bf7e",
        border_color: "#33bf7e",
        border_radius: "0.375rem",
      },
    },
  },
};
