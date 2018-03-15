import path from 'path'
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry:[path.resolve(__dirname,'src/public/index.js')],
    output:{
        path:path.resolve(__dirname,'dist/frontEnd'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/(node_modules|bower_components)/,
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/public/views/index.html',
            filename: 'index.html',
            inject: true
        })
    ]
}