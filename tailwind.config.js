/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "black": "#091525",
        "gray":"#616161",
        "secondary": "#CAECFC",
        "secondary-light": "#EDF3FC",
        "primary":"#006AFF",
        "primary-light":"#EEF1F5",
        stroke: "#E2E6F1",
        danger: "#D23B3B"
      }
    },
  },
  plugins: [],
}

