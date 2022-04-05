const express=require("express");
const router=express.Router();
const verifyemailController=require("../controllers/verifyemailController")

router.get("/", verifyemailController.verifyEmail)

module.exports= router