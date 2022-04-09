const express=require("express");
const router=express.Router();
const verifyemailController=require("../controllers/verifyemailController")
//l


router.get("/:verificationcode", verifyemailController.verifyEmail)

module.exports= router