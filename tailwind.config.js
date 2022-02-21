module.exports = {
    theme: {
      container: {
        screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1600px',
      },
        center: true,
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio")

    ],
    purge: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.svg"],
  };