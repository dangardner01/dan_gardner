/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#0f2544', 800: '#1e3a5f', 700: '#2d5080', 600: '#3d6699' },
        cream: { 50: '#faf9f7', 100: '#f5f3ef', 200: '#ede9e1' },
        teal: { 300: '#7db8be', 400: '#5b9fa6', 500: '#4a8b92' },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
    }
  }
}
