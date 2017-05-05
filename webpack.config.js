var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      'globalStyles': path.join(basePath, "src/content/sass/"),
      // Temporary workaround for React-Hot-Loading V1, til we migrate to 3
      // https://github.com/gaearon/react-hot-loader/issues/417
      //'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    },
  },
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server",
      "./index.tsx"
    ],
    vendor: [
      "lc-form-validation",
      "marksy",
      "moment",
      "react",
      "react-addons-shallow-compare",
      "react-css-transition-replace",
      "react-dom",
      "redux",
      "react-redux",
      "react-router",
      "react-router-redux",
      "react-virtualized",
      "redux-thunk",
      "toastr",
    ],
    appStyles: [
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
    path: path.join(basePath, "dist"),
    filename: "[name].js"
  },

  devtool: 'source-map',

  devServer: {
    contentBase: './dist', //Content base
    inline: true, //Enable watch and live reload
    hot: true,
    host: 'localhost',
    port: 8080,
    stats: 'errors-only'
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader', 'ts-loader']
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
        })
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
            { loader: 'sass-loader', },
          ],
        }),
      },
      {
        test: /\.scss$/,
        include: /animations/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', },
            { loader: 'sass-loader', },
          ],
        }),
      },
      // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
      // Using here url-loader and file-loader
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(png|jpg|ico)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new ExtractTextPlugin('[name].css'),
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      favicon: 'content/image/logo.png',
      hash: true
    })
  ]
}
