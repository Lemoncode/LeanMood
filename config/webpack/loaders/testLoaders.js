const { typescriptLoaderTest, vendorCSSLoaderDev } = require('./commonLoaders');
module.exports = [
  typescriptLoaderTest,
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
          localIdentName: '[local]',
        },
      },
      { loader: 'sass-loader' },
    ],
  },
];
