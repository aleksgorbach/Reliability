﻿const webpack = require('webpack');
const extract = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/index",
    output: {
        path: __dirname + "/wwwroot/",
        filename: "js/app.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(scss|sass)$/,
                loader: extract.extract('style', 'css!sass')
            },
            {
                test: /\.(jpe?g|png|gif|svg)/,
                loaders: [
                    'file?name=[hash].[ext]'
                    //'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'bulma': require('path').join(__dirname, './node_modules/bulma/bulma.sass')
        }
    },
    plugins: [
        new extract('css/[name].css')
    ]
}