/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize:{
        '14px':'14px',
        '16px':'16px',
      },
      padding: {
        '10px':'10px',
        '11px':'11px',
        '20px':'20px',
        '30px':'30px',
        '80px':'80px',
        '160px':'160px',
        '270px':'270px',
        '360px': '360px',
        '350px':'350px',
        '400px':'400px',
        '750px':'750px',
      
      },
      margin:{
        '020px':'-20px',
        '10px':'10px',
        '15px':'15px',
        '20px':'20px',
        '25px':'25px',
        '30px':'30px',
        '40px':'40px',
        '50px':'50px',
        '60px':'60px',
        '80px':'80px',
        '14rem':'14rem',
        '100px':'100px',
        '120px':'120px',
        '350px':'350px',
      },
      spacing: {
        '10px': '10px', // 10px
      },
      height: {
        '70%': '70%',
        '80px':'80px',
        '340px':'340px',
        '600px': '600px',
        '240px': '240px',
        '260px': '260px',
        '300px':' 300px',
        '350px':'350px',
        '400px':'400px',
        '560px':'560px',
      },
      gap:{
        '10px':'10px',
        '30px':'30px',
        '40px':'40px',
        '80px':'80px',
        '120px':'120px',
      },
      width:{
        '15%':'15%',
        '18%':'18%',
        '23%':'23%',
        '25%':'25%',
        '40%':'40%',
        '45%':'45%',
        '80%':'80%',
        '290px':'290px',
        '400px':'400px',
      },
      maxWidth: {
        '275px':'275px',
        '570px':'570px',
        '890px':'890px',
        '915px':'915px',
        '960px':'960px',
        '1200px': '1200px',
        '1250px': '1250px', 
      },
      maxHeight:{
        '1036px':'1036px',
      },
      scrrens:{
        'md':'768px',
        'lg':'1024px',
      },
    },
  },
  plugins: [],
}

