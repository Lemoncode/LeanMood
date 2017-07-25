const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('../webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('../../helpers');

module.exports = merge(common, {
  context: helpers.resolveFromRootPath('src'),
  entry: {
    app: [
      './index.tsx',
    ],
    vendor: [
      'core-js',
      'lc-form-validation',
      'marksy',
      'moment',
      'react',
      'react-addons-shallow-compare',
      'react-css-transition-replace',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'react-virtualized',
      'redux',
      'redux-thunk',
      'toastr',
    ],
    appStyles: [
      './content/sass/styles.scss',
      './content/sass/animations/cross-fade.scss',
    ],
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
      '../node_modules/font-awesome/css/font-awesome.css',
      '../node_modules/toastr/build/toastr.css',
      '../node_modules/react-virtualized/styles.css',
    ]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          useCache: true,
        },
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
          },
        }),
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            { loader: 'sass-loader' },
          ],
        }),
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      favicon: 'content/image/logo.png',
      hash: true,
      chunksSortMode: helpers.sortChunks(['manifest', 'vendor', 'vendorStyles', 'appStyles', 'app']),
    }),
    new webpack.DefinePlugin({
      'process.env.REST_SRC': JSON.stringify(process.env.REST_ENV || ''),
    }),
    
  ],
});
