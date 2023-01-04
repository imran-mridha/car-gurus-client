/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1240px',
      xl: '1440px',
    },
    extend: {
      colors: {
      'primary': '#FC0012',
        'secondary': '#000000',
        'theme-body': '#444444',
        'theme-text': '#737373',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'shadow': '0 4px 20px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [require("daisyui")],
}
