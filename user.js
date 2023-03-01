const mongoose=require("mongoose")
const utilisateur=new mongoose.Schema({
    name:String,
    age:{type:Number,required:true}
})
module.exports=mongoose.model("user",utilisateur)