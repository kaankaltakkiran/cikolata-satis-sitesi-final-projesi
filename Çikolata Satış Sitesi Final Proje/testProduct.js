const mongoose = require('mongoose')

const Post=require('./models/Product')


mongoose.connect('mongodb://127.0.0.1/cikolata_product',{
   useNewUrlParser:true,
   useUnifiedTopology:true
})

/* //post oluşturma(ürün oluşturma)
Post.create({
    productName:'Beyaz Çikolata',
    content:'Çikolata',
    total:'100' 
},(error,post)=>{
    console.log(error,post)
}) */


//ürün adına göre filtirleme
/*    Post.find({
 productName:'Beyaz Çikolata'
},(error,post)=>{
    console.log(error,post)
})  */ 
 
//tüm ürünleri gösterir
/* Post.find({ },(error,post)=>{
    console.log(error,post)
})  */

//tüm veriler id e göre listeler
/* Post.findById('628cfc288cfdf0fd42eead49',(error,post)=>{
 console.log(error,post)
}) */

//istinilen idyi bul ve update et
 /* Post.findByIdAndUpdate('628cfc288cfdf0fd42eead49',{
    total:'250'
},(error,post)=>{
    console.log(error,post)
}) 
 */
//ide e göre ürün silme
/* Post.findByIdAndDelete('628cfc288cfdf0fd42eead49',(error,post)=>{
    console.log(error,post)
  }) */
  
 
/* Post.create({
    productName:'Frambuazlı Çikolata',
    content:'Çikolata',
    total:'200' 
},(error,post)=>{
    console.log(error,post)
}) 

Post.create({
    productName:'Normal Çikolata',
    content:'Çikolata',
    total:'350' 
},(error,post)=>{
    console.log(error,post)
}) 

Post.create({
    productName:'Özel Çikolata',
    content:'Çikolata',
    total:'43' 
},(error,post)=>{
    console.log(error,post)
}) 

Post.create({
    productName:'Fındıklı Çikolata',
    content:'Çikolata',
    total:'35' 
},(error,post)=>{
    console.log(error,post)
})  */