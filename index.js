const express= require("express");
const nodemailer=require("nodemailer");
const mongoose=require("mongoose");
const app=express();

const cors=require("cors");



app.use(cors({
    origin:"*",
    methods:["GET","POST"]
}));


const  body_parser=require("body-parser");

app.use(body_parser.json());
const port=5000;
mongoose.connect("mongodb+srv://chawkatomar:i5gx55P6FCFqJYDs@cluster.s5gynwk.mongodb.net/mma_db").then(()=>console.log("test is running"))


const Schema=mongoose.Schema({

    username:String,
    email:String,
    telephone:String,
    message:String

})

const model=mongoose.model("users",Schema);

const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"mastersmoroccan@gmail.com",
        pass:"vhfxlqiuwidjeszw"
        
    }
})



app.get("/mma_agency_users",(req,res)=>{
    // transport.sendMail(mail_option,(err)=>{
    //      res.send({messgae:"something went wrong"})
    // })

   



})



app.post("/mma_add_new_message",(req,res)=>{

const {name,email,tel,message}=req.body;

model.create({
    username:name,
    email:email,
    telephone:tel,
    message:message


}).then(()=>res.status(200).json({message:"Your message was sent with success "}))
const option1={
   from:"mastersmoroccan@gmail.com",
   to:email,
   subject:`Mr  ${name} message envoyé avec succés`,
   html:"<h1>Thank you for contacting us we will back to you later !</h1>"
}
const option2={
    from:"mastersmoroccan@gmail.com",
    to:"omar1chaoukat@gmail.com",
    subject:"Drari Client Jdid tga3do",
    html:"<h1>New client a drari let's smash it </h1>"
}

transport.sendMail(option1);
transport.sendMail(option2);

})



app.listen(5000,()=>{
    console.log(`server is running on port http://127.1.1.0:${port}`);

})