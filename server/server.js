const app = require('express')();
const http = require('http').Server(app);
// const io = require('socket.io')(http);
const webpack = require('webpack');
const config = require('../build/webpack.dev.js');    // webpack 开发环境配置
const compiler = webpack(config);
const history = require('connect-history-api-fallback');
const router = require('./router');
// const setSocket = require('./dev-server/socket');

// mock
app.use(router);

// redirect
app.use(history({
    index: '/bookmarket.html',
    rewrites: [

    ]
}));

// hot-reload
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true
}));
app.use(require("webpack-hot-middleware")(compiler));

// web socket
// setSocket(io);

http.listen(8888, () => {
    console.log('bookmarket listenning on port 8888!\n');
});

// '192.168.1.240',