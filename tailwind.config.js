/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {

    colors: {
      ...colors,

      PrimaryDark: '#3498DB  ',
      PrimaryLight: '#F5F5F5',
      SecondaryDark: '#333333 ',
      SecondaryLight: '#3498DB  '
    },
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0,0.5)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },

    plugins: []
  }
}
