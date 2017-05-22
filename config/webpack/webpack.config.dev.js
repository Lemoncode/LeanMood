const webpack = require('webpack');
const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.config.common');
const helpers = require('../helpers');
const { devLoaders } = require('./loaders');

const hotReloadingEntries = [
  'react-hot-loader/patch',
];

module.exports = merge({
  // Prepend hotReloadingEntries first
  customizeArray: (commonConfig, newConfig) => [...newConfig, ...commonConfig],
})(commonWebpackConfig, {
  devtool: 'inline-source-map',
  entry: {
    app: hotReloadingEntries,
    appStyles: hotReloadingEntries,
  },
  devServer: {
    contentBase: helpers.root('dist'),
    inline: true,
    host: 'localhost',
    port: 8080,
    stats: 'errors-only',
    hot: true,
  },
  module: {
    rules: devLoaders,
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // Display in console what modules are hot reloaded
    new webpack.NamedModulesPlugin(),
  ],
});
