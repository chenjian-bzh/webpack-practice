import express from 'express'
import ejs from 'ejs'
import path from 'path'

let app = express()

app.engine('html',ejs.renderFile)
app.set('views',path.join(__dirname,'public/views'))
app.set('view engine','html')

app.get('/',function(req,res){
    res.render('index')
})

app.listen(3000,function(){
    console.log("start listen port 3000....")
})