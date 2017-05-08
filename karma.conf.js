const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      './test/test_index.js'
    ],
    exclude: [
    ],
    preprocessors: {
      './test/test_index.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
            },
          },
          //NOTE: Bootstrap css configuration
          {
            test: /\.css$/,
            include: /node_modules/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
            ],
          },
          //NOTE: src css configuration
          {
            test: /\.scss$/,
            exclude: /(node_modules|animations)/,
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
          {
            test: /\.scss$/,
            include: /animations/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              { loader: 'sass-loader' },
            ],
          },
          // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
          // Using here url-loader and file-loader
          {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff',
          },
          {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
          },
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
          },
          {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
          },
          {
            test: /\.(png|jpg|ico)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/png',
          },
        ],
        //Configuration required to import sinon on spec.ts files
        noParse: [
          /node_modules(\\|\/)sinon/,
        ]
      },
      resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        //Configuration required to import sinon on spec.ts files
        // https://github.com/webpack/webpack/issues/304
        alias: {
          sinon: 'sinon/pkg/sinon'
        }
      },
      //Configuration required by enzyme
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
      }
    },
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

    reporters: ['mocha'],
    mochaReporter: {
      showDiff: true,
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
