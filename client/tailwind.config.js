/** @type {import('tailwindcss').Config} */

// Se også kopi af filen ...txt
const defaultTheme = require( 'tailwindcss/defaultTheme' )

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    // screens: {
    //   "tablet": "690px", //overskriver øvrige breakpoints så kun mindste sm findes
    // },

    extend: {

      "my-blue": "#1DA1F2", // denne dukker IKKE op i intellisense

      screens: {
        "3xl": "1680px",
        "md": "800px", // ændre eksisterende
      },
      // https://tailwindcss.com/docs/font-family#customizing-the-default-font
      fontFamily: {
        'sans': [ 'Roboto', ...defaultTheme.fontFamily.sans ],
      },

    },
  },
  plugins: [],
}

