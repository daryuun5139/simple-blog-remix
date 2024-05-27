import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      content: {
        search: 'url("./search.svg")',
      },
    },
  },
  plugins: [],
} as Config;
