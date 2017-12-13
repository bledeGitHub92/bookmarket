const app = require('express')();
const http = require('http').Server(app);
// const io = require('socket.io')(http);
const webpack = require('webpack');
const config = require('../build/webpack.dev.js');    // webpack 开发环境配置
const compiler = webpack(config);
const history = require('connect-history-api-fallback');
const router = require('./router');
var bodyParser = require('body-parser');
// const setSocket = require('./dev-server/socket');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
app.use(bodyParser.json())

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

// '192.168.1.240',
http.listen(8888, () => {
    console.log('bookmarket listenning on port 8888!\n');
});
