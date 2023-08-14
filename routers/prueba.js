import express from "express";
import { conx } from "../db_mg/atlas.js";

const appcampus = express();
appcampus.use(express.json());

appcampus.get("/", async (req, res) => {
    if(!req.rateLimit) return;
    let db = await conx();
    let colleccion = db.collection("bodegas");
    let result = await colleccion.find({}).toArray();
    res.send(result);
});

export default appcampus;