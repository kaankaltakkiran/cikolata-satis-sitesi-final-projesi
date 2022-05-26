const mongoose = require('mongoose')

const Post=require('./models/ContactPost')


mongoose.connect('mongodb://127.0.0.1/cikolata_contact',{
   useNewUrlParser:true,
   useUnifiedTopology:true
})

 //
Post.create({
    name:'kaan',
    email:'kaan@gmail.com',
    message:'ilk post' 
},(error,post)=>{
    console.log(error,post)
}) 