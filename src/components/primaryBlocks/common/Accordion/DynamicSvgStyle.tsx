// components/DynamicSVGStyle.tsx
interface DynamicSVGStyleProps {
  minusPlusColor?: string;
}

export function DynamicSVGStyle({
  minusPlusColor = "0c63e4",
}: DynamicSVGStyleProps) {
  return (
    <style>
      {`
        .accordion-button::after {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23${minusPlusColor}' stroke-width='2' stroke-linecap='round' fill='%230c63e4'%3e%3cpath d='M8 4v8M4 8h8'/%3e%3c/svg%3e");
        }

        .accordion-button:not(.collapsed)::after {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23${minusPlusColor}' stroke-width='2' stroke-linecap='round' fill='%230c63e4'%3e%3cpath d='M8 4v8M4 8h8'/%3e%3c/svg%3e");
        }
      `}
    </style>
  );
}
