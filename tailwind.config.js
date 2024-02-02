/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'nav': '#146F84',
        'seccion': '#0A1E43',
        'fondo': '#d4d9f7',
        'sobre': '#576C92',
        'footer': '#d8b4fe',
        'conect': '#ffffff',
        'proyects': '#F8D3FE',
        'description': '#FFADE9',
        'tecnologia': '#BEA1BD',
        'mobil': '#886C9F',
        'enlaces': '#905592'
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'sans-serif']
      },
    },
  },
  plugins: [],
}

