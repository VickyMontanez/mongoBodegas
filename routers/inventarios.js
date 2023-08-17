import express from "express";
import { limitQuery } from "../limit/config.js";
import {postInventario} from "../queries/inventarios.js";
import { appValidateData, appMiddlewareBodega, appDTOData } from "../middleware/bodegas.js";

const appInventario = express();
appInventario.use(express.json());

appInventario.post("/post", postInventario);

export default appInventario;
