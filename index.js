// External imports 
const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser");

// Internal imports 
const { errorHandler, notFound } = require("./middlewares/common/errorHandler") ;


const app = express();
dotenv.config();

// DATABASE CONNECTION 
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log("database connection successfully"))
    .catch( (err) => console.log(err))

// REQUEST PARSER 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// COOKIE PARSER  
app.use(cookieParser(process.env.COOKIE_SECRATE));

// ROUTING 


// 404 NOT FOUND
app.use(notFound); 

// common error handler 
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
})
