/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '481px',
      // => @media (min-width: 481px) { ... }

      'lg': '769px',
      // => @media (min-width: 769px) { ... }

      'xl': '1025px',
      // => @media (min-width: 1025px) { ... }

      '2xl': '1201px',
      // => @media (min-width: 1201px) { ... }
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: { 
      fontFamily: {
      'montserrat': ['Montserrat'],
      'lato': ['Lato'],
      'garamond': ['Garamond']
  }
},
  },
  plugins: [],
}

