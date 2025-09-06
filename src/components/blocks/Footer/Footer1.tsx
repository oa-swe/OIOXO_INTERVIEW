import { BlockConfig } from "../types/Config";
import { FooterSection } from "../common/Footer/FooterSection";
import { ContactColumn } from "../common/Footer/ContactColumn";
import { FooterColumn } from "../common/Footer/FooterColumn";
import { IconBox } from "../common/Icon/IconBox";
import { Button } from "../common/Button";

export function Footer1({ config }: { config: BlockConfig }) {
  // Top Section Items
  const topSectionItems = [0, 1, 2, 3].map((i) => ({
    icon: config?.contents?.rightSection?.[`footerTSIcon_${i}`],
    title: config?.contents?.rightSection?.[`footerTSTitle_${i}`],
    description: config?.contents?.rightSection?.[`footerTSDesc_${i}`],
  }));

  // Middle Section Columns
  const middleSectionColumns = [0, 1, 2, 3].map((i) => ({
    title: config?.contents?.rightSection?.[`footerMSHead_${i}0`],
    items: [1, 2, 3, 4].map(
      (j) => config?.contents?.rightSection?.[`footerMSSubHead_${i}${j}`]
    ),
  }));

  // Contact Column Items
  const contactItems = [41, 42, 43].map(
    (n) => config?.contents?.rightSection?.[`footerMSSubHead_${n}`]
  );

  return (
    <div>
      {/* Top Footer Section */}
      <FooterSection
        backgroundColor={
          config?.contents?.rightSection?.footerTopSection?.background_color
        }
      >
        <div className="row">
          {topSectionItems.map((item, i) => (
            <div className="col-lg-3 col-md-6 mb-4" key={i}>
              <div className="d-flex align-items-start">
                <IconBox
                  id={item.icon?.id}
                  iconClass={item.icon?.class}
                  iconColor={item.icon?.color}
                  backgroundColor={item.icon?.background_color}
                  render={item.icon?.render}
                />
                <div>
                  {item.title?.render && (
                    <h4
                      className="fw-bold mb-2"
                      id={item.title.id}
                      style={{ color: item.title.color }}
                    >
                      {item.title.text}
                    </h4>
                  )}
                  {item.description?.render && (
                    <p
                      className="text-muted small mb-0"
                      id={item.description.id}
                      style={{ color: item.description.color }}
                    >
                      {item.description.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FooterSection>

      {/* Middle Footer Section */}
      <FooterSection
        backgroundColor={
          config?.contents?.rightSection?.footerMiddleSection?.background_color
        }
      >
        <div className="row text-start">
          {middleSectionColumns.map((column, i) => (
            <div className="col-md-2 col-6 mb-4" key={i}>
              <FooterColumn
                title={column.title?.text}
                titleId={column.title?.id}
                titleColor={column.title?.color}
                items={column.items.map((item) => ({
                  id: item?.id,
                  text: item?.text,
                  color: item?.color,
                  render: item?.render,
                }))}
                renderTitle={column.title?.render}
              />
            </div>
          ))}

          {/* Contact column */}
          <div className="col-md-4 col-12 mb-4">
            <ContactColumn
              title={config?.contents?.rightSection?.footerMSHead_40?.text}
              titleId={config?.contents?.rightSection?.footerMSHead_40?.id}
              titleColor={
                config?.contents?.rightSection?.footerMSHead_40?.color
              }
              items={contactItems.map((item) => ({
                id: item?.id,
                text: item?.text,
                color: item?.color,
                iconClass: item?.class,
                iconColor: item?.icon_color,
                render: item?.render,
              }))}
              renderTitle={
                config?.contents?.rightSection?.footerMSHead_40?.render
              }
            />
          </div>
        </div>
      </FooterSection>

      {/* Bottom Footer Section */}
      <div
        className="py-4"
        style={{
          backgroundColor:
            config?.contents?.rightSection?.footerBottomSection
              ?.background_color ?? "#f9f9f9",
        }}
      >
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center container">
          <div className="text-md-start mb-md-0 mb-3 text-center">
            {config?.contents?.rightSection?.footerBSTitle?.render && (
              <h1
                id={config.contents.rightSection.footerBSTitle.id}
                style={{
                  color: config.contents.rightSection.footerBSTitle.color,
                }}
              >
                {config.contents.rightSection.footerBSTitle.text}
              </h1>
            )}
            {config?.contents?.rightSection?.footerBSDesc?.render && (
              <h5
                className="text-muted mb-0"
                id={config.contents.rightSection.footerBSDesc.id}
              >
                {config.contents.rightSection.footerBSDesc.text}
              </h5>
            )}
          </div>
          <Button
            id={config?.contents?.rightSection?.footerBSContactUsButton?.id}
            text={
              config?.contents?.rightSection?.footerBSContactUsButton?.text ||
              ""
            }
            color={
              config?.contents?.rightSection?.footerBSContactUsButton?.color
            }
            backgroundColor={
              config?.contents?.rightSection?.footerBSContactUsButton
                ?.background_color
            }
            borderRadius={
              config?.contents?.rightSection?.footerBSContactUsButton
                ?.border_radius
            }
            type="link"
            href="#"
            render={
              config?.contents?.rightSection?.footerBSContactUsButton?.render
            }
          />
        </div>
      </div>
    </div>
  );
}
