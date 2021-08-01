const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://atish:0mu8ZbPjoTTQeii5@cluster0.avrwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useUnifiedTopology: true,useNewUrlParser: true })
.then( ()=>console.log("sucessfull connected.."))
 .catch((err)=>console.log(err));

// creating a mongoose.Schema
const infoSchema = {
    fname:String,
    lname:String,
    email:String,
    number:Number,
    password:String
}
const Info = mongoose.model("Info",infoSchema)

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function (req,res) {
    let newData = new Info({
    fname:req.body.fname,lname:req.body.lname,email:req.body.email,number:req.body.number,password:req.body.password})
    newData.save();
    res.redirect("/")
})
// app.listen(3000,function(){
//     console.log("Server is connected");
// })
app.listen(process.env.PORT || 3000,function () {
    console.log("server running");
})