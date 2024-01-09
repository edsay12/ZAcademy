import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        homeBg:"#E3E5EF",
        'blue-700':"#001D3A",
        'blue-600':"#001e3e",
        'yellow-700':"#FFCC57"
      }
    },
  },
  plugins: [],
}
export default config
