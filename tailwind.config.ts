import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-100': "var(--background)",
        'blue-200': "var(--foreground)",
        'blue-300': "var(--foreground)",

        'rose-100':  "var(--rose-100)",
        'rose-200':  "var(--rose-200)",

        'neutral-100': "var(--neutral-100)",
        'neutral-200': "var(--neutral-200)",
        'neutral-300': "var(--neutral-300)",
        'neutral-400': "var(--neutral-400)",
        'neutral-500': "var(--neutral-500)",
        'neutral-600': "var(--neutral-600)",
        'neutral-700': "var(--neutral-700)",
        'neutral-800': "var(--neutral-800)",

        'gradient-horizontal': "var(--gradient-horizontal)",
        'gradient-vertical': "var(--gradient-vertical)",
      },
    },
  },
  plugins: [],
};
export default config;
