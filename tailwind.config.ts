import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        skoda: {
          green: "#78FAAE",
          "green-dark": "#4ED88A",
          secondary: "#CFFFE3",
          tertiary: "#E8FFF1",
          surface: {
            DEFAULT: "#0A0F0D",
            raised: "#111916",
            overlay: "#182019",
            card: "#141C18",
          },
          text: {
            primary: "#F0FFF6",
            secondary: "#A3B8AD",
            muted: "#6B7F73",
          },
          border: "#1E2B24",
          "border-light": "#2A3D33",
        },
        light: {
          surface: {
            DEFAULT: "#FAFFFE",
            raised: "#F0FFF6",
            card: "#FFFFFF",
          },
          text: {
            primary: "#0A1F13",
            secondary: "#3D5A4A",
          },
          border: "#D4E8DC",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", fontWeight: "700" }],
        "display-sm": ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-md": ["1.25rem", { lineHeight: "1.35", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "caption": ["0.75rem", { lineHeight: "1.4", fontWeight: "500" }],
      },
      borderRadius: {
        "skoda": "12px",
        "skoda-lg": "16px",
        "skoda-xl": "24px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-green": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(120, 250, 174, 0.3)" },
          "50%": { boxShadow: "0 0 0 8px rgba(120, 250, 174, 0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out forwards",
        "slide-in": "slide-in 0.3s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "pulse-green": "pulse-green 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
