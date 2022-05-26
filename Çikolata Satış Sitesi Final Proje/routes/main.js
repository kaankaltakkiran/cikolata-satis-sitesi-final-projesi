const express = require('express')
const router = express.Router()

const ContactPost=require('../models/ContactPost')

//ana yönlendirme
router.get('/', (req, res) => {
   console.log(req.session)
    res.render('site/index');
 })
 
 router.get('/anasayfa', (req, res) => {
    res.render('site/index');

 })
 
 //uluşım başarılıysa ekranda yazı yazıo
 router.get('/hakkinda', (req, res) => {
    res.render('site/about');
    req.session.sessionFlash={
      type:'alert alert-success',
      message:'hakkında sayfası'
    } 
 })

 router.get('/kaan', (req, res) => {
    res.render('site/addpost');
 })

 //üyü olamdan sepete giremez.
 router.get('/sepet', (req, res) => {
    if(req.session.userId){
       return res.render('site/sepet')
    }
    res.redirect('users/login'); 
 })
 
  router.get('/iletisim', (req, res) => {
    res.render('site/contact');
 }) 
 router.get('/kaan', (req, res) => {
   res.render('site/addPost');
})

router.post('posts/test', (req, res) => {
   res.send('test ok')
})
 

 
  router.get('/siparis', (req, res) => {
    res.render('/');
 }) 

 router.get('/admin',(req,res)=>{
   res.render('admin/indexx') 
 })

//emali veritabanına yazdırma
   router.post('/contact/email', (req, res) => {
     console.log(req.body)
   ContactPost.create(req.body)
   res.redirect('/iletisim')
})  






 

 module.exports=router