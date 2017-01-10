const webpack = require('webpack');
const extract = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: __dirname + "/dist/",
        filename: "js/app.js",
        publicPath: "/"
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
                ]
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'bulma': path.join(__dirname, './node_modules/bulma/bulma.sass')
        }
    },
    plugins: [
        new extract('css/[name].css')
    ]
}