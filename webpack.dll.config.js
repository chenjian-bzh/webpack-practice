const path = require('path')
const BunldeAnalyze = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')


module.exports = {
    entry: {
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist/site'),
        filename: 'dll_[name].js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: path.resolve(__dirname, 'dist/site/', '[name]-manifest.json'),
            path: '[name]_[hash]'
        }),
        new BunldeAnalyze()
    ]
}