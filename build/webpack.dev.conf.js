const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require("../config")
const merge = require('webpack-merge')
const common = require('./webpack.base.conf.js')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const devConf = merge(common, {
    mode: 'development',
    devtool: config.dev.devtoolType,
    devServer: {
        quiet: true,
        compress: true,
        clientLogLevel: 'warning',
        contentBase: './public',
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新，
        hot: true,
        host: config.dev.host,
        port: config.dev.port,
        disableHostCheck: true,
        publicPath: '/',
        proxy: {
            '/api': {
                target: 'http://192.168.100.117:8080',
                pathRewrite: {'^/api' : ''}
            }
        },
    },
    plugins: [
        new webpack.BannerPlugin('start'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: '路劲会',
            filename: 'index.html', //生成的html存放路径，相对于 path
            template: './src/index.template.html', //html模板路径
            inject: true,
            chunksSortMode: 'none'
        }),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`Your application is running here: http://${config.dev.host}:${config.dev.port}`],
            },
        })
    ]
});
module.exports = devConf;
