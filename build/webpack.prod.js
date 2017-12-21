var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractPlugin = require('extract-text-webpack-plugin');
var base = require('./webpack.base');

var extractCSS = new ExtractPlugin({ filename: '[name]/[name].static.[contenthash:8].css', allChunks: true });
var extractLESS = new ExtractPlugin({ filename: '[name]/[name].app.[contenthash:8].css', allChunks: true });
var extractCSSofVue = new ExtractPlugin({ filename: '[name]/[name].static.[contenthash:8].css', allChunks: true });
var extractLESSofVue = new ExtractPlugin({ filename: '[name]/[name].app.[contenthash:8].css', allChunks: true });

module.exports = merge(base, {
    // devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),    // 输出路径，须使用绝对路径
        filename: '[name]/[name].[chunkhash:8].js',    // 输出文件名
        chunkFilename: 'scripts/[name].[chunkhash:8].js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            // include: path.resolve(__dirname, '../src'),
            use: extractCSS.extract({
                use: [{ loader: 'css-loader', options: { minimize: true } }],
                fallback: 'style-loader',
            })
        }, {
            test: /\.less$/,
            include: path.resolve(__dirname, '../src'),
            use: extractLESS.extract({
                use: [{ loader: 'css-loader', options: { minimize: true } }, 'postcss-loader', 'less-loader'],
                fallback: 'style-loader'
            })
        }, {
            test: /\.vue$/,
            include: path.resolve(__dirname, '../src'),
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
                        })
                    }
                }
            }]
        }]
    },
    plugins: [
        extractLESS, extractCSS,
        extractCSSofVue, extractLESSofVue,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vue',
            filename: '[name].[chunkhash:8].js',
            minChunks: Infinity
        }),
        new CleanPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),
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