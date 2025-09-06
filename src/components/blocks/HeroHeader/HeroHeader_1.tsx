import { BlockConfig } from "../types/Config";
import { heroheader_config } from "./HeroHeader_1_config";
import { Logo } from "../common/Logo";
import { Button } from "../common/Button";
import { NavbarContainer } from "../common/Navbar/NavbarContainer";
import { NavMenuDropDown } from "./components";
import { ListItemLink } from "./components";

export function HeroHeader1({ config }: { config: BlockConfig }) {
  const titleSection =
    config?.contents?.titleSection ?? heroheader_config.contents.titleSection;
  const { heroheaderLogo } = titleSection;

  const menuItemsSection =
    config?.contents?.menuItemsSection ??
    heroheader_config.contents.menuItemsSection;
  const {
    heroheaderMainMenuStyle,
    heroheaderMenu_0,
    heroheaderMenu_1,
    heroheaderMenu_2,
    heroheaderMenu_3,
    heroheaderMenu_4,
  } = menuItemsSection;

  const buttonsSection =
    config?.contents?.buttonsSection ??
    heroheader_config.contents.buttonsSection;
  const { heroheaderLoginButton, heroheaderSignupButton } = buttonsSection;

  const mainContainerStyle = {
    backgroundColor:
      config?.contents?.containerSection?.aboutusMainContainer
        ?.background_color ?? "white",
  };

  return (
    <div className="main-heroheader-container" style={mainContainerStyle}>
      <NavbarContainer
        backgroundColor={heroheaderMainMenuStyle?.background_color}
        boxShadowColor={heroheaderMainMenuStyle?.box_shadow_color}
      >
        <div className="container">
          <Logo
            id={heroheaderLogo.id}
            image={{
              img_src: heroheaderLogo?.img_src,
              render: heroheaderLogo?.render && !!heroheaderLogo?.img_src,
            }}
            title={{
              text: heroheaderLogo?.text || "Estatery",
              color: heroheaderLogo?.color,
              render: heroheaderLogo?.render,
            }}
            className="fw-bold fs-3 text-primary"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeroheaderContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse collapse"
            id="navbarHeroheaderContent"
          >
            <ul className="navbar-nav mb-lg-0 mx-auto mb-2">
              {/* Regular menu items */}
              {heroheaderMenu_0?.render && (
                <ListItemLink item={heroheaderMenu_0} isActive={true} />
              )}

              {heroheaderMenu_1?.render && (
                <ListItemLink item={heroheaderMenu_1} />
              )}

              {heroheaderMenu_2?.render && (
                <ListItemLink item={heroheaderMenu_2} />
              )}

              {/* Dropdown menu items */}
              {heroheaderMenu_3?.render && (
                <NavMenuDropDown heroheaderMenu={heroheaderMenu_3} />
              )}

              {heroheaderMenu_4?.render && (
                <NavMenuDropDown heroheaderMenu={heroheaderMenu_4} />
              )}
            </ul>

            <div className="d-flex">
              <Button
                id={heroheaderLoginButton?.id}
                text={heroheaderLoginButton?.text || ""}
                color={heroheaderLoginButton?.color}
                borderColor={heroheaderLoginButton?.border_color}
                borderRadius={heroheaderLoginButton?.border_radius}
                className="btn-outline-primary me-2"
                style={{
                  padding: "8px 20px",
                  fontWeight: "500",
                }}
                type="button"
                render={heroheaderLoginButton?.render}
              />

              <Button
                id={heroheaderSignupButton?.id}
                text={heroheaderSignupButton?.text || ""}
                color={heroheaderSignupButton?.color}
                backgroundColor={heroheaderSignupButton?.background_color}
                borderColor={heroheaderSignupButton?.border_color}
                borderRadius={heroheaderSignupButton?.border_radius}
                className="btn-primary"
                style={{
                  padding: "8px 20px",
                  fontWeight: "500",
                }}
                type="button"
                render={heroheaderSignupButton?.render}
              />
            </div>
          </div>
        </div>
      </NavbarContainer>
    </div>
  );
}
