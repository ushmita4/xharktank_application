import express from 'express';//importing express from express
import dotenv from 'dotenv';// importing dotenv from env
import colors from 'colors';//importing colors from colors
import connectDB from './db/connect.js';//connecting to the database
import pitchRoutes from './routes/pitches.js';//connecting to the pitches API

const app=express();//this starts the server
app.use(express.json());
dotenv.config();



connectDB();//connecting the db

app.use('/pitches',pitchRoutes);

const PORT=8081;//this is the server
const port=PORT || 8081;//this is the port
const start=async()=>{//this is the start function
    try {//this is the try block
        app.listen(port,()=>console.log(`Server is running on port ${port}`.yellow.bold));//this statement confirms that the server is started
    } catch (error) {
       console.log(error); //this statement logs the error
    }
};

start();//this starts the server

