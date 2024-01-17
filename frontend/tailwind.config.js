/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#e2f0ed',
          '100': '#a7edda',
          '200': '#7ae4ca',
          '300': '#4ddbb9',
          '400': '#20d2a9',
          '500': '#19a873', // Main color
          '600': '#117c63',
          '700': '#0f5037',
          '800': '#003a20',
          '900': '#002a0e',
        },
        secondray: {
          '50': '#e6ebe9',
          '300': '#849891',
          '400': '#718980',
        },
        green: "#00b69b",
        bgGreen: "#00b69b1a",
        red: "#ee368c",
        bgRed:"#ee368c1a",
      },
      // fontFamily: {
      //   IRANSans: ['IRANSans']
      // },
    },

  },
  plugins: [],
}

