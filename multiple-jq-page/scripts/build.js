
const path = require('path')

const utils = require('./utils.js')

const shell = require('shelljs')

const htmlWebpackPlugin = require('html-webpack-plugin')

shell.rm('-rf', path.join(__dirname, '../dist'))

const config = {
	mode: 'production',
	entry: utils.entriesPath,
	output: {
		filename: '[name]/[name].[hash:5].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: './'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{	
				test: /\.css$/,
				loader: 'css-loader'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.css', '.html']
	},
	plugins: []
}
Object.keys(utils.templatesPath).forEach(v => {
	let options = {
		filename: `${v}/${v}.html`,
		template: utils.templatesPath[v]
	}
	console.log(options)
	config.plugins.push(new htmlWebpackPlugin(options))
})
module.exports = config