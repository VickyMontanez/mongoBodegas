import { Router } from "express";
import { limitQuery } from "../limit/config.js";
import { getBodegas, postBodegas} from "../controllers/bodegas.js";
const appbodegas = Router();

appbodegas.get("/abc", getBodegas);
/* appbodegas.post("/new", postBodegas) */
appbodegas.post('/new', async(req, res) => {
    if(!req.rateLimit) return;
        let result = await bodegas.insertOne(req.body);
        res.status(201).send(result);
});
export default appbodegas;