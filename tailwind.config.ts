import type { Config } from "tailwindcss";
// const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
        jost: ['var(--font-jost)'],
        rubik: ['var(--font-rubik)'],
        poppins: ['Poppins', 'sans-serif'],  // Added Poppins font
        baskervville: ['Baskervville', 'serif'],
        playfair : ['playfair', 'serif']
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)", 
        primary: "#6b0804" ,
        secondary : "#2c333f"
        

      },

    },
  },
  plugins: [],
} satisfies Config;
