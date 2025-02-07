/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      "box-shadow-none":"outline: none ,box-shadow:none"
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}