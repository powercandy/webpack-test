const path = require('path')

const fs = require('fs')

const entriesPath = {}

const templatesPath = {}

const views = []

const srcPath = path.resolve(__dirname, '../src/pages')

const srcContent = fs.readdirSync(srcPath)

srcContent.forEach(v => {
	let vPath = path.join(srcPath, v)
	if (fs.statSync(vPath).isDirectory()) {
		views.push(v)
	}
})

views.forEach(v => {
	entriesPath[v] = path.join(srcPath, v, 'main.js')
	templatesPath[v] = path.join(srcPath, v, 'index.html')
})

module.exports = {
	entriesPath,
	templatesPath,
	views
}



