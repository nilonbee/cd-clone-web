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
      xs: "0px", // 0-412
      sm: "512px", // 412-768
      md: "768px", // 768-1024
      lg: "1024px", // 1024-1440
      xl: "1440px", // 1440-1920
    },
    colors: {
      primary: "#065DA8",
      primaryDark: "#0d3b66",
      secondary: "#ecc94b",
      textColor: "#393939",
      white: "#ffffff",
      borderGray: "#e5e5e5",
      gray: "#4a5568",
      black: "#000000",
      grayLight: "#f3f3f3",
      lightBlue:"#D4EBFF",
      grayMedium: "#999",
      whiteGray:"#E0E0E0",
      grayText: "#b2b2b2",
      red: "#ff0000",
      border: "#cccccc",
      transparent: "transparent",
      whiteSmoke: "#F5F5F5"
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
