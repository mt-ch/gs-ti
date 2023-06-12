/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1920px",
      // Media queries to detect the user’s input modality real, non-simulated hover support.
      "can-hover": { raw: "(hover: hover)" },
      "no-hover": { raw: "(hover: none)" },
    },

    // Container sizes
    container: {
      screens: {
        // sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxl: "1440px",
      },
      padding: {
        DEFAULT: "1rem",
        md: "3rem",
        lg: "1rem",
        xl: "8rem",
      }, // use .px-0 as needed to override default padding
      center: true,
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentcolor",
        white: "#fafafa",
        black: "#262626",
        primary: {
          DEFAULT: "#201E50",
          50: "#BCBBE5",
          100: "#AEACE0",
          200: "#918ED5",
          300: "#7470CA",
          400: "#5753BE",
          500: "#443FA9",
          600: "#38348B",
          700: "#2C296E",
          800: "#201E50",
          900: "#100F27",
          950: "#080713",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("precss"),
    require("autoprefixer"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
