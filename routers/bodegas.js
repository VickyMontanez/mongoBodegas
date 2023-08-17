import express from "express";
import { limitQuery } from "../limit/config.js";
import { getBodegas, postBodegas} from "../queries/bodegas.js";
import { appValidateData, appMiddlewareBodega, appDTOData } from "../middleware/bodegas.js";

const appbodegas = express();
appbodegas.use(express.json());

appbodegas.get("/abc", limitQuery(), appMiddlewareBodega, getBodegas);
appbodegas.post("/new", limitQuery(), appValidateData, appMiddlewareBodega, appDTOData, postBodegas)
export default appbodegas;