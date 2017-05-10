const webpack = require('webpack');
const webpackConfig = require('./webpack.common');
const helpers = require('../helpers');
const { testLoaders } = require('./loaders');

delete webpackConfig.context;
delete webpackConfig.entry;
delete webpackConfig.output;
delete webpackConfig.plugins;

webpackConfig.devtool = 'inline-source-map';

webpackConfig.module.rules = [
  ...testLoaders,
  ...webpackConfig.module.rules,
];

webpackConfig.module.noParse = [
  /node_modules(\\|\/)sinon/,
];

webpackConfig.resolve.alias = {
  sinon: 'sinon/pkg/sinon'
};

webpackConfig.externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': 'window',
};

module.exports = webpackConfig;
