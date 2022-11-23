/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#06afc3',
        main1: '#808080',
        main2: '#4B4B4B',
      },
    },
  },

  plugins: [require('flowbite/plugin')],
}
