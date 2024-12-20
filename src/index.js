// require("dotenv").config({path: './env'});

import connectDB from "./db/index.js";
import dotenv from "dotenv";
    

dotenv.config({path: './env'});



connectDB();










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