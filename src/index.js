// module
const express = require('express');
const hbs=require("hbs")
const path=require("path")
const collection=require("./mongodb")

// Creating express object
const app = express();


const templatePath=path.join(__dirname,'../tempelates')
app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async(req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password
    }
    //console.log("Working")
    //giving data to mongo db
    await collection.insertMany([data])
    res.render("home")
})

app.post("/login",async(req,res)=>{
    try{
 const check=await collection.findOne({name:req.body.name})
        console.log(check.password)
        console.log(req.body.password)
        if(check.password === req.body.password){  
            res.render("home")
        }else{
            res.send("Wrong password")
        }
}
    catch{
        res.send("Wrong details//user does not exit")
    }
   // res.render("home")
})


app.listen(3000,()=>{
    console.log("Port Connected")
})

 
