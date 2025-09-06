import { BubblePosition } from "../types/Bubble";
import { BlockConfig } from "../types/Config";
import { ElementType } from "../types/Html";
import { PossiblePages } from "../types/Pages";

export const heroheader_config: BlockConfig = {
  possiblePages: [PossiblePages.HOME, PossiblePages.FAQ],
  contents: {
    titleSection: {
      sectionInfo: {
        sectionTitle: "title Section",
      },
      heroheaderLogo: {
        id: "heroheader_logo_id",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        text: "Estatery",
        img_src: "/blocks/images/estatery_logo.png",
        color: "#3361FF",
      },
    },
    menuItemsSection: {
      sectionInfo: {
        sectionTitle: "Menu items section",
      },
      heroheaderMainMenuStyle: {
        background_color: "rgba(var(--bs-white-rgb),var(--bs-bg-opacity))",
        box_shadow_color: "rgba(0, 0, 0, 0.1)",
      },
      heroheaderMenu_0: {
        id: "heroheader_menu_0_id",
        name: "Menu Item 1",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        text: "Rent",
        href: "/home",
        color: "black",
      },
      heroheaderMenu_1: {
        id: "heroheader_menu_1_id",
        name: "Menu Item 2",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        text: "Buy",
        href: "/about",
        color: "black",
      },
      heroheaderMenu_2: {
        id: "heroheader_menu_2_id",
        name: "Menu Item 3",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        href: "/contact_us",
        text: "Sell",
        color: "black",
      },
      heroheaderMenu_3: {
        id: "heroheader_menu_3_id",
        name: "Menu Item 4",
        bubble: true,
        bubblePosition: BubblePosition.BOTTOM,
        render: true,
        href: "/faq",
        text: "Manage Property",
        color: "black",
      },
      heroheaderMenu_4: {
        id: "heroheader_menu_4_id",
        name: "Menu Item 5",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        href: "services",
        text: "Resources",
        color: "black",
      },
    },
    buttonsSection: {
      heroheaderLoginButton: {
        id: "heroheader_login_button_id",
        bubble: true,
        bubblePosition: BubblePosition.TOP,
        render: true,
        href: "#",
        text: "Login",
        color: "#E5E5E7",
        border_color: "grey",
        border_radius: "0.375rem",
      },
      heroheaderSignupButton: {
        id: "heroheader_signup_button_id",
        elementType: ElementType.BUTTON,
        bubble: true,
        bubblePosition: BubblePosition.BOTTOM,
        render: true,
        href: "#",
        text: "Sign up",
        color: "white",
        border_color: "#3361FF",
        background_color: "#3361FF",
        border_radius: "0.375rem",
      },
    },
  },
};
