var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(SRC_DIR, 'client', 'app');
var BUILD_DIR = path.resolve(SRC_DIR, 'server', 'public', 'static', 'scripts');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};

module.exports = config;
