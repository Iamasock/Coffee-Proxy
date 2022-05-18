module.exports = {
  content: ["./public/**/*.{html,js}"],
  daisyui: {
    themes: ["coffee"],
  },
  theme: {
    colors: {
      'mainCoffee': '#241923'
    },
    extend: {},

  },
  plugins: [require("daisyui")]
}