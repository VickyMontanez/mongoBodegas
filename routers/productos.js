import express from "express";
import { limitQuery } from "../limit/config.js";
import { getProductos , getTotal, postProduct} from "../queries/productos.js";
import { appValidateData, appMiddlewareProducto, appDTOData } from "../middleware/productos.js";

const apProductos = express();
apProductos.use(express.json());

apProductos.get("/all", limitQuery(), appMiddlewareProducto, getProductos);
apProductos.get("/total", limitQuery(), appMiddlewareProducto, getTotal);
apProductos.post("/post",  limitQuery(), appValidateData, appMiddlewareProducto, appDTOData, postProduct)

export default apProductos;