const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/login")
.then(()=>{
    console.log("Mongo DB COnnceted");
})
.catch((error)=>{
    console.log("Failed To connect:"+error)
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

//defining collection
const collection =new mongoose.model('Collection123',LogInSchema)
module.exports=collection

