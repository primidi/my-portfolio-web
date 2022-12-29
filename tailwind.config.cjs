/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    fontSize: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '2.5rem',
      xl: '4rem',
      '2xl': '5.5rem',
      '3xl': '7rem',
    },
    extend: {
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
        },
        button: {
          red: {
            default: '#FF4C29',
            hovered: '#BC3D24',
          },
          blue: {
            default: '#0072B1',
            hovered: '#004C76',
          },
          black: {
            default: '#333333',
            hovered: '#151515',
          },
        }
      },
      keyframes: {
        'text-pop-up-top': {
          '0%': {
            'transform': 'translateY(0)',
            'transform-origin': '50% 50%',
            'text-shadow': 'none',
          },
          '100%': {
            'transform': 'translateY(-50px)',
            'transform-origin': '50% 50%',
          },
        },
      },
      animation: {
        'text-pop-up-top': 'text-pop-up-top 0.5s ease-in both',
      },
    },
  },
  plugins: []
}
