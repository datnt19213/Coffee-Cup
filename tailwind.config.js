/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors: {
        primarydark: "#212121",
        primarywhite: "#fff",
        primaryyellow: "#DAA520",
        primaryviolet: "#6A5ACD",
        primarygreen: "#008000",
        primaryred: "#800000",
        blackshadow: "rgba(51, 51, 51, 0.8)",
        whiteshadow: "#f0f0f0"
      }
    },
  },
  plugins: [],
}

