import { BlockConfig } from "../types/Config";
import { DynamicSVGStyle } from "../common/Accordion/DynamicSvgStyle";
import { Accordion } from "../common/Accordion/Accordion";
import { Image } from "../common/Image";

export function Faq1({ config }: { config: BlockConfig }) {
  const mainContainerStyle = {
    backgroundColor:
      config?.contents?.containerSection.faqMainContainer?.background_color ??
      "white",
  };

  const minusPlusColor =
    config?.contents?.accordionSettingsSection.faqQuestionMinusPluseColor
      ?.color ?? "0c63e4";

  // Prepare FAQ items from config
  const faqItems = [0, 1, 2, 3].map((index) => {
    const questionKey = `faqQuestion_${index}` as const;
    const answerKey = `faqAnswer_${index}` as const;

    const questionConfig = config?.contents?.questionsSection?.[questionKey];
    const answerConfig = config?.contents?.questionsSection?.[answerKey];

    return {
      id: questionConfig?.id,
      question: questionConfig?.text || "",
      answer: answerConfig?.text,
      questionColor: questionConfig?.color,
      answerColor: answerConfig?.color,
      borderColor: questionConfig?.border_color,
      render: questionConfig?.render,
    };
  });

  return (
    <>
      <DynamicSVGStyle minusPlusColor={minusPlusColor} />

      <div style={mainContainerStyle}>
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Column - Image */}
            <div className="col-lg-6 mb-lg-0 mb-4">
              <Image
                id={config?.contents?.imageSection.faqMainImage?.id}
                src={config?.contents?.imageSection.faqMainImage?.img_src || ""}
                alt="FAQ Illustration"
                className="rounded shadow"
                render={config?.contents?.imageSection.faqMainImage?.render}
              />
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className="col-lg-6">
              {config?.contents?.headerSection.faqTitle?.render && (
                <h2
                  className="fw-bold text-primary mb-4"
                  style={{
                    color: config.contents.headerSection.faqTitle.color || "",
                  }}
                  id={config.contents.headerSection.faqTitle.id || ""}
                >
                  {config.contents.headerSection.faqTitle.text || ""}
                </h2>
              )}

              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
