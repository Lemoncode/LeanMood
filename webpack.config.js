var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
	resolve: {
	      extensions: ['', '.js','.ts', '.tsx'],
        // Temporary workaround for React-Hot-Loading V1, til we migrate to 3
        // https://github.com/gaearon/react-hot-loader/issues/417
        //alias: { 'react/lib/ReactMount': 'react-dom/lib/ReactMount' }
	},
	entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server",
      "./index.tsx"
    ],
    vendor: [
             "react",
             "react-dom",
             "react-redux",
             "react-router",
             "redux"
    ],
    vendorStyles: [
        '../node_modules/bootstrap/dist/css/bootstrap.css',
        "./content/css/styles.css"
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
       noInfo: true,
       host: 'localhost',
       port: 8080,
       stats: 'errors-only'
  },


	module: {
		loaders: [
			{
	      test: /\.(ts|tsx)$/,
	      loaders: ['react-hot', 'ts-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style','css')
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
    new webpack.HotModuleReplacementPlugin(),
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
