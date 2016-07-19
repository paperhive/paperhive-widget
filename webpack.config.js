const ExtractText = require('extract-text-webpack-plugin');

const extractHtml = new ExtractText('index.html');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      },
      {
        test: /\.html$/,
        loader: extractHtml.extract('html-loader'),
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.svg$/,
        loaders: ['url', 'svgo-loader?' + JSON.stringify({plugins: []}) ],
      },
    ]
  },
  plugins: [
    extractHtml,
  ]
};