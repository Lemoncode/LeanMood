const helpers = require('../../helpers');
const { vendorCSSLoaderDev, sassLoaderTest } = require('./commonLoaders');

module.exports = [
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'awesome-typescript-loader',
    options: {
      useCache: true,
      useBabel: true,
      configFileName: helpers.root('config', 'karma', 'karma.tsconfig.json'),
    },
  },
  vendorCSSLoaderDev,
  sassLoaderTest,
];
