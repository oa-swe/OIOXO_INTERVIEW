// components/Accordion.tsx
import { AccordionItem } from "./AccordionItem";

interface FAQItem {
  id?: string;
  question: string;
  answer?: string;
  questionColor?: string;
  answerColor?: string;
  borderColor?: string;
  render?: boolean;
}

interface AccordionProps {
  items: FAQItem[];
  accordionId?: string;
  className?: string;
}

export function Accordion({
  items,
  accordionId = "faqAccordion",
  className = "",
}: AccordionProps) {
  const validItems = items.filter((item) => item.render !== false);

  if (validItems.length === 0) return null;

  return (
    <div className={`accordion ${className}`} id={accordionId}>
      {validItems.map((item, index) => (
        <AccordionItem
          key={index}
          id={item.id}
          question={item.question}
          answer={item.answer}
          questionColor={item.questionColor}
          answerColor={item.answerColor}
          borderColor={item.borderColor}
          index={index}
        />
      ))}
    </div>
  );
}
