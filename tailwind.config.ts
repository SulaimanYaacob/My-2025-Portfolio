import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: colors.violet[600],
        secondary: colors.amber[600],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 8s ease-in infinite",
        "float": "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-delay": "float 4s 1.5s ease-in-out infinite",
        "float-delay-2": "float 5s 3s ease-in-out infinite",
        "spin-very-slow": "spin-very-slow 30s linear infinite",
        "glow": "glow-pulse 2.5s ease-in-out infinite",
        "wiggle": "wiggle 3s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "twinkle-delay": "twinkle 3s 1.2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "pulse-glow-amber": "pulse-glow-amber 2.5s ease-in-out infinite",
        "bubble-rise": "bubble-rise 6s ease-in infinite",
        "bubble-rise-slow": "bubble-rise 9s 2s ease-in infinite",
        "shimmer-x": "shimmer-x 4s ease-in-out infinite",
        "orbit-slow": "orbit-slow 60s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-very-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.7" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        "twinkle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "40%": { opacity: "0.3", transform: "scale(0.8)" },
          "70%": { opacity: "0.8", transform: "scale(1.1)" },
        },
        "pulse-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 4px #7c3aed) drop-shadow(0 0 8px rgba(124,58,237,0.25))" },
          "50%": { filter: "drop-shadow(0 0 10px #7c3aed) drop-shadow(0 0 20px rgba(124,58,237,0.4))" },
        },
        "pulse-glow-amber": {
          "0%, 100%": { filter: "drop-shadow(0 0 4px #d97706) drop-shadow(0 0 8px rgba(217,119,6,0.25))" },
          "50%": { filter: "drop-shadow(0 0 10px #f59e0b) drop-shadow(0 0 20px rgba(245,158,11,0.4))" },
        },
        "bubble-rise": {
          "0%": { transform: "translateY(20px)", opacity: "0.7" },
          "80%": { opacity: "0.3" },
          "100%": { transform: "translateY(-120px)", opacity: "0" },
        },
        "shimmer-x": {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(6px)" },
        },
        "orbit-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
