const mongoose= require("mongoose")
const express = require("express")
const createError= require("http-errors")
const helmet= require("helmet")
const compression= require('compression') 
const path= require("path")
const http= require('http')
const cookieParser = require("cookie-parser")

// configure server
const app= express()


//set the roots to be used for the app

const indexRouter= require("./routes/index")
const propertyMangerRouter= require("./routes/propertymanager")
const landLordRouter= require("./routes/landlord")
const tenantRouter= require("./routes/tenant")
const maintenanceRouter= require("./routes/maintenance")

//populateDatabase
//var populatedDatabase= require("./populatedb");
//populatedDatabase();

//configure MongoDb database
var db_url="mongodb://localhost:27017/pmsdatabase"
mongoose.connect(db_url, {useNewUrlParser:true})
const db=mongoose.connection
db.on("error", (error)=>{console.error(error)})
db.once("open", ()=>{console.log("Mongoose database has been successfully connected")})


//Middlewares
//body parser and urlencode
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//set views and public folder for use
app.set(express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")


//use url paths as middlewares
app.use("/", indexRouter)
/*app.use("/propertymanager", propertyMangerRouter)
app.use("/landlord", landLordRouter)
app.use("/tenant", tenantRouter)
app.use("/maintenance", maintenanceRouter)
*/
//middlewares
app.use(compression())
app.use(helmet())
app.use(cookieParser())


//catch 404 error and foward to error handler
app.use(function(req, res,next){
    next(createError(404));  
  })

  //error handler 
  app.use((err,req, res, next)=>{
      //render the error page
      res.status(err.status|| 500);
        console.log( "there was an error with the Server")
  })
 

//const server=http.createServer(app)
const port= 8000
const server= http.Server(app)
app.listen(8000, ()=>{console.log("The PMS Server has successfully started in Port 8000")})