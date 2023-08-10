import express from "express";
import dotenv from "dotenv";

const appExpress = express();
dotenv.config();

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});