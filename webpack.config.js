let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["webpack/hot/dev-server", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js",
    sourceMapFilename: "[name].map",
  },
  module: {
    rules: [{
        test: /\.(jsx?)$/,
        use: "babel-loader"
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
    ],
  },
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.template.html"),
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css", ".scss"]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    inline: true,
    publicPath: "/",
    historyApiFallback: true,
    hotOnly: true,
    open: true,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        host: "0.0.0.0",
        protocol: "http:",
        port: 5000,
        target: "http://server:5000",
      },
      ignorePath: true,
      changeOrigin: true,
      secure: false
    },
    disableHostCheck: true
  },
};