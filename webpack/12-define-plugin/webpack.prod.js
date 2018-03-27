const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"prod"'
			},
			__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
		})
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};