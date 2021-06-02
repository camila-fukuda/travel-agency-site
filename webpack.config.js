const path = require("path")

const postCSSPlugins = [require('postcss-import'),require("postcss-simple-vars"), require("postcss-nested"), require("autoprefixer")]

module.exports = {
    // where to start bundling
  entry: "./app/assets/scripts/App.js",
  // where to output
  output: {
      // Capture name from the entry using a pattern
    filename: "bundled.js",
    // Output directory
    path: path.resolve(__dirname, "app")
  },
  mode: "development",
  watch: true,
  // How to resolve encountered imports
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader?url=false", { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
      }
    ]
  }
}
