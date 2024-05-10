/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "brandPrimary": "#101c38",
        "neutralDGrey": "#0a0a0a",
        "neutralGrey": "#717171",
        "neutralSilver": "#F5F7FA",
        "gray900": "#18191F",
        "neutralBlack": "#263238",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

// #4D4D4D,#4CAF4F