import express from "express";
import { limitQuery } from "../limit/config.js";
import { getProductos , getTotal, postProduct} from "../queries/productos.js";
import { appValidateData, appMiddlewareBodega, appDTOData } from "../middleware/productos.js";

const apProductos = express();
apProductos.use(express.json());

apProductos.get("/all", limitQuery(), appMiddlewareBodega, getProductos);
apProductos.get("/total", limitQuery(), appMiddlewareBodega, getTotal);
apProductos.post("/post",  limitQuery(), appValidateData, appMiddlewareBodega, appDTOData, postProduct)

export default apProductos;