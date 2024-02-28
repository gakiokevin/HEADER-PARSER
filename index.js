const express = require('express')
const cors =  require('cors')
const path = require('path')
const app  = express()

const PORT = process.env.PORT || 5000
app.use(cors())


app.set('view engine','pug')

app.set('views',path.join(__dirname,'views'))
app.get('/',(req,res)=>{
res.render('home',{welcome:'add whoami on the url to view results'})
})
app.get('/api/whoami',(req,res)=>{

  const data = {
    software: req.headers['user-agent'],
    language: req.headers['accept-language'],
    ipaddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
  };
  res.json(data)
})

app.listen(PORT,()=>console.log('Server is on fire'))