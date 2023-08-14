import express from "express";
import dotenv from "dotenv";
import appHis from "./routers/historiales.js";
dotenv.config();

const appExpress = express();
appExpress.use("/historiales", appHis);

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
   console.log(`http://${config.hostname}:${config.port}`);
});