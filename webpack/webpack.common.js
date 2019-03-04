const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: true,
            // hash: false,
            // compile: true,
            // favicon: false,
            // minify: false,
            // cache: true,
            // showErrors: true,
            // chunks: 'all',
            // excludeChunks: [],
            // title: 'Webpack App',
            // xhtml: false
        })
    ],
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }


        ]
    }
}