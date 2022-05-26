const mongoose = require('mongoose')

const Post=require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/cikolata_test_db',{
   useNewUrlParser:true,
   useUnifiedTopology:true,
})

//title göre filtirleme
/* Post.find({
    title:'ikinci post'
},(error,post)=>{
    console.log(error,post)
})
 */



//tüm veriler
/* Post.find({ },(error,post)=>{
    console.log(error,post)
})  */

//tüm veriler id e göre 
/* Post.findById('6283bf4d3144b9e8989dba9e',(error,post)=>{
 console.log(error,post)
}) */

//bul ve update et
/* Post.findByIdAndUpdate('6283bf4d3144b9e8989dba9e',{
    title:'ben update oldum'
},(error,post)=>{
    console.log(error,post)
}) */

Post.findByIdAndDelete('6283bf956701131ee649fddc',(error,post)=>{
  console.log(error,post)
})


 Post.create({
 title:'denek',
 content:'aaaa'
},(error,post)=>{
    console.log(error,post)
}) 