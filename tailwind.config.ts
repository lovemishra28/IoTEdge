import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        iot: {
          dark: "#1A1A1A",    // Dark Background
          surface: "#2A2A2A", // Card/Surface Background
          green: "#A0F1BD",   // Primary Accent - Mint Green
          'green-dark': "#7DC99B", // Darker shade of mint
          light: "#F9F9F9",   // Light Mode Background
          text: "#000000",    // Black Text
        },
      },
    },
  },
  plugins: [],
};
export default config;