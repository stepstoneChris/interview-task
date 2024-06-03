/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,scss}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "dracula"],
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  }
}

