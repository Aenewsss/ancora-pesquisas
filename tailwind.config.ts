import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#0B132B',
        'secondary': '#1C2541',
        'highlight': '#FF9F1C',
        'highlight-dark': '#E2A71D',
        'blue': '#3E4095',
        'yellow':'#FECC2B'
      },
    },
  },
  plugins: [],
};
export default config;
