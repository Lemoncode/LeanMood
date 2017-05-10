const webpack = require('webpack');
const webpackConfig = require('./webpack.common');
const helpers = require('../helpers');
const { devLoaders } = require('./loaders');

const hotReloadingEntries = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
];

// Add hot reloading entries before app entries
webpackConfig.entry.app = [...hotReloadingEntries, ...webpackConfig.entry.app];
webpackConfig.entry.appStyles = [...hotReloadingEntries, ...webpackConfig.entry.appStyles];

webpackConfig.devtool = 'inline-source-map';

webpackConfig.module.rules = [
  ...devLoaders,
  ...webpackConfig.module.rules,
];

webpackConfig.plugins = [
  // enable HMR globally
  new webpack.HotModuleReplacementPlugin(),
  // Display in console what modules are hot reloaded
  new webpack.NamedModulesPlugin(),
  ...webpackConfig.plugins,
];

webpackConfig.devServer = {
  contentBase: helpers.root('dist'), // Content base
  inline: true, // Enable watch and live reload
  host: 'localhost',
  port: 8080,
  stats: 'errors-only',
  hot: true,
};

module.exports = webpackConfig;
