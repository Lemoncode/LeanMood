const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('../../helpers');

const hotReloadingEntries = [
  'react-hot-loader/patch',
];

module.exports = merge.strategy({
  entry: 'prepend',
})(base, {
  devtool: 'inline-source-map',
  entry: {
    app: hotReloadingEntries,
    appStyles: hotReloadingEntries,
  },
  output: {
    path: helpers.resolveFromRootPath('dist'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: helpers.resolveFromRootPath('dist'),
    inline: true,
    host: 'localhost',
    port: 8080,
    stats: 'errors-only',
    hot: true,
    proxy: {
      "/api": "http://localhost:5000", // Discuss port with team
    },    
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // Display in console what modules are hot reloaded
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      disable: true,
    }),
  ],
});
