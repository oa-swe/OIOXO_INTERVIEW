/* eslint-disable @next/next/no-img-element */
// components/Button.tsx
import { CSSProperties } from "react";
import { ElementPosition } from "../types/Html";

interface ButtonProps {
  id?: string;
  text: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  borderColor?: string;
  iconSrc?: string;
  iconClass?: string;
  iconColor?: string;
  position?: ElementPosition;
  className?: string;
  href?: string;
  type?: "button" | "link" | "submit";
  render?: boolean;
  style?: CSSProperties;
}

export function Button({
  id,
  text,
  color,
  backgroundColor,
  borderRadius,
  borderColor,
  iconSrc,
  iconClass,
  iconColor,
  position,
  className = "",
  href,
  type = "button",
  render = true,
  style,
}: ButtonProps) {
  if (!render) return null;

  const buttonStyle = {
    color,
    backgroundColor,
    borderRadius,
    borderColor,
    border: borderColor ? `1px solid ${borderColor}` : "none",
    ...style,
  };

  const content = (
    <>
      {text}
      {iconSrc ? (
        <img
          className="horizontally-flip ms-2"
          src={iconSrc}
          width="32"
          height="32"
          alt=""
        />
      ) : iconClass ? (
        <i
          style={{ color: iconColor }}
          className={`horizontally-flip ms-2 ${iconClass}`}
        />
      ) : null}
    </>
  );

  if (type === "link" && href) {
    return (
      <div
        className={`d-flex ${position === ElementPosition.END ? "justify-content-end" : ""}`}
      >
        <a
          id={id}
          href={href}
          style={buttonStyle}
          className={`btn btn-lg px-4 py-2 ${className}`}
        >
          {content}
        </a>
      </div>
    );
  }

  return (
    <div
      className={`d-flex ${position === ElementPosition.END ? "justify-content-end" : ""}`}
    >
      <button
        id={id}
        style={buttonStyle}
        className={`btn btn-lg px-4 py-2 ${className}`}
      >
        {content}
      </button>
    </div>
  );
}
