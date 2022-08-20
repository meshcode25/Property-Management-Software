// require("dotenv").config()

// const nodemailer=require("nodemailer");
// const {google}=require("googleapis");
// const OAuth2=google.Auth.OAuth2;



// const createTransporter = async () => {
//     const oauth2Client = new OAuth2(
//       process.env.CLIENT_ID,
//       process.env.CLIENT_SECRET,
//       "https://developers.google.com/oauthplayground"
//     );
  
//     oauth2Client.setCredentials({
//       refresh_token: process.env.REFRESH_TOKEN
//     });
  
//     const accessToken = await new Promise((resolve, reject) => {
//       oauth2Client.getAccessToken((err, token) => {
//         if (err) {
//           reject("Failed to create access token :(");
//         }
//         resolve(token);
//       });
//     });
  
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.GMAIL,
//         accessToken,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN
//       }
//     });
  
//     return transporter;
//   };
  
//   const sendEmail = async (emailcontact,token) => {
//     let emailTransporter = await createTransporter();
//     await emailTransporter.sendMail(emailcontact,token);
//   };
  
//   sendEmail({
//     subject: "Please Verify Your Account",
//     text: `<h1>Email Confirmation</h1>
//             <h3>Hello there</h3>
//             <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
//             <a color="blue" href=http://localhost:3000/confirm/${token}> Click here</a>
//             </div>`,
//     to: emailcontact,
//     from: process.env.GMAIL
//   });


//   module.exports=sendEmail