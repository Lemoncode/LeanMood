var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
	resolve: {
	      extensions: ['', '.js','.ts', '.tsx']
	},
	entry: {
    app: "./index.tsx",
    vendor: [
             "react",
             "react-dom",
             "react-redux",
             "react-router",
             "redux"
    ],
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css'
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
       noInfo: true,
       host: 'localhost',
       port: 8080,
       stats: 'errors-only'
  },


	module: {
    preLoaders: [
      {
        test: /\.css$/,
        exclude:/node_modules/,
        loader: 'typed-css-modules-loader'
      }
    ],
		loaders: [
			{
	      test: /\.(ts|tsx)$/,
	      loader: 'ts-loader'
      },
      //NOTE: Bootstrap css configuration
      {
        test: /\.css$/,
        include: /node_modules\\bootstrap/,
        loader: ExtractTextPlugin.extract('style','css')
      },
      //NOTE: src css configuration
      {
        test: /\.scss$/,
        exclude:/node_modules/,
        loader: ExtractTextPlugin.extract('style','css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader')
      },
      // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
      // Using here url-loader and file-loader
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
		]
	},
	plugins:[
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new ExtractTextPlugin('[name].css'),
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
			hash: true
    })
  ]
}
