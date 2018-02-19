/*
    Should contain a basic webpack config which uses entry.js as an entry point and bundles all together
    using Babel and bundles all into /dist, static assets such as *.less and *.jpg should be exported as well

    At the end use uglify to minify bundle with webpack.optimize.UglifyJsPlugin()

    Plug eslint-loader in to the mix and see some coding errors!
**/

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/entry1.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'eslint-loader' },
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
