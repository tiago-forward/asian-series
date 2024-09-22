import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'blue-100': 'var(--background)',
  			'blue-200': 'var(--foreground)',
  			'blue-300': 'var(--foreground)',
  			'rose-100': 'var(--rose-100)',
  			'rose-200': 'var(--rose-200)',
  			'slate-100': 'var(--slate-100)',
  			'slate-200': 'var(--slate-200)',
  			'slate-300': 'var(--slate-300)',
  			'slate-400': 'var(--slate-400)',
  			'slate-500': 'var(--slate-500)',
  			'slate-600': 'var(--slate-600)',
  			'slate-700': 'var(--slate-700)',
  			'slate-800': 'var(--slate-800)',
  			'gradient-horizontal': 'var(--gradient-horizontal)',
  			'gradient-vertical': 'var(--gradient-vertical)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
