import { BlockConfig } from "../types/Config";
import { hero_config } from "./hero_1_config";
import { HeroContainer } from "./HeroContainer";
import { StatsCard } from "../common/cards/StatsCard";
import { MobileSearchCard } from "../common/cards/MobileSearchCard";
import { SearchField } from "../common/cards/SearchCard";
import { TabNavigation } from "../common/Tabs/TabNavigation";
import { Button } from "../common/Button";

export function Hero1({ config }: { config: BlockConfig }) {
  const rightSection =
    config?.contents?.rightSection ?? hero_config.contents.rightSection;
  const countersSection =
    config?.contents?.countersSection ?? hero_config.contents.countersSection;
  const {
    heroMainContainer,
    heroTitle,
    heroDesc,
    heroMobileModeSearchInput,
    heroMobileModeSearchButton,
    heroRentBuySellBorderBottomColor,
    heroRentTitle,
    heroBuyTitle,
    heroSellTitle,
    heroSearchCard,
    heroLocationTitle,
    heroLocationValue,
    heroWhenTitle,
    heroWhenValue,
    heroBrowsePropertiesButton,
  } = rightSection;

  const {
    heroRentersNumber,
    heroRentersTitle,
    heroRentersNumTitleBorder,
    heroPropertiesNumber,
    heroPropertiesTitle,
    heroPropertiesNumTitleBorder,
    heroMobileModeRentersNumber,
    heroMobileModeRentersTitle,
    heroMobileModeRentersNumTitleBorder,
    heroMobileModePropertiesNumber,
    heroMobileModePropertiesTitle,
    heroMobileModePropertiesNumTitleBorder,
  } = countersSection;

  // Prepare tab items
  const tabItems = [
    { ...heroRentTitle, active: true },
    heroBuyTitle,
    heroSellTitle,
  ];

  return (
    <HeroContainer
      id={heroMainContainer?.id}
      background={heroMainContainer?.background}
      backgroundColor={heroMainContainer?.background_color}
      render={heroMainContainer?.render}
    >
      <div className="container-fluid p-0">
        <div className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-6 text-lg-start mb-lg-0 mb-5 text-center">
                <div className="row">
                  {heroTitle?.render && (
                    <h1
                      className="display-1 fw-bold mb-4"
                      style={{ color: heroTitle?.color }}
                      id={heroTitle?.id}
                      dangerouslySetInnerHTML={{
                        __html: heroTitle?.text || "",
                      }}
                    />
                  )}
                  {heroDesc?.render && (
                    <p
                      className="fs-5 text-body-secondary mb-4"
                      style={{ color: heroDesc?.color }}
                      id={heroDesc?.id}
                    >
                      {heroDesc?.text}
                    </p>
                  )}
                </div>

                {/* Desktop Stats */}
                <div className="row d-none d-md-flex">
                  <div className="col-md-6">
                    <StatsCard
                      number={heroRentersNumber}
                      title={heroRentersTitle}
                      borderColor={heroRentersNumTitleBorder?.border_color}
                      render={
                        heroRentersNumber?.render || heroRentersTitle?.render
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <StatsCard
                      number={heroPropertiesNumber}
                      title={heroPropertiesTitle}
                      borderColor={heroPropertiesNumTitleBorder?.border_color}
                      render={
                        heroPropertiesNumber?.render ||
                        heroPropertiesTitle?.render
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <TabNavigation
                  items={tabItems}
                  borderBottomColor={
                    heroRentBuySellBorderBottomColor?.border_bottom_color
                  }
                  render={
                    heroRentTitle?.render ||
                    heroBuyTitle?.render ||
                    heroSellTitle?.render
                  }
                />

                {/* Desktop Search Card */}
                {heroSearchCard?.render && (
                  <div
                    className="card d-none d-md-block mb-4 border-0 p-4 shadow-lg"
                    style={{
                      backgroundColor: heroSearchCard.background_color,
                      boxShadow: `0 4px 12px ${heroSearchCard.box_shadow_color || "rgba(0, 0, 0, 0.1)"}`,
                    }}
                  >
                    <div className="row align-items-center">
                      <SearchField
                        title={heroLocationTitle}
                        value={heroLocationValue}
                        className="col-md-4"
                        render={
                          heroLocationTitle?.render || heroLocationValue?.render
                        }
                      />
                      <SearchField
                        title={heroWhenTitle}
                        value={{
                          ...heroWhenValue,
                          iconClass: heroWhenTitle?.class,
                          iconColor: heroWhenValue?.icon_color,
                        }}
                        className="col-md-4"
                        render={heroWhenTitle?.render || heroWhenValue?.render}
                      />
                      <div className="col-md-4 text-md-end">
                        <Button
                          id={heroBrowsePropertiesButton?.id}
                          text={heroBrowsePropertiesButton?.text || ""}
                          color={heroBrowsePropertiesButton?.color}
                          backgroundColor={
                            heroBrowsePropertiesButton?.background_color
                          }
                          borderRadius={
                            heroBrowsePropertiesButton?.border_radius
                          }
                          className="btn-primary px-4 py-2"
                          type="button"
                          render={heroBrowsePropertiesButton?.render}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Mobile Search Card */}
                <MobileSearchCard
                  input={{
                    placeholder: heroMobileModeSearchInput?.placeholder_text,
                    render: heroMobileModeSearchInput?.render,
                  }}
                  button={{
                    class: heroMobileModeSearchButton?.class,
                    iconColor: heroMobileModeSearchButton?.icon_color,
                    backgroundColor:
                      heroMobileModeSearchButton?.background_color,
                    borderColor: heroMobileModeSearchButton?.border_color,
                    borderRadius: heroMobileModeSearchButton?.border_radius,
                    render: heroMobileModeSearchButton?.render,
                  }}
                  render={
                    heroMobileModeSearchInput?.render ||
                    heroMobileModeSearchButton?.render
                  }
                />

                {/* Mobile Stats */}
                <div className="row d-md-none">
                  <div className="col-6">
                    <StatsCard
                      number={heroMobileModeRentersNumber}
                      title={heroMobileModeRentersTitle}
                      borderColor={
                        heroMobileModeRentersNumTitleBorder?.border_color
                      }
                      numberClassNames="display-6 fw-bold text-primary mb-1"
                      titleClassNames="fs-6 fw-semibold"
                      className="ps-3"
                      render={
                        heroMobileModeRentersNumber?.render ||
                        heroMobileModeRentersTitle?.render
                      }
                    />
                  </div>
                  <div className="col-6">
                    <StatsCard
                      number={heroMobileModePropertiesNumber}
                      title={heroMobileModePropertiesTitle}
                      borderColor={
                        heroMobileModePropertiesNumTitleBorder?.border_color
                      }
                      numberClassNames="display-6 fw-bold text-primary mb-1"
                      titleClassNames="fs-6 fw-semibold"
                      className="ps-3"
                      render={
                        heroMobileModePropertiesNumber?.render ||
                        heroMobileModePropertiesTitle?.render
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
