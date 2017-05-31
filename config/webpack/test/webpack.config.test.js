const base = require('./webpack.config.base');
const merge = require('webpack-merge');
const helpers = require('../../helpers');

module.exports = merge(base, {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          useCache: true,
          configFileName: helpers.root('config', 'karma', 'karma.tsconfig.json'),
        },
      },
    ]
  }
});
