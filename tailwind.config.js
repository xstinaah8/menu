/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#1A1A1A',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
};