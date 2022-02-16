const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/_bundle/main.js",
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.pcss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist", "assets"),
    filename: "main.bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.bundle.css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/js/", to: "js/" },
        { from: "node_modules/tiny-slider/dist/tiny-slider.js", to: "js/lib/" }

      ],
    }),
  ]
};