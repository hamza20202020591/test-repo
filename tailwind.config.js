/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Nunito"', 'sans-serif'],
        'header': ['"Playfair Display"', 'serif'],
      },
      colors: {
        'primary': '#F44336',
        'secondary': '#E91E63',
        'accent': '#9C27B0',
        'neutral': '#607D8B',
        'light': '#F5F5F5',
        'dark': '#212121',
      },
      spacing: {
        'tiny': '0.25rem',
        'small': '0.5rem',
        'medium': '1rem',
        'large': '2rem',
        'huge': '4rem',
      },
      fontSize: {
        'base': '1rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'bold': 700,
      },
      borderRadius: {
        'default': '0.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'default': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'hover': '0 6px 8px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
