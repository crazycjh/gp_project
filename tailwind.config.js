/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        '11':'11px',
        '360': '360px',
        '350':'350px',
        '10':'10px',
        '30':'30px',
        '750':'750px',
      },
      margin:{
        '10px':'10px',
        '60px':'60px',
        '14rem':'14rem',
      },
      spacing: {
        '10px': '10px', // 10px
      },
      height: {
        '340':'340px',
        '70%': '70%',
        '600': '600px',
        '240': '240px',
        '260': '260px',
        '560':'560px',
      },
      gap:{
        '10px':'10px',
        '40px':'40px',
      },
      width:{
        '290':'290px',
        '400':'400px',
      },
    },
  },
  plugins: [],
}

