const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['babel-polyfill', './app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: ['babel-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: /(static\/plugins)/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: ['css-loader']
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: [
            'css-loader',
            'autoprefixer-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.html$/,
        loader: [
          'raw-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: ['json-loader']
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(ru)$/),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: '../index.html',
      filename: './index.html',
      hash: true
    })
  ]
}
