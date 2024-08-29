/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'addiback': "url('./assets/bg.jpg')"
        }
  
      },
    },
    plugins: [],
  }