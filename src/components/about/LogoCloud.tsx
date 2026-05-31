"use client";

type Logo = {
  src: string;
  alt: string;
  width?: number;
};

type LogoCloudProps = {
  logos: Logo[];
  className?: string;
  logoClassName?: string;
};

export default function LogoCloud({
  logos,
  className = "",
  logoClassName = "h-7 w-auto opacity-80 transition duration-300 hover:opacity-100",
}: LogoCloudProps) {
  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      <div className="flex w-max animate-logo-scroll items-center gap-16">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={`${logo.alt}-${index}`}
            src={logo.src}
            alt={logo.alt}
            width={logo.width || 120}
            className={logoClassName}
          />
        ))}
      </div>

      <style jsx>{`
        .animate-logo-scroll {
          animation: logo-scroll 35s linear infinite;
        }

        @keyframes logo-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
