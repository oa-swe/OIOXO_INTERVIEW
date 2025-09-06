import { CardColumn } from "../common/cards/CardColumn";
import { SidebarColumn } from "../common/Sidebar/SidebarColumn";
import { BlockConfig } from "../types/Config";

export function Mayoralven1({ config }: { config: BlockConfig }) {
  const rightSection: any = config?.contents?.rightSection;

  const mainContainerStyle = {
    backgroundColor:
      rightSection?.mayoralvenMainContainer?.background_color ?? "white",
  };

  // Prepare card columns data
  const cardColumns = [0, 1, 2].map((colIndex) => {
    const title = rightSection?.[`mayoralvenCard_${colIndex}_Title_0`];

    const items = [0, 1, 2, 3].map((itemIndex) => ({
      id: rightSection?.[`mayoralvenCard_${colIndex}_Item_${itemIndex}`]?.id,
      icon: {
        id: rightSection?.[`mayoralvenCard_${colIndex}_ItemIcon_${itemIndex}`]
          ?.id,
        class:
          rightSection?.[`mayoralvenCard_${colIndex}_ItemIcon_${itemIndex}`]
            ?.class,
        iconColor:
          rightSection?.[`mayoralvenCard_${colIndex}_ItemIcon_${itemIndex}`]
            ?.icon_color,
        backgroundColor:
          rightSection?.[`mayoralvenCard_${colIndex}_ItemIcon_${itemIndex}`]
            ?.background_color,
        render:
          rightSection?.[`mayoralvenCard_${colIndex}_ItemIcon_${itemIndex}`]
            ?.render,
      },
      title: {
        id: rightSection?.[`mayoralvenCard_${colIndex}_Item_${itemIndex}`]?.id,
        text: rightSection?.[`mayoralvenCard_${colIndex}_Item_${itemIndex}`]
          ?.text,
        color:
          rightSection?.[`mayoralvenCard_${colIndex}_Item_${itemIndex}`]?.color,
        render:
          rightSection?.[`mayoralvenCard_${colIndex}_Item_${itemIndex}`]
            ?.render,
      },
      description: {
        id: rightSection?.[`mayoralvenCard_${colIndex}_ItemDesc_${itemIndex}`]
          ?.id,
        text: rightSection?.[`mayoralvenCard_${colIndex}_ItemDesc_${itemIndex}`]
          ?.text,
        color:
          rightSection?.[`mayoralvenCard_${colIndex}_ItemDesc_${itemIndex}`]
            ?.color,
        render:
          rightSection?.[`mayoralvenCard_${colIndex}_ItemDesc_${itemIndex}`]
            ?.render,
      },
      callToAction: {
        id: rightSection?.[
          `mayoralvenCard_${colIndex}_ItemCallAction_${itemIndex}`
        ]?.id,
        text: rightSection?.[
          `mayoralvenCard_${colIndex}_ItemCallAction_${itemIndex}`
        ]?.text,
        color:
          rightSection?.[
            `mayoralvenCard_${colIndex}_ItemCallAction_${itemIndex}`
          ]?.color,
        iconClass:
          rightSection?.[
            `mayoralvenCard_${colIndex}_ItemCallAction_${itemIndex}`
          ]?.class,
        iconColor:
          rightSection?.[
            `mayoralvenCard_${colIndex}_ItemCallAction_${itemIndex}`
          ]?.icon_color,
        render:
          rightSection?.[
            `mayoralvenCard_${colIndex}_ItemCallAction_${itemIndex}`
          ]?.render,
      },
      render:
        rightSection?.[`mayoralvenCard_${colIndex}_Item_${itemIndex}`]
          ?.render ||
        rightSection?.[`mayoralvenCard_${colIndex}_ItemDesc_${itemIndex}`]
          ?.render ||
        rightSection?.[`mayoralvenCard_${colIndex}_ItemCallAction_${itemIndex}`]
          ?.render,
    }));

    return {
      title: {
        id: title?.id,
        text: title?.text,
        color: title?.color,
        render: title?.render,
      },
      items,
      render: title?.render || items.some((item) => item.render),
    };
  });

  // Prepare sidebar items data
  const sidebarItems = [0, 1].map((sidebarIndex) => ({
    id: `sidebar-${sidebarIndex}`,
    image: {
      id: rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Image`]?.id,
      img_src:
        rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Image`]?.img_src,
      render: rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Image`]?.render,
    },
    title: {
      id: rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Title`]?.id,
      text: rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Title`]?.text,
      color: rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Title`]?.color,
      render: rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Title`]?.render,
    },
    badge:
      sidebarIndex === 0
        ? {
            id: "mayarolven_sidebar_0_title_badge_id",
            text: rightSection?.mayoralvenSidebar_0_TitleBadge?.text,
            color: rightSection?.mayoralvenSidebar_0_TitleBadge?.color,
            borderColor:
              rightSection?.mayoralvenSidebar_0_TitleBadge?.border_color,
            render: !!rightSection?.mayoralvenSidebar_0_TitleBadge?.text,
          }
        : undefined,
    description: {
      id: rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Desc`]?.id,
      text: rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Desc`]?.text,
      color: rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Desc`]?.color,
      render: rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Desc`]?.render,
    },
    callToAction: {
      id: rightSection?.[`mayoralvenSidebar_${sidebarIndex}_CallAction`]?.id,
      text: rightSection?.[`mayoralvenSidebar_${sidebarIndex}_CallAction`]
        ?.text,
      color:
        rightSection?.[`mayoralvenSidebar_${sidebarIndex}_CallAction`]?.color,
      iconClass:
        rightSection?.[`mayoralvenSidebar_${sidebarIndex}_CallAction`]?.class,
      iconColor:
        rightSection?.[`mayoralvenSidebar_${sidebarIndex}_CallAction`]
          ?.icon_color,
      render:
        rightSection?.[`mayoralvenSidebar_${sidebarIndex}_CallAction`]?.render,
    },
    render:
      rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Image`]?.render ||
      rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Title`]?.render ||
      rightSection?.[`mayoralvenSidebar_${sidebarIndex}_Desc`]?.render ||
      rightSection?.[`mayoralvenSidebar_${sidebarIndex}_CallAction`]?.render,
  }));

  return (
    <div className="mayoralven-main-container" style={mainContainerStyle}>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {/* Content Columns */}
              {cardColumns.map((column, index) => (
                <CardColumn
                  key={index}
                  title={column.title}
                  items={column.items}
                  render={column.render}
                />
              ))}

              {/* Right Sidebar */}
              <SidebarColumn
                backgroundColor={
                  config?.contents?.rightSection?.mayoralvenSidebarContainer
                    ?.background_color
                }
                items={sidebarItems}
                render={sidebarItems.some((item) => item.render)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
