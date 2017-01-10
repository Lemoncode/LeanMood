var webpackConfig = require('./webpack.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");
var basePath = __dirname;

module.exports = function (config) {
  const configObject =  {
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon-chai', 'es6-shim'],
    files: [
      './test/test_index.js'
    ],
    exclude: [
    ],
    preprocessors: {
      './test/test_index.js': ['webpack', 'sourcemap']
    },
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
          loaders: [
              {
                  test: /\.spec\.(ts|tsx)$/,
                  exclude: /node_modules/,
                  loader: 'ts-loader'
            },
            //Configuration required by enzyme
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
              test: /\.scss$/,
              exclude:/node_modules/,
              //NOTE: Avoid import like [name]__[local]___[hash:base64:5] to create a well known class name
              loader: ExtractTextPlugin.extract('style','css?modules&importLoaders=1&localIdentName=[local]!sass-loader')
            }
          ],
          //Configuration required to import sinon on spec.ts files
          noParse: [
              /node_modules(\\|\/)sinon/,
          ],
          // https://www.npmjs.com/package/istanbul-instrumenter-loader
          postLoaders: [
            {
                  test: /\.(ts|tsx)/,
                  exclude: /(node_modules|spec)/,
                  loaders: ['istanbul-instrumenter','ts-loader']
            }
          ]
      },
      resolve: {
          //Added .json extension required by cheerio (enzyme dependency)
          extensions: ['', '.js', '.ts', '.tsx', '.json'],
          //Configuration required to import sinon on spec.ts files
          // https://github.com/webpack/webpack/issues/304
          alias: {
            sinon: 'sinon/pkg/sinon',
            'globalStyles': path.join(basePath, "src/content/sass/")
          }
      },
      //Configuration required by enzyme
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
      },
      plugins: [
        new ExtractTextPlugin('[name].css')
      ]
    },
    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i. e.
        noInfo: true
    },

    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  }

  if (process.env.TRAVIS) {
      config.browsers = ['Chrome_travis_ci'];
  }

  config.set(configObject);
}
