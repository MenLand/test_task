const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "./bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9002,
        watchContentBase: true,
        progress: true,
        overlay: true
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
};