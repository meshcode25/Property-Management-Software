const mongoose= require("mongoose");
const async= require("async")


const Schema= mongoose.Schema

const roleSchema= new Schema({
    email_address:{type:String, required:false },
    
})

