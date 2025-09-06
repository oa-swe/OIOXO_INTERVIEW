// components/AccordionItem.tsx
interface AccordionItemProps {
  id?: string;
  question: string;
  answer?: string;
  questionColor?: string;
  answerColor?: string;
  borderColor?: string;
  index: number;
  isOpen?: boolean;
  onToggle?: (index: number) => void;
}

export function AccordionItem({
  id,
  question,
  answer,
  questionColor,
  answerColor,
  borderColor,
  index,
}: AccordionItemProps) {
  const itemId = `faqItem-${index}`;
  const headingId = `heading-${index}`;
  const collapseId = `collapse-${index}`;

  return (
    <div
      id={itemId}
      className="accordion-item border-top border-bottom"
      style={{
        borderLeft: 0,
        borderRight: 0,
        borderTopColor: borderColor || "#dee2e6",
        borderBottomColor: borderColor || "#dee2e6",
      }}
    >
      <h3 className="accordion-header" id={headingId}>
        <button
          id={id}
          className="accordion-button collapsed fw-bold bg-transparent py-3 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls={collapseId}
          style={{ color: questionColor }}
        >
          {question}
        </button>
      </h3>
      {answer && (
        <div
          id={collapseId}
          className="accordion-collapse collapse"
          aria-labelledby={headingId}
          data-bs-parent="#faqAccordion"
        >
          <div
            className="accordion-body text-muted pt-0"
            style={{ color: answerColor }}
          >
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}
