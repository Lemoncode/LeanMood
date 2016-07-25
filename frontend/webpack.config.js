var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
	resolve: {
	      extensions: ['', '.js','.ts', '.tsx']
	},
	entry: ["./index.tsx"],
	output: {
		path: path.join(basePath, "dist"),
		filename: "bundle.js"
	},

	devtool: 'source-map',

	module: {
		loaders: [
      /*{
          include: [path.resolve(__dirname, './src/components/pages/students')],
          loader: 'bundle?lazy&name=students'
      },*/

			{
	      test: /\.(ts|tsx)$/,
	      exclude: /node_modules/,
	      loader: 'ts-loader'
      }
		]
	},
	plugins:[
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
			hash: true
    })
  ]
}
