const User=require("../models/userModel")
const role=require("../models/rolesModel")
const jwt= require("jsonwebtoken")

const authconfig= require("../authConfig")
const bcrypt = require("bcryptjs")
const secret=authconfig.secret
// console.log(secret)

// jwt.sign({exp: Math.floor(Date.now()/1000) + 2*60}, secret)

// exports.login_form_get= function(req,res, next){


// }

exports.login_form_post=function(req,res,next){

    User.findOne({
        email:req.body.email
    }).exec().then(user=>{
        if(user){
            console.log(user)
            console.log(user.status)
            bcrypt.compareSync
            const validPassword= bcrypt.compareSync(
                req.body.password,
                user.password
            )
            console.log("Hashed password from database" + " " + user.password)
            console.log("Password from Form" + "" + req.body.password)
            console.log("Is the password valid" + " " + validPassword)

            const isVerifiedEmail=()=>{
                if(user.status==="pending"){
                    return false
                }
                else{
                    return true
                }
               
            }
          
          const verified=isVerifiedEmail()
          console.log(" Is the Email  verified?" + " " + verified)


            if(!validPassword){
                return res.status(200).send({message: "Invalid Password or Email", accesstoken:null, color: "red", type:"invalid"})
            }
            else{
                if(!isVerifiedEmail){
                    return res.status(200).send({message: "Unverified Email, Please Check you Email and Verify your Email", color: "red", type:"unverified"})
                }
                const token= jwt.sign({id:user.id}, secret, {
                    expiresIn:(10*60),

                })

                return res.status(201).send({
                    type:"successlogin",
                    message:"Login Success, wait as we redirect you to the next page",
                    accesstoken: token, 
                    color:"green"
                })
            }



        }  
        else{
    
            return res.status(200).send({message:"Invaliddd Email or Password", color: "red", type:"invalid"})
    
        
    }
    }).catch(err => console.error(`An error occured while looking at the database${err}`))







}