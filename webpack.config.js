import path from 'path'
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry:['webpack-hot-middleware',path.resolve(__dirname,'public/index.js')],
    output:{
        publicPath:path.resolve(__dirname,'assets'),
        name:'bundle.js'
    },
    rules:[
        {
            test:/\.js$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env'],
                    plugins: ['@babel/transform-runtime']
                }
            },
            exclude:/(node_modules|bower_components)/,
            // include:[
            //     path.resolve(__dirname,'public')
            // ]
        }
    ],
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/views/index.html',
            filename: 'index.html',
            inject: true
        })
    ]
}