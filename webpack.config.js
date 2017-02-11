var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(SRC_DIR, 'client', 'app');
var BUILD_DIR = path.resolve(SRC_DIR, 'server', 'public', 'static', 'scripts');
var HOST = process.env.IP + ':' + process.env.PORT;

var config = {
    entry: APP_DIR + '/index.jsx',
    resolve: {
        extensions: [".jsx", ".json", ".js"]
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        preLoaders: [
            {
                test: /\.jsx$|\.js$/, 
                include: APP_DIR,
                loader: "eslint-loader"
            }
        ],
        loaders : [
            {
                test: /\.jsx$|\.js$/,
                include: APP_DIR,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        /*
        new BrowserSyncPlugin({
            proxy: HOST,
            open: false
        })
        */
    ]
};

module.exports = config;
