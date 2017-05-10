const webpack = require('webpack');
const commonWebpackConfig = require('./webpack.config.common');
const merge = require('webpack-merge');
const helpers = require('../helpers');
const { testLoaders } = require('./loaders');

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
    rules: testLoaders,
    noParse: [
      /node_modules(\\|\/)sinon/,
    ],
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
  },
  plugins: [],
});

// Remove handled properties by karma
delete newWebpackConfig.context;
delete newWebpackConfig.entry;
delete newWebpackConfig.output;

module.exports = newWebpackConfig;
