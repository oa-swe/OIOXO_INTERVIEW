import { ButtonGroup } from "../common/ButtonGroup";
import { Logo } from "../common/Logo";
import { NavbarContainer } from "../common/Navbar/NavbarContainer";
import { NavMenu } from "../common/NavMenu/NavMenu";
import { BlockConfig } from "../types/Config";
import { mayoralvenheader_1_config } from "./MayoralvenHeader_1_config";

export function MayoralvenHeader1({ config }: { config: BlockConfig }) {
  const containerSection =
    config?.contents?.containerSection ??
    mayoralvenheader_1_config.contents.containerSection;
  const { mayoralvenheaderMainContainer, mayoralvenheaderMainMenuStyle } =
    containerSection;

  const titleSection =
    config?.contents?.titleSection ??
    mayoralvenheader_1_config.contents.titleSection;
  const { mayoralvenheaderLogoImage, mayoralvenheaderLogoTitle } = titleSection;

  const menuItemsSection =
    mayoralvenheader_1_config.contents.menuItemsSection ??
    config?.contents?.menuItemsSection;
  const { menuItemsParent } = menuItemsSection;

  const buttonsSection =
    config?.contents?.buttonsSection ??
    mayoralvenheader_1_config.contents.buttonsSection;
  const { mayoralvenheaderLoginButton, mayoralvenheaderSignupButton } =
    buttonsSection;

  const mainContainerStyle = {
    backgroundColor: mayoralvenheaderMainContainer?.background_color ?? "white",
  };

  // Prepare button items
  const buttonItems = [
    {
      ...mayoralvenheaderLoginButton,
      href: "#",
      className: "text-decoration-none text-body-secondary fw-medium px-3 py-2",
      type: "link" as const,
      render: mayoralvenheaderLoginButton?.render,
    },
    {
      ...mayoralvenheaderSignupButton,
      className: "btn-outline-success ms-2",
      type: "button" as const,
      render: mayoralvenheaderSignupButton?.render,
    },
  ];

  return (
    <div className="mayoralvenheader-main-container" style={mainContainerStyle}>
      <NavbarContainer
        backgroundColor={mayoralvenheaderMainMenuStyle?.background_color}
        boxShadowColor={mayoralvenheaderMainMenuStyle?.box_shadow_color}
        padding="15px 0"
        className="navbar-light py-4 shadow-sm"
      >
        <div className="container">
          {/* Logo and Title */}
          <Logo
            image={{
              img_src: mayoralvenheaderLogoImage?.img_src,
              render: mayoralvenheaderLogoImage?.render,
            }}
            title={{
              text: mayoralvenheaderLogoTitle?.text || "",
              color: mayoralvenheaderLogoTitle?.color,
              render: mayoralvenheaderLogoTitle?.render,
            }}
            className="navbar-brand d-flex align-items-center fw-bold fs-4"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMayoralvenContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className="navbar-collapse collapse"
            id="navbarMayoralvenContent"
          >
            <NavMenu
              id={menuItemsParent?.id}
              items={menuItemsParent?.children}
              render={menuItemsParent?.render}
            />

            <ButtonGroup
              buttons={buttonItems}
              render={buttonItems.some((button) => button.render)}
            />
          </div>
        </div>
      </NavbarContainer>
    </div>
  );
}
