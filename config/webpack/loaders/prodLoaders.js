const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { typescriptLoader, vendorCSSLoaderProd } = require('./commonLoaders');

module.exports = [
  typescriptLoader,
  vendorCSSLoaderProd,
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
];
