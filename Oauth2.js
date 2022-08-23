require("dotenv").config()

const nodemailer=require("nodemailer");
const {google}=require("googleapis");
const OAuth3=google.auth.OAuth2;

// console.log("Here is google apis    " + OAuth3);

const createTransporter =  (emailcontact, token2) => {
    const oauth2Client = new OAuth3(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );
  
    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    });
  
    const accessToken = () => {
         oauth2Client.getAccessToken((err, token)=>{
          if (err) {
            return console.log("Failed to create access token ");
          }
            return token;
        });
    }
    const accesstoken=accessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL,
        accesstoken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      }
    });
    const usermail=emailcontact;
    const username=usermail.substring(0,usermail.lastIndexOf("@"));


    transporter.sendMail({
        subject: "Please Verify Your Account",
        html: `
          <div>
           <p style="font-size:1.4rem" >Hello ${username},</p>

            <p>Thank you for subscribing... </p>
            
            <p>
              Please confirm your email by clicking on the following link
            </p>
          <a color="blue" href=http://localhost:3000/confirm/${token2}> Click here</a>
            

          </div>
            `,
    
        to: emailcontact,
        from: process.env.GMAIL
      });
    }
    console.log("have sent the stupid email"), 



  
  module.exports=createTransporter