import express from "express";
import dotenv from "dotenv";
import prueba from "./routers/prueba.js";
dotenv.config();

const appExpress = express();
appExpress.use("/prueba", prueba);

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
   console.log(`http://${config.hostname}:${config.port}`);
});