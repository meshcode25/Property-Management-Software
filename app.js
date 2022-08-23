const mongoose= require("mongoose")
const express = require("express")
const createError= require("http-errors")
const helmet= require("helmet")
const compression= require('compression') 
const path= require("path")
const cors=require("cors")
// const http= require('http')
// const jwt= require("jsonwebtoken")

const auth=require("./middlewares/authentification")

const cookieParser = require("cookie-parser")

// configure server
const app= express()


//set the roots to be used for the app
const loginRouter= require ("./routes/loginRouter")
const indexRouter= require("./routes/indexRouter")
const signupRouter= require("./routes/signupRouter")
const verifyemailRouter=require("./routes/verifyemailRouter")
const passwordresetRouter= require("./routes/passwordresetRouter")
const propertyMangerRouter= require("./routes/propertymanagerRouter")
//const landLordRouter= require("./routes/landlordRouter")
//const tenantRouter= require("./routes/tenantRouter")
//const maintenanceRouter= require("./routes/maintenanceRouter")

//populateDatabase
//var populatedDatabase= require("./populatedb");
//populatedDatabase();

//configure MongoDb database
var db_url="mongodb://localhost:27017/pmsdatabase"
mongoose.connect(db_url, {useNewUrlParser:true})
const db=mongoose.connection
db.on("error", (error)=>{console.error(error)})
db.once("open", ()=>{console.log("Mongoose database has been successfully connected")})



//Cors/// Cross-Origin-Resource-Sharing
corsOptions={
  origin:"*",
  credentials:"true",
  optionSuccessStatus:200
}

//Middlewares
//body parser and urlencode
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//set views and public folder for use
app.set(express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")


// app.use(auth);
//Cors 
app.use(cors(corsOptions))
//use url paths as middlewares
app.use("/o/auth/passwordreset", passwordresetRouter)
app.use("/o/auth/login",  loginRouter)
app.use("/o/auth/verify", verifyemailRouter)
app.use("/o/auth/signup", signupRouter)
app.use("/", indexRouter)


app.use("/properties", propertyMangerRouter)

/*app.use("/landlord", landLordRouter)

app.use("/tenant", tenantRouter)
app.use("/maintenance", maintenanceRouter)
*/


//middlewares
app.use(compression())
app.use(helmet())
app.use(cookieParser())

//catch 404 error and foward to error handler
/*app.use(function(req, res,next){
    next(createError(404));  
  })

  //error handler 
  /*
  
  app.use((err,req, res, next)=>{
      //render the error page
      res.status(err.status|| 500);
        console.log( "there was an error with the Server")
  })
 */

//const server=http.createServer(app)
const port= 8000;
app.listen(8000, ()=>{console.log("The PMS Server has successfully started in Port 8000")})
//const server= http.Server(app)
//server()