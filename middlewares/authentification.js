// const jwt = require('jsonwebtoken');
// const secret=require("../authConfig");
// console.log(secret.secret)


// module.exports = (req, res, next) =>{

//     const token = req.headers.authorization.split(' ')[1];
//     const decodedToken = jwt.verify(token, secret.secret);
//     const userId = decodedToken.userId;
//     const why=secret;

//     if (secret===why) {
//         console.log(req.body)
//         console.log(req.headers);
//         console.log("INvalid Id")
//         throw 'Invalid user ID';
//     } else {
//         console.log("Next shit");
//         next();
//     }

//     console.log("Errorerror")
//     console.log(req.body)
//       res.status(401).json({
//       error: new Error('Invalid request!')
//     });
//   }


// try {
//     const token = req.headers.authorization.split(' ')[1];
//     const decodedToken = jwt.verify(token, secret.secret);
//     const userId = decodedToken.userId;
//     const why=secret;
//     console.log(req);
//     if (secret===why) {
//         console.log(req.body)
//         console.log("INvalid Id")
//         throw 'Invalid user ID';
//     } else {
//         console.log("Next shit");
//         next();
//     }
// } catch {
//     console.log("Errorerror")
//     console.log(req.body)
//       res.status(401).json({
//       error: new Error('Invalid request!')
//     });
//   }