import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#065DA8",
      secondary: "#ecc94b",
      textColor: "#393939",
      white: "#ffffff",
      borderGray: "#e5e5e5",
      gray: "#4a5568",
      black: "#000000",
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        none: "0",
        sm: ".125rem",
        DEFAULT: ".25rem",
        lg: ".5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
