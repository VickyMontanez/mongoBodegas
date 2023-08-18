import express from "express";
import { limitQuery } from "../limit/config.js";
import { getProductos , getTotal, postProduct} from "../queries/productos.js";
import { appValidateData, appMiddlewareProducto, appDTOData } from "../middleware/productos.js";

const apProductos = express();
apProductos.use(express.json());

apProductos.get("/all", limitQuery(), appMiddlewareProducto, getProductos);

/* 3.Make an EndPoint that allows listing all the products in order
descending by the "Total" field. */
apProductos.get("/total", limitQuery(), appMiddlewareProducto, getTotal);

/* 4. Make an EndPoint that allows you to insert a product and in turn assign
an initial amount of it in the inventory table in one of the warehouses
by default */
/*
Example of Add a new product
{
    "id": 31,
    "nombre": "producto31",
    "descripcion": "producto31",
    "estado": 1,
    "created_by": 12,
    "updated_by": 12,
    "created_at": "2023-08-17",
    "updated_at": "2023-08-17"
} 
*/
apProductos.post("/post",  limitQuery(), appValidateData, appMiddlewareProducto, appDTOData, postProduct)

export default apProductos;