
const path = require('path')

const utils = require('./utils.js')

const shell = require('shelljs')

const htmlWebpackPlugin = require('html-webpack-plugin')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

shell.rm('-rf', path.join(__dirname, '../dist'))

const config = {
	mode: 'production',
	entry: utils.entriesPath,
	output: {
		filename: '[name]/[name].[hash:5].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '../'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{	
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'sass-loader'
					],
					publicPath: ''
				})
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},
	resolve: {
		extensions: ['.html', '.css', '.js']
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name]/[name].[contenthash].css',
			publicPath: '../',
			allChunks: true
		})
	]
}
Object.keys(utils.templatesPath).forEach(v => {
	let options = {
		filename: `${v}/${v}.html`,
		template: utils.templatesPath[v],
		chunks: []
	}
	if (utils.entriesPath.hasOwnProperty(v)) {
		options.chunks  = ['common', v]
	}
	console.log(options)
	config.plugins.push(new htmlWebpackPlugin(options))
})

module.exports = config