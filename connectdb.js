const mongoose=require("mongoose")


const connectdb=(req,res)=>{
    try {
        mongoose.connect("mongodb+srv://hamdikaoubi1994:Douz1994@cluster0.cskbdp7.mongodb.net/?retryWrites=true&w=majority")
        console.log("db is connected")
    } catch (error) {
        console.log("db is not connected")
    }
}
module.exports=connectdb