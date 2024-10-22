import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   pretendard: ["var(--font-pretendard)"],
      // },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        customBlack: '#141414',
        customGradiantFrom: '#FF4E83',
        customGradiantTo: '#FFBB54',
        customBorder: '#FFFFFF26',
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 97.92%)',
      },
    },
  },
  plugins: [],
};
export default config;
