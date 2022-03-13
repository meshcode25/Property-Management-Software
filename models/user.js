var mongoose = require ("mongoose") ;
var moment= require("moment")
var async= require("async")


var Schema= mongoose.Schema;

var userSchema= new Schema({
    first_name: {type:String, required: true, max:100},
    email_address: {type:String, required: true},
    password:{type:String, required:true},
    role:{type:Array, required:false},
})


userSchema.virtual("url").get(function(){
    return "users"
})