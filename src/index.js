// require("dotenv").config({path: './env'});

import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({path: './env'});



connectDB()
.then(()=>{

    app.listen(process.env.PORT || 9000,()=>{
        console.log(`Server is Runnig at PORT : ${process.env.PORT}` );
    })
    app.on('error',(err)=>{
        console.log('ERROR : ',err);
        throw error;
    })
    
})
.catch((err) => {  
console.log('MongoDB Connection failed', err);
})








/*

import express from "express";
const app = express();

;(   async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error", (err) => {
            console.log("ERROR ", err);
            throw err;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR ", error)
        throw err
    }
})()
    */