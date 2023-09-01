/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        '20':'20px',
        '80':'80px',
        '160':'160px',
        '11':'11px',
        '360': '360px',
        '350':'350px',
        '400':'400px',
        '10':'10px',
        '30':'30px',
        '750':'750px',
        '270':'270px',
      },
      margin:{
        '20px':'20px',
        '25px':'25px',
        '30px':'30px',
        '40px':'40px',
        '50px':'50px',
        '10px':'10px',
        '60px':'60px',
        '14rem':'14rem',
        '350':'350px',
        '100':'100px',
      },
      spacing: {
        '10px': '10px', // 10px
      },
      height: {
        '80':'80px',
        '340':'340px',
        '70%': '70%',
        '600': '600px',
        '240': '240px',
        '260': '260px',
        '300':' 300px',
        '560':'560px',
        '400':'400px',
      },
      gap:{
        '10px':'10px',
        '40px':'40px',
        '30px':'30px',
      },
      width:{
        '25%':'25%',
        '290':'290px',
        '400':'400px',
      },
      maxWidth: {
        '570px':'570px',
        '960px':'960px',
        '1200px': '1200px',
        '1250px': '1250px', 
      },
    },
  },
  plugins: [],
}

