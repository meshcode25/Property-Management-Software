const user=require("../models/user")
const role=require("../models/roles")

exports.login_form_get= function(req,res, next){


}

exports.login_form_post=function(req,res,next){
    console.log(req)
    res.send({message:"if this works then !!CONGRATULATIONS!! you are now a Full Stack web developer"})

}