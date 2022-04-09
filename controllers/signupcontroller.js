const role=require("../models/rolesModel")
const User=require("../models/userModel")
const bcrypt= require("bcryptjs")
const verificationCode = require("../verificationCode")
// exports.signup_form_get= function(req,res, next)
const nodemailer= require("../nodemailer")




exports.signup_form_post= function(req,res, next){
  
    
    User.findOne({
        email:req.body.email
    }).exec().then(user=>{
        if(user){
            console.log(user)

           return res.status(200).send({message:"Email Already Registered, Please Login!"})
          

        }  
        else{
    
            const verification=verificationCode();
    
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
            nodemailer(user.email, user.verificationcode)
            return res.status(201).send({message:"New account successfully created!"})
            
            }
        })

            
        }
    }).catch(err => console.error(`An error occured while looking at the database${err}`))


        


}         
          
