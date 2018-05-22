const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3001,
    compress: true
  },
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html")
    }),
    new UglifyJSPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  }
};
