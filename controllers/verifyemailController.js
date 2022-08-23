const Mail = require("nodemailer/lib/mailer")
const User=require("../models/userModel")
const jwt=require("jsonwebtoken")
const secret= require("../authConfig");
const mongoose=require("mongoose");

exports.verifyEmail=(req, res,next)=>{
    console.log(process.env.SECRET);
    const Verifyuser=jwt.verify(req.params.verificationcode, process.env.SECRET);
    console.log(`Here is the Verification code now callled signin token ${req.params.verificationcode}`)
    console.log(`verified user here ${Verifyuser}`);
    console.log(Verifyuser);
    console.log("For the id shit her e  ")
    console.log(Verifyuser.user._id)
    // verificationcode:req.params.verificationcode
    // User.findById(Verifyuser.user._id)
    User.findOne({
        _id:mongoose.Types.ObjectId(Verifyuser.user._id)
    })    
    .exec().then((user)=>{
        if(!user){
            console.log("There is not such user found in the database, keep it Status: pending")
            return res.status(200).send({message: "user was not found the database"})
        }

        user.status="active"
        
        user.save((err)=>{
            console.log(user)
            if(err){
                return res.status(500).send({message: err})
            }else{
                console.log("User Email Verification Succcessfully completed, Valid Email")
                return res.status(201).send({message:"User Email Successfully Verified, Valid Email"})
            }

        }).catch(err=> console.error(err))

    }).catch(err =>{

        console.log("errors just found, what the fuck, what errors again")
       return console.error(err)


    })
    
    

 
    

}