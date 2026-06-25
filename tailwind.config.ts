import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-instrument)", "Georgia", "serif"],
      },
      colors: {
        surface: "#0a0a0a",
        card: "#0f0f0f",
        "card-hover": "#141414",
        border: "rgba(255,255,255,0.08)",
        "border-hover": "rgba(255,255,255,0.15)",
        primary: "#f0f0f0",
        muted: "rgba(255,255,255,0.45)",
        faint: "rgba(255,255,255,0.25)",
        teal: "#5DCAA5",
        "teal-bg": "rgba(29,158,117,0.1)",
        "teal-border": "rgba(29,158,117,0.2)",
        amber: "#EF9F27",
        "amber-bg": "rgba(186,117,23,0.15)",
        purple: "#AFA9EC",
        "purple-bg": "rgba(83,74,183,0.15)",
        blue: "#85B7EB",
        "blue-bg": "rgba(24,95,165,0.15)",
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};

export default config;
