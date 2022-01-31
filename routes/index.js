const express= require("express")
var router= express.Router()

router.get("/", (req, res, next)=>{
    res.redirect("/propertymanger");
})

module.exports=router;