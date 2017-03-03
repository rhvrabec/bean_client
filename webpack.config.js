var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/js/app.jsx',
	output: {
		path: 'web',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	 resolve: {
    	extensions: ['', '.js', '.jsx']
  	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack',
			minify: {
				collapseWhitespace: true
			},
			hash: true, // Use to generate a hash at the end of bundle.js for version control
			template: './app/index.ejs'
		}) // Generate HTML file from index.ejs
	] 
}