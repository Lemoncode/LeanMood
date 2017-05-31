const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports.typescriptLoader = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  loader: 'awesome-typescript-loader',
  options: {
    useCache: true,
    useBabel: true,
  },
};

module.exports.vendorCSSLoaderDev = {
  test: /\.css$/,
  include: /node_modules/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
  ],
};

module.exports.vendorCSSLoaderProd = {
  test: /\.css$/,
  include: /node_modules/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: {
      loader: 'css-loader',
    },
  }),
};
