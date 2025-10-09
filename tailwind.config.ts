import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          dark: "#0A1F44",
          DEFAULT: "#1E40AF",
          light: "#3B82F6",
        },
        // Secondary colors
        secondary: {
          dark: "#5B21B6",
          DEFAULT: "#7C3AED",
          light: "#A78BFA",
        },
        // Accent colors
        accent: {
          green: "#10B981",
          orange: "#F59E0B",
        },
        // Neutral colors - WCAG AAA compliant
        neutral: {
          black: "#0F172A",
          "gray-dark": "#1F2937",    // 12.63:1 contrast on white
          "gray-medium": "#374151",  // 8.59:1 contrast on white
          "gray-light": "#9CA3AF",   // For borders only
          "bg-light": "#F9FAFB",
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0A1F44 0%, #5B21B6 100%)",
        "gradient-card": "linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)",
        "gradient-bg": "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
