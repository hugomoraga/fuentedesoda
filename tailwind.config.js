module.exports = {
    theme: {
      container: {
        center: true,
        padding: "2rem",
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