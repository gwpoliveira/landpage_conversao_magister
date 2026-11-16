import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        magister: {
          blue: "#134889",       // Azul Real Oficial da Logo
          dark: "#0B2A52",       // Azul Profundo
          navy: "#071C38",       // Dark Surface nobre
          amber: "#F5AC1D",      // Amarelo Âmbar Oficial da Logo
          amberHover: "#D9930E", // Hover do Âmbar
          amberLight: "#FEF7E8", // Fundo sutil de destaque
          emerald: "#10B981",    // Verde Ação
          whatsapp: "#25D366",   // Verde Oficial WhatsApp
        },
      },
      fontFamily: {
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "glow-amber": "0 0 25px -5px rgba(245, 172, 29, 0.45)",
        "card-elevated": "0 10px 30px -10px rgba(19, 72, 137, 0.08), 0 20px 25px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
} satisfies Config;
