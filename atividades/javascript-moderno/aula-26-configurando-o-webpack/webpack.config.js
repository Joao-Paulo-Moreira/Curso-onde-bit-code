const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

module.exports = {
    entry: {
        build: './src/build.js'
    },
    output: {
        file: path.resolve(__dirname, 'public'),
        filename: '[name].min.js'
    },
    mode: 'development',
}