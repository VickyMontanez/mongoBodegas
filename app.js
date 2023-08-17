import express from "express";
import dotenv from "dotenv";
import appHis from "./routers/historiales.js";
import { appToken, appVerify } from "./limit/token.js";
import appbodegas from "./routers/bodegas.js";
dotenv.config();

const appExpress = express();


appExpress.use("/historiales", appVerify, appHis);
appExpress.use("/bodegas", appVerify, appbodegas )
appExpress.use("/token", appToken);



const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
   console.log(`http://${config.hostname}:${config.port}`);
});