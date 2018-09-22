const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackIsomorphicToolsPlugin = require("webpack-isomorphic-tools/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const srcPath = path.join(__dirname, "../", "../", "/src/");
const distPath = path.join(__dirname, "../", "../", "/dist/");
const webpackIsomorphicTools = new WebpackIsomorphicToolsPlugin(
  require("../isomorphictools.config")
);

module.exports = {
  context: path.join(__dirname, "..", ".."),
  mode: "production",
  entry: {
    main: ["babel-polyfill", `${srcPath}index`],
    vendor: [
      "react",
      "redux",
      "axios",
      "react-helmet",
      "react-router-redux",
      "react-router-dom",
      "react-router-config",
      "styled-components",
      "prop-types",
      "react-dom",
      "redux-saga",
      "react-redux"
    ]
  },
  output: {
    path: distPath,
    filename: "js/[chunkhash].[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: srcPath,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: webpackIsomorphicTools.regular_expression("images"),
        use: [
          {
            loader: "url-loader",
            options: { limit: 8192, name: "images/[name].[ext]" }
          },
          {
            loader: "img-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        include: srcPath,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "svg/[name].[ext]",
              mimetype: "image/svg+xml"
            }
          },
          {
            loader: "img-loader"
          }
        ]
      },
      {
        test: /\.svg(\?[\s\S]+)?$/,
        exclude: srcPath,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "fonts/[name].[ext]",
              mimetype: "image/svg+xml"
            }
          }
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 8192, name: "fonts/[name].[ext]" }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify("production") }
    }),
    new MiniCssExtractPlugin({}),
    new CopyWebpackPlugin([
      {
        from: `${srcPath}assets/images/facebook-thumb.png`,
        to: `${distPath}images/facebook-thumb.png`
      },
      { from: `${srcPath}assets/images/favicons`, to: `${distPath}images/favicons` },
      { from: `${srcPath}assets/static`, to: distPath }
    ]),
    webpackIsomorphicTools
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@reducers": path.resolve(__dirname, "src/reducers/"),
      "@sagas": path.resolve(__dirname, "src/sagas/"),
      "@services": path.resolve(__dirname, "src/services/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@helpers": path.resolve(__dirname, "src/helpers/")
    },
    extensions: [".js"]
  }
};
