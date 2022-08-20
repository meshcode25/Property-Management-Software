// const nodemailer= require("nodemailer")
// const authconfig=require("./authConfig")



// const transport=nodemailer.createTransport({
//     service:"GMAIL",
//     auth:{
//         user:authconfig.owner,
//         pass:authconfig.pass
//     } 
        
// })

// ///
// const sendMail=(email,verificationcode)=>{
//     console.log("Verify Email Password Sent")
    
    
//     transport.sendMail({
//         from:authconfig.user,
//         to:email,
//         subject: "Please Verify Your Account",
//         html: `<h1>Email Confirmation</h1>
//             <h3>Hello there</h3>
//             <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
//             <a color="blue" href=http://localhost:3000/confirm/${verificationcode}> Click here</a>
//             </div>`,
//       }).catch(err => console.log(err));
   
   
   

// }





// module.exports=sendMail