/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter']
    },
    extend: {
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      colors: {
        brand: {
          red: '#FF4C29',
          blue: {
            50: '#334756',
            100: '#2C394B',
            500: '#082032'
          },
          white: '#EDEDED',
          gray: '#C5C5C5'
        }
      }
    }
  },
  plugins: []
}
