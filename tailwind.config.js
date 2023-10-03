/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['Cormorant Garamond', 'serif'],
        nunito: ['Nunito', 'sans-serif']
      },
      colors: {
        maroon: '#AB565D',
        maroonDark: '#481313',
        maroonLight: '#BA7276',
        maroonLightest: '#CF9496',
        pink: '#F9D6E2',
        graphite: '#757575'
      }
    },
  },
  plugins: [],
}

