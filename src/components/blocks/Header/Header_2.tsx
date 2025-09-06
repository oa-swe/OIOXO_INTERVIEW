import { BlockConfig } from "../types/Config";
import { header_2_config } from "./Header_2_config";
import { Logo } from "../common/Logo";
import { SearchInput } from "../common/SearchInput";
import { NavMenu } from "../common/NavMenu/NavMenu";
import { IconGroup } from "../common/Icon/IconGroup";
import { ButtonGroup } from "../common/ButtonGroup";

export function Header2({ config }: { config: BlockConfig }) {
  const menuItemsSection =
    config?.contents?.menuItemsSection ??
    header_2_config?.contents?.menuItemsSection;
  const { headerMenuItemsParent, headerSearchInput } = menuItemsSection;

  const logoSection =
    config?.contents?.logoSection ?? header_2_config?.contents?.logoSection;
  const { headerMainLogo, headerLogoTitle } = logoSection;

  const iconItemsSection =
    config?.contents?.iconItemsSection ??
    header_2_config?.contents?.iconItemsSection;
  const { headerIconItems } = iconItemsSection;

  const headerButtonsSection =
    config?.contents?.headerButtonsSection ??
    header_2_config?.contents?.headerButtonsSection;
  const { headerButtonsContainer, headerLoginButton, headerRegisterButton } =
    headerButtonsSection;

  const mainContainerStyle = {
    backgroundColor:
      config?.contents?.containerSection?.headerMainContainer
        ?.background_color ?? "white",
  };

  // Prepare menu items with active state
  const menuItems = headerMenuItemsParent?.children?.map((item, index) => ({
    ...item,
    active: index === 0,
  }));

  // Prepare button items
  const buttonItems = [
    { ...headerLoginButton, href: "#" },
    { ...headerRegisterButton, href: "#" },
  ];

  return (
    <>
      <style>
        {`
          .horizontally-flip:dir(rtl)::before,
          .horizontally-flip:dir(rtl) {
            transform: scaleX(-1) !important;
          }
          
          @media (max-width: 991.98px) {
            .navbar-menu {
              align-items: flex-start !important;
            }
            
            .icon-text {
              padding-left: 10px !important;
              padding-right: 10px !important;
            }
          }
        `}
      </style>

      <div
        className="main-header-container px-md-5 px-3"
        style={mainContainerStyle}
      >
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container-fluid">
            {/* Brand/Logo */}
            <Logo image={headerMainLogo} title={headerLogoTitle} />

            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeaderContent"
              aria-controls="navbarHeaderContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Content */}
            <div className="navbar-collapse collapse" id="navbarHeaderContent">
              <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center navbar-menu w-100">
                {/* Search Input - Hidden on desktop */}
                <SearchInput
                  id={headerSearchInput?.id}
                  iconSrc={headerSearchInput?.icon_src}
                  iconClass={headerSearchInput?.class}
                  iconColor={headerSearchInput?.icon_color}
                  placeholder={headerSearchInput?.placeholder_text}
                  placeholderColor={headerSearchInput?.placeholder_color}
                  borderColor={headerSearchInput?.border_color}
                  borderRadius={headerSearchInput?.border_radius}
                  color={headerSearchInput?.color}
                  backgroundColor={headerSearchInput?.background_color}
                  mobileOnly={true}
                  render={headerSearchInput?.render}
                />

                {/* Menu Items */}
                <NavMenu
                  id={headerMenuItemsParent?.id}
                  items={menuItems}
                  render={headerMenuItemsParent?.render}
                />

                {/* Icons */}
                <IconGroup
                  id={headerIconItems?.id}
                  items={headerIconItems?.children}
                  render={headerIconItems?.render}
                  mobileOnlyText={true}
                />

                {/* Buttons */}
                <ButtonGroup
                  id={headerButtonsContainer?.id}
                  buttons={buttonItems}
                  backgroundColor={headerButtonsContainer?.background_color}
                  render={headerButtonsContainer?.render}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
