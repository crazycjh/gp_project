/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        '11':'11px',
        '360': '360px',
        '10':'10px',
        '30':'30px',
        '750':'750px',
      },
      spacing: {
        '10px': '10px', // 10px
      },
      height: {
        '600': '600px',
      },
    },
  },
  plugins: [],
}

