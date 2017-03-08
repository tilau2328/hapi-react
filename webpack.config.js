var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(SRC_DIR, 'client', 'app');
var PUBLIC_DIR = path.resolve(SRC_DIR, 'server', 'public');
var BUILD_DIR = path.resolve(PUBLIC_DIR, 'static', 'scripts');
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
        loaders : [{
                test: /\.css/,
                include: APP_DIR,
                loader: 'style-loader!css-loader',
            }, {
              test: /\.json$/,
              include: APP_DIR,
              loader: 'json-loader',
            }, {
                test: /\.jsx$|\.js$/,
                include: APP_DIR,
                loaders: ['babel-loader']//, "eslint-loader"
            }, {
              test: /\.(graphql|gql)$/,
              include: APP_DIR,
              loader: 'graphql-tag/loader',
            }
        ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: PUBLIC_DIR
    }
};

module.exports = config;
