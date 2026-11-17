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
        brand: {
          canvas: "#F9F8F3",
          dark: "#171B2C",
          muted: "#656770",
          subtle: "#6D7384",
          "light-gray": "#9E9FAA",
          border: "#DBDFEB",
          "border-light": "#E7E7EC",
          blue: {
            DEFAULT: "#3157F6",
            hover: "#2546D9",
            soft: "#E2E8FF",
          },
          yellow: {
            soft: "#FFF1C2",
            accent: "#FFEE7E",
            dark: "#E9D659",
          },
          peach: "#FFCB9F",
          coral: "#FF704D",
          slate: {
            dark: "#0F172A",
            muted: "#475569",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      maxWidth: {
        content: "1200px",
        container: "1280px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
        floating: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
