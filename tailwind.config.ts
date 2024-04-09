import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        accent: "rgb(var(--color-accent))",
        bkg: "rgb(var(--color-bkg) )",
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary) )",
        text: "rgb(var(--color-text))",
        danger: "rgb(var(--color-danger))",
        warning: "rgb(var(--color-warning))",
        success: "rgb(var(--color-success))",
      },
      boxShadow: {
        auto: "var(--shadow-main)",
        light:
          "15px 15px 25px rgba(0, 0, 0, 0.16), -15px -15px 25px rgba(255, 255, 255, 0.65)",
        dark: "inset 5px 5px 8px rgba(0, 0, 0, 1), inset -5px -5px 8px rgba(126, 149, 168, 0.3)",
        inset: "inset 10px 10px 20px #a5a7a9, inset -10px -10px 20px #ffffff;",
        insetInput:
          "inset 5px 5px 10px rgba(0, 0, 0, 0.16), inset -5px -5px 10px #ffffff;",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
