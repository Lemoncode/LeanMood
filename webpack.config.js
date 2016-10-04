var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
	resolve: {
	      extensions: ['', '.js','.ts', '.tsx']
	},
	entry: {
    app:"./index.tsx",
    vendor: [
             "react",
             "react-dom",
             "react-redux",
             "react-router",
             "redux"
    ],
  },
	output: {
		path: path.join(basePath, "dist"),
		filename: "bundle.js"
	},

	devtool: 'source-map',

	module: {
		loaders: [
			{
	      test: /\.(ts|tsx)$/,
	      exclude: /node_modules/,
	      loader: 'ts-loader'
      }
		]
	},
	plugins:[
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
			hash: true
    })
  ]
}
