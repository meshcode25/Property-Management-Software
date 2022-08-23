require("dotenv").config()
const role=require("../models/rolesModel")
const User=require("../models/userModel")
const bcrypt= require("bcryptjs")
const verificationCode = require("../verificationCode")
const moment =require("moment")
const Refreshtoken=require("../models/refreshtoken");
// exports.signup_form_get= function(req,res, next)
// const sendMail = require("../nodemailer")
// const nodemailer= require("../nodemailer")

const jwt=require("jsonwebtoken");
// const secret= require("../authConfig")
const secret=process.env.SECRET
const sendEmail=require("../Oauth2")
console.log(`Is this the undefinedd?? ${secret}`);

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
            var refreshnow=verificationCode();
         
            var refreshtoken= new Refreshtoken({
                userid:user._id,
                expires: Math.floor(Date.now()/1000 + (2592000)),
                refreshtoken:refreshnow,
            })

            refreshtoken.save((err)=>{
                if(err){
                     res.status(401).send({message:err});
                }
                else{
                    console.log(`This is the one for verify refreshtoken + ${refreshtoken}`);
                    console.log(refreshtoken)
                }
            })
            const token=jwt.sign({exp:Math.floor(Date.now()/1000)+ (60*15), user:user}, secret)   
            const refresh_token=jwt.sign({exp:Math.floor(Date.now()/1000 + 3600),user:user }, process.env.REFRESH_SECRET)
            const verify=jwt.verify(token,secret);
            const verify_refresh=jwt.verify(refresh_token, process.env.REFRESH_SECRET);
            console.log(verify)
            console.log(`This is the verification for the refresh tokens, This one here ${verify_refresh}`)
            console.log("here is the user  " + user)
            console.log(verify_refresh);

            // user.verificationcode
            console.log(`here is the newly created user  ${user.email}`)
            sendEmail(user.email,token);
                return res.status(201).send({message:`Account Created Successfully, and here is your access_token ${token} Check your Email to Verify your Account and here is your ${refresh_token}`})
            }
        })

            
        }
    }).catch(err => console.error(`An error occured while looking at the database${err}`))


        


}         
          
