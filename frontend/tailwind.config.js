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
          '500': '#1bbf99', // Main color
          '600': '#117c63',
          '700': '#094e3e',
          '800': '#003418',
          '900': '#002a0e',
        },
        secondray: {
          '300': '#849891',
          '400': '#738b82',
        },
        green: "#00b69b",
        bgGreen: "#00b69b1a",
        red: "#ee368c",
        bgRed:"#ee368c1a",

        // primary: "#20ab78",

        // darkPrimary: "#154b33",

        // extraDarkPrimary: "#00270b",

        // lightPrimary: "#617b72",
        // light2Primary: "#b7c1bd",
        // extraLightPrimary: "#e2f0ed",


        // secondary: "#ce9f29",
        // darkSecondary: "#2c2c2c",
        // lightSecondary: "#a09f9f",
        // black: '#333',
        // lightBlack: '#444'
      },
      // fontFamily: {
      //   IRANSans: ['IRANSans']
      // },
    },

  },
  plugins: [],
}

