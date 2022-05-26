//` `
//npm express importları
const path=require('path')
const exphbs =require('express-handlebars')
const express = require('express')
const app = express()
const { dirname } = require('path')
const port = 3000
const hostname='127.0.0.1'
//veritabanı importları
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const  expresSession = require('express-session')


//veritabanı bağlantısı
mongoose.connect('mongodb://127.0.0.1/cikolata_db',{
   useNewUrlParser:true,
   useUnifiedTopology:true
})
//kontrol ediyorum(id görme) 
app.use(expresSession({
 secret:'testotesto',
 resave:false,
 saveUninitialized:true

}))

app.use(express.static('public'))

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json()) 

//link düzlenme miidleware 
//logut butonu görünüp görünmemesi
app.use((req,res,next)=>{
 const {userId}=req.session
 if(userId){
    res.locals={
       displayLink:true
    }
 }
    else{
      res.locals={
      displayLink:false
    }
 }
 next()
})

 //mesaj gönderme siteye miidleware 
app.use((req,res,next)=>{
   res.locals.sessionFlash=req.session.sessionFlash
   delete req.session.sessionFlash
   next()
  })

//route bölümü

const main=require('./routes/main')
app.use('/',main)

const users=require('./routes/users')
app.use('/users',users) 

const admin=require('./routes/admin/index')
app.use('/admin',admin)

const contact=require('./routes/contact')
app.use('/contact',contact)



app.listen(port,hostname, () => {
   console.log(`server çalişiyor,http://${hostname}:${port}/`)
})
 