require("dotenv").config()
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
//var db_url="mongodb://localhost:27017/pmsdatabase"
//mongoose.connect(db_url, {useNewUrlParser:true})

/*
const db_url= "mongodb+srv://mesh:mesh@cluster0-gbbbe.mongodb.net/test?retryWrites=true&w=majority"
mongoDB= process.env.mongoDB|| db_url;
mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});
*/


const { MongoClient } = require("mongodb");
const username = encodeURIComponent("yegon");
const password = encodeURIComponent("Yegon@20**");
const cluster = "<clusterName>";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";


const mongodb_uri= `mongodb+srv://${username}:${password}@pmscluster.0rags3f.mongodb.net/test`;


console.log(mongodb_uri);

mongoose.connect(`${mongodb_uri}`);

//mongoose.connect("mongodb+srv://yegon:Yegon@20**@pmscluster.0rags3f.mongodb.net/test", {useNewUrlParser:true})

//const db=mongoose.connection
//db.on("error", (error)=>{console.error(error)})
//db.once("open", ()=>{console.log("Mongoose database has been successfully connected")})

let uri =
  `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;

  
/*const client = new MongoClient(uri);
async function run() {
 
 client.connect();

*/

//Cors/// Cross-Origin-Resource-Sharing
corsOptions={
  origin:"Access-Control-Allow-Origin", 
  origin:"*",
  credentials:"true",
  optionSuccessStatus:200
}

//Middlewares
//body parser and urlencode
app.use(express.json())
app.use(express.urlencoded({extended:false}))




const publicPath = path.join(__dirname  + 'pmsclient');
app.use(express.static(publicPath));

const indexhtmlpath= path.join( publicPath,"public")

//set views and public folder for use
//app.set(express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")


app.get("*", (req,res)=>{
  res.sendFile('/pmsclient/public/index.html')
}
)
  
//Cors 
app.use(cors(corsOptions))



// app.use(auth);
//use url paths as middlewares
app.use("/o/auth/passwordreset",  passwordresetRouter)
app.use("/o/auth/login",   loginRouter)
app.use("/o/auth/verify", verifyemailRouter)
app.use("/o/auth/signup",  signupRouter)
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
app.use(express.static(path.resolve(__dirname, ".pmsclient/build")));



//This will create a middleware.
//When you navigate to the root page, it would use the built react-app


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

const port= process.env.PORT || 8000;
app.listen(port, ()=>{`console.log("The PMS Server has successfully started in Port ${port}`})

//server(app)
//server()