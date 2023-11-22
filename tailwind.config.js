/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "cust-primary400": "#37427E",
        "cust-primary500": "#20274A",
        "cust-primary200": "#5C6ED2",
        "cust-primary100": "#E7E9F8",
        "cust-primary350": "#45539E",
        "cust-success450": "#226328",
        "cust-success100": "#E4FAE6",
        "cust-danger100": "#DD4B4B",
        "cust-danger500": "#4D1A1A",
      },
    },
  },
  plugins: [daisyui],
};
