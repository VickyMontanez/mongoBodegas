import express from "express";
import dotenv from "dotenv";
import { appToken, appVerify } from "./limit/token.js";
import appHis from "./routers/historiales.js";
import appbodegas from "./routers/bodegas.js";
import apProductos from "./routers/productos.js";
import appInventario from "./routers/inventarios.js"

dotenv.config();

const appExpress = express();


appExpress.use("/historiales", appVerify, appHis);
appExpress.use("/bodegas", appVerify, appbodegas );
appExpress.use("/productos", appVerify, apProductos);
appExpress.use("/inventarios", appVerify, appInventario)
appExpress.use("/token", appToken);


const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
   console.log(`http://${config.hostname}:${config.port}`);
});