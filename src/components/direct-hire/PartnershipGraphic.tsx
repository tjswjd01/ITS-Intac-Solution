import { useId } from "react";

const RADII = [110, 165, 220, 275, 330, 385];
const LEFT = { x: 360, y: 330 };
const RIGHT = { x: 600, y: 290 };

/**
 * Two sets of rings that meet and overlap: an abstract mark for a hiring
 * partnership. Drawn in code, decorative only, and meant to sit inside a dark
 * background rather than beside the text. Swap for an approved photo later by
 * replacing this component where it is used.
 */
export default function PartnershipGraphic({
  className,
  accent = true,
}: {
  className?: string;
  /** Shows the small coral point where the two sides meet. */
  accent?: boolean;
}) {
  const clipId = `lens-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 960 620"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden
      className={className}
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx={RIGHT.x} cy={RIGHT.y} r={220} />
        </clipPath>
      </defs>

      {/* the shared area where the two sides overlap */}
      <circle cx={LEFT.x} cy={LEFT.y} r={220} fill="#FFFFFF" fillOpacity={0.055} clipPath={`url(#${clipId})`} />

      {[LEFT, RIGHT].map((center) =>
        RADII.map((radius, index) => (
          <circle
            key={`${center.x}-${radius}`}
            cx={center.x}
            cy={center.y}
            r={radius}
            stroke="#AAB4BF"
            strokeOpacity={0.46 - index * 0.065}
            strokeWidth={1}
          />
        )),
      )}

      <circle cx={LEFT.x} cy={LEFT.y} r={3} fill="#AAB4BF" fillOpacity={0.7} />
      <circle cx={RIGHT.x} cy={RIGHT.y} r={3} fill="#AAB4BF" fillOpacity={0.7} />
      <circle cx={510.1} cy={490.8} r={3} fill="#AAB4BF" fillOpacity={0.7} />

      {/* where the two 220 rings cross */}
      {accent ? (
        <>
          <circle cx={449.9} cy={129.2} r={11} stroke="#D97868" strokeOpacity={0.45} strokeWidth={1} />
          <circle cx={449.9} cy={129.2} r={4} fill="#D97868" />
        </>
      ) : (
        <circle cx={449.9} cy={129.2} r={3} fill="#AAB4BF" fillOpacity={0.7} />
      )}
    </svg>
  );
}
