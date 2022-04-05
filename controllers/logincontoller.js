const user=require("../models/userModel")
const role=require("../models/rolesModel")

exports.login_form_get= function(req,res, next){


}

exports.login_form_post=function(req,res,next){
    console.log(req)
    res.json(
    {message:"if this works then !!CONGRATULATIONS!! you are now a Full Stack web developer"})
    

}