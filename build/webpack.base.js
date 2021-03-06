var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vue: ['vue', 'vue-router'],
        bookmarket: ['babel-polyfill', './src/bookmarket/bookmarket.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),    // 输出路径，须使用绝对路径
        // filename: '[name].bundle.js'    // 输出文件名
    },
    plugins: [
        new HtmlPlugin({
            template: './src/bookmarket/bookmarket.html',
            filename: 'bookmarket.html',
            chunks: ['vue', 'bookmarket']
        })
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(png|jpg|gif|otf|eot|svg|ttf|woff|woff2)([?]?.*)$/,
            use: [{
                loader: 'url-loader',
                query: {
                    name: 'file/[name].[ext]',
                    limit: '8192',
                }
            }]
        }]
    },
};