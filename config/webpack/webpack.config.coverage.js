const webpack = require('webpack');
const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.config.common');
const helpers = require('../helpers');
const { coverageLoaders } = require('./loaders');

const newWebpackConfig = merge({
  customizeArray: (commonConfig, newConfig, key) => {
    if (key === 'plugins') {
      return newConfig;
    }
  },
})(commonWebpackConfig, {
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon',
    },
  },
  module: {
    rules: coverageLoaders,
    noParse: [
      /node_modules(\\|\/)sinon/,
    ],
  },
  plugins: [],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
  },
});

// Remove handled properties by karma
delete newWebpackConfig.context;
delete newWebpackConfig.entry;
delete newWebpackConfig.output;

module.exports = newWebpackConfig;
