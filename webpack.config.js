var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var CleanWebpackPlugin = require('clean-webpack-plugin')
var webpack = require('webpack')
var fs = require('fs')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[chunkhash].[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
            //all、initial、async三个值
            chunks: "all",
            //被引用次数超过设置的值， 才有可能被打包进新的chunk
            minChunks: 1,
            //控制包的最小大小，  如果切割完的新chunk小于设置值， 则不会生成这个新chunk
            minSize: 300,
            //初始加载请求时，并行请求数量的上限，不是针对某个chunk， 比如设置为3 ， 则最多打出3个包
            maxInitialRequests:10,
            //chunk组，每一个新chunk就是一个cache group
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'all',
                    name: 'vendors'
                },

                default: false,

                react_vendor:{
                    test: (module, chunks) => {
                        let chunkName = chunks.reduce((a,b) => {
                            return a + ' , ' + b
                        }, '')
                        // console.log(module.context, chunkName , chunks.length)
                        return /react/.test(module.context)
                    },
                    priority: 1,
                    name: 'react_vendor'
                },

                moment_vendor:{
                    test: (module, chunks) => /moment/.test(module.context),
                    priority: 1,
                    name: 'moment_vendor'
                },

                lodash_vendor:{
                    test: (module, chunks) => /lodash/.test(module.context),
                    priority: 1,
                    name: 'lodash_vendor'
                }
            }
        }
    }
}