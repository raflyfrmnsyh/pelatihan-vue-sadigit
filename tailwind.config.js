/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "primary-10": "#E9E3FF",
          "primary-20": "#B9A2FF",
          "primary-30": "#9374FF",
          "primary-40": "#7551FF",
          "primary-50": "#4318FF",
          "primary-60": "#3311DB",
          "primary-70": "#2100B6",
          "primary-80": "#190793",
          "primary-90": "#11047A",
        },
        primeblue: {
          "primeblue-10": "#D7E3FF",
          "primeblue-20": "#AFC6FF",
          "primeblue-30": "#88A8FF",
          "primeblue-40": "#6A8EFF",
          "primeblue-50": "#3964FF",
          "primeblue-60": "#294DDB",
          "primeblue-70": "#1C38B7",
          "primeblue-80": "#122693",
          "primeblue-90": "#0A197A",
        },
        greysecond: {
          "greysecond-10": "#FAFCFE",
          "greysecond-20": "#F6F8FD",
          "greysecond-30": "#F4F7FE",
          "greysecond-40": "#E9EDF7",
          "greysecond-50": "#E0E5F2",
          "greysecond-60": "#A3AED0",
          "greysecond-70": "#707EAE",
          "greysecond-80": "#47548C",
          "greysecond-90": "#2B3674",
        },
        darksecond: {
          "darksecond-10": "#EFF4FB",
          "darksecond-20": "#E1E9F8",
          "darksecond-30": "#C9D4EA",
          "darksecond-40": "#B0BBD5",
          "darksecond-50": "#8F9BBA",
          "darksecond-60": "#68769F",
          "darksecond-70": "#485585",
          "darksecond-80": "#2D396B",
          "darksecond-90": "#1B2559",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        "2xl": "0px 32px 64px -12px rgba(85, 105, 135, 0.13)",
      },
    },
  },
  plugins: [],
};
