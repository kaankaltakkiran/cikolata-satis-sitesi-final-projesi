//Ürün Modelerim
const mongoose = require('mongoose')


const ProductSchema=new mongoose.Schema({
    productName:{type:String,require:true},
    content:{type:String,require:true},
    total:{type:String,require:true},
    date:{type: Date,default:Date.now}
})

module.exports= mongoose.model('Product',ProductSchema)