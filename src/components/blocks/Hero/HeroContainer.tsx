// components/HeroContainer.tsx
interface HeroContainerProps {
  id?: string;
  background?: string;
  backgroundColor?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  backgroundPosition?: string;
  className?: string;
  children: React.ReactNode;
  render?: boolean;
}

export function HeroContainer({
  id,
  background = "white",
  backgroundColor = "white",
  backgroundSize = "50% 100%",
  backgroundRepeat = "no-repeat",
  backgroundPosition = "right",
  className = "",
  children,
  render = true,
}: HeroContainerProps) {
  if (!render) return null;

  return (
    <>
      <style>
        {`
          .main-hero-container {
            background: ${background};
          }
          @media (max-width: 767.98px) {
            .main-hero-container {
              background-image: none;
            }
          }
        `}
      </style>
      <div
        id={id}
        className={`main-hero-container ${className}`}
        style={{
          backgroundColor,
          backgroundSize,
          backgroundRepeat,
          backgroundPosition,
        }}
      >
        {children}
      </div>
    </>
  );
}
