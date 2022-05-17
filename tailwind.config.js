module.exports = {
  content: ["./public/**/*.{html,js}"],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  theme: {
    colors: {
      'mainCoffee': '#241923'
    },
    extend: {},

  },
  plugins: [require("daisyui")]
}