//Kullanıcı Modellerim

const mongoose = require('mongoose')

const bcrypt = require('bcrypt');
const { hash } = require('bcrypt');


const UserSchema=new mongoose.Schema({
    username:{type: String,required:true,index:{unique:true}},
    surname:{type: String,required:true},
    surname:{type: String,required:true},
    email:{type: String,requird:true,index:{unique:true}},
    password:{type: String,required:true,index:{unique:true}},
    rpassword:{type: String,required:true},
    number:{type:String,required:true,index:{unique:true}},
    date:{type: Date,default:Date.now}
})

//hash işlemleri(password)
UserSchema.pre('save',function(next){
  if(this.isModified('password')){
      bcrypt.hash(this.password,8,(err,hash)=> {
          if(err) return next(err);
          this.password=hash;
          next();
      })
  }
})

UserSchema.methods.comparePassword=async function(password){
    if(!password) throw new Error('password karşılaştırılamaz');
    try{
        const result=await bcrypt.compare(password,this.password);
        return result;
    }catch(error){
        console.log('password karşılaştırma hatası',error.message);
    }
};


//hash işlemleri(repassword)
UserSchema.pre('save',function(next){
    if(this.isModified('rpassword')){
        bcrypt.hash(this.rpassword,8,(err,hash)=> {
            if(err) return next(err);
            this.rpassword=hash;
            next();
        })
    }
  })
  
  UserSchema.methods.comparePassword=async function(rpassword){
      if(!rpassword) throw new Error('rpassword karşılaştırılamaz');
      try{
          const result=await bcrypt.compare(rpassword,this.rpassword);
          return result;
      }catch(error){
          console.log('rpassword karşılaştırma hatası',error.message);
      }
  };




module.exports=mongoose.model('User',UserSchema)

