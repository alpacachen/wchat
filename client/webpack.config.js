/**
 * Created by huoqiu on 17/3/31.
 */
var webpack = require('webpack')

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname+'/dist/',
        publicPath:'dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, use: 'style-loader!css-loader'},
            {test: /\.html$/, use: 'html-loader'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    node: {
        fs: "empty"
    }
}