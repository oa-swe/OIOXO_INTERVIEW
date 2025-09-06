// components/StatsCard.tsx

import { TextContainer } from "../TextContainer/TextContainer";

interface StatsCardProps {
  number?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  title?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  borderColor?: string;
  numberClassNames?: string;
  titleClassNames?: string;
  className?: string;
  render?: boolean;
}

export function StatsCard({
  number,
  title,
  borderColor = "rgb(200 214 200)",
  numberClassNames = "display-4 fw-bold text-primary mb-1",
  titleClassNames = "fs-5 fw-semibold",
  className = "",
  render = true,
}: StatsCardProps) {
  if (!render) return null;

  return (
    <div
      className={`border-start ps-4 ${className}`}
      style={{ borderLeftColor: borderColor }}
    >
      {number?.render && (
        <TextContainer classNames={numberClassNames} textItem={number} />
      )}
      {title?.render && (
        <TextContainer classNames={titleClassNames} textItem={title} />
      )}
    </div>
  );
}
