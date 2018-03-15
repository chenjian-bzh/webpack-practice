import express from 'express'
import ejs from 'ejs'
import path from 'path'
import webpackMiddleWare from 'webpack-dev-middleware'
import webpack from 'webpack'

let app = express()
////
//npm run dev模式下，没有使用webpack打包文件到dist/frontEnd,即没有dist/frontEnd，
//所以需要webpackMiddleWare作为中间件，模拟一个dist/frontEnd路径，浏览器可以通过这个路径渠道资源
let isDev = !process.env.NODE_ENV
if(isDev){
    let webpackConfig = require("../../webpack.config.babel").default
    app.use(webpackMiddleWare(webpack(webpackConfig),{publicPath:'/dist/frontEnd'}))
}

app.engine('html',ejs.renderFile)
app.set('views',path.join(__dirname,'../public/views'))
app.set('view engine','html')

app.get('/dist/frontEnd',function(req,res){
    res.sendFile(path.join(__dirname,"../../",req.baseUrl,req.path))
})

app.get('/',function(req,res){
    //res.render('index')
    res.sendFile(path.join(__dirname,'../../dist/frontEnd/index.html'))
})

app.listen(3000,function(){
    console.log("start listen port 3000....")
})