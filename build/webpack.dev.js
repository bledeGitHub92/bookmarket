var path = require('path');
var webpack = require('webpack');
var base = require('./webpack.base');
var merge = require('webpack-merge');

Object.keys(base.entry).forEach(function (name) {
    base.entry[name] = [
        'webpack-hot-middleware/client?timeout=2000&reload=true'
    ].concat(base.entry[name]);
});

module.exports = merge(base, {
    devtool: 'inlnie-source-map',
    output: {
        filename: '[name].dev.js',
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
        ]
    },
});