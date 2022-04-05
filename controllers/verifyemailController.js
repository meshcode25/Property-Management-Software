const User=require("../models/userModel")


exports.verifyEmail=(req, res,next)=>{
    User.findOne({
        verificationcode:req.params.verificationcode
    })
    .then((user)=>{
        if(!user){
            console.log("There is not such user found in the database, keep it Status: pending")
            return res.status(404).send({message: "user was not found the database"})
        }

        user.status="active"
        
        user.save((err)=>{
            console.log(user)
            if(err){
                console.log("User Email Verification Succcessfully completed, Valid Email")
                res.status(500).send({message: err})
            }

        }).catch(err=> console.error(err))

    }).catch(err => console.error(err))
    
    
    
    
    
    console.log(req.params)

}