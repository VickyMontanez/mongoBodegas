import express from "express";
import { limitQuery } from "../limit/config.js";
import {postInventario} from "../queries/inventarios.js";
import { appValidateData, appMiddlewareInventario, appDTOData } from "../middleware/inventarios.js";

const appInventario = express();
appInventario.use(express.json());


/* 5. Make an EndPoint that allows inserting records in the table of
inventories, the input parameters should be
(id_product, id_warehouse, quantity).
• The table cannot repeat the combination of Warehouse I Product Therefore
therefore it will be necessary to validate if the income that is already being made
does it exist or is it a totally new combination.
• If it is a totally new combination, you must do an lnsert,
considering the data entered.
• If it is an existing combination, then an Update must be done
to this record, considering the sum of the existing quantity with the
new amount. */
/*
Example of Add a new "Inventario":
{
  "id": 31,
  "id_bodega": 5,
  "id_producto": 31,
  "cantidad": 300,
  "created_by": 3,
  "updated_by": 3,
  "created_at": "2023-08-18",
  "updated_at": "2023-08-18"
}

Example of Updated a existing "Inventario":
{
  "id": 31,
  "id_bodega": 1,
  "id_producto": 1,
  "cantidad": 300,
  "created_by": 3,
  "updated_by": 3,
  "created_at": "2023-08-18",
  "updated_at": "2023-08-18"
}
*/
appInventario.post("/post", limitQuery(), appValidateData, appMiddlewareInventario, appDTOData, postInventario);

export default appInventario;