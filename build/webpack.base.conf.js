const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
//webpack 基本设置

module.exports = {
    // 入口文件
    entry: {
        app: './src/main.js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            src:resolve("src"),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src')],
                exclude: /static/,
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // ...
                    postcss: [require('postcss-cssnext')()]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')],
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file) &&
                    !/node_modules\/element-ui\/src/.test(file) &&
                    !/node_modules\/element-ui\/packages/.test(file)
                ),
                options: {
                    "babelrc": false,// 不采用.babelrc的配置
                    "plugins": [
                        "dynamic-import-webpack"
                    ]
                }

            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name:'static/images/[name].[ext]',
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    name:'static/images/[name]-[hash:8].[ext]',
                }
            },
            {
                test: /\.(css|scss|less)$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'less-loader']
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
