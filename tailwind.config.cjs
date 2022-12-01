/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'grayText': '#D0D6F9',
        'textDark': "#0B0D17",
        'border': '#383B4B'
      },
      backgroundImage: {
        //home
        'HomeDesktop': "url('/assets/home/background-home-desktop.jpg')",
        'HomeTablet': "url('/assets/home/background-home-tablet.jpg')",
        'HomeMobile': "url('/assets/home/background-home-mobile.jpg')",
        //destination
        'destinationDesktop': "url('/assets/destination/background-destination-desktop.jpg')",
        'destinationTablet': "url('/assets/destination/background-destination-tablet.jpg')",
        'destinationMobile': "url('/assets/destination/background-destination-mobile.jpg')",
        //crew
        'crewDesktop': "url('/assets/crew/background-crew-desktop.jpg')",
        'crewTablet': "url('/assets/crew/background-crew-tablet.jpg')",
        'crewMobile': "url('/assets/crew/background-crew-mobile.jpg')",
        //technology
        'technologyDesktop': "url('/assets/technology/background-technology-desktop.jpg')",
        'technologyTablet': "url('/assets/technology/background-technology-tablet.jpg')",
        'technologyMobile': "url('/assets/technology/background-technology-mobile.jpg')",

      },
      screens: {
        'tablet': {
          'max': '1440px'
        },
        'mobile': {
          'max': '760px'
        },
        'extraMobile': {
          'max': '450px'
        },

      },
    },
  },
  plugins: [],
}