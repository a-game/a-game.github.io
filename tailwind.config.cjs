/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    screens: { sm: "740px" },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2C5CA1",
          dark: "#133b79",
          darker: "#212737",
          light: "#84c3f8",
          lighter: "#f1f8fd",
        },
        accent: {
          DEFAULT: "#E45C2F",
          light: "#F0A881",
          dark: "#B1301D",
        },
      },
      fontFamily: {
        body: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [
		require('@tailwindcss/typography'),
	],
};
