const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => 
	webpackMerge(
		{
			module: {
				rules: [
					{
						test: /\.jpe?g/,
						use: ["url-loader"]
					}
				]
			},
			mode,
			plugins: [ new HtmlWebpackPlugin(), new webpack.ProgressPlugin() ]
		},
		modeConfig(mode)
	)
// {	
// 	return {
// 		mode,
// 		output: {
// 			filename: "bundle.js"
// 		},
// 		modeConfig(mode),
// 		load
// 		plugins: [
// 			new HtmlWebpackPlugin(),
// 			new webpack.ProgressPlugin()
// 		]
// 	}
// }