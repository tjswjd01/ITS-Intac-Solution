"use client";

import { motion } from "framer-motion";

const routes = [
  {
    d: "M365 235 C280 180, 210 140, 145 110",
    delay: 0,
  },
  {
    d: "M365 235 C295 255, 220 300, 155 340",
    delay: 0.3,
  },
  {
    d: "M365 235 C455 175, 560 135, 655 118",
    delay: 0.6,
  },
  {
    d: "M365 235 C465 240, 555 295, 650 345",
    delay: 0.9,
  },
];

const points = [
  { x: 145, y: 110 },
  { x: 155, y: 340 },
  { x: 655, y: 118 },
  { x: 650, y: 345 },
];

export default function USMapNetwork() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-[22px] bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.08),transparent_68%)]" />

      <svg
        viewBox="0 0 800 420"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <defs>
          <pattern
            id="dotPattern"
            width="9"
            height="9"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#C8D5E7" />
          </pattern>

          <linearGradient id="routeGradient">
            <stop offset="0%" stopColor="#0B3D91" stopOpacity="0" />
            <stop offset="12%" stopColor="#0B3D91" stopOpacity="1" />
            <stop offset="88%" stopColor="#0B3D91" stopOpacity="1" />
            <stop offset="100%" stopColor="#0B3D91" stopOpacity="0" />
          </linearGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* USA SHAPE */}
        <path
          d="
          M110 175
          C125 140, 165 120, 230 110
          C280 100, 325 110, 365 118
          C405 105, 455 110, 515 125
          C570 138, 625 155, 675 188
          C705 208, 710 235, 695 255
          C675 280, 635 290, 605 305
          C575 320, 560 345, 525 350
          C475 355, 430 335, 390 320
          C345 305, 310 312, 270 302
          C220 290, 185 270, 160 255
          C128 235, 102 215, 110 175
          Z
          "
          fill="url(#dotPattern)"
          opacity="0.95"
        />

        {/* florida */}
        <path
          d="
          M570 305
          C605 325, 625 345, 635 375
          C640 392, 628 398, 615 386
          C595 365, 585 338, 560 318
          Z
          "
          fill="url(#dotPattern)"
        />

        {/* west coast lower */}
        <path
          d="
          M145 235
          C130 255, 128 290, 145 320
          C160 345, 180 352, 190 338
          C175 310, 168 282, 178 255
          Z
          "
          fill="url(#dotPattern)"
        />

        {/* ROUTES */}
        {routes.map((route, index) => (
          <g key={index}>
            <motion.path
              d={route.d}
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0, 1],
              }}
              transition={{
                duration: 2.5,
                delay: route.delay,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            />

            <motion.circle
              r="4"
              fill="#0B3D91"
              filter="url(#softGlow)"
              style={{
                offsetPath: `path('${route.d}')`,
              }}
              initial={{
                offsetDistance: "0%",
                opacity: 0,
              }}
              animate={{
                offsetDistance: ["0%", "100%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.5,
                delay: route.delay,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            />
          </g>
        ))}

        {/* DALLAS */}
        <circle cx="365" cy="235" r="5" fill="#0B3D91" />

        <circle cx="365" cy="235" r="5" fill="#0B3D91" opacity="0.35">
          <animate
            attributeName="r"
            from="5"
            to="20"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="0.35"
            to="0"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* END POINTS */}
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#062A56"
            opacity="0.85"
          />
        ))}
      </svg>

      <div className="absolute bottom-8 left-8 rounded-full border border-[#E5E7EB] bg-white/92 px-5 py-3 text-[13px] font-semibold text-[#062A56] shadow-[0_12px_30px_rgba(7,27,59,0.08)] backdrop-blur">
        Dallas-Based · Nationwide Support
      </div>
    </div>
  );
}