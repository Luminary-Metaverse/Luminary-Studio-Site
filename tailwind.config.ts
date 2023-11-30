import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Lum-Dark-1": "#1E2328",
        "Lum-Dark-2": "#2A2F35",
        "Lum-Dark-3": "#3B4046",
        "Lum-Yellow-1": "#F5A302",
        "Lum-Yellow-2": "#F4B301",
        "Lum-Yellow-3": "#FFD469",
        "Lum-White-1": "#FFFFFF",
        "Lum-White-2": "#",
        "Lum-White-3": "#",
      },
    },
  },
  plugins: [],
};
export default config;
