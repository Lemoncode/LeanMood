const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('../../helpers');

module.exports.typescriptLoader = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  loader: 'awesome-typescript-loader',
  options: {
    useCache: true,
    useBabel: true,
  },
};

module.exports.typescriptLoaderTest = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  loader: 'awesome-typescript-loader',
  options: {
    useCache: true,
    useBabel: true,
    configFileName: helpers.root('config', 'karma', 'tsconfig.karma.json'),
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
