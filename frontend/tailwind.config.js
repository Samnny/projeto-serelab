/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
   theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        blackCustom: '#3B3B3B',       // Preto
        beige: '#E2CEBC',             // Bege
        cream: '#FFF7F0',             // Creme
        bg_color: '#FFFAF5',
        bgBloco: '#F1EDE4',

        forestGreen: '#2B533C',       // Verde Floresta
        leafGreen: '#5BA26F',         // Verde Folha
        sapGreen: '#96C4A3',          // Verde Seiva

        purpleEngage: '#A47DD0',      // Roxo Engage
        blueInvestigate: '#55BCDF',   // Azul Investigate
        orangeAct: '#F3845C',         // Laranja Act

        textcolor1: '#F8F4EB',
      },
    },
  },
  plugins: [],
}