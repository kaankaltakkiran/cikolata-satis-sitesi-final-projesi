const express=require('express')
const router=express.Router()
//model tanımı
const User=require('../models/User')

router.get('/kayit',(req,res)=>{
  res.render('site/kayit') 
})
//üyelik giriş kontorlü ve yazısı
router.post('/kayit',(req,res)=>{
  User.create(req.body,(error,user)=>{
    req.session.sessionFlash={
      type:'alert alert-success',
      message:'Üyelik Başırılı'
    } 
    console.log(req.body)
    res.redirect('/users/login')
  })
})

router.get('/login',(req,res)=>{
  res.render('site/login') 
})

//paswword kontorol
router.post('/login',(req,res)=>{
    const{email,password}=req.body

    User.findOne({email},(error,user)=>{
        if(user){
          if(user.password==password){
            //user session
            req.session.userId=user._id //id kaydetme
            
            req.session.sessionFlash={
              type:'alert alert-success',
              message:'Giriş Başırılı'
            } 
            
            res.redirect('/')
            
             
          }else{
            req.session.sessionFlash={
              type:'alert alert-success',
              message:'Yanlış Girdin'
            } 
            res.redirect('/users/login')
            
          }
        }else{
          res.redirect('/users/kayit')
        }
    }  )  
})
 
router.get('/cikis',(req,res)=>{
 req.session.destroy(()=>{
   res.redirect('/')
   
 })
 
})



module.exports=router

