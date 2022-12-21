//documentation --> https://webpack.js.org/concepts/

//using node path https://nodejs.org/api/path.html and __dirname for absolute path

//importing node module called path
const path = require('path');
const stringPath = path.join(__dirname, 'public');

//a node feature, used to expose something to another file
module.exports = {
	entry: './src/app.js',
	output: {
		path: stringPath,
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/, //using regex to find files that end in .js
				exclude: /node_modules/, //excluding node_modules folder
			},

			//when webpack sees css file it will use these 2 loaders to load the styles
			{
				test: /\.s?css$/, //find all files that have css extension
				//allows us to use an array of loaders
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},

	// documentation - https://webpack.js.org/configuration/devtool/
	devtool: 'eval-cheap-module-source-map',

	// documentation - https://webpack.js.org/configuration/dev-server/#directory
	devServer: {
		static: {
			directory: stringPath,
		},

		//compiler warning - https://webpack.js.org/configuration/dev-server/#overlay
		client: {
			overlay: false,
		},
	},
};

//loader - lets you customize the behaviour when it sees a specific file
//========= INSTALLING BABEL==============
// npm install babel-core
// npm install babel-loader
