const role=require("../models/rolesModel")
const User=require("../models/userModel")
const bcrypt= require("bcryptjs")
const verificationCode = require("../verificationCode")
const moment =require("moment")

// exports.signup_form_get= function(req,res, next)
const nodemailer= require("../nodemailer")
const jwt=require("jsonwebtoken");
const secret= require("../authConfig")
const sendEmail=require("../Oauth2")
const sendMail = require("../nodemailer")


exports.signup_form_post= function(req,res, next){
  
    
    User.findOne({
        email:req.body.email
    }).exec().then(user=>{
        if(user){
            console.log(user)

           return res.status(200).send({message:"Email Already Registered, Please Login!" })
          

        }  
        else{
    
            const verification=verificationCode();
            console.log("this is the verification code we are talking about " + verification)
            var user= new User({
                email:req.body.email,
                role:req.body.role,
                password:bcrypt.hashSync(req.body.password, 8),
                status:"pending",
                verificationcode:verification
            })
        console.log(user)
        user.save((err)=>{
            if(err){
            
            return res.send({message:err})
                
            }
            else{
            const token=jwt.sign({exp:Math.floor(Date.now()/1000)+ (60*60), user:user}, secret.secret)   
            const verify=jwt.verify(token,secret.secret)
  
            console.log(verify);
            console.log("here is the user  " + user)
            // user.verificationcode
            // nodemailer(user.email, token )
            sendMail(user.email,token);
            return res.status(201).send({message:`Account Created Successfully, and here is your token ${token} Check your Email to Verify your Account`})
            }
        })

            
        }
    }).catch(err => console.error(`An error occured while looking at the database${err}`))


        


}         
          
