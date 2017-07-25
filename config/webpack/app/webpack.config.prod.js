const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('../../helpers');

module.exports = merge(base, {
  devtool: 'cheap-module-source-map',
  output: {
    path: helpers.resolveFromRootPath('public'),
    filename: '[chunkhash].[name].js',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[chunkhash].[name].css',
      disable: false,
      allChunks: true,
    }),
  ],
});
