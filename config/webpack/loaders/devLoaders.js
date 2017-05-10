const { typescriptLoader, vendorCSSLoaderDev } = require('./commonLoaders');

module.exports = [
  typescriptLoader,
  vendorCSSLoaderDev,
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
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      { loader: 'sass-loader' },
    ],
  },
];
