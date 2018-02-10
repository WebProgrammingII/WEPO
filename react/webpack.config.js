const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, use: 'eslint-loader' },
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.less$/, use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'less-loader' }
            ]}
        ]
    },
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx', '.less']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        open: true,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    plugins: [new HtmlWebpackPlugin({
        title: 'ChatRoomJS',
        template: './index.html',
        inject: 'body'
    })]
};
