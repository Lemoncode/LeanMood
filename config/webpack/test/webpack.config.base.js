const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('../webpack.config.common');
const helpers = require('../../helpers');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[local]',
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
    noParse: [
      /node_modules(\\|\/)sinon/,
    ],
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
  },
});
