/* eslint-disable @next/next/no-img-element */
// components/Image.tsx
interface ImageProps {
  id?: string;
  src: string;
  alt: string;
  className?: string;
  render?: boolean;
}

export function Image({
  id,
  src,
  alt,
  className = "",
  render = true,
}: ImageProps) {
  if (!render) return null;

  return (
    <img id={id} src={src} alt={alt} className={`img-fluid ${className}`} />
  );
}
