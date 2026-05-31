import { cn } from "@/lib/utils";

type EyebrowTone = "navy" | "black";

type OperationsSectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  descriptionClassName?: string;
  eyebrowTone?: EyebrowTone;
  titleMetallicShine?: boolean;
};

const eyebrowToneStyles: Record<
  EyebrowTone,
  { text: string; dot: string }
> = {
  navy: { text: "text-[#0A3A86]", dot: "bg-[#0A3A86]" },
  black: { text: "text-[#111111]", dot: "bg-[#111111]" },
};

export default function OperationsSectionHeader({
  eyebrow,
  title,
  description,
  className = "",
  descriptionClassName = "max-w-2xl",
  eyebrowTone = "navy",
  titleMetallicShine = false,
}: OperationsSectionHeaderProps) {
  const eyebrowStyle = eyebrowToneStyles[eyebrowTone];

  return (
    <div className={className}>
      <p
        className={cn(
          "flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]",
          eyebrowStyle.text,
        )}
      >
        <span
          className={cn("h-2 w-2 rounded-full", eyebrowStyle.dot)}
          aria-hidden
        />
        {eyebrow}
      </p>

      <h2
        className={cn(
          "section-title mt-5 max-w-[760px]",
          titleMetallicShine && "heading-metallic-shine",
        )}
      >
        {title}
      </h2>

      <p className={cn("section-copy mt-6", descriptionClassName)}>{description}</p>
    </div>
  );
}
