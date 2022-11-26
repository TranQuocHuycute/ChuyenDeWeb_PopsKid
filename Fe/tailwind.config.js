/** @type {import("tailwindcss").Config} */
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
      backgroundImage: {
        'arrow-left':
          "url('https://cdn.popsww.com/popsapp/assets/images/icons/icon-arrow-left-blue.png')",
        'arrow-right':
          "url('https://cdn.popsww.com/popsapp/assets/images/icons/icon-arrow-right-blue.png')",
      },
    },
  },

  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp')],
}
