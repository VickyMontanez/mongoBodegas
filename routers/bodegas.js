import express from "express";
import { limitQuery } from "../limit/config.js";
import { getBodegas, postBodegas} from "../queries/bodegas.js";
import { appValidateData, appMiddlewareBodega, appDTOData } from "../middleware/bodegas.js";

const appbodegas = express();
appbodegas.use(express.json());

//1. Get all bodegas alphabetically
appbodegas.get("/abc", limitQuery(), appMiddlewareBodega, getBodegas);

// 2.Make an EndPolnt that allows you to create a Bodega.
/*
Example pf a new "bodega"
{
    "id": 31,
    "nombre": "bodegaLOL",
    "id_responsable": 20,
    "estado": 1,
    "created_by": 10,
    "updated_by": 10,
    "created_at": "2023-08-17",
    "updated_at": "2023-08-17"
} */
appbodegas.post("/new", limitQuery(), appValidateData, appMiddlewareBodega, appDTOData, postBodegas)
export default appbodegas;