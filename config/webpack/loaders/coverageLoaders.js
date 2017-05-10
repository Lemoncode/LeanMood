const { vendorCSSLoaderDev, sassLoaderTest } = require('./commonLoaders');
module.exports = [
  {
    // Transpile all spec files
    test: /\.spec\.tsx?$/,
    exclude: /node_modules/,
    loader: 'awesome-typescript-loader',
    options: {
      useBabel: true,
    },
  },
  vendorCSSLoaderDev,
  sassLoaderTest,
];
