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
    vendorstyles : [
        "../node_modules/bootstrap/dist/css/bootstrap.css"
    ]
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
	      loader: 'ts-loader'
      },
      {
        test: /\.css$/,  
        loader: "style-loader!css-loader"
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
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
			hash: true
    })
  ]
}
