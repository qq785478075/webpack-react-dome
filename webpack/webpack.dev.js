/**
 * Created by MHC on 2018/2/12.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    //reactDevTools 可在浏览器中调试
    devtool: 'source-map',


    devServer: {
        // hot: true,
        // historyApiFallback: true,
        // overlay: true,
        // open: false,
        // host: "0.0.0.0",
        // port: 8081,
        // proxy: {
        //     '/mgateway': {
        //         target: 'http://ip:port',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/mgateway': '/'//这里理解成用‘/mgateway’代替target里面的地址，后面组件中我们掉接口时直接用mgateway代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/mgateway/user/add’即可
        //         }
        //     }
        // },
        hot: true,
        historyApiFallback: true,
        overlay: true,
        open: true,
        port:9000,


    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ]

});
console.log("process.env.NODE_ENV 的值是(webpack.dev.js)：" + process.env.NODE_ENV)
