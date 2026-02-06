/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,vue,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Paleta Dark Gov
        slate: {
          850: '#151e2e', // Un tono más oscuro para tarjetas
          900: '#0f172a', // Fondo principal
          950: '#020617', // Fondo profundo
        },
        // Acento Tech Blue
        primary: {
          400: '#38bdf8', // Sky 400
          500: '#0ea5e9', // Sky 500
          600: '#0284c7', // Sky 600
        }
      }
    },
  },
  plugins: [],
}