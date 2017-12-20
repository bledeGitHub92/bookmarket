var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractPlugin = require('extract-text-webpack-plugin');
var base = require('./webpack.base');

var extractCSSofVue = new ExtractPlugin({ filename: 'styles/[name].static.[contenthash:8].css', allChunks: true });
var extractLESSofVue = new ExtractPlugin({ filename: 'styles/[name].app.[contenthash:8].css', allChunks: true });

module.exports = merge(base, {
    devtool: 'source-map',
    output: {
        path: path.resolve('../dist'),    // 输出路径，须使用绝对路径
        filename: '[name].[contenthash:8].js',    // 输出文件名
        chunkFilename: 'scripts/[name].[chunkhash:8].js',
    },
    module: {
        rules: [{
            test: /\.vue$/,
            include: path.resolve('../src'),
            use: [{
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: extractCSSofVue.extract({
                            use: [{ loader: 'css-loader', options: { minimize: true } }],
                            fallback: 'vue-style-loader'
                        }),
                        less: extractLESSofVue.extract({
                            use: [{ loader: 'css-loader', options: { minimize: true } }, 'postcss-loader', 'less-loader'],
                            fallback: 'vue-style-loader'
                        }),
                        // i18n: '@kazupon/vue-i18n-loader'
                    }
                }
            }]
        }]
    },
    plugins: [
        new CleanPlugin(['dist'], {
            root: path.resolve('../'),
            exclude: ['dlls', 'manifests', 'bundle-config.json'],
            verbose: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        })
    ]
});