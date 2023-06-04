/** @format */

const path = require("path");

module.exports = {
  entry: "/src/index.js", // Replace './index.js' with the path to your entry point
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ""),
    },
    compress: true,
    port: 8000,
  },
};
