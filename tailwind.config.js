/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          50: '#f4ffe6',
          100: '#e6ffb8',
          200: '#d4ff80',
          300: '#c0ff4d',
          400: '#A2FF00',
          500: '#8ae000',
          600: '#6bb300',
          700: '#4d8000',
          800: '#335500',
          900: '#1a2b00',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Chakra Petch', 'Space Grotesk', 'Outfit', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
        spinSlow: 'spinSlow 28s linear infinite',
        rise: 'rise 0.8s ease-out both',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
