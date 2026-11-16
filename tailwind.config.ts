import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        navy: "#14243D", // legacy alias of its-navy
        "navy-dark": "#0F1B2E",
        "navy-accent": "#1D3252",
        muted: "#566173",
        surface: "#F5F6F8",
        border: "#E3E5E8",
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
          coral: "#D97868", // the one highlight per section, under 3% of the page
          "coral-ink": "#B4523F", // coral text and numbered eyebrows (5.3:1 on white)
          "coral-soft": "#FBECE8", // highlighted card background
          line: "#E3E5E8", // card borders
          periwinkle: "#5A74C9", // Direct Hire accent: primary button, step highlight (white text 4.9:1)
          "periwinkle-soft": "#E9EEFA", // periwinkle tint for tiles and chips
          "periwinkle-ink": "#3F57A6", // periwinkle text on light surfaces (6.3:1)
          // Direct Hire palette (additive). See DESIGN.md, "Direct Hire".
          charcoal: "#252D35", // the one mid-page dark section and dark tiles
          warm: "#E7EAED", // mid-tone gray bands and tiles
          "soft-slate": "#AAB4BF", // lines, icons and secondary text on dark
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
