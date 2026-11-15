import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        navy: "#062A56",
        "navy-dark": "#021F45",
        "navy-accent": "#0B3D91",
        muted: "#6B7280",
        surface: "#FAFAF8",
        border: "#E5E7EB",
        // Home redesign palette (Nov 2026). Additive: existing tokens above are unchanged.
        its: {
          navy: "#14243D", // headings, primary CTAs, the single dark module
          slate: "#758194", // dividers, large supporting type
          "slate-ink": "#566173", // body copy on off-white (5.8:1)
          offwhite: "#F5F6F8", // quiet surface on inner pages (cool, was warm #F7F6F3)
          cool: "#F0F2F5", // Home section bands and proof cards
          dusty: "#A5B5C5", // icon strokes
          "dusty-soft": "#EDF1F5", // icon tiles
          mint: "#8FAAA5", // decorative rules and dots only
          "mint-ink": "#4F6F69", // eyebrow text (5.1:1 on off-white)
          coral: "#D97868", // rare accent, under 3% of the page
          line: "#E3E5E8", // card borders
          periwinkle: "#5A74C9", // Direct Hire accent: primary button, step highlight (white text 4.9:1)
          "periwinkle-soft": "#E9EEFA", // periwinkle tint for tiles and chips
          "periwinkle-ink": "#3F57A6", // periwinkle text on light surfaces (6.3:1)
        },
      },
      boxShadow: {
        premium: "0 18px 50px rgba(15, 23, 42, 0.06)",
        glow:
          "0 0 0 1px rgba(5, 38, 89, 0.06), 0 0 24px rgba(5, 71, 160, 0.16)",
        "glow-strong":
          "0 0 0 1px rgba(5, 38, 89, 0.08), 0 0 32px rgba(5, 71, 160, 0.22)",
      },
      borderRadius: {
        premium: "28px",
        xl2: "32px",
      },
      maxWidth: {
        shell: "1380px",
        "shell-desktop": "1520px",
      },
      fontFamily: {
        sans: [
          "var(--font-pretendard)",
          "var(--font-pretendard-kr)",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        "footer-shine": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(320%)" },
        },
        floatChart: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(6px)" },
          "100%": { transform: "translateX(0px)" },
        },
        aurora: {
          "0%": { backgroundPosition: "50% 50%, 50% 50%" },
          "100%": { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
      animation: {
        "footer-shine": "footer-shine 14s ease-in-out infinite",
        floatChart: "floatChart 6s ease-in-out infinite",
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
