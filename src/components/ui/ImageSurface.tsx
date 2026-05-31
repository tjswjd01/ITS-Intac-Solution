import type { ReactNode } from "react";

type ImageSurfaceProps = {
  src?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  children?: ReactNode;
};

export default function ImageSurface({
  src,
  alt,
  className = "",
  imageClassName = "",
  overlayClassName = "",
  children,
}: ImageSurfaceProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        role="img"
        aria-label={alt}
        className={`absolute inset-0 bg-[#EDEFF3] bg-cover bg-center bg-no-repeat ${imageClassName}`}
        style={src ? { backgroundImage: `url("${src}")` } : undefined}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(2,31,69,0.12))]" />

      {overlayClassName ? (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      ) : null}

      {children ? <div className="relative z-10 h-full">{children}</div> : null}
    </div>
  );
}
