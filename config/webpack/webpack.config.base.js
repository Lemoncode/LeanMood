const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('../helpers');

module.exports = {
  context: helpers.root('src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      'globalStyles': helpers.root("src/content/sass"),
    },
  },
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

  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(png|jpg|ico)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/png',
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      favicon: 'content/image/logo.png',
      hash: true,
      chunksSortMode: helpers.sortChunks(['vendor', 'vendorStyles', 'appStyles', 'app']),
    }),
  ],
};
