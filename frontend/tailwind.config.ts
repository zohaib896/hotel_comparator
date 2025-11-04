import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0EA5E9",
          secondary: "#1E3A8A",
          accent: "#F97316"
        }
      }
    }
  },
  plugins: []
};

export default config;
