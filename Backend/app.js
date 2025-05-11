const dotenv = require('dotenv'); 
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectToDB = require('./db/db');
const userRoutes = require('./routes/user.routes');


//connect to db
connectToDB()

//create express app
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//api ends points
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use('/users',userRoutes)

module.exports = app