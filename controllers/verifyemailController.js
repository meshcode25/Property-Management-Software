const Mail = require("nodemailer/lib/mailer")
const User=require("../models/userModel")


exports.verifyEmail=(req, res,next)=>{
    console.log(req.params.verificationcode)
    User.findOne({
        verificationcode:req.params.verificationcode
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