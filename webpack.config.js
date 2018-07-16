const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
    devtool: 'source-map',
	plugins: [
	  new HtmlWebpackPlugin({
	    template: './src/index.html'
	  })
	],
	module: {
		rules: [
			{
			  test: /\.tsx?$/,
			  loader: "awesome-typescript-loader"
			},
			{
				test: /\.js$/,
				loader: 'source-map-loader',
				enforce: 'pre'
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	}
};