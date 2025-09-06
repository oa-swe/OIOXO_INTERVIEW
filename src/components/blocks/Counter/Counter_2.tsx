import { counter_2_config } from "./Counter_2_config";
import { BlockConfig } from "../types/Config";

export function Counter2({ config }: { config: BlockConfig }) {
  const counterListSection =
    config?.contents?.counterListSection ??
    counter_2_config.contents.counterListSection;
  const { counterItems } = counterListSection;

  const mainContainerStyle = {
    backgroundColor:
      config?.contents?.containerSection?.counterMainContainer
        ?.background_color ?? "white",
  };

  return (
    <>
      <div
        className="counter-main-container container py-5"
        style={mainContainerStyle}
      >
        {counterItems?.render && (
          <div className="row justify-content-center">
            {counterItems.children?.map((child, idx) => {
              const title = child.title;
              const sub_title = child.sub_title;

              return (
                <div
                  key={idx}
                  className="col-md-3 mb-md-0 col-6 mb-4 text-center"
                >
                  <div className="display-3 fw-bold text-body-emphasis mb-1">
                    {title?.text}
                  </div>
                  <div className="fw-bold text-body-secondary">
                    {sub_title?.text}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
