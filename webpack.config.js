var webpack = require('webpack');
//import webpack from "webpack";

//压缩
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var devFlagPlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

//🈯️定模板
var HtmlwebpackPlugin = require('html-webpack-plugin');
//webpack启动之后，自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8888/',
		'./src/index.js'
	],
	output: {
		path: 'public',
		filename: 'bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		// proxy: {
		//   	"/api/*": {
		//     	target: "http://result.eolinker.com/",
		//     	changeOrigin: true,
 	// 			secure: false
		//   	}
		// }
	},
	
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE.ENV': "development"
		}),
		//热更新
		new webpack.HotModuleReplacementPlugin(),
		
		new OpenBrowserPlugin({
			url: 'http://localhost:8888'
		}),
		
		new webpack.ProvidePlugin({
		  $: 'jquery'
		}),
	],

	module: {
		loaders: [{
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015',"react","stage-1"]
			}
		}, {
			test: /\.css$/,
			loaders: ['style', 'css'],
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192'
		}, {
			test: /\.less$/,
			loader: "style-loader!css-loader!less-loader",
		}]
	}
};
