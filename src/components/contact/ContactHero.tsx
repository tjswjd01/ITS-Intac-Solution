import { Eyebrow } from "@/components/site/primitives";
import { contactHero } from "@/content/contact";

/** Points and links of the line drawing on the right of the banner. */
const nodes = {
  a: [96, 262],
  b: [198, 158],
  c: [296, 236],
  d: [352, 108],
  e: [446, 198],
  f: [508, 84],
  g: [572, 172],
  h: [612, 288],
  i: [474, 306],
  j: [246, 66],
  k: [372, 330],
} as const;

type NodeId = keyof typeof nodes;

const links: [NodeId, NodeId][] = [
  ["a", "b"],
  ["b", "c"],
  ["b", "j"],
  ["j", "d"],
  ["c", "d"],
  ["c", "e"],
  ["c", "k"],
  ["d", "e"],
  ["d", "f"],
  ["e", "g"],
  ["f", "g"],
  ["e", "i"],
  ["g", "h"],
  ["i", "h"],
  ["k", "i"],
];

const hubs: NodeId[] = ["d", "e", "c"];

/** Original line drawing of connected points; decorative only. */
function ConnectionLines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] [mask-image:linear-gradient(90deg,transparent_0%,black_42%)] md:block"
    >
      <svg
        viewBox="0 0 640 380"
        preserveAspectRatio="xMaxYMid slice"
        className="h-full w-full"
        fill="none"
      >
        <g stroke="#A5B5C5" strokeOpacity="0.3" strokeWidth="1">
          {links.map(([from, to]) => (
            <line
              key={`${from}-${to}`}
              x1={nodes[from][0]}
              y1={nodes[from][1]}
              x2={nodes[to][0]}
              y2={nodes[to][1]}
            />
          ))}
        </g>
        <g stroke="#A5B5C5" strokeOpacity="0.35" strokeWidth="1">
          {hubs.map((id) => (
            <circle key={id} cx={nodes[id][0]} cy={nodes[id][1]} r="11" />
          ))}
        </g>
        <g fill="#A5B5C5" fillOpacity="0.75">
          {(Object.keys(nodes) as NodeId[]).map((id) => (
            <circle key={id} cx={nodes[id][0]} cy={nodes[id][1]} r="3" />
          ))}
        </g>
      </svg>
    </div>
  );
}

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-its-navy">
      <ConnectionLines />

      <div className="layout-container relative z-10 pb-14 pt-32 md:pb-20 md:pt-40">
        <div className="max-w-[600px]">
          <Eyebrow rule onDark>
            {contactHero.label}
          </Eyebrow>
          <h1 className="mt-5 text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-white">
            {contactHero.headline}
          </h1>
          <p className="mt-6 max-w-[480px] text-[17px] leading-[1.7] text-[#D3DAE3]">
            {contactHero.copy}
          </p>
        </div>
      </div>
    </section>
  );
}
