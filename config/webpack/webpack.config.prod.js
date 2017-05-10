const webpack = require('webpack');
const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.config.common');
const helpers = require('../helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { prodLoaders } = require('./loaders');

module.exports = merge({
  // Prepend new config sections for arrays
  customizeArray: (commonConfig, newConfig) => [...newConfig, ...commonConfig],
})(commonWebpackConfig, {
  devtool: 'source-map',
  module: {
    rules: prodLoaders,
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[chunkhash].[name].css',
      disable: true,
      allChunks: true,
    }),
  ],
});
