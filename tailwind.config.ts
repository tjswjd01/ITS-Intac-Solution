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
        sans: ["var(--font-inter)", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
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
