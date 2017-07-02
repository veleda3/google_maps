var webpack = require("webpack");
var path = require('path');

module.exports = {

  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'build/bundle.js',
        sourceMapFilename: 'build/bundle.map'
  },
  debug: true,
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:{
          presets:['react', 'es2015']
        }
      }
    ]
  }
}
