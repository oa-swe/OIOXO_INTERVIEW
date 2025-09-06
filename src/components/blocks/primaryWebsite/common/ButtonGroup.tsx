// components/ButtonGroup.tsx (updated)
import { Button } from "./Button";

interface ButtonItem {
  id?: string;
  text?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: string;
  backgroundColor?: string;
  href?: string;
  className?: string;
  type?: "button" | "link";
  render?: boolean;
}

interface ButtonGroupProps {
  id?: string;
  buttons?: ButtonItem[];
  className?: string;
  render?: boolean;
  backgroundColor?: string;
}

export function ButtonGroup({
  id,
  backgroundColor,
  buttons,
  className = "",
  render = true,
}: ButtonGroupProps) {
  if (!render) return null;

  const validButtons =
    buttons?.filter((button) => button.render !== false) || [];

  if (validButtons.length === 0) return null;

  return (
    <div
      id={id}
      className={`d-flex ${className}`}
      style={backgroundColor ? { backgroundColor: backgroundColor } : {}}
    >
      {validButtons.map((button, index) => (
        <Button
          key={index}
          id={button.id}
          text={button.text || ""}
          color={button.color}
          borderColor={button.borderColor}
          borderRadius={button.borderRadius}
          backgroundColor={button.backgroundColor}
          href={button.href}
          className={button.className}
          type={button.type}
          render={button.render}
        />
      ))}
    </div>
  );
}
