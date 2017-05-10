const webpack = require('webpack');
const webpackConfig = require('./webpack.common');
const helpers = require('../helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { prodLoaders } = require('./loaders');

webpackConfig.devtool = 'source-map';

webpackConfig.module.rules = [
  ...prodLoaders,
  ...webpackConfig.module.rules,
];

webpackConfig.plugins = [
  ...webpackConfig.plugins,
  // Extract styles to separated files
  new ExtractTextPlugin({
    filename: '[chunkhash].[name].css',
    disable: true,
    allChunks: true,
  }),
];

exports = webpackConfig;
