const express = require('express')
const cors =  require('cors')
const path = require('path')
const app  = express()

const PORT = process.env.PORT || 5000
app.use(cors())


app.set('view engine','pug')

app.set('views',path.join(__dirname,'views'))

app.get('/api/whoami',(req,res)=>{
const data = {greeting:'hello kevin',time:'it is 6:20pm'}

res.render('index',{software:req.headers['user-agent'],language:req.headers['accept-language'],ipaddress:req.socket.remoteAddress})  
})

app.listen(PORT,()=>console.log('Server is on fire'))