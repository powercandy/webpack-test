
const path = require('path')

function resolve(dir) {
	return path.join(__dirname,'..', dir)
}

const config = {
	mode: 'development',
	entry: resolve('src/main.js'),
	output: {
		path: resolve('dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src')]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				include: [resolve('src')]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'page': resolve('src/page'),
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		host: 'localhost',
		port: '9000',
		open: true
	}
}

module.exports = config