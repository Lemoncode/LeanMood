const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './index.tsx',
    ],
    vendor: [
      'lc-form-validation',
      'marksy',
      'moment',
      'react',
      'react-addons-shallow-compare',
      'react-css-transition-replace',
      'react-dom',
      'redux',
      'react-redux',
      'react-router',
      'react-router-redux',
      'react-virtualized',
      'redux-thunk',
      'toastr',
    ],
    appStyles: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './content/sass/styles.scss',
      './content/sass/animations/cross-fade.scss',
    ],
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
      '../node_modules/font-awesome/css/font-awesome.css',
      '../node_modules/toastr/build/toastr.css',
      '../node_modules/react-virtualized/styles.css',
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Content base
    inline: true, // Enable watch and live reload
    host: 'localhost',
    port: 8080,
    stats: 'errors-only',
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          useBabel: true,
        }
      },
      //NOTE: Bootstrap css configuration
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
          },
        }),
      },
      //NOTE: src css configuration
      {
        test: /\.scss$/,
        exclude: /(node_modules|animations)/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        }),
      },
      {
        test: /\.scss$/,
        include: /animations/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            { loader: 'sass-loader', },
          ],
        }),
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
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(png|jpg|ico)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/png',
      },
    ],
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // Display in console what modules are hot reloaded
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new ExtractTextPlugin({
      filename: '[chunkhash].[name].css',
      disable: true,
      allChunks: true,
    }),
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      favicon: 'content/image/logo.png',
      hash: true,
    }),
  ],
};
