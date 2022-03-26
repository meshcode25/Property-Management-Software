const express= require("express")
var router= express.Router()

router.get("/", (req, res, next)=>{
    res.send({message: "You have hit the home page of our PMS app"})
    //    res.redirect("/propertymanger");
})

module.exports=router;