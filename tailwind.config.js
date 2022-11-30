/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'mobile': '480px',
      'landscape': '768px',
      'tablet': '976px',
      'leptop': '1280px',
      'desktop' : '1480px'
    },
    container:{
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        poppins:"'Poppins', sans-serif",
        roboto:"'Roboto', sans-serif"
        
      },
      colors:{
        'primary' : '#328AF2',
        'primary-dark' : '#25B192',
        'secondary' : '#F29C1B',
        'tertiary' : '#F34880',
      }
    },
  },
  variants:{
    display: ['group-hover'],
    visibility: ['group-hover'],
  },
  plugins: [require('@tailwindcss/forms'),],
}