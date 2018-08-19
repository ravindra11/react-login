// https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658

//  http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example (*)
const path = require("path");
const webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        loaders: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            query: {
              jsx: true
            }
          },
        ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
  })],
  devServer: {
    historyApiFallback: true
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: 'http://localhost:4000'
    })
  }
}