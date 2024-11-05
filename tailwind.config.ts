import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        texturina: ["texturina"],
        yrt: ["yrt"],
        embassy: ["embassy"],
      },

      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      
      colors: {
        primary: "#f3f0e2",
        accent: "#ed3f23",
        text: "#371810",
        secondary: "#a48b50",
        light: "#e3e0d1",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontSize: {
        xxs: ["10px", "12px"],
      },
    },
  },
  plugins: [],
};
export default config;
