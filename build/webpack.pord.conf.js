const merge = require('webpack-merge')
const common = require('./webpack.base.conf.js')
const path = require('path')
const config = require("../config");

const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const prodConf = merge(common, {
    mode: 'production',
    // 入口文件
    entry: {
        app: './src/main.js',
        vendor:['vue', 'axios', 'vue-router', 'moment', 'vuex', 'element-ui', 'lodash'],
    },
    devtool: config.build.devtoolType,
    resolve : {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    // 输出配置
    output: {
        // 输出路径
        path: path.join(__dirname, '..', 'dist'),
        filename: 'static/js/[name].[chunkhash].js',
        chunkFilename: 'static/js/[id].[chunkhash].asyncChunk.js'

        // filename: '[name].[hash:5].js' // 输出文件的名称
    },
    optimization: {
        sideEffects: true,
        concatenateModules: false,
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 4,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true
                },
                styles: {
                    name: 'styles',
                    test: /\.(css | scss)$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                parallel: 4,
                include: /\/src/,
                exclude: /\/node_modules/,
                cache: true,
                sourceMap: false, // set to true if you want JS source maps
                uglifyOptions: {
                    output: {
                        comments: false,
                        beautify: false,
                    },
                    compress: {
                        warnings: false,
                        drop_console: true,
                        pure_funcs: ['console.log']
                    },
                },
            }),
            new OptimizeCSSPlugin({
                cssProcessorOptions: {
                    safe: true
                }
            }),
        ],
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin({
            root:  path.resolve(__dirname, '..'),
            exclude:  [],
            verbose:  true,
            dry: false
        }),
        new MiniCssExtractPlugin(['dist'], {
            filename: 'static/css/[name].[chunkhash].css',
            // chunkFilename: utils.assetsPath('css/[id].[chunkhash].css')
            chunkFilename: 'static/css/[id].[chunkhash].asyncChunk.css'
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true,
                discardComments: { removeAll: false }
            }
        }),
        new HtmlWebpackPlugin({
            title: '路径',
            filename: 'index.html',
            template: './src/index.template.html',
            inject: true,
            chunksSortMode: 'none',
            favicon: path.resolve(__dirname, "../src/assets/favicon.ico"),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new CompressionPlugin({
            test: /\.(js|vue)$/,
            // include: /\/src/,
            algorithm: 'gzip',
            filename: '[path].gz[query]',
            threshold: 10240,
            minRatio: 0.8
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: './static', // 打包后静态文件放置位置
                ignore: ['.*'] // 忽略规则。（这种写法表示将该文件夹下的所有文件都复制）
            }
        ]),
    ]
});
module.exports = prodConf;
