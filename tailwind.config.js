module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5ba4a4",
        "light-cyan": "	#effafa",
        "dark-cyan": "	#7b8e8e",
        "v-dark-cyan": "#2c3a3a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
