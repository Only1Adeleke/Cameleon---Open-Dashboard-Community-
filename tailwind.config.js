module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_3f: "#ffffff3f", A700: "#ffffff" },
        red: {
          500: "#ff3737",
          600: "#f52c20",
          "600_01": "#f52d20",
          "500_19": "#ff383819",
        },
        blue_gray: {
          200: "#adb2cc",
          600: "#54587d",
          700: "#50556a",
          900: "#0b3147",
          "600_6c": "#54587d6c",
          "200_01": "#adb3cc",
          "600_87": "#54587d87",
          "600_01": "#585f7f",
          "600_02": "#585f80",
        },
        blue: { 50: "#dceff9", A700: "#0e6bf6", "50_01": "#ddeffa" },
        light_blue: { 400: "#17b1e9", A200: "#41baff" },
        green: { A400: "#04ef62", A400_01: "#00de73", A400_19: "#00de7319" },
        gray: {
          100: "#effff7",
          900: "#161828",
          "900_02": "#1c2031",
          "900_03": "#191d2f",
          "900_04": "#1a1e30",
          "900_05": "#1d2134",
          "900_01": "#171a2c",
        },
        amber: { 700: "#e5a500" },
        indigo: { "50_14": "#e1e4f214", A700: "#0229e7" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
